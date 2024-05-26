import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();


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