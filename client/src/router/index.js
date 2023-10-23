import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReadArticleView from "@/views/ReadArticleView";
import EditArticleView from "@/views/EditArticleView";
import EditCommentView from "@/views/EditCommentView";
import AnalyticsView from "@/views/AnalyticsView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/article",
  },
  {
    path: "/article",
    name: "home",
    component: HomeView,
  },
  {
    path: "/article/analytics/",
    name: "analytics",
    component: AnalyticsView,
  },
  {
    path: "/article/:id",
    name: "read-article",
    component: ReadArticleView,
  },
  {
    path: "/article/:id/edit",
    name: "edit-article",
    component: EditArticleView,
  },
  {
    path: "/article/:id/comment/:comment_id/edit",
    name: "edit-comment",
    component: EditCommentView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
