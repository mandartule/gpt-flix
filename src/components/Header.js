import React, { useEffect } from 'react'
import logo from '../utils/Images/logo.png'
import userLogo from "../utils/Images/userLogo.png"
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase.js'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'


const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user)

  const handleSignOut = () => {

    signOut(auth)
      .then(() => {

      })
      .catch((err) => {
        navigate("/error")
      })

  }

  const dispatch = useDispatch()
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: "",
        }))

        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }

    })

    return () => unsubscribe();

  }, [])

  return (
    <div className='absolute z-50 bg-gradient-to-b from-black  w-full flex justify-between'>

      {user ? (
        <div className=' w-24  ml-8 mt-6 '>
          <img className='' src={logo} alt='Gptflix Logo'></img>
        </div>
      ) : (
        <div className=' w-24  ml-8 mt-6 bg-gradient-to-t from-black '>
        <img className='' src={logo} alt='Gptflix Logo'></img>
      </div>
      )}


      {user && <div className='p-4 m-2 flex justify-between items-start'>
        <div className='mr-3 mt-3'>
          <div className="w-16 h-12 relative overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover" src={userLogo} alt="User Logo" />
          </div>
          <p className='font-serif text-xl ml-3 text-white'>{user.displayName}</p>
        </div>
        <button onClick={handleSignOut} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2 mt-5">Log Out</button>


      </div>}

    </div>
  )
}

export default Header