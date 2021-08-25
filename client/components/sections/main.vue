<template>
  <section class="section section--main">
    <v-container>
      <h1 class="c-title">
        <template v-if="width >= 980">
          Сайты<br />
          Интернет-магазины<br />
          Мобильные приложения
        </template>
        <template v-else>
          Сайты<br />
          Магазины<br />
          Мобильные приложения
        </template>
      </h1>
      <v-row>
        <v-col md="8" class="ml-auto">
          <h5 class="description">
            Вы получите прибыльный сайт всего за 10 дней от 400 000 тенге.

            <v-dialog transition="dialog-top-transition" max-width="900">
              <template v-slot:activator="{ on, attrs }">
                <button class="section__btn" v-bind="attrs" v-on="on">
                  Получить консультацию
                </button>
              </template>
              <template v-slot:default="dialog">
                <Modal :dialog="dialog" />
              </template>
            </v-dialog>
          </h5>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Modal from "../common/modal.vue";
export default {
  components: { Modal },
  props: ["width"],
};
</script>

<style lang="scss" scoped>
.section {
  &__btn {
    color: #ffffff;
    margin-top: 35px;
    font-size: 14px;
    line-height: 130%;
    padding: 25px 0;
    &:hover {
      background: #000;
    }
    @media (min-width: 960px) {
      font-size: 18px;
      line-height: 130%;
      padding: 30px 35px;
      margin-top: 80px;
    }
    @media (max-width: 960px) {
      display: block;
      width: 100%;
    }
  }
}

.c-title {
  font-family: Inter;
  font-weight: normal;
  text-transform: uppercase;
  color: $c-orange;
  font-size: 35px;
  line-height: 115%;
  @media (min-width: 960px) {
    font-size: 82px;
    line-height: 130%;
  }
}

.description {
  font-family: Inter;
  font-weight: normal;
  color: $c-grey;
  font-size: 15px;
  line-height: 120%;
  margin-top: 35px;
  @media (min-width: 960px) {
    font-size: 29px;
    line-height: 120%;
    margin: 80px 0;
    max-width: 400px;
  }
}
</style>