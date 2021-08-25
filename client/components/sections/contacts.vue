<template>
  <section class="section section--contacts" id="contacts">
    <v-container>
      <h2 class="sub-title animate__animated animate__fadeInUp">Контакты</h2>
      <v-row class="section__content">
        <v-col md="8" class="ml-auto">
          <p class="section__text">
            Наша команда профессионалов, может создавать сайты любой сложности,
            как в плане дизайна, так и в плане программного обеспечения.
          </p>
          <v-row>
            <v-col md="6" cols="12">
              <ul>
                <li>
                  <a href="tel:+7(747)266-66-82" class="section__link"
                    >+7 (747) 266-66-82</a
                  >
                </li>
                <li class="my-md-12 my-5">
                  <a
                    href="mailto:hello@vass.kz"
                    class="section__link section__link--center"
                    >hello@vass.kz</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vasskz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="section__link"
                    >instagram</a
                  >
                </li>
              </ul>
            </v-col>
            <v-col md="6" cols="12">
              <v-form ref="form" lazy-validation @submit.prevent="send">
                <v-text-field
                  v-model="form.firstname"
                  :rules="nameRules"
                  label="Имя"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="form.tel"
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
    <Snackbar :message="message" :timeout="timeout" :snackbar="snackbar" />
  </section>
</template>

<script>
import Snackbar from "../common/snackbar.vue";
export default {
  components: { Snackbar },
  data: () => ({
    valid: false,
    nameRules: [(v) => !!v || "Имя обязательно"],
    telRules: [(v) => !!v || "Телефон обязателен"],
    snackbar: false,
    message: "",
    timeout: 2000,
    form: {
      firstname: "",
      tel: "",
    },
  }),
  methods: {
    async send() {
      this.$refs.form.validate();

      if (!this.form.firstname || !this.form.tel) {
        this.message = "не все поля заполнены";
        return (this.snackbar = true);
      }

      const response = await this.$axios.$post("/email/send", {
        ...this.form,
      });

      this.message = response.message;

      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
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
      margin: 60px 0;
      font-size: 22px;
      letter-spacing: 0.07em;
    }
  }
  &__link {
    font-size: 18px;
    letter-spacing: 0.07em;
    color: #000000;
    text-decoration: none;
    @media (min-width: 960px) {
      font-size: 29px;
      &--center {
        margin: 50px 0;
      }
    }
    &--center {
      margin: 20px 0;
    }
  }
  &__btn {
    margin-top: 30px;
    display: block;
    width: 100%;
    color: #fff;
    @media (min-width: 960px) {
      padding: 30px auto;
    }
  }
}
</style>