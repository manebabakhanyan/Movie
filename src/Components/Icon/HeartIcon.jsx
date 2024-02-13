import React, { useState } from 'react';
import useFavouriteFilms from '../../Store/useFavouriteFilms';

export default function HeartIcon({ movie }) {
    const { addFilm, deleteFilm } = useFavouriteFilms();
    const [isFavourite, setIsFavourite] = useState(false);

    function handleClick() {
        if (!isFavourite) {
            addFilm(movie);
        } else {
            deleteFilm(movie.id);
        }
        setIsFavourite(!isFavourite);
    };

    return (
        <div onClick={handleClick} className={`text-end ${isFavourite ? 'text-red' : ''}`}>
            <i className={`far fa-heart cursor-pointer ${isFavourite ? 'text-red' : ''}`}></i>
        </div>
    );
}
