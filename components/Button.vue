<script setup lang="ts">
const { text, link } = defineProps<{ text: string; link: string }>();
</script>
<template>
  <NuxtLink
    :to="link"
    class="bg-red rounded-full px-10 py-2 text-xl font-bold text-white"
    >{{ text }}</NuxtLink
  >
</template>
