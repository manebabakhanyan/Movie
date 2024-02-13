import React, { useState, useEffect } from 'react';

const API_KEY = 'f6fe3a0d481ebf7e606a5a5a6541dd26'; 
const GET_MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie`;
const GET_MOVIE_VIDEOS_URL = `https://api.themoviedb.org/3/movie`;

const MovieDetailsPage = ({ movieId }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`${GET_MOVIE_DETAILS_URL}/${movieId}?api_key=${API_KEY}`);
                const movieData = await response.json();
                setMovieDetails(movieData);

                const videosResponse = await fetch(`${GET_MOVIE_VIDEOS_URL}/${movieId}/videos?api_key=${API_KEY}`);
                const videosData = await videosResponse.json();
                setVideos(videosData.results.slice(0, 4)); 
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <p>Release Date: {movieDetails.release_date}</p>
            <div>
                <h2>Videos</h2>
                {videos.map(video => (
                    <div key={video.id}>
                        <iframe
                            title={video.name}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieDetailsPage;
