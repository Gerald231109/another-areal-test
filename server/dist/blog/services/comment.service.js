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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comment_model_1 = require("../models/comment.model");
let CommentService = class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async findAll() {
        return this.commentModel.findAll();
    }
    async findOne(id) {
        return this.commentModel.findOne({
            where: {
                id,
            },
        });
    }
    async createComment(comment) {
        return this.commentModel.create(comment);
    }
    async updateComment(comment_id, comment) {
        return this.commentModel.update(comment, { where: { id: comment_id } });
    }
    async deleteComment(comment_id) {
        return this.commentModel.destroy({ where: { id: comment_id } });
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comment_model_1.Comment)),
    __metadata("design:paramtypes", [Object])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map