import React from "react";
import { useLocalization } from "../services/translate/LocalizationProvider";
import ptBR from "../services/translate/pt_br";
import en from "../services/translate/en";

export default function Home() {
  const { locale} = useLocalization();
  const translations = locale === "pt-BR" ? ptBR : en;

  return (
    <div>
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{ height: "calc(100% - 13rem)" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-light-text dark:text-dark-text transition-colors">
          {translations.presentationOne} <span>{translations.presentationTwo}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mt-2 text-light-text dark:text-dark-text transition-colors">
        {translations.presentationTree}
        </h2>
        <p className="text-lg md:text-xl mt-4 text-light-text dark:text-dark-text transition-colors">
        {translations.skills}
        </p>
        <div className="flex space-x-6 mt-6">
          <a
            href="/projects"
            className="text-lg relative z-10 font-semibold cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
    hover:after:w-full after:transition-all after:duration-300"
          >
            → {translations.seeProjects}
          </a>
          <a
            href="/about"
            className="text-lg relative z-10 font-semibold cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
    hover:after:w-full after:transition-all after:duration-300"
          >
            → {translations.knowMore}
          </a>
        </div>
      </div>
    </div>
  );
}
