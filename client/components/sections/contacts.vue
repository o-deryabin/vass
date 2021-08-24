<template>
  <section class="section section--contacts" id="contacts">
    <v-container>
      <h2 class="sub-title">Контакты</h2>
      <v-row class="section__content">
        <v-col md="8" class="ml-auto">
          <p class="section__text">
            Наша команда профессионалов, может создавать сайты любой сложности,
            как в плане дизайна, так и в плане программного обеспечения.
          </p>
          <v-row>
            <v-col md="6" cols="12">
              <a href="tel:+7(747)266-66-82" class="section__link"
                >+7 (747) 266-66-82</a
              >
              <a href="mailto:hello@vass.kz" class="section__link"
                >hello@vass.kz</a
              >
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                class="section__link"
                >instagram</a
              >
            </v-col>
            <v-col md="6" cols="12">
              <v-form ref="form" lazy-validation @submit.prevent="send">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  label="Имя"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="tel"
                  label="Телефон"
                  :rules="telRules"
                  v-mask="'+7(###)###-##-##'"
                  required
                ></v-text-field>
                <button type="submit" class="section__btn">Отправить</button>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    nameRules: [(v) => !!v || "Имя обязательно"],
    tel: "",
    telRules: [(v) => !!v || "Телефон обязателен"],
  }),
  methods: {
    send() {
      this.$refs.form.validate();
      console.log(this.firstname, this.tel);
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  &__text,
  &__link {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    line-height: 130%;
  }
  &__text {
    font-size: 15px;
    color: #000000;
    margin: 18px 0;
    color: $c-grey;
    @media (min-width: 960px) {
      margin: 80px 0;
      font-size: 22px;
      letter-spacing: 0.07em;
    }
  }
  &__link {
    font-size: 18px;
    letter-spacing: 0.07em;
    color: #000000;
    display: block;
    text-decoration: none;
    @media (min-width: 960px) {
      font-size: 29px;
      &:nth-child(2) {
        margin: 50px 0;
      }
    }
    &:nth-child(2) {
      margin: 20px 0;
    }
  }
  &__btn {
    margin-top: 30px;
    display: block;
    width: 100%;
    color: #fff;
    @media (min-width: 960px) {
      padding: 30px 145px;
    }
  }
}
</style>