import React, { useState, useEffect, useCallback, useMemo } from 'react';
import FilmImages from '../Movie/FilmImages';
import FilmTitle from '../Movie/FilmTitle';
import FilmDate from '../Movie/FilmDate';
import VoteAverage from '../Movie/FilmVote';
import HeartIcon from '../../Icon/HeartIcon';
import Forward from '../../Slider/Forward';
import Backward from '../../Slider/Backward';
import { Link } from 'react-router-dom';
import useMovieStore from '../../../Store/useMovieStore';
import Loader from '../Movie/Loading/loading.gif'
export default function SimilarMovies({ selectedMovie, movieId }) {
    const [similarMovies, setSimilarMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const selectMovie = useMovieStore((state) => state.selectMovie);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        let query = selectedMovie.title;
        if (selectedMovie.title.split(' ').length > 1) {
            const words = selectedMovie.title.split(' ').slice(0, 3).join(' ');
            query = words;
        }

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${query}`)
            .then(response => response.json())
            .then(res => {
                const filteredMovies = res.results.filter(movie => movie.id !== selectedMovie.id);
                const randomMovies = getRandomMovies(filteredMovies);
                setSimilarMovies(randomMovies);
                setLoading(false)
            });
    }, [selectedMovie, movieId]);

    const handleMovieClick = useCallback((movie) => {
        selectMovie(movie);
    }, [selectMovie]);

    const handleNext = useCallback(() => {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, similarMovies.length - 4));
    }, [similarMovies.length]);

    const handlePrev = useCallback(() => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }, []);

    function getRandomMovies(arr) {
        const movies = [];
        const changed = [...arr];

        for (let i = 0; changed.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * changed.length);
            movies.push(changed.splice(randomIndex, 1)[0]);
        }

        return movies;
    };

    const randomMovies = useMemo(() => getRandomMovies(similarMovies), [similarMovies]);

    if (randomMovies.length === 0) {
        return null
    }

    return (
        <div>
            {loading ? (<div className='flex justify-center h-[54.7vh] items-center'>
                <img src={Loader} alt="loading" className='w-[50px]' />
            </div>) : (
                <div>
                    <h2 className='text-center font-bold text-[35px] py-[50px]'>Similar Movies</h2>
                    <div className='flex justify-between px-[100px] pb-[20px]'>
                        <div className='flex'>
                            <Forward onClick={handlePrev} />
                        </div>
                        <div className='flex justify-evenly gap-[15px] max-md1200:flex-wrap'>
                            {randomMovies.slice(startIndex, startIndex + 4).map((movie, index) => (
                                <div key={index} className='border border-yellow p-[25px] rounded-[20px]'>
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
        </div>
    );
}
