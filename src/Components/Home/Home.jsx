import React, { useState } from 'react';
import PopularFilms from './Popular Films/PopularFilms';
import RatedFilms from './Movie/Rated Films/RatedFilms';

export default function Home() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleSelectMovie = (movieId) => {
        setSelectedMovie(movieId);
    };
    return (
        <div>
            <PopularFilms onSelectMovie={handleSelectMovie} />
            <RatedFilms />
        </div>
    );
}
