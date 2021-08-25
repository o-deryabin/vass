<template>
  <section class="section section--benefits">
    <v-container>
      <h2 class="sub-title">Преимущества</h2>
      <v-divider class="section__divider"></v-divider>

      <v-row
        class="section__content align-md-center"
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
          "Мы создаем профессиональные сайты всего за 2 недели. Это самый высокий показатель по Казахстану. Мы знаем насколько важна скорость для наших клиентов, ведь Ваше время это деньги. ",
      },
      {
        title: "Проводим личные встречи и онлайн. На Ваш выбор.",
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