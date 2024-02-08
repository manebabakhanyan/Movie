import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export function useMovieContext() {
    return useContext(MovieContext);
}

export function MovieProvider({ children }) {
    const [currentIndex, setCurrentIndex] = useState('');

    function forward() {
        setCurrentIndex(forward => forward - 1);
    };

    function backword() {
        setCurrentIndex(backword => Math.max(backword + 1));
    };

    return (
        <MovieContext.Provider value={{ currentIndex, forward, backword }}>
            {children}
        </MovieContext.Provider>
    );
}
