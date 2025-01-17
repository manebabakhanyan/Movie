import React from 'react';
import useMovieStore from '../../Store/useMovieStore';
import FilmImages from '../Home/Movie/FilmImages';
import FilmTitle from '../Home/Movie/FilmTitle';
import FilmDate from '../Home/Movie/FilmDate';
import VoteAverage from '../Home/Movie/FilmVote';
import FilmActors from '../Home/Movie/FilmActors';
import VideoComponent from '../Home/Movie/MovieVideo';
import { memo } from 'react';
export default memo(function MovieDetails() {
    const selectedMovie = useMovieStore((state) => state.selectedMovie);
    if (!selectedMovie) {
        return null
    }

    return (
        <div>
            <div>
                <div className="flex">
                    <div className="ml-[50px]">
                        <FilmImages movie={selectedMovie} />
                    </div>
                    <div className='pl-[200px] max-md1086:pl-[170px] max-md1055:pl-[140px] max-md1010:pl-[10px] max-md950:pl-[-30px]'>
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
                                <FilmActors movie={selectedMovie} />
                            </div>
                        </div>
                    </div>
                </div>
               
                {selectedMovie.id && <VideoComponent movieId={selectedMovie.id} />}
            </div>
        </div>
    );
});

