import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Article } from './article.model';

@Table
export class Comment extends Model {
  @Column
  title: string;

  @Column
  text: string;

  @ForeignKey(() => Article)
  @Column
  ArticleId: number;

  @BelongsTo(() => Article)
  article: Article;
}