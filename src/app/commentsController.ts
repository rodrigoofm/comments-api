import { Request, Response } from "express";
import commentsService from "./commentsService";

class CommentsController {
  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const comment = await commentsService.findById(id);

    if (!comment) {
      return response.status(404).json({ error: 'Comment not found!' });
    }

    response.json(comment);
  }

  async create(request: Request, response: Response) {
    const {user, comment} = request.body;

    if (!user) {
      return response.status(400).json({ error: 'User is required!' });
    }

    if (!user.name && !user.email) {
      return response.status(400).json({ error: 'User and email is required!' });
    }

    const comments = await commentsService.create({
      commentId: Math.floor(Math.random() * 65536), 
      user, 
      text: comment.text,
    });

    response.json(comments);
  }
}

export default new CommentsController();