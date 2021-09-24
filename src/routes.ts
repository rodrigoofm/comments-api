import { Router } from "express";
import commentsController from "./app/commentsController";

const router = Router();

router.get('/posts/:postId/comments', commentsController.findById);
router.post('/posts/:postId/comments', commentsController.create);
router.post('/posts/:postId/comments/:commentId/like', commentsController.like);
router.post('/posts/:postId/comments/:commentId/dislike', commentsController.dislike);

export default router;