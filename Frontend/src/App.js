import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import View from "./components/View"
import Add from "./components/Add"
import Complete from "./components/Complete"
import Pending from "./components/Pending"


function App() {

  return (
    <>
     <Nav />
    <Routes>
    <Route path="/" element={<Add />} />
    <Route path="/view" element={<View />} />
    <Route path="/add" element={<Add />} />
    <Route path="/complete" element={<Complete />} />
    <Route path="/pending" element={<Pending />} />
   </Routes>
  </>
  )
}

export default App