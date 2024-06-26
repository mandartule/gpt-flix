import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import nowPlaying from "../utils/Images/data/nowPlaying";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        // const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        // const json = await data.json();
        
        //console.log(json);
        const json = nowPlaying;
        
        dispatch(addPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;