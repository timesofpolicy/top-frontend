import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            });
        })
        // console.log(id);
    });

    if(!postInfo) return '';
  return (
    <>
        <main className="pt-32 pb-16 lg:pt-16 lg:pb-24 bg-white post-page">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl mt-4">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                                <img className="mr-4 w-16 h-16 rounded-full" src="" alt="Jese Leos" />
                                    <div>
                                    <p href="/" rel="author" className="text-lg font-semibold text-gray-900 ">{postInfo.author.name}</p>
                                    {/* <p className="text-base font-light text-gray-500 ">Graphic Designer, educator & CEO</p> */}
                                    <p className="text-sm font-light text-gray-500 ">
                                        <time pubDate dateTime="2022-02-08" title="February 8th, 2022">
                                        {format(new Date(postInfo.createdAt), 'MMM d, yyyy HH:mm')}
                                        </time>
                                    </p>
                                    </div>
                            </div>
                        </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">
                        {postInfo.title}
                    </h1>
                    </header>
                {userInfo.id === postInfo.author._id && (
                    <div>
                        <Link className='' to={`/edit/${postInfo._id}`}>
                            <button type='button' 
                                className='text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center'>
                                <FiEdit className='mr-2' />
                                Edit Post
                            </button>
                        </Link>
                    </div>
                )}
                <figure> <img src={`${process.env.REACT_APP_BACKEND_URL}${postInfo.cover}`} alt="" /></figure>
                <div className='post-html' dangerouslySetInnerHTML={{__html:postInfo.content}} />
                </article>
            </div>
        </main>
    </>
  )
}

export default PostPage
