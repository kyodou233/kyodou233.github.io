<template>
    <div class="rounded-2xl p-6 bg-[#121722] border border-white/10">
        <p class="text-sm">site info</p>
        <h2 class="text-2xl font-bold mb-4">站点信息</h2>

        <div v-if="loading" class="">加载中...</div>

        <div v-else class="grid grid-cols-2 gap-4 text-sm text-center">
            <div>
                <p class="text-xl">{{ stats.postCount }}</p>
                <p class="">文章</p>
            </div>
            <div>
                <p class="text-xl">{{ stats.tagCount }}</p>
                <p class="">标签</p>
            </div>
            <div>
                <p class="text-xl">{{ stats.categoryCount }}</p>
                <p class="">分类</p>
            </div>
            <div>
                <p class="text-xl">{{ visitCount }}</p>
                <p class="">访问</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

// ✅ 使用 Vite 的 import.meta.glob（关键！）
// 可以在“前端”获取所有 md 文件（构建时转成模块）
// 🔥 需要 eager:true 才能拿到 frontmatter
// ❗ 修正路径（VuePress 中不能用 /docs 开头）
// 当前组件在 .vuepress/theme/components 下，需要往上找 docs
// 使用 raw 格式读取 .md 文件
const modules = import.meta.glob("../../../**/*.md", {
    eager: true,
    as: "raw",
});

// 统计数据
const stats = computed(() => {
    const files = Object.entries(modules);

    const tags = new Set();
    const categories = new Set();

    files.forEach(([path, content]) => {
        // 解析 frontmatter
        const match = content.match(/^---\n([\s\S]*?)\n---/);
        let fm = {};

        if (match) {
            match[1].split("\n").forEach((line) => {
                const [key, ...rest] = line.split(":");
                if (!key) return;
                const value = rest.join(":").trim();
                fm[key.trim()] = value;
            });
        }

        // tags 处理
        if (Array.isArray(fm.tags)) {
            fm.tags.forEach((tag) => tags.add(tag));
        }

        // 分类（按目录）
        const parts = path.replace("../../../", "").split("/");
        if (parts.length > 1) {
            categories.add(parts[0]);
        }
    });

    return {
        postCount: files.length,
        tagCount: tags.size,
        categoryCount: categories.size,
    };
});

// 本地访问量
const visitCount = ref(0);
const count = Number(localStorage.getItem("visit-count") || 0) + 1;
localStorage.setItem("visit-count", count);
visitCount.value = count;

const loading = ref(false);
</script>
