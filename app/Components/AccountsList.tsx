import React from 'react';

interface CardProps {
  accountName: string;
  accountCode: string;
}

const Card: React.FC<CardProps> = ({ accountCode, accountName }) => {
  const containerStyle = {
    width: '200px', // Yazıların bulunacağı konteynırın genişliğini burada belirleyebilirsiniz
  };

  return (
    <div className="bg-teal-300 rounded-lg p-4 shadow-md flex items-start my-1 mx-2" style={containerStyle}>
      <p className="text-white mx-1">{accountCode}</p>
      <div className="text-white w-1 ml-2 mr-2 " />
      <p className="text-white">{accountName}</p>
    </div>
  );
};

export default Card;