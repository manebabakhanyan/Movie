import React, { useState, useEffect } from 'react';
import FilmImages from '../Movie/FilmImages';
import FilmTitle from '../Movie/FilmTitle';
import FilmDate from '../Movie/FilmDate';
import VoteAverage from '../Movie/FilmVote';
import HeartIcon from '../../Icon/HeartIcon';
import Forward from '../../Slider/Forward';
import Backward from '../../Slider/Backward';
import { Link } from 'react-router-dom';
import useMovieStore from '../../../Store/useMovieStore';
import { memo } from 'react';
export default memo(function PopularFilms() {
    const [films, setFilms] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    useEffect(() => {

        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&page=1`)
            .then(response => response.json())
            .then(data => {
                const randomMovies = getRandomMovies(data.results);
                setFilms(randomMovies);
            })

    }, []);

    const selectMovie = useMovieStore((state) => state.selectMovie);

    function handleMovieClick(movie) {
        selectMovie(movie);
    };
    function handleNext() {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, films.length - 4));
    };

    function handlePrev() {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    function getRandomMovies(arr) {
        const movies = [];
        const changed = [...arr];

        for (let i = 0; changed.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * changed.length);
            movies.push(changed.splice(randomIndex, 1)[0]);
        }

        return movies;
    };
    return (
        <div>
            <h1 className='text-center font-bold text-[35px] py-[50px] '>Most popular films</h1>
            <div className='flex justify-between px-[100px] pb-[20px] md550:flex-col md600:flex-row md600:flex-wrap md800:flex-row md800:flex-wrap md700:flex-nowrap md700:flex-col md1200:flex-nowrap'>
                <div className='md1000:ml-[-20px] md1200:flex'>
                    <Forward onClick={handlePrev} />
                </div>
                {films.slice(startIndex, startIndex + 4).map((movie) => (
                    <div key={movie.id} className='border border-yellow p-[25px] rounded-[20px]'>
                        <Link to={`/movie/${movie.id}`} onClick={() => handleMovieClick(movie)}>
                            <FilmImages movie={movie} />
                            <FilmTitle movie={movie} />
                        </Link>
                        <div className='pt-[10px] flex justify-between mr-[15px]'>
                            <FilmDate movie={movie} />
                            <VoteAverage movie={movie} />
                            <HeartIcon movie={movie} />
                        </div>
                    </div>
                ))}
                <div className='md1200:flex'>
                    <Backward onClick={handleNext} />
                </div>
            </div>
        </div>
    );
})
