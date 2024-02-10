import React, { useState, useEffect } from 'react';
import FilmImages from '../FilmImages';
import FilmTitle from '../FilmTitle';
import FilmDate from '../FilmDate';
import VoteAverage from '../FilmVote';
import HeartIcon from '../../../Icon/HeartIcon';
import Forward from '../../../Slider/Forward';
import Backward from '../../../Slider/Backword';

export default function RatedFilms({ currentIndex, forward, backward }) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        const API_KEY = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const randomMovies = getRandomMovies(data.results);
                setFilms(randomMovies.slice(0, 4));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (currentIndex >= films.length || currentIndex < 0) {
            return;
        }
        const startIdx = currentIndex >= films.length ? films.length - 4 : currentIndex;
        setFilms(films.slice(startIdx, startIdx + 4));
    }, [currentIndex])
    
    function getRandomMovies(moviesArray) {
        const movies = moviesArray.sort(() => 0.5 - Math.random());
        return movies;
    }

    return (
        <div>
            <h1 className='text-center font-bold text-[35px] py-[50px]'>Most rated films</h1>
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
                <Backward onClick={backward} />
            </div>
        </div>
    );
}
