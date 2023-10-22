import {Column, HasMany, Model, Table, DataType} from 'sequelize-typescript';
import {Comment} from './comment.model';


@Table
export class Article extends Model {
    @Column
    title: string;

    @Column({type: DataType.TEXT, allowNull: false})
    text: string;

    @HasMany(() => Comment)
    comment: Comment[]
}