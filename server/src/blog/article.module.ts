import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ArticleController } from "./controllers/article.controller";
import { Article } from "./models/article.model";
import {ArticleService } from "./services/article.service";

@Module({
    imports:[SequelizeModule.forFeature([Article])],
    providers: [ArticleService],
    controllers: [ArticleController]
})
export class ArticleModule {}