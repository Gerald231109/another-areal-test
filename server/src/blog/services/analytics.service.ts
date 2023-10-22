import { Injectable } from "@nestjs/common";
import { Comment } from "../models/comment.model";
import { Article } from "../models/article.model";
import { InjectModel } from "@nestjs/sequelize";
import { Op } from "sequelize";

@Injectable()
export class AnalyticsService {
    constructor(
        @InjectModel(Article)
        private articleModel: typeof Article
    ) {}

    async findAllByDate(dateOne: string, dateTwo: string): Promise<Article[]> {
        return this.articleModel.findAll({include:
                [{model: Comment, where: {createdAt:
                            {[Op.between]: [new Date(dateOne), new Date(dateTwo)]}}}], });
    }
}