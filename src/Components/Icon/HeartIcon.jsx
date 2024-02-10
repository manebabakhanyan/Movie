import React from 'react';
import useFavouriteFilms from '../../Store/useFavouriteFilms';

const HeartIcon = ({ movie }) => {
    const { addFilm } = useFavouriteFilms();

    const handleClick = () => {
        addFilm(movie);
        try {
            const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
            savedMovies.push(movie);
            localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        } catch (error) {
            console.error('Error saving movie to favorites:', error);
        }
    };

    return (
        <div onClick={handleClick} className='text-red text-end'>
            <i className="far fa-heart cursor-pointer"></i>
        </div>
    );
};

export default HeartIcon;