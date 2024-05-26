import { useDispatch } from "react-redux";
import { addPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const nowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();

        console.log(json.results);
        dispatch(addPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}

export default nowPlayingMovies;