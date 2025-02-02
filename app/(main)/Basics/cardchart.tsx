import React from "react";
import Card from "./card";
import { basicsdb } from "@/db/schema";

interface VocabItem {
  img: string;
  name: string;
  titlename: string;
}

type Props = {
  Basicvovabdata: typeof basicsdb.$inferSelect[]; // This will be data from the database
};

// Update List to handle incoming database data
export const List = ({ Basicvovabdata }: Props) => {
  console.log("Received data from database:", Basicvovabdata);

  // Group the vocabulary data based on the first letter of the name
  const groupedData: Record<string, VocabItem[]> = {};

  Basicvovabdata.forEach((item) => {
    const firstLetter = item.title[0].toUpperCase(); // Assume `title` is the word name
    if (!groupedData[firstLetter]) {
      groupedData[firstLetter] = [];
    }
    groupedData[firstLetter].push({
      img: item.imageSrc, 
      name: item.nativenm,
      titlename: item.title, 
    });
  });

  return (
    <> hello world
    <div className="m-3 flex flex-col gap-6 p-4">
      {Object.keys(groupedData)
        .sort()
        .map((letter) => (
          <div key={letter} className="flex flex-col gap-6 p-3">
            <h2 className="text-xl font-bold">
              <div>{letter}</div>
              <div className="w-full bg-gray-500 h-0.5"></div>
            </h2>
            <div className="flex gap-6 flex-wrap">
              {groupedData[letter].map((item, index) => (
                <Card key={index} img={item.img} name={item.name} title = {item.titlename}/>
              ))}
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default List;
