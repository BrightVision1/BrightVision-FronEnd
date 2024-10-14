import { Link } from "react-router-dom";

const Card = ({ image, description, isOpen, toggleOpen, btn }) => {
  return (
    <div
      className={`card-container ${isOpen ? "open" : ""}`}
      onClick={toggleOpen}
    >
      <div className="card-image">
        <img src={image} alt="Project" />
      </div>
      <div className={`card-description ${isOpen ? "open" : ""}`}>
        <p>{description}</p>
        <Link to="/projects" className="button-card">
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default Card;
