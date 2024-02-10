import SearchResults from "./Components/Home/Header/SearchResult"
import HomePage from "./Components/Home/HomePage"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Form />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="search" element={<SearchResults />} />
      </Routes>
    </>
  )
}

export default App
