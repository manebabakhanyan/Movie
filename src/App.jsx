import Home from "./Components/Home/Home"
import Form from "./Components/RegistrationForm/RegistrationForm"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Form />
      <div className='bg-gradient-to-br from-viaGray via-fromGray to-toGray px-[100px]'>
        <Header />
      </div>
    </>
  )
}

export default App
