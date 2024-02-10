import React from 'react';

export default function FilmImages({ movie }) {

    return (
        <div className=''>
            {movie && movie.poster_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className='w-[230px] h-[280px] rounded-[20px] object-cover'
                />
            ) : (
                <img
                    src='https://static.vecteezy.com/system/resources/previews/026/703/025/non_2x/illustration-of-beautify-the-image-icon-in-dark-color-and-white-background-vector.jpg'
                    alt="alternate image"
                    className='w-[230px] h-[280px] rounded-[20px] object-cover'
                />
            )}
        </div>
    );
}