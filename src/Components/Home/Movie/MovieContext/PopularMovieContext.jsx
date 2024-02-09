import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function usePopularMovieContext() {
    return useContext(MovieContext)
}

export function PopularMovieProvider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    function forward() {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0))
    }
    
    function backword() {
        setCurrentIndex(prevIndex => Math.max(prevIndex + 1));
    }

    return (
        <MovieContext.Provider value={{ currentIndex, forward, backword }}>
            {children}
        </MovieContext.Provider>
    );
}
