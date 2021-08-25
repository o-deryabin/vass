<template>
  <v-app>
    <template v-if="width >= 980">
      <Header />
    </template>
    <template v-else>
      <HeaderMobile />
    </template>

    <Nuxt />

    <Footer />
  </v-app>
</template>

<script>
import Footer from "../components/common/footer.vue";
import Header from "../components/common/header.vue";
import HeaderMobile from "../components/common/headerMobile.vue";
export default {
  data: () => ({
    width: 0,
  }),
  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  mounted() {
    this.updateWidth();
  },
  components: { Header, HeaderMobile, Footer },
};
</script>
