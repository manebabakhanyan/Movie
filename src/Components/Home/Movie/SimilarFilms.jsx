import useMovieStore from '../../../Store/useMovieStore';
import SimilarMovies from './SimilarMovies';
import { memo } from 'react';
export default memo(function SimilarFilms() {
    const selectedMovie = useMovieStore((state) => state.selectedMovie);

    return (
        <div>
            <div>
                <SimilarMovies selectedMovie={selectedMovie} />
            </div>

        </div>

    );
})