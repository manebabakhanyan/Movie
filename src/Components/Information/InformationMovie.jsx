import React, { useState } from 'react';
import useMovieStore from '../../Store/useMovieStore';
import FilmImages from '../Home/Movie/FilmImages';
import FilmTitle from '../Home/Movie/FilmTitle';
import FilmDate from '../Home/Movie/FilmDate';
import VoteAverage from '../Home/Movie/FilmVote';
import FilmActors from '../Home/Movie/FilmActors';

function MovieDetails({ setStartIndex }) {
    const selectedMovie = useMovieStore((state) => state.selectedMovie);
    const [actorStartIndex, setActorStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, films.length - 1));
    };

    const handlePrev = () => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    return (
        <div>
            <div className="flex">
                <div className="ml-[50px]">
                    <FilmImages movie={selectedMovie} />
                </div>
                <div className='pl-[200px]'>
                    <div className='text-yellow mb-[30px]'>
                        <FilmTitle movie={selectedMovie} />
                    </div>
                    <div className='text-white'>
                        <div className='mb-[30px]'>
                            <FilmDate movie={selectedMovie} />
                        </div>
                        <div className='mb-[30px]'>
                            <VoteAverage movie={selectedMovie} />
                        </div>
                        <div className='mb-[30px] flex gap-[10px]'>
                            <FilmActors movie={selectedMovie} setStartIndex={setActorStartIndex} />
                            {/* <FilmActors movie={selectedMovie} apiKey="f6fe3a0d481ebf7e606a5a5a6541dd26" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
