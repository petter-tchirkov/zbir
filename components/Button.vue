<script setup lang="ts">
const { text, link, isBlank, isShiny } = defineProps<{
  text: string;
  link: string;
  isBlank?: boolean;
  isShiny?: boolean;
}>();
</script>
<template>
  <NuxtLink
    :to="link"
    :target="isBlank ? '_blank' : ''"
    class="border-4 border-red px-10 py-2 text-xl font-bold hover:bg-red transition-all uppercase block"
    :class="isShiny ? 'shiny' : ''"
    >{{ text }}</NuxtLink
  >
</template>

<style scoped>
.shiny {
  position: relative;
}
.shiny:before {
  position: absolute;
  content: "";
  display: inline-block;
  animation: shiny 5s ease-in-out infinite;
  width: 30px;
  top: 0;
  left: 0;
  height: 100%;
}

@keyframes shiny {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}
</style>
