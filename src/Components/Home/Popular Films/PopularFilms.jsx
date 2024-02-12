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

function PopularFilms() {
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

    const handleMovieClick = (movie) => {
        selectMovie(movie);
    };
    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, films.length - 4));
    };

    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    function getRandomMovies(moviesArray) {
        const movies = moviesArray.sort(() => 0.5 - Math.random());
        return movies;
    }

    return (
        <div>
            <h1 className='text-center font-bold text-[35px] py-[50px]'>Most popular films</h1>
            <div className='flex justify-between px-[100px] pb-[20px]'>
                <Forward onClick={handlePrev} />
                {films.slice(startIndex, startIndex + 4).map((movie, index) => (
                    <div key={movie.id}>
                        <Link to={`/movie/${movie.id}`} onClick={() => handleMovieClick(movie)}>
                            <div key={index} className='border border-yellow p-[25px] rounded-[20px]'> 
                                <FilmImages movie={movie} />
                                <FilmTitle movie={movie} />
                                <div className='pt-[10px] flex justify-between mr-[15px]'>
                                    <FilmDate movie={movie} />
                                    <VoteAverage movie={movie} />
                                    <HeartIcon movie={movie} />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <Backward onClick={handleNext} />
            </div>
        </div>
    );
}

export default PopularFilms;
