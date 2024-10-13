import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Client from './components/Clients/Client';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import Project from './components/projects/Project';
import Services from './components/services/Services';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router basename="/BrightVision-FronEnd/">
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
