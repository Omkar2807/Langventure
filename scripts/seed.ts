import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
//import {AlphabetSeed} from "@/scripts/seeddata/spanish"

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Seeding database');

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: 'Spanish',
        imageSrc: '/es.svg',
      },
      {
        id: 2,
        title: 'French',
        imageSrc: '/fr.svg',
      },
      {
        id: 3,
        title: 'Japanese',
        imageSrc: '/jp.svg',
      },
      {
        id: 4,
        title: 'Marathi',
        imageSrc: '/id_flg.png',
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: 'Spanish',
        description: 'Aprende lo básico de español',
        imageSrc: '/Units/span.jpg',
        order: 1,
      },
      {
        id: 2,
        courseId: 2,
        title: 'French',
        description: 'Maîtrisez les bases du français',
        imageSrc: '/Units/fren.jpg',
        order: 2,
      },
      {
        id: 3,
        courseId: 3,
        title: 'Japanese',
        description: '日本語の基礎を学びましょう',
        imageSrc: '/Units/japn.jpg',
        order: 3,
      },
      {
        id: 4,
        courseId: 4,
        title: 'Marathi',
        description: 'मराठीच्या मूलभूत गोष्टी शिकूया',
        imageSrc: '/Units/marat.jpg',
        order: 4,
      },
    ]);
    
    
    //Vocab
   
    const basicsData = [
      // A
      
          { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "Manzana", courseId: 1, audioSrc: "Basics/audio/spanish/word/Apple.mp3" },
          { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "Hormiga", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ant.mp3" },
          { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "Brazo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Arm.mp3" },
          { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "Avión", courseId: 1, audioSrc: "Basics/audio/spanish/word/Airplane.mp3" },
          { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "Flecha", courseId: 1, audioSrc: "Basics/audio/spanish/word/Arrow.mp3" },
          { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "Ancla", courseId: 1, audioSrc: "Basics/audio/spanish/word/Anchor.mp3" },
          { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "Caimán", courseId: 1, audioSrc: "Basics/audio/spanish/word/Alligator.mp3" },
          { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "Alarma", courseId: 1, audioSrc: "Basics/audio/spanish/word/Alarm.mp3" },
          { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "Actor", courseId: 1, audioSrc: "Basics/audio/spanish/word/Actor.mp3" },
          { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "Arte", courseId: 1, audioSrc: "Basics/audio/spanish/word/Art.mp3" },
      
          // B
          { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "Pelota", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ball.mp3" },
          { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "Oso", courseId: 1, audioSrc: "Basics/audio/spanish/word/Bear.mp3" },
          { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "Pájaro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Bird.mp3" },
          { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "Mariposa", courseId: 1, audioSrc: "Basics/audio/spanish/word/Butterfly.mp3" },
          { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "Plátano", courseId: 1, audioSrc: "Basics/audio/spanish/word/Banana.mp3" },
          { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "Barco", courseId: 1, audioSrc: "Basics/audio/spanish/word/Boat.mp3" },
          { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "Caja", courseId: 1, audioSrc: "Basics/audio/spanish/word/Box.mp3" },
          { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "Libro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Book.mp3" },
          { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "Banco", courseId: 1, audioSrc: "Basics/audio/spanish/word/Bench.mp3" },
          { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "Campana", courseId: 1, audioSrc: "Basics/audio/spanish/word/Bell.mp3" },
      
          // C
          { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "Gato", courseId: 1, audioSrc: "Basics/audio/spanish/word/Cat.mp3" },
          { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "Pastel", courseId: 1, audioSrc: "Basics/audio/spanish/word/Cake.mp3" },
          { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "Vela", courseId: 1, audioSrc: "Basics/audio/spanish/word/Candle.mp3" },
          { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "Vaca", courseId: 1, audioSrc: "Basics/audio/spanish/word/Cow.mp3" },
          { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "Coche", courseId: 1, audioSrc: "Basics/audio/spanish/word/Car.mp3" },
          { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "Moneda", courseId: 1, audioSrc: "Basics/audio/spanish/word/Coin.mp3" },
          { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "Corona", courseId: 1, audioSrc: "Basics/audio/spanish/word/Crown.mp3" },
          { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "Cacto", courseId: 1, audioSrc: "Basics/audio/spanish/word/Cactus.mp3" },
          { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "Reloj", courseId: 1, audioSrc: "Basics/audio/spanish/word/Clock.mp3" },
          { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "Nube", courseId: 1, audioSrc: "Basics/audio/spanish/word/Cloud.mp3" },
      
          // D
          { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "Perro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Dog.mp3" },
          { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "Pato", courseId: 1, audioSrc: "Basics/audio/spanish/word/Duck.mp3" },
          { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "Vestido", courseId: 1, audioSrc: "Basics/audio/spanish/word/Dress.mp3" },
          { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "Puerta", courseId: 1, audioSrc: "Basics/audio/spanish/word/Door.mp3" },
          { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "Diamante", courseId: 1, audioSrc: "Basics/audio/spanish/word/Diamond.mp3" },
          { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "Delfín", courseId: 1, audioSrc: "Basics/audio/spanish/word/Dolphin.mp3" },
          { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "Burro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Donkey.mp3" },
          { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "Dado", courseId: 1, audioSrc: "Basics/audio/spanish/word/Dice.mp3" },
          { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "Tambor", courseId: 1, audioSrc: "Basics/audio/spanish/word/Drum.mp3" },
          { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "Gota", courseId: 1, audioSrc: "Basics/audio/spanish/word/Drop.mp3" },
      
          // E
          { imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "Elefante", courseId: 1, audioSrc: "Basics/audio/spanish/word/Elephant.mp3" },
          { imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "Huevo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Egg.mp3" },
          { imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "Motor", courseId: 1, audioSrc: "Basics/audio/spanish/word/Engine.mp3" },
          { imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "Sobre", courseId: 1, audioSrc: "Basics/audio/spanish/word/Envelope.mp3" },
          { imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "Oreja", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ear.mp3" },
          { imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "Águila", courseId: 1, audioSrc: "Basics/audio/spanish/word/Eagle.mp3" },
          { imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "Tierra", courseId: 1, audioSrc: "Basics/audio/spanish/word/Earth.mp3" },
          { imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "Ojo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Eye.mp3" },
          { imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "Elfo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Elf.mp3" },
          { imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "Ascensor", courseId: 1, audioSrc: "Basics/audio/spanish/word/Elevator.mp3" },
      
          // F
          { imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "Pescado", courseId: 1, audioSrc: "Basics/audio/spanish/word/Fish.mp3" },
          { imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "Flor", courseId: 1, audioSrc: "Basics/audio/spanish/word/Flower.mp3" },
          { imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "Tenedor", courseId: 1, audioSrc: "Basics/audio/spanish/word/Fork.mp3" },
          { imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "Fuego", courseId: 1, audioSrc: "Basics/audio/spanish/word/Fire.mp3" },
          { imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "Zorro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Fox.mp3" },
          { imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "Valla", courseId: 1, audioSrc: "Basics/audio/spanish/word/Fence.mp3" },
      
          // G
          { imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "Guitarra", courseId: 1, audioSrc: "Basics/audio/spanish/word/Guitar.mp3" },
          { imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "Uvas", courseId: 1, audioSrc: "Basics/audio/spanish/word/Grapes.mp3" },
          { imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "Jirafa", courseId: 1, audioSrc: "Basics/audio/spanish/word/Giraffe.mp3" },
          { imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "Cabra", courseId: 1, audioSrc: "Basics/audio/spanish/word/Goat.mp3" },
          { imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "Guante", courseId: 1, audioSrc: "Basics/audio/spanish/word/Glove.mp3" },
          { imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "Jardín", courseId: 1, audioSrc: "Basics/audio/spanish/word/Garden.mp3" },
      
          // H
          { imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "Sombrero", courseId: 1, audioSrc: "Basics/audio/spanish/word/Hat.mp3" },
          { imageSrc: "/Basics/House.png", title: "House", nativenm: "Casa", courseId: 1, audioSrc: "Basics/audio/spanish/word/House.mp3" },
          { imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "Caballo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Horse.mp3" },
          { imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "Martillo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Hammer.mp3" },
          { imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "Mano", courseId: 1, audioSrc: "Basics/audio/spanish/word/Hand.mp3" },
          { imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "Corazón", courseId: 1, audioSrc: "Basics/audio/spanish/word/Heart.mp3" },
      
          // I
          { imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "Hielo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ice.mp3" },
          { imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "Hierro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Iron.mp3" },
          { imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "Iguana", courseId: 1, audioSrc: "Basics/audio/spanish/word/Iguana.mp3" },
          { imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "Insecto", courseId: 1, audioSrc: "Basics/audio/spanish/word/Insect.mp3" },
          { imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "Tinta", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ink.mp3" },
          { imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "Helado", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ice Cream.mp3" },
      
          // J
          { imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "Chaqueta", courseId: 1, audioSrc: "Basics/audio/spanish/word/Jacket.mp3" },
          { imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "Selva", courseId: 1, audioSrc: "Basics/audio/spanish/word/Jungle.mp3" },
          { imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "Saltar", courseId: 1, audioSrc: "Basics/audio/spanish/word/Jump.mp3" },
          { imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "Tarro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Jar.mp3" },
          { imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "Medusa", courseId: 1, audioSrc: "Basics/audio/spanish/word/Jellyfish.mp3" },
      
          // K
          { imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "Kiwi", courseId: 1, audioSrc: "Basics/audio/spanish/word/Kiwi.mp3" },
          { imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "Canguro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Kangaroo.mp3" },
          { imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "Tetera", courseId: 1, audioSrc: "Basics/audio/spanish/word/Kettle.mp3" },
          { imageSrc: "/Basics/Key.png", title: "Key", nativenm: "Llave", courseId: 1, audioSrc: "Basics/audio/spanish/word/Key.mp3" },
          { imageSrc: "/Basics/King.png", title: "King", nativenm: "Rey", courseId: 1, audioSrc: "Basics/audio/spanish/word/King.mp3" },
      
          // L
          { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "León", courseId: 1, audioSrc: "Basics/audio/spanish/word/Lion.mp3" },
          { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "Lámpara", courseId: 1, audioSrc: "Basics/audio/spanish/word/Lamp.mp3" },
          { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "Limón", courseId: 1, audioSrc: "Basics/audio/spanish/word/Lemon.mp3" },
          { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "Escalera", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ladder.mp3" },
          { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "Hoja", courseId: 1, audioSrc: "Basics/audio/spanish/word/Leaf.mp3" },
      
          // M
          { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "Rata", courseId: 1, audioSrc: "Basics/audio/spanish/word/Mouse.mp3" },
          { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "Mono", courseId: 1, audioSrc: "Basics/audio/spanish/word/Monkey.mp3" },
          { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "Montaña", courseId: 1, audioSrc: "Basics/audio/spanish/word/Mountain.mp3" },
          { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "Leche", courseId: 1, audioSrc: "Basics/audio/spanish/word/Milk.mp3" },
          { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "Espejo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Mirror.mp3" },
      
          // N
          { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "Red", courseId: 1, audioSrc: "Basics/audio/spanish/word/Net.mp3" },
          { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nariz", courseId: 1, audioSrc: "Basics/audio/spanish/word/Nose.mp3" },
          { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "Noche", courseId: 1, audioSrc: "Basics/audio/spanish/word/Night.mp3" },
          { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "Nuez", courseId: 1, audioSrc: "Basics/audio/spanish/word/Nut.mp3" },
      
          // O
          { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "Ostrero", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ostrich.mp3" },
          { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "Pulpo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Octopus.mp3" },
          { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "Búho", courseId: 1, audioSrc: "Basics/audio/spanish/word/Owl.mp3" },
          { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "Aceituna", courseId: 1, audioSrc: "Basics/audio/spanish/word/Olive.mp3" },
          { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "Oxígeno", courseId: 1, audioSrc: "Basics/audio/spanish/word/Oxygen.mp3" },
      
          // P
          { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "Pluma", courseId: 1, audioSrc: "Basics/audio/spanish/word/Pen.mp3" },
          { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "Piña", courseId: 1, audioSrc: "Basics/audio/spanish/word/Pineapple.mp3" },
          { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "Panda", courseId: 1, audioSrc: "Basics/audio/spanish/word/Panda.mp3" },
          { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "Lápiz", courseId: 1, audioSrc: "Basics/audio/spanish/word/Pencil.mp3" },
          { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "Avión", courseId: 1, audioSrc: "Basics/audio/spanish/word/Plane.mp3" },
      
          // Q
          { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "Colcha", courseId: 1, audioSrc: "Basics/audio/spanish/word/Quilt.mp3" },
          { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "Reina", courseId: 1, audioSrc: "Basics/audio/spanish/word/Queen.mp3" },
      
          // R
          { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "Conejo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Rabbit.mp3" },
          { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "Lluvia", courseId: 1, audioSrc: "Basics/audio/spanish/word/Rain.mp3" },
          { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "Anillo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Ring.mp3" },
          { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "Rosa", courseId: 1, audioSrc: "Basics/audio/spanish/word/Rose.mp3" },
          { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "Robot", courseId: 1, audioSrc: "Basics/audio/spanish/word/Robot.mp3" },
      
          // S
          { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "Sol", courseId: 1, audioSrc: "Basics/audio/spanish/word/Sun.mp3" },
          { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "Serpiente", courseId: 1, audioSrc: "Basics/audio/spanish/word/Snake.mp3" },
          { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "Estrella", courseId: 1, audioSrc: "Basics/audio/spanish/word/Star.mp3" },
          { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "Calcetines", courseId: 1, audioSrc: "Basics/audio/spanish/word/Socks.mp3" },
          { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "Arena", courseId: 1, audioSrc: "Basics/audio/spanish/word/Sand.mp3" },
      
          // T
          { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "Tigre", courseId: 1, audioSrc: "Basics/audio/spanish/word/Tiger.mp3" },
          { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "Árbol", courseId: 1, audioSrc: "Basics/audio/spanish/word/Tree.mp3" },
          { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "Mesa", courseId: 1, audioSrc: "Basics/audio/spanish/word/Table.mp3" },
          { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "Televisión", courseId: 1, audioSrc: "Basics/audio/spanish/word/Television.mp3" },
          { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "Diente", courseId: 1, audioSrc: "Basics/audio/spanish/word/Tooth.mp3" },
      
          // U
          { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "Paraguas", courseId: 1, audioSrc: "Basics/audio/spanish/word/Umbrella.mp3" },
          { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "Urna", courseId: 1, audioSrc: "Basics/audio/spanish/word/Urn.mp3" },
          { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "Tío", courseId: 1, audioSrc: "Basics/audio/spanish/word/Uncle.mp3" },
          { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "Unicornio", courseId: 1, audioSrc: "Basics/audio/spanish/word/Unicorn.mp3" },
          { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "Universo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Universe.mp3" },
          { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "Utensilio", courseId: 1, audioSrc: "Basics/audio/spanish/word/Utensil.mp3" },
      
          // V
          { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "Furgoneta", courseId: 1, audioSrc: "Basics/audio/spanish/word/Van.mp3" },
          { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "Buitre", courseId: 1, audioSrc: "Basics/audio/spanish/word/Vulture.mp3" },
          { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "Aspiradora", courseId: 1, audioSrc: "Basics/audio/spanish/word/Vacuum.mp3" },
          { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "Víctima", courseId: 1, audioSrc: "Basics/audio/spanish/word/Victim.mp3" },
          { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "Verdura", courseId: 1, audioSrc: "Basics/audio/spanish/word/Vegetable.mp3" },
          { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "Volcán", courseId: 1, audioSrc: "Basics/audio/spanish/word/Volcano.mp3" },
          { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "Vacaciones", courseId: 1, audioSrc: "Basics/audio/spanish/word/Vacation.mp3" },
          { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "Vampiro", courseId: 1, audioSrc: "Basics/audio/spanish/word/Vampire.mp3" },
      
          // W
          { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "Lobo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Wolf.mp3" },
          { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "Sandía", courseId: 1, audioSrc: "Basics/audio/spanish/word/Watermelon.mp3" },
          { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "Ventana", courseId: 1, audioSrc: "Basics/audio/spanish/word/Window.mp3" },
          { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "Vagón", courseId: 1, audioSrc: "Basics/audio/spanish/word/Wagon.mp3" },
          { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "Cascada", courseId: 1, audioSrc: "Basics/audio/spanish/word/Waterfall.mp3" },
          { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "Reloj", courseId: 1, audioSrc: "Basics/audio/spanish/word/Watch.mp3" },
          { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "Ballena", courseId: 1, audioSrc: "Basics/audio/spanish/word/Whale.mp3" },
          { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "Invierno", courseId: 1, audioSrc: "Basics/audio/spanish/word/Winter.mp3" },
          { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "Muñeca", courseId: 1, audioSrc: "Basics/audio/spanish/word/Wrist.mp3" },
          { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "Silbato", courseId: 1, audioSrc: "Basics/audio/spanish/word/Whistle.mp3" },
      
          // X
          { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "Xilófono", courseId: 1, audioSrc: "Basics/audio/spanish/word/Xylophone.mp3" },
          { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "Radiografía", courseId: 1, audioSrc: "Basics/audio/spanish/word/X-ray.mp3" },
          { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "Xenón", courseId: 1, audioSrc: "Basics/audio/spanish/word/Xenon.mp3" },
          { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "Navidad", courseId: 1, audioSrc: "Basics/audio/spanish/word/Xmas.mp3" },
          { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "Xenofobia", courseId: 1, audioSrc: "Basics/audio/spanish/word/Xenophobia.mp3" },
          { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "Xenial", courseId: 1, audioSrc: "Basics/audio/spanish/word/Xenial.mp3" },
          { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "Xeón", courseId: 1, audioSrc: "Basics/audio/spanish/word/Xeon.mp3" },
          { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "Examinar", courseId: 1, audioSrc: "Basics/audio/spanish/word/Examine.mp3" },
          { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "Explotar", courseId: 1, audioSrc: "Basics/audio/spanish/word/Explode.mp3" },
          { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "Exilio", courseId: 1, audioSrc: "Basics/audio/spanish/word/Exile.mp3" },
      
          // Y
          { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "Yak", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yak.mp3" },
          { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "Amarillo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yellow.mp3" },
          { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "Yogur", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yogurt.mp3" },
          { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "Hilo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yarn.mp3" },
          { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "Yoga", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yoga.mp3" },
          { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "Bostezo", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yawn.mp3" },
          { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "Jardín", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yard.mp3" },
          { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "Gritar", courseId: 1, audioSrc: "Basics/audio/spanish/word/Yell.mp3" },
      
          // Z
          { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "Cebra", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zebra.mp3" },
          { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "Zoológico", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zoo.mp3" },
          { imageSrc: "/Basics/Zenith.png", title: "Zenith", nativenm: "Cenit", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zenith.mp3" },
          { imageSrc: "/Basics/Zero.png", title: "Zero", nativenm: "Cero", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zero.mp3" },
          { imageSrc: "/Basics/Zigzag.png", title: "Zigzag", nativenm: "Zigzag", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zigzag.mp3" },
          { imageSrc: "/Basics/Zeppelin.png", title: "Zeppelin", nativenm: "Zeppelin", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zeppelin.mp3" },
          { imageSrc: "/Basics/Zombie.png", title: "Zombie", nativenm: "Zombi", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zombie.mp3" },
          { imageSrc: "/Basics/Zone.png", title: "Zone", nativenm: "Zona", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zone.mp3" },
          { imageSrc: "/Basics/Zodiac.png", title: "Zodiac", nativenm: "Zodiaco", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zodiac.mp3" },
          { imageSrc: "/Basics/Zoom.png", title: "Zoom", nativenm: "Zoom", courseId: 1, audioSrc: "Basics/audio/spanish/word/Zoom.mp3" },


  //french dataset
  
      // A
      
          { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "Pomme", courseId: 2, audioSrc: "/Basics/audio/french/word/Apple.mp3" },
          { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "Fourmi", courseId: 2, audioSrc: "/Basics/audio/french/word/Ant.mp3" },
          { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "Bras", courseId: 2, audioSrc: "/Basics/audio/french/word/Arm.mp3" },
          { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "Avion", courseId: 2, audioSrc: "/Basics/audio/french/word/Airplane.mp3" },
          { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "Flèche", courseId: 2, audioSrc: "/Basics/audio/french/word/Arrow.mp3" },
          { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "Ancre", courseId: 2, audioSrc: "/Basics/audio/french/word/Anchor.mp3" },
          { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "Alligator", courseId: 2, audioSrc: "/Basics/audio/french/word/Alligator.mp3" },
          { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "Alarme", courseId: 2, audioSrc: "/Basics/audio/french/word/Alarm.mp3" },
          { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "Acteur", courseId: 2, audioSrc: "/Basics/audio/french/word/Actor.mp3" },
          { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "Art", courseId: 2, audioSrc: "/Basics/audio/french/word/Art.mp3" },
      
          // B
          { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "Balle", courseId: 2, audioSrc: "/Basics/audio/french/word/Ball.mp3" },
          { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "Ours", courseId: 2, audioSrc: "/Basics/audio/french/word/Bear.mp3" },
          { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "Oiseau", courseId: 2, audioSrc: "/Basics/audio/french/word/Bird.mp3" },
          { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "Papillon", courseId: 2, audioSrc: "/Basics/audio/french/word/Butterfly.mp3" },
          { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "Banane", courseId: 2, audioSrc: "/Basics/audio/french/word/Banana.mp3" },
          { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "Bateau", courseId: 2, audioSrc: "/Basics/audio/french/word/Boat.mp3" },
          { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "Boîte", courseId: 2, audioSrc: "/Basics/audio/french/word/Box.mp3" },
          { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "Livre", courseId: 2, audioSrc: "/Basics/audio/french/word/Book.mp3" },
          { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "Banc", courseId: 2, audioSrc: "/Basics/audio/french/word/Bench.mp3" },
          { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "Cloche", courseId: 2, audioSrc: "/Basics/audio/french/word/Bell.mp3" },
      
          // C
          { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "Chat", courseId: 2, audioSrc: "/Basics/audio/french/word/Cat.mp3" },
          { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "Gâteau", courseId: 2, audioSrc: "/Basics/audio/french/word/Cake.mp3" },
          { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "Bougie", courseId: 2, audioSrc: "/Basics/audio/french/word/Candle.mp3" },
          { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "Vache", courseId: 2, audioSrc: "/Basics/audio/french/word/Cow.mp3" },
          { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "Voiture", courseId: 2, audioSrc: "/Basics/audio/french/word/Car.mp3" },
          { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "Pièce", courseId: 2, audioSrc: "/Basics/audio/french/word/Coin.mp3" },
          { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "Couronne", courseId: 2, audioSrc: "/Basics/audio/french/word/Crown.mp3" },
          { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "Cactus", courseId: 2, audioSrc: "/Basics/audio/french/word/Cactus.mp3" },
          { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "Horloge", courseId: 2, audioSrc: "/Basics/audio/french/word/Clock.mp3" },
          { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "Nuage", courseId: 2, audioSrc: "/Basics/audio/french/word/Cloud.mp3" },
      
          // D
          { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "Chien", courseId: 2, audioSrc: "/Basics/audio/french/word/Dog.mp3" },
          { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "Canard", courseId: 2, audioSrc: "/Basics/audio/french/word/Duck.mp3" },
          { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "Robe", courseId: 2, audioSrc: "/Basics/audio/french/word/Dress.mp3" },
          { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "Porte", courseId: 2, audioSrc: "/Basics/audio/french/word/Door.mp3" },
          { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "Diamant", courseId: 2, audioSrc: "/Basics/audio/french/word/Diamond.mp3" },
          { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "Dauphin", courseId: 2, audioSrc: "/Basics/audio/french/word/Dolphin.mp3" },
          { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "Âne", courseId: 2, audioSrc: "/Basics/audio/french/word/Donkey.mp3" },
          { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "Dé", courseId: 2, audioSrc: "/Basics/audio/french/word/Dice.mp3" },
          { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "Tambour", courseId: 2, audioSrc: "/Basics/audio/french/word/Drum.mp3" },
          { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "Goutte", courseId: 2, audioSrc: "/Basics/audio/french/word/Drop.mp3" },
      
          // E
          { imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "Éléphant", courseId: 2, audioSrc: "/Basics/audio/french/word/Elephant.mp3" },
          { imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "Œuf", courseId: 2, audioSrc: "/Basics/audio/french/word/Egg.mp3" },
          { imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "Moteur", courseId: 2, audioSrc: "/Basics/audio/french/word/Engine.mp3" },
          { imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "Enveloppe", courseId: 2, audioSrc: "/Basics/audio/french/word/Envelope.mp3" },
          { imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "Oreille", courseId: 2, audioSrc: "/Basics/audio/french/word/Ear.mp3" },
          { imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "Aigle", courseId: 2, audioSrc: "/Basics/audio/french/word/Eagle.mp3" },
          { imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "Terre", courseId: 2, audioSrc: "/Basics/audio/french/word/Earth.mp3" },
          { imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "Œil", courseId: 2, audioSrc: "/Basics/audio/french/word/Eye.mp3" },
          { imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "Elfe", courseId: 2, audioSrc: "/Basics/audio/french/word/Elf.mp3" },
          { imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "Ascenseur", courseId: 2, audioSrc: "/Basics/audio/french/word/Elevator.mp3" },
      
          // F
          { imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "Poisson", courseId: 2, audioSrc: "/Basics/audio/french/word/Fish.mp3" },
          { imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "Fleur", courseId: 2, audioSrc: "/Basics/audio/french/word/Flower.mp3" },
          { imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "Fourchette", courseId: 2, audioSrc: "/Basics/audio/french/word/Fork.mp3" },
          { imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "Feu", courseId: 2, audioSrc: "/Basics/audio/french/word/Fire.mp3" },
          { imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "Renard", courseId: 2, audioSrc: "/Basics/audio/french/word/Fox.mp3" },
          { imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "Clôture", courseId: 2, audioSrc: "/Basics/audio/french/word/Fence.mp3" },
          { imageSrc: "/Basics/Fan.png", title: "Fan", nativenm: "Ventilateur", courseId: 2, audioSrc: "/Basics/audio/french/word/Fan.mp3" },
          { imageSrc: "/Basics/Feather.png", title: "Feather", nativenm: "Plume", courseId: 2, audioSrc: "/Basics/audio/french/word/Feather.mp3" },
          { imageSrc: "/Basics/Fruit.png", title: "Fruit", nativenm: "Fruit", courseId: 2, audioSrc: "/Basics/audio/french/word/Fruit.mp3" },
          { imageSrc: "/Basics/Flag.png", title: "Flag", nativenm: "Drapeau", courseId: 2, audioSrc: "/Basics/audio/french/word/Flag.mp3" },
      
          // G
          { imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "Guitare", courseId: 2, audioSrc: "/Basics/audio/french/word/Guitar.mp3" },
          { imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "Raisins", courseId: 2, audioSrc: "/Basics/audio/french/word/Grapes.mp3" },
          { imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "Girafe", courseId: 2, audioSrc: "/Basics/audio/french/word/Giraffe.mp3" },
          { imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "Chèvre", courseId: 2, audioSrc: "/Basics/audio/french/word/Goat.mp3" },
          { imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "Gant", courseId: 2, audioSrc: "/Basics/audio/french/word/Glove.mp3" },
          { imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "Jardin", courseId: 2, audioSrc: "/Basics/audio/french/word/Garden.mp3" },
          { imageSrc: "/Basics/Gate.png", title: "Gate", nativenm: "Portail", courseId: 2, audioSrc: "/Basics/audio/french/word/Gate.mp3" },
          { imageSrc: "/Basics/Ghost.png", title: "Ghost", nativenm: "Fantôme", courseId: 2, audioSrc: "/Basics/audio/french/word/Ghost.mp3" },
          { imageSrc: "/Basics/Gold.png", title: "Gold", nativenm: "Or", courseId: 2, audioSrc: "/Basics/audio/french/word/Gold.mp3" },
          { imageSrc: "/Basics/Glass.png", title: "Glass", nativenm: "Verre", courseId: 2, audioSrc: "/Basics/audio/french/word/Glass.mp3" },
      
          // H
          { imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "Chapeau", courseId: 2, audioSrc: "/Basics/audio/french/word/Hat.mp3" },
          { imageSrc: "/Basics/House.png", title: "House", nativenm: "Maison", courseId: 2, audioSrc: "/Basics/audio/french/word/House.mp3" },
          { imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "Cheval", courseId: 2, audioSrc: "/Basics/audio/french/word/Horse.mp3" },
          { imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "Marteau", courseId: 2, audioSrc: "/Basics/audio/french/word/Hammer.mp3" },
          { imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "Main", courseId: 2, audioSrc: "/Basics/audio/french/word/Hand.mp3" },
          { imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "Cœur", courseId: 2, audioSrc: "/Basics/audio/french/word/Heart.mp3" },
          { imageSrc: "/Basics/Hill.png", title: "Hill", nativenm: "Colline", courseId: 2, audioSrc: "/Basics/audio/french/word/Hill.mp3" },
          { imageSrc: "/Basics/Honey.png", title: "Honey", nativenm: "Miel", courseId: 2, audioSrc: "/Basics/audio/french/word/Honey.mp3" },
          { imageSrc: "/Basics/Hook.png", title: "Hook", nativenm: "Crochet", courseId: 2, audioSrc: "/Basics/audio/french/word/Hook.mp3" },
          { imageSrc: "/Basics/Helmet.png", title: "Helmet", nativenm: "Casque", courseId: 2, audioSrc: "/Basics/audio/french/word/Helmet.mp3" },
      
          // I
          { imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "Glace", courseId: 2, audioSrc: "/Basics/audio/french/word/Ice.mp3" },
          { imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "Fer", courseId: 2, audioSrc: "/Basics/audio/french/word/Iron.mp3" },
          { imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "Iguane", courseId: 2, audioSrc: "/Basics/audio/french/word/Iguana.mp3" },
          { imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "Insecte", courseId: 2, audioSrc: "/Basics/audio/french/word/Insect.mp3" },
          { imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "Encre", courseId: 2, audioSrc: "/Basics/audio/french/word/Ink.mp3" },
          { imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "Glace", courseId: 2, audioSrc: "/Basics/audio/french/word/Ice Cream.mp3" },
          { imageSrc: "/Basics/Island.png", title: "Island", nativenm: "Île", courseId: 2, audioSrc: "/Basics/audio/french/word/Island.mp3" },
          { imageSrc: "/Basics/Idea.png", title: "Idea", nativenm: "Idée", courseId: 2, audioSrc: "/Basics/audio/french/word/Idea.mp3" },
          { imageSrc: "/Basics/Ivory.png", title: "Ivory", nativenm: "Ivoire", courseId: 2, audioSrc: "/Basics/audio/french/word/Ivory.mp3" },
          { imageSrc: "/Basics/Injection.png", title: "Injection", nativenm: "Injection", courseId: 2, audioSrc: "/Basics/audio/french/word/Injection.mp3" },
      
          // J
          { imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "Veste", courseId: 2, audioSrc: "/Basics/audio/french/word/Jacket.mp3" },
          { imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "Jungle", courseId: 2, audioSrc: "/Basics/audio/french/word/Jungle.mp3" },
          { imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "Sauter", courseId: 2, audioSrc: "/Basics/audio/french/word/Jump.mp3" },
          { imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "Bocal", courseId: 2, audioSrc: "/Basics/audio/french/word/Jar.mp3" },
          { imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "Méduse", courseId: 2, audioSrc: "/Basics/audio/french/word/Jellyfish.mp3" },
          { imageSrc: "/Basics/Jewel.png", title: "Jewel", nativenm: "Bijou", courseId: 2, audioSrc: "/Basics/audio/french/word/Jewel.mp3" },
          { imageSrc: "/Basics/Jet.png", title: "Jet", nativenm: "Jet", courseId: 2, audioSrc: "/Basics/audio/french/word/Jet.mp3" },
          { imageSrc: "/Basics/Joke.png", title: "Joke", nativenm: "Blague", courseId: 2, audioSrc: "/Basics/audio/french/word/Joke.mp3" },
          { imageSrc: "/Basics/Journal.png", title: "Journal", nativenm: "Journal", courseId: 2, audioSrc: "/Basics/audio/french/word/Journal.mp3" },
          { imageSrc: "/Basics/Jug.png", title: "Jug", nativenm: "Cruche", courseId: 2, audioSrc: "/Basics/audio/french/word/Jug.mp3" },
      
          // K
          { imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "Kiwi", courseId: 2, audioSrc: "/Basics/audio/french/word/Kiwi.mp3" },
          { imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "Kangourou", courseId: 2, audioSrc: "/Basics/audio/french/word/Kangaroo.mp3" },
          { imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "Bouilloire", courseId: 2, audioSrc: "/Basics/audio/french/word/Kettle.mp3" },
          { imageSrc: "/Basics/Key.png", title: "Key", nativenm: "Clé", courseId: 2, audioSrc: "/Basics/audio/french/word/Key.mp3" },
          { imageSrc: "/Basics/King.png", title: "King", nativenm: "Roi", courseId: 2, audioSrc: "/Basics/audio/french/word/King.mp3" },
          { imageSrc: "/Basics/Kite.png", title: "Kite", nativenm: "Cerf-volant", courseId: 2, audioSrc: "/Basics/audio/french/word/Kite.mp3" },
          { imageSrc: "/Basics/Knife.png", title: "Knife", nativenm: "Couteau", courseId: 2, audioSrc: "/Basics/audio/french/word/Knife.mp3" },
          { imageSrc: "/Basics/Knight.png", title: "Knight", nativenm: "Chevalier", courseId: 2, audioSrc: "/Basics/audio/french/word/Knight.mp3" },
          { imageSrc: "/Basics/Knob.png", title: "Knob", nativenm: "Bouton", courseId: 2, audioSrc: "/Basics/audio/french/word/Knob.mp3" },
          { imageSrc: "/Basics/Koala.png", title: "Koala", nativenm: "Koala", courseId: 2, audioSrc: "/Basics/audio/french/word/Koala.mp3" },
      
          // L
          { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "Lion", courseId: 2, audioSrc: "/Basics/audio/french/word/Lion.mp3" },
          { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "Lampe", courseId: 2, audioSrc: "/Basics/audio/french/word/Lamp.mp3" },
          { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "Citron", courseId: 2, audioSrc: "/Basics/audio/french/word/Lemon.mp3" },
          { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "Échelle", courseId: 2, audioSrc: "/Basics/audio/french/word/Ladder.mp3" },
          { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "Feuille", courseId: 2, audioSrc: "/Basics/audio/french/word/Leaf.mp3" },
          { imageSrc: "/Basics/Light.png", title: "Light", nativenm: "Lumière", courseId: 2, audioSrc: "/Basics/audio/french/word/Light.mp3" },
          { imageSrc: "/Basics/Lake.png", title: "Lake", nativenm: "Lac", courseId: 2, audioSrc: "/Basics/audio/french/word/Lake.mp3" },
          { imageSrc: "/Basics/Lock.png", title: "Lock", nativenm: "Serrure", courseId: 2, audioSrc: "/Basics/audio/french/word/Lock.mp3" },
          { imageSrc: "/Basics/Lizard.png", title: "Lizard", nativenm: "Lézard", courseId: 2, audioSrc: "/Basics/audio/french/word/Lizard.mp3" },
          { imageSrc: "/Basics/Lollipop.png", title: "Lollipop", nativenm: "Sucette", courseId: 2, audioSrc: "/Basics/audio/french/word/Lollipop.mp3" },
      
          // M
          { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "Souris", courseId: 2, audioSrc: "/Basics/audio/french/word/Mouse.mp3" },
          { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "Singe", courseId: 2, audioSrc: "/Basics/audio/french/word/Monkey.mp3" },
          { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "Montagne", courseId: 2, audioSrc: "/Basics/audio/french/word/Mountain.mp3" },
          { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "Lait", courseId: 2, audioSrc: "/Basics/audio/french/word/Milk.mp3" },
          { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "Miroir", courseId: 2, audioSrc: "/Basics/audio/french/word/Mirror.mp3" },
          { imageSrc: "/Basics/Moon.png", title: "Moon", nativenm: "Lune", courseId: 2, audioSrc: "/Basics/audio/french/word/Moon.mp3" },
          { imageSrc: "/Basics/Mushroom.png", title: "Mushroom", nativenm: "Champignon", courseId: 2, audioSrc: "/Basics/audio/french/word/Mushroom.mp3" },
          { imageSrc: "/Basics/Magnet.png", title: "Magnet", nativenm: "Aimant", courseId: 2, audioSrc: "/Basics/audio/french/word/Magnet.mp3" },
          { imageSrc: "/Basics/Mask.png", title: "Mask", nativenm: "Masque", courseId: 2, audioSrc: "/Basics/audio/french/word/Mask.mp3" },
          { imageSrc: "/Basics/Map.png", title: "Map", nativenm: "Carte", courseId: 2, audioSrc: "/Basics/audio/french/word/Map.mp3" },
      
          // N
          { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "Filet", courseId: 2, audioSrc: "/Basics/audio/french/word/Net.mp3" },
          { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nez", courseId: 2, audioSrc: "/Basics/audio/french/word/Nose.mp3" },
          { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "Nuit", courseId: 2, audioSrc: "/Basics/audio/french/word/Night.mp3" },
          { imageSrc: "/Basics/Nest.png", title: "Nest", nativenm: "Nid", courseId: 2, audioSrc: "/Basics/audio/french/word/Nest.mp3" },
          { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "Noix", courseId: 2, audioSrc: "/Basics/audio/french/word/Nut.mp3" },
          { imageSrc: "/Basics/Needle.png", title: "Needle", nativenm: "Aiguille", courseId: 2, audioSrc: "/Basics/audio/french/word/Needle.mp3" },
          { imageSrc: "/Basics/Napkin.png", title: "Napkin", nativenm: "Serviette", courseId: 2, audioSrc: "/Basics/audio/french/word/Napkin.mp3" },
          { imageSrc: "/Basics/Nail.png", title: "Nail", nativenm: "Clou", courseId: 2, audioSrc: "/Basics/audio/french/word/Nail.mp3" },
          { imageSrc: "/Basics/Necklace.png", title: "Necklace", nativenm: "Collier", courseId: 2, audioSrc: "/Basics/audio/french/word/Necklace.mp3" },
          { imageSrc: "/Basics/Notebook.png", title: "Notebook", nativenm: "Carnet", courseId: 2, audioSrc: "/Basics/audio/french/word/Notebook.mp3" },
      
          // O
          { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "Autruche", courseId: 2, audioSrc: "/Basics/audio/french/word/Ostrich.mp3" },
          { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "Poulpe", courseId: 2, audioSrc: "/Basics/audio/french/word/Octopus.mp3" },
          { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "Hibou", courseId: 2, audioSrc: "/Basics/audio/french/word/Owl.mp3" },
          { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "Olive", courseId: 2, audioSrc: "/Basics/audio/french/word/Olive.mp3" },
          { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "Oxygène", courseId: 2, audioSrc: "/Basics/audio/french/word/Oxygen.mp3" },
          { imageSrc: "/Basics/Orange.png", title: "Orange", nativenm: "Orange", courseId: 2, audioSrc: "/Basics/audio/french/word/Orange.mp3" },
          { imageSrc: "/Basics/Onion.png", title: "Onion", nativenm: "Oignon", courseId: 2, audioSrc: "/Basics/audio/french/word/Onion.mp3" },
          { imageSrc: "/Basics/Ocean.png", title: "Ocean", nativenm: "Océan", courseId: 2, audioSrc: "/Basics/audio/french/word/Ocean.mp3" },
          { imageSrc: "/Basics/Oil.png", title: "Oil", nativenm: "Huile", courseId: 2, audioSrc: "/Basics/audio/french/word/Oil.mp3" },
          { imageSrc: "/Basics/Ornament.png", title: "Ornament", nativenm: "Ornement", courseId: 2, audioSrc: "/Basics/audio/french/word/Ornament.mp3" },
      
          // P
          { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "Stylo", courseId: 2, audioSrc: "/Basics/audio/french/word/Pen.mp3" },
          { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "Ananas", courseId: 2, audioSrc: "/Basics/audio/french/word/Pineapple.mp3" },
          { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "Panda", courseId: 2, audioSrc: "/Basics/audio/french/word/Panda.mp3" },
          { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "Crayon", courseId: 2, audioSrc: "/Basics/audio/french/word/Pencil.mp3" },
          { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "Avion", courseId: 2, audioSrc: "/Basics/audio/french/word/Plane.mp3" },
          { imageSrc: "/Basics/Plate.png", title: "Plate", nativenm: "Assiette", courseId: 2, audioSrc: "/Basics/audio/french/word/Plate.mp3" },
          { imageSrc: "/Basics/Plant.png", title: "Plant", nativenm: "Plante", courseId: 2, audioSrc: "/Basics/audio/french/word/Plant.mp3" },
          { imageSrc: "/Basics/Peacock.png", title: "Peacock", nativenm: "Paon", courseId: 2, audioSrc: "/Basics/audio/french/word/Peacock.mp3" },
          { imageSrc: "/Basics/Potato.png", title: "Potato", nativenm: "Pomme de terre", courseId: 2, audioSrc: "/Basics/audio/french/word/Potato.mp3" },
          { imageSrc: "/Basics/Pumpkin.png", title: "Pumpkin", nativenm: "Citrouille", courseId: 2, audioSrc: "/Basics/audio/french/word/Pumpkin.mp3" },
      
          // Q
          { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "Couette", courseId: 2, audioSrc: "/Basics/audio/french/word/Quilt.mp3" },
          { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "Reine", courseId: 2, audioSrc: "/Basics/audio/french/word/Queen.mp3" },
          { imageSrc: "/Basics/Quail.png", title: "Quail", nativenm: "Caille", courseId: 2, audioSrc: "/Basics/audio/french/word/Quail.mp3" },
          { imageSrc: "/Basics/Quill.png", title: "Quill", nativenm: "Plume", courseId: 2, audioSrc: "/Basics/audio/french/word/Quill.mp3" },
          { imageSrc: "/Basics/Quartz.png", title: "Quartz", nativenm: "Quartz", courseId: 2, audioSrc: "/Basics/audio/french/word/Quartz.mp3" },
          { imageSrc: "/Basics/Question.png", title: "Question", nativenm: "Question", courseId: 2, audioSrc: "/Basics/audio/french/word/Question.mp3" },
          { imageSrc: "/Basics/Queue.png", title: "Queue", nativenm: "File d'attente", courseId: 2, audioSrc: "/Basics/audio/french/word/Queue.mp3" },
          { imageSrc: "/Basics/Quiver.png", title: "Quiver", nativenm: "Carquois", courseId: 2, audioSrc: "/Basics/audio/french/word/Quiver.mp3" },
          { imageSrc: "/Basics/Quokka.png", title: "Quokka", nativenm: "Quokka", courseId: 2, audioSrc: "/Basics/audio/french/word/Quokka.mp3" },
          { imageSrc: "/Basics/Quiche.png", title: "Quiche", nativenm: "Quiche", courseId: 2, audioSrc: "/Basics/audio/french/word/Quiche.mp3" },
      
          // R
          { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "Lapin", courseId: 2, audioSrc: "/Basics/audio/french/word/Rabbit.mp3" },
          { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "Pluie", courseId: 2, audioSrc: "/Basics/audio/french/word/Rain.mp3" },
          { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "Anneau", courseId: 2, audioSrc: "/Basics/audio/french/word/Ring.mp3" },
          { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "Rose", courseId: 2, audioSrc: "/Basics/audio/french/word/Rose.mp3" },
          { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "Robot", courseId: 2, audioSrc: "/Basics/audio/french/word/Robot.mp3" },
          { imageSrc: "/Basics/Rocket.png", title: "Rocket", nativenm: "Fusée", courseId: 2, audioSrc: "/Basics/audio/french/word/Rocket.mp3" },
          { imageSrc: "/Basics/River.png", title: "River", nativenm: "Rivière", courseId: 2, audioSrc: "/Basics/audio/french/word/River.mp3" },
          { imageSrc: "/Basics/Rope.png", title: "Rope", nativenm: "Corde", courseId: 2, audioSrc: "/Basics/audio/french/word/Rope.mp3" },
          { imageSrc: "/Basics/Roof.png", title: "Roof", nativenm: "Toit", courseId: 2, audioSrc: "/Basics/audio/french/word/Roof.mp3" },
          { imageSrc: "/Basics/Ruler.png", title: "Ruler", nativenm: "Règle", courseId: 2, audioSrc: "/Basics/audio/french/word/Ruler.mp3" },
      
          // S
          { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "Soleil", courseId: 2, audioSrc: "/Basics/audio/french/word/Sun.mp3" },
          { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "Serpent", courseId: 2, audioSrc: "/Basics/audio/french/word/Snake.mp3" },
          { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "Étoile", courseId: 2, audioSrc: "/Basics/audio/french/word/Star.mp3" },
          { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "Chaussettes", courseId: 2, audioSrc: "/Basics/audio/french/word/Socks.mp3" },
          { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "Sable", courseId: 2, audioSrc: "/Basics/audio/french/word/Sand.mp3" },
          { imageSrc: "/Basics/Ship.png", title: "Ship", nativenm: "Bateau", courseId: 2, audioSrc: "/Basics/audio/french/word/Ship.mp3" },
          { imageSrc: "/Basics/Shirt.png", title: "Shirt", nativenm: "Chemise", courseId: 2, audioSrc: "/Basics/audio/french/word/Shirt.mp3" },
          { imageSrc: "/Basics/Spoon.png", title: "Spoon", nativenm: "Cuillère", courseId: 2, audioSrc: "/Basics/audio/french/word/Spoon.mp3" },
          { imageSrc: "/Basics/Stone.png", title: "Stone", nativenm: "Pierre", courseId: 2, audioSrc: "/Basics/audio/french/word/Stone.mp3" },
          { imageSrc: "/Basics/Swing.png", title: "Swing", nativenm: "Balançoire", courseId: 2, audioSrc: "/Basics/audio/french/word/Swing.mp3" },
      
          // T
          { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "Tigre", courseId: 2, audioSrc: "/Basics/audio/french/word/Tiger.mp3" },
          { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "Arbre", courseId: 2, audioSrc: "/Basics/audio/french/word/Tree.mp3" },
          { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "Table", courseId: 2, audioSrc: "/Basics/audio/french/word/Table.mp3" },
          { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "Télévision", courseId: 2, audioSrc: "/Basics/audio/french/word/Television.mp3" },
          { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "Dent", courseId: 2, audioSrc: "/Basics/audio/french/word/Tooth.mp3" },
          { imageSrc: "/Basics/Train.png", title: "Train", nativenm: "Train", courseId: 2, audioSrc: "/Basics/audio/french/word/Train.mp3" },
          { imageSrc: "/Basics/Turtle.png", title: "Turtle", nativenm: "Tortue", courseId: 2, audioSrc: "/Basics/audio/french/word/Turtle.mp3" },
          { imageSrc: "/Basics/Tent.png", title: "Tent", nativenm: "Tente", courseId: 2, audioSrc: "/Basics/audio/french/word/Tent.mp3" },
          { imageSrc: "/Basics/Trophy.png", title: "Trophy", nativenm: "Trophée", courseId: 2, audioSrc: "/Basics/audio/french/word/Trophy.mp3" },
          { imageSrc: "/Basics/Tail.png", title: "Tail", nativenm: "Queue", courseId: 2, audioSrc: "/Basics/audio/french/word/Tail.mp3" },
      
          // U
          { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "Parapluie", courseId: 2, audioSrc: "/Basics/audio/french/word/Umbrella.mp3" },
          { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "Urne", courseId: 2, audioSrc: "/Basics/audio/french/word/Urn.mp3" },
          { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "Oncle", courseId: 2, audioSrc: "/Basics/audio/french/word/Uncle.mp3" },
          { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "Licorne", courseId: 2, audioSrc: "/Basics/audio/french/word/Unicorn.mp3" },
          { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "Univers", courseId: 2, audioSrc: "/Basics/audio/french/word/Universe.mp3" },
          { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "Ustensile", courseId: 2, audioSrc: "/Basics/audio/french/word/Utensil.mp3" },
          { imageSrc: "/Basics/Uniform.png", title: "Uniform", nativenm: "Uniforme", courseId: 2, audioSrc: "/Basics/audio/french/word/Uniform.mp3" },
          { imageSrc: "/Basics/Urchin.png", title: "Urchin", nativenm: "Oursin", courseId: 2, audioSrc: "/Basics/audio/french/word/Urchin.mp3" },
          { imageSrc: "/Basics/Ukulele.png", title: "Ukulele", nativenm: "Ukulélé", courseId: 2, audioSrc: "/Basics/audio/french/word/Ukulele.mp3" },
          { imageSrc: "/Basics/Update.png", title: "Update", nativenm: "Mise à jour", courseId: 2, audioSrc: "/Basics/audio/french/word/Update.mp3" },
      
          // V
          { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "Fourgonnette", courseId: 2, audioSrc: "/Basics/audio/french/word/Van.mp3" },
          { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "Vautour", courseId: 2, audioSrc: "/Basics/audio/french/word/Vulture.mp3" },
          { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "Aspirateur", courseId: 2, audioSrc: "/Basics/audio/french/word/Vacuum.mp3" },
          { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "Victime", courseId: 2, audioSrc: "/Basics/audio/french/word/Victim.mp3" },
          { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "Légume", courseId: 2, audioSrc: "/Basics/audio/french/word/Vegetable.mp3" },
          { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "Volcan", courseId: 2, audioSrc: "/Basics/audio/french/word/Volcano.mp3" },
          { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "Vacances", courseId: 2, audioSrc: "/Basics/audio/french/word/Vacation.mp3" },
          { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "Vampire", courseId: 2, audioSrc: "/Basics/audio/french/word/Vampire.mp3" },
          { imageSrc: "/Basics/Vest.png", title: "Vest", nativenm: "Gilet", courseId: 2, audioSrc: "/Basics/audio/french/word/Vest.mp3" },
          { imageSrc: "/Basics/Vine.png", title: "Vine", nativenm: "Vigne", courseId: 2, audioSrc: "/Basics/audio/french/word/Vine.mp3" },
      
          // W
          { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "Loup", courseId: 2, audioSrc: "/Basics/audio/french/word/Wolf.mp3" },
          { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "Pastèque", courseId: 2, audioSrc: "/Basics/audio/french/word/Watermelon.mp3" },
          { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "Fenêtre", courseId: 2, audioSrc: "/Basics/audio/french/word/Window.mp3" },
          { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "Wagon", courseId: 2, audioSrc: "/Basics/audio/french/word/Wagon.mp3" },
          { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "Cascade", courseId: 2, audioSrc: "/Basics/audio/french/word/Waterfall.mp3" },
          { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "Montre", courseId: 2, audioSrc: "/Basics/audio/french/word/Watch.mp3" },
          { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "Baleine", courseId: 2, audioSrc: "/Basics/audio/french/word/Whale.mp3" },
          { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "Hiver", courseId: 2, audioSrc: "/Basics/audio/french/word/Winter.mp3" },
          { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "Poignet", courseId: 2, audioSrc: "/Basics/audio/french/word/Wrist.mp3" },
          { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "Sifflet", courseId: 2, audioSrc: "/Basics/audio/french/word/Whistle.mp3" },
      
          // X
          { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "Xylophone", courseId: 2, audioSrc: "/Basics/audio/french/word/Xylophone.mp3" },
          { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "Rayon X", courseId: 2, audioSrc: "/Basics/audio/french/word/X-ray.mp3" },
          { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "Xénon", courseId: 2, audioSrc: "/Basics/audio/french/word/Xenon.mp3" },
          { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "Noël", courseId: 2, audioSrc: "/Basics/audio/french/word/Xmas.mp3" },
          { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "Xénophobie", courseId: 2, audioSrc: "/Basics/audio/french/word/Xenophobia.mp3" },
          { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "Xénial", courseId: 2, audioSrc: "/Basics/audio/french/word/Xenial.mp3" },
          { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "Xeon", courseId: 2, audioSrc: "/Basics/audio/french/word/Xeon.mp3" },
          { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "Examiner", courseId: 2, audioSrc: "/Basics/audio/french/word/Examine.mp3" },
          { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "Exploser", courseId: 2, audioSrc: "/Basics/audio/french/word/Explode.mp3" },
          { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "Exil", courseId: 2, audioSrc: "/Basics/audio/french/word/Exile.mp3" },
      
          // Y
          { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "Yak", courseId: 2, audioSrc: "/Basics/audio/french/word/Yak.mp3" },
          { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "Jaune", courseId: 2, audioSrc: "/Basics/audio/french/word/Yellow.mp3" },
          { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "Yaourt", courseId: 2, audioSrc: "/Basics/audio/french/word/Yogurt.mp3" },
          { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "Fil", courseId: 2, audioSrc: "/Basics/audio/french/word/Yarn.mp3" },
          { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "Yoga", courseId: 2, audioSrc: "/Basics/audio/french/word/Yoga.mp3" },
          { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "Bâillement", courseId: 2, audioSrc: "/Basics/audio/french/word/Yawn.mp3" },
          { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "Cour", courseId: 2, audioSrc: "/Basics/audio/french/word/Yard.mp3" },
          { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "Crier", courseId: 2, audioSrc: "/Basics/audio/french/word/Yell.mp3" },
          { imageSrc: "/Basics/Yolk.png", title: "Yolk", nativenm: "Jaune d'œuf", courseId: 2, audioSrc: "/Basics/audio/french/word/Yolk.mp3" },
          { imageSrc: "/Basics/Yacht.png", title: "Yacht", nativenm: "Yacht", courseId: 2, audioSrc: "/Basics/audio/french/word/Yacht.mp3" },
      
          // Z
          { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "Zèbre", courseId: 2, audioSrc: "/Basics/audio/french/word/Zebra.mp3" },
          { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "Zoo", courseId: 2, audioSrc: "/Basics/audio/french/word/Zoo.mp3" },
          { imageSrc: "/Basics/Zenith.png", title: "Zenith", nativenm: "Zénith", courseId: 2, audioSrc: "/Basics/audio/french/word/Zenith.mp3" },
          { imageSrc: "/Basics/Zero.png", title: "Zero", nativenm: "Zéro", courseId: 2, audioSrc: "/Basics/audio/french/word/Zero.mp3" },
          { imageSrc: "/Basics/Zigzag.png", title: "Zigzag", nativenm: "Zigzag", courseId: 2, audioSrc: "/Basics/audio/french/word/Zigzag.mp3" },
          { imageSrc: "/Basics/Zeppelin.png", title: "Zeppelin", nativenm: "Zeppelin", courseId: 2, audioSrc: "/Basics/audio/french/word/Zeppelin.mp3" },
          { imageSrc: "/Basics/Zombie.png", title: "Zombie", nativenm: "Zombie", courseId: 2, audioSrc: "/Basics/audio/french/word/Zombie.mp3" },
          { imageSrc: "/Basics/Zone.png", title: "Zone", nativenm: "Zone", courseId: 2, audioSrc: "/Basics/audio/french/word/Zone.mp3" },
          { imageSrc: "/Basics/Zodiac.png", title: "Zodiac", nativenm: "Zodiaque", courseId: 2, audioSrc: "/Basics/audio/french/word/Zodiac.mp3" },
          { imageSrc: "/Basics/Zoom.png", title: "Zoom", nativenm: "Zoom", courseId: 2, audioSrc: "/Basics/audio/french/word/Zoom.mp3" },
      

      //japnese
     
          // A
          { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "りんご", courseId: 3, audioSrc: "/Basics/audio/Apple.mp3" },
          { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "あり", courseId: 3, audioSrc: "/Basics/audio/Ant.mp3" },
          { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "うで", courseId: 3, audioSrc: "/Basics/audio/Arm.mp3" },
          { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "ひこうき", courseId: 3, audioSrc: "/Basics/audio/Airplane.mp3" },
          { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "やじるし", courseId: 3, audioSrc: "/Basics/audio/Arrow.mp3" },
          { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "いかり", courseId: 3, audioSrc: "/Basics/audio/Anchor.mp3" },
          { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "ワニ", courseId: 3, audioSrc: "/Basics/audio/Alligator.mp3" },
          { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "アラーム", courseId: 3, audioSrc: "/Basics/audio/Alarm.mp3" },
          { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "俳優", courseId: 3, audioSrc: "/Basics/audio/Actor.mp3" },
          { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "芸術", courseId: 3, audioSrc: "/Basics/audio/Art.mp3" },
      
          // B
          { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "ボール", courseId: 3, audioSrc: "/Basics/audio/Ball.mp3" },
          { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "くま", courseId: 3, audioSrc: "/Basics/audio/Bear.mp3" },
          { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "とり", courseId: 3, audioSrc: "/Basics/audio/Bird.mp3" },
          { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "ちょうちょ", courseId: 3, audioSrc: "/Basics/audio/Butterfly.mp3" },
          { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "バナナ", courseId: 3, audioSrc: "/Basics/audio/Banana.mp3" },
          { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "ボート", courseId: 3, audioSrc: "/Basics/audio/Boat.mp3" },
          { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "はこ", courseId: 3, audioSrc: "/Basics/audio/Box.mp3" },
          { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "ほん", courseId: 3, audioSrc: "/Basics/audio/Book.mp3" },
          { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "ベンチ", courseId: 3, audioSrc: "/Basics/audio/Bench.mp3" },
          { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "ベル", courseId: 3, audioSrc: "/Basics/audio/Bell.mp3" },
      
          // C
          { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "ねこ", courseId: 3, audioSrc: "/Basics/audio/Cat.mp3" },
          { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "ケーキ", courseId: 3, audioSrc: "/Basics/audio/Cake.mp3" },
          { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "ろうそく", courseId: 3, audioSrc: "/Basics/audio/Candle.mp3" },
          { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "うし", courseId: 3, audioSrc: "/Basics/audio/Cow.mp3" },
          { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "くるま", courseId: 3, audioSrc: "/Basics/audio/Car.mp3" },
          { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "コイン", courseId: 3, audioSrc: "/Basics/audio/Coin.mp3" },
          { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "おうかん", courseId: 3, audioSrc: "/Basics/audio/Crown.mp3" },
          { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "サボテン", courseId: 3, audioSrc: "/Basics/audio/Cactus.mp3" },
          { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "とけい", courseId: 3, audioSrc: "/Basics/audio/Clock.mp3" },
          { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "くも", courseId: 3, audioSrc: "/Basics/audio/Cloud.mp3" },
      
          // D
          { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "いぬ", courseId: 3, audioSrc: "/Basics/audio/Dog.mp3" },
          { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "あひる", courseId: 3, audioSrc: "/Basics/audio/Duck.mp3" },
          { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "ドレス", courseId: 3, audioSrc: "/Basics/audio/Dress.mp3" },
          { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "ドア", courseId: 3, audioSrc: "/Basics/audio/Door.mp3" },
          { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "ダイヤモンド", courseId: 3, audioSrc: "/Basics/audio/Diamond.mp3" },
          { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "イルカ", courseId: 3, audioSrc: "/Basics/audio/Dolphin.mp3" },
          { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "ロバ", courseId: 3, audioSrc: "/Basics/audio/Donkey.mp3" },
          { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "さいころ", courseId: 3, audioSrc: "/Basics/audio/Dice.mp3" },
          { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "ドラム", courseId: 3, audioSrc: "/Basics/audio/Drum.mp3" },
          { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "しずく", courseId: 3, audioSrc: "/Basics/audio/Drop.mp3" },
      
          // E
          { imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "ぞう", courseId: 3, audioSrc: "/Basics/audio/Elephant.mp3" },
          { imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "たまご", courseId: 3, audioSrc: "/Basics/audio/Egg.mp3" },
          { imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "エンジン", courseId: 3, audioSrc: "/Basics/audio/Engine.mp3" },
          { imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "ふうとう", courseId: 3, audioSrc: "/Basics/audio/Envelope.mp3" },
          { imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "みみ", courseId: 3, audioSrc: "/Basics/audio/Ear.mp3" },
          { imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "わし", courseId: 3, audioSrc: "/Basics/audio/Eagle.mp3" },
          { imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "ちきゅう", courseId: 3, audioSrc: "/Basics/audio/Earth.mp3" },
          { imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "め", courseId: 3, audioSrc: "/Basics/audio/Eye.mp3" },
          { imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "エルフ", courseId: 3, audioSrc: "/Basics/audio/Elf.mp3" },
          { imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "エレベーター", courseId: 3, audioSrc: "/Basics/audio/Elevator.mp3" },
      
          // F
          { imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "さかな", courseId: 3, audioSrc: "/Basics/audio/Fish.mp3" },
          { imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "はな", courseId: 3, audioSrc: "/Basics/audio/Flower.mp3" },
          { imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "フォーク", courseId: 3, audioSrc: "/Basics/audio/Fork.mp3" },
          { imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "ひ", courseId: 3, audioSrc: "/Basics/audio/Fire.mp3" },
          { imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "きつね", courseId: 3, audioSrc: "/Basics/audio/Fox.mp3" },
          { imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "フェンス", courseId: 3, audioSrc: "/Basics/audio/Fence.mp3" },
      
          // G
          { imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "ギター", courseId: 3, audioSrc: "/Basics/audio/Guitar.mp3" },
          { imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "ぶどう", courseId: 3, audioSrc: "/Basics/audio/Grapes.mp3" },
          { imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "キリン", courseId: 3, audioSrc: "/Basics/audio/Giraffe.mp3" },
          { imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "やぎ", courseId: 3, audioSrc: "/Basics/audio/Goat.mp3" },
          { imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "てぶくろ", courseId: 3, audioSrc: "/Basics/audio/Glove.mp3" },
          { imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "にわ", courseId: 3, audioSrc: "/Basics/audio/Garden.mp3" },
      
          // H
          { imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "ぼうし", courseId: 3, audioSrc: "/Basics/audio/Hat.mp3" },
          { imageSrc: "/Basics/House.png", title: "House", nativenm: "いえ", courseId: 3, audioSrc: "/Basics/audio/House.mp3" },
          { imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "うま", courseId: 3, audioSrc: "/Basics/audio/Horse.mp3" },
          { imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "ハンマー", courseId: 3, audioSrc: "/Basics/audio/Hammer.mp3" },
          { imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "て", courseId: 3, audioSrc: "/Basics/audio/Hand.mp3" },
          { imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "ハート", courseId: 3, audioSrc: "/Basics/audio/Heart.mp3" },
      
          // I
          { imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "こおり", courseId: 3, audioSrc: "/Basics/audio/Ice.mp3" },
          { imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "アイロン", courseId: 3, audioSrc: "/Basics/audio/Iron.mp3" },
          { imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "イグアナ", courseId: 3, audioSrc: "/Basics/audio/Iguana.mp3" },
          { imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "こんちゅう", courseId: 3, audioSrc: "/Basics/audio/Insect.mp3" },
          { imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "インク", courseId: 3, audioSrc: "/Basics/audio/Ink.mp3" },
          { imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "アイスクリーム", courseId: 3, audioSrc: "/Basics/audio/Ice Cream.mp3" },
      
          // J
          { imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "ジャケット", courseId: 3, audioSrc: "/Basics/audio/Jacket.mp3" },
          { imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "ジャングル", courseId: 3, audioSrc: "/Basics/audio/Jungle.mp3" },
          { imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "ジャンプ", courseId: 3, audioSrc: "/Basics/audio/Jump.mp3" },
          { imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "びん", courseId: 3, audioSrc: "/Basics/audio/Jar.mp3" },
          { imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "くらげ", courseId: 3, audioSrc: "/Basics/audio/Jellyfish.mp3" },
      
          // K
          { imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "キウイ", courseId: 3, audioSrc: "/Basics/audio/Kiwi.mp3" },
          { imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "カンガルー", courseId: 3, audioSrc: "/Basics/audio/Kangaroo.mp3" },
          { imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "やかん", courseId: 3, audioSrc: "/Basics/audio/Kettle.mp3" },
          { imageSrc: "/Basics/Key.png", title: "Key", nativenm: "かぎ", courseId: 3, audioSrc: "/Basics/audio/Key.mp3" },
          { imageSrc: "/Basics/King.png", title: "King", nativenm: "おう", courseId: 3, audioSrc: "/Basics/audio/King.mp3" },
      
          // L
          { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "ライオン", courseId: 3, audioSrc: "/Basics/audio/Lion.mp3" },
          { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "ランプ", courseId: 3, audioSrc: "/Basics/audio/Lamp.mp3" },
          { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "レモン", courseId: 3, audioSrc: "/Basics/audio/Lemon.mp3" },
          { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "はしご", courseId: 3, audioSrc: "/Basics/audio/Ladder.mp3" },
          { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "は", courseId: 3, audioSrc: "/Basics/audio/Leaf.mp3" },
      
          // M
          { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "ねずみ", courseId: 3, audioSrc: "/Basics/audio/Mouse.mp3" },
          { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "さる", courseId: 3, audioSrc: "/Basics/audio/Monkey.mp3" },
          { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "やま", courseId: 3, audioSrc: "/Basics/audio/Mountain.mp3" },
          { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "ミルク", courseId: 3, audioSrc: "/Basics/audio/Milk.mp3" },
          { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "かがみ", courseId: 3, audioSrc: "/Basics/audio/Mirror.mp3" },
      
          // N
          { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "ネット", courseId: 3, audioSrc: "/Basics/audio/Net.mp3" },
          { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "はな", courseId: 3, audioSrc: "/Basics/audio/Nose.mp3" },
          { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "よる", courseId: 3, audioSrc: "/Basics/audio/Night.mp3" },
          { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "ナット", courseId: 3, audioSrc: "/Basics/audio/Nut.mp3" },
      
          // O
          { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "ダチョウ", courseId: 3, audioSrc: "/Basics/audio/Ostrich.mp3" },
          { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "たこ", courseId: 3, audioSrc: "/Basics/audio/Octopus.mp3" },
          { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "ふくろう", courseId: 3, audioSrc: "/Basics/audio/Owl.mp3" },
          { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "オリーブ", courseId: 3, audioSrc: "/Basics/audio/Olive.mp3" },
          { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "さんそ", courseId: 3, audioSrc: "/Basics/audio/Oxygen.mp3" },
      
          // P
          { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "ペン", courseId: 3, audioSrc: "/Basics/audio/Pen.mp3" },
          { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "パイナップル", courseId: 3, audioSrc: "/Basics/audio/Pineapple.mp3" },
          { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "パンダ", courseId: 3, audioSrc: "/Basics/audio/Panda.mp3" },
          { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "えんぴつ", courseId: 3, audioSrc: "/Basics/audio/Pencil.mp3" },
          { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "ひこうき", courseId: 3, audioSrc: "/Basics/audio/Plane.mp3" },
      
          // Q
          { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "キルト", courseId: 3, audioSrc: "/Basics/audio/Quilt.mp3" },
          { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "クイーン", courseId: 3, audioSrc: "/Basics/audio/Queen.mp3" },
      
          // R
          { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "うさぎ", courseId: 3, audioSrc: "/Basics/audio/Rabbit.mp3" },
          { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "あめ", courseId: 3, audioSrc: "/Basics/audio/Rain.mp3" },
          { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "ゆびわ", courseId: 3, audioSrc: "/Basics/audio/Ring.mp3" },
          { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "バラ", courseId: 3, audioSrc: "/Basics/audio/Rose.mp3" },
          { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "ロボット", courseId: 3, audioSrc: "/Basics/audio/Robot.mp3" },
      
          // S
          { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "たいよう", courseId: 3, audioSrc: "/Basics/audio/Sun.mp3" },
          { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "へび", courseId: 3, audioSrc: "/Basics/audio/Snake.mp3" },
          { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "ほし", courseId: 3, audioSrc: "/Basics/audio/Star.mp3" },
          { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "くつした", courseId: 3, audioSrc: "/Basics/audio/Socks.mp3" },
          { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "すな", courseId: 3, audioSrc: "/Basics/audio/Sand.mp3" },
      
          // T
          { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "とら", courseId: 3, audioSrc: "/Basics/audio/Tiger.mp3" },
          { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "き", courseId: 3, audioSrc: "/Basics/audio/Tree.mp3" },
          { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "テーブル", courseId: 3, audioSrc: "/Basics/audio/Table.mp3" },
          { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "テレビ", courseId: 3, audioSrc: "/Basics/audio/Television.mp3" },
          { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "は", courseId: 3, audioSrc: "/Basics/audio/Tooth.mp3" },
      
          // U
          { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "かさ", courseId: 3, audioSrc: "/Basics/audio/Umbrella.mp3" },
          { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "つぼ", courseId: 3, audioSrc: "/Basics/audio/Urn.mp3" },
          { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "おじ", courseId: 3, audioSrc: "/Basics/audio/Uncle.mp3" },
          { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "ユニコーン", courseId: 3, audioSrc: "/Basics/audio/Unicorn.mp3" },
          { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "うちゅう", courseId: 3, audioSrc: "/Basics/audio/Universe.mp3" },
          { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "ようぐ", courseId: 3, audioSrc: "/Basics/audio/Utensil.mp3" },
      
          // V
          { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "バン", courseId: 3, audioSrc: "/Basics/audio/Van.mp3" },
          { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "ハゲワシ", courseId: 3, audioSrc: "/Basics/audio/Vulture.mp3" },
          { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "そうじき", courseId: 3, audioSrc: "/Basics/audio/Vacuum.mp3" },
          { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "ひがいしゃ", courseId: 3, audioSrc: "/Basics/audio/Victim.mp3" },
          { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "やさい", courseId: 3, audioSrc: "/Basics/audio/Vegetable.mp3" },
          { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "かざん", courseId: 3, audioSrc: "/Basics/audio/Volcano.mp3" },
          { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "バケーション", courseId: 3, audioSrc: "/Basics/audio/Vacation.mp3" },
          { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "ヴァンパイア", courseId: 3, audioSrc: "/Basics/audio/Vampire.mp3" },
      
          // W
          { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "おおかみ", courseId: 3, audioSrc: "/Basics/audio/Wolf.mp3" },
          { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "すいか", courseId: 3, audioSrc: "/Basics/audio/Watermelon.mp3" },
          { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "まど", courseId: 3, audioSrc: "/Basics/audio/Window.mp3" },
          { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "ワゴン", courseId: 3, audioSrc: "/Basics/audio/Wagon.mp3" },
          { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "たき", courseId: 3, audioSrc: "/Basics/audio/Waterfall.mp3" },
          { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "とけい", courseId: 3, audioSrc: "/Basics/audio/Watch.mp3" },
          { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "くじら", courseId: 3, audioSrc: "/Basics/audio/Whale.mp3" },
          { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "ふゆ", courseId: 3, audioSrc: "/Basics/audio/Winter.mp3" },
          { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "てくび", courseId: 3, audioSrc: "/Basics/audio/Wrist.mp3" },
          { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "くちぶえ", courseId: 3, audioSrc: "/Basics/audio/Whistle.mp3" },
      
          // X
          { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "シロフォン", courseId: 3, audioSrc: "/Basics/audio/Xylophone.mp3" },
          { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "エックスせん", courseId: 3, audioSrc: "/Basics/audio/X-ray.mp3" },
          { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "キセノン", courseId: 3, audioSrc: "/Basics/audio/Xenon.mp3" },
          { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "クリスマス", courseId: 3, audioSrc: "/Basics/audio/Xmas.mp3" },
          { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "がいこくじんきょうふ", courseId: 3, audioSrc: "/Basics/audio/Xenophobia.mp3" },
          { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "フレンドリー", courseId: 3, audioSrc: "/Basics/audio/Xenial.mp3" },
          { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "ゼオン", courseId: 3, audioSrc: "/Basics/audio/Xeon.mp3" },
          { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "しらべる", courseId: 3, audioSrc: "/Basics/audio/Examine.mp3" },
          { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "ばくはつ", courseId: 3, audioSrc: "/Basics/audio/Explode.mp3" },
          { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "ついほう", courseId: 3, audioSrc: "/Basics/audio/Exile.mp3" },
      
          // Y
          { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "ヤク", courseId: 3, audioSrc: "/Basics/audio/Yak.mp3" },
          { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "きいろ", courseId: 3, audioSrc: "/Basics/audio/Yellow.mp3" },
          { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "ヨーグルト", courseId: 3, audioSrc: "/Basics/audio/Yogurt.mp3" },
          { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "いと", courseId: 3, audioSrc: "/Basics/audio/Yarn.mp3" },
          { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "ヨガ", courseId: 3, audioSrc: "/Basics/audio/Yoga.mp3" },
          { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "あくび", courseId: 3, audioSrc: "/Basics/audio/Yawn.mp3" },
          { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "にわ", courseId: 3, audioSrc: "/Basics/audio/Yard.mp3" },
          { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "さけぶ", courseId: 3, audioSrc: "/Basics/audio/Yell.mp3" },
      
          // Z
          { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "シマウマ", courseId: 3, audioSrc: "/Basics/audio/Zebra.mp3" },
          { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "どうぶつえん", courseId: 3, audioSrc: "/Basics/audio/Zoo.mp3" },



          //marathi data here
          
              { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "सफरचंद", courseId: 4, audioSrc: "Basics/audio/marathi/word/Apple.mp3" },
              { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "मुंगी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ant.mp3" },
              { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "हात", courseId: 4, audioSrc: "Basics/audio/marathi/word/Arm.mp3" },
              { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "विमान", courseId: 4, audioSrc: "Basics/audio/marathi/word/Airplane.mp3" },
              { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "बाण", courseId: 4, audioSrc: "Basics/audio/marathi/word/Arrow.mp3" },
              { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "नांगर", courseId: 4, audioSrc: "Basics/audio/marathi/word/Anchor.mp3" },
              { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "मगर", courseId: 4, audioSrc: "Basics/audio/marathi/word/Alligator.mp3" },
              { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "अलार्म", courseId: 4, audioSrc: "Basics/audio/marathi/word/Alarm.mp3" },
              { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "अभिनेता", courseId: 4, audioSrc: "Basics/audio/marathi/word/Actor.mp3" },
              { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "कला", courseId: 4, audioSrc: "Basics/audio/marathi/word/Art.mp3" },
          
              // B
              { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "चेंडू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ball.mp3" },
              { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "अस्वल", courseId: 4, audioSrc: "Basics/audio/marathi/word/Bear.mp3" },
              { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "पक्षी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Bird.mp3" },
              { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "फुलपाखरू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Butterfly.mp3" },
              { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "केळ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Banana.mp3" },
              { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "बोट", courseId: 4, audioSrc: "Basics/audio/marathi/word/Boat.mp3" },
              { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "पेटी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Box.mp3" },
              { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "पुस्तक", courseId: 4, audioSrc: "Basics/audio/marathi/word/Book.mp3" },
              { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "बेंच", courseId: 4, audioSrc: "Basics/audio/marathi/word/Bench.mp3" },
              { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "घंटा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Bell.mp3" },
          
              // C
              { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "मांजर", courseId: 4, audioSrc: "Basics/audio/marathi/word/Cat.mp3" },
              { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "केक", courseId: 4, audioSrc: "Basics/audio/marathi/word/Cake.mp3" },
              { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "मेणबत्ती", courseId: 4, audioSrc: "Basics/audio/marathi/word/Candle.mp3" },
              { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "गाय", courseId: 4, audioSrc: "Basics/audio/marathi/word/Cow.mp3" },
              { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "कार", courseId: 4, audioSrc: "Basics/audio/marathi/word/Car.mp3" },
              { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "नाणे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Coin.mp3" },
              { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "मुकुट", courseId: 4, audioSrc: "Basics/audio/marathi/word/Crown.mp3" },
              { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "कॅक्टस", courseId: 4, audioSrc: "Basics/audio/marathi/word/Cactus.mp3" },
              { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "घड्याळ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Clock.mp3" },
              { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "ढग", courseId: 4, audioSrc: "Basics/audio/marathi/word/Cloud.mp3" },
          
              // D
              { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "कुत्रा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Dog.mp3" },
              { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "बदक", courseId: 4, audioSrc: "Basics/audio/marathi/word/Duck.mp3" },
              { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "ड्रेस", courseId: 4, audioSrc: "Basics/audio/marathi/word/Dress.mp3" },
              { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "दरवाजा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Door.mp3" },
              { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "हिरा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Diamond.mp3" },
              { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "डॉल्फिन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Dolphin.mp3" },
              { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "गाढव", courseId: 4, audioSrc: "Basics/audio/marathi/word/Donkey.mp3" },
              { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "फासे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Dice.mp3" },
              { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "ड्रम", courseId: 4, audioSrc: "Basics/audio/marathi/word/Drum.mp3" },
              { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "थेंब", courseId: 4, audioSrc: "Basics/audio/marathi/word/Drop.mp3" },
          
              // E
              { imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "हत्ती", courseId: 4, audioSrc: "Basics/audio/marathi/word/Elephant.mp3" },
              { imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "अंडे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Egg.mp3" },
              { imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "इंजिन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Engine.mp3" },
              { imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "लिफाफा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Envelope.mp3" },
              { imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "कान", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ear.mp3" },
              { imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "गरूड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Eagle.mp3" },
              { imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "पृथ्वी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Earth.mp3" },
              { imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "डोळा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Eye.mp3" },
              { imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "एल्फ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Elf.mp3" },
              { imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "लिफ्ट", courseId: 4, audioSrc: "Basics/audio/marathi/word/Elevator.mp3" },
          
              // F
              { imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "मासा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Fish.mp3" },
              { imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "फूल", courseId: 4, audioSrc: "Basics/audio/marathi/word/Flower.mp3" },
              { imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "काटा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Fork.mp3" },
              { imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "आग", courseId: 4, audioSrc: "Basics/audio/marathi/word/Fire.mp3" },
              { imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "कोल्हा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Fox.mp3" },
              { imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "कुंपण", courseId: 4, audioSrc: "Basics/audio/marathi/word/Fence.mp3" },
          
              // G
              { imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "गिटार", courseId: 4, audioSrc: "Basics/audio/marathi/word/Guitar.mp3" },
              { imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "द्राक्ष", courseId: 4, audioSrc: "Basics/audio/marathi/word/Grapes.mp3" },
              { imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "जिराफ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Giraffe.mp3" },
              { imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "शेळी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Goat.mp3" },
              { imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "हातमोजा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Glove.mp3" },
              { imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "बाग", courseId: 4, audioSrc: "Basics/audio/marathi/word/Garden.mp3" },
          
              // H
              { imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "टोपी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Hat.mp3" },
              { imageSrc: "/Basics/House.png", title: "House", nativenm: "घर", courseId: 4, audioSrc: "Basics/audio/marathi/word/House.mp3" },
              { imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "घोडा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Horse.mp3" },
              { imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "हातोडा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Hammer.mp3" },
              { imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "हात", courseId: 4, audioSrc: "Basics/audio/marathi/word/Hand.mp3" },
              { imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "हृदय", courseId: 4, audioSrc: "Basics/audio/marathi/word/Heart.mp3" },
          
              // I
  { imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "बर्फ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ice.mp3" },
  { imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "लोखंड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Iron.mp3" },
  { imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "इगुआना", courseId: 4, audioSrc: "Basics/audio/marathi/word/Iguana.mp3" },
  { imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "कीटक", courseId: 4, audioSrc: "Basics/audio/marathi/word/Insect.mp3" },
  { imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "शाई", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ink.mp3" },
  { imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "आईस्क्रीम", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ice Cream.mp3" },

  // J
  { imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "जाकीट", courseId: 4, audioSrc: "Basics/audio/marathi/word/Jacket.mp3" },
  { imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "जंगल", courseId: 4, audioSrc: "Basics/audio/marathi/word/Jungle.mp3" },
  { imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "उडी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Jump.mp3" },
  { imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "जार", courseId: 4, audioSrc: "Basics/audio/marathi/word/Jar.mp3" },
  { imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "जेलीफिश", courseId: 4, audioSrc: "Basics/audio/marathi/word/Jellyfish.mp3" },

  // K
  { imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "किवी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Kiwi.mp3" },
  { imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "कांगारू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Kangaroo.mp3" },
  { imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "केतली", courseId: 4, audioSrc: "Basics/audio/marathi/word/Kettle.mp3" },
  { imageSrc: "/Basics/Key.png", title: "Key", nativenm: "चावी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Key.mp3" },
  { imageSrc: "/Basics/King.png", title: "King", nativenm: "राजा", courseId: 4, audioSrc: "Basics/audio/marathi/word/King.mp3" },

  // L
  { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "सिंह", courseId: 4, audioSrc: "Basics/audio/marathi/word/Lion.mp3" },
  { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "दिवा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Lamp.mp3" },
  { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "लिंबू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Lemon.mp3" },
  { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "शिडी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ladder.mp3" },
  { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "पान", courseId: 4, audioSrc: "Basics/audio/marathi/word/Leaf.mp3" },

  // M
  { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "उंदीर", courseId: 4, audioSrc: "Basics/audio/marathi/word/Mouse.mp3" },
  { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "माकड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Monkey.mp3" },
  { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "पर्वत", courseId: 4, audioSrc: "Basics/audio/marathi/word/Mountain.mp3" },
  { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "दूध", courseId: 4, audioSrc: "Basics/audio/marathi/word/Milk.mp3" },
  { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "आरसा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Mirror.mp3" },

  // N
  { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "जाळे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Net.mp3" },
  { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "नाक", courseId: 4, audioSrc: "Basics/audio/marathi/word/Nose.mp3" },
  { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "रात्र", courseId: 4, audioSrc: "Basics/audio/marathi/word/Night.mp3" },
  { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "काजू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Nut.mp3" },

  // O
  { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "शहामृग", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ostrich.mp3" },
  { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "ऑक्टोपस", courseId: 4, audioSrc: "Basics/audio/marathi/word/Octopus.mp3" },
  { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "घुबड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Owl.mp3" },
  { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "ऑलिव", courseId: 4, audioSrc: "Basics/audio/marathi/word/Olive.mp3" },
  { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "ऑक्सिजन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Oxygen.mp3" },

  // P
  { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "पेन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Pen.mp3" },
  { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "अननस", courseId: 4, audioSrc: "Basics/audio/marathi/word/Pineapple.mp3" },
  { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "पांडा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Panda.mp3" },
  { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "पेन्सिल", courseId: 4, audioSrc: "Basics/audio/marathi/word/Pencil.mp3" },
  { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "विमान", courseId: 4, audioSrc: "Basics/audio/marathi/word/Plane.mp3" },

  // Q
  { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "रजाई", courseId: 4, audioSrc: "Basics/audio/marathi/word/Quilt.mp3" },
  { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "राणी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Queen.mp3" },

  // R
  { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "ससा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Rabbit.mp3" },
  { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "पाऊस", courseId: 4, audioSrc: "Basics/audio/marathi/word/Rain.mp3" },
  { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "अंगठी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Ring.mp3" },
  { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "गुलाब", courseId: 4, audioSrc: "Basics/audio/marathi/word/Rose.mp3" },
  { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "रोबोट", courseId: 4, audioSrc: "Basics/audio/marathi/word/Robot.mp3" },

  // S
  { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "सूर्य", courseId: 4, audioSrc: "Basics/audio/marathi/word/Sun.mp3" },
  { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "साप", courseId: 4, audioSrc: "Basics/audio/marathi/word/Snake.mp3" },
  { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "तारा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Star.mp3" },
  { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "मोजे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Socks.mp3" },
  { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "वाळू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Sand.mp3" },

  // T
  { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "वाघ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Tiger.mp3" },
  { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "झाड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Tree.mp3" },
  { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "टेबल", courseId: 4, audioSrc: "Basics/audio/marathi/word/Table.mp3" },
  { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "टेलिव्हिजन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Television.mp3" },
  { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "दात", courseId: 4, audioSrc: "Basics/audio/marathi/word/Tooth.mp3" },

  // U
  { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "छत्री", courseId: 4, audioSrc: "Basics/audio/marathi/word/Umbrella.mp3" },
  { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "कलश", courseId: 4, audioSrc: "Basics/audio/marathi/word/Urn.mp3" },
  { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "काका", courseId: 4, audioSrc: "Basics/audio/marathi/word/Uncle.mp3" },
  { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "युनिकॉर्न", courseId: 4, audioSrc: "Basics/audio/marathi/word/Unicorn.mp3" },
  { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "विश्व", courseId: 4, audioSrc: "Basics/audio/marathi/word/Universe.mp3" },
  { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "भांडे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Utensil.mp3" },

  // V
  { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "व्हॅन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Van.mp3" },
  { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "गिधाड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Vulture.mp3" },
  { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "व्हॅक्यूम", courseId: 4, audioSrc: "Basics/audio/marathi/word/Vacuum.mp3" },
  { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "बळी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Victim.mp3" },
  { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "भाजी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Vegetable.mp3" },
  { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "ज्वालामुखी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Volcano.mp3" },
  { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "सुट्टी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Vacation.mp3" },
  { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "व्हॅम्पायर", courseId: 4, audioSrc: "Basics/audio/marathi/word/Vampire.mp3" },

  // W
  { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "लांडगा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Wolf.mp3" },
  { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "कलिंगड", courseId: 4, audioSrc: "Basics/audio/marathi/word/Watermelon.mp3" },
  { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "खिडकी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Window.mp3" },
  { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "गाडी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Wagon.mp3" },
  { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "धबधबा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Waterfall.mp3" },
  { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "घड्याळ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Watch.mp3" },
  { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "तिमिंगल", courseId: 4, audioSrc: "Basics/audio/marathi/word/Whale.mp3" },
  { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "हिवाळा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Winter.mp3" },
  { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "मनगट", courseId: 4, audioSrc: "Basics/audio/marathi/word/Wrist.mp3" },
  { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "शिट्टी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Whistle.mp3" },

  // X
  { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "झायलोफोन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Xylophone.mp3" },
  { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "क्ष-किरण", courseId: 4, audioSrc: "Basics/audio/marathi/word/X-ray.mp3" },
  { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "झेनॉन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Xenon.mp3" },
  { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "ख्रिसमस", courseId: 4, audioSrc: "Basics/audio/marathi/word/Xmas.mp3" },
  { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "परकीयभीती", courseId: 4, audioSrc: "Basics/audio/marathi/word/Xenophobia.mp3" },
  { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "मैत्रीपूर्ण", courseId: 4, audioSrc: "Basics/audio/marathi/word/Xenial.mp3" },
  { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "झिऑन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Xeon.mp3" },
  { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "परीक्षण करणे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Examine.mp3" },
  { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "स्फोट होणे", courseId: 4, audioSrc: "Basics/audio/marathi/word/Explode.mp3" },
  { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "निर्वासन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Exile.mp3" },

  // Y
  { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "याक", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yak.mp3" },
  { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "पिवळा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yellow.mp3" },
  { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "दही", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yogurt.mp3" },
  { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "सुत", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yarn.mp3" },
  { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "योग", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yoga.mp3" },
  { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "जांभई", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yawn.mp3" },
  { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "आंगण", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yard.mp3" },
  { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "आरडाओरडा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Yell.mp3" },

  // Z
  { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "झेब्रा", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zebra.mp3" },
  { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "प्राणीसंग्रहालय", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zoo.mp3" },
  { imageSrc: "/Basics/Zenith.png", title: "Zenith", nativenm: "परमोच्च बिंदू", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zenith.mp3" },
  { imageSrc: "/Basics/Zero.png", title: "Zero", nativenm: "शून्य", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zero.mp3" },
  { imageSrc: "/Basics/Zigzag.png", title: "Zigzag", nativenm: "तिरपी रेघ", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zigzag.mp3" },
  { imageSrc: "/Basics/Zeppelin.png", title: "Zeppelin", nativenm: "झेपेलिन", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zeppelin.mp3" },
  { imageSrc: "/Basics/Zombie.png", title: "Zombie", nativenm: "झोंबी", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zombie.mp3" },
  { imageSrc: "/Basics/Zone.png", title: "Zone", nativenm: "क्षेत्र", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zone.mp3" },
  { imageSrc: "/Basics/Zodiac.png", title: "Zodiac", nativenm: "राशीचक्र", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zodiac.mp3" },
  { imageSrc: "/Basics/Zoom.png", title: "Zoom", nativenm: "झूम", courseId: 4, audioSrc: "Basics/audio/marathi/word/Zoom.mp3" },
    
    
  
    ];

    await db.insert(schema.basicsdb).values(basicsData);

      await db.insert(schema.basicsdbcore).values([
        
    { pronunciation: "ah", nativenm: "A", courseId: 1, order: 1, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/A.mp3" },
    { pronunciation: "beh", nativenm: "B", courseId: 1, order: 2, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/B.mp3" },
    { pronunciation: "seh", nativenm: "C", courseId: 1, order: 3, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/C.mp3" },
    { pronunciation: "deh", nativenm: "D", courseId: 1, order: 4, type: "alphabet", audioSrc: "BasicsBasics/audio/spanish/alpha/D.mp3" },
    { pronunciation: "eh", nativenm: "E", courseId: 1, order: 5, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/E.mp3" },
    { pronunciation: "efe", nativenm: "F", courseId: 1, order: 6, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/F.mp3" },
    { pronunciation: "heh", nativenm: "G", courseId: 1, order: 7, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/G.mp3" },
    { pronunciation: "ah-cheh", nativenm: "H", courseId: 1, order: 8, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/H.mp3" },
    { pronunciation: "ee", nativenm: "I", courseId: 1, order: 9, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/I.mp3" },
    { pronunciation: "ho-tah", nativenm: "J", courseId: 1, order: 10, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/J.mp3" },
    { pronunciation: "kah", nativenm: "K", courseId: 1, order: 11, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/K.mp3" },
    { pronunciation: "eh-leh", nativenm: "L", courseId: 1, order: 12, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/L.mp3" },
    { pronunciation: "eh-meh", nativenm: "M", courseId: 1, order: 13, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/M.mp3" },
    { pronunciation: "eh-neh", nativenm: "N", courseId: 1, order: 14, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/N.mp3" },
    { pronunciation: "enyeh", nativenm: "Ñ", courseId: 1, order: 15, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/Ñ.mp3" },
    { pronunciation: "oh", nativenm: "O", courseId: 1, order: 16, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/O.mp3" },
    { pronunciation: "peh", nativenm: "P", courseId: 1, order: 17, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/P.mp3" },
    { pronunciation: "koo", nativenm: "Q", courseId: 1, order: 18, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/Q.mp3" },
    { pronunciation: "eh-reh", nativenm: "R", courseId: 1, order: 19, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/R.mp3" },
    { pronunciation: "eh-seh", nativenm: "S", courseId: 1, order: 20, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/S.mp3" },
    { pronunciation: "teh", nativenm: "T", courseId: 1, order: 21, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/T.mp3" },
    { pronunciation: "oo", nativenm: "U", courseId: 1, order: 22, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/U.mp3" },
    { pronunciation: "beh", nativenm: "V", courseId: 1, order: 23, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/V.mp3" },
    { pronunciation: "doble veh", nativenm: "W", courseId: 1, order: 24, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/W.mp3" },
    { pronunciation: "eh-kees", nativenm: "X", courseId: 1, order: 25, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/X.mp3" },
    { pronunciation: "yeh", nativenm: "Y", courseId: 1, order: 26, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/Y.mp3" },
    { pronunciation: "seh-tah", nativenm: "Z", courseId: 1, order: 27, type: "alphabet", audioSrc: "Basics/audio/spanish/alpha/Z.mp3" },


    // french alphadet 26 
 
      { pronunciation: "ah", nativenm: "A", courseId: 2, order: 1, type: "alphabet", audioSrc: "Basics/audio/french/alpha/A.mp3" },
      { pronunciation: "beh", nativenm: "B", courseId: 2, order: 2, type: "alphabet", audioSrc: "Basics/audio/french/alpha/B.mp3" },
      { pronunciation: "seh", nativenm: "C", courseId: 2, order: 3, type: "alphabet", audioSrc: "Basics/audio/french/alpha/C.mp3" },
      { pronunciation: "deh", nativenm: "D", courseId: 2, order: 4, type: "alphabet", audioSrc: "Basics/audio/french/alpha/D.mp3" },
      { pronunciation: "uh", nativenm: "E", courseId: 2, order: 5, type: "alphabet", audioSrc: "Basics/audio/french/alpha/E.mp3" },
      { pronunciation: "eff", nativenm: "F", courseId: 2, order: 6, type: "alphabet", audioSrc: "Basics/audio/french/alpha/F.mp3" },
      { pronunciation: "zheh", nativenm: "G", courseId: 2, order: 7, type: "alphabet", audioSrc: "Basics/audio/french/alpha/G.mp3" },
      { pronunciation: "ahsh", nativenm: "H", courseId: 2, order: 8, type: "alphabet", audioSrc: "Basics/audio/french/alpha/H.mp3" },
      { pronunciation: "ee", nativenm: "I", courseId: 2, order: 9, type: "alphabet", audioSrc: "Basics/audio/french/alpha/I.mp3" },
      { pronunciation: "zhee", nativenm: "J", courseId: 2, order: 10, type: "alphabet", audioSrc: "Basics/audio/french/alpha/J.mp3" },
      { pronunciation: "kah", nativenm: "K", courseId: 2, order: 11, type: "alphabet", audioSrc: "Basics/audio/french/alpha/K.mp3" },
      { pronunciation: "ell", nativenm: "L", courseId: 2, order: 12, type: "alphabet", audioSrc: "Basics/audio/french/alpha/L.mp3" },
      { pronunciation: "emm", nativenm: "M", courseId: 2, order: 13, type: "alphabet", audioSrc: "Basics/audio/french/alpha/M.mp3" },
      { pronunciation: "enn", nativenm: "N", courseId: 2, order: 14, type: "alphabet", audioSrc: "Basics/audio/french/alpha/N.mp3" },
      { pronunciation: "oh", nativenm: "O", courseId: 2, order: 15, type: "alphabet", audioSrc: "Basics/audio/french/alpha/O.mp3" },
      { pronunciation: "peh", nativenm: "P", courseId: 2, order: 16, type: "alphabet", audioSrc: "Basics/audio/french/alpha/P.mp3" },
      { pronunciation: "koo", nativenm: "Q", courseId: 2, order: 17, type: "alphabet", audioSrc: "Basics/audio/french/alpha/Q.mp3" },
      { pronunciation: "err", nativenm: "R", courseId: 2, order: 18, type: "alphabet", audioSrc: "Basics/audio/french/alpha/R.mp3" },
      { pronunciation: "ess", nativenm: "S", courseId: 2, order: 19, type: "alphabet", audioSrc: "Basics/audio/french/alpha/S.mp3" },
      { pronunciation: "teh", nativenm: "T", courseId: 2, order: 20, type: "alphabet", audioSrc: "Basics/audio/french/alpha/T.mp3" },
      { pronunciation: "oo", nativenm: "U", courseId: 2, order: 21, type: "alphabet", audioSrc: "Basics/audio/french/alpha/U.mp3" },
      { pronunciation: "veh", nativenm: "V", courseId: 2, order: 22, type: "alphabet", audioSrc: "Basics/audio/french/alpha/V.mp3" },
      { pronunciation: "doo-bluh-veh", nativenm: "W", courseId: 2, order: 23, type: "alphabet", audioSrc: "Basics/audio/french/alpha/W.mp3" },
      { pronunciation: "eeks", nativenm: "X", courseId: 2, order: 24, type: "alphabet", audioSrc: "Basics/audio/french/alpha/X.mp3" },
      { pronunciation: "ee-grek", nativenm: "Y", courseId: 2, order: 25, type: "alphabet", audioSrc: "Basics/audio/french/alpha/Y.mp3" },
      { pronunciation: "zed", nativenm: "Z", courseId: 2, order: 26, type: "alphabet", audioSrc: "Basics/audio/french/alpha/Z.mp3" },



      /// japnese
     
        // Hiragana (あ - ん)
        { pronunciation: "a", nativenm: "H_あ", courseId: 3, order: 1, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/a.mp3" },
        { pronunciation: "i", nativenm: "H_い", courseId: 3, order: 2, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/i.mp3" },
        { pronunciation: "u", nativenm: "H_う", courseId: 3, order: 3, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/u.mp3" },
        { pronunciation: "e", nativenm: "H_え", courseId: 3, order: 4, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/e.mp3" },
        { pronunciation: "o", nativenm: "H_お", courseId: 3, order: 5, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/o.mp3" },
        { pronunciation: "ka", nativenm: "H_か", courseId: 3, order: 6, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ka.mp3" },
        { pronunciation: "ki", nativenm: "H_き", courseId: 3, order: 7, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ki.mp3" },
        { pronunciation: "ku", nativenm: "H_く", courseId: 3, order: 8, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ku.mp3" },
        { pronunciation: "ke", nativenm: "H_け", courseId: 3, order: 9, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ke.mp3" },
        { pronunciation: "ko", nativenm: "H_こ", courseId: 3, order: 10, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ko.mp3" },
        { pronunciation: "sa", nativenm: "H_さ", courseId: 3, order: 11, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/sa.mp3" },
        { pronunciation: "shi", nativenm: "H_し", courseId: 3, order: 12, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/shi.mp3" },
        { pronunciation: "su", nativenm: "H_す", courseId: 3, order: 13, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/su.mp3" },
        { pronunciation: "se", nativenm: "H_せ", courseId: 3, order: 14, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/se.mp3" },
        { pronunciation: "so", nativenm: "H_そ", courseId: 3, order: 15, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/so.mp3" },
        { pronunciation: "ta", nativenm: "H_た", courseId: 3, order: 16, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ta.mp3" },
        { pronunciation: "chi", nativenm: "H_ち", courseId: 3, order: 17, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/chi.mp3" },
        { pronunciation: "tsu", nativenm: "H_つ", courseId: 3, order: 18, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/tsu.mp3" },
        { pronunciation: "te", nativenm: "H_て", courseId: 3, order: 19, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/te.mp3" },
        { pronunciation: "to", nativenm: "H_と", courseId: 3, order: 20, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/to.mp3" },
        { pronunciation: "na", nativenm: "H_な", courseId: 3, order: 21, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/na.mp3" },
        { pronunciation: "ni", nativenm: "H_に", courseId: 3, order: 22, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ni.mp3" },
        { pronunciation: "nu", nativenm: "H_ぬ", courseId: 3, order: 23, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/nu.mp3" },
        { pronunciation: "ne", nativenm: "H_ね", courseId: 3, order: 24, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ne.mp3" },
        { pronunciation: "no", nativenm: "H_の", courseId: 3, order: 25, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/no.mp3" },
        { pronunciation: "ha", nativenm: "H_は", courseId: 3, order: 26, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ha.mp3" },
        { pronunciation: "hi", nativenm: "H_ひ", courseId: 3, order: 27, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/hi.mp3" },
        { pronunciation: "fu", nativenm: "H_ふ", courseId: 3, order: 28, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/fu.mp3" },
        { pronunciation: "he", nativenm: "H_へ", courseId: 3, order: 29, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/he.mp3" },
        { pronunciation: "ho", nativenm: "H_ほ", courseId: 3, order: 30, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ho.mp3" },
        { pronunciation: "ma", nativenm: "H_ま", courseId: 3, order: 31, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ma.mp3" },
        { pronunciation: "mi", nativenm: "H_み", courseId: 3, order: 32, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/mi.mp3" },
        { pronunciation: "mu", nativenm: "H_む", courseId: 3, order: 33, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/mu.mp3" },
        { pronunciation: "me", nativenm: "H_め", courseId: 3, order: 34, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/me.mp3" },
        { pronunciation: "mo", nativenm: "H_も", courseId: 3, order: 35, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/mo.mp3" },
        { pronunciation: "ya", nativenm: "H_や", courseId: 3, order: 36, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ya.mp3" },
        { pronunciation: "yu", nativenm: "H_ゆ", courseId: 3, order: 37, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/yu.mp3" },
        { pronunciation: "yo", nativenm: "H_よ", courseId: 3, order: 38, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/yo.mp3" },
        { pronunciation: "ra", nativenm: "H_ら", courseId: 3, order: 39, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ra.mp3" },
        { pronunciation: "ri", nativenm: "H_り", courseId: 3, order: 40, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ri.mp3" },
        { pronunciation: "ru", nativenm: "H_る", courseId: 3, order: 41, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ru.mp3" },
        { pronunciation: "re", nativenm: "H_れ", courseId: 3, order: 42, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/re.mp3" },
        { pronunciation: "ro", nativenm: "H_ろ", courseId: 3, order: 43, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/ro.mp3" },
        { pronunciation: "wa", nativenm: "H_わ", courseId: 3, order: 44, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/wa.mp3" },
        { pronunciation: "wo", nativenm: "H_を", courseId: 3, order: 45, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/wo.mp3" },
        { pronunciation: "n", nativenm: "H_ん", courseId: 3, order: 46, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/hiragana/n.mp3" },
    
        // Katakana (ア - ン)
        { pronunciation: "a", nativenm: "K_ア", courseId: 3, order: 1, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/a.mp3" },
        { pronunciation: "i", nativenm: "K_イ", courseId: 3, order: 2, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/i.mp3" },
        { pronunciation: "u", nativenm: "K_ウ", courseId: 3, order: 3, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/u.mp3" },
        { pronunciation: "e", nativenm: "K_エ", courseId: 3, order: 4, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/e.mp3" },
        { pronunciation: "o", nativenm: "K_オ", courseId: 3, order: 5, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/o.mp3" },
        { pronunciation: "ka", nativenm: "K_カ", courseId: 3, order: 6, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ka.mp3" },
        { pronunciation: "ki", nativenm: "K_キ", courseId: 3, order: 7, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ki.mp3" },
        { pronunciation: "ku", nativenm: "K_ク", courseId: 3, order: 8, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ku.mp3" },
        { pronunciation: "ke", nativenm: "K_ケ", courseId: 3, order: 9, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ke.mp3" },
        { pronunciation: "ko", nativenm: "K_コ", courseId: 3, order: 10, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ko.mp3" },
        { pronunciation: "sa", nativenm: "K_サ", courseId: 3, order: 11, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/sa.mp3" },
        { pronunciation: "shi", nativenm: "K_シ", courseId: 3, order: 12, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/shi.mp3" },
        { pronunciation: "su", nativenm: "K_ス", courseId: 3, order: 13, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/su.mp3" },
        { pronunciation: "se", nativenm: "K_セ", courseId: 3, order: 14, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/se.mp3" },
        { pronunciation: "so", nativenm: "K_ソ", courseId: 3, order: 15, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/so.mp3" },
        { pronunciation: "ta", nativenm: "K_タ", courseId: 3, order: 16, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ta.mp3" },
        { pronunciation: "chi", nativenm: "K_チ", courseId: 3, order: 17, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/chi.mp3" },
        { pronunciation: "tsu", nativenm: "K_ツ", courseId: 3, order: 18, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/tsu.mp3" },
        { pronunciation: "te", nativenm: "K_テ", courseId: 3, order: 19, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/te.mp3" },
        { pronunciation: "to", nativenm: "K_ト", courseId: 3, order: 20, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/to.mp3" },
        { pronunciation: "na", nativenm: "K_ナ", courseId: 3, order: 21, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/na.mp3" },
        { pronunciation: "ni", nativenm: "K_ニ", courseId: 3, order: 22, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ni.mp3" },
        { pronunciation: "nu", nativenm: "K_ヌ", courseId: 3, order: 23, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/nu.mp3" },
        { pronunciation: "ne", nativenm: "K_ネ", courseId: 3, order: 24, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ne.mp3" },
        { pronunciation: "no", nativenm: "K_ノ", courseId: 3, order: 25, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/no.mp3" },
        { pronunciation: "ha", nativenm: "K_ハ", courseId: 3, order: 26, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ha.mp3" },
        { pronunciation: "hi", nativenm: "K_ヒ", courseId: 3, order: 27, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/hi.mp3" },
        { pronunciation: "fu", nativenm: "K_フ", courseId: 3, order: 28, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/fu.mp3" },
        { pronunciation: "he", nativenm: "K_ヘ", courseId: 3, order: 29, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/he.mp3" },
        { pronunciation: "ho", nativenm: "K_ホ", courseId: 3, order: 30, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ho.mp3" },
        { pronunciation: "ma", nativenm: "K_マ", courseId: 3, order: 31, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ma.mp3" },
        { pronunciation: "mi", nativenm: "K_ミ", courseId: 3, order: 32, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/mi.mp3" },
        { pronunciation: "mu", nativenm: "K_ム", courseId: 3, order: 33, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/mu.mp3" },
        { pronunciation: "me", nativenm: "K_メ", courseId: 3, order: 34, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/me.mp3" },
        { pronunciation: "mo", nativenm: "K_モ", courseId: 3, order: 35, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/mo.mp3" },
        { pronunciation: "ya", nativenm: "K_ヤ", courseId: 3, order: 36, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ya.mp3" },
        { pronunciation: "yu", nativenm: "K_ユ", courseId: 3, order: 37, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/yu.mp3" },
        { pronunciation: "yo", nativenm: "K_ヨ", courseId: 3, order: 38, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/yo.mp3" },
        { pronunciation: "ra", nativenm: "K_ラ", courseId: 3, order: 39, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ra.mp3" },
        { pronunciation: "ri", nativenm: "K_リ", courseId: 3, order: 40, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ri.mp3" },
        { pronunciation: "ru", nativenm: "K_ル", courseId: 3, order: 41, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ru.mp3" },
        { pronunciation: "re", nativenm: "K_レ", courseId: 3, order: 42, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/re.mp3" },
        { pronunciation: "ro", nativenm: "K_ロ", courseId: 3, order: 43, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/ro.mp3" },
        { pronunciation: "wa", nativenm: "K_ワ", courseId: 3, order: 44, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/wa.mp3" },
        { pronunciation: "wo", nativenm: "K_ヲ", courseId: 3, order: 45, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/wo.mp3" },
        { pronunciation: "n", nativenm: "K_ン", courseId: 3, order: 46, type: "alphabet", audioSrc: "Basics/audio/japanese/alpha/katakana/n.mp3" },



        // marathi alpha
        { pronunciation: "a", nativenm: "अ", courseId: 4, order: 1, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/अ.mp3" },
        { pronunciation: "aa", nativenm: "आ", courseId: 4, order: 2, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/आ.mp3" },
        { pronunciation: "i", nativenm: "इ", courseId: 4, order: 3, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/इ.mp3" },
        { pronunciation: "ii", nativenm: "ई", courseId: 4, order: 4, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ई.mp3" },
        { pronunciation: "u", nativenm: "उ", courseId: 4, order: 5, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/उ.mp3" },
        { pronunciation: "uu", nativenm: "ऊ", courseId: 4, order: 6, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ऊ.mp3" },
        { pronunciation: "ru", nativenm: "ऋ", courseId: 4, order: 7, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ऋ.mp3" },
        { pronunciation: "e", nativenm: "ए", courseId: 4, order: 8, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ए.mp3" },
        { pronunciation: "ai", nativenm: "ऐ", courseId: 4, order: 9, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ऐ.mp3" },
        { pronunciation: "o", nativenm: "ओ", courseId: 4, order: 10, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ओ.mp3" },
        { pronunciation: "au", nativenm: "औ", courseId: 4, order: 11, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/औ.mp3" },
        { pronunciation: "an", nativenm: "अं", courseId: 4, order: 12, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/अं.mp3" },
        { pronunciation: "ah", nativenm: "अः", courseId: 4, order: 13, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/अः.mp3" },
        { pronunciation: "ka", nativenm: "क", courseId: 4, order: 14, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/क.mp3" },
        { pronunciation: "kha", nativenm: "ख", courseId: 4, order: 15, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ख.mp3" },
        { pronunciation: "ga", nativenm: "ग", courseId: 4, order: 16, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ग.mp3" },
        { pronunciation: "gha", nativenm: "घ", courseId: 4, order: 17, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/घ.mp3" },
        { pronunciation: "nga", nativenm: "ङ", courseId: 4, order: 18, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ङ.mp3" },
        { pronunciation: "cha", nativenm: "च", courseId: 4, order: 19, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/च.mp3" },
        { pronunciation: "chha", nativenm: "छ", courseId: 4, order: 20, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/छ.mp3" },
        { pronunciation: "ja", nativenm: "ज", courseId: 4, order: 21, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ज.mp3" },
        { pronunciation: "jha", nativenm: "झ", courseId: 4, order: 22, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/झ.mp3" },
        { pronunciation: "nya", nativenm: "ञ", courseId: 4, order: 23, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ञ.mp3" },
        { pronunciation: "ta", nativenm: "ट", courseId: 4, order: 24, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ट.mp3" },
        { pronunciation: "tha", nativenm: "ठ", courseId: 4, order: 25, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ठ.mp3" },
        { pronunciation: "da", nativenm: "ड", courseId: 4, order: 26, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ड.mp3" },
        { pronunciation: "dha", nativenm: "ढ", courseId: 4, order: 27, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ढ.mp3" },
        { pronunciation: "na", nativenm: "ण", courseId: 4, order: 28, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ण.mp3" },
        { pronunciation: "ta", nativenm: "त", courseId: 4, order: 29, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/त.mp3" },
        { pronunciation: "tha", nativenm: "थ", courseId: 4, order: 30, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/थ.mp3" },
        { pronunciation: "da", nativenm: "द", courseId: 4, order: 31, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/द.mp3" },
        { pronunciation: "dha", nativenm: "ध", courseId: 4, order: 32, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ध.mp3" },
        { pronunciation: "na", nativenm: "न", courseId: 4, order: 33, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/न.mp3" },
        { pronunciation: "pa", nativenm: "प", courseId: 4, order: 34, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/प.mp3" },
        { pronunciation: "pha", nativenm: "फ", courseId: 4, order: 35, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/फ.mp3" },
        { pronunciation: "ba", nativenm: "ब", courseId: 4, order: 36, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ब.mp3" },
        { pronunciation: "bha", nativenm: "भ", courseId: 4, order: 37, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/भ.mp3" },
        { pronunciation: "ma", nativenm: "म", courseId: 4, order: 38, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/म.mp3" },
        { pronunciation: "ya", nativenm: "य", courseId: 4, order: 39, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/य.mp3" },
        { pronunciation: "ra", nativenm: "र", courseId: 4, order: 40, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/र.mp3" },
        { pronunciation: "la", nativenm: "ल", courseId: 4, order: 41, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ल.mp3" },
        { pronunciation: "va", nativenm: "व", courseId: 4, order: 42, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/व.mp3" },
        { pronunciation: "sha", nativenm: "श", courseId: 4, order: 43, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/श.mp3" },
        { pronunciation: "shha", nativenm: "ष", courseId: 4, order: 44, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ष.mp3" },
        { pronunciation: "sa", nativenm: "स", courseId: 4, order: 45, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/स.mp3" },
        { pronunciation: "ha", nativenm: "ह", courseId: 4, order: 46, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ह.mp3" },
        { pronunciation: "laa", nativenm: "ळ", courseId: 4, order: 47, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ळ.mp3" },
        { pronunciation: "ksha", nativenm: "क्ष", courseId: 4, order: 48, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/क्ष.mp3" },
        { pronunciation: "gya", nativenm: "ज्ञ", courseId: 4, order: 49, type: "alphabet", audioSrc: "/Basics/audio/marathi/alpha/ज्ञ.mp3" },
      ]);

      
        
      

    await db.insert(schema.lessons).values([
        //Spanish
        { id: 1, unitId: 1, order: 1, title: "Nouns" },
        { id: 2, unitId: 1, order: 2, title: "Nouns" },
        { id: 3, unitId: 1, order: 3, title: "Nouns" },
        { id: 4, unitId: 1, order: 4, title: "Pronouns" },
        { id: 5, unitId: 1, order: 5, title: "Pronouns"},
        { id: 6, unitId: 1, order: 6, title: "Pronouns"},
        { id: 7, unitId: 1, order: 7, title: "Verbs"},
        { id: 8, unitId: 1, order: 8, title: "Verbs"},
        { id: 9, unitId: 1, order: 9, title: "Verbs"},
        { id: 10, unitId: 1, order: 10, title: "Adjectives"},
        { id: 11, unitId: 1, order: 11, title: "Adjectives"},
        { id: 12, unitId: 1, order: 12, title: "Adjectives"},
        { id: 13, unitId: 1, order: 13, title: "Easy Sentences"},
        { id: 14, unitId: 1, order: 14, title: "Easy Sentences"},
        { id: 15, unitId: 1, order: 15, title: "Easy Sentences"},
        { id: 16, unitId: 1, order: 16, title: "Intermediate Sentences"},
        { id: 17, unitId: 1, order: 17, title: "Intermediate Sentences"},
        { id: 18, unitId: 1, order: 18, title: "Intermediate Sentences"},
        { id: 19, unitId: 1, order: 19, title: "Difficult Sentences"},
        { id: 20, unitId: 1, order: 20, title: "Difficult Sentences"},
        { id: 21, unitId: 1, order: 21, title: "Difficult Sentences"},
        // french 
        { id: 22, unitId: 2, order: 1, title: "Nouns" },
        { id: 23, unitId: 2, order: 2, title: "Nouns" },
        { id: 24, unitId: 2, order: 3, title: "Nouns" },
        { id: 25, unitId: 2, order: 4, title: "Pronouns" },
        { id: 26, unitId: 2, order: 5, title: "Pronouns"},
        { id: 27, unitId: 2, order: 6, title: "Pronouns"},
        { id: 28, unitId: 2, order: 7, title: "Verbs"},
        { id: 29, unitId: 2, order: 8, title: "Verbs"},
        { id: 30, unitId: 2, order: 9, title: "Verbs"},
        { id: 31, unitId: 2, order: 10, title: "Adjectives"},
        { id: 32, unitId: 2, order: 11, title: "Adjectives"},
        { id: 33, unitId: 2, order: 12, title: "Adjectives"},
        { id: 34, unitId: 2, order: 13, title: "Easy Sentences"},
        { id: 35, unitId: 2, order: 14, title: "Easy Sentences"},
        { id: 36, unitId: 2, order: 15, title: "Easy Sentences"},
        { id: 37, unitId: 2, order: 16, title: "Intermediate Sentences"},
        { id: 38, unitId: 2, order: 17, title: "Intermediate Sentences"},
        { id: 39, unitId: 2, order: 18, title: "Intermediate Sentences"},
        { id: 40, unitId: 2, order: 19, title: "Difficult Sentences"},
        { id: 41, unitId: 2, order: 20, title: "Difficult Sentences"},
        { id: 42, unitId: 2, order: 21, title: "Difficult Sentences"},
        //japnese
        { id: 43, unitId: 3, order: 1, title: "Nouns" },
        { id: 44, unitId: 3, order: 2, title: "Nouns" },
        { id: 45, unitId: 3, order: 3, title: "Nouns" },
        { id: 46, unitId: 3, order: 4, title: "Pronouns" },
        { id: 47, unitId: 3, order: 5, title: "Pronouns"},
        { id: 48, unitId: 3, order: 6, title: "Pronouns"},
        { id: 49, unitId: 3, order: 7, title: "Verbs"},
        { id: 50, unitId: 3, order: 8, title: "Verbs"},
        { id: 51, unitId: 3, order: 9, title: "Verbs"},
        { id: 52, unitId: 3, order: 10, title: "Adjectives"},
        { id: 53, unitId: 3, order: 11, title: "Adjectives"},
        { id: 54, unitId: 3, order: 12, title: "Adjectives"},
        { id: 55, unitId: 3, order: 13, title: "Easy Sentences"},
        { id: 56, unitId: 3, order: 14, title: "Easy Sentences"},
        { id: 57, unitId: 3, order: 15, title: "Easy Sentences"},
        { id: 58, unitId: 3, order: 16, title: "Intermediate Sentences"},
        { id: 59, unitId: 3, order: 17, title: "Intermediate Sentences"},
        { id: 60, unitId: 3, order: 18, title: "Intermediate Sentences"},
        { id: 61, unitId: 3, order: 19, title: "Difficult Sentences"},
        { id: 62, unitId: 3, order: 20, title: "Difficult Sentences"},
        { id: 63, unitId: 3, order: 21, title: "Difficult Sentences"},

        //marathi
        { id: 64, unitId: 4, order: 1, title: "Nouns" },
        { id: 65, unitId: 4, order: 2, title: "Nouns" },
        { id: 66, unitId: 4, order: 3, title: "Nouns" },
        { id: 67, unitId: 4, order: 4, title: "Pronouns" },
        { id: 68, unitId: 4, order: 5, title: "Pronouns"},
        { id: 69, unitId: 4, order: 6, title: "Pronouns"},
        { id: 70, unitId: 4, order: 7, title: "Verbs"},
        { id: 71, unitId: 4, order: 8, title: "Verbs"},
        { id: 72, unitId: 4, order: 9, title: "Verbs"},
        { id: 73, unitId: 4, order: 10, title: "Adjectives"},
        { id: 74, unitId: 4, order: 11, title: "Adjectives"},
        { id: 75, unitId: 4, order: 12, title: "Adjectives"},
        { id: 76, unitId: 4, order: 13, title: "Easy Sentences"},
        { id: 77, unitId: 4, order: 14, title: "Easy Sentences"},
        { id: 78, unitId: 4, order: 15, title: "Easy Sentences"},
        { id: 79, unitId: 4, order: 16, title: "Intermediate Sentences"},
        { id: 80, unitId: 4, order: 17, title: "Intermediate Sentences"},
        { id: 81, unitId: 4, order: 18, title: "Intermediate Sentences"},
        { id: 82, unitId: 4, order: 19, title: "Difficult Sentences"},
        { id: 83, unitId: 4, order: 20, title: "Difficult Sentences"},
        { id: 84, unitId: 4, order: 21, title: "Difficult Sentences"},
    ]);

    await db.insert(schema.challenges).values([
       //spanish
   // Nouns
{ id: 1, lessonId: 1, type: "SELECT", order: 1, question: "How do you say 'the man' in Spanish?" },
{ id: 2, lessonId: 1, type: "SELECT", order: 2, question: "How do you say 'the woman' in Spanish?" },
{ id: 3, lessonId: 1, type: "SELECT", order: 3, question: "How do you say 'the robot' in Spanish?" },

{ id: 4, lessonId: 2, type: "SELECT", order: 1, question: "How do you say 'the car' in Spanish?" },
{ id: 5, lessonId: 2, type: "SELECT", order: 2, question: "How do you say 'the house' in Spanish?" },
{ id: 6, lessonId: 2, type: "SELECT", order: 3, question: "How do you say 'the book' in Spanish?" },

{ id: 7, lessonId: 3, type: "SELECT", order: 1, question: "How do you say 'the tree' in Spanish?" },
{ id: 8, lessonId: 3, type: "SELECT", order: 2, question: "How do you say 'the dog' in Spanish?" },
{ id: 9, lessonId: 3, type: "SELECT", order: 3, question: "How do you say 'the cat' in Spanish?" },

  // Pronouns
{ id: 10, lessonId: 4, type: "ASSIST", order: 1, question: "How do you say 'I' in Spanish?" },
{ id: 11, lessonId: 4, type: "ASSIST", order: 2, question: "How do you say 'you' in Spanish?" },
{ id: 12, lessonId: 4, type: "ASSIST", order: 3, question: "How do you say 'he' in Spanish?" },

{ id: 13, lessonId: 5, type: "ASSIST", order: 1, question: "How do you say 'she' in Spanish?" },
{ id: 14, lessonId: 5, type: "ASSIST", order: 2, question: "How do you say 'they' in Spanish?" },
{ id: 15, lessonId: 5, type: "ASSIST", order: 3, question: "Complete: 'He is running.' → '__ está corriendo.'" },

{ id: 16, lessonId: 6, type: "ASSIST", order: 1, question: "Complete: 'She is eating.' → 'Ella __ comiendo.'" },
{ id: 17, lessonId: 6, type: "ASSIST", order: 2, question: "Complete: 'We are playing.' → 'Nosotros __ jugando.'" },
{ id: 18, lessonId: 6, type: "ASSIST", order: 3, question: "Complete: 'They are studying.' → 'Ellos __ estudiando.'" },

  // Verbs
{ id: 19, lessonId: 7, type: "SELECT", order: 1, question: "How do you say 'to eat' in Spanish?" },
{ id: 20, lessonId: 7, type: "SELECT", order: 2, question: "How do you say 'to run' in Spanish?" },
{ id: 21, lessonId: 7, type: "SELECT", order: 3, question: "How do you say 'to write' in Spanish?" },

{ id: 22, lessonId: 8, type: "SELECT", order: 1, question: "How do you say 'to read' in Spanish?" },
{ id: 23, lessonId: 8, type: "SELECT", order: 2, question: "How do you say 'to walk' in Spanish?" },
{ id: 24, lessonId: 8, type: "SELECT", order: 3, question: "How do you say 'to speak' in Spanish?" },

{ id: 25, lessonId: 9, type: "ASSIST", order: 1, question: "Complete the sentence: 'I am reading the book.' → 'Yo estoy leyendo __.'" },
{ id: 26, lessonId: 9, type: "ASSIST", order: 2, question: "Complete the sentence: 'I am driving the car.' → 'Yo estoy conduciendo __.'" },
{ id: 27, lessonId: 9, type: "ASSIST", order: 3, question: "Complete the sentence: 'She is writing a letter.' → 'Ella está escribiendo __.'" },

//Adjectives
{ id: 28, lessonId: 10, type: "ASSIST", order: 1, question: "How do you say 'big' in Spanish?" },
{ id: 29, lessonId: 10, type: "ASSIST", order: 2, question: "How do you say 'small' in Spanish?" },
{ id: 30, lessonId: 10, type: "ASSIST", order: 3, question: "How do you say 'fast' in Spanish?" },

{ id: 31, lessonId: 11, type: "ASSIST", order: 1, question: "How do you say 'slow' in Spanish?" },
{ id: 32, lessonId: 11, type: "ASSIST", order: 2, question: "How do you say 'beautiful' in Spanish?" },
{ id: 33, lessonId: 11, type: "ASSIST", order: 3, question: "How do you say 'strong' in Spanish?" },

{ id: 34, lessonId: 12, type: "ASSIST", order: 1, question: "Complete: 'The car is big.' → 'El coche es __.'" },
{ id: 35, lessonId: 12, type: "ASSIST", order: 2, question: "Complete: 'The flower is beautiful.' → 'La flor es __.'" },
{ id: 36, lessonId: 12, type: "ASSIST", order: 3, question: "Complete: 'The boy is strong.' → 'El niño es __.'" },

// Sentences
// Easy Sentences
{ id: 37, lessonId: 13, type: "ASSIST", order: 1, question: "Translate: This is a cat." },
{ id: 38, lessonId: 13, type: "ASSIST", order: 2, question: "Translate: The sun is bright." },
{ id: 39, lessonId: 13, type: "ASSIST", order: 3, question: "Translate: I have a book." },

{ id: 40, lessonId: 14, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.'" },
{ id: 41, lessonId: 14, type: "ASSIST", order: 2, question: "Translate: 'We are friends.'" },
{ id: 42, lessonId: 14, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.'" },

{ id: 43, lessonId: 15, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.'" },
{ id: 44, lessonId: 15, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.'" },
{ id: 45, lessonId: 15, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.'" },
{ id: 46, lessonId: 15, type: "ASSIST", order: 4, question: "Translate: 'She is happy.'" },

// Intermediate Sentences
{ id: 47, lessonId: 16, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Spanish book.'" },
{ id: 48, lessonId: 16, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.'" },
{ id: 49, lessonId: 16, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.'" },

{ id: 50, lessonId: 17, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.'" },
{ id: 51, lessonId: 17, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.'" },
{ id: 52, lessonId: 17, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.'" },

{ id: 53, lessonId: 18, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.'" },
{ id: 54, lessonId: 18, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.'" },
{ id: 55, lessonId: 18, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.'" },
{ id: 56, lessonId: 18, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.'" },

// Difficult Sentences
{ id: 57, lessonId: 19, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.'" },
{ id: 58, lessonId: 19, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.'" },
{ id: 59, lessonId: 19, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.'" },

{ id: 60, lessonId: 20, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.'" },
{ id: 61, lessonId: 20, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.'" },
{ id: 62, lessonId: 20, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.'" },

{ id: 63, lessonId: 21, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left.'" },
{ id: 64, lessonId: 21, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.'" },
{ id: 65, lessonId: 21, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.'" },
{ id: 66, lessonId: 21, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.'" },

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//French
// Nouns
{ id: 67, lessonId: 22, type: "SELECT", order: 1, question: "How do you say 'the man' in French?" },
{ id: 68, lessonId: 22, type: "SELECT", order: 2, question: "How do you say 'the woman' in French?" },
{ id: 69, lessonId: 22, type: "SELECT", order: 3, question: "How do you say 'the robot' in French?" },

{ id: 70, lessonId: 23, type: "SELECT", order: 1, question: "How do you say 'the car' in French?" },
{ id: 71, lessonId: 23, type: "SELECT", order: 2, question: "How do you say 'the house' in French?" },
{ id: 72, lessonId: 23, type: "SELECT", order: 3, question: "How do you say 'the book' in French?" },

{ id: 73, lessonId: 24, type: "SELECT", order: 1, question: "How do you say 'the tree' in French?" },
{ id: 74, lessonId: 24, type: "SELECT", order: 2, question: "How do you say 'the dog' in French?" },
{ id: 75, lessonId: 24, type: "SELECT", order: 3, question: "How do you say 'the cat' in French?" },

// Pronouns
{ id: 76, lessonId: 25, type: "ASSIST", order: 1, question: "How do you say 'I' in French?" },
{ id: 77, lessonId: 25, type: "ASSIST", order: 2, question: "How do you say 'you' in French?" },
{ id: 78, lessonId: 25, type: "ASSIST", order: 3, question: "How do you say 'he' in French?" },

{ id: 79, lessonId: 26, type: "ASSIST", order: 1, question: "How do you say 'she' in French?" },
{ id: 80, lessonId: 26, type: "ASSIST", order: 2, question: "How do you say 'they' in French?" },
{ id: 81, lessonId: 26, type: "ASSIST", order: 3, question: "Complete: 'He is running.' → '__ court.'" },

{ id: 82, lessonId: 27, type: "ASSIST", order: 1, question: "Complete: 'She is eating.' → '___ mange.'" },
{ id: 83, lessonId: 27, type: "ASSIST", order: 2, question: "Complete: 'We are playing.' → '___ jouons.'" },
{ id: 84, lessonId: 27, type: "ASSIST", order: 3, question: "Complete: 'They are studying.' → '___ étudient.'" },

// Verbs
{ id: 85, lessonId: 28, type: "SELECT", order: 1, question: "How do you say 'to eat' in French?" },
{ id: 86, lessonId: 28, type: "SELECT", order: 2, question: "How do you say 'to run' in French?" },
{ id: 87, lessonId: 28, type: "SELECT", order: 3, question: "How do you say 'to write' in French?" },

{ id: 88, lessonId: 29, type: "SELECT", order: 1, question: "How do you say 'to read' in French?" },
{ id: 89, lessonId: 29, type: "SELECT", order: 2, question: "How do you say 'to walk' in French?" },
{ id: 90, lessonId: 29, type: "SELECT", order: 3, question: "How do you say 'to speak' in French?" },

{ id: 91, lessonId: 30, type: "ASSIST", order: 1, question: "Complete the sentence: 'I am reading the book.' → 'Je suis en train de lire __.'" },
{ id: 92, lessonId: 30, type: "ASSIST", order: 2, question: "Complete the sentence: 'I am driving the car.' → 'Je conduis __.'" },
{ id: 93, lessonId: 30, type: "ASSIST", order: 3, question: "Complete the sentence: 'She is writing a letter.' → 'Elle écrit __.'" },

// Adjectives
{ id: 94, lessonId: 31, type: "ASSIST", order: 1, question: "How do you say 'big' in French?" },
{ id: 95, lessonId: 31, type: "ASSIST", order: 2, question: "How do you say 'small' in French?" },
{ id: 96, lessonId: 31, type: "ASSIST", order: 3, question: "How do you say 'fast' in French?" },

{ id: 97, lessonId: 32, type: "ASSIST", order: 1, question: "How do you say 'slow' in French?" },
{ id: 98, lessonId: 32, type: "ASSIST", order: 2, question: "How do you say 'beautiful' in French?" },
{ id: 99, lessonId: 32, type: "ASSIST", order: 3, question: "How do you say 'strong' in French?" },

{ id: 100, lessonId: 33, type: "ASSIST", order: 1, question: "Complete: 'The car is big.' → 'La voiture est ___.'" },
{ id: 101, lessonId: 33, type: "ASSIST", order: 2, question: "Complete: 'The flower is beautiful.' → 'La fleur est ___.'" },
{ id: 102, lessonId: 33, type: "ASSIST", order: 3, question: "Complete: 'The boy is strong.' → 'Le garçon est ___.'" },

// Sentences
// Easy Sentences
{ id: 103, lessonId: 34, type: "ASSIST", order: 1, question: "Translate: 'This is a cat.'" },
{ id: 104, lessonId: 34, type: "ASSIST", order: 2, question: "Translate: 'The sun is bright.'" },
{ id: 105, lessonId: 34, type: "ASSIST", order: 3, question: "Translate: 'I have a book.'" },

{ id: 106, lessonId: 35, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.'" },
{ id: 107, lessonId: 35, type: "ASSIST", order: 2, question: "Translate: 'We are friends.'" },
{ id: 108, lessonId: 35, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.'" },

{ id: 109, lessonId: 36, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.'" },
{ id: 110, lessonId: 36, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.'" },
{ id: 111, lessonId: 36, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.'" },
{ id: 112, lessonId: 36, type: "ASSIST", order: 4, question: "Translate: 'She is happy.'" },

// Intermediate Sentences
{ id: 113, lessonId: 37, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Spanish book.'" },
{ id: 114, lessonId: 37, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.'" },
{ id: 115, lessonId: 37, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.'" },

{ id: 116, lessonId: 38, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.'" },
{ id: 117, lessonId: 38, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.'" },
{ id: 118, lessonId: 38, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.'" },

{ id: 119, lessonId: 39, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.'" },
{ id: 120, lessonId: 39, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.'" },
{ id: 121, lessonId: 39, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.'" },
{ id: 122, lessonId: 39, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.'" },

// Difficult Sentences
{ id: 123, lessonId: 40, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.'" },
{ id: 124, lessonId: 40, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.'" },
{ id: 125, lessonId: 40, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.'" },

{ id: 126, lessonId: 41, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.'" },
{ id: 127, lessonId: 41, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.'" },
{ id: 128, lessonId: 41, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.'" },

{ id: 129, lessonId: 42, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left.'" },
{ id: 130, lessonId: 42, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.'" },
{ id: 131, lessonId: 42, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.'" },
{ id: 132, lessonId: 42, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.'" },
        
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

// Japanese
// Nouns
{ id: 133, lessonId: 43, type: "SELECT", order: 1, question: "How do you say 'the man' in Japanese?" },
{ id: 134, lessonId: 43, type: "SELECT", order: 2, question: "How do you say 'the woman' in Japanese?" },
{ id: 135, lessonId: 43, type: "SELECT", order: 3, question: "How do you say 'the robot' in Japanese?" },
    
{ id: 136, lessonId: 44, type: "SELECT", order: 1, question: "How do you say 'the car' in Japanese?" },
{ id: 137, lessonId: 44, type: "SELECT", order: 2, question: "How do you say 'the house' in Japanese?" },
{ id: 138, lessonId: 44, type: "SELECT", order: 3, question: "How do you say 'the book' in Japanese?" },
    
{ id: 139, lessonId: 45, type: "SELECT", order: 1, question: "How do you say 'the tree' in Japanese?" },
{ id: 140, lessonId: 45, type: "SELECT", order: 2, question: "How do you say 'the dog' in Japanese?" },
{ id: 141, lessonId: 45, type: "SELECT", order: 3, question: "How do you say 'the cat' in Japanese?" },
    
// Pronouns
{ id: 142, lessonId: 46, type: "ASSIST", order: 1, question: "How do you say 'I' in Japanese?" },
{ id: 143, lessonId: 46, type: "ASSIST", order: 2, question: "How do you say 'you' in Japanese?" },
{ id: 144, lessonId: 46, type: "ASSIST", order: 3, question: "How do you say 'he' in Japanese?" },
    
{ id: 145, lessonId: 47, type: "ASSIST", order: 1, question: "How do you say 'she' in Japanese?" },
{ id: 146, lessonId: 47, type: "ASSIST", order: 2, question: "How do you say 'they' in Japanese?" },
{ id: 147, lessonId: 47, type: "ASSIST", order: 3, question: "Complete: 'He is running.' → '__ は走っています。'" },
    
{ id: 148, lessonId: 48, type: "ASSIST", order: 1, question: "Complete: 'She is eating.' → '___食べています。'" },
{ id: 149, lessonId: 48, type: "ASSIST", order: 2, question: "Complete: 'We are playing.' → '___遊んでいます。'" },
{ id: 150, lessonId: 48, type: "ASSIST", order: 3, question: "Complete: 'They are studying.' → '___勉強しています。'" },

    
// Verbs
{ id: 151, lessonId: 49, type: "SELECT", order: 1, question: "How do you say 'to eat' in Japanese?" },
{ id: 152, lessonId: 49, type: "SELECT", order: 2, question: "How do you say 'to run' in Japanese?" },
{ id: 153, lessonId: 49, type: "SELECT", order: 3, question: "How do you say 'to write' in Japanese?" },
    
{ id: 154, lessonId: 50, type: "SELECT", order: 1, question: "How do you say 'to read' in Japanese?" },
{ id: 155, lessonId: 50, type: "SELECT", order: 2, question: "How do you say 'to walk' in Japanese?" },
{ id: 156, lessonId: 50, type: "SELECT", order: 3, question: "How do you say 'to speak' in Japanese?" },
    
{ id: 157, lessonId: 51, type: "ASSIST", order: 1, question: "Complete the sentence: 'I am ___ the book.' → '私は本を読んでいます。'" },
{ id: 158, lessonId: 51, type: "ASSIST", order: 2, question: "Complete the sentence: 'I am ___ the car.' → '私は車を運転しています。'" },
{ id: 159, lessonId: 51, type: "ASSIST", order: 3, question: "Complete the sentence: 'She is ___ a letter.' → '彼女は手紙を書いています。'" },
    
// Adjectives
{ id: 160, lessonId: 52, type: "ASSIST", order: 1, question: "How do you say 'big' in Japanese?" },
{ id: 161, lessonId: 52, type: "ASSIST", order: 2, question: "How do you say 'small' in Japanese?" },
{ id: 162, lessonId: 52, type: "ASSIST", order: 3, question: "How do you say 'fast' in Japanese?" },
    
{ id: 163, lessonId: 53, type: "ASSIST", order: 1, question: "How do you say 'slow' in Japanese?" },
{ id: 164, lessonId: 53, type: "ASSIST", order: 2, question: "How do you say 'beautiful' in Japanese?" },
{ id: 165, lessonId: 53, type: "ASSIST", order: 3, question: "How do you say 'strong' in Japanese?" },
    
{ id: 166, lessonId: 54, type: "ASSIST", order: 1, question: "Complete: 'The car is big.' → '車は___です。'" },
{ id: 167, lessonId: 54, type: "ASSIST", order: 2, question: "Complete: 'The flower is beautiful.' → '花は___です。'" },
{ id: 168, lessonId: 54, type: "ASSIST", order: 3, question: "Complete: 'The boy is strong.' → '男の子は___です。'" },
    
// Sentences
// Easy Sentences (continued)
{ id: 169, lessonId: 55, type: "ASSIST", order: 1, question: "Translate: 'This is a cat.'" },
{ id: 170, lessonId: 55, type: "ASSIST", order: 2, question: "Translate: 'The sun is bright.'" },
{ id: 171, lessonId: 55, type: "ASSIST", order: 3, question: "Translate: 'I have a book.'" },
        
{ id: 172, lessonId: 56, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.'" },
{ id: 173, lessonId: 56, type: "ASSIST", order: 2, question: "Translate: 'We are friends.'" },
{ id: 174, lessonId: 56, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.'" },
        
{ id: 175, lessonId: 57, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.' " },
{ id: 176, lessonId: 57, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.'" },
{ id: 177, lessonId: 57, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.'" },
{ id: 178, lessonId: 57, type: "ASSIST", order: 4, question: "Translate: 'She is happy.'" },
        
// Intermediate Sentences
{ id: 179, lessonId: 58, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Japanese book.'" },
{ id: 180, lessonId: 58, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.'" },
{ id: 181, lessonId: 58, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.'" },
        
{ id: 182, lessonId: 59, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.'" },
{ id: 183, lessonId: 59, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.'" },
{ id: 184, lessonId: 59, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.'" },
        
{ id: 185, lessonId: 60, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.'" },
{ id: 186, lessonId: 60, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.'" },
{ id: 187, lessonId: 60, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.'" },
{ id: 188, lessonId: 60, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.'" },
        
// Difficult Sentences
{ id: 189, lessonId: 61, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.'" },
{ id: 190, lessonId: 61, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.'" },
{ id: 191, lessonId: 61, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.'" },
        
{ id: 192, lessonId: 62, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.'" },
{ id: 193, lessonId: 62, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.'" },
{ id: 194, lessonId: 62, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.'" },
        
{ id: 195, lessonId: 63, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left." },
{ id: 196, lessonId: 63, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.'" },
{ id: 197, lessonId: 63, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.'" },
{ id: 198, lessonId: 63, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.'" },

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

//Marathi
// Nouns
{ id: 199, lessonId: 64, type: "SELECT", order: 1, question: "How do you say 'the man' in Marathi?" },
{ id: 200, lessonId: 64, type: "SELECT", order: 2, question: "How do you say 'the woman' in Marathi?" },
{ id: 201, lessonId: 64, type: "SELECT", order: 3, question: "How do you say 'the robot' in Marathi?" },
        
{ id: 202, lessonId: 65, type: "SELECT", order: 1, question: "How do you say 'the car' in Marathi?" },
{ id: 203, lessonId: 65, type: "SELECT", order: 2, question: "How do you say 'the house' in Marathi?" },
{ id: 204, lessonId: 65, type: "SELECT", order: 3, question: "How do you say 'the book' in Marathi?" },
        
{ id: 205, lessonId: 66, type: "SELECT", order: 1, question: "How do you say 'the tree' in Marathi?" },
{ id: 206, lessonId: 66, type: "SELECT", order: 2, question: "How do you say 'the dog' in Marathi?" },
{ id: 207, lessonId: 66, type: "SELECT", order: 3, question: "How do you say 'the cat' in Marathi?" },
        
// Pronouns
{ id: 208, lessonId: 67, type: "ASSIST", order: 1, question: "How do you say 'I' in Marathi?" },
{ id: 209, lessonId: 67, type: "ASSIST", order: 2, question: "How do you say 'you' in Marathi?" },
{ id: 210, lessonId: 67, type: "ASSIST", order: 3, question: "How do you say 'he' in Marathi?" },
        
{ id: 211, lessonId: 68, type: "ASSIST", order: 1, question: "How do you say 'she' in Marathi?" },
{ id: 212, lessonId: 68, type: "ASSIST", order: 2, question: "How do you say 'they' in Marathi?" },
{ id: 213, lessonId: 68, type: "ASSIST", order: 3, question: "Translate: 'He is running.' → '__ धावत आहे.'" },
        
{ id: 214, lessonId: 69, type: "ASSIST", order: 1, question: "Translate: 'She is eating.' → 'ती __ खात आहे.'" },
{ id: 215, lessonId: 69, type: "ASSIST", order: 2, question: "Translate: 'We are playing.' → 'आम्ही __ खेळत आहोत.'" },
{ id: 216, lessonId: 69, type: "ASSIST", order: 3, question: "Translate: 'They are studying.' → 'ते __ शिकत आहेत.'" },
        
// Verbs
{ id: 217, lessonId: 70, type: "SELECT", order: 1, question: "How do you say 'to eat' in Marathi?" },
{ id: 218, lessonId: 70, type: "SELECT", order: 2, question: "How do you say 'to run' in Marathi?" },
{ id: 219, lessonId: 70, type: "SELECT", order: 3, question: "How do you say 'to write' in Marathi?" },
        
{ id: 220, lessonId: 71, type: "SELECT", order: 1, question: "How do you say 'to read' in Marathi?" },
{ id: 221, lessonId: 71, type: "SELECT", order: 2, question: "How do you say 'to walk' in Marathi?" },
{ id: 222, lessonId: 71, type: "SELECT", order: 3, question: "How do you say 'to speak' in Marathi?" },
        
{ id: 223, lessonId: 72, type: "ASSIST", order: 1, question: "Complete the sentence: 'I am reading the book.' → 'मी पुस्तक आहे.'" },
{ id: 224, lessonId: 72, type: "ASSIST", order: 2, question: "Complete the sentence: 'I am driving the car.' → 'मी गाडी आहे.'" },
{ id: 225, lessonId: 72, type: "ASSIST", order: 3, question: "Complete the sentence: 'She is writing a letter.' → 'ती पत्र आहे.'" },
        
// Adjectives
{ id: 226, lessonId: 73, type: "ASSIST", order: 1, question: "How do you say 'big' in Marathi?" },
{ id: 227, lessonId: 73, type: "ASSIST", order: 2, question: "How do you say 'small' in Marathi?" },
{ id: 228, lessonId: 73, type: "ASSIST", order: 3, question: "How do you say 'fast' in Marathi?" },
        
{ id: 229, lessonId: 74, type: "ASSIST", order: 1, question: "How do you say 'slow' in Marathi?" },
{ id: 230, lessonId: 74, type: "ASSIST", order: 2, question: "How do you say 'beautiful' in Marathi?" },
{ id: 231, lessonId: 74, type: "ASSIST", order: 3, question: "How do you say 'strong' in Marathi?" },
        
{ id: 232, lessonId: 75, type: "ASSIST", order: 1, question: "Complete: 'The car is big.' → 'गाडी __ आहे.'" },
{ id: 233, lessonId: 75, type: "ASSIST", order: 2, question: "Complete: 'The flower is beautiful.' → 'फूल __ आहे.'" },
{ id: 234, lessonId: 75, type: "ASSIST", order: 3, question: "Complete: 'The boy is strong.' → 'मुलगा __ आहे.'" },
    
// Sentences
// Easy Sentences
{ id: 235, lessonId: 76, type: "ASSIST", order: 1, question: "Translate: 'This is a cat.'" },
{ id: 236, lessonId: 76, type: "ASSIST", order: 2, question: "Translate: 'The sun is bright.'" },
{ id: 237, lessonId: 76, type: "ASSIST", order: 3, question: "Translate: 'I have a book.'" },
    
{ id: 238, lessonId: 77, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.'" },
{ id: 239, lessonId: 77, type: "ASSIST", order: 2, question: "Translate: 'We are friends.'" },
{ id: 240, lessonId: 77, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.'" },
    
{ id: 241, lessonId: 78, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.'" },
{ id: 242, lessonId: 78, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.'" },
{ id: 243, lessonId: 78, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.'" },
{ id: 244, lessonId: 78, type: "ASSIST", order: 4, question: "Translate: 'She is happy.'" },
    
// Intermediate Sentences
{ id: 245, lessonId: 79, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Marathi book.'" },
{ id: 246, lessonId: 79, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.'" },
{ id: 247, lessonId: 79, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.'" },
    
{ id: 248, lessonId: 80, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.'" },
{ id: 249, lessonId: 80, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.'" },
{ id: 250, lessonId: 80, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.'" },
    
{ id: 251, lessonId: 81, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.'" },
{ id: 252, lessonId: 81, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.'" },
{ id: 253, lessonId: 81, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.'" },
{ id: 254, lessonId: 81, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.'" },
    
// Difficult Sentences
{ id: 255, lessonId: 82, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.'" },
{ id: 256, lessonId: 82, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.'" },
{ id: 257, lessonId: 82, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.'" },
    
{ id: 258, lessonId: 83, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.'" },
{ id: 259, lessonId: 83, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.'" },
{ id: 260, lessonId: 83, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.'" },
    
{ id: 261, lessonId: 84, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left.'" },
{ id: 262, lessonId: 84, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.'" },
{ id: 263, lessonId: 84, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.'" },
{ id: 264, lessonId: 84, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.'" },
]);
    
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/     
  
//options
await db.insert(schema.challengeOptions).values([
    //Spanish
// Lesson 1 Challenge Options
{ challengeId: 1, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "Basics/audio/spanish/option/es_robot.mp3" },
{ challengeId: 1, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "Basics/audio/spanish/option/es_woman.mp3" },
{ challengeId: 1, imageSrc: "/man.svg", correct: true, text: "el hombre", audioSrc: "Basics/audio/spanish/option/es_man.mp3" },

{ challengeId: 2, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "Basics/audio/spanish/option/es_man.mp3" },
{ challengeId: 2, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "Basics/audio/spanish/option/es_robot.mp3" },
{ challengeId: 2, imageSrc: "/woman.svg", correct: true, text: "la mujer", audioSrc: "Basics/audio/spanish/option/es_woman.mp3" },

{ challengeId: 3, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "Basics/audio/spanish/option/es_woman.mp3" },
{ challengeId: 3, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "Basics/audio/spanish/option/es_man.mp3" },
{ challengeId: 3, imageSrc: "/robot.svg", correct: true, text: "el robot", audioSrc: "Basics/audio/spanish/option/es_robot.mp3" },

// Lesson 2 Challenge Options
{ challengeId: 4, imageSrc: "/bicycle.svg", correct: false, text: "la bicicleta", audioSrc: "Basics/audio/spanish/option/es_bicycle.mp3" },
{ challengeId: 4, imageSrc: "/car.svg", correct: true, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },
{ challengeId: 4, imageSrc: "/house.svg", correct: false, text: "la casa", audioSrc: "Basics/audio/spanish/option/es_house.mp3" },

{ challengeId: 5, imageSrc: "/car.svg", correct: false, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },
{ challengeId: 5, imageSrc: "/house.svg", correct: true, text: "la casa", audioSrc: "Basics/audio/spanish/option/es_house.mp3" },
{ challengeId: 5, imageSrc: "/bicycle.svg", correct: false, text: "la bicicleta", audioSrc: "Basics/audio/spanish/option/es_bicycle.mp3" },

{ challengeId: 6, imageSrc: "/house.svg", correct: false, text: "la casa", audioSrc: "Basics/audio/spanish/option/es_house.mp3" },
{ challengeId: 6, imageSrc: "/book.svg", correct: true, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
{ challengeId: 6, imageSrc: "/car.svg", correct: false, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },

// Lesson 3 Challenge Options
{ challengeId: 7, imageSrc: "/dog.svg", correct: false, text: "el perro", audioSrc: "Basics/audio/spanish/option/es_dog.mp3" },
{ challengeId: 7, imageSrc: "/tree.svg", correct: true, text: "el árbol", audioSrc: "Basics/audio/spanish/option/es_tree.mp3" },
{ challengeId: 7, imageSrc: "/cat.svg", correct: false, text: "el gato", audioSrc: "Basics/audio/spanish/option/es_cat.mp3" },

{ challengeId: 8, imageSrc: "/cat.svg", correct: false, text: "el gato", audioSrc: "Basics/audio/spanish/option/es_cat.mp3" },
{ challengeId: 8, imageSrc: "/dog.svg", correct: true, text: "el perro", audioSrc: "Basics/audio/spanish/option/es_dog.mp3" },
{ challengeId: 8, imageSrc: "/tree.svg", correct: false, text: "el árbol", audioSrc: "Basics/audio/spanish/option/es_tree.mp3" },

{ challengeId: 9, imageSrc: "/tree.svg", correct: false, text: "el árbol", audioSrc: "Basics/audio/spanish/option/es_tree.mp3" },
{ challengeId: 9, imageSrc: "/dog.svg", correct: false, text: "el perro", audioSrc: "Basics/audio/spanish/option/es_dog.mp3" },
{ challengeId: 9, imageSrc: "/cat.svg", correct: true, text: "el gato", audioSrc: "Basics/audio/spanish/option/es_cat.mp3" },

// Lesson 4 Challenge Options
{ challengeId: 10, correct: true, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 10, correct: false, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },
{ challengeId: 10, correct: false, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },

{ challengeId: 11, correct: true, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },
{ challengeId: 11, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 11, correct: false, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },

{ challengeId: 12, correct: true, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 12, correct: false, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },
{ challengeId: 12, correct: false, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },

// Lesson 5 Challenge options
{ challengeId: 13, correct: true, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },
{ challengeId: 13, correct: false, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 13, correct: false, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },

{ challengeId: 14, correct: true, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },
{ challengeId: 14, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 14, correct: false, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },

{ challengeId: 15, correct: true, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 15, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 15, correct: false, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },

//6
{ challengeId: 16, correct: true, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },
{ challengeId: 16, correct: false, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 16, correct: false, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },

{ challengeId: 17, correct: true, text: "nosotros", audioSrc: "Basics/audio/spanish/option/es_we.mp3" },
{ challengeId: 17, correct: false, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },
{ challengeId: 17, correct: false, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },

{ challengeId: 18, correct: true, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },
{ challengeId: 18, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 18, correct: false, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },

// Lesson 7 Challenge Options
{ challengeId: 19, imageSrc: "/eat.svg", correct: true, text: "comer", audioSrc: "Basics/audio/spanish/option/es_eat.mp3" },
{ challengeId: 19, imageSrc: "/run.svg", correct: false, text: "correr", audioSrc: "Basics/audio/spanish/option/es_run.mp3" },
{ challengeId: 19, imageSrc: "/write.svg", correct: false, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },

{ challengeId: 20, imageSrc: "/run.svg", correct: true, text: "correr", audioSrc: "Basics/audio/spanish/option/es_run.mp3" },
{ challengeId: 20, imageSrc: "/walk.svg", correct: false, text: "caminar", audioSrc: "Basics/audio/spanish/option/es_walk.mp3" },
{ challengeId: 20, imageSrc: "/eat.svg", correct: false, text: "comer", audioSrc: "Basics/audio/spanish/option/es_eat.mp3" },

{ challengeId: 21, imageSrc: "/write.svg", correct: true, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },
{ challengeId: 21, imageSrc: "/read.svg", correct: false, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 21, imageSrc: "/speak.svg", correct: false, text: "hablar", audioSrc: "Basics/audio/spanish/option/es_speak.mp3" },

{ challengeId: 22, imageSrc: "/read.svg", correct: true, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 22, imageSrc: "/write.svg", correct: false, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },
{ challengeId: 22, imageSrc: "/speak.svg", correct: false, text: "hablar", audioSrc: "Basics/audio/spanish/option/es_speak.mp3" },

{ challengeId: 23, imageSrc: "/walk.svg", correct: true, text: "caminar", audioSrc: "Basics/audio/spanish/option/es_walk.mp3" },
{ challengeId: 23, imageSrc: "/run.svg", correct: false, text: "correr", audioSrc: "Basics/audio/spanish/option/es_run.mp3" },
{ challengeId: 23, imageSrc: "/eat.svg", correct: false, text: "comer", audioSrc: "Basics/audio/spanish/option/es_eat.mp3" },

{ challengeId: 24, imageSrc: "/speak.svg", correct: true, text: "hablar", audioSrc: "Basics/audio/spanish/option/es_speak.mp3" },
{ challengeId: 24, imageSrc: "/read.svg", correct: false, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 24, imageSrc: "/write.svg", correct: false, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },

{ challengeId: 25, correct: true, text: "leyendo", audioSrc: "Basics/audio/spanish/option/es_reading.mp3" },
{ challengeId: 25, correct: false, text: "escribiendo", audioSrc: "Basics/audio/spanish/option/es_writing.mp3" },
{ challengeId: 25, correct: false, text: "hablando", audioSrc: "Basics/audio/spanish/option/es_speaking.mp3" },

{ challengeId: 26, correct: true, text: "caminando", audioSrc: "Basics/audio/spanish/option/es_walking.mp3" },
{ challengeId: 26, correct: false, text: "corriendo", audioSrc: "Basics/audio/spanish/option/es_running.mp3" },
{ challengeId: 26, correct: false, text: "caminando", audioSrc: "Basics/audio/spanish/option/es_walking.mp3" },

{ challengeId: 27, correct: true, text: "escribiendo", audioSrc: "Basics/audio/spanish/option/es_writing.mp3" },
{ challengeId: 27, correct: false, text: "leyendo", audioSrc: "Basics/audio/spanish/option/es_reading.mp3" },
{ challengeId: 27, correct: false, text: "hablando", audioSrc: "Basics/audio/spanish/option/es_speaking.mp3" },

// Lesson 10 Challenge Options
{ challengeId: 28, correct: true, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 28, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 28, correct: false, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },

{ challengeId: 29, correct: true, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 29, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 29, correct: false, text: "lento", audioSrc: "Basics/audio/spanish/option/es_slow.mp3" },

{ challengeId: 30, correct: true, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },
{ challengeId: 30, correct: false, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 30, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },

// Lesson 11 Challenge Options
{ challengeId: 28, correct: true, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 28, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 28, correct: false, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },

{ challengeId: 29, correct: true, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 29, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 29, correct: false, text: "lento", audioSrc: "Basics/audio/spanish/option/es_slow.mp3" },

{ challengeId: 30, correct: true, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },
{ challengeId: 30, correct: false, text: "lento", audioSrc: "Basics/audio/spanish/option/es_slow.mp3" },
{ challengeId: 30, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },

{ challengeId: 31, correct: true, text: "lento", audioSrc: "Basics/audio/spanish/option/es_slow.mp3" },
{ challengeId: 31, correct: false, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },
{ challengeId: 31, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },

{ challengeId: 32, correct: true, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 32, correct: false, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 32, correct: false, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },

{ challengeId: 33, correct: true, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 33, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 33, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },

{ challengeId: 34, correct: true, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 34, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 34, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },

{ challengeId: 35, correct: true, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 35, correct: false, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 35, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },

{ challengeId: 36, correct: true, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 36, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 36, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
// Lesson 13 Challenge Options
{ challengeId: 37, correct: true, text: "Este es un gato.", audioSrc: "Basics/audio/spanish/option/es_this_is_a_cat.mp3" },
{ challengeId: 37, correct: false, text: "Este es un perro.", audioSrc: "Basics/audio/spanish/option/es_this_is_a_dog.mp3" },
{ challengeId: 37, correct: false, text: "Este es un libro.", audioSrc: "Basics/audio/spanish/option/es_this_is_a_book.mp3" },


{ challengeId: 38, correct: true, text: "El sol es brillante.", audioSrc: "Basics/audio/spanish/option/es_sun_is_bright.mp3" },
{ challengeId: 38, correct: false, text: "El cielo es azul.", audioSrc: "Basics/audio/spanish/option/es_sky_is_blue.mp3" },
{ challengeId: 38, correct: false, text: "La luna es grande.", audioSrc: "Basics/audio/spanish/option/es_moon_is_big.mp3" },

{ challengeId: 39, correct: true, text: "Tengo un libro.", audioSrc: "Basics/audio/spanish/option/es_i_have_a_book.mp3" },
{ challengeId: 39, correct: false, text: "Tengo una bicicleta.", audioSrc: "Basics/audio/spanish/option/es_i_have_a_bicycle.mp3" },
{ challengeId: 39, correct: false, text: "Tengo un reloj.", audioSrc: "Basics/audio/spanish/option/es_i_have_a_watch.mp3" },

{ challengeId: 40, correct: true, text: "Ella es mi hermana.", audioSrc: "Basics/audio/spanish/option/es_she_is_my_sister.mp3" },
{ challengeId: 40, correct: false, text: "Él es mi hermano.", audioSrc: "Basics/audio/spanish/option/es_he_is_my_brother.mp3" },
{ challengeId: 40, correct: false, text: "Ella es mi madre.", audioSrc: "Basics/audio/spanish/option/es_she_is_my_mother.mp3" },

{ challengeId: 41, correct: true, text: "Somos amigos.", audioSrc: "Basics/audio/spanish/option/es_we_are_friends.mp3" },
{ challengeId: 41, correct: false, text: "Somos enemigos.", audioSrc: "Basics/audio/spanish/option/es_we_are_enemies.mp3" },
{ challengeId: 41, correct: false, text: "Somos estudiantes.", audioSrc: "Basics/audio/spanish/option/es_we_are_students.mp3" },

{ challengeId: 42, correct: true, text: "El perro está corriendo.", audioSrc: "Basics/audio/spanish/option/es_dog_is_running.mp3" },
{ challengeId: 42, correct: false, text: "El perro está durmiendo.", audioSrc: "Basics/audio/spanish/option/es_dog_is_sleeping.mp3" },
{ challengeId: 42, correct: false, text: "El perro está ladrando.", audioSrc: "Basics/audio/spanish/option/es_dog_is_barking.mp3" },

{ challengeId: 43, correct: true, text: "Él es un maestro.", audioSrc: "Basics/audio/spanish/option/es_he_is_a_teacher.mp3" },
{ challengeId: 43, correct: false, text: "Él es un doctor.", audioSrc: "Basics/audio/spanish/option/es_he_is_a_doctor.mp3" },
{ challengeId: 43, correct: false, text: "Él es un policía.", audioSrc: "Basics/audio/spanish/option/es_he_is_a_policeman.mp3" },

{ challengeId: 44, correct: true, text: "La manzana es roja.", audioSrc: "Basics/audio/spanish/option/es_apple_is_red.mp3" },
{ challengeId: 44, correct: false, text: "La manzana es amarilla.", audioSrc: "Basics/audio/spanish/option/es_apple_is_yellow.mp3" },
{ challengeId: 44, correct: false, text: "La manzana es verde.", audioSrc: "Basics/audio/spanish/option/es_apple_is_green.mp3" },

{ challengeId: 45, correct: true, text: "Me gustan los mangos.", audioSrc: "Basics/audio/spanish/option/es_i_like_mangoes.mp3" },
{ challengeId: 45, correct: false, text: "Me gustan las manzanas.", audioSrc: "Basics/audio/spanish/option/es_i_like_apples.mp3" },
{ challengeId: 45, correct: false, text: "Me gustan las uvas.", audioSrc: "Basics/audio/spanish/option/es_i_like_grapes.mp3" },

{ challengeId: 46, correct: true, text: "Ella está feliz.", audioSrc: "Basics/audio/spanish/option/es_she_is_happy.mp3" },
{ challengeId: 46, correct: false, text: "Ella está triste.", audioSrc: "Basics/audio/spanish/option/es_she_is_sad.mp3" },
{ challengeId: 46, correct: false, text: "Ella está enojada.", audioSrc: "Basics/audio/spanish/option/es_she_is_angry.mp3" },

// Lesson 16 Challenge Options
{ challengeId: 47, correct: true, text: "Estoy leyendo un libro en español.", audioSrc: "Basics/audio/spanish/option/es_i_am_reading_a_spanish_book.mp3" },
{ challengeId: 47, correct: false, text: "Estoy leyendo un libro en hindi.", audioSrc: "Basics/audio/spanish/option/es_i_am_reading_a_hindi_book.mp3" },
{ challengeId: 47, correct: false, text: "Estoy leyendo un libro en inglés.", audioSrc: "Basics/audio/spanish/option/es_i_am_reading_an_english_book.mp3" },

{ challengeId: 48, correct: true, text: "Ella está cocinando comida.", audioSrc: "Basics/audio/spanish/option/es_she_is_cooking_food.mp3" },
{ challengeId: 48, correct: false, text: "Ella está jugando un juego.", audioSrc: "Basics/audio/spanish/option/es_she_is_playing_game.mp3" },
{ challengeId: 48, correct: false, text: "Ella está cantando.", audioSrc: "Basics/audio/spanish/option/es_she_is_singing.mp3" },

{ challengeId: 49, correct: true, text: "Los niños están jugando afuera.", audioSrc: "Basics/audio/spanish/option/es_children_are_playing_outside.mp3" },
{ challengeId: 49, correct: false, text: "Los niños están estudiando.", audioSrc: "Basics/audio/spanish/option/es_children_are_studying.mp3" },
{ challengeId: 49, correct: false, text: "Los niños están durmiendo.", audioSrc: "Basics/audio/spanish/option/es_children_are_sleeping.mp3" },

{ challengeId: 50, correct: true, text: "Vamos a la escuela todos los días.", audioSrc: "Basics/audio/spanish/option/es_we_go_to_school_every_day.mp3" },
{ challengeId: 50, correct: false, text: "Nunca vamos a la escuela.", audioSrc: "Basics/audio/spanish/option/es_we_never_go_to_school.mp3" },
{ challengeId: 50, correct: false, text: "Vamos a la escuela en días festivos.", audioSrc: "Basics/audio/spanish/option/es_we_go_to_school_on_holidays.mp3" },

{ challengeId: 51, correct: true, text: "A él le gusta beber té.", audioSrc: "Basics/audio/spanish/option/es_he_likes_to_drink_tea.mp3" },
{ challengeId: 51, correct: false, text: "A él le gusta beber leche.", audioSrc: "Basics/audio/spanish/option/es_he_likes_to_drink_milk.mp3" },
{ challengeId: 51, correct: false, text: "A él le gusta beber café.", audioSrc: "Basics/audio/spanish/option/es_he_likes_to_drink_coffee.mp3" },

{ challengeId: 52, correct: true, text: "Los pájaros están volando en el cielo.", audioSrc: "Basics/audio/spanish/option/es_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 52, correct: false, text: "Los pájaros están sentados en el árbol.", audioSrc: "Basics/audio/spanish/option/es_birds_are_sitting_on_tree.mp3" },
{ challengeId: 52, correct: false, text: "Los pájaros están caminando en el suelo.", audioSrc: "Basics/audio/spanish/option/es_birds_are_walking_on_ground.mp3" },

{ challengeId: 53, correct: true, text: "Ella está usando un vestido azul.", audioSrc: "Basics/audio/spanish/option/es_she_is_wearing_a_blue_dress.mp3" },
{ challengeId: 53, correct: false, text: "Ella está usando un vestido rojo.", audioSrc: "Basics/audio/spanish/option/es_she_is_wearing_a_red_dress.mp3" },
{ challengeId: 53, correct: false, text: "Ella está usando un vestido amarillo.", audioSrc: "Basics/audio/spanish/option/es_she_is_wearing_a_yellow_dress.mp3" },

{ challengeId: 54, correct: true, text: "El autobús llega tarde hoy.", audioSrc: "Basics/audio/spanish/option/es_the_bus_is_late_today.mp3" },
{ challengeId: 54, correct: false, text: "El autobús llegó a tiempo.", audioSrc: "Basics/audio/spanish/option/es_the_bus_is_on_time.mp3" },
{ challengeId: 54, correct: false, text: "El autobús no está funcionando hoy.", audioSrc: "Basics/audio/spanish/option/es_the_bus_is_not_running_today.mp3" },

{ challengeId: 55, correct: true, text: "Ellos están viendo una película.", audioSrc: "Basics/audio/spanish/option/es_they_are_watching_a_movie.mp3" },
{ challengeId: 55, correct: false, text: "Ellos están escuchando música.", audioSrc: "Basics/audio/spanish/option/es_they_are_listening_to_music.mp3" },
{ challengeId: 55, correct: false, text: "Ellos están bailando.", audioSrc: "Basics/audio/spanish/option/es_they_are_dancing.mp3" },

{ challengeId: 56, correct: true, text: "El maestro está explicando la lección.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_is_explaining_the_lesson.mp3" },
{ challengeId: 56, correct: false, text: "El maestro está cantando.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_is_singing.mp3" },
{ challengeId: 56, correct: false, text: "El maestro está escribiendo.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_is_writing.mp3" },

// Lesson 19 Challenge Options
{ challengeId: 57, correct: true, text: "Si trabajas duro, tendrás éxito.", audioSrc: "Basics/audio/spanish/option/es_if_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 57, correct: false, text: "Si estudias, serás feliz.", audioSrc: "Basics/audio/spanish/option/es_if_you_study_you_will_be_happy.mp3" },
{ challengeId: 57, correct: false, text: "Si juegas, ganarás un premio.", audioSrc: "Basics/audio/spanish/option/es_if_you_play_you_will_get_a_prize.mp3" },

{ challengeId: 58, correct: true, text: "Ella fue al mercado a comprar verduras.", audioSrc: "Basics/audio/spanish/option/es_she_went_to_market_to_buy_vegetables.mp3" },
{ challengeId: 58, correct: false, text: "Ella fue al mercado a comprar libros.", audioSrc: "Basics/audio/spanish/option/es_she_went_to_market_to_buy_books.mp3" },
{ challengeId: 58, correct: false, text: "Ella fue al mercado a encontrarse con amigos.", audioSrc: "Basics/audio/spanish/option/es_she_went_to_market_to_meet_friends.mp3" },

{ challengeId: 59, correct: true, text: "Aunque llovía, jugaron al fútbol.", audioSrc: "Basics/audio/spanish/option/es_although_it_was_raining_they_played_football.mp3" },
{ challengeId: 59, correct: false, text: "Aunque llovía, estudiaron.", audioSrc: "Basics/audio/spanish/option/es_although_it_was_raining_they_studied.mp3" },
{ challengeId: 59, correct: false, text: "Aunque llovía, durmieron.", audioSrc: "Basics/audio/spanish/option/es_although_it_was_raining_they_slept.mp3" },

{ challengeId: 60, correct: true, text: "El maestro les pidió a los estudiantes que entregaran las tareas a tiempo.", audioSrc: "Basics/audio/spanish/option/es_teacher_asked_students_to_submit_assignments_on_time.mp3" },
{ challengeId: 60, correct: false, text: "El maestro les pidió a los estudiantes que se fueran a casa temprano.", audioSrc: "Basics/audio/spanish/option/es_teacher_asked_students_to_go_home_early.mp3" },
{ challengeId: 60, correct: false, text: "El maestro les pidió a los estudiantes que se quedaran después de la escuela.", audioSrc: "Basics/audio/spanish/option/es_teacher_asked_students_to_stay_after_school.mp3" },

{ challengeId: 61, correct: true, text: "Él está leyendo el periódico mientras toma té.", audioSrc: "Basics/audio/spanish/option/es_he_is_reading_newspaper_while_drinking_tea.mp3" },
{ challengeId: 61, correct: false, text: "Él está estudiando mientras bebe leche.", audioSrc: "Basics/audio/spanish/option/es_he_is_studying_while_drinking_milk.mp3" },
{ challengeId: 61, correct: false, text: "Él está viendo televisión mientras come.", audioSrc: "Basics/audio/spanish/option/es_he_is_watching_tv_while_eating.mp3" },

{ challengeId: 62, correct: true, text: "Estaba cansada, pero aún así continuó trabajando.", audioSrc: "Basics/audio/spanish/option/es_she_was_tired_yet_she_continued_working.mp3" },
{ challengeId: 62, correct: false, text: "Estaba cansada, así que se durmió.", audioSrc: "Basics/audio/spanish/option/es_she_was_tired_so_she_slept.mp3" },
{ challengeId: 62, correct: false, text: "Estaba fresca, pero aún así descansó.", audioSrc: "Basics/audio/spanish/option/es_she_was_fresh_yet_she_took_rest.mp3" },

{ challengeId: 63, correct: true, text: "Cuando llegamos, el tren ya se había ido.", audioSrc: "Basics/audio/spanish/option/es_by_the_time_we_reached_the_train_had_already_left.mp3" },
{ challengeId: 63, correct: false, text: "Cuando llegamos, el tren aún no había llegado.", audioSrc: "Basics/audio/spanish/option/es_by_the_time_we_reached_the_train_had_not_arrived.mp3" },
{ challengeId: 63, correct: false, text: "Cuando llegamos, el autobús ya se había ido.", audioSrc: "Basics/audio/spanish/option/es_by_the_time_we_reached_the_bus_had_left.mp3" },

{ challengeId: 64, correct: true, text: "Si no estudias, no aprobarás el examen.", audioSrc: "Basics/audio/spanish/option/es_unless_you_study_you_will_not_pass_the_exam.mp3" },
{ challengeId: 64, correct: false, text: "Si no juegas, no ganarás.", audioSrc: "Basics/audio/spanish/option/es_unless_you_play_you_will_not_win.mp3" },
{ challengeId: 64, correct: false, text: "Si no comes, no sentirás hambre.", audioSrc: "Basics/audio/spanish/option/es_unless_you_eat_you_will_not_feel_hungry.mp3" },

{ challengeId: 65, correct: true, text: "El doctor le aconsejó que tomara su medicina regularmente.", audioSrc: "Basics/audio/spanish/option/es_doctor_advised_him_to_take_medicine_regularly.mp3" },
{ challengeId: 65, correct: false, text: "El doctor le aconsejó que caminara.", audioSrc: "Basics/audio/spanish/option/es_doctor_advised_him_to_walk.mp3" },
{ challengeId: 65, correct: false, text: "El doctor le aconsejó que descansara.", audioSrc: "Basics/audio/spanish/option/es_doctor_advised_him_to_take_rest.mp3" },

{ challengeId: 66, correct: true, text: "El anciano que vivía solo nos contó muchas historias de su pasado.", audioSrc: "Basics/audio/spanish/option/es_the_old_man_who_lived_alone_told_us_many_stories_from_his_past.mp3" },
{ challengeId: 66, correct: false, text: "El anciano que vivía en el pueblo nos contó nuevas historias.", audioSrc: "Basics/audio/spanish/option/es_the_old_man_who_lived_in_village_told_us_new_stories.mp3" },
{ challengeId: 66, correct: false, text: "El anciano que era doctor nos habló sobre la salud.", audioSrc: "Basics/audio/spanish/option/es_the_old_man_who_was_a_doctor_told_us_about_health.mp3" },




/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//French
// Lesson 22 Challenge Options
{ challengeId: 67, imageSrc: "/man.svg", correct: false, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },
{ challengeId: 67, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
{ challengeId: 67, imageSrc: "/man.svg", correct: true, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },

{ challengeId: 68, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
{ challengeId: 68, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },
{ challengeId: 68, imageSrc: "/woman.svg", correct: true, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },

{ challengeId: 69, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
{ challengeId: 69, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
{ challengeId: 69, imageSrc: "/robot.svg", correct: true, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },

// Lesson 23 Challenge Options
{ challengeId: 70, imageSrc: "/bicycle.svg", correct: false, text: "le vélo", audioSrc: "Basics/audio/french/option/fr_bicycle.mp3" },
{ challengeId: 70, imageSrc: "/car.svg", correct: true, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 70, imageSrc: "/house.svg", correct: false, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },

{ challengeId: 71, imageSrc: "/car.svg", correct: false, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 71, imageSrc: "/house.svg", correct: true, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },
{ challengeId: 71, imageSrc: "/bicycle.svg", correct: false, text: "le vélo", audioSrc: "Basics/audio/french/option/fr_bicycle.mp3" },

{ challengeId: 72, imageSrc: "/house.svg", correct: false, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },
{ challengeId: 72, imageSrc: "/book.svg", correct: true, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
{ challengeId: 72, imageSrc: "/car.svg", correct: false, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },

// Lesson 24 Challenge Options
{ challengeId: 73, imageSrc: "/dog.svg", correct: false, text: "le chien", audioSrc: "Basics/audio/french/option/fr_dog.mp3" },
{ challengeId: 73, imageSrc: "/tree.svg", correct: true, text: "l'arbre", audioSrc: "Basics/audio/french/option/fr_tree.mp3" },
{ challengeId: 73, imageSrc: "/cat.svg", correct: false, text: "le chat", audioSrc: "Basics/audio/french/option/fr_cat.mp3" },

{ challengeId: 74, imageSrc: "/cat.svg", correct: false, text: "le chat", audioSrc: "Basics/audio/french/option/fr_cat.mp3" },
{ challengeId: 74, imageSrc: "/dog.svg", correct: true, text: "le chien", audioSrc: "Basics/audio/french/option/fr_dog.mp3" },
{ challengeId: 74, imageSrc: "/tree.svg", correct: false, text: "l'arbre", audioSrc: "Basics/audio/french/option/fr_tree.mp3" },

{ challengeId: 75, imageSrc: "/tree.svg", correct: false, text: "l'arbre", audioSrc: "Basics/audio/french/option/fr_tree.mp3" },
{ challengeId: 75, imageSrc: "/dog.svg", correct: false, text: "le chien", audioSrc: "Basics/audio/french/option/fr_dog.mp3" },
{ challengeId: 75, imageSrc: "/cat.svg", correct: true, text: "le chat", audioSrc: "Basics/audio/french/option/fr_cat.mp3" },

// Lesson 25 Challenge Options
{ challengeId: 76, correct: true, text: "je", audioSrc: "Basics/audio/french/option/fr_I.mp3" },
{ challengeId: 76, correct: false, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },
{ challengeId: 76, correct: false, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },

{ challengeId: 77, correct: true, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },
{ challengeId: 77, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_I.mp3" },
{ challengeId: 77, correct: false, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },

{ challengeId: 78, correct: true, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 78, correct: false, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },
{ challengeId: 78, correct: false, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },

{ challengeId: 79, correct: true, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },
{ challengeId: 79, correct: false, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 79, correct: false, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },

{ challengeId: 80, correct: true, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },
{ challengeId: 80, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_I.mp3" },
{ challengeId: 80, correct: false, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },

{ challengeId: 81, correct: true, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 81, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_I.mp3" },
{ challengeId: 81, correct: false, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },

{ challengeId: 82, correct: true, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },
{ challengeId: 82, correct: false, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 82, correct: false, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },

{ challengeId: 83, correct: true, text: "nous", audioSrc: "Basics/audio/french/option/fr_we.mp3" },
{ challengeId: 83, correct: false, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },
{ challengeId: 83, correct: false, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },

{ challengeId: 84, correct: true, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },
{ challengeId: 84, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_I.mp3" },
{ challengeId: 84, correct: false, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },

 // Lesson 28 Challenge Options
 { challengeId: 85, imageSrc: "/eat.svg", correct: true, text: "manger", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },
 { challengeId: 85, imageSrc: "/run.svg", correct: false, text: "courir", audioSrc: "Basics/audio/french/option/fr_run.mp3" },
 { challengeId: 85, imageSrc: "/write.svg", correct: false, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },
 
 { challengeId: 86, imageSrc: "/run.svg", correct: true, text: "courir", audioSrc: "Basics/audio/french/option/fr_run.mp3" },
 { challengeId: 86, imageSrc: "/walk.svg", correct: false, text: "marcher", audioSrc: "Basics/audio/french/option/fr_walk.mp3" },
 { challengeId: 86, imageSrc: "/eat.svg", correct: false, text: "manger", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },
 
 { challengeId: 87, imageSrc: "/write.svg", correct: true, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },
 { challengeId: 87, imageSrc: "/read.svg", correct: false, text: "lire", audioSrc: "Basics/audio/french/option/fr_read.mp3" },
 { challengeId: 87, imageSrc: "/speak.svg", correct: false, text: "parler", audioSrc: "Basics/audio/french/option/fr_speak.mp3" },
 
 { challengeId: 88, imageSrc: "/read.svg", correct: true, text: "lire", audioSrc: "Basics/audio/french/option/fr_read.mp3" },
 { challengeId: 88, imageSrc: "/write.svg", correct: false, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },
 { challengeId: 88, imageSrc: "/speak.svg", correct: false, text: "parler", audioSrc: "Basics/audio/french/option/fr_speak.mp3" },
 
 { challengeId: 89, imageSrc: "/walk.svg", correct: true, text: "marcher", audioSrc: "Basics/audio/french/option/fr_walk.mp3" },
 { challengeId: 89, imageSrc: "/run.svg", correct: false, text: "courir", audioSrc: "Basics/audio/french/option/fr_run.mp3" },
 { challengeId: 89, imageSrc: "/eat.svg", correct: false, text: "manger", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },
 
 { challengeId: 90, imageSrc: "/speak.svg", correct: true, text: "parler", audioSrc: "Basics/audio/french/option/fr_speak.mp3" },
 { challengeId: 90, imageSrc: "/read.svg", correct: false, text: "lire", audioSrc: "Basics/audio/french/option/fr_read.mp3" },
 { challengeId: 90, imageSrc: "/write.svg", correct: false, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },
 
 { challengeId: 91, correct: true, text: "lisant", audioSrc: "Basics/audio/french/option/fr_reading.mp3" },
 { challengeId: 91, correct: false, text: "écrivant", audioSrc: "Basics/audio/french/option/fr_writing.mp3" },
 { challengeId: 91, correct: false, text: "parlant", audioSrc: "Basics/audio/french/option/fr_speaking.mp3" },
 
 { challengeId: 92, correct: true, text: "marchant", audioSrc: "Basics/audio/french/option/fr_walking.mp3" },
 { challengeId: 92, correct: false, text: "courant", audioSrc: "Basics/audio/french/option/fr_running.mp3" },
 { challengeId: 92, correct: false, text: "sautant", audioSrc: "Basics/audio/french/option/fr_jumping.mp3" },
 
 { challengeId: 93, correct: true, text: "écrivant", audioSrc: "Basics/audio/french/option/fr_writing.mp3" },
 { challengeId: 93, correct: false, text: "lisant", audioSrc: "Basics/audio/french/option/fr_reading.mp3" },
 { challengeId: 93, correct: false, text: "parlant", audioSrc: "Basics/audio/french/option/fr_speaking.mp3" },
 
// Lesson 31 Challenge Options
{ challengeId: 94, correct: true, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },
{ challengeId: 94, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 94, correct: false, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },

{ challengeId: 95, correct: true, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 95, correct: false, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },
{ challengeId: 95, correct: false, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },

{ challengeId: 96, correct: true, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },
{ challengeId: 96, correct: false, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },
{ challengeId: 96, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },

{ challengeId: 97, correct: true, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },
{ challengeId: 97, correct: false, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },
{ challengeId: 97, correct: false, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },

{ challengeId: 98, correct: true, text: "beau", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },
{ challengeId: 98, correct: false, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 98, correct: false, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },

{ challengeId: 99, correct: true, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 99, correct: false, text: "beau", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },
{ challengeId: 99, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },

{ challengeId: 100, correct: true, text: "grande", audioSrc: "Basics/audio/french/option/fr_big.mp3" },
{ challengeId: 100, correct: false, text: "petite", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 100, correct: false, text: "belle", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },

{ challengeId: 101, correct: true, text: "belle", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },
{ challengeId: 101, correct: false, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 101, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },

{ challengeId: 102, correct: true, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 102, correct: false, text: "beau", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },
{ challengeId: 102, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },

// Lesson 34 Challenge Options
{ challengeId: 103, correct: true, text: "C'est un chat.", audioSrc: "Basics/audio/french/option/fr_this_is_a_cat.mp3" },
{ challengeId: 103, correct: false, text: "C'est un chien.", audioSrc: "Basics/audio/french/option/fr_this_is_a_dog.mp3" },
{ challengeId: 103, correct: false, text: "C'est un livre.", audioSrc: "Basics/audio/french/option/fr_this_is_a_book.mp3" },

{ challengeId: 104, correct: true, text: "Le soleil est brillant.", audioSrc: "Basics/audio/french/option/fr_sun_is_bright.mp3" },
{ challengeId: 104, correct: false, text: "Le ciel est bleu.", audioSrc: "Basics/audio/french/option/fr_sky_is_blue.mp3" },
{ challengeId: 104, correct: false, text: "La lune est grande.", audioSrc: "Basics/audio/french/option/fr_moon_is_big.mp3" },

{ challengeId: 105, correct: true, text: "J'ai un livre.", audioSrc: "Basics/audio/french/option/fr_i_have_a_book.mp3" },
{ challengeId: 105, correct: false, text: "J'ai un vélo.", audioSrc: "Basics/audio/french/option/fr_i_have_a_bicycle.mp3" },
{ challengeId: 105, correct: false, text: "J'ai une montre.", audioSrc: "Basics/audio/french/option/fr_i_have_a_watch.mp3" },

{ challengeId: 106, correct: true, text: "Elle est ma sœur.", audioSrc: "Basics/audio/french/option/fr_she_is_my_sister.mp3" },
{ challengeId: 106, correct: false, text: "Il est mon frère.", audioSrc: "Basics/audio/french/option/fr_he_is_my_brother.mp3" },
{ challengeId: 106, correct: false, text: "Elle est ma mère.", audioSrc: "Basics/audio/french/option/fr_she_is_my_mother.mp3" },

{ challengeId: 107, correct: true, text: "Nous sommes amis.", audioSrc: "Basics/audio/french/option/fr_we_are_friends.mp3" },
{ challengeId: 107, correct: false, text: "Nous sommes ennemis.", audioSrc: "Basics/audio/french/option/fr_we_are_enemies.mp3" },
{ challengeId: 107, correct: false, text: "Nous sommes étudiants.", audioSrc: "Basics/audio/french/option/fr_we_are_students.mp3" },

{ challengeId: 108, correct: true, text: "Le chien court.", audioSrc: "Basics/audio/french/option/fr_dog_is_running.mp3" },
{ challengeId: 108, correct: false, text: "Le chien dort.", audioSrc: "Basics/audio/french/option/fr_dog_is_sleeping.mp3" },
{ challengeId: 108, correct: false, text: "Le chien aboie.", audioSrc: "Basics/audio/french/option/fr_dog_is_barking.mp3" },

{ challengeId: 109, correct: true, text: "Il est professeur.", audioSrc: "Basics/audio/french/option/fr_he_is_a_teacher.mp3" },
{ challengeId: 109, correct: false, text: "Il est docteur.", audioSrc: "Basics/audio/french/option/fr_he_is_a_doctor.mp3" },
{ challengeId: 109, correct: false, text: "Il est policier.", audioSrc: "Basics/audio/french/option/fr_he_is_a_policeman.mp3" },

{ challengeId: 110, correct: true, text: "La pomme est rouge.", audioSrc: "Basics/audio/french/option/fr_apple_is_red.mp3" },
{ challengeId: 110, correct: false, text: "La pomme est jaune.", audioSrc: "Basics/audio/french/option/fr_apple_is_yellow.mp3" },
{ challengeId: 110, correct: false, text: "La pomme est verte.", audioSrc: "Basics/audio/french/option/fr_apple_is_green.mp3" },

{ challengeId: 111, correct: true, text: "J'aime les mangues.", audioSrc: "Basics/audio/french/option/fr_i_like_mangoes.mp3" },
{ challengeId: 111, correct: false, text: "J'aime les pommes.", audioSrc: "Basics/audio/french/option/fr_i_like_apples.mp3" },
{ challengeId: 111, correct: false, text: "J'aime les raisins.", audioSrc: "Basics/audio/french/option/fr_i_like_grapes.mp3" },

{ challengeId: 112, correct: true, text: "Elle est heureuse.", audioSrc: "Basics/audio/french/option/fr_she_is_happy.mp3" },
{ challengeId: 112, correct: false, text: "Elle est triste.", audioSrc: "Basics/audio/french/option/fr_she_is_sad.mp3" },
{ challengeId: 112, correct: false, text: "Elle est en colère.", audioSrc: "Basics/audio/french/option/fr_she_is_angry.mp3" },


// Intermediate Sentences
// Lesson 37 Challenge Options
{ challengeId: 113, correct: true, text: "Je lis un livre en français.", audioSrc: "Basics/audio/french/option/fr_i_am_reading_a_french_book.mp3" },
{ challengeId: 113, correct: false, text: "Je lis un livre en anglais.", audioSrc: "Basics/audio/french/option/fr_i_am_reading_an_english_book.mp3" },
{ challengeId: 113, correct: false, text: "Je lis un livre en espagnol.", audioSrc: "Basics/audio/french/option/fr_i_am_reading_a_spanish_book.mp3" },

{ challengeId: 114, correct: true, text: "Elle cuisine.", audioSrc: "Basics/audio/french/option/fr_she_is_cooking.mp3" },
{ challengeId: 114, correct: false, text: "Elle joue.", audioSrc: "Basics/audio/french/option/fr_she_is_playing.mp3" },
{ challengeId: 114, correct: false, text: "Elle chante.", audioSrc: "Basics/audio/french/option/fr_she_is_singing.mp3" },

{ challengeId: 115, correct: true, text: "Les enfants jouent dehors.", audioSrc: "Basics/audio/french/option/fr_children_are_playing_outside.mp3" },
{ challengeId: 115, correct: false, text: "Les enfants étudient.", audioSrc: "Basics/audio/french/option/fr_children_are_studying.mp3" },
{ challengeId: 115, correct: false, text: "Les enfants dorment.", audioSrc: "Basics/audio/french/option/fr_children_are_sleeping.mp3" },

{ challengeId: 116, correct: true, text: "Nous allons à l'école tous les jours.", audioSrc: "Basics/audio/french/option/fr_we_go_to_school_every_day.mp3" },
{ challengeId: 116, correct: false, text: "Nous ne allons jamais à l'école.", audioSrc: "Basics/audio/french/option/fr_we_never_go_to_school.mp3" },
{ challengeId: 116, correct: false, text: "Nous allons à l'école pendant les vacances.", audioSrc: "Basics/audio/french/option/fr_we_go_to_school_on_holidays.mp3" },

{ challengeId: 117, correct: true, text: "Il aime boire du thé.", audioSrc: "Basics/audio/french/option/fr_he_likes_to_drink_tea.mp3" },
{ challengeId: 117, correct: false, text: "Il aime boire du lait.", audioSrc: "Basics/audio/french/option/fr_he_likes_to_drink_milk.mp3" },
{ challengeId: 117, correct: false, text: "Il aime boire du café.", audioSrc: "Basics/audio/french/option/fr_he_likes_to_drink_coffee.mp3" },

{ challengeId: 118, correct: true, text: "Les oiseaux volent dans le ciel.", audioSrc: "Basics/audio/french/option/fr_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 118, correct: false, text: "Les oiseaux sont assis sur l'arbre.", audioSrc: "Basics/audio/french/option/fr_birds_are_sitting_on_tree.mp3" },
{ challengeId: 118, correct: false, text: "Les oiseaux marchent sur le sol.", audioSrc: "Basics/audio/french/option/fr_birds_are_walking_on_ground.mp3" },

{ challengeId: 119, correct: true, text: "Elle porte une robe bleue.", audioSrc: "Basics/audio/french/option/fr_she_is_wearing_a_blue_dress.mp3" },
{ challengeId: 119, correct: false, text: "Elle porte une robe rouge.", audioSrc: "Basics/audio/french/option/fr_she_is_wearing_a_red_dress.mp3" },
{ challengeId: 119, correct: false, text: "Elle porte une robe jaune.", audioSrc: "Basics/audio/french/option/fr_she_is_wearing_a_yellow_dress.mp3" },

{ challengeId: 120, correct: true, text: "Le bus est en retard aujourd'hui.", audioSrc: "Basics/audio/french/option/fr_the_bus_is_late_today.mp3" },
{ challengeId: 120, correct: false, text: "Le bus est à l'heure.", audioSrc: "Basics/audio/french/option/fr_the_bus_is_on_time.mp3" },
{ challengeId: 120, correct: false, text: "Le bus ne fonctionne pas aujourd'hui.", audioSrc: "Basics/audio/french/option/fr_the_bus_is_not_running_today.mp3" },

{ challengeId: 121, correct: true, text: "Ils regardent un film.", audioSrc: "Basics/audio/french/option/fr_they_are_watching_a_movie.mp3" },
{ challengeId: 121, correct: false, text: "Ils écoutent de la musique.", audioSrc: "Basics/audio/french/option/fr_they_are_listening_to_music.mp3" },
{ challengeId: 121, correct: false, text: "Ils dansent.", audioSrc: "Basics/audio/french/option/fr_they_are_dancing.mp3" },

{ challengeId: 122, correct: true, text: "Le professeur explique la leçon.", audioSrc: "Basics/audio/french/option/fr_the_teacher_is_explaining_the_lesson.mp3" },
{ challengeId: 122, correct: false, text: "Le professeur chante.", audioSrc: "Basics/audio/french/option/fr_the_teacher_is_singing.mp3" },
{ challengeId: 122, correct: false, text: "Le professeur écrit.", audioSrc: "Basics/audio/french/option/fr_the_teacher_is_writing.mp3" },

// Lesson 40 Challenge Options
{ challengeId: 123, correct: true, text: "Si vous travaillez dur, vous réussirez.", audioSrc: "Basics/audio/french/option/fr_if_you_work_hard_you_will_succeed.mp3" },
  { challengeId: 123, correct: false, text: "Si vous étudiez, vous serez heureux.", audioSrc: "Basics/audio/french/option/fr_if_you_study_you_will_be_happy.mp3" },
  { challengeId: 123, correct: false, text: "Si vous jouez, vous recevrez un prix.", audioSrc: "Basics/audio/french/option/fr_if_you_play_you_will_get_a_prize.mp3" },

  { challengeId: 124, correct: true, text: "Elle est allée au marché pour acheter des légumes.", audioSrc: "Basics/audio/french/option/fr_she_went_to_market_to_buy_vegetables.mp3" },
  { challengeId: 124, correct: false, text: "Elle est allée au marché pour acheter des livres.", audioSrc: "Basics/audio/french/option/fr_she_went_to_market_to_buy_books.mp3" },
  { challengeId: 124, correct: false, text: "Elle est allée au marché pour rencontrer des amis.", audioSrc: "Basics/audio/french/option/fr_she_went_to_market_to_meet_friends.mp3" },

  { challengeId: 125, correct: true, text: "Bien qu'il pleuve, ils ont joué au football.", audioSrc: "Basics/audio/french/option/fr_although_it_was_raining_they_played_football.mp3" },
  { challengeId: 125, correct: false, text: "Bien qu'il pleuve, ils ont étudié.", audioSrc: "Basics/audio/french/option/fr_although_it_was_raining_they_studied.mp3" },
  { challengeId: 125, correct: false, text: "Bien qu'il pleuve, ils ont dormi.", audioSrc: "Basics/audio/french/option/fr_although_it_was_raining_they_slept.mp3" },

  { challengeId: 126, correct: true, text: "Le professeur a demandé aux élèves de rendre leurs devoirs à temps.", audioSrc: "Basics/audio/french/option/fr_teacher_asked_students_to_submit_assignments_on_time.mp3" },
  { challengeId: 126, correct: false, text: "Le professeur a demandé aux élèves de rentrer chez eux tôt.", audioSrc: "Basics/audio/french/option/fr_teacher_asked_students_to_go_home_early.mp3" },
  { challengeId: 126, correct: false, text: "Le professeur a demandé aux élèves de rester après l'école.", audioSrc: "Basics/audio/french/option/fr_teacher_asked_students_to_stay_after_school.mp3" },

  { challengeId: 127, correct: true, text: "Il lit le journal en buvant du thé.", audioSrc: "Basics/audio/french/option/fr_he_is_reading_newspaper_while_drinking_tea.mp3" },
  { challengeId: 127, correct: false, text: "Il étudie en buvant du lait.", audioSrc: "Basics/audio/french/option/fr_he_is_studying_while_drinking_milk.mp3" },
  { challengeId: 127, correct: false, text: "Il regarde la télévision en mangeant.", audioSrc: "Basics/audio/french/option/fr_he_is_watching_tv_while_eating.mp3" },

  { challengeId: 128, correct: true, text: "Elle était fatiguée, pourtant elle a continué à travailler.", audioSrc: "Basics/audio/french/option/fr_she_was_tired_yet_she_continued_working.mp3" },
  { challengeId: 128, correct: false, text: "Elle était fatiguée, alors elle s'est endormie.", audioSrc: "Basics/audio/french/option/fr_she_was_tired_so_she_slept.mp3" },
  { challengeId: 128, correct: false, text: "Elle était en forme, pourtant elle s'est reposée.", audioSrc: "Basics/audio/french/option/fr_she_was_fresh_yet_she_took_rest.mp3" },

  { challengeId: 129, correct: true, text: "Quand nous sommes arrivés, le train était déjà parti.", audioSrc: "Basics/audio/french/option/fr_by_the_time_we_reached_the_train_had_already_left.mp3" },
  { challengeId: 129, correct: false, text: "Quand nous sommes arrivés, le train n'était pas encore là.", audioSrc: "Basics/audio/french/option/fr_by_the_time_we_reached_the_train_had_not_arrived.mp3" },
  { challengeId: 129, correct: false, text: "Quand nous sommes arrivés, le bus était déjà parti.", audioSrc: "Basics/audio/french/option/fr_by_the_time_we_reached_the_bus_had_left.mp3" },

  { challengeId: 130, correct: true, text: "À moins que vous n'étudiiez, vous ne réussirez pas l'examen.", audioSrc: "Basics/audio/french/option/fr_unless_you_study_you_will_not_pass_the_exam.mp3" },
  { challengeId: 130, correct: false, text: "À moins que vous ne jouiez, vous ne gagnerez pas.", audioSrc: "Basics/audio/french/option/fr_unless_you_play_you_will_not_win.mp3" },
  { challengeId: 130, correct: false, text: "À moins que vous ne mangiez, vous n'aurez pas faim.", audioSrc: "Basics/audio/french/option/fr_unless_you_eat_you_will_not_feel_hungry.mp3" },

  { challengeId: 131, correct: true, text: "Le médecin lui a conseillé de prendre ses médicaments régulièrement.", audioSrc: "Basics/audio/french/option/fr_doctor_advised_him_to_take_medicine_regularly.mp3" },
  { challengeId: 131, correct: false, text: "Le médecin lui a conseillé de marcher.", audioSrc: "Basics/audio/french/option/fr_doctor_advised_him_to_walk.mp3" },
  { challengeId: 131, correct: false, text: "Le médecin lui a conseillé de se reposer.", audioSrc: "Basics/audio/french/option/fr_doctor_advised_him_to_take_rest.mp3" },

  { challengeId: 132, correct: true, text: "Le vieil homme qui vivait seul nous a raconté de nombreuses histoires de son passé.", audioSrc: "Basics/audio/french/option/fr_the_old_man_who_lived_alone_told_us_many_stories_from_his_past.mp3" },
  { challengeId: 132, correct: false, text: "Le vieil homme qui vivait au village nous a raconté de nouvelles histoires.", audioSrc: "Basics/audio/french/option/fr_the_old_man_who_lived_in_village_told_us_new_stories.mp3" },
  { challengeId: 132, correct: false, text: "Le vieil homme qui était médecin nous a parlé de la santé.", audioSrc: "Basics/audio/french/option/fr_the_old_man_who_was_a_doctor_told_us_about_health.mp3" },

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Japanese
// Lesson 43 Challenge Options
{ challengeId: 133, imageSrc: "/man.svg", correct: true, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
{ challengeId: 133, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },
{ challengeId: 133, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },

{ challengeId: 134, imageSrc: "/woman.svg", correct: true, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },
{ challengeId: 134, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
{ challengeId: 134, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },

{ challengeId: 135, imageSrc: "/robot.svg", correct: true, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },
{ challengeId: 135, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
{ challengeId: 135, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },

// Lesson 44 Challenge Options
{ challengeId: 136, imageSrc: "/car.svg", correct: true, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
{ challengeId: 136, imageSrc: "/house.svg", correct: false, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },
{ challengeId: 136, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },

{ challengeId: 137, imageSrc: "/house.svg", correct: true, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },
{ challengeId: 137, imageSrc: "/car.svg", correct: false, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
{ challengeId: 137, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },

{ challengeId: 138, imageSrc: "/book.svg", correct: true, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },
{ challengeId: 138, imageSrc: "/car.svg", correct: false, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
{ challengeId: 138, imageSrc: "/house.svg", correct: false, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },

// Lesson 45 Challenge Options
{ challengeId: 139, imageSrc: "/tree.svg", correct: true, text: "木", audioSrc: "Basics/audio/japanese/option/jp_tree.mp3" },
{ challengeId: 139, imageSrc: "/dog.svg", correct: false, text: "犬", audioSrc: "Basics/audio/japanese/option/jp_dog.mp3" },
{ challengeId: 139, imageSrc: "/cat.svg", correct: false, text: "猫", audioSrc: "Basics/audio/japanese/option/jp_cat.mp3" },

{ challengeId: 140, imageSrc: "/dog.svg", correct: true, text: "犬", audioSrc: "Basics/audio/japanese/option/jp_dog.mp3" },
{ challengeId: 140, imageSrc: "/tree.svg", correct: false, text: "木", audioSrc: "Basics/audio/japanese/option/jp_tree.mp3" },
{ challengeId: 140, imageSrc: "/cat.svg", correct: false, text: "猫", audioSrc: "Basics/audio/japanese/option/jp_cat.mp3" },

{ challengeId: 141, imageSrc: "/cat.svg", correct: true, text: "猫", audioSrc: "Basics/audio/japanese/option/jp_cat.mp3" },
{ challengeId: 141, imageSrc: "/dog.svg", correct: false, text: "犬", audioSrc: "Basics/audio/japanese/option/jp_dog.mp3" },
{ challengeId: 141, imageSrc: "/tree.svg", correct: false, text: "木", audioSrc: "Basics/audio/japanese/option/jp_tree.mp3" },

// Lesson 46 Challenge Options
{ challengeId: 142, correct: true, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 142, correct: false, text: "あなた", audioSrc: "Basics/audio/japanese/option/jp_you.mp3" },
{ challengeId: 142, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 143, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 143, correct: true, text: "あなた", audioSrc: "Basics/audio/japanese/option/jp_you.mp3" },
{ challengeId: 143, correct: false, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },

{ challengeId: 144, correct: false, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 144, correct: false, text: "あなた", audioSrc: "Basics/audio/japanese/option/jp_you.mp3" },
{ challengeId: 144, correct: true, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

// Lesson 47 Challenge Options
{ challengeId: 145, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 145, correct: true, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },
{ challengeId: 145, correct: false, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },

{ challengeId: 146, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 146, correct: false, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },
{ challengeId: 146, correct: true, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },

{ challengeId: 147, correct: true, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 147, correct: false, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 147, correct: false, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },

// Lesson 48 Challenge Options
{ challengeId: 148, correct: true, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },
{ challengeId: 148, correct: false, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 148, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 149, correct: true, text: "私たち", audioSrc: "Basics/audio/japanese/option/jp_we.mp3" },
{ challengeId: 149, correct: false, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },
{ challengeId: 149, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 150, correct: true, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },
{ challengeId: 150, correct: false, text: "私たち", audioSrc: "Basics/audio/japanese/option/jp_we.mp3" },
{ challengeId: 150, correct: false, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },

// Lesson 49 Challenge Options
{ challengeId: 151, imageSrc: "/eat.svg", correct: true, text: "食べる", audioSrc: "Basics/audio/japanese/option/jp_eat.mp3" },
{ challengeId: 151, imageSrc: "/run.svg", correct: false, text: "走る", audioSrc: "Basics/audio/japanese/option/jp_run.mp3" },
{ challengeId: 151, imageSrc: "/write.svg", correct: false, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },

{ challengeId: 152, imageSrc: "/run.svg", correct: true, text: "走る", audioSrc: "Basics/audio/japanese/option/jp_run.mp3" },
{ challengeId: 152, imageSrc: "/eat.svg", correct: false, text: "食べる", audioSrc: "Basics/audio/japanese/option/jp_eat.mp3" },
{ challengeId: 152, imageSrc: "/read.svg", correct: false, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },

{ challengeId: 153, imageSrc: "/write.svg", correct: true, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },
{ challengeId: 153, imageSrc: "/run.svg", correct: false, text: "走る", audioSrc: "Basics/audio/japanese/option/jp_run.mp3" },
{ challengeId: 153, imageSrc: "/speak.svg", correct: false, text: "話す", audioSrc: "Basics/audio/japanese/option/jp_speak.mp3" },

// Lesson 50 Challenge Options
{ challengeId: 154, imageSrc: "/read.svg", correct: true, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },
{ challengeId: 154, imageSrc: "/walk.svg", correct: false, text: "歩く", audioSrc: "Basics/audio/japanese/option/jp_walk.mp3" },
{ challengeId: 154, imageSrc: "/write.svg", correct: false, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },

{ challengeId: 155, imageSrc: "/walk.svg", correct: true, text: "歩く", audioSrc: "Basics/audio/japanese/option/jp_walk.mp3" },
{ challengeId: 155, imageSrc: "/read.svg", correct: false, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },
{ challengeId: 155, imageSrc: "/drive.svg", correct: false, text: "運転する", audioSrc: "Basics/audio/japanese/option/jp_drive.mp3" },

{ challengeId: 156, imageSrc: "/speak.svg", correct: true, text: "話す", audioSrc: "Basics/audio/japanese/option/jp_speak.mp3" },
{ challengeId: 156, imageSrc: "/write.svg", correct: false, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },
{ challengeId: 156, imageSrc: "/read.svg", correct: false, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },

// Lesson 51 Challenge Options
{ challengeId: 157, correct: true, text: "読んでいます", audioSrc: "Basics/audio/japanese/option/jp_reading.mp3" },
{ challengeId: 157, correct: false, text: "書いています", audioSrc: "Basics/audio/japanese/option/jp_writing.mp3" },
{ challengeId: 157, correct: false, text: "食べています", audioSrc: "Basics/audio/japanese/option/jp_eating.mp3" },

{ challengeId: 158, correct: true, text: "運転しています", audioSrc: "Basics/audio/japanese/option/jp_driving.mp3" },
{ challengeId: 158, correct: false, text: "歩いています", audioSrc: "Basics/audio/japanese/option/jp_walking.mp3" },
{ challengeId: 158, correct: false, text: "話しています", audioSrc: "Basics/audio/japanese/option/jp_speaking.mp3" },

{ challengeId: 159, correct: true, text: "書いています", audioSrc: "Basics/audio/japanese/option/jp_writing.mp3" },
{ challengeId: 159, correct: false, text: "読んでいます", audioSrc: "Basics/audio/japanese/option/jp_reading.mp3" },
{ challengeId: 159, correct: false, text: "食べています", audioSrc: "Basics/audio/japanese/option/jp_eating.mp3" },

// Lesson 52 Challenge Options
{ challengeId: 160,  correct: true, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },
{ challengeId: 160,  correct: false, text: "小さい", audioSrc: "Basics/audio/japanese/option/jp_small.mp3" },
{ challengeId: 160,  correct: false, text: "速い", audioSrc: "Basics/audio/japanese/option/jp_fast.mp3" },

{ challengeId: 161, correct: true, text: "小さい", audioSrc: "Basics/audio/japanese/option/jp_small.mp3" },
{ challengeId: 161, correct: false, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },
{ challengeId: 161, correct: false, text: "美しい", audioSrc: "Basics/audio/japanese/option/jp_beautiful.mp3" },

{ challengeId: 162, correct: true, text: "速い", audioSrc: "Basics/audio/japanese/option/jp_fast.mp3" },
{ challengeId: 162, correct: false, text: "遅い", audioSrc: "Basics/audio/japanese/option/jp_slow.mp3" },
{ challengeId: 162, correct: false, text: "強い", audioSrc: "Basics/audio/japanese/option/jp_strong.mp3" },

// Lesson 53 Challenge Options
{ challengeId: 163, correct: true, text: "遅い", audioSrc: "Basics/audio/japanese/option/jp_slow.mp3" },
{ challengeId: 163, correct: false, text: "速い", audioSrc: "Basics/audio/japanese/option/jp_fast.mp3" },
{ challengeId: 163, correct: false, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },

{ challengeId: 164, correct: true, text: "美しい", audioSrc: "Basics/audio/japanese/option/jp_beautiful.mp3" },
{ challengeId: 164, correct: false, text: "小さい", audioSrc: "Basics/audio/japanese/option/jp_small.mp3" },
{ challengeId: 164, correct: false, text: "強い", audioSrc: "Basics/audio/japanese/option/jp_strong.mp3" },

{ challengeId: 165, correct: true, text: "強い", audioSrc: "Basics/audio/japanese/option/jp_strong.mp3" },
{ challengeId: 165, correct: false, text: "遅い", audioSrc: "Basics/audio/japanese/option/jp_slow.mp3" },
{ challengeId: 165, correct: false, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },

// Lesson 54 Challenge Options
{ challengeId: 166, correct: true, text: "大きいです", audioSrc: "Basics/audio/japanese/option/jp_big_sentence.mp3" },
{ challengeId: 166, correct: false, text: "小さいです", audioSrc: "Basics/audio/japanese/option/jp_small_sentence.mp3" },
{ challengeId: 166, correct: false, text: "速いです", audioSrc: "Basics/audio/japanese/option/jp_fast_sentence.mp3" },

{ challengeId: 167, correct: true, text: "美しいです", audioSrc: "Basics/audio/japanese/option/jp_beautiful_sentence.mp3" },
{ challengeId: 167, correct: false, text: "遅いです", audioSrc: "Basics/audio/japanese/option/jp_slow_sentence.mp3" },
{ challengeId: 167, correct: false, text: "強いです", audioSrc: "Basics/audio/japanese/option/jp_strong_sentence.mp3" },

{ challengeId: 168, correct: true, text: "強いです", audioSrc: "Basics/audio/japanese/option/jp_strong_sentence.mp3" },
{ challengeId: 168, correct: false, text: "美しいです", audioSrc: "Basics/audio/japanese/option/jp_beautiful_sentence.mp3" },
{ challengeId: 168, correct: false, text: "大きいです", audioSrc: "Basics/audio/japanese/option/jp_big_sentence.mp3" },

// Lesson 55 Challenge Options
{ challengeId: 169, correct: true, text: "これは猫です。", audioSrc: "Basics/audio/japanese/option/jp_this_is_a_cat.mp3" },
{ challengeId: 169, correct: false, text: "それは犬です。", audioSrc: "Basics/audio/japanese/option/jp_that_is_a_dog.mp3" },
{ challengeId: 169, correct: false, text: "これは本です。", audioSrc: "Basics/audio/japanese/option/jp_this_is_a_book.mp3" },

{ challengeId: 170, correct: true, text: "太陽は明るいです。", audioSrc: "Basics/audio/japanese/option/jp_sun_is_bright.mp3" },
{ challengeId: 170, correct: false, text: "月は暗いです。", audioSrc: "Basics/audio/japanese/option/jp_moon_is_dark.mp3" },
{ challengeId: 170, correct: false, text: "星は輝いています。", audioSrc: "Basics/audio/japanese/option/jp_stars_are_shining.mp3" },

{ challengeId: 171, correct: true, text: "私は本を持っています。", audioSrc: "Basics/audio/japanese/option/jp_i_have_a_book.mp3" },
{ challengeId: 171, correct: false, text: "私はペンを持っています。", audioSrc: "Basics/audio/japanese/option/jp_i_have_a_pen.mp3" },
{ challengeId: 171, correct: false, text: "私はカバンを持っています。", audioSrc: "Basics/audio/japanese/option/jp_i_have_a_bag.mp3" },

// Lesson 56 Challenge Options
{ challengeId: 172, correct: true, text: "彼女は私の妹です。", audioSrc: "Basics/audio/japanese/option/jp_she_is_my_sister.mp3" },
{ challengeId: 172, correct: false, text: "彼は私の兄です。", audioSrc: "Basics/audio/japanese/option/jp_he_is_my_brother.mp3" },
{ challengeId: 172, correct: false, text: "彼女は私の母です。", audioSrc: "Basics/audio/japanese/option/jp_she_is_my_mother.mp3" },

{ challengeId: 173, correct: true, text: "私たちは友達です。", audioSrc: "Basics/audio/japanese/option/jp_we_are_friends.mp3" },
{ challengeId: 173, correct: false, text: "彼らは先生です。", audioSrc: "Basics/audio/japanese/option/jp_they_are_teachers.mp3" },
{ challengeId: 173, correct: false, text: "私たちは家族です。", audioSrc: "Basics/audio/japanese/option/jp_we_are_family.mp3" },

{ challengeId: 174, correct: true, text: "犬は走っています。", audioSrc: "Basics/audio/japanese/option/jp_dog_is_running.mp3" },
{ challengeId: 174, correct: false, text: "猫は歩いています。", audioSrc: "Basics/audio/japanese/option/jp_cat_is_walking.mp3" },
{ challengeId: 174, correct: false, text: "鳥は飛んでいます。", audioSrc: "Basics/audio/japanese/option/jp_bird_is_flying.mp3" },

// Lesson 57 Challenge Options
{ challengeId: 175, correct: true, text: "彼は先生です。", audioSrc: "Basics/audio/japanese/option/jp_he_is_a_teacher.mp3" },
{ challengeId: 175, correct: false, text: "彼は学生です。", audioSrc: "Basics/audio/japanese/option/jp_he_is_a_student.mp3" },
{ challengeId: 175, correct: false, text: "彼は医者です。", audioSrc: "Basics/audio/japanese/option/jp_he_is_a_doctor.mp3" },

{ challengeId: 176, correct: true, text: "りんごは赤いです。", audioSrc: "Basics/audio/japanese/option/jp_apple_is_red.mp3" },
{ challengeId: 176, correct: false, text: "バナナは黄色いです。", audioSrc: "Basics/audio/japanese/option/jp_banana_is_yellow.mp3" },
{ challengeId: 176, correct: false, text: "ぶどうは紫です。", audioSrc: "Basics/audio/japanese/option/jp_grape_is_purple.mp3" },

{ challengeId: 177, correct: true, text: "私はマンゴーが好きです。", audioSrc: "Basics/audio/japanese/option/jp_i_like_mangoes.mp3" },
{ challengeId: 177, correct: false, text: "私はりんごが好きです。", audioSrc: "Basics/audio/japanese/option/jp_i_like_apples.mp3" },
{ challengeId: 177, correct: false, text: "私はバナナが好きです。", audioSrc: "Basics/audio/japanese/option/jp_i_like_bananas.mp3" },

{ challengeId: 178, correct: true, text: "彼女は幸せです。", audioSrc: "Basics/audio/japanese/option/jp_she_is_happy.mp3" },
{ challengeId: 178, correct: false, text: "彼女は悲しいです。", audioSrc: "Basics/audio/japanese/option/jp_she_is_sad.mp3" },
{ challengeId: 178, correct: false, text: "彼女は怒っています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_angry.mp3" },

// Lesson 58 Challenge Options
{ challengeId: 179, correct: true, text: "私は日本語の本を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_i_am_reading_a_japanese_book.mp3" },
{ challengeId: 179, correct: false, text: "私は英語の本を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_i_am_reading_an_english_book.mp3" },
{ challengeId: 179, correct: false, text: "私は雑誌を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_i_am_reading_a_magazine.mp3" },

{ challengeId: 180, correct: true, text: "彼女は料理を作っています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_cooking_food.mp3" },
{ challengeId: 180, correct: false, text: "彼女は掃除をしています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_cleaning.mp3" },
{ challengeId: 180, correct: false, text: "彼女はテレビを見ています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_watching_tv.mp3" },

{ challengeId: 181, correct: true, text: "子供たちは外で遊んでいます。", audioSrc: "Basics/audio/japanese/option/jp_children_are_playing_outside.mp3" },
{ challengeId: 181, correct: false, text: "子供たちは部屋で遊んでいます。", audioSrc: "Basics/audio/japanese/option/jp_children_are_playing_inside.mp3" },
{ challengeId: 181, correct: false, text: "子供たちは宿題をしています。", audioSrc: "Basics/audio/japanese/option/jp_children_are_doing_homework.mp3" },

// Lesson 59 Challenge Options
{ challengeId: 182, correct: true, text: "私たちは毎日学校に行きます。", audioSrc: "Basics/audio/japanese/option/jp_we_go_to_school_every_day.mp3" },
{ challengeId: 182, correct: false, text: "私たちは週末に学校に行きます。", audioSrc: "Basics/audio/japanese/option/jp_we_go_to_school_on_weekends.mp3" },
{ challengeId: 182, correct: false, text: "私たちは時々学校に行きます。", audioSrc: "Basics/audio/japanese/option/jp_we_sometimes_go_to_school.mp3" },

{ challengeId: 183, correct: true, text: "彼はお茶を飲むのが好きです。", audioSrc: "Basics/audio/japanese/option/jp_he_likes_to_drink_tea.mp3" },
{ challengeId: 183, correct: false, text: "彼はコーヒーを飲むのが好きです。", audioSrc: "Basics/audio/japanese/option/jp_he_likes_to_drink_coffee.mp3" },
{ challengeId: 183, correct: false, text: "彼は水を飲むのが好きです。", audioSrc: "Basics/audio/japanese/option/jp_he_likes_to_drink_water.mp3" },

{ challengeId: 184, correct: true, text: "鳥たちは空を飛んでいます。", audioSrc: "Basics/audio/japanese/option/jp_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 184, correct: false, text: "鳥たちは木の上に座っています。", audioSrc: "Basics/audio/japanese/option/jp_birds_are_sitting_on_a_tree.mp3" },
{ challengeId: 184, correct: false, text: "鳥たちは地面を歩いています。", audioSrc: "Basics/audio/japanese/option/jp_birds_are_walking_on_the_ground.mp3" },

// Lesson 60 Challenge Options
{ challengeId: 185, correct: true, text: "彼女は青いドレスを着ています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_wearing_a_blue_dress.mp3" },
{ challengeId: 185, correct: false, text: "彼女は赤いドレスを着ています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_wearing_a_red_dress.mp3" },
{ challengeId: 185, correct: false, text: "彼女は白いドレスを着ています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_wearing_a_white_dress.mp3" },

{ challengeId: 186, correct: true, text: "バスは今日遅れています。", audioSrc: "Basics/audio/japanese/option/jp_the_bus_is_late_today.mp3" },
{ challengeId: 186, correct: false, text: "電車は今日遅れています。", audioSrc: "Basics/audio/japanese/option/jp_the_train_is_late_today.mp3" },
{ challengeId: 186, correct: false, text: "飛行機は今日遅れています。", audioSrc: "Basics/audio/japanese/option/jp_the_plane_is_late_today.mp3" },

{ challengeId: 187, correct: true, text: "彼らは映画を見ています。", audioSrc: "Basics/audio/japanese/option/jp_they_are_watching_a_movie.mp3" },
{ challengeId: 187, correct: false, text: "彼らは本を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_they_are_reading_a_book.mp3" },
{ challengeId: 187, correct: false, text: "彼らは歌を歌っています。", audioSrc: "Basics/audio/japanese/option/jp_they_are_singing_a_song.mp3" },

{ challengeId: 188, correct: true, text: "先生は授業を説明しています。", audioSrc: "Basics/audio/japanese/option/jp_the_teacher_is_explaining_the_lesson.mp3" },
{ challengeId: 188, correct: false, text: "先生は宿題を出しています。", audioSrc: "Basics/audio/japanese/option/jp_the_teacher_is_giving_homework.mp3" },
{ challengeId: 188, correct: false, text: "先生は本を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_the_teacher_is_reading_a_book.mp3" },

// Lesson 61 Challenge Options
{ challengeId: 189, correct: true, text: "一生懸命働けば、成功します。", audioSrc: "Basics/audio/japanese/option/jp_if_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 189, correct: false, text: "一生懸命働かなければ、成功します。", audioSrc: "Basics/audio/japanese/option/jp_if_you_dont_work_hard_you_will_succeed.mp3" },
{ challengeId: 189, correct: false, text: "一生懸命働けば、失敗します。", audioSrc: "Basics/audio/japanese/option/jp_if_you_work_hard_you_will_fail.mp3" },

{ challengeId: 190, correct: true, text: "彼女は野菜を買いに市場に行きました。", audioSrc: "Basics/audio/japanese/option/jp_she_went_to_the_market_to_buy_vegetables.mp3" },
{ challengeId: 190, correct: false, text: "彼女は果物を買いに市場に行きました。", audioSrc: "Basics/audio/japanese/option/jp_she_went_to_the_market_to_buy_fruits.mp3" },
{ challengeId: 190, correct: false, text: "彼女は市場に行きませんでした。", audioSrc: "Basics/audio/japanese/option/jp_she_did_not_go_to_the_market.mp3" },

{ challengeId: 191, correct: true, text: "雨が降っていたけど、彼らはサッカーをしました。", audioSrc: "Basics/audio/japanese/option/jp_although_it_was_raining_they_played_football.mp3" },
{ challengeId: 191, correct: false, text: "雨が降っていたので、彼らはサッカーをしませんでした。", audioSrc: "Basics/audio/japanese/option/jp_because_it_was_raining_they_did_not_play_football.mp3" },
{ challengeId: 191, correct: false, text: "晴れていたけど、彼らはサッカーをしました。", audioSrc: "Basics/audio/japanese/option/jp_although_it_was_sunny_they_played_football.mp3" },

// Lesson 62 Challenge Options
{ challengeId: 192, correct: true, text: "先生は生徒に課題を期限内に提出するように頼みました。", audioSrc: "Basics/audio/japanese/option/jp_teacher_asked_students_to_submit_assignments_on_time.mp3" },
{ challengeId: 192, correct: false, text: "先生は生徒に課題を出さないように頼みました。", audioSrc: "Basics/audio/japanese/option/jp_teacher_asked_students_not_to_submit_assignments.mp3" },
{ challengeId: 192, correct: false, text: "先生は生徒に課題を忘れるように頼みました。", audioSrc: "Basics/audio/japanese/option/jp_teacher_asked_students_to_forget_about_assignments.mp3" },

{ challengeId: 193, correct: true, text: "彼はお茶を飲みながら新聞を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_he_is_reading_newspaper_while_drinking_tea.mp3" },
{ challengeId: 193, correct: false, text: "彼はお茶を飲まずに新聞を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_he_is_reading_newspaper_without_drinking_tea.mp3" },
{ challengeId: 193, correct: false, text: "彼はお茶を飲みながらテレビを見ています。", audioSrc: "Basics/audio/japanese/option/jp_he_is_watching_tv_while_drinking_tea.mp3" },

{ challengeId: 194, correct: true, text: "彼女は疲れていましたが、働き続けました。", audioSrc: "Basics/audio/japanese/option/jp_she_was_tired_yet_she_continued_working.mp3" },
{ challengeId: 194, correct: false, text: "彼女は疲れていたので、働きませんでした。", audioSrc: "Basics/audio/japanese/option/jp_she_was_tired_so_she_did_not_work.mp3" },
{ challengeId: 194, correct: false, text: "彼女は元気でしたが、働きませんでした。", audioSrc: "Basics/audio/japanese/option/jp_she_was_energetic_yet_she_did_not_work.mp3" },

// Lesson 63 Challenge Options
{ challengeId: 195, correct: true, text: "私たちが着くまでに電車はすでに出発していました。", audioSrc: "Basics/audio/japanese/option/jp_by_the_time_we_reached_the_train_had_left.mp3" },
{ challengeId: 195, correct: false, text: "私たちが着くと電車はまだ駅にいました。", audioSrc: "Basics/audio/japanese/option/jp_by_the_time_we_reached_the_train_was_still_there.mp3" },
{ challengeId: 195, correct: false, text: "私たちが着く前に電車は壊れました。", audioSrc: "Basics/audio/japanese/option/jp_by_the_time_we_reached_the_train_was_broken.mp3" },

{ challengeId: 196, correct: true, text: "勉強しなければ、試験に合格しません。", audioSrc: "Basics/audio/japanese/option/jp_unless_you_study_you_wont_pass.mp3" },
{ challengeId: 196, correct: false, text: "勉強しなくても、試験に合格します。", audioSrc: "Basics/audio/japanese/option/jp_even_if_you_dont_study_you_will_pass.mp3" },
{ challengeId: 196, correct: false, text: "勉強すれば、試験に落ちます。", audioSrc: "Basics/audio/japanese/option/jp_if_you_study_you_will_fail.mp3" },

{ challengeId: 197, correct: true, text: "医者は彼に定期的に薬を飲むように勧めました。", audioSrc: "Basics/audio/japanese/option/jp_doctor_advised_him_to_take_medicine_regularly.mp3" },
{ challengeId: 197, correct: false, text: "医者は彼に薬を飲まないように勧めました。", audioSrc: "Basics/audio/japanese/option/jp_doctor_advised_him_not_to_take_medicine.mp3" },
{ challengeId: 197, correct: false, text: "医者は彼に毎日運動するように勧めました。", audioSrc: "Basics/audio/japanese/option/jp_doctor_advised_him_to_exercise_every_day.mp3" },

{ challengeId: 198, correct: true, text: "一人暮らしの老人は私たちに過去の多くの話をしてくれました。", audioSrc: "Basics/audio/japanese/option/jp_old_man_who_lived_alone_told_us_many_stories.mp3" },
{ challengeId: 198, correct: false, text: "一人暮らしの老人は何も話しませんでした。", audioSrc: "Basics/audio/japanese/option/jp_old_man_who_lived_alone_did_not_speak.mp3" },
{ challengeId: 198, correct: false, text: "一人暮らしの老人は私たちの話を聞いてくれました。", audioSrc: "Basics/audio/japanese/option/jp_old_man_who_lived_alone_listened_to_our_stories.mp3" },

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Marathi
// Lesson 64 Challenge Options
{ challengeId: 199, imageSrc: "/robot.svg", correct: false, text: "रोबोट", audioSrc: "Basics/audio/marathi/option/mr_robot.mp3" },
{ challengeId: 199, imageSrc: "/woman.svg", correct: false, text: "स्त्री", audioSrc: "Basics/audio/marathi/option/mr_woman.mp3" },
{ challengeId: 199, imageSrc: "/man.svg", correct: true, text: "पुरुष", audioSrc: "Basics/audio/marathi/option/mr_man.mp3" },

{ challengeId: 200, imageSrc: "/man.svg", correct: false, text: "पुरुष", audioSrc: "Basics/audio/marathi/option/mr_man.mp3" },
{ challengeId: 200, imageSrc: "/robot.svg", correct: false, text: "रोबोट", audioSrc: "Basics/audio/marathi/option/mr_robot.mp3" },
{ challengeId: 200, imageSrc: "/woman.svg", correct: true, text: "स्त्री", audioSrc: "Basics/audio/marathi/option/mr_woman.mp3" },

{ challengeId: 201, imageSrc: "/woman.svg", correct: false, text: "स्त्री", audioSrc: "Basics/audio/marathi/option/mr_woman.mp3" },
{ challengeId: 201, imageSrc: "/man.svg", correct: false, text: "पुरुष", audioSrc: "Basics/audio/marathi/option/mr_man.mp3" },
{ challengeId: 201, imageSrc: "/robot.svg", correct: true, text: "रोबोट", audioSrc: "Basics/audio/marathi/option/mr_robot.mp3" },

// Lesson 2 Challenge Options
{ challengeId: 202, imageSrc: "/bicycle.svg", correct: false, text: "सायकल", audioSrc: "Basics/audio/marathi/option/mr_bicycle.mp3" },
{ challengeId: 202, imageSrc: "/car.svg", correct: true, text: "गाडी", audioSrc: "Basics/audio/marathi/option/mr_car.mp3" },
{ challengeId: 202, imageSrc: "/house.svg", correct: false, text: "घर", audioSrc: "Basics/audio/marathi/option/mr_house.mp3" },

{ challengeId: 203, imageSrc: "/car.svg", correct: false, text: "गाडी", audioSrc: "Basics/audio/marathi/option/mr_car.mp3" },
{ challengeId: 203, imageSrc: "/house.svg", correct: true, text: "घर", audioSrc: "Basics/audio/marathi/option/mr_house.mp3" },
{ challengeId: 203, imageSrc: "/bicycle.svg", correct: false, text: "सायकल", audioSrc: "Basics/audio/marathi/option/mr_bicycle.mp3" },

{ challengeId: 204, imageSrc: "/house.svg", correct: false, text: "घर", audioSrc: "Basics/audio/marathi/option/mr_house.mp3" },
{ challengeId: 204, imageSrc: "/book.svg", correct: true, text: "पुस्तक", audioSrc: "Basics/audio/marathi/option/mr_book.mp3" },
{ challengeId: 204, imageSrc: "/car.svg", correct: false, text: "गाडी", audioSrc: "Basics/audio/marathi/option/mr_car.mp3" },

// Lesson 3 Challenge Options
{ challengeId: 205, imageSrc: "/dog.svg", correct: false, text: "कुत्रा", audioSrc: "Basics/audio/marathi/option/mr_dog.mp3" },
{ challengeId: 205, imageSrc: "/tree.svg", correct: true, text: "झाड", audioSrc: "Basics/audio/marathi/option/mr_tree.mp3" },
{ challengeId: 205, imageSrc: "/cat.svg", correct: false, text: "मांजर", audioSrc: "Basics/audio/marathi/option/mr_cat.mp3" },

{ challengeId: 206, imageSrc: "/cat.svg", correct: false, text: "मांजर", audioSrc: "Basics/audio/marathi/option/mr_cat.mp3" },
{ challengeId: 206, imageSrc: "/dog.svg", correct: true, text: "कुत्रा", audioSrc: "Basics/audio/marathi/option/mr_dog.mp3" },
{ challengeId: 206, imageSrc: "/tree.svg", correct: false, text: "झाड", audioSrc: "Basics/audio/marathi/option/mr_tree.mp3" },

{ challengeId: 207, imageSrc: "/tree.svg", correct: false, text: "झाड", audioSrc: "Basics/audio/marathi/option/mr_tree.mp3" },
{ challengeId: 207, imageSrc: "/dog.svg", correct: false, text: "कुत्रा", audioSrc: "Basics/audio/marathi/option/mr_dog.mp3" },
{ challengeId: 207, imageSrc: "/cat.svg", correct: true, text: "मांजर", audioSrc: "Basics/audio/marathi/option/mr_cat.mp3" },

// Lesson 67 Challenge Options
{ challengeId: 208, correct: true, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 208, correct: false, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },
{ challengeId: 208, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },

{ challengeId: 209, correct: true, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },
{ challengeId: 209, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 209, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },

{ challengeId: 210, correct: true, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 210, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },
{ challengeId: 210, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },

// Lesson 68 Challenge Options
{ challengeId: 211, correct: true, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },
{ challengeId: 211, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 211, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },

{ challengeId: 212, correct: true, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },
{ challengeId: 212, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 212, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },

{ challengeId: 213, correct: true, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 213, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 213, correct: false, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },

// Lesson 69 Challenge Options
{ challengeId: 214, correct: true, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },
{ challengeId: 214, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 214, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },

{ challengeId: 215, correct: true, text: "आम्ही", audioSrc: "Basics/audio/marathi/option/mr_we.mp3" },
{ challengeId: 215, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },
{ challengeId: 215, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },

{ challengeId: 216, correct: true, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },
{ challengeId: 216, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 216, correct: false, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },

// Lesson 70 Challenge Options
{ challengeId: 217, imageSrc: "/eat.svg", correct: true, text: "खाणे", audioSrc: "Basics/audio/marathi/option/mr_eat.mp3" },
{ challengeId: 217, imageSrc: "/run.svg", correct: false, text: "धावणे", audioSrc: "Basics/audio/marathi/option/mr_run.mp3" },
{ challengeId: 217, imageSrc: "/write.svg", correct: false, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },

{ challengeId: 218, imageSrc: "/run.svg", correct: true, text: "धावणे", audioSrc: "Basics/audio/marathi/option/mr_run.mp3" },
{ challengeId: 218, imageSrc: "/walk.svg", correct: false, text: "चालणे", audioSrc: "Basics/audio/marathi/option/mr_walk.mp3" },
{ challengeId: 218, imageSrc: "/eat.svg", correct: false, text: "खाणे", audioSrc: "Basics/audio/marathi/option/mr_eat.mp3" },

{ challengeId: 219, imageSrc: "/write.svg", correct: true, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },
{ challengeId: 219, imageSrc: "/read.svg", correct: false, text: "वाचणे", audioSrc: "Basics/audio/marathi/option/mr_read.mp3" },
{ challengeId: 219, imageSrc: "/speak.svg", correct: false, text: "बोलणे", audioSrc: "Basics/audio/marathi/option/mr_speak.mp3" },

// Lesson 71 Challenge Options
{ challengeId: 220, imageSrc: "/read.svg", correct: true, text: "वाचणे", audioSrc: "Basics/audio/marathi/option/mr_read.mp3" },
{ challengeId: 220, imageSrc: "/write.svg", correct: false, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },
{ challengeId: 220, imageSrc: "/speak.svg", correct: false, text: "बोलणे", audioSrc: "Basics/audio/marathi/option/mr_speak.mp3" },

{ challengeId: 221, imageSrc: "/walk.svg", correct: true, text: "चालणे", audioSrc: "Basics/audio/marathi/option/mr_walk.mp3" },
{ challengeId: 221, imageSrc: "/run.svg", correct: false, text: "धावणे", audioSrc: "Basics/audio/marathi/option/mr_run.mp3" },
{ challengeId: 221, imageSrc: "/eat.svg", correct: false, text: "खाणे", audioSrc: "Basics/audio/marathi/option/mr_eat.mp3" },

{ challengeId: 222, imageSrc: "/speak.svg", correct: true, text: "बोलणे", audioSrc: "Basics/audio/marathi/option/mr_speak.mp3" },
{ challengeId: 222, imageSrc: "/read.svg", correct: false, text: "वाचणे", audioSrc: "Basics/audio/marathi/option/mr_read.mp3" },
{ challengeId: 222, imageSrc: "/write.svg", correct: false, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },

// Lesson 72 Challenge Options
{ challengeId: 223, correct: true, text: "वाचत", audioSrc: "Basics/audio/marathi/option/mr_reading.mp3" },
{ challengeId: 223, correct: false, text: "लिहित", audioSrc: "Basics/audio/marathi/option/mr_writing.mp3" },
{ challengeId: 223, correct: false, text: "बोलत", audioSrc: "Basics/audio/marathi/option/mr_speaking.mp3" },

{ challengeId: 224, correct: true, text: "चालत", audioSrc: "Basics/audio/marathi/option/mr_walking.mp3" },
{ challengeId: 224, correct: false, text: "धावत", audioSrc: "Basics/audio/marathi/option/mr_running.mp3" },
{ challengeId: 224, correct: false, text: "चालत", audioSrc: "Basics/audio/marathi/option/mr_walking.mp3" },

{ challengeId: 225, correct: true, text: "लिहित", audioSrc: "Basics/audio/marathi/option/mr_writing.mp3" },
{ challengeId: 225, correct: false, text: "वाचत", audioSrc: "Basics/audio/marathi/option/mr_reading.mp3" },
{ challengeId: 225, correct: false, text: "बोलत", audioSrc: "Basics/audio/marathi/option/mr_speaking.mp3" },

// Lesson 73 Challenge Options
{ challengeId: 226, correct: true, text: "मोठे", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },
{ challengeId: 226, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },
{ challengeId: 226, correct: false, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },

{ challengeId: 227, correct: true, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },
{ challengeId: 227, correct: false, text: "मोठे", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },
{ challengeId: 227, correct: false, text: "मंद", audioSrc: "Basics/audio/marathi/option/mr_slow.mp3" },

{ challengeId: 228, correct: true, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },
{ challengeId: 228, correct: false, text: "मंद", audioSrc: "Basics/audio/marathi/option/mr_slow.mp3" },
{ challengeId: 228, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

// Lesson 74 Challenge Options
{ challengeId: 229, correct: true, text: "मंद", audioSrc: "Basics/audio/marathi/option/mr_slow.mp3" },
{ challengeId: 229, correct: false, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },
{ challengeId: 229, correct: false, text: "मोठे", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },

{ challengeId: 230, correct: true, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 230, correct: false, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 230, correct: false, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },

{ challengeId: 231, correct: true, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 231, correct: false, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 231, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

// Lesson 75 Challenge Options
{ challengeId: 232, correct: true, text: "मोठी", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },
{ challengeId: 232, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },
{ challengeId: 232, correct: false, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },

{ challengeId: 233, correct: true, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 233, correct: false, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 233, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

{ challengeId: 234, correct: true, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 234, correct: false, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 234, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

// Lesson 76 Challenge Options
{ challengeId: 235, correct: true, text: "ही मांजर आहे.", audioSrc: "Basics/audio/marathi/option/mr_this_is_a_cat.mp3" },
{ challengeId: 235, correct: false, text: "तो कुत्रा आहे.", audioSrc: "Basics/audio/marathi/option/mr_this_is_a_dog.mp3" },
{ challengeId: 235, correct: false, text: "ते पुस्तक आहे.", audioSrc: "Basics/audio/marathi/option/mr_this_is_a_book.mp3" },

{ challengeId: 236, correct: true, text: "सूर्य तेजस्वी आहे.", audioSrc: "Basics/audio/marathi/option/mr_sun_is_bright.mp3" },
{ challengeId: 236, correct: false, text: "आकाश निळे आहे.", audioSrc: "Basics/audio/marathi/option/mr_sky_is_blue.mp3" },
{ challengeId: 236, correct: false, text: "चंद्र मोठा आहे.", audioSrc: "Basics/audio/marathi/option/mr_moon_is_big.mp3" },

{ challengeId: 237, correct: true, text: "माझ्याकडे एक पुस्तक आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_have_a_book.mp3" },
{ challengeId: 237, correct: false, text: "माझ्याकडे एक सायकल आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_have_a_bicycle.mp3" },
{ challengeId: 237, correct: false, text: "माझ्याकडे एक घड्याळ आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_have_a_watch.mp3" },

// Lesson 77 Challenge Options
{ challengeId: 238, correct: true, text: "ती माझी बहीण आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_my_sister.mp3" },
{ challengeId: 238, correct: false, text: "तो माझा भाऊ आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_my_brother.mp3" },
{ challengeId: 238, correct: false, text: "ती माझी आई आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_my_mother.mp3" },

{ challengeId: 239, correct: true, text: "आम्ही मित्र आहोत.", audioSrc: "Basics/audio/marathi/option/mr_we_are_friends.mp3" },
{ challengeId: 239, correct: false, text: "आम्ही शत्रू आहोत.", audioSrc: "Basics/audio/marathi/option/mr_we_are_enemies.mp3" },
{ challengeId: 239, correct: false, text: "आम्ही विद्यार्थी आहोत.", audioSrc: "Basics/audio/marathi/option/mr_we_are_students.mp3" },

{ challengeId: 240, correct: true, text: "कुत्रा धावत आहे.", audioSrc: "Basics/audio/marathi/option/mr_dog_is_running.mp3" },
{ challengeId: 240, correct: false, text: "कुत्रा झोपला आहे.", audioSrc: "Basics/audio/marathi/option/mr_dog_is_sleeping.mp3" },
{ challengeId: 240, correct: false, text: "कुत्रा भुंकत आहे.", audioSrc: "Basics/audio/marathi/option/mr_dog_is_barking.mp3" },

// Lesson 78 Challenge Options
{ challengeId: 241, correct: true, text: "तो शिक्षक आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_a_teacher.mp3" },
{ challengeId: 241, correct: false, text: "तो डॉक्टर आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_a_doctor.mp3" },
{ challengeId: 241, correct: false, text: "तो पोलीस आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_a_policeman.mp3" },

{ challengeId: 242, correct: true, text: "सफरचंद लाल आहे.", audioSrc: "Basics/audio/marathi/option/mr_apple_is_red.mp3" },
{ challengeId: 242, correct: false, text: "सफरचंद पिवळे आहे.", audioSrc: "Basics/audio/marathi/option/mr_apple_is_yellow.mp3" },
{ challengeId: 242, correct: false, text: "सफरचंद हिरवे आहे.", audioSrc: "Basics/audio/marathi/option/mr_apple_is_green.mp3" },

{ challengeId: 243, correct: true, text: "मला आंबे आवडतात.", audioSrc: "Basics/audio/marathi/option/mr_i_like_mangoes.mp3" },
{ challengeId: 243, correct: false, text: "मला सफरचंद आवडतात.", audioSrc: "Basics/audio/marathi/option/mr_i_like_apples.mp3" },
{ challengeId: 243, correct: false, text: "मला द्राक्षे आवडतात.", audioSrc: "Basics/audio/marathi/option/mr_i_like_grapes.mp3" },

{ challengeId: 244, correct: true, text: "ती आनंदी आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_happy.mp3" },
{ challengeId: 244, correct: false, text: "ती उदास आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_sad.mp3" },
{ challengeId: 244, correct: false, text: "ती रागावली आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_angry.mp3" },

// Lesson 79 Challenge Options
{ challengeId: 245, correct: true, text: "मी मराठी पुस्तक वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_am_reading_a_marathi_book.mp3" },
{ challengeId: 245, correct: false, text: "मी हिंदी पुस्तक वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_am_reading_a_hindi_book.mp3" },
{ challengeId: 245, correct: false, text: "मी इंग्रजी पुस्तक वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_am_reading_an_english_book.mp3" },

{ challengeId: 246, correct: true, text: "ती अन्न शिजवत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_cooking_food.mp3" },
{ challengeId: 246, correct: false, text: "ती खेळ खेळत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_playing_game.mp3" },
{ challengeId: 246, correct: false, text: "ती गाणे गात आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_singing.mp3" },

{ challengeId: 247, correct: true, text: "मुलं बाहेर खेळत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_children_are_playing_outside.mp3" },
{ challengeId: 247, correct: false, text: "मुलं अभ्यास करत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_children_are_studying.mp3" },
{ challengeId: 247, correct: false, text: "मुलं झोपले आहेत.", audioSrc: "Basics/audio/marathi/option/mr_children_are_sleeping.mp3" },

// Lesson 80 Challenge Options
{ challengeId: 248, correct: true, text: "आम्ही दररोज शाळेत जातो.", audioSrc: "Basics/audio/marathi/option/mr_we_go_to_school_every_day.mp3" },
{ challengeId: 248, correct: false, text: "आम्ही कधीच शाळेत जात नाही.", audioSrc: "Basics/audio/marathi/option/mr_we_never_go_to_school.mp3" },
{ challengeId: 248, correct: false, text: "आम्ही सुट्टीच्या दिवशी शाळेत जातो.", audioSrc: "Basics/audio/marathi/option/mr_we_go_to_school_on_holidays.mp3" },

{ challengeId: 249, correct: true, text: "त्याला चहा प्यायला आवडतो.", audioSrc: "Basics/audio/marathi/option/mr_he_likes_to_drink_tea.mp3" },
{ challengeId: 249, correct: false, text: "त्याला दूध प्यायला आवडतो.", audioSrc: "Basics/audio/marathi/option/mr_he_likes_to_drink_milk.mp3" },
{ challengeId: 249, correct: false, text: "त्याला कॉफी प्यायला आवडते.", audioSrc: "Basics/audio/marathi/option/mr_he_likes_to_drink_coffee.mp3" },

{ challengeId: 250, correct: true, text: "पक्षी आकाशात उडत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 250, correct: false, text: "पक्षी झाडावर बसले आहेत.", audioSrc: "Basics/audio/marathi/option/mr_birds_are_sitting_on_tree.mp3" },
{ challengeId: 250, correct: false, text: "पक्षी जमिनीवर चालत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_birds_are_walking_on_ground.mp3" },

// Lesson 81 Challenge Options
{ challengeId: 251, correct: true, text: "ती निळा ड्रेस घालत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_wearing_a_blue_dress.mp3" },
{ challengeId: 251, correct: false, text: "ती लाल ड्रेस घालत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_wearing_a_red_dress.mp3" },
{ challengeId: 251, correct: false, text: "ती पिवळा ड्रेस घालत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_wearing_a_yellow_dress.mp3" },

{ challengeId: 252, correct: true, text: "बस आज उशिरा आहे.", audioSrc: "Basics/audio/marathi/option/mr_the_bus_is_late_today.mp3" },
{ challengeId: 252, correct: false, text: "बस वेळेवर आली आहे.", audioSrc: "Basics/audio/marathi/option/mr_the_bus_is_on_time.mp3" },
{ challengeId: 252, correct: false, text: "बस आज बंद आहे.", audioSrc: "Basics/audio/marathi/option/mr_the_bus_is_not_running_today.mp3" },

{ challengeId: 253, correct: true, text: "ते चित्रपट पाहत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_they_are_watching_a_movie.mp3" },
{ challengeId: 253, correct: false, text: "ते गाणे ऐकत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_they_are_listening_to_music.mp3" },
{ challengeId: 253, correct: false, text: "ते नाचत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_they_are_dancing.mp3" },

{ challengeId: 254, correct: true, text: "शिक्षक धडा समजावत आहे.", audioSrc: "Basics/audio/marathi/option/mr_the_teacher_is_explaining_the_lesson.mp3" },
{ challengeId: 254, correct: false, text: "शिक्षक गाणे गात आहे.", audioSrc: "Basics/audio/marathi/option/mr_the_teacher_is_singing.mp3" },
{ challengeId: 254, correct: false, text: "शिक्षक लिहित आहे.", audioSrc: "Basics/audio/marathi/option/mr_the_teacher_is_writing.mp3" },

// Lesson 82 Challenge Options
{ challengeId: 255, correct: true, text: "जर तुम्ही मेहनत केली, तर तुम्हाला यश मिळेल.", audioSrc: "Basics/audio/marathi/option/mr_if_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 255, correct: false, text: "जर तुम्ही अभ्यास केला, तर तुम्हाला आनंद मिळेल.", audioSrc: "Basics/audio/marathi/option/mr_if_you_study_you_will_be_happy.mp3" },
{ challengeId: 255, correct: false, text: "जर तुम्ही खेळलात, तर तुम्हाला पुरस्कार मिळेल.", audioSrc: "Basics/audio/marathi/option/mr_if_you_play_you_will_get_a_prize.mp3" },

{ challengeId: 256, correct: true, text: "ती भाजी आणण्यासाठी बाजारात गेली.", audioSrc: "Basics/audio/marathi/option/mr_she_went_to_market_to_buy_vegetables.mp3" },
{ challengeId: 256, correct: false, text: "ती पुस्तक आणण्यासाठी बाजारात गेली.", audioSrc: "Basics/audio/marathi/option/mr_she_went_to_market_to_buy_books.mp3" },
{ challengeId: 256, correct: false, text: "ती मित्रांना भेटण्यासाठी बाजारात गेली.", audioSrc: "Basics/audio/marathi/option/mr_she_went_to_market_to_meet_friends.mp3" },

{ challengeId: 257, correct: true, text: "पाऊस पडत असतानाही, त्यांनी फुटबॉल खेळला.", audioSrc: "Basics/audio/marathi/option/mr_although_it_was_raining_they_played_football.mp3" },
{ challengeId: 257, correct: false, text: "पाऊस पडत असतानाही, त्यांनी अभ्यास केला.", audioSrc: "Basics/audio/marathi/option/mr_although_it_was_raining_they_studied.mp3" },
{ challengeId: 257, correct: false, text: "पाऊस पडत असतानाही, त्यांनी झोप घेतली.", audioSrc: "Basics/audio/marathi/option/mr_although_it_was_raining_they_slept.mp3" },

// Lesson 83 Challenge Options
{ challengeId: 258, correct: true, text: "शिक्षकांनी विद्यार्थ्यांना वेळेवर असाइनमेंट जमा करण्यास सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_teacher_asked_students_to_submit_assignments_on_time.mp3" },
{ challengeId: 258, correct: false, text: "शिक्षकांनी विद्यार्थ्यांना घरी लवकर जाण्यास सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_teacher_asked_students_to_go_home_early.mp3" },
{ challengeId: 258, correct: false, text: "शिक्षकांनी विद्यार्थ्यांना शाळा सुटल्यावर थांबण्यास सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_teacher_asked_students_to_stay_after_school.mp3" },

{ challengeId: 259, correct: true, text: "तो चहा पिता-पिता वर्तमानपत्र वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_reading_newspaper_while_drinking_tea.mp3" },
{ challengeId: 259, correct: false, text: "तो दूध पिता-पिता अभ्यास करत आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_studying_while_drinking_milk.mp3" },
{ challengeId: 259, correct: false, text: "तो नाश्ता करता-करता टीव्ही पाहत आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_watching_tv_while_eating.mp3" },

{ challengeId: 260, correct: true, text: "ती थकली होती, तरीही तिने काम सुरू ठेवले.", audioSrc: "Basics/audio/marathi/option/mr_she_was_tired_yet_she_continued_working.mp3" },
{ challengeId: 260, correct: false, text: "ती थकली होती, त्यामुळे ती झोपली.", audioSrc: "Basics/audio/marathi/option/mr_she_was_tired_so_she_slept.mp3" },
{ challengeId: 260, correct: false, text: "ती ताजीतवानी होती, तरीही तिने विश्रांती घेतली.", audioSrc: "Basics/audio/marathi/option/mr_she_was_fresh_yet_she_took_rest.mp3" },

// Lesson 84 Challenge Options
{ challengeId: 261, correct: true, text: "जोपर्यंत आम्ही पोहोचलो, तोपर्यंत ट्रेन निघून गेली होती.", audioSrc: "Basics/audio/marathi/option/mr_by_the_time_we_reached_the_train_had_already_left.mp3" },
{ challengeId: 261, correct: false, text: "जोपर्यंत आम्ही पोहोचलो, तोपर्यंत ट्रेन आली नव्हती.", audioSrc: "Basics/audio/marathi/option/mr_by_the_time_we_reached_the_train_had_not_arrived.mp3" },
{ challengeId: 261, correct: false, text: "जोपर्यंत आम्ही पोहोचलो, तोपर्यंत बस निघून गेली होती.", audioSrc: "Basics/audio/marathi/option/mr_by_the_time_we_reached_the_bus_had_left.mp3" },

{ challengeId: 262, correct: true, text: "जर तुम्ही अभ्यास केला नाही, तर तुम्ही परीक्षा पास होणार नाही.", audioSrc: "Basics/audio/marathi/option/mr_unless_you_study_you_will_not_pass_the_exam.mp3" },
{ challengeId: 262, correct: false, text: "जर तुम्ही खेळलात नाही, तर तुम्ही जिंकणार नाही.", audioSrc: "Basics/audio/marathi/option/mr_unless_you_play_you_will_not_win.mp3" },
{ challengeId: 262, correct: false, text: "जर तुम्ही जेवलात नाही, तर तुम्हाला भूक लागणार नाही.", audioSrc: "Basics/audio/marathi/option/mr_unless_you_eat_you_will_not_feel_hungry.mp3" },

{ challengeId: 263, correct: true, text: "डॉक्टरांनी त्याला नियमितपणे औषध घेण्याचा सल्ला दिला.", audioSrc: "Basics/audio/marathi/option/mr_doctor_advised_him_to_take_medicine_regularly.mp3" },
{ challengeId: 263, correct: false, text: "डॉक्टरांनी त्याला चालण्याचा सल्ला दिला.", audioSrc: "Basics/audio/marathi/option/mr_doctor_advised_him_to_walk.mp3" },
{ challengeId: 263, correct: false, text: "डॉक्टरांनी त्याला विश्रांती घेण्याचा सल्ला दिला.", audioSrc: "Basics/audio/marathi/option/mr_doctor_advised_him_to_take_rest.mp3" },

{ challengeId: 264, correct: true, text: "जो वृद्ध माणूस एकटा राहत होता, त्याने आम्हाला त्याच्या भूतकाळातील अनेक गोष्टी सांगितल्या.", audioSrc: "Basics/audio/marathi/option/mr_the_old_man_who_lived_alone_told_us_many_stories_from_his_past.mp3" },
{ challengeId: 264, correct: false, text: "जो वृद्ध माणूस गावात राहत होता, त्याने आम्हाला नवीन कथा सांगितल्या.", audioSrc: "Basics/audio/marathi/option/mr_the_old_man_who_lived_in_village_told_us_new_stories.mp3" },
{ challengeId: 264, correct: false, text: "जो वृद्ध माणूस डॉक्टर होता, त्याने आम्हाला आरोग्याबद्दल सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_the_old_man_who_was_a_doctor_told_us_about_health.mp3" },


]);

    

    /* await db.insert(schema.challenges).values([
        // Lesson 2 Challenges
        {
            id: 4,
            lessonId: 2,
            type: "SELECT",
            order: 1,
            question: 'Which one of these is "the woman"?',
        },
        {
            id: 5,
            lessonId: 2,
            type: "ASSIST",
            order: 2,
            question: '"the woman"',
        },
        {
            id: 6,
            lessonId: 2,
            type: "SELECT",
            order: 3,
            question: 'Which one of these is "the man"?',
        },
        // Lesson 3 Challenges
        {
            id: 7,
            lessonId: 3,
            type: "SELECT",
            order: 1,
            question: 'Which one of these is "the robot"?',
        },
        {
            id: 8,
            lessonId: 3,
            type: "ASSIST",
            order: 2,
            question: '"the robot"',
        },
        {
            id: 9,
            lessonId: 3,
            type: "SELECT",
            order: 3,
            question: 'Which one of these is "the car"?',
        },
        // Lesson 4 Challenges
        {
            id: 10,
            lessonId: 4,
            type: "SELECT",
            order: 1,
            question: 'Which one of these is "the house"?',
        },
        {
            id: 11,
            lessonId: 4,
            type: "ASSIST",
            order: 2,
            question: '"the house"',
        },
        {
            id: 12,
            lessonId: 4,
            type: "SELECT",
            order: 3,
            question: 'Which one of these is "the bicycle"?',
        },
        // Lesson 5 Challenges
        {
            id: 13,
            lessonId: 5,
            type: "SELECT",
            order: 1,
            question: 'Which one of these is "the book"?',
        },
        {
            id: 14,
            lessonId: 5,
            type: "ASSIST",
            order: 2,
            question: '"the book"',
        },
        {
            id: 15,
            lessonId: 5,
            type: "SELECT",
            order: 3,
            question: 'Which one of these is "the pencil"?',
        }
    ]);*/

    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();
