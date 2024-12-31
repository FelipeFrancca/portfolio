import React from "react";
import { useLocalization } from "../services/translate/LocalizationProvider";
import ptBR from "../services/translate/pt_br";
import en from "../services/translate/en";

interface AccessMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const AccessMenu: React.FC<AccessMenuProps> = ({ isOpen, onClose, className }) => {
  const { locale} = useLocalization();
  const translations = locale === "pt-BR" ? ptBR : en;

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-around ${className || ""}`}>
      <div className="text-center">
      <ul className="space-y-6 text-3xl font-bold text-light-text dark:text-dark-text">
  <li>
    <a
      href="/portfolio"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      {translations.home}
    </a>
  </li>
  <li>
    <a
      href="/projects"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      {translations.projects}
    </a>
  </li>
  <li>
    <a
      href="/about"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      {translations.about}
    </a>
  </li>
  <li>
    <a
      href="/contact"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      {translations.contact}
    </a>
  </li>
</ul>

<div className="mt-8 flex justify-center space-x-8 text-lg">
  <a
    href="https://github.com/felipeFrancca"
    target="blank"
    className="relative text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
      hover:after:w-full after:transition-all after:duration-300"
  >
    ↗ {translations.github}
  </a>
  <a
    href="https://www.linkedin.com/in/felipe-françaa"
    target="blank"
    className="relative text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
      hover:after:w-full after:transition-all after:duration-300"
  >
    ↗ {translations.linkedin}
  </a>
</div>

      </div>
    </div>
  );
};

export default AccessMenu;
