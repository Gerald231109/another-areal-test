<template>
  <section>
    <div v-for="article in analyticData" :key="article.id">
      <div class="analytic-article" v-if="article.comment.length">
        <h3 class="analytic-article__title">{{ article.title }}</h3>
      </div>

      <div
        class="analytic-comment"
        v-for="comment in article.comment"
        :key="comment.id"
      >
        <div class="analytic-comment__top">
          <h4 class="analytic-comment__name">{{ comment.title }}</h4>
          <p class="analytic-comment__date">
            {{ new Date(comment.createdAt).toLocaleString() }}
          </p>
        </div>
        <p class="analytic-comment__text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "AnalyticsComponent",

  computed: {
    ...mapFields({
      analyticData: "analyticData",
    }),
  },
};
</script>

<style scoped></style>
