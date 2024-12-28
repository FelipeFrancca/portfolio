import React from "react";
import Img1 from "../assets/img/img1.png";
import ProjectListCard from "./components/projectListCard";

const RevealCards: React.FC = () => {
  const cardsData = [
    {
      image: Img1,
      title: "Página de login",
      date: "28/10/2023",
      description:
        "Uma simples pagina de login criada para praticar noções de design e interface do usuário.",
      info: "Expandir",
    },
    {
      image: Img1,
      title: "Fake Trello",
      date: "05/04/2024",
      description:
        'Projeto kanban desenvolvido em React.js para por em prática habilidades de "drag and drop" com layout baseado no site Trello.',
      info: "Expandir",
    },
    {
      image: Img1,
      title: "Página de login",
      date: "28/10/2023",
      description:
        "Uma simples pagina de login criada para praticar noções de design e interface do usuário.",
      info: "Expandir",
    },
    {
      image: Img1,
      title: "Fake Trello",
      date: "05/04/2024",
      description:
        'Projeto kanban desenvolvido em React.js para por em prática habilidades de "drag and drop" com layout baseado no site Trello.',
      info: "Expandir",
    },
  ];

  return (
    <div className="flex flex-col w-3/4 items-center gap-12 justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-medium text-light-text dark:text-dark-text">
          PROJETOS
        </h1>
        <h1 className="text-4xl font-medium text-light-text dark:text-dark-text">
          {cardsData.length}
        </h1>
      </div>
      {cardsData.map((card, index) => (
        <ProjectListCard
          key={index}
          image={card.image}
          title={card.title}
          date={card.date}
          description={card.description}
          info={card.info}
        />
      ))}
    </div>
  );
};

export default RevealCards;
