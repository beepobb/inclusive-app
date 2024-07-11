import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../Layout/layout';
import './Forum.css'
import Post from '../Post/Post';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import SearchBar from '../SearchBar';

export default function Forum() {
    const handleAddPost = () => {
        // Implement logic for adding a new post
        console.log("Adding a new post");
    };
    const post1 = {
        title: "Thread 1",
        content: "hehehoho",
        author: "beepobb"
    }
  
    return (
        <DefaultLayout>
            <div className='forum'>
                <div className='sticky-search'>
                  <SearchBar/>
                </div>
                <>
                    <Post post={post1}/>
                    <Post post={post1}/>
                </>
                <Link to="/forum/new-post">
                    <button className="add-post-button" onClick={handleAddPost}>
                        <AddCircleIcon fontSize="large" />
                    </button>
                </Link>
            </div>
        </DefaultLayout>
      );
}
