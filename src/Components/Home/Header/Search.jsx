import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (search.trim() !== '') {
            location.href = `/search?query=${(search)}`;
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && search.trim() !== '') {
            handleSearch();
        }
    };

    return (
        <div className='flex justify-end items-center mr-[30px]'>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyPress}
                className='rounded-[30px] border-2 border-yellow p-[10px] bg-gradient-to-br pl-[10px] text-white'
            />

            <Link
                to={`/search?query=${(search)}`}
                className="fa-solid fa-magnifying-glass flex-shrink-0 absolute pr-[20px] text-white"
            ></Link>
        </div>
    );
}