import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import About from './pages/Home/About';
import Services from './pages/Home/Services';
import Projects from './pages/Home/Projects';
import Client from './pages/Home/Client';
import ContactUs from './pages/Home/ContactUs';

function App() {
  return (
    <>
      <Router basename="/BrightVision-FronEnd">
        <Navbar />
        <Banner/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
