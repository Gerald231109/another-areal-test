import { Comment } from "../models/comment.model";
export declare class CommentService {
    private commentModel;
    constructor(commentModel: typeof Comment);
    findAll(): Promise<Comment[]>;
    findOne(id: string): Promise<Comment>;
    createComment(comment: Comment): Promise<Comment>;
    updateComment(comment_id: number, comment: Comment): Promise<[number, Comment[]]>;
    deleteComment(comment_id: number): Promise<number>;
}
