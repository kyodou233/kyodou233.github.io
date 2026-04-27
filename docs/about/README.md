--- 
pageLayout: page 
---

<div class="relative max-w-6xl mx-auto p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        <!-- 顶部介绍 -->
        <div class="md:col-span-2 rounded-2xl p-6 border
        bg-gradient-to-r from-cyan-500/70 to-blue-500/70 border-white/10 text-white
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <p class="text-sm">
                泥嚎(*´▽｀)ノノ
            </p>
            <h1 class="text-3xl font-bold mt-2">
                这里是吕蘧堂 / BA4SSP / ro kyodou
            </h1>
            <p class="text-sm mt-2">
                miao
            </p>
        </div>
        <!-- motto -->
        <div class="md:col-span-1 rounded-2xl px-6 pb-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <h2>
                1233544653
            </h2>
        </div>
        <!-- 生活 -->
        <div class="md:col-span-1 rounded-2xl px-6 pb-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                我的生活
            </p>
        </div>
        <!-- 站点信息 -->
        <div class="md:col-span-1 rounded-2xl px-6 pb-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                站点信息
            </p>
            <SiteInfo />
        </div>
        <!-- 访问统计 -->
        <div class="md:col-span-1 rounded-2xl px-6 pb-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                访问统计
            </p>
            <p>
                <VisitingCounter />
            </p>
        </div>
        <!-- 关于我 -->
        <div class="md:col-span-3 rounded-2xl px-6 pb-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                小站历史
            </p>
            <p style="white-space: pre-line;">
                {{ history }}
            </p>
        </div>
    </div>
</div>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const history = ref(`
    26.2.24 建站了！用的是vuepress，还在rc阶段。 
    ······中间忘了 
    26.某一天 改成vitepress 
    26.the day after 某一天 改回vuepress  
    26.4.11 小站历史出生日
    26.4.27 因为之前直接在css里面设置font-face，vite会报错（为什么会报错！！！），所以加了一个FontLoader.vue组件
`)

</script>

