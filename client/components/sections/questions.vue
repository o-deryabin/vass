<template>
  <section class="section section--questions">
    <v-container>
      <h2 class="sub-title animate__animated animate__fadeInUp">
        Частые вопросы
      </h2>

      <v-row class="">
        <v-col md="8" class="ml-auto section__content">
          <v-expansion-panels>
            <v-expansion-panel v-for="(item, index) in questions" :key="index">
              <v-expansion-panel-header
                class="section__title section__title--26"
              >
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="section__description section__description--18"
              >
                {{ item.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    questions: [
      {
        title: "Используете ли Вы конструкторы сайтов при разработке ?",
        description:
          "Нет, мы не используем шаблоны, которые имеют абонентскую плату. Мы разрабатываем сайты на передовых платформах, лицензию мы покупаем один раз и даем ее Вам навсегда.",
      },
      {
        title:
          "Какую информацию необходимо предоставить при начале разработки ?",
        description:
          "В начале разработки необходимо предоставить название вашей компании, и то какая цель стоит перед сайтом, повысить продажи, сделать бренд узнаваемым или продажа товаров. ",
      },
      {
        title: "Используете ли Вы готовые шаблоны при разработки сайта ?",
        description:
          "Нет, мы не используем готовые шаблоны, мы делаем уникальный дизайн для каждого клиента. Это философия нашей команды. Мы стараемся показать в каждом сайте индивидуальность и особенности бренда.",
      },
      {
        title: "Работаете ли Вы по договору ?",
        description:
          "Да, у нас ИП и со всеми клиентами мы заключаем договор. Мы принимаем оплату безналичным расчетом.",
      },
      {
        title: "Сколько лет Вы на рынке ?",
        description: "Мы на рынке с 2017 года.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.v-expansion-panel {
  background-color: #f8f8f8 !important;
}

.section {
  &__content {
    margin-top: 65px;
  }

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 130%;
    color: #000000;

    @media (min-width: 960px) {
      padding-top: 50px;
      padding-bottom: 50px;
      font-size: 26px;
    }
    @media (max-width: 960px) {
      letter-spacing: 0.07em;
    }
  }
  &__description {
    @media (min-width: 960px) {
      margin-bottom: 30px;
    }
  }
}
</style>