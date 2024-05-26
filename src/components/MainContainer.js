
import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const random = Math.floor(Math.random() * 20);

  const MainMovie = movies[random];

  const titleOriginal = MainMovie.original_title;
  const overview = MainMovie.overview;



  return (

    <div>
      <VideoTitle title={titleOriginal} overview={overview} />
      <VideoBackground movieId={MainMovie.id} title={titleOriginal}/>
    </div>

  );
}

export default MainContainer;