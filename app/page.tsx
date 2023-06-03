"use client"
import React, { useState } from 'react';
import DropdownButton from './Components/DropDownButton';
import localizationText from './Localization/localizationText';
import AccountList from './Components/AccountsList';
import accounts from "./Utils/accountsData.json"
import AccountTable from "./Components/AccountTable"

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'tr'>('tr');
  

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language as 'en' | 'tr');
  };

  const strings = localizationText[selectedLanguage];

  return (
    <main className="min-h-screen flex flex-col py-10">
      
      
      
<div className='flex '>

<div className="flex flex-row mt-4 w-96 overflow-y-scroll " style={{maxHeight:'400px'}}>
        <div className="flex flex-col items-start">
          {accounts.accounts.map((item) => (
            <AccountList
              key={item.id}
              accountName={item.accountName}
              accountCode={item.accountCode}
            />
          ))}
        </div>

      </div>
      <div className=" w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">EnFin Muhasebe Defteri</h2>
          <AccountTable data={accounts.accounts}  />
        </div>
</div>
     

      <div className="flex-grow"></div>

      <p className="text-sm text-gray-700 items-center justify-center flex">{strings.info}</p>
    </main>
  );
}
