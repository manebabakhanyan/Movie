import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Header/Logo/Logo (6).png'
import Search from './Search';
export default function Header() {
    return (
        <div className='flex justify-between p-[50px]'>
            <Link to='/'>
                <img src={Logo} alt="logo" className='w-[120px] h-[30px]' />
            </Link>
            <div className='flex items-center gap-[20px]'>
                <Link to='/favourite'>
                    <i className='far fa-heart cursor-pointer'></i>
                </Link>

                <Search />

            </div>
        </div>
    );
};