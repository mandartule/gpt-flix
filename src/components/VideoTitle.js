
import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-12 absolute mt-72'>
      <h1 className='text-4xl font-bold dark:text-white'>{title}</h1>
      <p className="text-left rtl:text-right text-gray-400 dark:text-gray-400 w-1/3">{overview}</p>

      <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Play
          </span>
        </button>
        <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-1 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">More Info</button>
      </div>


    </div>
  )
}

export default VideoTitle