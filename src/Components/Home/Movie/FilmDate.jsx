import React from 'react';

export default function FilmDate({ movie }) {
    return (
        <div>
            {movie.release_date && (
                <div className='flex items-center'>
                    <img src="Time.png" alt="time logo" className='h-[20px]'/>
                    <p className='font-bold'>{movie.release_date}</p>
                </div>
            )}
        </div>
    );
}
