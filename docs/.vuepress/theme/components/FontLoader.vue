<script setup>
import { onMounted } from 'vue'

const fonts = [
    {
        name: '寒蝉云墨黑1',
        url: '/ChillYunmoGothicBold.otf', // ⚠️ 路径必须是 / 开头
        weight: 'normal',
        style: 'normal'
    }
]

onMounted(async () => {
    for (const font of fonts) {
        try {
            const f = new FontFace(
                font.name,
                `url(${font.url})`,
                {
                    weight: font.weight,
                    style: font.style
                }
            )

            const loaded = await f.load()
            document.fonts.add(loaded)

            console.log('字体加载成功:', font.name)
        } catch (err) {
            console.error('字体加载失败:', font.name, err)
        }
    }

    // 加个标记，方便 CSS 控制
    document.body.classList.add('font-loaded')
})
</script>

<template>
    <!-- 这个组件不需要渲染任何内容 -->
    <div style="display:none;"></div>
</template>