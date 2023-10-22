<template>
    <div class="edit-comment">
        <nav-component></nav-component>
        <div class="edit-comment__body">
            <edit-comment-component></edit-comment-component>
        </div>
    </div>
</template>

<script>
    import NavComponent from "@/components/NavComponent";
    import EditCommentComponent from "@/components/EditCommentComponent";
    export default {
        name: "EditCommentVies",
        components: {EditCommentComponent, NavComponent}
    }
</script>

<style scoped>

</style>