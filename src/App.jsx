
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
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
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
