// in-memory cache to store blog posts
var posts = {
  1: {
    id: 1,
    title: 'A very long day',
    content: 'Today was a very long day',
    creationDate: new Date().getTime(),
    views: 0
  }
};

module.exports = {

  add: function(post) {
    posts[post.id] = post;
    return post.id;
  },

  get: function(optId) {
    if (optId) {
      return posts.optId;
    }
    return posts;
  },

  del: function(id) {
    // remove the post from the cache
    delete posts[id];
  },

  update: function(id, post) {
    // update the post in the cache
    posts[post.id] = post;
    return post;
  }

};
