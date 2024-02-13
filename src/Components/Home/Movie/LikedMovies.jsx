import React, { useMemo } from 'react';
import useFavouriteFilms from '../../../Store/useFavouriteFilms';
import FilmTitle from './FilmTitle';
import FilmImages from './FilmImages';
import FilmDate from './FilmDate';
import VoteAverage from './FilmVote';
import DeleteFavouriteFilms from './DeleteFavouriteFilms';

const LikedMovies = () => {
    const { favouriteFilms, deleteFilm } = useFavouriteFilms();

    const favFilm = useMemo(() => {
        return favouriteFilms.filter(movie => movie && movie.id);
    }, [favouriteFilms]);

    const handleDeleteFilm = (filmId) => {
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
}

export default React.memo(LikedMovies);
