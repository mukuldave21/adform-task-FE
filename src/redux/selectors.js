import { createSelector } from 'reselect';

export const selectPosts = (state) => state.posts;
export const selectUsers = (state) => state.users;

export const selectEnhancedPosts = createSelector(
  [selectPosts, selectUsers],
  (posts, users) =>
    posts.map((post) => ({
      ...post,
      author: users.find((user) => user.id === post.userId) || null,
      timeToRead: Math.ceil(post.body.length / 100),
    }))
);
