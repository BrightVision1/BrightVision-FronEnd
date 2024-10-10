
const Card = ({ image, description, isOpen, toggleOpen }) => {
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={toggleOpen}>
        <img src={image} alt="card" className="rounded-lg shadow-lg w-full h-50 object-cover" />
      </div>
      <div
        className={`absolute top-0 left-0 w-full overflow-hidden bg-white
             p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
