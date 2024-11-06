<script setup lang="ts">
const { text, link } = defineProps<{ text: string; link: string }>();
</script>
<template>
  <NuxtLink
    :to="link"
    class="border-4 border-red px-10 py-2 text-xl font-bold hover:bg-red transition-all uppercase"
    >{{ text }}</NuxtLink
  >
</template>
