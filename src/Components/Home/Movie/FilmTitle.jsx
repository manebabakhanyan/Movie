import React from 'react';

export default function FilmTitle({ movie }) {
    return (
        <div className='w-[230px]'>
            {movie && movie.original_title && (
                <p className='font-bold'>{movie.original_title}</p>
            )}
        </div>
    );
}
