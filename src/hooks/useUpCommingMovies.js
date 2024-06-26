import { useDispatch } from "react-redux";
import { addUpCommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import upCommingMovies from "../utils/Images/data/upCommingMovies";



const useUpCommingMovies = () => {

    const dispatch = useDispatch();

    const getUpCommingMovies = async () => {
        // const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        // const json = await data.json();
        
        // console.log(json);
        const json = upCommingMovies;
        dispatch(addUpCommingMovies(json.results))
    }

    useEffect(() => {
        getUpCommingMovies();
    }, []);

}

export default useUpCommingMovies;