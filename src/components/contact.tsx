import React from "react";
import { useLocalization } from "../services/translate/LocalizationProvider";
import { usefulLinks } from "../services/routes/usefulLinks";
import ptBR from "../services/translate/languages/pt_br";
import en from "../services/translate/languages/en";

const Contact: React.FC = () => {
  const { locale } = useLocalization();
  const translations = locale === "pt-BR" ? ptBR : en;

  return (
    <div className="flex flex-col py-10 w-full items-center text-light-text dark:text-dark-text">
      <h1 className="text-xl font-bold uppercase tracking-wide mb-6">
        {translations.contact}
      </h1>
      <div className="w-full max-w-4xl flex justify-between border-t border-light-text dark:border-dark-text pt-4">
        {/* Mail Section */}
        <div className="flex flex-col">
          <h2 className="text-sm font-bold uppercase mb-2">Mail</h2>
          <a
            href="mailto:hello@itssharl.ee"
            className="relative z-10 text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
      hover:after:w-full after:transition-all after:duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-2">↗</span>dev.felipefrancca@gmail.com
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col">
          <h2 className="text-sm font-bold uppercase mb-2">
            {translations.socialMedia}
          </h2>
          <a
            href={usefulLinks.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
      hover:after:w-full after:transition-all after:duration-300"
          >
            <span className="mr-2">↗</span> {translations.github}
          </a>
          <a
            href={usefulLinks.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-light-text dark:text-dark-text hover:text-light-textHover dark:hover:text-dark-textHover 
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current 
      hover:after:w-full after:transition-all after:duration-300"
          >
            <span className="mr-2">↗</span> {translations.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
