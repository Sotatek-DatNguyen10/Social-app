import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import Test from "./../Test/Test"

function Routers() {
  return (
    <Routes>
      <Route path="" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}
export default Routers
