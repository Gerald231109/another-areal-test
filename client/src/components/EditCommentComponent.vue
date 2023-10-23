<template>
  <section class="add-comment" id="comments">
    <form class="add-comment__form" onsubmit="return false">
      <h3 class="add-comment__title">Изменить комментарий</h3>
      <input
        v-model="nameComment"
        type="text"
        class="add-comment__name"
        placeholder="Моё имя... СМЕАГОЛ!!!"
        required
        maxlength="24"
      />
      <textarea
        v-model="textComment"
        type="text"
        class="add-comment__text"
        placeholder="Поделитесь своими мыслями..."
        required
        maxlength="80"
      ></textarea>
      <input
        @click="
          [
            updateComment([$route.params.id, $route.params.comment_id]),
            $router.push(`/article/${$route.params.id}`),
          ]
        "
        type="submit"
        class="add-comment__btn"
        value="Обновить"
      />
      <p class="attention-text">Оба поля должны быть заполнены!</p>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "EditCommentComponent",

  computed: {
    ...mapFields({
      nameComment: "nameComment",
      textComment: "textComment",
    }),
  },

  methods: {
    ...mapActions({
      updateComment: "updateComment",
      getOneComment: "getOneComment",
    }),
  },
};
</script>

<style scoped></style>
