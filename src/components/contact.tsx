import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-xl font-bold uppercase tracking-wide">Contato</h1>
      <div className="w-full flex justify-between items-center border-t mt-4 pt-4">
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-bold uppercase">Mail</h2>
          <a
            href="mailto:hello@itssharl.ee"
            className="relative z-10  text-blue-500 hover:underline flex items-center"
            target="blank"
          >
            <span className="mr-2">↗</span> dev.felipefrancca@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-sm font-bold uppercase">Redes sociais</h2>
          <a
            href="https://github.com/FelipeFrancca"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 text-blue-500 hover:underline flex items-center"
          >
            <span className="mr-2">↗</span> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/felipe-françaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10  text-blue-500 hover:underline flex items-center mt-2"
          >
            <span className="mr-2">↗</span> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
