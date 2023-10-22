<template>
    <section class="all-articles">
        <div class="all-articles-card"
             v-for="article in allArticles"
             :key="article.id">
            <div class="article-card__divider--vertical"></div>
            <h2 @click="$router.push(`/article/${article.id}`)" class="article-card__title">{{article.title}}</h2>
            <div class="article-card__divider--horizontal"></div>
            <p class="article-card__text">{{article.text}}</p>
            <a @click="deleteArticle(article.id)" class="article__delete">
                <i class="fa-solid fa-trash-can article-card__icon"></i>
            </a>
            <a @click="[getOneArticle(article.id),$router.push(`/article/${article.id}/edit`)]" class="article__edit">
                <i class="fa-solid fa-file-pen article-card__icon"></i>
            </a>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapFields } from "vuex-map-fields";
    export default {
        name: "AllArticlesComponent",

        computed: {
            ...mapFields({
                allArticles: 'allArticles'
            })
        },

        methods: {
            ...mapActions({
                getAllArticles: 'getAllArticles',
                deleteArticle: 'deleteArticle',
                getOneArticle: 'getOneArticle'
            }),
        },

        mounted() {
            this.getAllArticles()
        }
    }
</script>

<style scoped>

</style>