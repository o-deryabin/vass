<template>
  <section class="section section--projects">
    <v-container>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        transition="scroll-y-reverse-transition"
      >
        <h2 class="sub-title">Создавали проекты для компаний</h2>
      </v-lazy>
      <v-row class="section__content">
        <v-col md="8" class="ml-auto">
          <v-row>
            <v-col cols="6" md="4">
              <div>
                <h4
                  v-for="(item, index) in firstCompanies"
                  :key="index"
                  style="margin-top: 10px"
                >
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="section__link"
                    >{{ item.title }}</a
                  >
                </h4>
              </div>
            </v-col>
            <v-col cols="6" md="8">
              <div class="section__right">
                <h4
                  v-for="(item, index) in secondCompanies"
                  :key="index"
                  style="margin-top: 10px"
                >
                  <a
                    :href="item.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="section__link"
                    >{{ item.title }}</a
                  >
                </h4>
              </div>
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
    isActive: false,
    firstCompanies: [
      {
        title: "OLX",
        link: "https://business.olx.kz/",
      },
      {
        title: "TAZA-LINE",
        link: "https://taza-line.kz/",
      },
      {
        title: "TANKERBEER",
        link: "http://tankerbeer.kz/",
      },
      {
        title: "VERNYISERVICE",
        link: "https://vernyiservice.kz/",
      },
      {
        title: "KINGSTROY",
        link: "https://kingstroy.kz/",
      },
      {
        title: "BEACHLIFE",
        link: "https://beachlife.kz/",
      },
    ],
    secondCompanies: [
      {
        title: "HUBERT",
        link: "https://hubert-sf.kz/",
      },
      {
        title: "MEGAHAND",
        link: "https://mega-hand.kz/",
      },
      {
        title: "BESTSTUDIO",
        link: "https://bestudio.kz/",
      },
      {
        title: "GLOSS",
        link: "https://gloss.kz/",
      },
      {
        title: "ADALAT",
        link: "https://adalat.kz/",
      },
      {
        title: "SAAP",
        link: "https://saap.kz/",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.section {
  &__content {
    margin-top: 18px;
    @media (min-width: 960px) {
      margin-top: 30px;
    }
  }
  &__right {
    @media (min-width: 960px) {
      margin-left: 100px;
    }
  }
  &__link {
    font-family: Inter;
    font-weight: normal;
    font-size: 17px;
    line-height: 120%;
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
    margin-top: 10px;
    transition: 0.3s;
    @media (min-width: 960px) {
      font-size: 30px;
    }
    &:hover {
      color: $c-orange;
    }
  }
}
</style>