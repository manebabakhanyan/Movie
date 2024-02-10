// import SearchResults from "./Components/Home/Header/SearchResult"
// import HomePage from "./Components/Home/HomePage"
// import LikedMovies from "./Components/Home/Movie/LikedMovies"
// import Form from "./Components/RegistrationForm/RegistrationForm"
// import { Route, Routes } from "react-router-dom"

// function App() {
//   return (
//     <>
//       <Form />
//       <Routes>
//         <Route path="*" element={<HomePage />} />
//         <Route path="search" element={<SearchResults />} />
//         <Route path="/favourite" element={<LikedMovies />} />
//       </Routes>
//     </>
//   )
// }

// export default App



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './Components/Home/Header/SearchResult';
import HomePage from './Components/Home/HomePage';
import LikedMovies from './Components/Home/Movie/LikedMovies';
import Form from './Components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <>
      <Form />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favourite/*" element={<LikedMovies />} />
      </Routes>
    </>
  );
}

export default App;
