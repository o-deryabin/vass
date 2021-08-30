<template>
  <section class="section section--price" id="price">
    <v-container>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        transition="scroll-y-reverse-transition"
      >
        <h2 class="sub-title">Цены и сроки</h2>
      </v-lazy>
      <v-divider class="section__divider"></v-divider>

      <v-row
        v-for="(item, index) in data"
        :key="index"
        class="section__content"
      >
        <v-col md="4" cols="12"
          ><h4 class="section__title section__title--26">
            {{ item.title }}
          </h4></v-col
        >
        <v-col md="8" cols="12">
          <v-row>
            <v-col md="4" cols="5"
              ><h6
                class="section__days section__title section__title--18-black"
              >
                {{ item.days }}
              </h6></v-col
            >
            <v-col md="8" cols="7"
              ><h6
                class="section__price section__title section__title--18-grey"
              >
                {{ item.price }}
              </h6></v-col
            >
          </v-row>
          <p class="section__description section__description--18">
            {{ item.description }}
          </p>
          <template v-if="width <= 980">
            <v-divider></v-divider>
          </template>
        </v-col>
      </v-row>

      <v-dialog transition="dialog-top-transition" max-width="900">
        <template v-slot:activator="{ on, attrs }">
          <button class="section__btn" v-bind="attrs" v-on="on">
            Оставить заявку
          </button>
        </template>
        <template v-slot:default="dialog">
          <Modal :dialog="dialog" />
        </template>
      </v-dialog>
    </v-container>
  </section>
</template>

<script>
import Modal from "../common/modal.vue";
export default {
  props: ["width"],
  components: { Modal },
  data: () => ({
    isActive: false,
    data: [
      {
        title: "Сайт",
        days: "14 дней",
        price: "400,000 тенге",
        description:
          "Сайт - для описания и продвижения ваших услуг или товаров. До 10 страниц. Удобная админ панель для пользования.",
      },
      {
        title: "Интернет - магазин",
        days: "25 дней",
        price: "500,000 тенге",
        description:
          "Интернет-магазин - готовый к продаже ваших товаров уже через 25 дней. Неограниченное количество товаров. Продуманный каталог.",
      },
      {
        title: "Мобильное приложение",
        days: "20 дней",
        price: "400,000 тенге",
        description:
          "Мобильное приложение – поможет бизнесу увеличить прибыль и автоматизировать процессы. Приложения для Android и iOS с удобным UI интерфейсом и адаптированное под любое устройство.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section {
  &__content {
    margin-top: 35px;

    @media (min-width: 960px) {
      border-bottom: 1px solid #aeaeae;
      margin-top: 55px;
    }
  }

  &__title {
    letter-spacing: 0.07em;
    &--26 {
      line-height: 80%;
    }
  }

  &__days,
  &__price {
    @media (min-width: 960px) {
      text-transform: uppercase;
    }
  }
  &__description {
    margin-top: 20px;
    margin-bottom: 45px;
    @media (min-width: 960px) {
      margin-top: 35px;
      margin-bottom: 40px;
    }
  }
  &__btn {
    padding: 25px 50px;
    margin: 30px 0 0;
    color: #fff;
    @media (min-width: 960px) {
      padding: 30px 99px;
      margin: 90px auto 0;
      display: block;
    }
  }
}
</style>