import  { useState } from 'react';
import Cart from '../components/cart/Cart';
import './services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null); // لمعرفة الكرت المفتوح

  const services = [
    "Software Development",
    "Engineering design implementation of projects",
    "All security equipment accessories",
    "CCTV",
    "Computer networks server services",
    "Regular maintenance services",
    "Communication Mobile towers poles industry",
  ];

  const handleClick = (index) => {
    // إذا كان الكرت المفتوح هو نفسه انقر عليه مرة أخرى أغلقه، وإذا كان غيره افتحه
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="services mt-5">
        <h1 className="text-center">Our Services</h1>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <Cart
              key={index}
              text={service}
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
