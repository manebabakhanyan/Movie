import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && searchTerm.trim() !== '') {
            e.preventDefault();
            handleSearch();
        }
    };

    return (
        <div className='flex justify-end items-center mr-[30px]'>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
                className='rounded-[30px] border-2 border-yellow p-[10px] bg-gradient-to-br pl-[10px] text-white'
            />

            <Link
                to={`/search?query=${encodeURIComponent(searchTerm)}`}
                className="fa-solid fa-magnifying-glass flex-shrink-0 absolute pr-[20px] text-white"
            ></Link>
        </div>
    );
}
