<template>
  <div class="edit-article">
    <nav-component></nav-component>
    <div class="edit-article__body">
      <edit-article-component></edit-article-component>
    </div>
  </div>
</template>

<script>
import EditArticleComponent from "@/components/EditArticleComponent";
import NavComponent from "@/components/NavComponent";
export default {
  name: "EditArticleView",
  components: { NavComponent, EditArticleComponent },
};
</script>

<style scoped></style>
