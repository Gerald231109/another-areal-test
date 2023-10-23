<template>
  <section class="nav-component">
    <a
      @click="[clearInputs(), $router.push('/article')]"
      class="nav__home-link"
    >
      <h1 class="nav__title">Чистый блог</h1>
    </a>
    <a @click="$router.push('/article/analytics/')" class="nav__analytics">
      <i class="fa-solid fa-calendar nav__icon"></i>
    </a>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavComponent",

  methods: {
    ...mapActions({
      clearInputs: "clearInputs",
    }),
  },
};
</script>

<style scoped></style>
