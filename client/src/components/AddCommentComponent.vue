<template>
    <section class="add-comment" id="comments">
        <form class="add-comment__form" onsubmit="return false">
            <h3 class="add-comment__title">Добавить комментарий</h3>
            <input v-model="nameComment" type="text" class="add-comment__name"
                   placeholder="Моё имя... СМЕАГОЛ!!!" required maxlength="24">
            <textarea v-model="textComment" type="text" class="add-comment__text"
                      placeholder="Поделитесь своими мыслями..." required maxlength="80"></textarea>
            <input @click="createComment()" type="submit" class="add-comment__btn" value="Отправить">
        </form>
    </section>
</template>

<script>
    import { mapFields } from 'vuex-map-fields'
    import { mapActions } from "vuex";
    export default {
        name: "AddCommentComponent",

        computed: {
            ...mapFields({
                nameComment: 'nameComment',
                textComment: 'textComment',
            })
        },

        methods: {
            ...mapActions({
                createComment: 'createComment'
            })
        }
    }
</script>

<style scoped>
</style>