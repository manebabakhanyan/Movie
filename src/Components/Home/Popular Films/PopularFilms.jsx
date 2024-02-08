import React, { useState, useEffect } from 'react';
import FilmImages from '../Movie/FilmImages';
import FilmTitle from '../Movie/FilmTitle';
import FilmDate from '../Movie/FilmDate';
import VoteAverage from '../Movie/FilmVote';
import HeartIcon from '../../Icon/HeartIcon';
import Forward from '../../Slider/Forward';
import Backword from '../../Slider/Backword';
export default function PopularFilms() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=1`)
            .then(response => response.json())
            .then(data => {
                const randomMovies = getRandomMovies(data.results);
                setMovies(randomMovies);
            });
    }, []);

    const getRandomMovies = (moviesArray) => {
        const movies = moviesArray.sort(() => 0.5 - Math.random());
        return movies.slice(0, 4);
    };

    return (
        <div>
            <div className=''>
                <h1 className='text-center font-bold text-[35px] py-[50px]'>Most popular films</h1>
                <div className='flex justify-between px-[100px] pb-[20px]'>
                    <Forward />
                    {movies.map((movie, i) => (
                        <div className='border border-yellow p-[25px] rounded-[20px]'>
                            <FilmImages key={i} movie={movie} />
                            <FilmTitle key={i} movie={movie} />
                            <div className='pt-[10px] flex justify-between mr-[15px]'>
                                <FilmDate key={i} movie={movie} />
                                <VoteAverage key={i} movie={movie} />
                                <HeartIcon key={i} movie={movie} />
                            </div>
                        </div>
                    ))}
                    <Backword />
                </div>
            </div>
        </div>
    )
}

