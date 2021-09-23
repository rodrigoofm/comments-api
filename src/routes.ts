import { Router } from "express";
import commentsController from "./app/commentsController";

const router = Router();

router.get('/posts/:postId/comments', commentsController.findById);
router.post('/posts/:postId/comments', commentsController.create);

export default router;