import { Request, Response } from "express";
import commentsService from "./commentsService";

class CommentsController {
  async create(request: Request, response: Response) {
    const { user, comment } = request.body;
    const { postId } = request.params;

    if (!user) {
      return response.status(400).json({ error: "User is required!" });
    }

    if (!user.name && !user.email) {
      return response
        .status(400)
        .json({ error: "User and email is required!" });
    }

    const comments = await commentsService.create({
      postId,
      commentId: Math.floor(Math.random() * 65536),
      user,
      text: comment.text,
      like: 0,
      dislike: 0,
    });

    response.json(comments);
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
