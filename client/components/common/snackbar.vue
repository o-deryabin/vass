<template>
  <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ message }}

    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: ["message", "snackbar", "timeout"],
};
</script>

<style>
</style>