<template>
  <header class="header">
    <v-container class="d-flex justify-space-between align-center">
      <img src="@/static/img/logo.png" alt="logo" class="header__logo" />
      <nav class="header__nav">
        <a :href="item.link" v-for="(item, index) in links" :key="index">{{
          item.title
        }}</a>
      </nav>
    </v-container>
  </header>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.header {
  padding: 20px 0;
}

.header__logo {
  width: 100px;
}

.header__nav a {
  font-size: 18px;
  line-height: 23px;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  margin-left: 55px;
  transition: 0.3s;
  &:hover {
    color: $c-orange;
  }
}
</style>