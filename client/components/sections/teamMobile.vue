<template>
  <section class="section section--teamMobile">
    <v-container>
      <h2 class="sub-title wow animate__fadeInUp" data-wow-duration="1.5s">
        Время – деньги!
      </h2>
      <p class="section__description section__description--18 mt-4 mb-6">
        Обратившись в нашу компанию, Вам не придется его тратить. Вам не нужно
        дополнительно искать специалистов по рекламе и продвижению. Всю работу
        мы берем на себя. Мы работаем под ключ.
      </p>

      <v-row>
        <v-col cols="6">
          <h4 class="section__title section__title--26 mt-1">
            Станислав Васильев
          </h4>
          <p class="section__description section__description--16 mt-4">
            Основатель<br />
            веб студии
          </p>
          <h4 class="section__title section__title--second">5</h4>
          <p class="section__description section__description--16 mt-4">
            лет опыта в веб разработке
          </p>
        </v-col>
        <v-col cols="6">
          <img src="/img/team/Ellipse 5.webp" alt="" class="section__img" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <img
            src="/img/team/image 17_2.webp"
            alt="AmoCrm партнер"
            class="section__img--partners"
          />
        </v-col>
        <v-col cols="6">
          <img
            src="/img/team/image 18_2.webp"
            alt="Google партнер"
            class="section__img--partners"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section {
  &__title {
    &--second {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 120%;
      text-transform: uppercase;
      color: #000000;
      margin-top: 23px;
    }
  }
  &__img {
    max-width: 135px;
    &--partners {
      max-width: 77px;
    }
  }
}
</style>