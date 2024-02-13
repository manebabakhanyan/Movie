import React, { useState, useEffect } from 'react';

const API_KEY = 'f6fe3a0d481ebf7e606a5a5a6541dd26';

const VideoComponent = ({ movieId }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);

            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setVideos(data.results);
            }

        };

        fetchVideos();
    }, [movieId]);

    return (
        <div className='flex justify-between ml-[50px] mr-[100px] pt-[80px] pb-[80px]'>
            {videos.slice(0, 4).map(video => (
                <div key={video.id} className="videoContainer">
                    <iframe src={`https://www.youtube.com/embed/${video.key}`} className='w-[250px] rounded-[20px]'></iframe>
                </div>
            ))}
        </div>
    );
};

export default VideoComponent;
