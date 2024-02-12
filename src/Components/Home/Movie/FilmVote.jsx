import React from 'react';
import Rated from '../../Icon/Time (1).png'
export default function VoteAverage({ movie }) {
    return (
        <div>
            {movie && movie.vote_average && (
                <div className='flex items-center'>
                    <img src={Rated} alt="time logo" className='h-[20px]'/>
                    <p>{movie.vote_average}</p>
                </div>
            )}
        </div>
    );
}


