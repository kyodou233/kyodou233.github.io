<template></template>

<script setup>
import { onMounted } from "vue";

const imageModules = import.meta.glob("/bg/*.{jpg,png,webp,jpeg}", {
  eager: true,
  query: '?url',
  import: 'default',
});

const imageList = Object.values(imageModules);

onMounted(() => {
  if (imageList.length === 0) return;

  const randomImg = imageList[Math.floor(Math.random() * imageList.length)];
  const homeElement = document.querySelector(".vp-home");

  if (homeElement) {
    homeElement.style.backgroundImage = `url('${randomImg}')`;
  }
});
</script>