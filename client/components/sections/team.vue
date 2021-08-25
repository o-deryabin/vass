<template>
  <section class="section section--team">
    <v-container>
      <h2 class="sub-title">Время – деньги!</h2>

      <v-row>
        <v-col md="8" class="ml-auto">
          <v-row class="section__content">
            <v-col cols="7">
              <p class="section__text">
                Обратившись в нашу компанию, Вы не потратите время и деньги в
                пустую. Вам не нужно дополнительно искать специалистов по
                рекламе и продвижению. Всю работу мы берем на себя. Мы работаем
                под ключ.
              </p>
              <h4 class="section__title section__title--first">
                Станислав Васильев
              </h4>
              <h6 class="section__description">
                Основатель<br />
                веб студии
              </h6>
              <v-row class="section__about">
                <v-col cols="6">
                  <h4 class="section__title section__title--second">5</h4>
                  <h6 class="section__description section__description--second">
                    лет опыта в веб разработке
                  </h6>
                </v-col>
                <v-col
                  cols="6"
                  class="d-md-flex flex-md-column justify-md-end align-md-end"
                >
                  <nuxt-img
                    format="webp"
                    quality="80"
                    src="/img/team/image 17_2.png"
                    alt="AmoCrm партнер"
                    class="section__img--partners"
                  />
                  <nuxt-img
                    format="webp"
                    quality="80"
                    src="/img/team/image 18_2.png"
                    alt="Google партнер"
                    class="section__img--partners mt-5"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="5">
              <nuxt-img
                format="webp"
                quality="80"
                src="/img/team/Ellipse 5.png"
                alt=""
                class="section__img"
              />
            </v-col>
          </v-row>
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
  &__content {
    margin-top: 80px;
  }
  &__about {
    margin-top: 50px;
  }
  &__text,
  &__title,
  &__description {
    font-family: Inter;
  }
  &__text {
    font-size: 18px;
    line-height: 130%;
    color: $c-grey;
  }
  &__title {
    &--first {
      font-weight: 600;
      font-size: 26px;
      line-height: 130%;
      color: #000000;
      margin-top: 50px;
    }
    &--second {
      font-size: 48px;
      line-height: 120%;
      font-weight: 400;
      text-transform: uppercase;
      color: #000000;
    }
  }
  &__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: $c-grey;
    &--second {
      margin-top: 20px;
    }
  }
  &__img {
    max-width: 280px;
    &--partners {
      max-width: 105px;
    }
  }
}
</style>