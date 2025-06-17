import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import validate from '../utils/validate'
import backgroundBlur from '../utils/Images/backgroundBlur.jpg'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice.js'


const Login = () => {

  const toggleForm = () => {
    setSignIn(!signIn)
  }

  const [signIn, setSignIn] = useState(true)
  const [message, setMessage] = useState()

  //hook should always be at the top of component
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  

  //dispatch function to update display name
  const dispatch = useDispatch()

  const handleButtonClick = () => {

    //validation

    const message = validate(email.current.value, password.current.value);
    setMessage(message);

    if (message) return;

    //Authentication
    if (!signIn) {

      //Sign Up

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          //updating profile with name and photo
            updateProfile(user, {
             displayName: name.current.value,
             photoURL: "https://example.com/jane-q-user/profile.jpg"
            })
            .then(() => {
               //update the store
              //here we are taking the updated user details from the auth object and updating the store
              const {uid,email,displayName,photoURL} = auth.currentUser;
              
              dispatch(addUser({
                uid:uid,
                email:email,
                displayName:displayName,
                photoURL:photoURL
              }))
 
              

            }).catch((error) => {
              setMessage(error.message)
            });
        })
        .catch((error) => {

          const errorMessage = error.message;
          setMessage(errorMessage)
        });
    } else {

      //Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {

          const errorMessage = error.message;
          setMessage(errorMessage)
        });
    }

  }


  return (
    <div className=''>
      <Header />

      <form onSubmit={(e) => { e.preventDefault() }} className=' text-left w-full md:w-3/12 absolute p-12 bg-black my-44 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold text-white  mb-8'>{signIn ? 'Sign In' : 'Sign Up'}</h1>

        {!signIn && (<input ref={name} className='bg-indigo-300 text-black my-2 p-4 w-full rounded-sm placeholder-gray-600' type='text' placeholder='Name'></input>)}

        <input ref={email} className='bg-indigo-300 text-black my-2  p-4 w-full rounded-sm placeholder-gray-600' type='email' placeholder='Email'></input>

        <input ref={password} className='bg-indigo-300 text-black my-2 p-4 w-full rounded-sm placeholder-gray-600' type='password' placeholder='Password'></input>


        {message !== null ? (
          <p className='text-red-500 font-medium mt-2'>{message}</p>
        ) : (
          <p className='text-green-500 font-medium mt-2'>Validation Successful 😄</p>
        )}



        <button onClick={handleButtonClick} className=' bg-indigo-400 text-black font-medium my-2 mt-16 p-4 w-full rounded-sm' type='submit'>{signIn ? 'Sign In' : 'Sign Up'}</button>

        <h4 className='text-white text-center'>{
          signIn ? 'New to GptFlix ? ' : 'Already have an account ? '
        } <span onClick=
          {toggleForm} className='text-red-500 cursor-pointer'>{
              signIn ? 'Sign Up' : 'Sign In'
            }</span>
        </h4>
      </form>


      <img src={backgroundBlur} alt='login background'></img>
    </div>
  )
}

export default Login