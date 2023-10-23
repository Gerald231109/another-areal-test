<template>
  <section class="create-article">
    <form class="create-article__form" onsubmit="return false">
      <input
        type="text"
        class="create-article__title"
        maxlength="24"
        placeholder="Название статьи"
        v-model="articleTitle"
        required
      />
      <textarea
        type="text"
        class="create-article__text"
        placeholder="Текст статьи"
        v-model="articleText"
        required
      ></textarea>
      <input
        type="submit"
        class="create-article__btn"
        value="Создать"
        @click="createArticle"
      />
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  name: "CreateArticleComponent",

  computed: {
    ...mapFields({
      articleTitle: "articleTitle",
      articleText: "articleText",
    }),
  },

  methods: {
    ...mapActions({
      createArticle: "createArticle",
    }),
  },

  mounted() {},
};
</script>

<style scoped></style>
