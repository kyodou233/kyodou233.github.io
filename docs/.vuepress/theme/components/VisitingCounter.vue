<template>
  <p>总{{ count }}次访问</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCount, addCount } from '../plugins/visiting-counter'

const count = ref(0)

onMounted(async () => {
  // 防止刷新狂加
  if (!localStorage.getItem('visited')) {
    await addCount()
    localStorage.setItem('visited', '1')
  }

  count.value = await getCount()
})
</script>