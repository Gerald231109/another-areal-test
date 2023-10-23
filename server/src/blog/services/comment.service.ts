import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "../models/comment.model";

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment)
    private commentModel: typeof Comment
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentModel.findAll();
  }

  async findOne(id: string): Promise<Comment> {
    return this.commentModel.findOne({
      where: {
        id,
      },
    });
  }

  async createComment(comment: Comment): Promise<Comment> {
    return this.commentModel.create(comment);
  }

  async updateComment(comment_id: number, comment: Comment): Promise<[number, Comment[]]> {
    return this.commentModel.update(comment, {where: {id: comment_id}})
  }

  async deleteComment(comment_id:number): Promise<number> {
    return this.commentModel.destroy({where : {id: comment_id}})
  }
}