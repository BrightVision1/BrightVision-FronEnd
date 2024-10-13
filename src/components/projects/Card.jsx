const Card = ({ image, description, isOpen, toggleOpen }) => {
  return (
    <div className={`card-container ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <div className="card-image">
        <img src={image} alt="Project" />
      </div>
      <div className={`card-description ${isOpen ? "open" : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
