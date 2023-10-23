import axios from "axios";

const http = axios.create({
  baseURL: "//localhost:8081/",
  headers: {
    "Content-type": "application/json",
  },
});

class DataService {
  getAllArticles() {
    return http.get(`/article/`);
  }

  createArticle(data) {
    return http.post("/article/", data);
  }

  deleteComment(id, comment_id) {
    return http.delete(`/article/${id}/comment/${comment_id}`);
  }

  deleteArticle(id) {
    return http.delete(`/article/${id}`);
  }

  createComment(data, id) {
    return http.post(`/article/${id}/comment`, data);
  }

  getOneArticle(id) {
    return http.get(`/article/${id}`);
  }

  updateArticle(id, data) {
    return http.patch(`/article/${id}`, data);
  }

  updateComment(id, comment_id, data) {
    return http.patch(`/article/${id}/comment/${comment_id}`, data);
  }

  getOneComment(id, comment_id) {
    return http.get(`/article/${id}/comment/${comment_id}`);
  }

  getArticlesByDate(date, date2) {
    let params = {};
    params.date = date;
    params.date2 = date2;
    return http.get("/analytic/comments/", { params: params });
  }
}

export default new DataService();
