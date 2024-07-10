import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import './NewPostForm.css';
import createPost from '../../contracts/createpost.js';

const NewPostForm = () => {
  const [user] = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && user) {
      createPost({
        title: title,
        content: content,
        post_user_id: user.id,
      })
        .then((result) => {
          alert('New post created!')
          setTitle('');
          setContent('');
          navigate('/forum');
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong, please try again");
        })
    }
  };

  return (
    <form className="new-post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default NewPostForm;
