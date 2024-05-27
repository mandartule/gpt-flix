
import React from 'react'

const VideoTitle = ({ title, overview }) => {
  const limitedOverview = overview.length > 100 ? overview.substring(0, 200) + "..." : overview;

  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute  bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold dark:text-white mt-40 mb-4'>{title}</h1>
      <p className="text-left rtl:text-right text-gray-400 dark:text-gray-300 w-1/3 mb-4 max-[20]:">{limitedOverview}</p>

      <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          ▷ Play
          </span>
        </button>
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-3 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">More Info</button>
      </div>


    </div>
  )
}

export default VideoTitle