import { response } from "express";
import comments from "./mocks/comments";

class CommentsService {
  findById(id: String) {
    return new Promise((resolve) =>
      resolve(comments.filter((comment) => comment.postId == id))
    );
  }

  create({
    postId,
    commentId,
    user: { name, email, site },
    text,
    like,
    dislike,
  }: any) {
    return new Promise((resolve) => {
      const newComment = {
        postId,
        commentId,
        user: { name, email, site },
        text,
        like,
        dislike,
        createdAt: new Date(),
      };

      comments.push(newComment);
      resolve(newComment);
    });
  }

  like(id: String) {
    return new Promise((resolve) => {
      const validCommentId = comments.find((value) => value.commentId == id);
      
      if (!validCommentId) {
        throw new Error('Not found postId and commentId');
      };
      
      const countLike = validCommentId.like ++;
      resolve(countLike);
    });
  }

  dislike(id: String) {
    return new Promise((resolve) => {
      const validCommentId = comments.find((value) => value.commentId == id);
      
      if (!validCommentId) {
        throw new Error('Not found postId and commentId');
      };
      
      const countDislike = validCommentId.dislike ++;
      resolve(countDislike);
    });
  }
}

export default new CommentsService();
