import HomePage from "./Components/Home/HomePage"
import { MovieProvider } from "./Components/Home/Movie/MovieContext/MovieContext"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Form />
      <MovieProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MovieProvider>
    </>
  )
}

export default App
