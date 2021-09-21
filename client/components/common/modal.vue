
<template >
  <v-card class="dialog__content">
    <v-card-text>
      <h2 class="sub-title">Оставить заявку</h2>
      <v-row>
        <v-col md="6" cols="12" class="d-md-flex align-md-center mt-4">
          <h6 class="section__title section__title--18-black">
            Оставьте заявку и получите бесплатную консультауцию
          </h6>
        </v-col>
        <v-col md="6" cols="12">
          <a
            href="tel:+7(747)266-66-82"
            class="section__link section__link--tel"
            >+7 (747) 266-66-82</a
          >
          <v-row class="my-md-8 my-4">
            <v-col md="6" cols="12">
              <a href="mailto:hello@vass.kz" class="section__link"
                >hello@vass.kz</a
              >
            </v-col>
            <v-col md="6" cols="12">
              <a
                href="https://www.instagram.com/vasskz/"
                target="_blank"
                rel="noopener noreferrer"
                class="section__link"
                >instagram</a
              >
            </v-col>
          </v-row>
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
              v-mask="'X#(###)###-##-##'"
              placeholder="+7(___)___-__-__"
              required
            ></v-text-field>
            <button type="submit" class="section__btn">Отправить</button>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn text @click="dialog.value = false">Закрыть</v-btn>
    </v-card-actions>
    <Snackbar :message="message" :timeout="timeout" :snackbar="snackbar" />
  </v-card>
</template>


<script>
import Snackbar from "./snackbar.vue";
export default {
  components: { Snackbar },
  props: ["dialog"],
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

      const response = await this.$axios.$post("/user/send", {
        ...this.form,
      });

      this.message = response.message;

      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  &__content {
    padding: 20px 0;
    @media (min-width: 960px) {
      padding: 60px;
    }
  }
}

.section {
  &__btn {
    margin-top: 15px;
    display: block;
    width: 100%;
    color: #fff;
    @media (min-width: 960px) {
      margin-top: 30px;
    }
  }
  &__link {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.07em;
    color: #000000;
    text-decoration: none;
    &--tel {
      @media (min-width: 960px) {
        font-size: 29px;
      }
    }
  }
}
</style>
