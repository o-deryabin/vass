<template>
  <v-app>
    <template v-if="width >= 980">
      <Header />
    </template>
    <template v-else>
      <HeaderMobile />
    </template>

    <Nuxt />

    <v-footer app dark :fixed="false" color="#000">
      <v-container>
        <span>&copy;vass.kz 2017-{{ new Date().getFullYear() }}</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
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
  components: { Header, HeaderMobile },
};
</script>
