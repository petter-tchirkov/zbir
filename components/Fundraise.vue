<script setup lang="ts">
const { title, text, folder, link } = defineProps<{
  title: string;
  text: string;
  folder: string;
  link: string;
}>();
</script>
<template>
  <div class="mb-20 px-4 lg:px-0">
    <h2 class="text-4xl font-bold text-center mb-4 text-red">
      {{ title }}
    </h2>
    <p class="text-center text-xl mb-10">
      {{ text }}
    </p>
    <Swiper
      class="mb-10"
      :modules="[SwiperAutoplay]"
      :slides-per-view="1"
      :space-between="100"
      :centered-slides="true"
      :height="500"
      :loop="true"
      :effect="'creative'"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="slide in 6"
        :key="slide"
        class="border-4 rounded-3xl border-red"
      >
        <img
          :src="`/images/${folder}/${slide}.png`"
          class="rounded-3xl object-cover w-full h-full"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
    <Button :link="link" :is-blank="true" text="Детальніше" />
  </div>
</template>
