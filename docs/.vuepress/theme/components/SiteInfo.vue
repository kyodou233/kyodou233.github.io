<template>
  <div class="grid grid-cols-3 gap-4 text-center">
    <div class="p-3 rounded-xl bg-white/5">
      <div class="text-2xl font-bold">{{ postCount }}</div>
      <div class="text-xs text-neutral-400">文章</div>
    </div>

    <div class="p-3 rounded-xl bg-white/5">
      <div class="text-2xl font-bold">{{ tagCount }}</div>
      <div class="text-xs text-neutral-400">标签</div>
    </div>

    <div class="p-3 rounded-xl bg-white/5">
      <div class="text-2xl font-bold">{{ categoryCount }}</div>
      <div class="text-xs text-neutral-400">分类</div>
    </div>
  </div>

  <div class="mt-4 text-sm text-neutral-400 text-center">
    已运行
    <span class="font-mono ml-1">{{ runningTime }}</span>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useSiteData } from 'vuepress/client'

const site = useSiteData()

// 👉 从插件注入的数据拿
const postCount = computed(() => site.value.siteInfo?.postCount || 0)
const tagCount = computed(() => site.value.siteInfo?.tagCount || 0)
const categoryCount = computed(() => site.value.siteInfo?.categoryCount || 0)

const runningTime = ref('')
const siteCreatedDate = new Date('2026-02-24')

let timer = null

const pad = (n) => String(n).padStart(2, '0')

const updateRunningTime = () => {
  const now = Date.now()
  const diff = now - siteCreatedDate.getTime()

  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff / 3600000) % 24)
  const m = Math.floor((diff / 60000) % 60)
  const s = Math.floor((diff / 1000) % 60)

  runningTime.value = `${d}天 ${pad(h)}:${pad(m)}:${pad(s)}`
}

onMounted(() => {
  updateRunningTime()

  const tick = () => {
    updateRunningTime()
    timer = setTimeout(tick, 1000)
  }
  tick()
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>