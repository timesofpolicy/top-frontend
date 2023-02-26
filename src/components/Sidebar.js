import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="fixed">
        <div className='mt-12 '>
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

              {/* <a href='/' className='mr-4 mt-8 text-xs text-gray-800 border bg-gray-200 p-2 rounded-full w-fit'>
                  Politics
              </a>
              <a href='/' className='mr-4 mt-8 text-xs text-gray-800 border bg-gray-200 p-2 rounded-full w-fit'>
                Geopolitics 
              </a>
              <a href='/' className='mr-4 mt-8 text-xs text-gray-800 border bg-gray-200 p-2 rounded-full w-fit'>
                Economics
              </a>
              <a href='/' className='mr-4 mt-8 text-xs text-gray-800 border bg-gray-200 p-2 rounded-full w-fit'>
                World News
              </a>
              <a href='/' className='mr-4 mt-8 text-xs text-gray-800 border bg-gray-200 p-2 rounded-full w-fit'>
                International Summit
              </a>
              <a href='/' className='mr-4 mt-8 text-xs text-gray-800 border bg-gray-200 p-2 rounded-full w-fit'>
                India Today
              </a> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Sidebar
