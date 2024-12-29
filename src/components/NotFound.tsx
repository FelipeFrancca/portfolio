import React from "react";

const RevealCards: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-light-text dark:text-dark-text relative z-10">
      <div className="relative">
        <h1 className="text-6xl font-bold tracking-widest">ERRO</h1>
        <p className="text-[10rem] font-bold text-opacity-80">404</p>
      </div>
      <a
        href="/portfolio"
        className="mt-4 text-lg font-medium focus:outline-none hover:text-light-textHover dark:hover:text-dark-textHover"
      >
        → voltar para o inicio
      </a>
    </div>
  );
};

export default RevealCards;
