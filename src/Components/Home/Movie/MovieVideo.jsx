import React, { useState, useEffect } from 'react';
import { memo } from 'react';
import VideoModal from '../../../Pages/VideoPage';
import Loader from '../Movie/Loading/loading.gif'
const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';

export default memo(function VideoComponent({ movieId }) {
    const [videos, setVideos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVideos = () => {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API}`)
                .then(response => response.json())
                .then(data => {
                    if (data.results && data.results.length > 0) {
                        setVideos(data.results);
                        setLoading(false)
                    }
                })
        };

        fetchVideos();
    }, [movieId]);

    const openModal = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setShowModal(false);
    };

    return (
        <div>
            {loading ? (
                <div className='flex justify-center h-[54.7vh] items-center'>
                    <img src={Loader} alt="loading" className='w-[50px]' />
                </div>
            ) : (
                < div className='pt-[25px]'>
                    <h1 className='font-bold text-white text-center text-[30px]'>Trailers</h1>
                    <div className='flex justify-between ml-[50px] mr-[30px] pt-[25px] pb-[80px]'>
                        {videos.slice(0, 4).map(video => (
                            <div key={video.id} onClick={() => openModal(video)}>
                                <div>
                                    <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt={video.name} className='rounded-[20px] w-[280px]' />
                                </div>
                            </div>
                        ))}
                    </div>
                    {showModal && (
                        <VideoModal video={selectedVideo} onClose={closeModal} />
                    )}
                </div>
            )}
        </div >
    );
});
