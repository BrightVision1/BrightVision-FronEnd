import "./project.css";
import project from "../../assets/contact/project.png";
import Card from "./Card";
import { useState } from "react";
import { Link } from "react-router-dom";
const Project = () => {
  const [openCard, setOpenCard] = useState(null);

  const cardsData = [
    {
      id: 1,
      image: project,
      description:
        "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet",
      btn: "reed more",
    },
    {
      id: 2,
      image: project,
      description:
        "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet",
      btn: "reed more",
    },
    {
      id: 3,
      image: project,
      description:
        "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet",
      btn: "reed more",
    },
    {
      id: 4,
      image: project,
      description:
        "Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet",
      btn: "reed more",
    },
  ];

  const toggleCard = (id) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <div id="projects" className="Project mt-5 mb-28 ">
        <h1 className=" text-center font-bold">Our Projects</h1>
        <div className="card  mt-16 flex  items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardsData.map((card) => (
              <Card
                key={card.id}
                image={card.image}
                description={card.description}
                btn={card.btn}
                isOpen={openCard === card.id}
                toggleOpen={() => toggleCard(card.id)}
              />
            ))}
            <Link to="/projects" className="Btn">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
