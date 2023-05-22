"use client"
import React, { useState } from 'react';
import DropdownButton from './Components/DropDownButton';
import localizationText from './Localization/localizationText';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language as 'en' | 'tr');
  };

  const strings = localizationText[selectedLanguage];

  return (
    <main className=" min-h-screen flex flex-col justify-center items-center py-10">
      <div className="flex flex-row items-center space-y-4">
        <h1 className="text-3xl font-bold px-4">{strings.title}</h1>
        <DropdownButton selectedLanguage={selectedLanguage} onSelect={handleLanguageSelect} />
      </div>
      <div className="flex-grow"></div>
      
      <p className="text-sm text-gray-700 ">{strings.info}</p>
     
    </main>
  );
}