import React from "react";
import ImgMe from "../../assets/img/me.png";
import { useLocalization } from "../../services/translate/LocalizationProvider";
import ptBR from "../../services/translate/languages/pt_br";
import en from "../../services/translate/languages/en";

const AboutMe: React.FC = () => {
  const { locale } = useLocalization();
  const translations = locale === "pt-BR" ? ptBR : en;

  return (
    <div className="flex p-5 pt-0 items-center justify-center text-light-text dark:text-dark-text">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
        <div className="flex-1 relative mb-8 md:mb-0 md:mr-8">
          <img
            src={ImgMe}
            alt="Me"
            className="relative z-10 w-full h-auto object-cover object-top rounded-md shadow-lg"
          />
        </div>

        <div className="flex-1 text-left px-8">
          <h1 className="text-6xl font-bold mb-6 tracking-wide">
            {translations.aboutMe}
          </h1>
          <p className="relative z-10 mb-8 text-lg leading-relaxed">
            {translations.aboutMeDescOne}
            <br />
            <br />
            {translations.aboutMeDescTwo}
            <br />
            <br />
            {translations.aboutMeDescTree}
          </p>
          <div className="flex space-x-6 mt-6">
            <a
              href={translations.resumeWay}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg relative z-10 font-semibold cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
              hover:after:w-full after:transition-all after:duration-300"
            >
              → {translations.resume}
            </a>
            <a
              href="/portfolio/projects"
              className="text-lg relative z-10 font-semibold cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
              after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
              hover:after:w-full after:transition-all after:duration-300"
            >
              → {translations.seeProjects}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
