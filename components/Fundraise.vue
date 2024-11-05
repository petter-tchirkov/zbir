<script setup lang="ts">
const { title, text, folder, link } = defineProps<{
  title: string;
  text: string;
  folder: string;
  link: string;
}>();
</script>
<template>
  <div class="mb-20">
    <h2 class="text-4xl font-bold text-center mb-4">
      {{ title }}
    </h2>
    <p class="text-center text-xl mb-10">
      {{ text }}
    </p>
    <Swiper
      class="mb-10"
      :modules="[SwiperAutoplay]"
      :slides-per-view="2"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="slide in 6" :key="slide">
        <img
          :src="`/images/${folder}/${slide}.jpg`"
          class="rounded-3xl"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
    <Button :link="link" text="Детальніше" />
  </div>
</template>
