<template>
  <section class="section section--quality">
    <v-container>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="scroll-y-reverse-transition"
      >
        <h2 class="sub-title">ВЫСОКОЕ КАЧЕСТВО САЙТОВ</h2>
      </v-lazy>
      <v-row
        v-for="(item, index) in data"
        :key="index"
        class="section__content"
      >
        <v-col md="4" cols="12"
          ><h4 class="section__title">{{ item.title }}</h4></v-col
        >

        <v-col md="4" cols="12" style="padding-left: 0"
          ><p class="section__text">{{ item.text }}</p></v-col
        >
        <v-col md="4" cols="12" class="d-flex align-center"
          ><nuxt-img
            format="webp"
            quality="80"
            :src="'/img/quality' + item.img"
            class="section__image px-4"
        /></v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    data: [
      {
        title: "Копирайтинг",
        text: "Пишем продающий, понятный и простой текст для ваших клиентов. Используем современные программы.",
        img: "/Group 300.png",
      },
      {
        title: "Дизайн",
        text: "Уникальный и продуманный дизайн. Логичная структура сайта, поможет вашему клиенту сделать правильный шаг, и не заблудиться на сайте.",
        img: "/Group 301.png",
      },
      {
        title: "Верстка",
        text: "Используем современные методы верстки. Адаптируем сайты под все устройства. У наших сайтов высокая скорость загрузки. Сайты открываются на всех доступных браузерах.",
        img: "/Group 302.png",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section {
  &__content {
    @media (min-width: 960px) {
      margin-top: 120px;
    }
    margin-top: 40px;
  }
  &__title {
    font-family: Inter;
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.07em;
    color: $c-grey;
  }
  &__text {
    font-family: Inter;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.07em;
    color: $c-grey;
  }
  &__image {
    max-width: 100%;
  }
}
</style>