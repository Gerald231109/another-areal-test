import Vue from "vue";
import Vuex from "vuex";
import {getField, updateField} from "vuex-map-fields";
import DataServices from "@/services/DataServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleId: '',
    oneArticle: '',
    allArticles: '',
    articleTitle: '',
    articleText: '',
    nameComment: '',
    textComment: '',
    firstDate: '',
    secondDate: '',
    analyticData: ''
  },
  getters: {
    getField,
    articleTitle: (state) => state.articleTitle,
    articleText: (state) => state.articleText,
    allArticles: (state) => state.allArticles,
    oneArticle: (state) => state.oneArticle,
    nameComment: (state) => state.nameComment,
    textComment: (state) => state.textComment,
    firstDate: (state) => state.firstDate,
    secondDate: (state) => state.secondDate,
    analyticData: (state) => state.analyticData
  },
  mutations: {
    updateField,

    clearArticleInputs(state) {
      state.articleTitle = '';
      state.articleText = '';
    },

    clearOneArticle(state) {
      state.oneArticle = '';
    },

    clearArticleComments(state) {
      state.nameComment = '';
      state.textComment = '';
    },

    clearAnalytic(state) {
      state.analyticData = '';
      state.firstDate = '';
      state.secondDate = '';
    },

    prepareToEditArticle(state) {
      state.articleTitle = state.oneArticle.title;
      state.articleText = state.oneArticle.text;
    },
  },
  actions: {

    getAllArticles(context) {
      DataServices.getAllArticles().then(response => {
            console.log(response.data.articles)
            context.state.allArticles = response.data.articles
          }
      )
    },

    createArticle(context) {
      let data = {
        title: context.state.articleTitle,
        text: context.state.articleText
      }

      if(data.title && data.text) {
        DataServices.createArticle(data).then(response => {
          console.log(response)
          context.commit('clearArticleInputs')
          context.dispatch('getAllArticles').then(response => {
            console.log(response)
          })
        })
      }
    },

    deleteArticle(context, payload=context.state.oneArticle.id) {
      DataServices.deleteArticle(payload).then(response => {
        console.log(response)
        context.dispatch('getAllArticles').then(response => {
          console.log(response)
        })
        context.commit('clearOneArticle')
      })
    },

    getOneArticle(context, payload) {
      DataServices.getOneArticle(payload).then(response => {
        context.state.oneArticle = response.data.article
        context.commit('prepareToEditArticle')
        console.log(response)
      })
    },

    createComment(context) {
      let id = context.state.oneArticle.id
      let data = {}
      data.title = context.state.nameComment
      data.text = context.state.textComment

      if(data.title && data.text) {
        DataServices.createComment(data, id).then(() => {
          context.dispatch('getOneArticle', id).then()
          context.commit('clearArticleComments')
        })
      }
    },

    deleteComment(context, payload) {
      let id = context.state.oneArticle.id
      DataServices.deleteComment(id, payload).then(() => {
        context.dispatch('getOneArticle', id).then()
      })
    },

    prepareArticle(context) {
      context.commit('prepareToEditArticle')
    },

    updateArticle(context) {
      let id = context.state.oneArticle.id
      let data = {}
      data.title = context.state.articleTitle
      data.text = context.state.articleText

      if(data.title && data.text) {
        DataServices.updateArticle(id, data).then(() => {
          context.dispatch('getOneArticle', id).then()
          context.commit('clearArticleInputs')
        })
      }
    },

    clearInputs(context) {
      context.commit('clearArticleInputs')
      context.commit('clearOneArticle')
      context.commit('clearAnalytic')
    },

    getOneComment(context, payload) {
      let id = payload[0]
      let comment_id = payload[1]
      DataServices.getOneComment(id, comment_id).then((response) => {
        console.log(response.data)
        context.state.nameComment = response.data.comment.title
        context.state.textComment = response.data.comment.text
      })
    },

    updateComment(context, payload) {
      let id = payload[0]
      let comment_id = payload[1]
      let data = {}
      data.title = context.state.nameComment
      data.text = context.state.textComment
      if(data.title && data.text) {
        DataServices.updateComment(id, comment_id, data).then(() => {
          context.commit('clearArticleComments')
          context.dispatch('getOneArticle', id)
        })
      }
    },

    getArticlesByDate(context) {
      let firstDate = context.state.firstDate
      let secondDate = context.state.secondDate
      console.log(firstDate)
      DataServices.getArticlesByDate(firstDate, secondDate).then((response) => {
        context.state.analyticData = response.data.articles
      })
    }


  },
  modules: {},
});
