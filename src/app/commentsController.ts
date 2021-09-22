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
    const { id } = request.params;
    const { user: { name, email, site }, text } = request.body;

    const comment = await commentsService.create({
      commentId: id, 
      user: { name, email, site }, 
      text,
    });

    response.json(comment);
  }
}

export default new CommentsController();