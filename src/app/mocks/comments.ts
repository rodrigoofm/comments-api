let comments = [{
  postId: "1",
  commentId: "1",
  parentCommentId: null,
  user: {
    name: "Rodrigo",
    email: "rodrigo@mail.com",
    site: null,
  },
  text: "Shoow!",
  like: 1,
  dislike: 0,
  createdAt: new Date(),
  children: [{
    postId: '',
    commentId: "12",
    parentCommentId: "1",
    user: {
      name: "Luizinho",
      email: "Luizinho@mail.com",
      site: null
    },
    text: "Sucesso! :)",
    like: 0,
    dislike: 0,
    createdAt: new Date(),
  }]
}];

export default comments;