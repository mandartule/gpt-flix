import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {


  return (
    <div className='pl-6 mt-4 '>

      <h4 className="text-2xl dark:text-white mb-1 font-normal">{title}</h4>

      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex '>
          {movies.map((movie) => {

            return <MovieCard key={movie.id} movie={movie} />
          })}
        </div>
      </div>

    </div>
  )
}

export default MovieList