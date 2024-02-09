import React from 'react';

export default function FilmTitle({ movie }) {
    return (
        <div className='w-[240px]'>
            {movie.original_title && (
                <p className='font-bold'>{movie.original_title}</p>
            )}
        </div>
    );
}
