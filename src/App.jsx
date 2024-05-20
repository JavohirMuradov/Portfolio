import Layout from "./Layout/Layout"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"
import Projects from "./Pages/Projects/Projects"
import Entering from "./Pages/Entering"

function App() {
  var path = useLocation()
  return (
    <>
      {path.pathname === "/" ?
        <Routes>
          <Route path="/" element={<Entering />} />
        </Routes>
        : <Layout>
          <Routes>
            <Route path="/" element={<Entering />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/exactprojects" element={<Projects />} />
          </Routes>
        </Layout>
      }
    </>
  )
}

export default App
