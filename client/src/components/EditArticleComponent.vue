<template>
  <form class="create-article__form" onsubmit="return false">
    <input
      type="text"
      class="create-article__title"
      required
      maxlength="24"
      placeholder="Название статьи"
      v-model="articleTitle"
    />
    <textarea
      type="text"
      class="create-article__text"
      required
      placeholder="Текст статьи"
      v-model="articleText"
    ></textarea>
    <input
      type="submit"
      class="create-article__btn"
      value="Обновить"
      @click="[updateArticle(), $router.push(`/article/${oneArticle.id}`)]"
    />
    <p class="attention-text">Оба поля должны быть заполнены</p>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "EditArticleComponent",

  computed: {
    ...mapFields({
      articleTitle: "articleTitle",
      articleText: "articleText",
      oneArticle: "oneArticle",
    }),
  },

  methods: {
    ...mapActions({
      prepareArticle: "prepareArticle",
      updateArticle: "updateArticle",
    }),
  },

  mounted() {
    this.prepareArticle();
  },
};
</script>

<style scoped></style>
