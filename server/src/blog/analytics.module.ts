import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import {AnalyticsService} from "./services/analytics.service";
import {AnalyticsController} from "./controllers/analytics.controller";
import {Article} from "./models/article.model";

@Module({
    imports:[SequelizeModule.forFeature([Article])],
    providers: [AnalyticsService],
    controllers: [AnalyticsController]
})
export class AnalyticsModule {}