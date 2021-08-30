<template>
  <section class="section section--image">
    <v-container>
      <!-- <template v-if="!isActive">
        <v-img
          src="/img/image/Frame6_2.webp"
          lazy-src="/img/image/Frame7.webp"
          max-width="100%"
          width="100%"
          max-height="800"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </template> -->
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <div class="section__image"></div>
      </v-lazy>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
};
</script>

<style lang="scss" scoped>
.section {
  &--image {
    padding-top: 0 !important;
  }
  &__image {
    max-width: 100%;
    height: 200px;
    background-image: url("/img/image/Frame6_2.webp");
    background-position: center;
    background-size: cover;
    @media (min-width: 600px) {
      background-size: contain;
      background-attachment: fixed;
      height: 800px;
    }
  }
}
</style>