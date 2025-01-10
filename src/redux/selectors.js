import { createSelector } from 'reselect';

export const selectPosts = (state) => state.posts;
export const selectUsers = (state) => state.users;
export const filterValue = (state) => state.filter;
export const deletedPostsIdArray = (state) => state.deletedPosts;

export const selectEnhancedPosts = createSelector(
  [selectPosts, selectUsers,filterValue,deletedPostsIdArray],
  (posts, users,filterValue,deletedIds) =>
    posts.filter((post)=>{  const author = users.find((user) => user.id === post.userId);
        const matchesTitle = post.title.toLowerCase().includes(filterValue.toLowerCase());
        const matchesBody = post.body.toLowerCase().includes(filterValue.toLowerCase());
        const matchesAuthor =
          author && author.name.toLowerCase().includes(filterValue.toLowerCase());
           const isNotDeleted = !deletedIds.includes(post.id);

        return isNotDeleted && (matchesTitle || matchesBody || matchesAuthor); }).map((post) => ({
      ...post,
      author: users.find((user) => user.id === post.userId) || null,
      timeToRead: Math.ceil(post.body.length / 100),
    }))
);
