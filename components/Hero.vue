<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
const { width } = useWindowSize();
</script>
<template>
  <div class="bg-black relative -z-10">
    <img
      :src="width > 768 ? '/images/anne.jpg' : '/images/anne-m.jpg'"
      class="w-screen opacity-20 h-screen object-cover"
      alt=""
    />
    <div class="absolute bottom-[20%] left-0 w-full">
      <h2
        class="text-5xl lg:text-[120px] w-full font-bold mb-10 text-center flex flex-col items-center"
      >
        Взвод БпАК 3МБ 155 ОМБр<br />
        <img src="/images/155.webp" alt="" class="w-40 h-40" />
        <span class="text-red">Анни Київської</span>
      </h2>
    </div>
    <div class="back h-20"></div>
  </div>
</template>

<style scoped></style>
