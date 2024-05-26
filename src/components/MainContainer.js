
import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const MainMovie = movies[8];

  const titleOriginal = MainMovie.original_title;
  const overview = MainMovie.overview;



  return (

    <div>
      <VideoTitle title={titleOriginal} overview={overview} />
      <VideoBackground movieId={MainMovie.id} />
    </div>

  );
}

export default MainContainer;