
import './cart.css';

const Cart = ({ text, index, activeIndex, handleClick }) => {
  const isActive = activeIndex === index;

  return (
    <div 
      onClick={() => handleClick(index)}
      className={`cart-container w-[140px] max-w-xs bg-gradient-to-b from-red-400 to-blue-800 text-white p-4 m-2 text-center flex items-center justify-center h-[540px] shadow-lg rounded-md transition-all duration-500 ease-in-out ${
        isActive ? 'w-[300px]' : ''
      }`}
    >
  
      {!isActive && (
        <div className="cart cart-content rotate-90">
          {text}
        </div>
      )}

      {isActive && (
        <div className="cart-info mt-4">
          <p>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit. Integer nec odio. 
             Praesent libero. Sed cursus ante dapibus diam.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
