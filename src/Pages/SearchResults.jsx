import React, { useState, useEffect } from 'react';
import FilmDate from '../Components/Home/Movie/FilmDate';
import FilmTitle from '../Components/Home/Movie/FilmTitle';
import FilmImages from '../Components/Home/Movie/FilmImages';
import VoteAverage from '../Components/Home/Movie/FilmVote';
import HeartIcon from '../Components/Icon/HeartIcon';
import Loader from '../../src/Components/Home/Movie/Loading/loading.gif';
import Pagination from '../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import useMovieStore from '../Store/useMovieStore';

function SearchResults() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const selectMovie = useMovieStore((state) => state.selectMovie);

    useEffect(() => {
        const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
        const search = decodeURIComponent(location.search.split('=')[1]);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
                setLoading(false);
                setSearchValue(search);
            });
    }, [location.search]);

    const totalMovies = movies.length;

    const handlePageChange = (selected) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedMovies = movies.slice(startIndex, endIndex);

    const handleMovieClick = (movie) => {
        selectMovie(movie);
    };

    return (
        <div>
            {searchValue && <h1 className="text-[30px] font-bold mt-[20px] text-center">{searchValue}</h1>}
            {loading ? (
                <div className='flex justify-center h-[54.7vh] items-center'>
                    <img src={Loader} alt="loading" className='w-[50px]' />
                </div>
            ) : (
                <div className='flex flex-wrap pl-[140px] pr-[180px] justify-between'>
                    {displayedMovies.length > 0 ? (
                        displayedMovies.map(movie => (
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
                            <p className="font-bold text-[40px]">No movies found</p>
                        </div>
                    )}
                    {totalMovies > itemsPerPage && (
                        <Pagination
                            totalMovies={totalMovies}
                            moviesPerPage={itemsPerPage}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchResults;
