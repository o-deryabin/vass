<template>
  <header class="header">
    <v-container class="d-flex justify-space-between align-center">
      <img src="@/static/img/logo.png" alt="logo" class="header__logo" />
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <Header />
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in links" :key="i">
            <v-list-item-title>
              <a :href="item.link">{{ item.title }}</a></v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
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
  }),
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