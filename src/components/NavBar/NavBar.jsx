import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 w-full z-10 p-3">
      <div className="nav mx-auto px-4 py-2 flex justify-between items-center">
        <div className="nav-item flex items-center justify-between w-full">
   
          <div className="hidden lg:flex gap-10">
            <Link to="/BrightVision-FronEnd/" className="items">Home</Link>
            <Link to="/BrightVision-FronEnd/about" className="items">About us</Link>
            <Link to="/BrightVision-FronEnd/services" className="items">Our services</Link>
            <Link to="/BrightVision-FronEnd/projects" className="items">Our projects</Link>
            <Link to="/BrightVision-FronEnd/clients" className="items">Our clients</Link>
            <Link to="/BrightVision-FronEnd/contact" className="items">Contact us</Link>
          </div>
  
          <div className=" hidden lg:flex space-x-2">
            <Link to="/signin" className="buuton-info border-gray-300 rounded-full px-3 py-2">
              Sign In
            </Link>
            <Link to="/register" className="buuton-info rounded-full px-3 py-2">
              Register
            </Link>
          </div>
     
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-20`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold">Menu</h2>
          </div>
          <div className="flex flex-col space-y-2 px-4">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">About us</Link>
            <Link to="/services" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Our services</Link>
            <Link to="/projects" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Our projects</Link>
            <Link to="/clients" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Our clients</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Contact us</Link>
            <div className="mt-4">
              <Link to="/signin" onClick={toggleMenu} className="block bg-white border border-gray-300 text-gray-700 rounded-full px-4 py-2 hover:bg-gray-100 mb-2">
                Sign In
              </Link>
              <Link to="/register" onClick={toggleMenu} className="block bg-red-600 text-white rounded-full px-4 py-2 hover:bg-red-700">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
