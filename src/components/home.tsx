import React from "react";

export default function Home() {
  return (
    <div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center" style={{ height: "calc(100% - 13rem)" }}>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-light-text dark:text-dark-text transition-colors">
          Oi, meu nome é <span>Felipe França</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mt-2 text-light-text dark:text-dark-text transition-colors">
          é um prazer tê-lo interessado em meus trabalhos.
        </h2>
        <p className="text-lg md:text-xl mt-4 text-light-text dark:text-dark-text transition-colors">
          Sou desenvolvedor Full Stack & UX/UI designer
        </p>
        <div className="flex space-x-6 mt-6">
          <a
            href="#projects"
            className="text-lg font-medium text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover transition-colors"
          >
            → Veja meus projetos
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover transition-colors"
          >
            → Sobre mim
          </a>
        </div>
      </div>
    </div>
  );
}
