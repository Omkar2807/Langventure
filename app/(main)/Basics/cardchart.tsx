"use client";
import React, { useState } from "react";
import Card from "./card";
import Cardcore from "./cardcore";
import { basicsdb, basicsdbcore } from "@/db/schema";

interface VocabItem {
  img: string;
  name: string;
  titlename: string;
  audioSrc: string | null;
}

interface CoreItem {
  pronounce: string;
  nativenm: string;
  audioSrc: string;
  courseId: number; // Add courseId to the interface
}

type Props = {
  Basicvovabdata?: typeof basicsdb.$inferSelect[]; // This will be data from the database
  Basiccore?: typeof basicsdbcore.$inferSelect[];
};

export const List = ({ Basicvovabdata = [], Basiccore = [] }: Props) => {
  const [check, setcheck] = useState(true);

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
      audioSrc: item.audioSrc,
    });
  });

  // Filter the alphabet data for Japanese (courseId === 3)
  const japaneseData = Basiccore.filter((item) => item.courseId === 3);

  return (
    <>
      {/* Buttons here */}
      <div className="flex justify-left ml-3 p-1 bg-green-100 w-fit rounded-lg border shadow-md">
        <div
          className={`px-4 py-2 m-1 w-fit rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out
            ${
              !check
                ? "bg-green-600 text-white shadow-md scale-105"
                : "bg-white text-green-600 border border-green-400 hover:bg-green-300 hover:text-white"
            }`}
          onClick={() => setcheck(false)}
        >
          📖 Vocab
        </div>

        <div
          className={`px-4 py-2 m-1 w-fit rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out
            ${
              check
                ? "bg-green-600 text-white shadow-md scale-105"
                : "bg-white text-green-600 border border-green-400 hover:bg-green-300 hover:text-white"
            }`}
          onClick={() => setcheck(true)}
        >
          🔠 Alphabet
        </div>
      </div>

      {/* Vocabulary Section */}
      {!check && (
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
                    <Card key={index} img={item.img} name={item.name} title={item.titlename} soundSrc={item.audioSrc} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      {/* this is for alphabets and numbers */}
{check && Basiccore && (
  <>
  <div className="mt-10 text-xl">Aplhabet here</div>
  <div className="w-full bg-gray-500 h-0.5"></div>

  <div className="m-3 grid grid-cols-6 gap-4 flex-wrap">
    {Basiccore.map((item, index) => (
      <Cardcore key={index} pronounce={item.pronunciation} nativenm={item.nativenm}
      soundSrc={item.audioSrc} />
    ))}
  </div>
  </>
)}

      {/* Alphabet Section special for japanese */}
      {check && japaneseData.length > 0 && (
        <>
          <div className="mt-16 text-xl">Alphabet here</div>
          <div className="w-full bg-gray-500 h-0.5"></div>

          {/* Display Hiragana */}
          <div className="m-3">
            <h2 className="text-lg font-bold">Hiragana</h2>
            <div className="grid grid-cols-6 gap-4 flex-wrap">
              {japaneseData
                .filter((item) => item.nativenm.startsWith("H_"))
                .map((item, index) => (
                  <Cardcore
                    key={index}
                    pronounce={item.pronunciation}
                    nativenm={item.nativenm.slice(2)} 
                    soundSrc={item.audioSrc}
                  />
                ))}
            </div>
          </div>

          {/* Display Katakana */}
          <div className="m-3">
            <h2 className="text-lg font-bold">Katakana</h2>
            <div className="grid grid-cols-6 gap-4 flex-wrap">
              {japaneseData
                .filter((item) => item.nativenm.startsWith("K_"))
                .map((item, index) => (
                  <Cardcore
                    key={index}
                    pronounce={item.pronunciation}
                    nativenm={item.nativenm.slice(2)} // Remove the "K_" prefix
                    soundSrc={item.audioSrc}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default List;