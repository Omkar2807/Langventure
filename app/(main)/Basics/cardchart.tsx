import React from "react";
import Card from "./card";

interface VocabItem {
  img: string;
  name: string;
}

// Example vocabulary data (replace with API data)
const vocabData: VocabItem[] = [
    { img: "https://example.com/apple.jpg", name: "Apple" },
    { img: "https://example.com/ant.jpg", name: "Ant" },
    { img: "https://example.com/arrow.jpg", name: "Arrow" },
    { img: "https://example.com/airplane.jpg", name: "Airplane" },
    { img: "https://example.com/alarm.jpg", name: "Alarm" },
    
  
    { img: "https://example.com/bike.jpg", name: "Bike" },
    { img: "https://example.com/banana.jpg", name: "Banana" },
    { img: "https://example.com/basket.jpg", name: "Basket" },
    { img: "https://example.com/bottle.jpg", name: "Bottle" },
    { img: "https://example.com/butterfly.jpg", name: "Butterfly" },
  
    { img: "https://example.com/car.jpg", name: "Car" },
    { img: "https://example.com/cat.jpg", name: "Cat" },
    { img: "https://example.com/camera.jpg", name: "Camera" },
    { img: "https://example.com/candle.jpg", name: "Candle" },
    { img: "https://example.com/crown.jpg", name: "Crown" },
  
    { img: "https://example.com/dog.jpg", name: "Dog" },
    { img: "https://example.com/door.jpg", name: "Door" },
    { img: "https://example.com/dragon.jpg", name: "Dragon" },
    { img: "https://example.com/dice.jpg", name: "Dice" },
    { img: "https://example.com/drum.jpg", name: "Drum" },
  
    { img: "https://example.com/elephant.jpg", name: "Elephant" },
    { img: "https://example.com/egg.jpg", name: "Egg" },
    { img: "https://example.com/engine.jpg", name: "Engine" },
    { img: "https://example.com/earphone.jpg", name: "Earphone" },
    { img: "https://example.com/envelope.jpg", name: "Envelope" },
  
    { img: "https://example.com/fish.jpg", name: "Fish" },
    { img: "https://example.com/flower.jpg", name: "Flower" },
    { img: "https://example.com/flag.jpg", name: "Flag" },
    { img: "https://example.com/fire.jpg", name: "Fire" },
    { img: "https://example.com/fan.jpg", name: "Fan" },
  
    { img: "https://example.com/guitar.jpg", name: "Guitar" },
    { img: "https://example.com/glass.jpg", name: "Glass" },
    { img: "https://example.com/grape.jpg", name: "Grape" },
    { img: "https://example.com/giraffe.jpg", name: "Giraffe" },
    { img: "https://example.com/gift.jpg", name: "Gift" },
  
    { img: "https://example.com/hat.jpg", name: "Hat" },
    { img: "https://example.com/horse.jpg", name: "Horse" },
    { img: "https://example.com/house.jpg", name: "House" },
    { img: "https://example.com/heart.jpg", name: "Heart" },
    { img: "https://example.com/helicopter.jpg", name: "Helicopter" },
  
    { img: "https://example.com/icecream.jpg", name: "Ice Cream" },
    { img: "https://example.com/iron.jpg", name: "Iron" },
    { img: "https://example.com/ink.jpg", name: "Ink" },
    { img: "https://example.com/iguana.jpg", name: "Iguana" },
    { img: "https://example.com/island.jpg", name: "Island" },
  
    { img: "https://example.com/jacket.jpg", name: "Jacket" },
    { img: "https://example.com/jellyfish.jpg", name: "Jellyfish" },
    { img: "https://example.com/jump.jpg", name: "Jump" },
    { img: "https://example.com/jar.jpg", name: "Jar" },
    { img: "https://example.com/joker.jpg", name: "Joker" },
  
    { img: "https://example.com/kite.jpg", name: "Kite" },
    { img: "https://example.com/kangaroo.jpg", name: "Kangaroo" },
    { img: "https://example.com/keyboard.jpg", name: "Keyboard" },
    { img: "https://example.com/key.jpg", name: "Key" },
    { img: "https://example.com/king.jpg", name: "King" },
  
    { img: "https://example.com/lion.jpg", name: "Lion" },
    { img: "https://example.com/ladder.jpg", name: "Ladder" },
    { img: "https://example.com/lamp.jpg", name: "Lamp" },
    { img: "https://example.com/leaf.jpg", name: "Leaf" },
    { img: "https://example.com/lollipop.jpg", name: "Lollipop" },
  
    { img: "https://example.com/monkey.jpg", name: "Monkey" },
    { img: "https://example.com/mirror.jpg", name: "Mirror" },
    { img: "https://example.com/mountain.jpg", name: "Mountain" },
    { img: "https://example.com/mango.jpg", name: "Mango" },
    { img: "https://example.com/map.jpg", name: "Map" },
  
    { img: "https://example.com/nest.jpg", name: "Nest" },
    { img: "https://example.com/nose.jpg", name: "Nose" },
    { img: "https://example.com/nail.jpg", name: "Nail" },
    { img: "https://example.com/needle.jpg", name: "Needle" },
    { img: "https://example.com/notebook.jpg", name: "Notebook" },
  
    { img: "https://example.com/orange.jpg", name: "Orange" },
    { img: "https://example.com/ostrich.jpg", name: "Ostrich" },
    { img: "https://example.com/oven.jpg", name: "Oven" },
    { img: "https://example.com/octopus.jpg", name: "Octopus" },
    { img: "https://example.com/onion.jpg", name: "Onion" },
  
    { img: "https://example.com/parrot.jpg", name: "Parrot" },
    { img: "https://example.com/pencil.jpg", name: "Pencil" },
    { img: "https://example.com/pineapple.jpg", name: "Pineapple" },
    { img: "https://example.com/pizza.jpg", name: "Pizza" },
    { img: "https://example.com/peacock.jpg", name: "Peacock" },
  
    { img: "https://example.com/queen.jpg", name: "Queen" },
    { img: "https://example.com/quilt.jpg", name: "Quilt" },
    { img: "https://example.com/quill.jpg", name: "Quill" },
    { img: "https://example.com/question.jpg", name: "Question" },
    { img: "https://example.com/quarter.jpg", name: "Quarter" },
  
    { img: "https://example.com/robot.jpg", name: "Robot" },
    { img: "https://example.com/rain.jpg", name: "Rain" },
    { img: "https://example.com/rose.jpg", name: "Rose" },
    { img: "https://example.com/river.jpg", name: "River" },
    { img: "https://example.com/rabbit.jpg", name: "Rabbit" },
  
    { img: "https://example.com/zebra.jpg", name: "Zebra" },
    { img: "https://example.com/zipper.jpg", name: "Zipper" },
    { img: "https://example.com/zoo.jpg", name: "Zoo" },
    { img: "https://example.com/zodiac.jpg", name: "Zodiac" },
    { img: "https://example.com/zeppelin.jpg", name: "Zeppelin" },
  ];
  
  

// Group vocabulary items by their first letter
const groupedData: Record<string, VocabItem[]> = {};

vocabData.forEach((item) => {
  const firstLetter = item.name[0].toUpperCase();
  if (!groupedData[firstLetter]) {
    groupedData[firstLetter] = [];
  }
  groupedData[firstLetter].push(item);
});

const CardChart: React.FC = () => {
  return (
    <div className="m-3  flex flex-col gap-6 p-4">
      {Object.keys(groupedData)
        .sort()
        .map((letter) => (
          <div key={letter} className="flex flex-col gap-6 p-3">
            <h2 className="text-xl font-bold"><div>{letter}</div>
             <div className="w-full bg-gray-500 h-0.5"></div>
             </h2>
            <div className="flex gap-6 flex-wrap">
              {groupedData[letter].map((item, index) => (
                <Card key={index} img={item.img} name={item.name} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardChart;
