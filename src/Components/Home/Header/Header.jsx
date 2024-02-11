import React from 'react';
import { Link} from 'react-router-dom';
import HeartIcon from '../../Icon/HeartIcon';
import Search from './Search';
export default function Header () {
    return (
        <div className='flex justify-between p-[50px]'>
            <Link to='/'>
                <img src="Logo (6).png" alt="logo" className='w-[120px] h-[30px]' />
            </Link>
            <div className='flex items-center gap-[20px]'>
                <Link to='/favourite'>
                    <HeartIcon />
                </Link>

                <Search />

            </div>
        </div>
    );
};