import React, {useState, useEffect} from 'react';
import useMovieStore from '../../../Store/useMovieStore';
import SimilarMovies from './SimilarMovies';
import Loading from './Loading';
function SimilarFilms() {
    const selectedMovie = useMovieStore((state) => state.selectedMovie);
   
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (selectedMovie) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [selectedMovie]);
    
    return (
        <div>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div>
                    <SimilarMovies selectedMovie={selectedMovie} />
                </div>
            )}
        </div>

    );
}

export default SimilarFilms;