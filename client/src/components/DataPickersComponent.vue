<template>
  <div class="date-pickers">
    <input
      type="datetime-local"
      class="date-picker__input"
      v-model="firstDate"
    />
    <a @click="getArticles()" class="date-picker__btn">Анализировать</a>
    <input
      type="datetime-local"
      class="date-picker__input"
      v-model="secondDate"
    />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";

export default {
  name: "DataPickersComponent",

  computed: {
    ...mapFields({
      firstDate: "firstDate",
      secondDate: "secondDate",
    }),
  },

  methods: {
    ...mapActions({
      getArticles: "getArticlesByDate",
    }),
  },
};
</script>

<style scoped></style>
