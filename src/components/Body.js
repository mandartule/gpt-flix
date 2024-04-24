import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {


  const appRouter = createBrowserRouter([

    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browser',
      element: <Browser />
    }

  ]);

  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
      } else {
        dispatch(removeUser())
      }

    })
  }, [])


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;