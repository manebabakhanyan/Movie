import React, { useState, useEffect } from 'react';
import { memo } from 'react';
const API_KEY = 'f6fe3a0d481ebf7e606a5a5a6541dd26';
import useVideoStore from '../../../Store/useVideoStore';
import { Link } from 'react-router-dom';
export default memo(function VideoComponent({ movieId }) {
    const [videos, setVideos] = useState([]);
    const selectVideo = useVideoStore((state) => state.selectedVideoId);
    useEffect(() => {
        const fetchVideos = () => {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        setVideos(data.results);
                    }
                })
        };

        fetchVideos();
    }, [movieId]);
    function handleVideoClick(video) {
        selectVideo(video);
    };
    return (
        <div className='pt-[25px]'>
            <h1 className='font-bold text-white text-center text-[30px]'>Trailers</h1>
            <div className='flex justify-between ml-[50px] mr-[100px] pt-[25px] pb-[80px]'>
                {videos.slice(0, 4).map(video => (
                    <Link to={`/video/${video.id}`} key={video.id} onClick={() => handleVideoClick(video)}>
                        <div>
                            <iframe src={`https://www.youtube.com/embed/${video.key}`} className='w-[250px] rounded-[20px] md700:w-[150px] md700:h-[100px] md800:w-[200px] md800:h-[150px] md1000:w-[250px] md1000:h-[150px]'></iframe>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
})