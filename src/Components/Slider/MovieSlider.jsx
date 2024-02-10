import React, { useState } from 'react';
import Forward from './Forward';
import Backword from './Backword';

export default function MovieSlider({ movies, startIndex, onNext, onPrev }) {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const handleNext = () => {
        if (currentIndex + 1 < movies.length) {
            setCurrentIndex(prevIndex => prevIndex + 1);
            onNext();
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
            onPrev();
        }
    };

    return (
        <div>
            <div className='flex justify-between px-[100px] pb-[20px]'>
                <Backword onClick={handlePrev} />
                {movies.slice(currentIndex, currentIndex + 4).map((movie, i) => (
                    <div key={i} className='border border-yellow p-[25px] rounded-[20px]'>
                        {/* <PopularFilms /> */}
                    </div>
                ))}
                <Forward onClick={handleNext} />
            </div>
        </div>
    );
}
