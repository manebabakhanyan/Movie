import create from 'zustand';

const useFavouriteFilms = create((set) => ({
    favouriteFilms: [],
    setFavouriteFilms: (films) => set({ favouriteFilms: films }),
    addFilm: (movie) => {
        set((state) => ({ favouriteFilms: [...state.favouriteFilms, movie] }));
    },
    deleteFilm: (filmId) => {
        set((state) => ({
            favouriteFilms: state.favouriteFilms.filter(film => film && film.id && film.id !== filmId)
        }));
    },
}));

export default useFavouriteFilms;