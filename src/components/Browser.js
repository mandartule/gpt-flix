import React from 'react'
import Header from './Header'
import nowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browser = () => {

  nowPlayingMovies();

  return (

    <div className=''>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
       
        1)Movies
          -Video Background
          -Video Title

        2)Secondary Container
          -Moview List * n
           -Movie Cards * n
         
       */}
    </div>
  )
}

export default Browser;