// InformationPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InformationPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const API_KEY = 'f6fe3a0d481ebf7e606a5a5a6541dd26';

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie information');
                }
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovie();
    }, [movieId]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Overview: {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
    );
};

export default InformationPage;
