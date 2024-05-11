import {BrowserRouter , Routes , Route} from "react-router-dom"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Blog from "./Pages/Blog"
import Testimonies from "./Pages/Testimonies"
function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/testimonies" element={<Testimonies/>}/> 
      <Route path="/blog" element={<Blog/>}/> 
      <Route path="/services" element={<Services/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
    </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
