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
          <li><a href="/portfolio">INICIO</a></li>
          <li><a href="/projects">PROJETOS</a></li>
          <li><a href="/about">SOBRE MIM</a></li>
          <li><a href="/portfolio">CONTATO</a></li>
        </ul>
        <div className="mt-8 flex justify-center space-x-8 text-lg">
          <a href="https://github.com/felipeFrancca" target="blank" className="text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover">
            ↗ GitHub
          </a>
          <a href="https://www.linkedin.com/in/felipe-françaa" target="blank" className="text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover">
            ↗ LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessMenu;
