// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import SearchResults from './Components/Home/Header/SearchResult';
// import LikedMovies from './Components/Home/Movie/LikedMovies';
// import Form from './Components/RegistrationForm/RegistrationForm';
// import Home from './Components/Home/Home';
// import Header from './Components/Home/Header/Header';
// import Main from './Components/Home/Main/Main';
// import MovieDetails from './Components/Information/InformationMovie';
// import Footer from './Components/Home/Footer/Footer';
// import SimilarFilms from './Components/Home/Movie/SimilarFilms';
// function App() {
//   return (
//     <>
//       <Form />
//       <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
//         <Header />
//         <Routes>
//           <Route path='/' element={<Main />} />
//           <Route path="/movie/:id" element={<MovieDetails />} />
//         </Routes>
//       </div>
//       <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/search" element={<SearchResults />} />
// <Route path="/favourite" element={<LikedMovies />} />
// <Route path='/movie/:id' element={<SimilarFilms />} />
//       </Routes>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;



// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import Header from './Components/Home/Header/Header';
// import Main from './Components/Home/Main/Main';
// import MovieDetails from './Components/Information/InformationMovie';
// import Footer from './Components/Home/Footer/Footer';
// import SearchResults from './Components/Home/Header/SearchResult';
// import LikedMovies from './Components/Home/Movie/LikedMovies';
// import SimilarFilms from './Components/Home/Movie/SimilarFilms';
// import Home from './Components/Home/Home';
// import RegisterPage from './Components/RegistrationForm/RegistrationForm';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('submit'));

//   return (
//     <>
//       {!isLoggedIn && <RegisterPage setIsLoggedIn={setIsLoggedIn} />}
//       {isLoggedIn && <Header />}

//       <div>
//         {isLoggedIn && (
//           <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
//             <Routes>
//               <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
//               <Route path="/" element={<Main />} />
//               <Route path="/movie/:id" element={<MovieDetails />} />
//               <Route path="/search" element={<SearchResults />} />
//               <Route path="/favourite" element={<LikedMovies />} />
//               <Route path='/movie/:id' element={<SimilarFilms />} />
//             </Routes>
//           </div>
//         )}
//       </div>

//       {isLoggedIn && <Footer />}
//     </>
//   );
// }

// export default App;




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Header from './Components/Home/Header/Header';
// import Main from './Components/Home/Main/Main';
// import Footer from './Components/Home/Footer/Footer';
// import RegisterPage from './Components/RegistrationForm/RegistrationForm';
// import Home from './Components/Home/Home';
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('submit'));

//   return (
//     <>
//       {!isLoggedIn && <RegisterPage setIsLoggedIn={setIsLoggedIn} />}

//       {isLoggedIn && (
//         <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
//           {isLoggedIn && <Header />}
//           {isLoggedIn && <Routes>
//             <Route path="/" element={<Main />} />
//           </Routes>}
//         </div>
//       )}
//       {isLoggedIn &&
//         <Routes>
//           <Route path='/' element={<Home />} />
//         </Routes>
//       }
//       {isLoggedIn && <Footer />}
//     </>
//   );
// }

// export default App;




import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchResults from './Components/Home/Header/SearchResult';
import LikedMovies from './Components/Home/Movie/LikedMovies';
import Home from './Components/Home/Home';
import Header from './Components/Home/Header/Header';
import Main from './Components/Home/Main/Main';
import MovieDetails from './Components/Information/InformationMovie';
import Footer from './Components/Home/Footer/Footer';
import SimilarFilms from './Components/Home/Movie/SimilarFilms';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('submit'));

  const handleRegistrationSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn && <RegisterPage onRegistrationSuccess={handleRegistrationSuccess} />}

      {isLoggedIn && (
        <div>
          <div className="bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]">
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
        </div>
      )}
      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;




