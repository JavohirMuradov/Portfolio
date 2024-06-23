import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Entering from "./Pages/Entering";
import ExactProject from "./Pages/ExactProject";
import Projects from "./Pages/Projects";
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        disable: 'mobile'
      });
    };
    loadAOS();
  }, []);
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Entering />} />
        </Routes>
      </Suspense>
      {pathname !== "/" && (
        <Layout>
          <Suspense>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/exactProject/:name" element={<ExactProject />} />
            </Routes>
          </Suspense>
        </Layout >
      )}
      <ToastContainer />
    </>
  );
}



export default App;
