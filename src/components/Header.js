import React from 'react'
import logo from '../utils/Images/logo.png'
import userLogo from "../utils/Images/userLogo.png"


const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black w-full flex justify-between'>
      <img className=' w-36  ml-16 mt-6' src={logo} alt='Netflix Logo'></img>
      <div className='p-4 m-2 flex justify-between items-start'>
        <div className='mr-3 mt-3'>
          <div className="w-16 h-12 relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover" src={userLogo} alt="User Logo" />
          </div>
          <p className='font-serif text-xl ml-3.5'>user</p>
        </div>
        <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2 mt-5">Log Out</button>


      </div>

    </div>
  )
}

export default Header