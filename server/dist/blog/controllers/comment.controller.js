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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_model_1 = require("../models/comment.model");
const comment_service_1 = require("../services/comment.service");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async createComment(id, response, comment) {
        comment.ArticleId = id;
        const newComment = await this.commentService.createComment(comment);
        return response.status(common_1.HttpStatus.CREATED).json({
            newComment
        });
    }
    async fetchAll(response) {
        const comment = await this.commentService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            comment
        });
    }
    async findById(response, id) {
        const comment = await this.commentService.findOne(id);
        return response.status(common_1.HttpStatus.OK).json({
            comment
        });
    }
    async update(response, id, comment) {
        const updateComment = await this.commentService.updateComment(id, comment);
        return response.status(common_1.HttpStatus.OK).json({ updateComment });
    }
    async delete(response, id) {
        const comment = await this.commentService.deleteComment(id);
        return response.status(common_1.HttpStatus.OK).json(comment);
    }
};
__decorate([
    (0, common_1.Post)('/comment/'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, comment_model_1.Comment]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)('/comment/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "fetchAll", null);
__decorate([
    (0, common_1.Get)('/comment/:comment_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('comment_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)('/comment/:comment_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('comment_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/comment/:comment_id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('comment_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "delete", null);
CommentController = __decorate([
    (0, common_1.Controller)('article/:id'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map