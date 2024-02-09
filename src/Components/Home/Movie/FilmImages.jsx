import React from 'react';

export default function FilmImages({ movie }) {
    return (
        <div className=''>
            {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-[230px] h-[280px] rounded-[20px] object-cover' />
            )}
        </div>
    );
}
