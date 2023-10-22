import { Comment } from "../models/comment.model";
import { CommentService } from "../services/comment.service";
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(id: any, response: any, comment: Comment): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    update(response: any, id: any, comment: any): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
