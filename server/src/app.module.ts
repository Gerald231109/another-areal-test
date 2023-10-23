import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './blog/article.module';
import { CommentModule } from './blog/comment.module';
import { ConfigModule } from './config.module';
import { Dialect } from 'sequelize'
import {AnalyticsModule} from "./blog/analytics.module";

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadModels: true,
    synchronize: true
  }), ArticleModule, CommentModule, AnalyticsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
