import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewPostForm from '../NewPostForm/NewPostForm';
import './AddPost.css';

export default function AddPost() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/forum');
  };

  return (
    <div>
      <h1>Create Post</h1>
      <NewPostForm />
      <div>
        <button onClick={handleGoBack}>
          <i className="fa fa-arrow-left"></i>
        </button>
      </div>
    </div>
  );
}
