import React from "react";

interface CardProps {
  img: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ img, name }) => {
  return (
    <div className="flex bg-yellow-600 border border-gray-500 justify-center align-middle flex-col h-32 min-w-24 py-3 rounded-md p-2 hover:animate-bounce ">
      <div className="flex justify-center">
        <img src={img} alt={name} className="h-12 w-12 object-cover" />
      </div>
      <div className="flex justify-center">{name}</div>
    </div>
  );
};

export default Card;
