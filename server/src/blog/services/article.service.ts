import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Article } from "../models/article.model";
import { Comment } from "../models/comment.model";

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article)
        private articleModel: typeof Article
    ) {}

    async findAll(): Promise<Article[]> {
        return this.articleModel.findAll({include : [Comment]});
    }

    async findOne(id: number): Promise<Article> {
        return this.articleModel.findOne({where: { id },
        include: [Comment]});
    }

    async createArticle(article: Article): Promise<Article> {
        return this.articleModel.create(article);
    }

    async updateArticle(id: number, article: Article): Promise<[number, Article[]]> {
        return this.articleModel.update(article, {where: {id}})
    }

    async deleteArticle(id:number): Promise<number> {
        return this.articleModel.destroy({where : {id}})
    }
}