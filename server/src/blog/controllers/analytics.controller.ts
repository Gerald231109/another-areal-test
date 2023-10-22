import {Controller, Get, HttpStatus, Param, Query, Res} from '@nestjs/common';
import { AnalyticsService } from "../services/analytics.service";


@Controller('analytic/')
export class AnalyticsController {
    constructor(private readonly analyticsService: AnalyticsService){}

    @Get('comments')
    async fetchAll(@Res() response, @Query('date') date, @Query('date2') date2) {
        const articles = await this.analyticsService.findAllByDate(date, date2);
        return response.status(HttpStatus.OK).json({
            articles
        })
    }
}