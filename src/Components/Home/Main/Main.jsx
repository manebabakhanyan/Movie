import React, { useState, useEffect } from 'react';

export default function Main() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=1`)
            .then(response => response.json())
            .then(data => {
                const randomMovies = getRandomMovies(data.results, 3);
                setMovies(randomMovies);
            })
    }, []);

    const getRandomMovies = (moviesArray) => {
        const shuffled = moviesArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    };

    return (
        <div className='pr-[90px] pl-[50px] pt-[15px]'>
            <div className='flex justify-between'>
                {movies.map((movie, i) => (
                    <div key={i}>
                        {movie.poster_path && (
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-[290px] h-[330px] rounded-[20px] object-cover' />
                        )}
                    </div>
                ))}
            </div>
            <h1 className='text-yellow font-bold py-[50px] text-[18px]'>Watch everywhere</h1>
            <p className='text-white pb-[90px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more</p>
        </div>
    );
}

