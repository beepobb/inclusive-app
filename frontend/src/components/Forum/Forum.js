import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DefaultLayout from '../Layout/layout';
import './Forum.css'
import Post from '../Post/Post';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import SearchBar from '../SearchBar/SearchBar.js';
import getPosts from '../../contracts/getposts.js';

export default function Forum() {
    const [query, setQuery] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getPosts(query)
            .then(setPosts)
            .catch((err) => {
                console.error(err);
                setPosts([]);
            });
    }, [query])
  
    return (
        <DefaultLayout>
            <div className='forum'>
                <div className='sticky-search'>
                  <SearchBar setQuery={setQuery} />
                </div>
                {
                    (posts && posts.length > 0) ? (
                        <div className="posts">
                            {posts.map((post, index) => 
                                (<Post key={index} post={post} />)
                            )}
                        </div>
                    ): (
                        <div>There are no posts avaialble.</div>
                    )
                }        
                <NavLink to="/forum/new-post">
                    <button className="add-post-button">
                    <i className="fas fa-plus-circle"></i>
                    </button>
                </NavLink>
            </div>
        </DefaultLayout>
      );
}
