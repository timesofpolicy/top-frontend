import React from 'react';

const Post = () => {
  return (
    <>
        <div className='mx-16 px-2 md:px-6 lg:px-8 grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
        {/* Right col */}
        <div className='col-span-2'>
          <div className='mt-12 px-4'>
            {/* Post box main starts */}
            <div className='border-b py-2 pb-8'>
              {/* post author and date */}
              <div className='flex align-center justify-start m-auto'>
                <img href="/" src='/profile-icon.png' className='w-6 h-6' alt='author-avatar' />
                <span className='text-sm text-gray-800 font-normal ml-3 inline-flex items-center'>Author Name</span>
                <span className='text-md text-gray-600 font-bold ml-2 flex items-start'> || </span>
                <span className='text-sm text-gray-500 font-normal ml-2 inline-flex items-center'>Jan 25, 2023</span>
              </div>
              {/* Post heading, desc and image */}
              <div className='grid grid-cols-3 mt-4'>
                <div className='col-span-2'>
                  {/* heading */}
                  <div className='flex'>
                    <span className='text-2xl text-gray-800 font-bold'>Blog post heading is here</span>
                  </div>
                  {/* heading ends */}
                  {/* Description of post starts */}
                  <div className='flex mt-2 pr-4'>
                    <span className='text-base text-gray-600 font-normal'>
                      AI is disrupting everything, even trillion-dollar businesses — Last month, all alarms went off in Google’s headquarters. Even the New York Times has an entire article dedicated to this. According to them
                    </span>
                  </div>
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
                <div className='flex justify-center'>
                  <img className='h-32 w-32' src='/placeholder-img.jpeg' alt='blog-post' />
                </div>
              </div>
            </div>
            {/* Post box main ends */}
          </div>
        </div>
        
        {/* Left col */}
        <div className="py-4 px-12 border-l border-gray-300 sticky h-full">
          {/* Recommended Topics */}
          {/* <Sidebar /> */}
          {/* <div className='mt-12'>
            <span className='text-md text-gray-800 font-semibold'>Recommended Category</span>
          </div>
          <div className=''>
            <div className='border-b border-gray-300 py-6'>
              <a href='/' className='text-xs text-gray-800 border bg-gray-200 px-2 py-1 rounded-full mb-2 mr-2 inline-block hover:scale-110'>
                  Politics
              </a>
              <a href='/' className='text-xs text-gray-800 border bg-gray-200 px-2 py-1 rounded-full mb-2 mr-2 inline-block hover:scale-110'>
                Geopolitics 
              </a>
              <a href='/' className='text-xs text-gray-800 border bg-gray-200 px-2 py-1 rounded-full mb-2 mr-2 inline-block hover:scale-110'>
                Economics
              </a>
              <a href='/' className='text-xs text-gray-800 border bg-gray-200 px-2 py-1 rounded-full mb-2 mr-2 inline-block hover:scale-110'>
                World News
              </a>
              <a href='/' className='text-xs text-gray-800 border bg-gray-200 px-2 py-1 rounded-full mb-2 mr-2 inline-block hover:scale-110'>
                International Summit
              </a>
              <a href='/' className='text-xs text-gray-800 border bg-gray-200 px-2 py-1 rounded-full mb-2 mr-2 inline-block hover:scale-110'>
                India Today
              </a>
            </div>
          </div> */}
        </div>
      </div> 
    </>
  )
}

export default Post
