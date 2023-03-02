import React, { useEffect, useState } from 'react';
import '../App.css';
import Sidebar from './Sidebar';
import SinglePost from './SinglePost';

const PageLayout = () => {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/post`).then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, [])

  return (
    <>
        <div className='mx-16 px-2 md:px-6 lg:px-8 grid sm:grid-cols-1 md:grid-cols-3 gap-1 mt-16'>
            <div className='col-span-2 border-r border-gray-300'>
                {posts.length > 0 && posts.map((post, postkey) => (
                    <SinglePost key={postkey} {...post} />
                ))}
            </div>
            <div 
            // className={fix ? 'py-4 px-12 border-l border-gray-300 h-[calc(100vh-4rem)] sidebar' : 'py-4 px-12 border-l border-gray-300 h-[calc(100vh-4rem)]'}
            className='py-4 px-12 h-[calc(100vh-4rem)]'
            >
                {/* <Sidebar /> */}
            </div>
        </div>
    </>
  )
}

export default PageLayout
