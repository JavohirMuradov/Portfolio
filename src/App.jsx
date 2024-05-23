import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Entering from "./Pages/Entering";
import ExactProject from "./Pages/ExactProject";
import Projects from "./Pages/Projects";
import 'react-toastify/dist/ReactToastify.css';

const getTitle = (pathname) => {
  switch (pathname) {
    case "/home":
      return "Portfolio of Javohir Muradov(Java).";
    case "/contact":
      return "Portfolio of Javohir Muradov(Java).";
    case "/about":
      return "Portfolio of Javohir Muradov(Java).";
    case "/projects":
      return "Portfolio of Javohir Muradov(Java).";
    case pathname.match(/^\/projects\/exactProject/)?.input:
      return "Portfolio of Javohir Muradov(Java).";
    default:
      return "Portfolio of Javohir Muradov(Java).";
  }
};

const getDescription = (pathname) => {
  switch (pathname) {
    case "/home":
      return "Welcome to the Portfolio of Javohir Muradov.";
    case "/contact":
      return "Get in touch with me through my contact page.";
    case "/about":
      return "Learn more about Me and my mission.";
    case "/projects":
      return "Explore my projects and see what I've been working on.";
    case pathname.match(/^\/projects\/exactProject/)?.input:
      return "Detailed information about my projects.";
    default:
      return "Portfolio of Javohir Muradov(Java).";
  }
};
function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>{getTitle(pathname)}</title>
        <meta name="description" content={getDescription(pathname)} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Entering />} />
      </Routes>
      {pathname !== "/" && (
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/exactProject/:name" element={<ExactProject />} />
          </Routes>
        </Layout >
      )}
      <ToastContainer />
    </>
  );
}



export default App;
