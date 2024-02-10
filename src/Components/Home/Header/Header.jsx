import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import HeartIcon from '../../Icon/HeartIcon';
import Search from './Search';
import SearchResults from './SearchResult';

const Header = () => {
    return (
        <div className='flex justify-between p-[50px]'>
            <Link to='/'>
                <img src="Logo (6).png" alt="logo" className='w-[120px] h-[30px]' />
            </Link>
            <div className='flex items-center gap-[20px]'>
                <Link to='/favourite'>
                    <HeartIcon />
                </Link>

                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </div>
        </div>
    );
};

export default Header;