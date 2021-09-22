import comments from './mocks/comments';

class CommentsService {
  findById(id: String) {
    return new Promise((resolve) => resolve(
      comments.find((comment) => comment.commentId == id),
    ));
  }

  create({ commentId, user: { name, email, site }, text }: any ) {
    return new Promise((resolve) => {
      const newComment = {
        commentId,
        user: { name, email, site },
        text,
        createdAt: new Date(),
      };

      comments.push(newComment);
      resolve(newComment);
    });
  }
}

export default new CommentsService();