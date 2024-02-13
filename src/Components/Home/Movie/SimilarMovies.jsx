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

function SimilarMovies({ selectedMovie }) {
    const [similarMovies, setSimilarMovies] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const selectMovie = useMovieStore((state) => state.selectMovie);
    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${selectedMovie.title}`)
            .then(response => response.json())
            .then(data => {
                const filteredMovies = data.results.filter(movie => movie.id !== selectedMovie.id);
                const randomMovies = getRandomMovies(filteredMovies);
                setSimilarMovies(randomMovies);
            });
    }, [selectedMovie]);
    function handleMovieClick (movie) {
        selectMovie(movie);
    };
    function handleNext() {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, similarMovies.length - 4));
    };

    function handlePrev () {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    function getRandomMovies(moviesArray) {
        const movies = moviesArray.sort(() => 0.5 - Math.random());
        return movies;
    }

    return (
        <div>
            <h2 className='text-center font-bold text-[35px] py-[50px]'>Similar Movies</h2>
            <div className='flex justify-between px-[100px] pb-[20px]'>
                <Forward onClick={handlePrev} />
                {similarMovies.slice(startIndex, startIndex + 4).map((movie, index) => (
                    <div key={movie.id}>
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
                    </div>
                ))}
                <Backward onClick={handleNext} />
            </div>
        </div>
    );
}

export default SimilarMovies;
