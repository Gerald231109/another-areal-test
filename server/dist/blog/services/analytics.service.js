"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const comment_model_1 = require("../models/comment.model");
const article_model_1 = require("../models/article.model");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
let AnalyticsService = class AnalyticsService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async findAllByDate(dateOne, dateTwo) {
        return this.articleModel.findAll({ include: [{ model: comment_model_1.Comment,
                    where: { createdAt: { [sequelize_2.Op.between]: [new Date(dateOne), new Date(dateTwo)] } } }], });
    }
};
AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(article_model_1.Article)),
    __metadata("design:paramtypes", [Object])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map