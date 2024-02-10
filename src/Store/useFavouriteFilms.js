import create from 'zustand';

const useFavouriteFilms = create((set) => ({
    favouriteFilms: [],
    addFilm: (movie) => { 
        set((state) => ({ favouriteFilms: [...state.favouriteFilms, movie] }));
    },
}));

export default useFavouriteFilms;
