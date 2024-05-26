
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  //subscribed to the store
  const movies =  useSelector(state => state.movies.nowPlayingMovies);
  const popular = useSelector(state => state.movies.popularMovies);
  const topRated = useSelector(state => state.movies.topRatedMovies);

  if(!movies) return

  return (
    <div className='bg-black'>
      <div className='  -mt-28 relative z-10'>
      {movies && <MovieList title={"Now Playing"} movies = {movies}/>}
      {topRated && <MovieList title={"Top Rated"} movies = {topRated}/>}
      {popular && <MovieList title={"Trending"} movies = {popular}/>} 
      <MovieList title={"Now Playing"} movies = {movies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer