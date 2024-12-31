import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import MenuButton from "./components/components/menuButton";
import AccessMenu from "./components/accessMenu";
import LogoStructure from "./assets/img/logoStructure.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AppRoutes from "./services/routes/routes";
import { useLocalization } from "./services/translate/LocalizationProvider";

export default function App() {
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const { locale, toggleLocale, translations } = useLocalization();
    const [darkMode, setDarkMode] = useState(getInitialTheme);
    const [menuOpen, setMenuOpen] = useState(false);

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
            className={`flex justify-center relative min-h-screen overflow-hidden bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text`}
        >
            <div className="fixed w-full flex justify-between items-center px-20 top-16 z-40">
                <a href="/portfolio">
                    <img src={LogoStructure} alt="Logo" className="w-16 h-16" />
                </a>
                <div className="flex items-center space-x-4">
                    <Typography
                        className="text-sm font-medium cursor-pointer hover:text-light-textHover dark:hover:text-dark-textHover"
                        onClick={toggleLocale}
                    >
                        {translations.toggleLanguage}
                    </Typography>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-light-element dark:bg-dark-element hover:bg-light-hover dark:hover:bg-dark-hover focus:outline-none transition z-50"
                    >
                        {darkMode ? (
                            <LightModeIcon className="text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover" />
                        ) : (
                            <DarkModeIcon className="text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover" />
                        )}
                    </button>
                    <MenuButton onClick={() => setMenuOpen((prev) => !prev)} />
                </div>
            </div>

            <div
                className={`flex justify-center w-full mt-52 mb-10 transition-all duration-300 ${
                    menuOpen ? "hidden" : "block"
                }`}
            >
                <AppRoutes />
            </div>

            <div
                className={`fixed inset-0 z-30 flex justify-center items-center transition-opacity duration-300 ${
                    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <AccessMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>

            <div className="absolute inset-0 flex justify-center items-center overflow-hidden z-0">
                <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 dark:from-gray-200 dark:via-gray-300 dark:to-gray-400 rounded-full opacity-30 blur-[200px]"></div>
            </div>
        </div>
    );
}
