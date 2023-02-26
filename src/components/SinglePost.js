import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({_id, title, summary, cover, content, createdAt, author}) => {
  return (
    <div className='mt-16 px-4'>
            {/* Post box main starts */}
            <div className='border-b py-2 pb-8'>
              {/* post author and date */}
              <div className='flex align-center justify-start m-auto'>
                <img href="/" src='/profile-icon.png' className='w-6 h-6' alt='author-avatar' />
                <span className='text-sm text-gray-800 font-normal ml-3 inline-flex items-center'>
                    {author.name}
                </span>
                <span className='text-md text-gray-600 font-bold ml-2 flex items-start'></span>
                <span className='text-[11px] text-gray-500 font-normal ml-2 inline-flex items-center'>
                    {format(new Date(createdAt), 'MMM d, yyyy HH:mm')}
                </span>
              </div>
              {/* Post heading, desc and image */}
              <div className='grid grid-cols-3 mt-4'>
                <div className='col-span-2'>
                  {/* heading */}
                  <Link to={`/post/${_id}`}>
                  <div className='flex'>
                    <span className='text-2xl text-gray-800 font-bold'>
                        {title}
                    </span>
                  </div>
                  </Link>
                  {/* heading ends */}
                  {/* Description of post starts */}
                  <Link to={`/post/${_id}`}>
                  <div className='flex mt-2 pr-4'>
                    <span className='text-base text-gray-600 font-normal'>
                      {summary}
                    </span>
                  </div>
                  </Link>
                  {/* Description of post ends */}
                  {/* Category and Read time starts */}
                  <div className='flex flex-row mt-8 py-2'>
                    <div>
                      <span className='text-xs text-gray-600 border bg-gray-200 p-1 rounded-full'>Category Name</span>
                    </div>
                    <div>
                      <span className='text-xs text-gray-500 ml-2'>6 min read</span>
                    </div>
                  </div>
                  {/* Category and Read time ends */}
                </div>
                <div className='flex justify-center items-center'>
                    <Link to={'/post/id'}>
                    {/* <div className='h-32 bg-cover bg-center'
                        style={{backgroundImage: `url(${'http://localhost:4000/'+cover})`}}
                    > */}
                    <img className='w-full' src={'http://localhost:4000/'+cover} alt='blog-post' />
                    {/* </div> */}
                    </Link>
                </div>
              </div>
            </div>
            {/* Post box main ends */}
    </div>
  )
}

export default SinglePost
