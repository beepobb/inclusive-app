import React from 'react';
import DefaultLayout from '../Layout/layout';
import './Forum.css'
import Post from '../Post/Post';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import SearchBar from '../SearchBar';

export default function Forum() {
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
                    <Post post={post1}/>
                    <Post post={post1}/>
                    <Post post={post1}/>
                </>
            </div>
            
        </DefaultLayout>
      );
}

// {/* <DefaultLayout>
//       <div className="forum">      
//         <h1>New Posts</h1>
//         {/* Check if posts array exists and has at least one element */}
//         {posts && posts.length > 0 ? (
//           <div className="posts">
//             {/* Render each post */}
//             {posts.map((post, index) => (
//               <Post key={index} post={post} />
//             ))}
//           </div>
//         ) : (
//           // Show message when no posts available
//           <div>There are no posts avaialble.</div>
//         )}
//         <Link to="/forum/new-post">
//           <button className="add-post-button">
//             <i className="fas fa-plus-circle"></i>
//           </button>
//         </Link>
//       </div>
//     </DefaultLayout> */}