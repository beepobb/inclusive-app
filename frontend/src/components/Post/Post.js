import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <span className="author">Posted by: {post.author}</span>
    </div>
  );
};

export default Post;
