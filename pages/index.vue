<script setup lang="ts"></script>
<template>
  <main>
    <Header />
    <article class="relative mb-40 max-w-screen-xl m-auto">
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="slide in 3" :key="slide">
          <div class="bg-black rounded-3xl">
            <img
              :src="`/images/main-slider/${slide}.jpg`"
              class="opacity-30 rounded-3xl"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="absolute left-10 top-10 z-10">
        <h2 class="text-5xl w-80 font-bold mb-10">Взвод БпАК 3МБ 155 ОМБр</h2>
        <p class="text-xl max-w-screen-md">
          Безпілотники стали важливим елементом сучасних військових операцій,
          забезпечуючи армії значну перевагу на полі бою. Вони використовуються
          для розвідки, спостереження, коригування артилерійського вогню та
          надання актуальної інформації про розташування ворога в реальному
          часі. Безпілотні апарати також здатні виконувати ударні завдання,
          наносячи точкові удари по стратегічних цілях.
        </p>
      </div>
    </article>
    <article class="max-w-screen-xl m-auto">
      <h2 class="text-center text-5xl font-bold mb-20">Діяльність</h2>
      <div class="flex gap-10 flex-1 mb-20">
        <img
          src="public/images/recon.jpg"
          class="rounded-3xl max-w-screen-md"
          alt=""
        />
        <div class="flex flex-col gap-4 justify-between">
          <h3 class="text-4xl font-bold text-red">Розвідка</h3>
          <p class="text-2xl">
            Розвідка за допомогою безпілотних літальних апаратів (БПЛА) має
            стратегічне значення, оскільки дозволяє отримувати точну інформацію
            в реальному часі без ризику для життя особового складу. Це дає змогу
            ефективно планувати операції, оперативно реагувати на зміни на полі
            бою та знижувати витрати ресурсів, одночасно підвищуючи точність
            прийнятих рішень.
          </p>
          <a href="/about" class="bg-red px-10 py-4 rounded-full text-2xl"
            >Детальніше</a
          >
        </div>
      </div>
      <div class="flex gap-10 flex-1 mb-20">
        <div class="flex flex-col gap-4 justify-between">
          <h3 class="text-4xl mb-4 font-bold text-right text-red">
            Коригування
          </h3>
          <p class="text-2xl text-right">
            Коригування артилерійського вогню за допомогою БПЛА є важливим
            елементом сучасної бойової тактики, оскільки дозволяє в реальному
            часі коригувати вогонь, точно визначати позиції цілей і
            забезпечувати високу точність ударів. Це значно підвищує
            ефективність артилерії, зменшує витрати боєприпасів та мінімізує
            ризик випадкових втрат серед власних сил.
          </p>
          <a
            href="/about"
            class="bg-red px-10 py-4 rounded-full text-2xl text-right"
            >Детальніше</a
          >
        </div>
        <img
          src="public/images/artillery.jpg"
          class="max-w-screen-md rounded-3xl"
          alt=""
        />
      </div>
      <div class="flex gap-10 flex-1 mb-20">
        <img
          src="public/images/fpv.jpg"
          class="max-w-screen-md rounded-3xl"
          alt=""
        />
        <div class="flex flex-col gap-4 justify-between">
          <h3 class="text-4xl mb-4 font-bold text-red">Ударні БпЛА</h3>
          <p class="text-2xl">
            Ударні БПЛА здатні здійснювати високоточні удари по важливих цілях з
            мінімальним ризиком для особового складу. Завдяки своїй маневреності
            та здатності діяти на великих відстанях, ці апарати можуть знищувати
            ворожі командні пункти, техніку, складські приміщення та навіть
            високопрофільні цілі, знижуючи потенціал супротивника.
          </p>
          <a href="/about" class="bg-red px-10 py-4 rounded-full text-2xl"
            >Детальніше</a
          >
        </div>
      </div>
    </article>
    <Footer />
  </main>
</template>
