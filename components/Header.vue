<script setup lang="ts">
const isMobileMenuVisible = ref(false);
</script>
<template>
  <header class="absolute top-0 left-0 w-full">
    <div
      class="flex justify-between items-center py-4 px-4 max-w-screen-2xl m-auto"
    >
      <div class="flex gap-2 items-center">
        <img src="/images/3mb.webp" class="h-16 lg:h-20" alt="" />
        <div class="flex flex-col text-red font-bold font-rexlia text-2xl">
          <span>NIHIL</span>
          <span>OBSTAT</span>
        </div>
      </div>
      <nav
        class="w-screen h-screen lg:w-auto lg:h-auto bg-red lg:bg-transparent absolute top-0 left-0 lg:relative flex flex-col lg:flex-row gap-8 lg:gap-4 text-5xl pt-20 pl-10 lg:p-0 lg:text-2xl transition-all z-50"
        :class="isMobileMenuVisible ? 'block' : 'hidden lg:flex'"
      >
        <NuxtLink class="hover:text-dark-red transition-all" to="/"
          >Головна</NuxtLink
        >
        <NuxtLink class="hover:text-dark-red transition-all" to="/about"
          >Про нас</NuxtLink
        >
        <NuxtLink class="hover:text-dark-red transition-all" to="/fundraise"
          >Збори</NuxtLink
        >
        <button @click="isMobileMenuVisible = false" class="lg:hidden">
          <img
            src="/icons/close.svg"
            class="h-12 absolute top-4 right-4"
            alt=""
          />
        </button>
      </nav>
      <Button
        link="https://send.monobank.ua/jar/3UwaxWXf8T"
        :is-blank="true"
        :is-shiny="true"
        text="Посилання на збір"
        class="hidden lg:block"
      />
      <button @click="isMobileMenuVisible = true" class="lg:hidden">
        <img class="h-12" src="/icons/burger.svg" alt="" />
      </button>
    </div>
    <div class="px-4 lg:hidden">
      <Button
        class="w-full block text-center"
        :is-shiny="true"
        :is-blank="true"
        text="Посилання на збір"
        link="https://send.monobank.ua/jar/3UwaxWXf8T"
      />
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply lg:text-red;
}
</style>
