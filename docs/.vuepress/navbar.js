/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.js` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  //{ text: '首页', link: '/' },
  //{ text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  { text: '文章', link: '/blog/' },
  { text: '关于', link: '/about/' },
  { text: 'Test', link: '/test/' },
  //{
  //  text: '笔记',
  //  items: [{ text: '示例', link: '/demo/README.md' }]
  //},
])
