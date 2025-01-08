import { FETCH_POSTS_SUCCESS, FETCH_USERS_SUCCESS, DELETE_POST } from './actions';

const initialState = {
  posts: [],
  users: [],
  loading: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
   case DELETE_POST:
  return {
    ...state,
    posts: state.posts.map((post) =>
      post.id === action.payload ? { ...post, deleted: true } : post
    ),
  };
    default:
      return state;
  }
};

export default rootReducer;
