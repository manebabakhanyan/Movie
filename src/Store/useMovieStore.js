import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useMovieStore = create(
    persist(
        (set) => ({
            selectedMovie: null,
            selectMovie: (movie) => set({ selectedMovie: movie }),
        }),
        {
            name: 'movie-storage', 
            storage: createJSONStorage(() => localStorage), 
          },
    )
);

export default useMovieStore;
