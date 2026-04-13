import { path } from "@vuepress/utils";
import { writeFileSync } from "fs";

/**
 * 站点统计插件
 * 在编译时统计文章数量、标签、分类等信息
 */
export const siteInfoPlugin = () => ({
    name: "vuepress-plugin-site-info",

    onInitialized(app) {
        console.log("[site-info-plugin] Generating Site Info");
        // 收集所有页面信息
        const pages = app.pages;
        const blogPages = pages.filter((page) => {
            // 过滤出博客文章（排除首页和非文章页面）
            return (
                page.filePathRelative?.startsWith("blog/") &&
                !page.frontmatter.home &&
                !page.frontmatter.layout
            );
        });

        // 统计数据
        const stats = {
            postCount: blogPages.length,
            tags: new Set(),
            categories: new Set(),
        };

        // 遍历所有文章收集信息
        blogPages.forEach((page) => {
            // 收集标签
            if (page.frontmatter.tags && Array.isArray(page.frontmatter.tags)) {
                page.frontmatter.tags.forEach((tag) => stats.tags.add(tag));
            }

            // 收集分类 - 从文件路径中提取（blog/ 目录下的第一级子目录）
            if (page.filePathRelative) {
                // 移除 'blog/' 前缀，然后取第一个目录段作为分类
                const relativePath = page.filePathRelative.replace("blog/", "");
                const category = relativePath.split("/")[0];
                if (category && category !== relativePath) {
                    // 只有在有子目录的情况下才认为是分类
                    stats.categories.add(category);
                }
            }
        });

        // 转换为最终格式
        const statsData = {
            postCount: stats.postCount,
            tagCount: stats.tags.size,
            categoryCount: stats.categories.size,
            updatedAt: new Date().toISOString(),
        };

        // 生成 JSON 文件到 public 目录
        const outputPath = path.resolve(app.dir.public(), "site-info.json");
        writeFileSync(outputPath, JSON.stringify(statsData, null, 2));

        console.log("[site-info-plugin] Site Info Generated:\n", statsData);
    },
});
