import React from "react";
import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";
import Img4 from "../assets/img/img4.png";
import ProjectListCard from "./components/projectListCard";
import { useLocalization } from "../services/translate/LocalizationProvider";
import ptBR from "../services/translate/languages/pt_br";
import en from "../services/translate/languages/en";

const RevealCards: React.FC = () => {
  const { locale } = useLocalization();
  const translations = locale === "pt-BR" ? ptBR : en;

  const cardsData = [
    {
      image: Img1,
      title: translations.projectsTitle1,
      date: translations.projectsDate1,
      description: translations.projectsDescription1,
      info: translations.info,
    },
    {
      image: Img2,
      title: translations.projectsTitle2,
      date: translations.projectsDate2,
      description: translations.projectsDescription2,
      info: translations.info,
    },
    {
      image: Img3,
      title: translations.projectsTitle3,
      date: translations.projectsDate3,
      description: translations.projectsDescription3,
      info: translations.info,
    },
    {
      image: Img4,
      title: translations.projectsTitle4,
      date: translations.projectsDate4,
      description: translations.projectsDescription4,
      info: translations.info,
    },
  ];

  return (
    <div className="relative z-10 flex flex-col w-3/4 items-center gap-12 justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl font-medium text-light-text dark:text-dark-text">
          {translations.projects}
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
