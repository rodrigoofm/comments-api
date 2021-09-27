import comments from "./mocks/comments";

class CommentsService {
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

  findById(id: String) {
    return new Promise((resolve) => {
      const comment = comments.find((value) => value.postId == id);
      
      resolve(comment)
    }
  )}

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
