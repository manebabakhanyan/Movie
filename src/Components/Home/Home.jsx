import React from 'react';
import PopularFilms from './Popular Films/PopularFilms';
import RatedFilms from './Movie/Rated Films/RatedFilms';

export default function Home() {
    return (
        <div>
            <PopularFilms />
            <RatedFilms />
        </div>
    );
}
