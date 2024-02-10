import React from 'react';

export default function VoteAverage({ movie }) {
    return (
        <div>
            {movie && movie.vote_average && (
                <div className='flex items-center'>
                    <img src="Time (1).png" alt="time logo" className='h-[20px]'/>
                    <p className='font-bold'>{movie.vote_average}</p>
                </div>
            )}
        </div>
    );
}


