import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './services/Services';
import Client from './components/Clients/Client';
import Banner from './components/Banner/Banner';
import ContactUs from './components/contactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Project from './components/projects/Project';

function App() {
  return (
    <Router basename="/BrightVision-FronEnd">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
