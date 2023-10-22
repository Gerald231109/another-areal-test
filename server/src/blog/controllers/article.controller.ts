import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { Article } from "../models/article.model";
import { ArticleService } from "../services/article.service";

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService){}

    @Post()
    async createArticle(@Res() response, @Body() article: Article) {
        const newArticle = await this.articleService.createArticle(article);
        return response.status(HttpStatus.CREATED).json({
            newArticle
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const articles = await this.articleService.findAll();
        return response.status(HttpStatus.OK).json({
            articles
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const article = await this.articleService.findOne(id);
        return response.status(HttpStatus.OK).json({
            article
        })
    }

    @Patch('/:id')
    async update(@Res() response, @Param('id') id, @Body() article) {
        const updateArticle = await this.articleService.updateArticle(id, article);
        return response.status(HttpStatus.OK).json( {updateArticle})
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const article = await this.articleService.deleteArticle(id);
        return response.status(HttpStatus.OK).json(article)
    }
}