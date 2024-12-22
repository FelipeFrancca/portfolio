import React from "react";
import Img1 from "../assets/img/img1.png";

type CardProps = {
  image: string;
  title: string;
  date: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ image, title, date, description }) => {
  return (
    <div className="group relative w-72 h-72 bg-light-background dark:bg-dark-background rounded-[40px] shadow-lg transition-all duration-500 overflow-hidden hover:h-[420px]">
      <div
        className="relative w-full h-[260px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-[-40px] w-full h-[80px] bg-light-background dark:bg-dark-background rounded-[40px]"></div>
        <div className="absolute right-0 bottom-[40px] w-[80px] h-[80px] bg-transparent rounded-full shadow-[75px_70px_0_40px_theme(colors.light.background)] dark:shadow-[75px_70px_0_40px_theme(colors.dark.background)]"></div>
      </div>
      <div className="relative z-10 top-[-55px] p-6">
        <h3 className="relative text-lg font-medium text-light-text dark:text-dark-text">
          {title}
          <br />
          <span className="absolute bottom-[-18px] left-0 text-sm font-light opacity-75">
            {date}
          </span>
        </h3>
        <p className="relative mt-6 text-light-text dark:text-dark-text opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

const RevealCards: React.FC = () => {
  const cardsData = [
    {
      image: Img1,
      title: "Página de login",
      date: "28/10/2023",
      description:
        "Uma simples pagina de login criada para praticar noções de design e interface do usuário.",
    },
    {
      image: Img1,
      title: "Fake Trello",
      date: "05/04/2024",
      description:
        'Projeto kanban desenvolvido em React.js para por em prática habilidades de "drag and drop" com layout baseado no site Trello.',
    },
  ];

  return (
    <div className="flex items-center gap-12 justify-center min-h-screen">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          date={card.date}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default RevealCards;
