import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <span className="author">Posted by {post.post_user.name} on {formatDate(post.post_date)}</span>
    </div>
  );
};

export default Post;
