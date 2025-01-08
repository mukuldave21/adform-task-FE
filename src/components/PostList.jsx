import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, fetchUsers, deletePost } from '../redux/actions';
import { selectEnhancedPosts } from '../redux/selectors';
import Loader from './Loader';
import moment from 'moment';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectEnhancedPosts);
  const loading = useSelector((state) => state.loading);
  const [loaded, setLoaded] = useState(false);
  const [loadButton, setLoadButton] = useState(false);

  const handleDelete = async (id) => {
    try {
      await dispatch(deletePost(id));
    } catch {
      alert('Failed to delete post. Please try again.');
    }
  };

  const handleClickToLoadBtn = async () => {
    try {
      setLoadButton(true);
      dispatch(fetchPosts());
      dispatch(fetchUsers());
      setLoaded(true);
    } catch {
      setLoadButton(false);
      alert('Failed to load post. Please try again.');
    }
  };

  return (
    <div className="post-list-container">
      {loadButton ? (
        <>
          <h2 className="heading">Posts</h2>
          {(loading || !loaded) &&  <div className="loader-container">
    <Loader />
  </div>}
          {posts.map((post) => (
            <div
              key={post.id}
              className={`post-container ${post.deleted ? 'grayed-out' : ''}`}
            >
              <p className="post-date">
                Date: {moment(post.dateTime).format('YYYY-MM-DD')}
              </p>
              <p className="post-body">{post.body}</p>
              <p className="post-title">{post.title}</p>
              <p className="post-author">
                Author: {post.author ? post.author.name : '-'} (
                {post.author?.company?.name || '-'})
              </p>
              <p className="post-read-time">Time to read: {post.timeToRead} seconds</p>
              {!post.deleted && (
                <button
                  className="delete-button"
                  onClick={() => handleDelete(post.id)}
                >
                  Mark as read
                </button>
              )}
              {post.deleted && <p className="deleted">Post marked as read.</p>}
            </div>
          ))}
        </>
      ) : (
        <button className="load-button" onClick={handleClickToLoadBtn}>
          Click to load
        </button>
      )}
    </div>
  );
}

export default PostList;


