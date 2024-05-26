
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  //subscribed to the store
  const movies =  useSelector(state => state.movies.nowPlayingMovies);
  const popular = useSelector(state => state.movies.popularMovies);
  const topRated = useSelector(state => state.movies.topRatedMovies);
  const upComming = useSelector(state => state.movies.upCommingMoviesMovies);

  if(!movies) return

  return (
    <div className='bg-black'>
      <div className='  -mt-28 relative z-10'>
      {movies && <MovieList title={"Now Playing"} movies = {movies}/>}
      {topRated && <MovieList title={"Top Rated"} movies = {topRated}/>}
      {upComming && <MovieList title={"Up Comming"} movies = {upComming}/>}
      {popular && <MovieList title={"Trending"} movies = {popular}/>} 
      </div>
      
    </div>
  )
}

export default SecondaryContainer