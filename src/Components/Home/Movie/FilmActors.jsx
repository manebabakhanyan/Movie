import React, { useState, useEffect, useCallback } from 'react';
import ActorImage from './ActorImage';
import Forward from '../../Slider/Forward';
import Backward from '../../Slider/Backward';
import { memo } from 'react';
import Loader from '../Movie/Loading/loading.gif'
export default memo(function FilmActors({ movie }) {
    const [actorImages, setActorImages] = useState([]);
    const [loading, setLoading] = useState(true)
    const [startIndex, setStartIndex] = useState(0);
    const API = 'f6fe3a0d481ebf7e606a5a5a6541dd26';

    useEffect(() => {
        function fetchActorImages()  {
            if (movie && movie.id) {
                fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${API}`)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const images = data.cast.map(actor => {
                            if (actor.profile_path) {
                                return (
                                    `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                                )
                            }
                        });
                        setLoading(false)
                        setActorImages(images.filter(image => image !== null));
                    })
            }
        };

        fetchActorImages();
    }, [movie, API]);

    const handleNext = useCallback(() => {
        setStartIndex(prevIndex => Math.min(prevIndex + 1, actorImages.length - 5));
    })

    const handlePrev = useCallback(() => {
        setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    })

    return (
        <div>
            {loading ? (
                <div className='flex justify-center h-[54.7vh] items-center'>
                    <img src={Loader} alt="loading" className='w-[50px]' />
                </div>) : (
                <div className='flex justify-between gap-[10px] pb-[20px]'>
                    <Forward onClick={handlePrev} />
                    {actorImages.slice(startIndex, startIndex + 5).map((imagePath, index) => (
                        <ActorImage key={index} imagePath={imagePath} />
                    ))}
                    <Backward onClick={handleNext} />
                </div>
            )}
        </div >
    );
})
