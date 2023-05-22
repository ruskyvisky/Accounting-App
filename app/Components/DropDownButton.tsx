import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface DropdownProps {
  onSelect: (language: string) => void;
  selectedLanguage: string;
}

const DropdownButton: React.FC<DropdownProps> = ({ onSelect, selectedLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language: string) => {
    setIsOpen(false);
    onSelect(language);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedLanguage === "en" ? (
            <BsChevronDown className="mr-1" />
          ) : (
            <BsChevronDown className="mr-1" />
          )}
          {selectedLanguage === "en" ? "English" : "Türkçe"}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className={`block w-full px-4 py-2 text-sm text-gray-700 ${
                selectedLanguage === "en" ? "bg-gray-100" : "hover:bg-gray-100"
              } ${selectedLanguage === "en" ? "text-gray-900" : "hover:text-gray-900"}`}
              onClick={() => handleSelect("en")}
            >
             
              English
            </button>
            <button
              className={`block w-full px-4 py-2 text-sm text-gray-700 ${
                selectedLanguage === "tr" ? "bg-gray-100" : "hover:bg-gray-100"
              } ${selectedLanguage === "tr" ? "text-gray-900" : "hover:text-gray-900"}`}
              onClick={() => handleSelect("tr")}
            >
             
              Türkçe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
