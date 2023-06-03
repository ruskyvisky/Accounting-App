import React, { useState, useEffect } from "react";

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
  const [editingDebtIndex, setEditingDebtIndex] = useState<number | null>(null);
  const [editingCreditIndex, setEditingCreditIndex] = useState<number | null>(
    null
  );
  const [debtTotal, setDebtTotal] = useState<number>(0);
  const [creditTotal, setCreditTotal] = useState<number>(0);

  useEffect(() => {
    const calculateDebtTotal = () => {
      const total = debtCards.reduce((sum, card) => sum + card.amount, 0);
      setDebtTotal(total);
    };
    calculateDebtTotal();
  }, [debtCards]);

  useEffect(() => {
    const calculateCreditTotal = () => {
      const total = creditCards.reduce((sum, card) => sum + card.amount, 0);
      setCreditTotal(total);
    };
    calculateCreditTotal();
  }, [creditCards]);

  const handleDropDebt = (
    event: React.DragEvent<HTMLDivElement>,
    cardData: CardData
  ) => {
    event.preventDefault();

    const updatedCardData = { ...cardData, amount: 0 };
    setDebtCards([...debtCards, updatedCardData]);
  };

  const handleDropCredit = (
    event: React.DragEvent<HTMLDivElement>,
    cardData: CardData
  ) => {
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

  const handleUpdateDebt = (index: number, updatedAmount: number) => {
    const updatedCards = [...debtCards];
    updatedCards[index].amount = updatedAmount;
    setDebtCards(updatedCards);
  };

  const handleUpdateCredit = (index: number, updatedAmount: number) => {
    const updatedCards = [...creditCards];
    updatedCards[index].amount = updatedAmount;
    setCreditCards(updatedCards);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Borç</h3>

          <div>
            <div
              className="dropzone"
              onDrop={(event) => {
                const cardData = JSON.parse(
                  event.dataTransfer.getData("application/json")
                );
                handleDropDebt(event, cardData);
              }}
              onDragOver={(event) => event.preventDefault()}
            >
              <div className="overflow-auto">
                <table className="w-full border border-gray-300">
                  <thead>
                    <tr>
                      <th className="p-2 border-b-4 bg-gray-300">Hesap Adı</th>
                      <th className="p-2 border-b-4 bg-gray-300">Hesap Kodu</th>
                      <th className="p-2 border-b-4 bg-gray-300">Tutar</th>
                      <th className="p-2 border-b-4 bg-gray-300">
                        Genel İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {debtCards.map((card, index) => (
                      <tr key={index}>
                        <td className="p-2 border-b-4 border-gray-300">
                          {card.accountName}
                        </td>
                        <td className="p-2 border-b-4 border-gray-300">
                          {card.accountCode}
                        </td>
                        <td className="p-2 border-b-4 border-gray-300">
                          {editingDebtIndex === index ? (
                            <input
                              type="text"
                              className=" w-full border-2 border-gray-300 p-2 rounded-md"
                              value={card.amount}
                              onChange={(e) => {
                                const updatedAmount = Number(e.target.value);
                                handleUpdateDebt(index, updatedAmount);
                              }}
                            />
                          ) : (
                            <span>{card.amount}</span>
                          )}
                        </td>
                        <td className="p-2 border-b-4 border-gray-300">
                          {editingDebtIndex === index ? (
                            <button
                              className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
                              onClick={() => setEditingDebtIndex(null)}
                            >
                              Tamamla
                            </button>
                          ) : (
                            <div className="flex flex-col">
                              <button
                                className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 mx-4 my-2 px-2 rounded"
                                onClick={() => setEditingDebtIndex(index)}
                              >
                                Düzenle
                              </button>
                              <button
                                className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 mx-4 my-2 px-2 rounded"
                                onClick={() => handleRemoveDebt(index)}
                              >
                                Sil
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Alacak</h3>
          <div
            className="dropzone"
            onDrop={(event) => {
              const cardData = JSON.parse(
                event.dataTransfer.getData("application/json")
              );
              handleDropCredit(event, cardData);
            }}
            onDragOver={(event) => event.preventDefault()}
          >
            <div className="overflow-auto">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr>
                    <th className="p-2 border-b-4 bg-gray-300">Hesap Adı</th>
                    <th className="p-2 border-b-4 bg-gray-300">Hesap Kodu</th>
                    <th className="p-2 border-b-4 bg-gray-300">Tutar</th>
                    <th className="p-2 border-b-4 bg-gray-300">
                      Genel İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {creditCards.map((card, index) => (
                    <tr key={index}>
                      <td className="p-2 border-b-4 border-gray-300">
                        {card.accountName}
                      </td>
                      <td className="p-2 border-b-4 border-gray-300">
                        {card.accountCode}
                      </td>
                      <td className="p-2 border-b-4 border-gray-300">
                        {editingCreditIndex === index ? (
                          <input
                            type="text"
                            className=" border-2 border-gray-300 p-2 rounded-md"
                            value={card.amount}
                            onChange={(e) => {
                              const updatedAmount = Number(e.target.value);
                              handleUpdateCredit(index, updatedAmount);
                            }}
                          />
                        ) : (
                          <span>{card.amount}</span>
                        )}
                      </td>
                      <td className="p-2 border-b-4 border-gray-300">
                        {editingCreditIndex === index ? (
                          <button
                            className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
                            onClick={() => setEditingCreditIndex(null)}
                          >
                            Tamamla
                          </button>
                        ) : (
                          <div className="flex flex-col">
                            <button
                              className="bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 mx-4 my-2 px-2 rounded"
                              onClick={() => setEditingCreditIndex(index)}
                            >
                              Düzenle
                            </button>
                            <button
                              className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 mx-4 my-2 px-2 rounded"
                              onClick={() => handleRemoveCredit(index)}
                            >
                              Sil
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Borç Toplam:</h3>
          <span>{debtTotal}</span>
        </div>

        <div className="mt-4 ">
          <h3 className="text-lg font-bold mb-2">Alacak Toplam:</h3>
          <span>{creditTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
