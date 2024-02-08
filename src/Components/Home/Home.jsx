import React from 'react'
import Main from './Main/Main'
import PopularFilms from './Popular Films/PopularFilms'
import Header from './Header/Header'

export default function Home() {
    return (
        <div>
            <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
                <Header />
                <Main />
            </div>
            <PopularFilms />
        </div>
    )
}
