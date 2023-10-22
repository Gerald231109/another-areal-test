import { Article } from "../models/article.model";
export declare class AnalyticsService {
    private articleModel;
    constructor(articleModel: typeof Article);
    findAllByDate(dateOne: string, dateTwo: string): Promise<Article[]>;
}
