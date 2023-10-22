<template>
    <div class="home-view">
        <nav-component></nav-component>
        <div class="home-view__body">
            <all-articles-component></all-articles-component>
            <create-article-component></create-article-component>
        </div>
    </div>
</template>

<script>
import NavComponent from "@/components/NavComponent";
import CreateArticleComponent from "@/components/CreateArticleComponent";
import AllArticlesComponent from "@/components/AllArticlesComponent";
import ArticleCommentsComponent from "@/components/ArticleCommentsComponent";
export default {
  name: "HomeView",

  components: {ArticleCommentsComponent, AllArticlesComponent, CreateArticleComponent, NavComponent },
};
</script>
