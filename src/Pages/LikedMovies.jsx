import React, { memo, useMemo } from 'react';
import useFavouriteFilms from '../Store/useFavouriteFilms';
import FilmTitle from '../Components/Home/Movie/FilmTitle';
import FilmImages from '../Components/Home/Movie/FilmImages';
import FilmDate from '../Components/Home/Movie/FilmDate';
import VoteAverage from '../Components/Home/Movie/FilmVote';
import DeleteFavouriteFilms from '../Components/Home/Movie/DeleteFavouriteFilms';
import { Link } from 'react-router-dom';
import useMovieStore from '../Store/useMovieStore';
export default memo(function LikedMovies() {
    const { favouriteFilms, deleteFilm } = useFavouriteFilms();

    const favFilm = useMemo(() => {
        return favouriteFilms.filter(movie => movie && movie.id);
    }, [favouriteFilms]);

    function handleDeleteFilm(filmId) {
        deleteFilm(filmId);
    };
    const selectMovie = useMovieStore((state) => state.selectMovie);

    function handleMovieClick(movie) {
        selectMovie(movie);
    };

    return (
        <div>
            <div className='flex justify-evenly pl-[140px] pr-[180px] flex-wrap'>
                {favFilm.map((movie) => (
                    <div key={movie.id} className='border border-yellow rounded-[20px] mt-[50px]'>
                        <DeleteFavouriteFilms handleClick={() => handleDeleteFilm(movie.id)} />
                        <div className='p-[20px]'>
                            <Link to={`/movie/${movie.id}`} onClick={() => handleMovieClick(movie)}>
                                <FilmImages movie={movie} />
                                <FilmTitle movie={movie} />
                            </Link>
                            <div className='flex justify-between'>
                                <FilmDate movie={movie} />
                                <VoteAverage movie={movie} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
})