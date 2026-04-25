export const siteInfoPlugin = () => ({
  name: 'vuepress-plugin-site-info',

  onInitialized(app) {
    const pages = app.pages || []

    // 👉 只统计 blog 目录（按你的结构）
    const blogPages = pages.filter((page) =>
      page.filePathRelative?.startsWith('blog/')
    )

    const tags = new Set()
    const categories = new Set()

    blogPages.forEach((page) => {
      const fm = page.frontmatter || {}

      // 👉 统计标签
      if (fm.tags) {
        const arr = Array.isArray(fm.tags) ? fm.tags : [fm.tags]
        arr.forEach((t) => t && tags.add(t))
      }

      // 👉 统计分类
      if (fm.category || fm.categories) {
        const c = fm.categories || fm.category
        const arr = Array.isArray(c) ? c : [c]
        arr.forEach((item) => item && categories.add(item))
      }
    })

    // 👉 注入到全局 siteData（关键）
    app.siteData.siteInfo = {
      postCount: blogPages.length,
      tagCount: tags.size,
      categoryCount: categories.size,
      updatedAt: new Date().toISOString(),
    }

    console.log('[site-info] generated:', app.siteData.siteInfo)
  },
})