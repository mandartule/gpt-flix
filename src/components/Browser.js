import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpCommingMovies from '../hooks/useUpCommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';



const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();

  //subscribing to the store for the GptSearch Toggle
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch );


  return (
    <div className=''>
    
      <Header />
      {
        showGptSearch ? <GptSearch/> : (
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }

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