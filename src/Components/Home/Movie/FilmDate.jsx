import React from 'react';
import Time from '../../Icon/Time.png'
export default function FilmDate({ movie }) {
    return (
        <div>
            {movie && movie.release_date && (
                <div className='flex items-center'>
                    <img src={Time} alt="time logo" className='h-[20px]' />
                    <p>{movie.release_date}</p>
                </div>
            )}
        </div>
    );
}