<script setup lang="ts">
const fundraises = ref([
  {
    title: "Антена активна 2E Tactical MAVKA для DJI, Autel(V2), FPV",
    text: "Трьохдіапазонна активна спрямована антена 2E MAVKA забезпечить підсилення сигналу між пультом і дроном. Малошумні високоякісні підсилювачі гарантують потужність по 10 Вт збільшену дальність польоту та стабільність сигналу. Ємність акумулятора становить 8 000 мА год, для швидкого заряджання призначений порт USB Type-C. Модель сумісна з пультами, переробленими під Alientech, «Авенджерс», «ФорХавкс», «Аліса» тощо (за використання кабелів 2Е та адаптерів 2Е). У комплектованні є жорсткий захисний кейс для надійного транспортування та зберігання. Трьохдіапазонна активна спрямована антена 2E MAVKA – це вершина продуктивності підсилення сигналу між пультом і дроном.",
    folder: "mavka",
    link: "https://2e.ua/en/products/active-antenna-2e-mavka-for-dji-autel-v2-fpv/",
  },
  {
    title: "FPV дрони",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis perspiciatis laborum itaque iure aut, neque aperiam eveniet reprehenderit non harum ab, quidem nobis sit dignissimos voluptatem. Aliquam, non accusamus architecto dignissimos minima cumque delectus magnam! Facere sequi maiores quod! Vel aliquam consequuntur inventore atque deleniti officiis et eligendi alias dicta nisi. Necessitatibus maiores esse excepturi a iusto, quisquam eum modi earum quod. Dolorum non aspernatur quisquam vero, vitae dolor sequi hic neque fuga quis. Nostrum eius ipsa nam temporibus necessitatibus eveniet, perspiciatis unde fuga beatae neque rerum sapiente quas similique dicta non quidem consectetur illum maiores minus ipsum cupiditate.",
    folder: "fpv",
    link: "https://www.dji.com/de/support/product/dji-fpv",
  },
  {
    title: "Розвідувальні дрони",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quis perspiciatis laborum itaque iure aut, neque aperiam eveniet reprehenderit non harum ab, quidem nobis sit dignissimos voluptatem. Aliquam, non accusamus architecto dignissimos minima cumque delectus magnam! Facere sequi maiores quod! Vel aliquam consequuntur inventore atque deleniti officiis et eligendi alias dicta nisi. Necessitatibus maiores esse excepturi a iusto, quisquam eum modi earum quod. Dolorum non aspernatur quisquam vero, vitae dolor sequi hic neque fuga quis. Nostrum eius ipsa nam temporibus necessitatibus eveniet, perspiciatis unde fuga beatae neque rerum sapiente quas similique dicta non quidem consectetur illum maiores minus ipsum cupiditate.",
    folder: "mavic",
    link: "https://www.dji.com/de/support/product/dji-fpv",
  },
]);
</script>
<template>
  <div class="max-w-screen-xl m-auto">
    <Header />
    <h1 class="text-5xl text-center mb-10">Активні збори</h1>
    <Fundraise
      v-for="f in fundraises"
      :title="f.title"
      :text="f.text"
      :folder="f.folder"
      :link="f.link"
    />
  </div>
  <Footer />
</template>
