import React, { useState } from 'react';

interface TableProps {
  data: { accountName: string; accountCode: string }[];
}

interface CardData {
  accountName: string;
  accountCode: string;
  amount: number;
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [debtCards, setDebtCards] = useState<CardData[]>([]);
  const [creditCards, setCreditCards] = useState<CardData[]>([]);

  const handleDropDebt = (event: React.DragEvent<HTMLDivElement>, cardData: CardData) => {
    event.preventDefault();

    const updatedCardData = { ...cardData, amount: 0 };
    setDebtCards([...debtCards, updatedCardData]);
  };

  const handleDropCredit = (event: React.DragEvent<HTMLDivElement>, cardData: CardData) => {
    event.preventDefault();

    const updatedCardData = { ...cardData, amount: 0 };
    setCreditCards([...creditCards, updatedCardData]);
  };

  const handleRemoveDebt = (index: number) => {
    const updatedCards = [...debtCards];
    updatedCards.splice(index, 1);
    setDebtCards(updatedCards);
  };

  const handleRemoveCredit = (index: number) => {
    const updatedCards = [...creditCards];
    updatedCards.splice(index, 1);
    setCreditCards(updatedCards);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Borç</h3>
          <div
            className="dropzone"
            onDrop={(event) => {
              const cardData = JSON.parse(event.dataTransfer.getData('application/json'));
              handleDropDebt(event, cardData);
            }}
            onDragOver={(event) => event.preventDefault()}
          >
            <table className="w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="p-2 border-b-2 bg-gray-200">Hesap Adı</th>
                  <th className="p-2 border-b-2 bg-gray-200">Hesap Kodu</th>
                  <th className="p-2 border-b-2 bg-gray-200">Tutar</th>
                  <th className="p-2 border-b-2 bg-gray-200">Sil</th>
                </tr>
              </thead>
              <tbody>
                {debtCards.map((card, index) => (
                  <tr key={index}>
                    <td className="p-2 border-b border-gray-300">{card.accountName}</td>
                    <td className="p-2 border-b border-gray-300">{card.accountCode}</td>
                    <td className="p-2 border-b border-gray-300">{card.amount}</td>
                    <td className="p-2 border-b border-gray-300">
                      <button onClick={() => handleRemoveDebt(index)}>Sil</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Alacak</h3>
          <div
            className="dropzone"
            onDrop={(event) => {
              const cardData = JSON.parse(event.dataTransfer.getData('application/json'));
              handleDropCredit(event, cardData);
            }}
            onDragOver={(event) => event.preventDefault()}
          >
            <table className="w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="p-2 border-b-2 bg-gray-200">Hesap Adı</th>
                  <th className="p-2 border-b-2 bg-gray-200">Hesap Kodu</th>
                  <th className="p-2 border-b-2 bg-gray-200">Tutar</th>
                  <th className="p-2 border-b-2 bg-gray-200">Sil</th>
                </tr>
              </thead>
              <tbody>
                {creditCards.map((card, index) => (
                  <tr key={index}>
                    <td className="p-2 border-b border-gray-300">{card.accountName}</td>
                    <td className="p-2 border-b border-gray-300">{card.accountCode}</td>
                    <td className="p-2 border-b border-gray-300">{card.amount}</td>
                    <td className="p-2 border-b border-gray-300">
                      <button onClick={() => handleRemoveCredit(index)}>Sil</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;