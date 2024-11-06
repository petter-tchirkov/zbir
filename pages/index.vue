<script setup lang="ts"></script>
<template>
  <main>
    <Header />
    <Hero class="mb-40" />
    <article class="relative mb-40 max-w-screen-2xl m-auto px-4 lg:px-0">
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
      <div class="lg:absolute left-10 top-10 z-10 pt-10 lg:pt-0">
        <h2
          class="text-5xl w-full lg:w-80 font-bold mb-10 text-center lg:text-left uppercase"
        >
          Взвод БпАК 3МБ 155 ОМБр імені Анни Київської
        </h2>
        <p class="text-2xl lg:text-xl text-center lg:text-left max-w-screen-md">
          Безпілотники стали важливим елементом сучасних військових операцій,
          забезпечуючи армії значну перевагу на полі бою. Вони використовуються
          для розвідки, спостереження, коригування артилерійського вогню та
          надання актуальної інформації про розташування ворога в реальному
          часі. Безпілотні апарати також здатні виконувати ударні завдання,
          наносячи точкові удари по стратегічних цілях.
        </p>
      </div>
    </article>
    <div class="bg-gray-200 py-10">
      <article class="max-w-screen-2xl m-auto px-4 lg:px-0">
        <h2 class="text-center text-[60px] text-red font-bold mb-20">
          Діяльність
        </h2>
        <div class="flex flex-col lg:flex-row gap-10 flex-1 mb-20">
          <img
            src="public/images/recon.jpg"
            class="rounded-3xl max-w-screen-md"
            alt=""
          />
          <div class="flex flex-col gap-4 justify-between">
            <h3 class="text-4xl font-bold text-red text-center lg:text-left">
              Розвідка
            </h3>
            <p class="text-2xl text-center lg:text-left text-gray-900">
              Розвідка за допомогою безпілотних літальних апаратів (БПЛА) має
              стратегічне значення, оскільки дозволяє отримувати точну
              інформацію в реальному часі без ризику для життя особового складу.
              Це дає змогу ефективно планувати операції, оперативно реагувати на
              зміни на полі бою та знижувати витрати ресурсів, одночасно
              підвищуючи точність прийнятих рішень.
            </p>
            <Button
              class="text-gray-900 text-center lg:text-left"
              text="Детальніше"
              link="/about"
            />
          </div>
        </div>
        <div class="flex gap-10 flex-1 mb-20 flex-col-reverse lg:flex-row">
          <div class="flex flex-col gap-4 justify-between">
            <h3
              class="text-4xl mb-4 font-bold text-center lg:text-right text-red"
            >
              Коригування
            </h3>
            <p class="text-2xl text-center lg:text-right text-gray-900">
              Коригування артилерійського вогню за допомогою БПЛА є важливим
              елементом сучасної бойової тактики, оскільки дозволяє в реальному
              часі коригувати вогонь, точно визначати позиції цілей і
              забезпечувати високу точність ударів. Це значно підвищує
              ефективність артилерії, зменшує витрати боєприпасів та мінімізує
              ризик випадкових втрат серед власних сил.
            </p>
            <Button
              class="text-gray-900 text-center lg:text-right"
              text="Детальніше"
              link="/about"
            />
          </div>
          <img
            src="public/images/artillery.jpg"
            class="max-w-screen-md rounded-3xl"
            alt=""
          />
        </div>
        <div class="flex gap-10 flex-1 mb-20 flex-col lg:flex-row">
          <img
            src="public/images/fpv.jpg"
            class="max-w-screen-md rounded-3xl"
            alt=""
          />
          <div class="flex flex-col gap-4 justify-between">
            <h3
              class="text-4xl mb-4 font-bold text-red text-center lg:text-left"
            >
              Ударні БпЛА
            </h3>
            <p class="text-2xl text-center lg:text-left text-gray-900">
              Ударні БПЛА здатні здійснювати високоточні удари по важливих цілях
              з мінімальним ризиком для особового складу. Завдяки своїй
              маневреності та здатності діяти на великих відстанях, ці апарати
              можуть знищувати ворожі командні пункти, техніку, складські
              приміщення та навіть високопрофільні цілі, знижуючи потенціал
              супротивника.
            </p>
            <Button
              class="text-gray-900 text-center lg:text-left"
              text="Детальніше"
              link="/about"
            />
          </div>
        </div>
      </article>
    </div>
    <Footer />
  </main>
</template>
