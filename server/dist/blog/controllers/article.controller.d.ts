import { Article } from "../models/article.model";
import { ArticleService } from "../services/article.service";
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    createArticle(response: any, article: Article): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    update(response: any, id: any, article: any): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
