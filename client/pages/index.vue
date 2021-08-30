<template>
  <v-main>
    <Main :width="width" />
    <cImage />
    <!-- <Quality /> -->
    <template v-if="width >= 980"><Team /></template>
    <template v-else><TeamMobile /></template>

    <Price :width="width" />
    <Projects :width="width" />
    <Companies />
    <Request />
    <Benefits :width="width" />
    <Questions />
    <Contacts />
  </v-main>
</template>

<script>
import Questions from "../components/sections/questions.vue";
import Companies from "../components/sections/companies.vue";
import Main from "../components/sections/main.vue";
import Price from "../components/sections/price.vue";
import Projects from "../components/sections/projects.vue";
import Quality from "../components/sections/quality.vue";
import Request from "../components/sections/request.vue";
import Team from "../components/sections/team.vue";
import Contacts from "../components/sections/contacts.vue";
import cImage from "../components/sections/image.vue";
import TeamMobile from "../components/sections/teamMobile.vue";
import Benefits from "../components/sections/benefits.vue";
export default {
  components: {
    Main,
    Quality,
    Projects,
    Price,
    Companies,
    Request,
    Team,
    Questions,
    Contacts,
    cImage,
    TeamMobile,
    Benefits,
  },
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
};
</script>

<style>
</style>


