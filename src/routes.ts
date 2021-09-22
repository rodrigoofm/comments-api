import { Router } from "express";
import commentsController from "./app/commentsController";

const router = Router();

router.get('/posts/:id/comments', commentsController.findById);
router.post('/posts/:id/comments', commentsController.create);

export default router;