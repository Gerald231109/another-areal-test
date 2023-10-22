<template>
    <div class="read-article">
        <nav-component></nav-component>
        <one-article-component></one-article-component>
        <add-comment-component></add-comment-component>
        <article-comments-component></article-comments-component>

    </div>
</template>

<script>
    import NavComponent from "@/components/NavComponent";
    import OneArticleComponent from "@/components/OneArticleComponent";
    import { mapActions } from 'vuex';
    import AddCommentComponent from "@/components/AddCommentComponent";
    import ArticleCommentsComponent from "@/components/ArticleCommentsComponent";
    export default {
        name: "ReadArticleView",

        components: {ArticleCommentsComponent, AddCommentComponent, OneArticleComponent, NavComponent},

        methods: {
            ...mapActions({
                getOneArticle: 'getOneArticle',
            })
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>