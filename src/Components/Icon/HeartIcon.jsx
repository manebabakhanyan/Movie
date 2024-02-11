import React, { useState } from 'react';
import useFavouriteFilms from '../../Store/useFavouriteFilms';

export default function HeartIcon({ movie }) {
    const { addFilm } = useFavouriteFilms();
    const [isFavourite, setIsFavourite] = useState(false);

    const handleClick = () => {
        setIsFavourite(!isFavourite);
        if (!isFavourite) {
            addFilm(movie);
            try {
                const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
                savedMovies.push(movie);
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            } catch (error) {
                console.error('Error');
            }
        }
    };

    return (
        <div onClick={handleClick} className={`text-end ${isFavourite ? 'text-red' : ''}`}>
            <i className={`far fa-heart cursor-pointer ${isFavourite ? 'text-red' : ''}`}></i>
        </div>
    );
};