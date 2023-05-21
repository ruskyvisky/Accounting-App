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
    <main>
      <div className='flex justify-center pt-3'> 
      

      <h1 className='text-3xl text-center pt-3'>{strings.title}</h1>
      <DropdownButton onSelect={handleLanguageSelect} />

      </div>
      <p className='text-sm pt-3'>{strings.info}</p>
      
      <p>Selected Language: {selectedLanguage}</p>
    </main>
  );
}
