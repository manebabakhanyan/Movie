import Home from "./Components/Home/Home"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Form />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
