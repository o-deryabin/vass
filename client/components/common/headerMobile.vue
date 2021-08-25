<template>
  <header class="header">
    <v-container class="d-flex justify-space-between align-center">
      <nuxt-img
        format="webp"
        quality="80"
        src="@/static/img/logo.png"
        alt="logo"
        class="header__logo"
      />

      <div @click.stop="drawer = !drawer">
        <Header />
      </div>

      <v-navigation-drawer v-model="drawer" right absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item v-for="(item, i) in links" :key="i">
              <v-list-item-title>
                <a :href="item.link">{{ item.title }}</a>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </header>
</template>

<script>
import Header from "../svg/header.vue";
export default {
  components: { Header },
  data: () => ({
    links: [
      {
        title: "Проекты",
        link: "#projects",
      },
      {
        title: "Цены",
        link: "#price",
      },
      {
        title: "Контакты",
        link: "#contacts",
      },
    ],
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.header__logo {
  width: 100px;
}
a {
  font-size: 18px;
  line-height: 23px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
}
</style>