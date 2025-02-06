import React from 'react'

interface CardProps {
nativenm: string;
  pronounce: string;
}

const Cardcore: React.FC<CardProps> = ({ nativenm,pronounce }) => {
  return (<>
    <div className="h-full border-2 rounded-xl border-b-4 hover:bg-black/5 hover:scale-110 p-4 lg:p-6 cursor-pointer active:border-b-2 ">
      
      <div className="flex justify-center text-3xl p-2">{nativenm}</div>
      <div className="flex justify-center">({pronounce})</div>
    </div>
    </>
  );
};

export default Cardcore