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

  findPostId(id: String) {
    return new Promise((resolve) => {
      const comment = comments.filter((value) => value.postId == id);
      
      resolve(comment)
    }
  )}

  findCommentId(id: String) {
    return new Promise((resolve) => {
      const comment = comments.filter((value) => value.commentId == id);
      
      resolve(comment)
    }
  )}

  like(id: String) {
    return new Promise((resolve) => {
      const validCommentId = this.findCommentId(id);

      // if (!validCommentId) {
      //   throw new Error('Not found postId and commentId');
      // };
      
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
