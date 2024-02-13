import React, { useState } from 'react';
import PopularFilms from './Popular Films/PopularFilms';
import RatedFilms from './Movie/Rated Films/RatedFilms';
import { memo } from 'react';
export default memo(function Home() {
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
})
