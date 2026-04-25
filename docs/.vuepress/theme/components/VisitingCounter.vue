<template>
  <p>总{{ count }}次访问哦</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCount, addCount } from '../plugins/visiting-counter'

const count = ref(0)

onMounted(async () => {
  await addCount()              // 每次加载页面都 +1
  count.value = await getCount()
})
</script>