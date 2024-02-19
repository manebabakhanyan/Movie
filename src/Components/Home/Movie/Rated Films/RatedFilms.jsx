import React, { useState, useEffect } from 'react';
import FilmImages from '../FilmImages';
import FilmTitle from '../FilmTitle';
import FilmDate from '../FilmDate';
import VoteAverage from '../FilmVote';
import HeartIcon from '../../../Icon/HeartIcon';
import Forward from '../../../Slider/Forward';
import Backward from '../../../Slider/Backward';
import { Link } from 'react-router-dom';
import useMovieStore from '../../../../Store/useMovieStore';
import Loader from '../../Movie/Loading/loading.gif'
import { memo } from 'react';

export default memo(function RatedFilms() {
    const [films, setFilms] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&page=1`)
            .then(res => res.json())
            .then(result => {
                const randomMovies = getRandomMovies(result.results);
                setFilms(randomMovies);
                setLoading(false);
            });
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
            {loading ? (
                <div className='flex justify-center h-[54.7vh] items-center'>
                    <img src={Loader} alt="loading" className='w-[50px]' />
                </div>
            ) : (
                <div>
                    <h1 className='text-center font-bold text-[35px] py-[50px] '>Most popular films</h1>
                    <div className='flex justify-between px-[100px] pb-[20px]'>
                        <div className='flex'>
                            <Forward onClick={handlePrev} />
                        </div>
                        <div className='flex justify-evenly gap-[15px] max-md1200:flex-wrap'>
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
                        </div>
                        <div className='flex'>
                            <Backward onClick={handleNext} />
                        </div>
                    </div>
                </div>
            )}
        </div >
    );

})
