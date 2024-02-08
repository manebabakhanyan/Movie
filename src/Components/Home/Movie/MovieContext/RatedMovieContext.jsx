import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function useRatedMovieContext() {
    return useContext(MovieContext);
}

export function RatedMovieProvider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    function forward() {
        setCurrentIndex(prevIndex => prevIndex - 1);
    };

    function backword() {
        setCurrentIndex(prevIndex => Math.max(prevIndex + 1));
    };

    return (
        <MovieContext.Provider value={{ currentIndex, forward, backword }}>
            {children}
        </MovieContext.Provider>
    );
}
