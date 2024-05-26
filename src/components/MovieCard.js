import React from 'react'
import { CDN_URL } from '../utils/constants'

const MovieCard = (movie) => {

 
  return (
    <div className='w-48 mr-3'>
      <img src={CDN_URL+movie.movie.poster_path} alt={movie.movie.title}/>
    </div>

  )
}

export default MovieCard