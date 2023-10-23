import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { CommentController } from "./controllers/comment.controller";
import { Comment } from "./models/comment.model";
import { CommentService } from "./services/comment.service";

@Module({
  imports:[SequelizeModule.forFeature([Comment])],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}