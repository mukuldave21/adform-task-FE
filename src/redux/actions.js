import { GET_POSTS, GET_USERS } from '../graphql/queries';
import client from '../apolloClient';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = () => async (dispatch) => {
  const { data } = await client.query({ query: GET_POSTS });
  dispatch({ type: FETCH_POSTS_SUCCESS, payload: data.posts });
};

export const fetchUsers = () => async (dispatch) => {
  const { data } = await client.query({ query: GET_USERS });
  dispatch({ type: FETCH_USERS_SUCCESS, payload: data.users });
};

export const deletePost = (id) => async (dispatch) => {
    
//   const { data } = await client.mutate({ mutation: DELETE_POST, variables: { id } });
//   if (data.deletePost) {
    dispatch({ type: DELETE_POST, payload: id });
//   } else {
//     throw new Error('Failed to delete post');
//   }
};

