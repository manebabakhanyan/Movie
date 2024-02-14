import { create } from 'zustand';

const useFavouriteFilms = create((set) => ({
    favouriteFilms: JSON.parse(localStorage.getItem('favouriteFilms')) || [],
    favouriteCount: JSON.parse(localStorage.getItem('favouriteFilms'))?.length || 0,
    setFavouriteFilms: (films) => {
        localStorage.setItem('favouriteFilms', JSON.stringify(films));
        set({ favouriteFilms: films, favouriteCount: films.length });
    },
    addFilm: (movie) => {
        const updatedFilms = [...JSON.parse(localStorage.getItem('favouriteFilms')) || [], movie];
        localStorage.setItem('favouriteFilms', JSON.stringify(updatedFilms));
        set({ favouriteFilms: updatedFilms, favouriteCount: updatedFilms.length });
    },
    deleteFilm: (filmId) => {
        const updatedFilms = JSON.parse(localStorage.getItem('favouriteFilms')).filter(film => film.id !== filmId);
        localStorage.setItem('favouriteFilms', JSON.stringify(updatedFilms));
        set({ favouriteFilms: updatedFilms, favouriteCount: updatedFilms.length });
    },
}));

export default useFavouriteFilms;
