import { useState } from 'react';
import Cart from '../cart/Cart';
import './services.css';
import services1 from '../../assets/services/services1.jpg';
import services2 from '../../assets/services/services2.jpg';
import services3 from '../../assets/services/services3.jpg';
import services4 from '../../assets/services/services4.jpg';
import services5 from '../../assets/services/services5.jpg';
import services6 from '../../assets/services/services6.jpg';
import services7 from '../../assets/services/services7.jpg';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const services = [
    "Software Development",
    "Engineering design implementation of projects",
    "All security equipment accessories",
    "CCTV",
    "Computer networks server services",
    "Regular maintenance services",
    "Communication Mobile towers poles industry",
  ];

  const descriptions = [
    "We offer custom software development services to meet your business needs, including web applications, desktop software, and mobile apps. We utilize the latest technologies to ensure performance and security.",
    "We provide comprehensive services in engineering project design and implementation, from planning to execution. Whether infrastructure or electrical projects, we ensure quality and efficiency at every stage.",
    "We supply a wide range of security equipment accessories, including surveillance cameras, alarms, and access control systems. Our solutions help secure your premises effectively.",
    "CCTV systems are the perfect solution for monitoring and securing your property. We provide high-quality installation and maintenance services for reliable video surveillance.",
    "We offer comprehensive solutions for designing and installing computer networks and servers, ensuring secure connections and high performance. We help you build a strong IT infrastructure for your business.",
    "To ensure continuous optimal performance, we provide regular maintenance services for equipment and networks. We diagnose and fix issues before they cause downtime.",
    "We specialize in the design and installation of mobile communication towers to ensure better and faster connectivity. We offer innovative solutions in the field of communication towers with guaranteed high performance."
  ];

  // Adding images for each service
  const images = [
    services1,
    services2,
    services3,
    services4,
    services5,
    services6,
    services7,
  ];

  const handleClick = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div id='services' className="services mt-5">
        <h1 className="text-center">Our Services</h1>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <Cart
              key={index}
              text={service}
              desc={descriptions[index]}
              img={images[index]}  
              index={index}
              activeIndex={activeIndex}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
