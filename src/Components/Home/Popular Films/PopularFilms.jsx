import React, { useState, useEffect } from 'react';
import { usePopularMovieContext } from '../Movie/MovieContext/PopularMovieContext';
import FilmImages from '../Movie/FilmImages';
import FilmTitle from '../Movie/FilmTitle';
import FilmDate from '../Movie/FilmDate';
import VoteAverage from '../Movie/FilmVote';
import HeartIcon from '../../Icon/HeartIcon';
import Forward from '../../Slider/Forward';
import Backword from '../../Slider/Backword';

export default function PopularFilms() {
    const { currentIndex, forward, backword } = usePopularMovieContext();
    const [movies, setMovies] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=1`)
            .then(result => result.json())
            .then(res => {
                const randomMovies = getRandomMovies(res.results);
                setMovies(randomMovies);
                setFilms(randomMovies.slice(0, 4));
            });
    }, []);

    function getRandomMovies(moviesArray) {
        const movies = moviesArray.sort(() => 0.5 - Math.random());
        return movies;
    };

    useEffect(() => {
        if (currentIndex >= movies.length) { }
        const startIdx = currentIndex >= movies.length ? movies.length - 4 : currentIndex;
        setFilms(movies.slice(startIdx, startIdx + 4));

    }, [currentIndex, movies]);

    return (
        <div>
            <div>
                <h1 className='text-center font-bold text-[35px] py-[50px]'>Most popular films</h1>
                <div className='flex justify-between px-[100px] pb-[20px]'>
                    <Forward onClick={forward} />
                    {films.map((movie, i) => (
                        <div key={i} className='border border-yellow p-[25px] rounded-[20px]'>
                            <FilmImages movie={movie} />
                            <FilmTitle movie={movie} />
                            <div className='pt-[10px] flex justify-between mr-[15px]'>
                                <FilmDate movie={movie} />
                                <VoteAverage movie={movie} />
                                <HeartIcon movie={movie} />
                            </div>
                        </div>
                    ))}
                    <Backword onClick={backword} />
                </div>
            </div>
        </div>
    )
}
