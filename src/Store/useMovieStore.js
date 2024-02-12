import create from 'zustand';

const useMovieStore = create((set) => ({
    selectedMovie: null,
    selectMovie: (movie) => set({ selectedMovie: movie }),
}));

export default useMovieStore;
