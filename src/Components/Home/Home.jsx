import React from 'react'
import Header from './Header/Header'
import { Route, Routes } from 'react-router-dom'
import Main from './Main/Main'

export default function Home() {
    return (
        <div className='bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]'>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </div>
    )
}
