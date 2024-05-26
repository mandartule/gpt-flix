import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId,title) => {
    
    const dispatch = useDispatch();
    
    const getMovieVideo = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos', API_OPTIONS)
        const json = await data.json();


        //filtering the requried video trailer
        const video = json.results.filter(video => video.type === 'Trailer');
        const trailer = video.length ? video[0] : json.results[0];

        //storing the trailer video to store
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        getMovieVideo();
    }, [title]);

}

export default useMovieTrailer;