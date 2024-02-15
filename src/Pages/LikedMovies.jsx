import React, { memo, useMemo } from 'react';
import useFavouriteFilms from '../Store/useFavouriteFilms';
import FilmTitle from '../Components/Home/Movie/FilmTitle';
import FilmImages from '../Components/Home/Movie/FilmImages';
import FilmDate from '../Components/Home/Movie/FilmDate';
import VoteAverage from '../Components/Home/Movie/FilmVote';
import DeleteFavouriteFilms from '../Components/Home/Movie/DeleteFavouriteFilms';

export default memo(function LikedMovies() {
    const { favouriteFilms, deleteFilm } = useFavouriteFilms();

    const favFilm = useMemo(() => {
        return favouriteFilms.filter(movie => movie && movie.id);
    }, [favouriteFilms]);

    function handleDeleteFilm(filmId) {
        deleteFilm(filmId);
    };

    return (
        <div>
            <div className='flex justify-evenly pl-[140px] pr-[180px] flex-wrap'>
                {favFilm.map((movie) => (
                    <div key={movie.id} className='border border-yellow rounded-[20px] mt-[50px]'>
                        <DeleteFavouriteFilms handleClick={() => handleDeleteFilm(movie.id)} />
                        <div className='p-[20px]'>
                            <FilmImages movie={movie} />
                            <FilmTitle movie={movie} />
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
