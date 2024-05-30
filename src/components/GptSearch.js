import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backgroundBlur from '../utils/Images/temp.jpg'

const GptSearch = () => {
    return (
        <div>
            <img src={backgroundBlur} className='-z-10 absolute' alt='login background'></img>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch