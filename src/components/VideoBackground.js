
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId , title }) => {
  
  useMovieTrailer(movieId, title);

  //getting the trailer video from store
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className=' w-scree'>

      <iframe
      className='w-screen aspect-video'
       id="ytplayer"
      type="text/html"
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&controls=0&mute=1&disablekb=1&cc_load_policy=1&vq=hd1080"}
      />

    </div>
  )
}

export default VideoBackground