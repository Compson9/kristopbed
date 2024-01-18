import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import Facilities from "./pages/Facilities"
import About from "./pages/About"
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/rooms" element={<Rooms/>}/>
<Route path="/facilities" element={<Facilities/>}/>
<Route path="/about" element={<About/>}/>
</Routes>
<Footer/>
    </>
   
  
  )
}

export default App