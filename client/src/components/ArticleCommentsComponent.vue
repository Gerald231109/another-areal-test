<template>
  <section class="article-comments">
    <div
      class="article__comment"
      v-for="comment in oneArticle.comment"
      :key="comment.id"
    >
      <a class="comment__delete" @click="deleteComment(comment.id)">
        <i class="fa-solid fa-trash-can article-card__icon"></i>
      </a>
      <a
        class="comment__edit"
        @click="
          [
            getOneComment([oneArticle.id, comment.id]),
            $router.push(
              `/article/${oneArticle.id}/comment/${comment.id}/edit`
            ),
          ]
        "
      >
        <i class="fa-solid fa-file-pen article-card__icon"></i>
      </a>
      <div class="comment__top">
        <h4 class="comment__name">{{ comment.title }}</h4>
        <p class="comment__date">{{ new Date(comment.createdAt).toLocaleString() }}</p>
      </div>
      <p class="comment__text">{{ comment.text }}</p>
      <div class="comment__divider"></div>
    </div>
  </section>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
export default {
  name: "ArticleCommentsComponent",

  computed: {
    ...mapFields({
      oneArticle: "oneArticle",
    }),
  },

  methods: {
    ...mapActions({
      deleteComment: "deleteComment",
      getOneComment: "getOneComment",
    }),
  },
};
</script>

<style scoped></style>
