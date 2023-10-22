import { AnalyticsService } from "../services/analytics.service";
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    fetchAll(response: any, date: any, date2: any): Promise<any>;
}
