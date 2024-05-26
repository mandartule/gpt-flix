
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

  useMovieTrailer(movieId);

  //getting the trailer video from store
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className=' w-screen'>

      <iframe
      className='w-screen aspect-video'
       id="ytplayer"
      type="text/html"
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&controls=0&mute=1&disablekb=1&cc_load_policy=1"}
      />

    </div>
  )
}

export default VideoBackground