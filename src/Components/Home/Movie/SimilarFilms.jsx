import React from 'react';
import SimilarMovies from './SimilarMovies';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import useMovieStore from '../../../Store/useMovieStore';
import MovieDetails from '../../Information/InformationMovie'
export default memo(function SimilarFilms() {
    const selectedMovie = useMovieStore((state) => state.selectedMovie);

    return (
        <div>
            {selectedMovie ? (
                <SimilarMovies selectedMovie={selectedMovie} />
            ) : (
                <Routes>
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            )}
        </div>
    );
});