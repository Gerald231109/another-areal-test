import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";

@Controller('article/:id')
export class CommentController {
  constructor(private readonly commentService: CommentService){}

  @Post('/comment/')
  async createComment(@Param('id') id, @Res() response, @Body() comment: Comment) {
    comment.ArticleId = id
    const newComment = await this.commentService.createComment(comment);
    return response.status(HttpStatus.CREATED).json({
      newComment
    })
  }

  @Get('/comment/')
  async fetchAll(@Res() response) {
    const comment = await this.commentService.findAll();
    return response.status(HttpStatus.OK).json({
      comment
    })
  }

  @Get('/comment/:comment_id')
  async findById(@Res() response, @Param('comment_id') id) {
    const comment = await this.commentService.findOne(id);
    return response.status(HttpStatus.OK).json({
      comment
    })
  }

  @Patch('/comment/:comment_id')
  async update(@Res() response, @Param('comment_id') id, @Body() comment) {
    const updateComment = await this.commentService.updateComment(id, comment);
    return response.status(HttpStatus.OK).json( {updateComment})
  }

  @Delete('/comment/:comment_id')
  async delete(@Res() response, @Param('comment_id') id) {
    const comment = await this.commentService.deleteComment(id);
    return response.status(HttpStatus.OK).json(comment)
  }
}