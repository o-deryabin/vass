
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

      const response = await this.$axios.$post("/api/email/send", {
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
}
</style>
