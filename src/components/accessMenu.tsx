import React from "react";

interface AccessMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const AccessMenu: React.FC<AccessMenuProps> = ({ isOpen, onClose, className }) => {
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
      INICIO
    </a>
  </li>
  <li>
    <a
      href="/projects"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      PROJETOS
    </a>
  </li>
  <li>
    <a
      href="/about"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      SOBRE MIM
    </a>
  </li>
  <li>
    <a
      href="/contact"
      className="relative z-10 cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover 
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
        hover:after:w-full after:transition-all after:duration-300"
    >
      CONTATO
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
    ↗ GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/felipe-françaa"
    target="blank"
    className="relative text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
      hover:after:w-full after:transition-all after:duration-300"
  >
    ↗ LinkedIn
  </a>
</div>

      </div>
    </div>
  );
};

export default AccessMenu;
