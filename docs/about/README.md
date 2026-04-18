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
                class 我 extends Human {}
            </p>
        </div>
        <!-- motto -->
        <div class="md:col-span-1 rounded-2xl p-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                座右铭
            </p>
            <h2>
                挽狂澜于既倒，扶大厦之将倾。
            </h2>
        </div>
        <!-- 生活 -->
        <div class="md:col-span-1 rounded-2xl p-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                生活
            </p>
            <h2 class="text-2xl font-bold mb-4">
                我的生活
            </h2>
            <div class="w-full h-40 rounded-full border-8 border-cyan-400/30 flex items-center justify-center text-sm">
                图表区域
            </div>
        </div>
        <!-- 站点信息 -->
        <div class="md:col-span-1 rounded-2xl p-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <p class="text-sm">
                站点信息
            </p>
            <h2 class="text-2xl font-bold mb-4">
                站点信息
            </h2>
            <div class="grid grid-cols-2 gap-4 text-sm text-center">
                <div>
                    <p class="text-xl">
                        7
                    </p>
                    <p>
                        文章
                    </p>
                </div>
                <div>
                    <p class="text-xl">
                        11
                    </p>
                    <p>
                        标签
                    </p>
                </div>
                <div>
                    <p class="text-xl">
                        2
                    </p>
                    <p>
                        分类
                    </p>
                </div>
                <div>
                    <p class="text-xl">
                        1
                    </p>
                    <p>
                        评论
                    </p>
                </div>
            </div>
        </div>
        <!-- 访问统计 -->
        <div class="md:col-span-1 rounded-2xl p-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <h2 class="text-2xl font-bold mb-4">
                访问统计
            </h2>
            <p>
                <VisitingCounter />
            </p>
        </div>
        <!-- 关于我 -->
        <div class="md:col-span-3 rounded-2xl p-6 border
        bg-white text-gray-800 border-gray-200
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        dark:bg-gradient-to-br dark:from-[#1a1f2b] dark:to-[#0f172a]
        dark:text-gray-200 dark:border-white/10
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
            <h2 class="text-xl font-semibold mb-2">
                小站历史
            </h2>
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
`)

</script>

