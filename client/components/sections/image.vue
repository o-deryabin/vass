<template>
  <section class="section section--image">
    <v-container>
      <div class="section__image"></div>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section {
  &--image {
    padding-top: 0 !important;
  }
  &__image {
    max-width: 100%;
    height: 200px;
    background-image: url("/img/image/Frame 6.webp");
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