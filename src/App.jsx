import HomePage from "./Components/Home/HomePage"
import { PopularMovieProvider } from "./Components/Home/Movie/MovieContext/PopularMovieContext"
import { RatedMovieProvider } from "./Components/Home/Movie/MovieContext/RatedMovieContext"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Form />
      <PopularMovieProvider>
        <RatedMovieProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </RatedMovieProvider>
      </PopularMovieProvider>
    </>
  )
}

export default App
