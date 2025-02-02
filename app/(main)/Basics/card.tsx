import React from "react";

interface CardProps {
  img: string;
  name: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ img, name,title }) => {
  return (
    <div className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2 ">
      <div className="flex justify-center">
        <img src={img} alt={name} className="h-40 w-32 object-contain" />
      </div>
      <div className="flex justify-center">{name}</div>
      <div className="flex justify-center">({title})</div>
    </div>
  );
};

export default Card;
