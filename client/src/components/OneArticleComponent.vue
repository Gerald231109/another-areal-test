<template>
    <section class="one-article">
        <div class="one-article__content">
            <h2 class="article-content__title">{{this.oneArticle.title}}</h2>
            <div class="article-content__divider"></div>
            <div class="article-content__actions">
                <a href="#comments" class="article-action__item article-action__comment">
                    <i class="fa-solid fa-comments"></i>
                </a>
                <a class="article-action__item article-action__edit" @click="$router.push(`/article/${oneArticle.id}/edit`)">
                    <i class="fa-solid fa-file-pen edit__icon"></i>
                </a>
                <a class="article-action__item article-action__delete" @click="[deleteArticle(), $router.push('/article')]">
                    <i class="fa-solid fa-trash-can"></i>
                </a>
            </div>
            <p class="article-content__text">{{this.oneArticle.text}}</p>
        </div>
    </section>
</template>

<script>
    import { mapFields } from 'vuex-map-fields';
    import { mapActions, mapState } from 'vuex';

    export default {
        name: "OneArticleComponent",

        computed: {
            ...mapFields({
                oneArticle: 'oneArticle',
            }),

            ...mapState({
                articleId: 'oneArticle'
            })
        },

        methods: {
            ...mapActions({
                getArticle: 'getOneArticle',
                deleteArticle: 'deleteArticle',
            }),
        },

        mounted() {
            this.getArticle(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>