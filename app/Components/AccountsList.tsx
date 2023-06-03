import React, { useState } from 'react';

interface CardProps {
  accountName: string;
  accountCode: string;
}

const Card: React.FC<CardProps> = ({ accountName, accountCode }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    const data = JSON.stringify({ accountName, accountCode });
    event.dataTransfer.setData('application/json', data);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };




  return (
    <div
      className="bg-teal-800 rounded-lg p-4 shadow-md flex items-start my-1 mx-2 w-48"
   
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p  className='text-white mx-1'>{accountCode}</p>
      <div className="divider text-white w-1 ml-2 mr-2" />
      <p className='text-white'>{accountName}</p>
    </div>
  );
};

export default Card;
