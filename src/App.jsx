import HomePage from "./Components/Home/HomePage"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Form />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
