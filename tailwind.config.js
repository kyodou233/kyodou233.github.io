/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./docs/**/*.md",
    "./docs/.vuepress/**/*.{vue, js, ts, jsx, tsx}",
  ],
  corePlugins: {
    // 禁用 Tailwind 的全局样式重置
    preflight: false, 
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

