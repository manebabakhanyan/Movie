import React from 'react';
import useFavouriteFilms from '../../../Store/useFavouriteFilms';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FilmTitle from './FilmTitle';
import FilmImages from './FilmImages';
import FilmDate from './FilmDate';
import VoteAverage from './FilmVote';
import DeleteFavouriteFilms from './DeleteFavouriteFilms';

export default function LikedMovies() {
    const { favouriteFilms, deleteFilm } = useFavouriteFilms();

    const handleDeleteFilm = (filmId) => {
        deleteFilm(filmId);
    };

    return (
        <div>
            <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
                <Header />
            </div>
            <div className='flex justify-evenly pl-[140px] pr-[180px] flex-wrap'>
                {favouriteFilms.map((movie) => (
                    movie && movie.id && (
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
                    )
                ))}
            </div>
            <Footer />
        </div>
    );
}
