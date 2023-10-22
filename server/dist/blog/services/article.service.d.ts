import { Article } from "../models/article.model";
export declare class ArticleService {
    private articleModel;
    constructor(articleModel: typeof Article);
    findAll(): Promise<Article[]>;
    findOne(id: number): Promise<Article>;
    createArticle(article: Article): Promise<Article>;
    updateArticle(id: number, article: Article): Promise<[number, Article[]]>;
    deleteArticle(id: number): Promise<number>;
}
