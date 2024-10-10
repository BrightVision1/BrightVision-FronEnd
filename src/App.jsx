
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from './pages/Home/About';
import Services from './pages/Home/Services';
import Projects from './pages/Home/Projects';
import Client from './pages/Home/Client';
import Banner from './components/Banner/Banner';
import ContactUs from './pages/Home/ContactUs';

// import About from './pages/About';
// import Services from './pages/Services';
// import Projects from './pages/Projects';
// import Clients from './pages/Clients';
// import Contact from './pages/Contact';
// import SignIn from './pages/SignIn';
// import Register from './pages/Register';
function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Banner/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
