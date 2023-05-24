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

  const containerStyle = {
    width: '200px',
    backgroundColor: isDragging ? 'lightblue' : 'teal',
    borderRadius: '8px',
    padding: '12px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    margin: '4px',
    cursor: 'grab',
  };

  const textStyles = {
    color: 'white',
    marginLeft: '8px',
  };

  return (
    <div
      className="draggable-card"
      style={containerStyle}
      draggable={true}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p style={textStyles}>{accountCode}</p>
      <div className="divider" />
      <p style={textStyles}>{accountName}</p>
    </div>
  );
};

export default Card;
