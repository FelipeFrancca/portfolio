import React from "react";
import ExpandIcon from "@mui/icons-material/Expand";

type CardProps = {
  image: string;
  title: string;
  date: string;
  description: string;
  info: string;
};

const ProjectListCard: React.FC<CardProps> = ({
  image,
  title,
  date,
  description,
  info,
}) => {
  return (
    <div className="group relative w-full h-72 bg-light-background dark:bg-dark-background rounded-[40px] shadow-xl transition-all duration-500 overflow-hidden hover:h-[420px]">
      <div
        className="relative w-full h-[260px] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-[-40px] w-full h-[80px] bg-light-background dark:bg-dark-background rounded-[40px]"></div>
        <div className="absolute right-0 bottom-[40px] w-[80px] h-[80px] bg-transparent rounded-full shadow-[75px_70px_0_40px_theme(colors.light.background)] dark:shadow-[75px_70px_0_40px_theme(colors.dark.background)]"></div>
      </div>
      <div className="relative z-10 top-[-55px] p-6">
        <div className="flex w-full justify-between items-center">
          <h3 className="relative text-lg font-medium text-light-text dark:text-dark-text">
            {title}
            <br />
            <span className="absolute bottom-[-18px] left-0 text-sm font-light opacity-75">
              {date}
            </span>
          </h3>
          <div className="flex items-center justify-center">
            <span className="relative text-sm font-light opacity-75">
              {info}
            </span>
            <ExpandIcon />
          </div>
        </div>
        <p className="relative mt-6 text-light-text dark:text-dark-text opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectListCard;
