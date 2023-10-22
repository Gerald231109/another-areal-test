import { Model } from 'sequelize-typescript';
import { Article } from './article.model';
export declare class Comment extends Model {
    title: string;
    text: string;
    ArticleId: number;
    article: Article;
}
