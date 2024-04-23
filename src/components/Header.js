import React from 'react'
import logo from '../utils/Images/logo.png'


const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black w-full  '>
      <img className=' w-36  ml-16 mt-6' src={logo} alt='Netflix Logo'></img>
    </div>
  )
}

export default Header