import React, { useState, useEffect } from "react";
import Logo from "./assets/img/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import OptionsMenu from "@mui/icons-material/Apps";
import { Typography } from "@mui/material";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
    >
      <div className="absolute top-4 w-full flex justify-between items-center px-4 z-50">
        <img src={Logo} alt="Logo" className="w-20 h-20" />

        <div className="flex items-center space-x-4">
        <Typography className="text-sm cursor-pointer">EN</Typography>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none transition z-50"
          >
            {darkMode ? (
              <LightModeIcon className="text-gray-900 dark:text-white" />
            ) : (
              <DarkModeIcon className="text-gray-900 dark:text-white" />
            )}
          </button>
          <OptionsMenu className="cursor-pointer text-gray-900 dark:text-white" />
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-0">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full opacity-40 blur-3xl animate-pulse dark:from-gray-300 dark:via-gray-400 dark:to-gray-500"></div>
        <div className="w-[400px] h-[400px] bg-gradient-to-r from-gray-800 to-gray-700 rounded-full opacity-30 blur-2xl animate-pulse dark:from-gray-400 dark:to-gray-300"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Oi, meu nome é <span>Felipe França</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mt-4">
          é um prazer tê-lo interessado em meus trabalhos
        </h2>
        <p className="text-lg md:text-xl mt-4">
          Sou desenvolvedor Full Stack & UX/UI designer
        </p>
        <div className="flex space-x-6 mt-6">
          <a
            href="#projects"
            className="text-lg font-medium text-purple-950 hover:text-blue-300 transition-colors"
          >
            → Veja meus projetos
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-purple-950 hover:text-blue-300 transition-colors"
          >
            → Sobre mim
          </a>
        </div>
      </div>
    </div>
  );
}
