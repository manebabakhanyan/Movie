import React from 'react';
import Main from './Main/Main';
import PopularFilms from './Popular Films/PopularFilms';
import Header from './Header/Header';
import RatedFilms from './Movie/Rated Films/RatedFilms';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <div>
            <PopularFilms />
            <RatedFilms />
        </div>
    );
}
