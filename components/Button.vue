<script setup lang="ts">
const { text, link, isBlank } = defineProps<{
  text: string;
  link: string;
  isBlank?: boolean;
}>();
</script>
<template>
  <NuxtLink
    :to="link"
    :target="isBlank ? '_blank' : ''"
    class="border-4 border-red px-10 py-2 text-xl font-bold hover:bg-red transition-all uppercase"
    >{{ text }}</NuxtLink
  >
</template>
