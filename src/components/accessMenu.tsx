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
        <ul className="space-y-6 text-white text-3xl font-bold">
          <li>01 HOME</li>
          <li>02 WORK</li>
          <li>03 ABOUT</li>
          <li>04 CONTACT</li>
        </ul>
        <div className="mt-8 flex justify-center space-x-8 text-lg">
          <a href="#instagram" className="text-gray-300 hover:text-white">
            ↗ GitHub
          </a>
          <a href="#behance" className="text-gray-300 hover:text-white">
            ↗ LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessMenu;
