import { Request, Response } from "express";
import commentsService from "./commentsService";

class CommentsController {
  async create(request: Request, response: Response) {
    const { commentId, user, comment, like, dislike } = request.body;
    const { postId } = request.params;
    if (!user) {
      return response.status(400).json({ error: "User is required!" });
    }

    if (!user.name && !user.email) {
      return response
        .status(400)
        .json({ error: "User and email is required!" });
    }

    const newComment = await commentsService.create({
      postId,
      commentId,
      parentCommentId: comment.parentCommentId,
      user,
      text: comment.text,
      like,
      dislike,
    });

    
    response.json(newComment);
  }

  async findById(request: Request, response: Response) {
    const { postId } = request.params;
    const comment = await commentsService.findPostId(postId);

    response.json(comment);
  }

  async like(request: Request, response: Response) {
    try {
      const { postId, commentId } = request.params;

      await commentsService.like(postId, commentId);

      return response.status(204).send();
    } catch (error) {
      return response.status(404).json("Comment not found");
    }
  }

  async dislike(request: Request, response: Response) {
    try {
      const { postId, commentId } = request.params;
      await commentsService.dislike(postId, commentId);

      return response.status(204).send();
    } catch (error) {
      return response.status(404).json("Comment not found");
    }
  }
}

export default new CommentsController();
