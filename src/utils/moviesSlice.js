import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null
    },
    reducers: {
        addPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },addUpCommingMovies: (state, action) => {
            state.upCommingMoviesMovies = action.payload;
        }


    }
})

export const { addPlayingMovies,addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpCommingMovies } = movieSlice.actions;
export default movieSlice.reducer;