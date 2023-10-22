import { Model } from 'sequelize-typescript';
import { Comment } from './comment.model';
export declare class Article extends Model {
    title: string;
    text: string;
    comment: Comment[];
}
