import React from "react";
import { useLocalization } from "../services/translate/LocalizationProvider";
import ptBR from "../services/translate/pt_br";
import en from "../services/translate/en";

const NotFound: React.FC = () => {
  const { locale } = useLocalization();
  const translations = locale === "pt-BR" ? ptBR : en;

  return (
    <div className="flex flex-col items-center justify-center text-center text-light-text dark:text-dark-text relative z-10">
      <div className="relative">
        <h1 className="text-6xl font-bold tracking-widest">{translations.error}</h1>
        <p className="text-[10rem] font-bold text-opacity-80">404</p>
      </div>
      <a
        href="/portfolio"
        className="text-lg relative z-10 font-semibold cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
    hover:after:w-full after:transition-all after:duration-300"
      >
        → {translations.backToHome}
      </a>
    </div>
  );
};

export default NotFound;
