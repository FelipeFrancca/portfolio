import React from "react";
import ImgMe from "../assets/img/me.png";

const AboutMe: React.FC = () => {
  const openResume = () => {
    window.open("/public/assets/pdf/ffResumeptBR.pdf", "_blank");
  };  

  return (
    <div className="flex items-center justify-center text-light-text dark:text-dark-text">
      <div className="flex flex-col md:flex-row w-full max-w-6xl items-center">
        <div className="flex-1 relative mb-8 md:mb-0 md:mr-8">
          <img
            src={ImgMe}
            alt="Me"
            className="w-full h-auto max-h-[80vh] object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="flex-1 text-left px-8">
          <h1 className="text-6xl font-bold mb-6 tracking-wide">SOBRE MIM</h1>
          <p className="relative z-10 mb-8 text-lg leading-relaxed">
            Desenvolvedor full stack com 3 anos de experiência, focado em criar
            sistemas acessíveis e responsivos. Minha trajetória começou em 2022,
            quando fiz a transição de carreira do suporte técnico para o
            desenvolvimento web. <br /><br />
            Desde então, tenho trabalhado duro e busco meu
            aprimoramento pessoal constantemente, me apaixonando a cada dia mais
            pelo o que faço. Tenho experiência com tecnologias derivadas do
            Javascript, especialmente TypeScript, React, Next e também com PHP
            voltado para hospedagens apache. Também já utilizei Java, C++, Nest,
            Node, e também tive contato com a criação de imagens Docker.
          </p>
          <button
            onClick={openResume}
            className="text-lg relative z-10 font-semibold cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover"
          >
            ↓ Currículo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
