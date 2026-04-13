<template>
  <div class="site-info-card">
    <h3 class="site-info-title">📊 站点信息</h3>
    
    <div class="site-info-content">
      <!-- 文章数量 -->
      <div class="site-info-item">
        <span class="site-info-number">{{ stats.postCount ?? 0 }}</span>
        <span class="site-info-label">文章</span>
      </div>
      
      <!-- 标签数量 -->
      <div class="site-info-item">
        <span class="site-info-number">{{ stats.tagCount ?? 0 }}</span>
        <span class="site-info-label">标签</span>
      </div>
      
      <!-- 分类数量 -->
      <div class="site-info-item">
        <span class="site-info-number">{{ stats.categoryCount ?? 0 }}</span>
        <span class="site-info-label">分类</span>
      </div>
    </div>
    
    <!-- 网站运行时间 -->
    <div class="site-running-time">
      <span class="running-time-label">🎉 本站已运行：</span>
      <span class="running-time-value">{{ runningTime }}</span>
    </div>
  </div>
</template>

<script setup>
//import { siteInfoPlugin } from '../plugins/site-info.js'
import { ref, onMounted, onUnmounted } from 'vue'

const siteCreatedDate = ref(new Date('2026-02-24')) // 修改为你的站点创建日期
const runningTime = ref('')
let timer = null

const stats = ref({
  postCount: 0,
  tagCount: 0,
  categoryCount: 0,
  updatedAt: ''
})

// 计算运行时间
const updateRunningTime = () => {
  const now = new Date()
  const created = siteCreatedDate.value
  const diff = now.getTime() - created.getTime()
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  
  runningTime.value = `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`
}

onMounted(async () => {
  // 立即更新一次
  updateRunningTime()
  
  // 每秒更新一次运行时间
  timer = setInterval(updateRunningTime, 1000)
  
  try {
    // 加载站点统计信息
    const response = await fetch('/site-info.json')
    const data = await response.json()
    stats.value = data
  } catch (error) {
    console.error('加载站点信息失败:', error)
  }
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.site-info-card {
  padding: 20px;
  background: var(--body-bg-color);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.site-info-title {
  margin: 0 0 20px 0;
  font-size: 1.25rem;
  color: var(--text-color);
  text-align: center;
}

.site-info-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.site-info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(125, 125, 125, 0.1);
  border-radius: 8px;
  min-width: 80px;
  transition: background-color 0.3s ease;
}

.site-info-item:hover {
  background: rgba(125, 125, 125, 0.15);
}

.site-info-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--theme-color);
}

.site-info-label {
  font-size: 0.875rem;
  color: var(--text-color-light);
}

.site-running-time {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  margin-top: 15px;
  background: rgba(125, 125, 125, 0.08);
  border-radius: 8px;
  font-size: 0.875rem;
}

.running-time-label {
  color: var(--text-color-light);
}

.running-time-value {
  color: var(--theme-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .site-info-content {
    gap: 10px;
  }
  
  .site-info-item {
    padding: 8px 12px;
    min-width: 70px;
  }
  
  .site-info-number {
    font-size: 1.25rem;
  }
}
</style>