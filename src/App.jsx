import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './Components/Home/Header/SearchResult';
import LikedMovies from './Components/Home/Movie/LikedMovies';
import Form from './Components/RegistrationForm/RegistrationForm';
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Main from './Components/Home/Main/Main';
import MovieDetails from './Components/Information/InformationMovie';
import Footer from './Components/Home/Footer/Footer';
function App() {
  return (
    <>
      <Form />
      <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favourite" element={<LikedMovies />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;