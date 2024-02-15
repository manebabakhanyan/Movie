import React, { useState, useEffect } from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';

export default memo(function VideoComponent({ movieId }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const videos = () => {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API}`)
                .then(response => response.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        setVideos(data.results);
                    }
                })
        };

        videos();
    }, [movieId]);

    return (
        <div className='pt-[25px]'>
            <h1 className='font-bold text-white text-center text-[30px]'>Trailers</h1>
            <div className='flex justify-between ml-[50px] mr-[30px] pt-[25px] pb-[80px]'>
                {videos.slice(0, 4).map(video => (
                    <Link key={video.id} to={`/video/${video.key}`}>
                        <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt={video.name} className='rounded-[20px]' />
                    </Link>
                ))}
            </div>
        </div>
    );
})