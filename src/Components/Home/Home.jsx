import React from 'react';
import Main from './Main/Main';
import PopularFilms from './Popular Films/PopularFilms';
import Header from './Header/Header';
import RatedFilms from './Movie/Rated Films/RatedFilms';
import Footer from './Footer/Footer';
import Loading from '../Home/Movie/Loading';

export default function Home() {
    return (
        <div>
            <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
                <Header />
                <Main />
            </div>
            <PopularFilms />
            <RatedFilms />
            <Loading />
            <Footer />
        </div>
    );
}
