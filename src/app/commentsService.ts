import comments from "./mocks/comments";

class CommentsService {
  create({
    postId,
    commentId,
    parentCommentId,
    user: { name, email, site },
    text,
    children
  }: any) {
    return new Promise((resolve) => {
      const newComment = {
        postId,
        commentId: Math.floor(Math.random() * 65536),
        parentCommentId,
        user: { name, email, site },
        text,
        like: 0,
        dislike: 0,
        createdAt: new Date(),
      };


      if (newComment.parentCommentId) {
        const newAnswer = {
          ...newComment,
          children: [{
            commentId: Math.floor(Math.random() * 65536),
            parentCommentId,
            user: { name, email, site },
            text,
            createdAt: new Date(),
          }],
        }
        console.log(newAnswer)
        comments.push(newAnswer);
        resolve(newAnswer);
      }

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
      const comment = comments.find((value) => value.commentId == id);
      
      resolve(comment)
    }
  )}

  like(postId: String, commentId: String) {
    return new Promise((resolve) => {
      const validLike = comments.find((value) => value.postId == postId && value.commentId == commentId);

      if (!validLike) {
        throw new Error('Not found postId and commentId');
      };
      
      const countLike = validLike.like ++;
      resolve(countLike);
    });
  }

  dislike(postId: String, commentId: String) {
    return new Promise((resolve) => {
      const validDislike = comments.find((value) => value.postId == postId && value.commentId == commentId);
      
      if (!validDislike) {
        throw new Error('Not found postId and commentId');
      };
      
      const countDislike = validDislike.dislike ++;
      resolve(countDislike);
    });
  }
}

export default new CommentsService();
