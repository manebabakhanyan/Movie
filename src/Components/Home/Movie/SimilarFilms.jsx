import useMovieStore from '../../../Store/useMovieStore';
import SimilarMovies from './SimilarMovies';
function SimilarFilms() {
    const selectedMovie = useMovieStore((state) => state.selectedMovie);

    return (
        <div>
            <div>
                <SimilarMovies selectedMovie={selectedMovie} />
            </div>

        </div>

    );
}

export default SimilarFilms;