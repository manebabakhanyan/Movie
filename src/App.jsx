import HomePage from "./Components/Home/HomePage"
import { MovieProvider } from "./Components/Home/Movie/MovieContext/PopularMovieContext"
import { RatedMovieProvider } from "./Components/Home/Movie/MovieContext/RatedMovieContext"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Form />
      <MovieProvider>
        <RatedMovieProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RatedMovieProvider>
      </MovieProvider>
    </>
  )
}

export default App
