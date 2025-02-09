import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import {SpanishAlphabetSeed} from "@/scripts/seeddata/spanish"

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
 try {
    console.log("Seeding database")

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
            id:1,
            title: "Spanish",
            imageSrc: "/es.svg",
        },
        {
            id:2,
            title: "French",
            imageSrc: "/fr.svg",
        },
        {
            id:3,
            title: "Japanese",
            imageSrc: "/jp.svg",
        },
    ]);

    await db.insert(schema.units).values([ 
        {
            id: 1,
            courseId: 1,
            title: "Spanish",
            description: "Learn the basics of Spanish",
            order: 1,
        }
    ]);
   
    const basicsData = [
        // A
        { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "Manzana",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "Hormiga",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "Brazo",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "Avión",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "Flecha",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "Ancla",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "Caimán",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "Alarma",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "Actor",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "Arte",  courseId:1, audioSrc: null },
      
        // B
        { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "Pelota",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "Oso",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "Pájaro",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "Mariposa",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "Plátano",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "Barco",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "Caja",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "Libro",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "Banco",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "Campana",  courseId:1, audioSrc: null },
      
        // C
        { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "Gato",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "Pastel",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "Vela",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "Vaca",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "Coche",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "Moneda",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "Corona",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "Cacto",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "Reloj",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "Nube",  courseId:1, audioSrc: null },
      
        // D
        { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "Perro",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "Pato",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "Vestido",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "Puerta",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "Diamante",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "Delfín",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "Burro",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "Dado",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "Tambor",  courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "Gota",  courseId:1, audioSrc: null },
      
        // E
{ imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "Elefante", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "Huevo", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "Motor", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "Sobre", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "Oreja", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "Águila", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "Tierra", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "Ojo", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "Elfo", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "Ascensor", courseId: 1, audioSrc: null },

// F
{ imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "Pescado", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "Flor", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "Tenedor", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "Fuego", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "Zorro", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "Valla", courseId: 1, audioSrc: null },

// G
{ imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "Guitarra", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "Uvas", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "Jirafa", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "Cabra", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "Guante", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "Jardín", courseId: 1, audioSrc: null },

// H
{ imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "Sombrero", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/House.png", title: "House", nativenm: "Casa", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "Caballo", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "Martillo", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "Mano", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "Corazón", courseId: 1, audioSrc: null },

// I
{ imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "Hielo", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "Hierro", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "Iguana", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "Insecto", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "Tinta", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "Helado", courseId: 1, audioSrc: null },

// J
{ imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "Chaqueta", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "Selva", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "Saltar", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "Tarro", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "Medusa", courseId: 1, audioSrc: null },

// K
{ imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "Kiwi", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "Canguro", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "Tetera", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/Key.png", title: "Key", nativenm: "Llave", courseId: 1, audioSrc: null },
{ imageSrc: "/Basics/King.png", title: "King", nativenm: "Rey", courseId: 1, audioSrc: null },

      
        // L
        { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "León", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "Lámpara", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "Limón", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "Escalera", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "Hoja", courseId:1 ,audioSrc: null },
      
        // M
        { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "Rata", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "Mono", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "Montaña", courseId:1, audioSrc: null },
        { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "Leche", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "Espejo", courseId:1 ,audioSrc: null },
      
        // N
        { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "Red", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nariz", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "Noche", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nariz", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "Nuez", courseId:1 ,audioSrc: null },
      
        // O
        { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "Ostrero", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "Pulpo", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "Búho", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "Aceituna", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "Oxígeno", courseId:1 ,audioSrc: null },
      
        // P
        { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "Pluma", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "Piña", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "Panda", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "Lápiz", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "Avión", courseId:1 ,audioSrc: null },
      
        // Q
        { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "Colcha", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "Reina", courseId:1 ,audioSrc: null },
      
        // R
        { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "Conejo", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "Lluvia", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "Anillo", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "Rosa", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "Robot", courseId:1 ,audioSrc: null },
      
        // S
        { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "Sol", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "Serpiente", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "Estrella", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "Calcetines", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "Arena", courseId:1 ,audioSrc: null },
      
        // T
        { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "Tigre", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "Árbol", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "Mesa", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "Televisión", courseId:1 ,audioSrc: null },
        { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "Diente", courseId:1 ,audioSrc: null },
      
        // U
    { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "Paraguas", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "Urna", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "Tío", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "Unicornio", courseId:1 ,audioSrc: null },
    
    
    { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "Universo", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "Utensilio", courseId:1 ,audioSrc: null },
    
    // V
    { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "Furgoneta", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "Buitre", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "Aspiradora", courseId:1 ,audioSrc: null },
    
    { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "Víctima", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "Verdura", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "Volcán", courseId:1 ,audioSrc: null },
    { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "Vacaciones", courseId:1 ,audioSrc: null },
    
    { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "Vampiro",courseId:1, audioSrc: null },
    
    // W
    { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "Lobo", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "Sandía", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "Ventana", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "Vagón", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "Cascada", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "Reloj", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "Ballena", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "Invierno", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "Muñeca", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "Silbato", courseId:1 , audioSrc: null },
    
    // X
    { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "Xilófono", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "Radiografía", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "Xenón", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "Navidad", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "Xenofobia", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "Xenial", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "Xeón", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "Examinar", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "Explotar", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "Exilio", courseId:1 , audioSrc: null },
    
    // Y
    { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "Yak", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "Amarillo", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "Yogur", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "Hilo", courseId:1 , audioSrc: null },
    
    { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "Yoga", courseId:1 , audioSrc: null },

    { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "Bostezo", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "Jardín", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "Gritar", courseId:1 , audioSrc: null },
    
    // Z
    { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "Cebra", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "Zoológico", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zenith.png", title: "Zenith", nativenm: "Cenit", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zero.png", title: "Zero", nativenm: "Cero", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zigzag.png", title: "Zigzag", nativenm: "Zigzag", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zeppelin.png", title: "Zeppelin", nativenm: "Zeppelin", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zombie.png", title: "Zombie", nativenm: "Zombi", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zone.png", title: "Zone", nativenm: "Zona", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zodiac.png", title: "Zodiac", nativenm: "Zodiaco", courseId:1 , audioSrc: null },
    { imageSrc: "/Basics/Zoom.png", title: "Zoom", nativenm: "Zoom", courseId:1 , audioSrc: null },
    
      ];
      

    
      await db.insert(schema.basicsdb).values(basicsData);


      await db.insert(schema.basicsdbcore).values(SpanishAlphabetSeed);

      
        
      

    await db.insert(schema.lessons).values([
        {
            id: 1,
            unitId: 1,
            order: 1,
            title: "Nouns",
        },
        
        { id: 2, unitId: 1, order: 2, title: "Verbs" },
        { id: 3, unitId: 1, order: 3, title: "Adjectives" },
        { id: 4, unitId: 1, order: 4, title: "Pronouns" },
        { id: 5, unitId: 1, order: 5, title: "Conjunctions" }
    ]);

    await db.insert(schema.challenges).values([
        // Lesson 1 Challenges
        { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'How do you say "the man" in Spanish?' },
        { id: 2, lessonId: 1, type: "SELECT", order: 2, question: 'How do you say "the woman" in Spanish?' },
        { id: 3, lessonId: 1, type: "SELECT", order: 3, question: 'How do you say "the robot" in Spanish?' },
        
        // Lesson 2 Challenges
        { id: 4, lessonId: 2, type: "SELECT", order: 1, question: 'Which of these means "the car" in Spanish?' },
        { id: 5, lessonId: 2, type: "ASSIST", order: 2, question: 'Complete the sentence: "I am driving ___ carro."' },
        { id: 6, lessonId: 2, type: "SELECT", order: 3, question: 'Which of these means "the house" in Spanish?' },
        
        // Lesson 3 Challenges
        { id: 7, lessonId: 3, type: "SELECT", order: 1, question: 'How do you say "the book" in Spanish?' },
        { id: 8, lessonId: 3, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am reading ___ libro."' },
        { id: 9, lessonId: 3, type: "SELECT", order: 3, question: 'Which of these means "the bicycle" in Spanish?' },
        
        // Lesson 4 Challenges
        { id: 10, lessonId: 4, type: "SELECT", order: 1, question: 'Which of these means "the pen" in Spanish?' },
        { id: 11, lessonId: 4, type: "ASSIST", order: 2, question: 'How do you say "the pencil" in Spanish?' },
        { id: 12, lessonId: 4, type: "SELECT", order: 3, question: 'Which of these means "the chair" in Spanish?' },
    
        // Lesson 5 Challenges
        { id: 13, lessonId: 5, type: "SELECT", order: 1, question: 'Which of these means "the computer" in Spanish?' },
        { id: 14, lessonId: 5, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am using ___ computadora."' },
        { id: 15, lessonId: 5, type: "SELECT", order: 3, question: 'How do you say "the phone" in Spanish?' }
    ]);
    
    await db.insert(schema.challengeOptions).values([
        // Lesson 1 Challenge Options
        { challengeId: 1, imageSrc: "/man.svg", correct: true, text: "el hombre", audioSrc: "/es_man.mp3" },
        { challengeId: 1, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
        { challengeId: 1, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "/es_robot.mp3" },
        
        { challengeId: 2, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "/es_man.mp3" },
        { challengeId: 2, imageSrc: "/woman.svg", correct: true, text: "la mujer", audioSrc: "/es_woman.mp3" },
        { challengeId: 2, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "/es_robot.mp3" },
        
        { challengeId: 3, imageSrc: "/robot.svg", correct: true, text: "el robot", audioSrc: "/es_robot.mp3" },
        { challengeId: 3, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "/es_man.mp3" },
        { challengeId: 3, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
        
        // Lesson 2 Challenge Options
        { challengeId: 4, imageSrc: "/car.svg", correct: true, text: "el carro", audioSrc: "/es_car.mp3" },
        { challengeId: 4, imageSrc: "/house.svg", correct: false, text: "la casa", audioSrc: "/es_house.mp3" },
        { challengeId: 4, imageSrc: "/bicycle.svg", correct: false, text: "la bicicleta", audioSrc: "/es_bicycle.mp3" },
    
        { challengeId: 5, correct: true, text: "el", audioSrc: "/es_el.mp3" },
        { challengeId: 5, correct: false, text: "la", audioSrc: "/es_la.mp3" },
        { challengeId: 5, correct: false, text: "un", audioSrc: "/es_un.mp3" },
    
        { challengeId: 6, imageSrc: "/house.svg", correct: true, text: "la casa", audioSrc: "/es_house.mp3" },
        { challengeId: 6, imageSrc: "/bicycle.svg", correct: false, text: "la bicicleta", audioSrc: "/es_bicycle.mp3" },
        { challengeId: 6, imageSrc: "/car.svg", correct: false, text: "el carro", audioSrc: "/es_car.mp3" },
        
        // Lesson 3 Challenge Options
        { challengeId: 7, imageSrc: "/book.svg", correct: true, text: "el libro", audioSrc: "/es_book.mp3" },
        { challengeId: 7, imageSrc: "/pencil.png", correct: false, text: "el lápiz", audioSrc: "/es_pencil.mp3" },
        { challengeId: 7, imageSrc: "/pen.svg", correct: false, text: "la pluma", audioSrc: "/es_pen.mp3" },
    
        { challengeId: 8, correct: true, text: "el", audioSrc: "/es_el.mp3" },
        { challengeId: 8, correct: false, text: "la", audioSrc: "/es_la.mp3" },
        { challengeId: 8, correct: false, text: "un", audioSrc: "/es_un.mp3" },
        
        { challengeId: 9, imageSrc: "/bicycle.svg", correct: true, text: "la bicicleta", audioSrc: "/es_bicycle.mp3" },
        { challengeId: 9, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "/es_book.mp3" },
        { challengeId: 9, imageSrc: "/pencil.svg", correct: false, text: "el lápiz", audioSrc: "/es_pencil.mp3" },
        
        // Lesson 4 Challenge Options
        { challengeId: 10, imageSrc: "/pen.svg", correct: true, text: "la pluma", audioSrc: "/es_pen.mp3" },
        { challengeId: 10, imageSrc: "/pencil.png", correct: false, text: "el lápiz", audioSrc: "/es_pencil.mp3" },
        { challengeId: 10, imageSrc: "/chair.svg", correct: false, text: "la silla", audioSrc: "/es_chair.mp3" },
    
        { challengeId: 11, correct: true, text: "el lápiz", audioSrc: "/es_pencil.mp3" },
        { challengeId: 11, correct: false, text: "la pluma", audioSrc: "/es_pen.mp3" },
        { challengeId: 11, correct: false, text: "la silla", audioSrc: "/es_chair.mp3" },
    
        { challengeId: 12, imageSrc: "/chair.svg", correct: true, text: "la silla", audioSrc: "/es_chair.mp3" },
        { challengeId: 12, imageSrc: "/pen.svg", correct: false, text: "la pluma", audioSrc: "/es_pen.mp3" },
        { challengeId: 12, imageSrc: "/pencil.png", correct: false, text: "el lápiz", audioSrc: "/es_pencil.mp3" },
        
        // Lesson 5 Challenge Options
        { challengeId: 13, imageSrc: "/computer.svg", correct: true, text: "la computadora", audioSrc: "/es_computer.mp3" },
        { challengeId: 13, imageSrc: "/phone.svg", correct: false, text: "el teléfono", audioSrc: "/es_phone.mp3" },
        { challengeId: 13, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "/es_book.mp3" },
    
        { challengeId: 14, correct: true, text: "la", audioSrc: "/es_la.mp3" },
        { challengeId: 14, correct: false, text: "el", audioSrc: "/es_el.mp3" },
        { challengeId: 14, correct: false, text: "un", audioSrc: "/es_un.mp3" },
    
        { challengeId: 15, imageSrc: "/phone.svg", correct: true, text: "el teléfono", audioSrc: "/es_phone.mp3" },
        { challengeId: 15, imageSrc: "/computer.svg", correct: false, text: "la computadora", audioSrc: "/es_computer.mp3" },
        { challengeId: 15, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "/es_book.mp3" }
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



    console.log("Seeding finished");
 } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database")
 }
};

main();