import { useState } from "react";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    onClick();
  };

  const handleMouseEnter = () => setIsHovered(true); 
  const handleMouseLeave = () => setIsHovered(false); 

  return (
    <div className="flex items-center justify-center">
      <div
        role="button"
        aria-label="Display the menu"
        className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        <span
          className={`absolute block h-1 w-6 ${
            isHovered
              ? "bg-light-textHover dark:bg-dark-textHover"
              : "bg-dark-background dark:bg-light-background"
          } rounded transition-transform duration-300 ${
            isChecked ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        ></span>
        <span
          className={`absolute block h-1 w-6 ${
            isHovered
              ? "bg-light-textHover dark:bg-dark-textHover"
              : "bg-dark-background dark:bg-light-background"
          } rounded transition-opacity duration-300 ${
            isChecked ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute block h-1 w-6 ${
            isHovered
              ? "bg-light-textHover dark:bg-dark-textHover"
              : "bg-dark-background dark:bg-light-background"
          } rounded transition-transform duration-300 ${
            isChecked ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default MenuButton;
