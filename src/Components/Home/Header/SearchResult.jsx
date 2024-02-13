import React, { useState, useEffect } from 'react';
import FilmDate from '../Movie/FilmDate';
import FilmTitle from '../Movie/FilmTitle';
import FilmImages from '../Movie/FilmImages';
import VoteAverage from '../Movie/FilmVote';
import HeartIcon from '../../Icon/HeartIcon';
import Loading from '../Movie/Loading';
import Pagination from '../../Pagination/Pagination';
import { Link } from 'react-router-dom';
import useMovieStore from '../../../Store/useMovieStore';

function SearchResults() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const selectMovie = useMovieStore((state) => state.selectMovie);

    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        const searchParams = new URLSearchParams(location.search);
        const search = searchParams.get('query');

        const timer = setTimeout(() => {
            setLoading(true);
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results);
                    setLoading(false);
                    setSearchValue(search);
                })
        }, 2000);
        return () => clearTimeout(timer);
    }, [location.search]);

    function handleMovieClick(movie) {
        selectMovie(movie);
    };

    return (
        <div>
            {searchValue && <h1 className="text-[30px] font-bold mt-[20px] text-center">{searchValue}</h1>}
            {loading ? (
                <Loading />
            ) : (
                <div className='flex flex-wrap pl-[140px] pr-[180px] justify-between'>
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <div key={movie.id} className='border border-yellow rounded-[20px] p-[20px] mt-[30px]'>
                                <Link to={`/movie/${movie.id}`} onClick={() => handleMovieClick(movie)}>
                                    <FilmImages movie={movie} />
                                    <FilmTitle movie={movie} />
                                </Link>
                                <div className='flex justify-between'>
                                    <FilmDate movie={movie} />
                                    <VoteAverage movie={movie} />
                                    <HeartIcon movie={movie} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex w-[100vw] justify-center h-[54.7vh] items-center'>
                            <p className="font-bold text-[40px]">The film was not found</p>
                        </div>
                    )}
                    {movies.length > 0 && <Pagination />}
                </div>
            )}
        </div>
    );
}

export default SearchResults;
