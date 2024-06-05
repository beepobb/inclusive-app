import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';
import Spotlight from '../Spotlight/Spotlight';
import DefaultLayout from '../Layout/layout';
import './Forum.css';

const Forum = ({ posts }) => {
  const spotlightData = [
    { title: "Card Title 1", content: "This is some example content for the card 1. Example sentence 2." },
    { title: "Card Title 2", content: "This is some example content for the card 2." },
    { title: "Card Title 3", content: "This is some example content for the card 3." },
    { title: "Card Title 4", content: "This is some example content for the card 4." },
    // Add more spotlight data as needed
  ];

  return (
    <DefaultLayout>
      <div className="forum">
        <h1>Spotlight</h1>
        <div className="spotlight-container">
          {spotlightData.map((data, index) => (
            <div className="spotlight-wrapper" key={index}>
              <Spotlight title={data.title} content={data.content} />
            </div>
          ))}
        </div>
        <h1>New Posts</h1>
        {/* Check if posts array exists and has at least one element */}
        {posts && posts.length > 0 ? (
          <div className="posts">
            {/* Render each post */}
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        ) : (
          // Show message when no posts available
          <div>There are no posts avaialble.</div>
        )}
        <Link to="/forum/new-post">
          <button className="add-post-button">
            <i className="fas fa-plus-circle"></i>
          </button>
        </Link>
      </div>
    </DefaultLayout>
  );    
};

export default Forum;
