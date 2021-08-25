<template>
  <section class="section section--request">
    <v-container>
      <v-row>
        <v-col md="6" cols="12">
          <h2 class="sub-title animate__animated animate__fadeInUp">
            Оставить заявку
          </h2>
        </v-col>
        <v-col md="6" cols="12" class="section__right">
          <p class="section__description section__description--18">
            Оставьте заявку и получите бесплатную консультауцию
          </p>
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
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Modal from "../common/modal.vue";
export default {
  components: { Modal },
};
</script>

<style lang="scss" scoped>
.section {
  &--request {
    background: #fff;
    padding: 40px 0;
    @media (min-width: 960px) {
      padding: 120px 0;
      margin: 80px 0;
    }
  }
  &__btn {
    margin: 15px 0 0;
    color: #fff;
    @media (min-width: 960px) {
      padding: 30px 100px;
      margin: 55px 0 0;
      display: block;
    }
  }
  &__right {
    @media (min-width: 960px) {
      padding-top: 40px;
      padding-left: 120px;
    }
  }
}
</style>