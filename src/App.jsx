import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './Pages/SearchResults';
import LikedMovies from './Pages/LikedMovies';
import Home from './Pages/Home';
import Header from './Components/Home/Header/Header';
import Main from './Components/Home/Main/Main';
import MovieDetails from './Components/Information/InformationMovie';
import Footer from './Components/Home/Footer/Footer';
import SimilarFilms from './Components/Home/Movie/SimilarFilms';
import RegisterPage from './Pages/RegisterPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('submit'));

  function registration() {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn && <RegisterPage registration={registration} />}

      {isLoggedIn && (
        <div>
          <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px] md450:pl-[20px] md450:pr-[0px]">
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/favourite" element={<LikedMovies />} />
            <Route path='/movie/:id' element={<SimilarFilms />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
