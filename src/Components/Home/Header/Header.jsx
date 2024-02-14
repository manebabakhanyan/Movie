import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Header/Logo/Logo (6).png';
import Search from './Search';
import useFavouriteFilms from '../../../Store/useFavouriteFilms';

export default function Header() {
    const { favouriteCount } = useFavouriteFilms();

    return (
        <div className='flex justify-between pt-[50px] pb-[50px] md550:flex-col md800:flex-row md700:ml-[70px]'>
            <Link to='/'>
                <img src={Logo} alt="logo" className='w-[120px] h-[30px] ml-[50px] md550:ml-[100px] md600:ml-[130px] md800:ml-[-5px] md800:' />
            </Link>
            <div className='flex items-center gap-[20px] md550:flex-col md550:mt-[20px] md600:flex-row md600:ml-[60px] md800:mt-[-5px]'>
                <Link to='/favourite'>
                    <div className="relative">
                        <i className='far fa-heart cursor-pointer w-[50px]'></i>
                        {favouriteCount > 0 && (
                            <div className="absolute -top-1 right-[14px] bg-red text-white text-[13px] rounded-full h-[15px] w-[15px] flex items-center justify-center">
                                {favouriteCount}
                            </div>
                        )}
                    </div>
                </Link>

                <Search />
            </div>
        </div>
    );
}
