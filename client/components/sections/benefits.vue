<template>
  <section class="section section--benefits">
    <v-container>
      <h2 class="sub-title">Преимущества</h2>
      <v-divider class="section__divider"></v-divider>

      <v-row
        class="section__content"
        v-for="(item, index) in benefits"
        :key="index"
      >
        <v-col cols="12" md="4"
          ><h4 class="section__index">{{ "0" + (index + 1) }}</h4></v-col
        >
        <v-col cols="12" md="8">
          <p class="section__title section__title--18-grey">
            {{ item.title }}
          </p>
          <template v-if="item.text && item.list">
            <p class="section__description section__description--18">
              {{ item.text }}
            </p>
            <ul
              class="section__description section__description--18"
              v-for="(listItem, listIndex) in item.list"
              :key="listIndex"
            >
              <li>{{ listItem }}</li>
            </ul>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    benefits: [
      {
        title:
          "Проводим глубокий анализ конкурентов. Выявляем слабые и сильные стороны продумываем как отстроится от конкурентов и выглядеть более выигрышно. ",
      },
      {
        title:
          "Мы создаем профессиональные сайты всего за 1 неделю. Это самый высокий показатель по Казахстану. Мы знаем насколько важна скорость для наших клиентов, ведь Ваше время это деньги. ",
      },
      {
        title:
          "Все встречи онлайн для того чтобы обсудить нет необходимости ехать к нам в офис ",
      },
      {
        title:
          "Для Вашего спокойствия мы не берем предоплату при заключение договора. ",
        text: "Процесс проходит следующим образом:",
        list: [
          "Мы заключаем договор с Вами",
          "Наш коппирайтер собирает всю необходимую информацию от Вас. Состовляет текст для сайта",
          "После дизайнер приступает к работе. Составляются макеты страниц.",
          "Вы производите предоплату в размере 50% ",
          "Программист верстает сайт ",
          "Вы оплачиваете остаток суммы",
          "Мы передаем Вам все доступы и обучаем как администрировать сайт",
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section {
  &__content {
    margin-top: 25px;
    border-bottom: 1px solid #aeaeae;
    @media (min-width: 960px) {
      margin-top: 55px;
      padding-bottom: 25px;
    }
  }
  &__index {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    line-height: 130%;
    letter-spacing: 0.07em;
    color: #e9e9e9;
    font-size: 25px;
    @media (min-width: 960px) {
      font-size: 55px;
    }
  }
}
</style>