"use client"
import React, { useState } from 'react';
import DropdownButton from './Components/DropDownButton';
import localizationText from './Localization/localizationText';
import AccountList from './Components/AccountsList';
import accounts from "./Utils/accountsData.json"
export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('en');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language as 'en' | 'tr');
  };

  const strings = localizationText[selectedLanguage];

  return (
    <main className="min-h-screen flex flex-col   py-10">
      <div className="flex flex-row items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold px-4">{strings.title}</h1>
        <DropdownButton selectedLanguage={selectedLanguage} onSelect={handleLanguageSelect} />
      </div>
      
      <div className="flex flex-col items-start mt-4">
       {
        accounts.accounts.map((item) => {
          return (
            <AccountList
              key={item.id}
              accountName={item.accountName}
              accountCode={item.accountCode}
            />
          );
        })
        
       }
      </div>
      
      <div className="flex-grow "></div>
      
      <p className="text-sm text-gray-700 items-center justify-center flex ">{strings.info}</p>
    </main>
  );
}
