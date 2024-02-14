import React, { useState, useEffect, useMemo } from 'react';

export default function Main() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=1`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            });
    }, []);

    function getRandomMovies(arr, num) {
        const movies = [];
        const changed = [...arr];

        for (let i = 0; i < num && changed.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * changed.length);
            movies.push(changed.splice(randomIndex, 1)[0]);
        }

        return movies;
    };

    const randomMovies = useMemo(() => getRandomMovies(movies, 3), [movies]);

    return (
        <div className='pr-[30px] pl-[50px] pt-[15px]'>
            <div className='flex justify-between'>
                {randomMovies.map((movie, index) => (
                    <div key={index} className='flex justify-between'>
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/${index === 0 ? 'w500' : 'w300'}${movie.poster_path}`}
                                alt={movie.title}
                                className='h-[350px] rounded-[20px] object-cover md800:h-[230px] md1000:h-[270px] md880:h-[250px] md700:h-[220px] md700:w-[350px] md1200:h-[350px] md600:h-[200px] md550:h-[180px]'
                                style={{ width: `${index === 0 ? '500px' : '290px'}` }}
                            />
                        )}
                    </div>
                ))}
            </div>
            <h1 className='text-yellow font-bold py-[50px] text-[18px]'>Watch everywhere</h1>
            <p className='text-white pb-[95px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more</p>
        </div>
    );
}
