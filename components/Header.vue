<template>
  <header>
    <div
      class="flex justify-between items-center py-4 px-4 max-w-screen-xl m-auto"
    >
      <img src="/images/logo.png" class="h-20" alt="" />
      <nav class="flex gap-4 text-2xl">
        <NuxtLink to="/">Головна</NuxtLink>
        <NuxtLink to="/about">Про нас</NuxtLink>
        <NuxtLink to="/fundraise">Збори</NuxtLink>
      </nav>
      <Button link="/fundraise" text="Підтримати" />
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-red;
}
</style>
