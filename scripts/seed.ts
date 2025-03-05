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
        },
        {
            id: 2,
            courseId: 2,
            title: "French",
            description: "Master the fundamentals of French",
            order: 2,
        },
        {
            id: 3,
            courseId: 3,
            title: "Japanese",
            description: "Start learning Japanese from scratch",
            order: 3,
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


    //french dataset
    
        // A
        { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "Pomme", courseId: 2, audioSrc: "/Basics/audio/Apple.mp3" },
        { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "Fourmi", courseId: 2, audioSrc: "/Basics/audio/Ant.mp3" },
        { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "Bras", courseId: 2, audioSrc: "/Basics/audio/Arm.mp3" },
        { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "Avion", courseId: 2, audioSrc: "/Basics/audio/Airplane.mp3" },
        { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "Flèche", courseId: 2, audioSrc: "/Basics/audio/Arrow.mp3" },
        { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "Ancre", courseId: 2, audioSrc: "/Basics/audio/Anchor.mp3" },
        { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "Alligator", courseId: 2, audioSrc: "/Basics/audio/Alligator.mp3" },
        { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "Alarme", courseId: 2, audioSrc: "/Basics/audio/Alarm.mp3" },
        { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "Acteur", courseId: 2, audioSrc: "/Basics/audio/Actor.mp3" },
        { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "Art", courseId: 2, audioSrc: "/Basics/audio/Art.mp3" },
      
        // B
        { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "Balle", courseId: 2, audioSrc: "/Basics/audio/Ball.mp3" },
        { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "Ours", courseId: 2, audioSrc: "/Basics/audio/Bear.mp3" },
        { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "Oiseau", courseId: 2, audioSrc: "/Basics/audio/Bird.mp3" },
        { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "Papillon", courseId: 2, audioSrc: "/Basics/audio/Butterfly.mp3" },
        { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "Banane", courseId: 2, audioSrc: "/Basics/audio/Banana.mp3" },
        { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "Bateau", courseId: 2, audioSrc: "/Basics/audio/Boat.mp3" },
        { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "Boîte", courseId: 2, audioSrc: "/Basics/audio/Box.mp3" },
        { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "Livre", courseId: 2, audioSrc: "/Basics/audio/Book.mp3" },
        { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "Banc", courseId: 2, audioSrc: "/Basics/audio/Bench.mp3" },
        { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "Cloche", courseId: 2, audioSrc: "/Basics/audio/Bell.mp3" },
      
        // C
        { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "Chat", courseId: 2, audioSrc: "/Basics/audio/Cat.mp3" },
        { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "Gâteau", courseId: 2, audioSrc: "/Basics/audio/Cake.mp3" },
        { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "Bougie", courseId: 2, audioSrc: "/Basics/audio/Candle.mp3" },
        { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "Vache", courseId: 2, audioSrc: "/Basics/audio/Cow.mp3" },
        { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "Voiture", courseId: 2, audioSrc: "/Basics/audio/Car.mp3" },
        { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "Pièce", courseId: 2, audioSrc: "/Basics/audio/Coin.mp3" },
        { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "Couronne", courseId: 2, audioSrc: "/Basics/audio/Crown.mp3" },
        { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "Cactus", courseId: 2, audioSrc: "/Basics/audio/Cactus.mp3" },
        { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "Horloge", courseId: 2, audioSrc: "/Basics/audio/Clock.mp3" },
        { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "Nuage", courseId: 2, audioSrc: "/Basics/audio/Cloud.mp3" },
      
        // D
        { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "Chien", courseId: 2, audioSrc: "/Basics/audio/Dog.mp3" },
        { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "Canard", courseId: 2, audioSrc: "/Basics/audio/Duck.mp3" },
        { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "Robe", courseId: 2, audioSrc: "/Basics/audio/Dress.mp3" },
        { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "Porte", courseId: 2, audioSrc: "/Basics/audio/Door.mp3" },
        { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "Diamant", courseId: 2, audioSrc: "/Basics/audio/Diamond.mp3" },
        { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "Dauphin", courseId: 2, audioSrc: "/Basics/audio/Dolphin.mp3" },
        { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "Âne", courseId: 2, audioSrc: "/Basics/audio/Donkey.mp3" },
        { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "Dé", courseId: 2, audioSrc: "/Basics/audio/Dice.mp3" },
        { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "Tambour", courseId: 2, audioSrc: "/Basics/audio/Drum.mp3" },
        { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "Goutte", courseId: 2, audioSrc: "/Basics/audio/Drop.mp3" },
      
        { imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "Éléphant", courseId: 2, audioSrc: "/Basics/audio/Elephant.mp3" },
  { imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "Œuf", courseId: 2, audioSrc: "/Basics/audio/Egg.mp3" },
  { imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "Moteur", courseId: 2, audioSrc: "/Basics/audio/Engine.mp3" },
  { imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "Enveloppe", courseId: 2, audioSrc: "/Basics/audio/Envelope.mp3" },
  { imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "Oreille", courseId: 2, audioSrc: "/Basics/audio/Ear.mp3" },
  { imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "Aigle", courseId: 2, audioSrc: "/Basics/audio/Eagle.mp3" },
  { imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "Terre", courseId: 2, audioSrc: "/Basics/audio/Earth.mp3" },
  { imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "Œil", courseId: 2, audioSrc: "/Basics/audio/Eye.mp3" },
  { imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "Elfe", courseId: 2, audioSrc: "/Basics/audio/Elf.mp3" },
  { imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "Ascenseur", courseId: 2, audioSrc: "/Basics/audio/Elevator.mp3" },

  // F
  { imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "Poisson", courseId: 2, audioSrc: "/Basics/audio/Fish.mp3" },
  { imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "Fleur", courseId: 2, audioSrc: "/Basics/audio/Flower.mp3" },
  { imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "Fourchette", courseId: 2, audioSrc: "/Basics/audio/Fork.mp3" },
  { imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "Feu", courseId: 2, audioSrc: "/Basics/audio/Fire.mp3" },
  { imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "Renard", courseId: 2, audioSrc: "/Basics/audio/Fox.mp3" },
  { imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "Clôture", courseId: 2, audioSrc: "/Basics/audio/Fence.mp3" },
  { imageSrc: "/Basics/Fan.png", title: "Fan", nativenm: "Ventilateur", courseId: 2, audioSrc: "/Basics/audio/Fan.mp3" },
  { imageSrc: "/Basics/Feather.png", title: "Feather", nativenm: "Plume", courseId: 2, audioSrc: "/Basics/audio/Feather.mp3" },
  { imageSrc: "/Basics/Fruit.png", title: "Fruit", nativenm: "Fruit", courseId: 2, audioSrc: "/Basics/audio/Fruit.mp3" },
  { imageSrc: "/Basics/Flag.png", title: "Flag", nativenm: "Drapeau", courseId: 2, audioSrc: "/Basics/audio/Flag.mp3" },

  // G
  { imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "Guitare", courseId: 2, audioSrc: "/Basics/audio/Guitar.mp3" },
  { imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "Raisins", courseId: 2, audioSrc: "/Basics/audio/Grapes.mp3" },
  { imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "Girafe", courseId: 2, audioSrc: "/Basics/audio/Giraffe.mp3" },
  { imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "Chèvre", courseId: 2, audioSrc: "/Basics/audio/Goat.mp3" },
  { imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "Gant", courseId: 2, audioSrc: "/Basics/audio/Glove.mp3" },
  { imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "Jardin", courseId: 2, audioSrc: "/Basics/audio/Garden.mp3" },
  { imageSrc: "/Basics/Gate.png", title: "Gate", nativenm: "Portail", courseId: 2, audioSrc: "/Basics/audio/Gate.mp3" },
  { imageSrc: "/Basics/Ghost.png", title: "Ghost", nativenm: "Fantôme", courseId: 2, audioSrc: "/Basics/audio/Ghost.mp3" },
  { imageSrc: "/Basics/Gold.png", title: "Gold", nativenm: "Or", courseId: 2, audioSrc: "/Basics/audio/Gold.mp3" },
  { imageSrc: "/Basics/Glass.png", title: "Glass", nativenm: "Verre", courseId: 2, audioSrc: "/Basics/audio/Glass.mp3" },

  // H
  { imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "Chapeau", courseId: 2, audioSrc: "/Basics/audio/Hat.mp3" },
  { imageSrc: "/Basics/House.png", title: "House", nativenm: "Maison", courseId: 2, audioSrc: "/Basics/audio/House.mp3" },
  { imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "Cheval", courseId: 2, audioSrc: "/Basics/audio/Horse.mp3" },
  { imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "Marteau", courseId: 2, audioSrc: "/Basics/audio/Hammer.mp3" },
  { imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "Main", courseId: 2, audioSrc: "/Basics/audio/Hand.mp3" },
  { imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "Cœur", courseId: 2, audioSrc: "/Basics/audio/Heart.mp3" },
  { imageSrc: "/Basics/Hill.png", title: "Hill", nativenm: "Colline", courseId: 2, audioSrc: "/Basics/audio/Hill.mp3" },
  { imageSrc: "/Basics/Honey.png", title: "Honey", nativenm: "Miel", courseId: 2, audioSrc: "/Basics/audio/Honey.mp3" },
  { imageSrc: "/Basics/Hook.png", title: "Hook", nativenm: "Crochet", courseId: 2, audioSrc: "/Basics/audio/Hook.mp3" },
  { imageSrc: "/Basics/Helmet.png", title: "Helmet", nativenm: "Casque", courseId: 2, audioSrc: "/Basics/audio/Helmet.mp3" },

  
    // I
    { imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "Glace", courseId: 2, audioSrc: "/Basics/audio/Ice.mp3" },
    { imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "Fer", courseId: 2, audioSrc: "/Basics/audio/Iron.mp3" },
    { imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "Iguane", courseId: 2, audioSrc: "/Basics/audio/Iguana.mp3" },
    { imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "Insecte", courseId: 2, audioSrc: "/Basics/audio/Insect.mp3" },
    { imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "Encre", courseId: 2, audioSrc: "/Basics/audio/Ink.mp3" },
    { imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "Glace", courseId: 2, audioSrc: "/Basics/audio/Ice Cream.mp3" },
    { imageSrc: "/Basics/Island.png", title: "Island", nativenm: "Île", courseId: 2, audioSrc: "/Basics/audio/Island.mp3" },
    { imageSrc: "/Basics/Idea.png", title: "Idea", nativenm: "Idée", courseId: 2, audioSrc: "/Basics/audio/Idea.mp3" },
    { imageSrc: "/Basics/Ivory.png", title: "Ivory", nativenm: "Ivoire", courseId: 2, audioSrc: "/Basics/audio/Ivory.mp3" },
    { imageSrc: "/Basics/Injection.png", title: "Injection", nativenm: "Injection", courseId: 2, audioSrc: "/Basics/audio/Injection.mp3" },
  
    // J
    { imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "Veste", courseId: 2, audioSrc: "/Basics/audio/Jacket.mp3" },
    { imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "Jungle", courseId: 2, audioSrc: "/Basics/audio/Jungle.mp3" },
    { imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "Sauter", courseId: 2, audioSrc: "/Basics/audio/Jump.mp3" },
    { imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "Bocal", courseId: 2, audioSrc: "/Basics/audio/Jar.mp3" },
    { imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "Méduse", courseId: 2, audioSrc: "/Basics/audio/Jellyfish.mp3" },
    { imageSrc: "/Basics/Jewel.png", title: "Jewel", nativenm: "Bijou", courseId: 2, audioSrc: "/Basics/audio/Jewel.mp3" },
    { imageSrc: "/Basics/Jet.png", title: "Jet", nativenm: "Jet", courseId: 2, audioSrc: "/Basics/audio/Jet.mp3" },
    { imageSrc: "/Basics/Joke.png", title: "Joke", nativenm: "Blague", courseId: 2, audioSrc: "/Basics/audio/Joke.mp3" },
    { imageSrc: "/Basics/Journal.png", title: "Journal", nativenm: "Journal", courseId: 2, audioSrc: "/Basics/audio/Journal.mp3" },
    { imageSrc: "/Basics/Jug.png", title: "Jug", nativenm: "Cruche", courseId: 2, audioSrc: "/Basics/audio/Jug.mp3" },
  
    // K
    { imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "Kiwi", courseId: 2, audioSrc: "/Basics/audio/Kiwi.mp3" },
    { imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "Kangourou", courseId: 2, audioSrc: "/Basics/audio/Kangaroo.mp3" },
    { imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "Bouilloire", courseId: 2, audioSrc: "/Basics/audio/Kettle.mp3" },
    { imageSrc: "/Basics/Key.png", title: "Key", nativenm: "Clé", courseId: 2, audioSrc: "/Basics/audio/Key.mp3" },
    { imageSrc: "/Basics/King.png", title: "King", nativenm: "Roi", courseId: 2, audioSrc: "/Basics/audio/King.mp3" },
    { imageSrc: "/Basics/Kite.png", title: "Kite", nativenm: "Cerf-volant", courseId: 2, audioSrc: "/Basics/audio/Kite.mp3" },
    { imageSrc: "/Basics/Knife.png", title: "Knife", nativenm: "Couteau", courseId: 2, audioSrc: "/Basics/audio/Knife.mp3" },
    { imageSrc: "/Basics/Knight.png", title: "Knight", nativenm: "Chevalier", courseId: 2, audioSrc: "/Basics/audio/Knight.mp3" },
    { imageSrc: "/Basics/Knob.png", title: "Knob", nativenm: "Bouton", courseId: 2, audioSrc: "/Basics/audio/Knob.mp3" },
    { imageSrc: "/Basics/Koala.png", title: "Koala", nativenm: "Koala", courseId: 2, audioSrc: "/Basics/audio/Koala.mp3" },
  
    // L
    { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "Lion", courseId: 2, audioSrc: "/Basics/audio/Lion.mp3" },
    { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "Lampe", courseId: 2, audioSrc: "/Basics/audio/Lamp.mp3" },
    { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "Citron", courseId: 2, audioSrc: "/Basics/audio/Lemon.mp3" },
    { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "Échelle", courseId: 2, audioSrc: "/Basics/audio/Ladder.mp3" },
    { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "Feuille", courseId: 2, audioSrc: "/Basics/audio/Leaf.mp3" },
    { imageSrc: "/Basics/Light.png", title: "Light", nativenm: "Lumière", courseId: 2, audioSrc: "/Basics/audio/Light.mp3" },
    { imageSrc: "/Basics/Lake.png", title: "Lake", nativenm: "Lac", courseId: 2, audioSrc: "/Basics/audio/Lake.mp3" },
    { imageSrc: "/Basics/Lock.png", title: "Lock", nativenm: "Serrure", courseId: 2, audioSrc: "/Basics/audio/Lock.mp3" },
    { imageSrc: "/Basics/Lizard.png", title: "Lizard", nativenm: "Lézard", courseId: 2, audioSrc: "/Basics/audio/Lizard.mp3" },
    { imageSrc: "/Basics/Lollipop.png", title: "Lollipop", nativenm: "Sucette", courseId: 2, audioSrc: "/Basics/audio/Lollipop.mp3" },
  
    // M
    { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "Souris", courseId: 2, audioSrc: "/Basics/audio/Mouse.mp3" },
    { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "Singe", courseId: 2, audioSrc: "/Basics/audio/Monkey.mp3" },
    { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "Montagne", courseId: 2, audioSrc: "/Basics/audio/Mountain.mp3" },
    { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "Lait", courseId: 2, audioSrc: "/Basics/audio/Milk.mp3" },
    { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "Miroir", courseId: 2, audioSrc: "/Basics/audio/Mirror.mp3" },
    { imageSrc: "/Basics/Moon.png", title: "Moon", nativenm: "Lune", courseId: 2, audioSrc: "/Basics/audio/Moon.mp3" },
    { imageSrc: "/Basics/Mushroom.png", title: "Mushroom", nativenm: "Champignon", courseId: 2, audioSrc: "/Basics/audio/Mushroom.mp3" },
    { imageSrc: "/Basics/Magnet.png", title: "Magnet", nativenm: "Aimant", courseId: 2, audioSrc: "/Basics/audio/Magnet.mp3" },
    { imageSrc: "/Basics/Mask.png", title: "Mask", nativenm: "Masque", courseId: 2, audioSrc: "/Basics/audio/Mask.mp3" },
    { imageSrc: "/Basics/Map.png", title: "Map", nativenm: "Carte", courseId: 2, audioSrc: "/Basics/audio/Map.mp3" },
  
    // N
    { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "Filet", courseId: 2, audioSrc: "/Basics/audio/Net.mp3" },
    { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nez", courseId: 2, audioSrc: "/Basics/audio/Nose.mp3" },
    { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "Nuit", courseId: 2, audioSrc: "/Basics/audio/Night.mp3" },
    { imageSrc: "/Basics/Nest.png", title: "Nest", nativenm: "Nid", courseId: 2, audioSrc: "/Basics/audio/Nest.mp3" },
    { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "Noix", courseId: 2, audioSrc: "/Basics/audio/Nut.mp3" },
    { imageSrc: "/Basics/Needle.png", title: "Needle", nativenm: "Aiguille", courseId: 2, audioSrc: "/Basics/audio/Needle.mp3" },
    { imageSrc: "/Basics/Napkin.png", title: "Napkin", nativenm: "Serviette", courseId: 2, audioSrc: "/Basics/audio/Napkin.mp3" },
    { imageSrc: "/Basics/Nail.png", title: "Nail", nativenm: "Clou", courseId: 2, audioSrc: "/Basics/audio/Nail.mp3" },
    { imageSrc: "/Basics/Necklace.png", title: "Necklace", nativenm: "Collier", courseId: 2, audioSrc: "/Basics/audio/Necklace.mp3" },
    { imageSrc: "/Basics/Notebook.png", title: "Notebook", nativenm: "Carnet", courseId: 2, audioSrc: "/Basics/audio/Notebook.mp3" },
  
    // O
    { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "Autruche", courseId: 2, audioSrc: "/Basics/audio/Ostrich.mp3" },
    { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "Poulpe", courseId: 2, audioSrc: "/Basics/audio/Octopus.mp3" },
    { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "Hibou", courseId: 2, audioSrc: "/Basics/audio/Owl.mp3" },
    { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "Olive", courseId: 2, audioSrc: "/Basics/audio/Olive.mp3" },
    { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "Oxygène", courseId: 2, audioSrc: "/Basics/audio/Oxygen.mp3" },
    { imageSrc: "/Basics/Orange.png", title: "Orange", nativenm: "Orange", courseId: 2, audioSrc: "/Basics/audio/Orange.mp3" },
    { imageSrc: "/Basics/Onion.png", title: "Onion", nativenm: "Oignon", courseId: 2, audioSrc: "/Basics/audio/Onion.mp3" },
    { imageSrc: "/Basics/Ocean.png", title: "Ocean", nativenm: "Océan", courseId: 2, audioSrc: "/Basics/audio/Ocean.mp3" },
    { imageSrc: "/Basics/Oil.png", title: "Oil", nativenm: "Huile", courseId: 2, audioSrc: "/Basics/audio/Oil.mp3" },
    { imageSrc: "/Basics/Ornament.png", title: "Ornament", nativenm: "Ornement", courseId: 2, audioSrc: "/Basics/audio/Ornament.mp3" },
  
    // P
    { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "Stylo", courseId: 2, audioSrc: "/Basics/audio/Pen.mp3" },
    { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "Ananas", courseId: 2, audioSrc: "/Basics/audio/Pineapple.mp3" },
    { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "Panda", courseId: 2, audioSrc: "/Basics/audio/Panda.mp3" },
    { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "Crayon", courseId: 2, audioSrc: "/Basics/audio/Pencil.mp3" },
    { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "Avion", courseId: 2, audioSrc: "/Basics/audio/Plane.mp3" },
    { imageSrc: "/Basics/Plate.png", title: "Plate", nativenm: "Assiette", courseId: 2, audioSrc: "/Basics/audio/Plate.mp3" },
    { imageSrc: "/Basics/Plant.png", title: "Plant", nativenm: "Plante", courseId: 2, audioSrc: "/Basics/audio/Plant.mp3" },
    { imageSrc: "/Basics/Peacock.png", title: "Peacock", nativenm: "Paon", courseId: 2, audioSrc: "/Basics/audio/Peacock.mp3" },
    { imageSrc: "/Basics/Potato.png", title: "Potato", nativenm: "Pomme de terre", courseId: 2, audioSrc: "/Basics/audio/Potato.mp3" },
    { imageSrc: "/Basics/Pumpkin.png", title: "Pumpkin", nativenm: "Citrouille", courseId: 2, audioSrc: "/Basics/audio/Pumpkin.mp3" },
  
    
        // Q
        { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "Couette", courseId: 2, audioSrc: "/Basics/audio/Quilt.mp3" },
        { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "Reine", courseId: 2, audioSrc: "/Basics/audio/Queen.mp3" },
        { imageSrc: "/Basics/Quail.png", title: "Quail", nativenm: "Caille", courseId: 2, audioSrc: "/Basics/audio/Quail.mp3" },
        { imageSrc: "/Basics/Quill.png", title: "Quill", nativenm: "Plume", courseId: 2, audioSrc: "/Basics/audio/Quill.mp3" },
        { imageSrc: "/Basics/Quartz.png", title: "Quartz", nativenm: "Quartz", courseId: 2, audioSrc: "/Basics/audio/Quartz.mp3" },
        { imageSrc: "/Basics/Question.png", title: "Question", nativenm: "Question", courseId: 2, audioSrc: "/Basics/audio/Question.mp3" },
        { imageSrc: "/Basics/Queue.png", title: "Queue", nativenm: "File d'attente", courseId: 2, audioSrc: "/Basics/audio/Queue.mp3" },
        { imageSrc: "/Basics/Quiver.png", title: "Quiver", nativenm: "Carquois", courseId: 2, audioSrc: "/Basics/audio/Quiver.mp3" },
        { imageSrc: "/Basics/Quokka.png", title: "Quokka", nativenm: "Quokka", courseId: 2, audioSrc: "/Basics/audio/Quokka.mp3" },
        { imageSrc: "/Basics/Quiche.png", title: "Quiche", nativenm: "Quiche", courseId: 2, audioSrc: "/Basics/audio/Quiche.mp3" },
      
        // R
        { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "Lapin", courseId: 2, audioSrc: "/Basics/audio/Rabbit.mp3" },
        { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "Pluie", courseId: 2, audioSrc: "/Basics/audio/Rain.mp3" },
        { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "Anneau", courseId: 2, audioSrc: "/Basics/audio/Ring.mp3" },
        { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "Rose", courseId: 2, audioSrc: "/Basics/audio/Rose.mp3" },
        { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "Robot", courseId: 2, audioSrc: "/Basics/audio/Robot.mp3" },
        { imageSrc: "/Basics/Rocket.png", title: "Rocket", nativenm: "Fusée", courseId: 2, audioSrc: "/Basics/audio/Rocket.mp3" },
        { imageSrc: "/Basics/River.png", title: "River", nativenm: "Rivière", courseId: 2, audioSrc: "/Basics/audio/River.mp3" },
        { imageSrc: "/Basics/Rope.png", title: "Rope", nativenm: "Corde", courseId: 2, audioSrc: "/Basics/audio/Rope.mp3" },
        { imageSrc: "/Basics/Roof.png", title: "Roof", nativenm: "Toit", courseId: 2, audioSrc: "/Basics/audio/Roof.mp3" },
        { imageSrc: "/Basics/Ruler.png", title: "Ruler", nativenm: "Règle", courseId: 2, audioSrc: "/Basics/audio/Ruler.mp3" },
      
        // S
        { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "Soleil", courseId: 2, audioSrc: "/Basics/audio/Sun.mp3" },
        { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "Serpent", courseId: 2, audioSrc: "/Basics/audio/Snake.mp3" },
        { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "Étoile", courseId: 2, audioSrc: "/Basics/audio/Star.mp3" },
        { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "Chaussettes", courseId: 2, audioSrc: "/Basics/audio/Socks.mp3" },
        { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "Sable", courseId: 2, audioSrc: "/Basics/audio/Sand.mp3" },
        { imageSrc: "/Basics/Ship.png", title: "Ship", nativenm: "Bateau", courseId: 2, audioSrc: "/Basics/audio/Ship.mp3" },
        { imageSrc: "/Basics/Shirt.png", title: "Shirt", nativenm: "Chemise", courseId: 2, audioSrc: "/Basics/audio/Shirt.mp3" },
        { imageSrc: "/Basics/Spoon.png", title: "Spoon", nativenm: "Cuillère", courseId: 2, audioSrc: "/Basics/audio/Spoon.mp3" },
        { imageSrc: "/Basics/Stone.png", title: "Stone", nativenm: "Pierre", courseId: 2, audioSrc: "/Basics/audio/Stone.mp3" },
        { imageSrc: "/Basics/Swing.png", title: "Swing", nativenm: "Balançoire", courseId: 2, audioSrc: "/Basics/audio/Swing.mp3" },
      
        // T
        { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "Tigre", courseId: 2, audioSrc: "/Basics/audio/Tiger.mp3" },
        { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "Arbre", courseId: 2, audioSrc: "/Basics/audio/Tree.mp3" },
        { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "Table", courseId: 2, audioSrc: "/Basics/audio/Table.mp3" },
        { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "Télévision", courseId: 2, audioSrc: "/Basics/audio/Television.mp3" },
        { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "Dent", courseId: 2, audioSrc: "/Basics/audio/Tooth.mp3" },
        { imageSrc: "/Basics/Train.png", title: "Train", nativenm: "Train", courseId: 2, audioSrc: "/Basics/audio/Train.mp3" },
        { imageSrc: "/Basics/Turtle.png", title: "Turtle", nativenm: "Tortue", courseId: 2, audioSrc: "/Basics/audio/Turtle.mp3" },
        { imageSrc: "/Basics/Tent.png", title: "Tent", nativenm: "Tente", courseId: 2, audioSrc: "/Basics/audio/Tent.mp3" },
        { imageSrc: "/Basics/Trophy.png", title: "Trophy", nativenm: "Trophée", courseId: 2, audioSrc: "/Basics/audio/Trophy.mp3" },
        { imageSrc: "/Basics/Tail.png", title: "Tail", nativenm: "Queue", courseId: 2, audioSrc: "/Basics/audio/Tail.mp3" },
      
        // U
        { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "Parapluie", courseId: 2, audioSrc: "/Basics/audio/Umbrella.mp3" },
        { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "Urne", courseId: 2, audioSrc: "/Basics/audio/Urn.mp3" },
        { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "Oncle", courseId: 2, audioSrc: "/Basics/audio/Uncle.mp3" },
        { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "Licorne", courseId: 2, audioSrc: "/Basics/audio/Unicorn.mp3" },
        { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "Univers", courseId: 2, audioSrc: "/Basics/audio/Universe.mp3" },
        { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "Ustensile", courseId: 2, audioSrc: "/Basics/audio/Utensil.mp3" },
        { imageSrc: "/Basics/Uniform.png", title: "Uniform", nativenm: "Uniforme", courseId: 2, audioSrc: "/Basics/audio/Uniform.mp3" },
        { imageSrc: "/Basics/Urchin.png", title: "Urchin", nativenm: "Oursin", courseId: 2, audioSrc: "/Basics/audio/Urchin.mp3" },
        { imageSrc: "/Basics/Ukulele.png", title: "Ukulele", nativenm: "Ukulélé", courseId: 2, audioSrc: "/Basics/audio/Ukulele.mp3" },
        { imageSrc: "/Basics/Update.png", title: "Update", nativenm: "Mise à jour", courseId: 2, audioSrc: "/Basics/audio/Update.mp3" },
      
        // V
        { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "Fourgonnette", courseId: 2, audioSrc: "/Basics/audio/Van.mp3" },
        { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "Vautour", courseId: 2, audioSrc: "/Basics/audio/Vulture.mp3" },
        { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "Aspirateur", courseId: 2, audioSrc: "/Basics/audio/Vacuum.mp3" },
        { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "Victime", courseId: 2, audioSrc: "/Basics/audio/Victim.mp3" },
        { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "Légume", courseId: 2, audioSrc: "/Basics/audio/Vegetable.mp3" },
        { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "Volcan", courseId: 2, audioSrc: "/Basics/audio/Volcano.mp3" },
        { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "Vacances", courseId: 2, audioSrc: "/Basics/audio/Vacation.mp3" },
        { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "Vampire", courseId: 2, audioSrc: "/Basics/audio/Vampire.mp3" },
        { imageSrc: "/Basics/Vest.png", title: "Vest", nativenm: "Gilet", courseId: 2, audioSrc: "/Basics/audio/Vest.mp3" },
        { imageSrc: "/Basics/Vine.png", title: "Vine", nativenm: "Vigne", courseId: 2, audioSrc: "/Basics/audio/Vine.mp3" },
      
        // W
        { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "Loup", courseId: 2, audioSrc: "/Basics/audio/Wolf.mp3" },
        { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "Pastèque", courseId: 2, audioSrc: "/Basics/audio/Watermelon.mp3" },
        { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "Fenêtre", courseId: 2, audioSrc: "/Basics/audio/Window.mp3" },
        { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "Wagon", courseId: 2, audioSrc: "/Basics/audio/Wagon.mp3" },
        { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "Cascade", courseId: 2, audioSrc: "/Basics/audio/Waterfall.mp3" },
        { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "Montre", courseId: 2, audioSrc: "/Basics/audio/Watch.mp3" },
        { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "Baleine", courseId: 2, audioSrc: "/Basics/audio/Whale.mp3" },
        { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "Hiver", courseId: 2, audioSrc: "/Basics/audio/Winter.mp3" },
        { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "Poignet", courseId: 2, audioSrc: "/Basics/audio/Wrist.mp3" },
        { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "Sifflet", courseId: 2, audioSrc: "/Basics/audio/Whistle.mp3" },
      
        // X
        { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "Xylophone", courseId: 2, audioSrc: "/Basics/audio/Xylophone.mp3" },
        { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "Rayon X", courseId: 2, audioSrc: "/Basics/audio/X-ray.mp3" },
        { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "Xénon", courseId: 2, audioSrc: "/Basics/audio/Xenon.mp3" },
        { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "Noël", courseId: 2, audioSrc: "/Basics/audio/Xmas.mp3" },
        { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "Xénophobie", courseId: 2, audioSrc: "/Basics/audio/Xenophobia.mp3" },
        { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "Xénial", courseId: 2, audioSrc: "/Basics/audio/Xenial.mp3" },
        { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "Xeon", courseId: 2, audioSrc: "/Basics/audio/Xeon.mp3" },
        { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "Examiner", courseId: 2, audioSrc: "/Basics/audio/Examine.mp3" },
        { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "Exploser", courseId: 2, audioSrc: "/Basics/audio/Explode.mp3" },
        { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "Exil", courseId: 2, audioSrc: "/Basics/audio/Exile.mp3" },
      
        // Y
        { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "Yak", courseId: 2, audioSrc: "/Basics/audio/Yak.mp3" },
        { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "Jaune", courseId: 2, audioSrc: "/Basics/audio/Yellow.mp3" },
        { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "Yaourt", courseId: 2, audioSrc: "/Basics/audio/Yogurt.mp3" },
        { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "Fil", courseId: 2, audioSrc: "/Basics/audio/Yarn.mp3" },
        { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "Yoga", courseId: 2, audioSrc: "/Basics/audio/Yoga.mp3" },
        { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "Bâillement", courseId: 2, audioSrc: "/Basics/audio/Yawn.mp3" },
        { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "Cour", courseId: 2, audioSrc: "/Basics/audio/Yard.mp3" },
        { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "Crier", courseId: 2, audioSrc: "/Basics/audio/Yell.mp3" },
        { imageSrc: "/Basics/Yolk.png", title: "Yolk", nativenm: "Jaune d'œuf", courseId: 2, audioSrc: "/Basics/audio/Yolk.mp3" },
        { imageSrc: "/Basics/Yacht.png", title: "Yacht", nativenm: "Yacht", courseId: 2, audioSrc: "/Basics/audio/Yacht.mp3" },
      
        // Z
        { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "Zèbre", courseId: 2, audioSrc: "/Basics/audio/Zebra.mp3" },
        { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "Zoo", courseId: 2, audioSrc: "/Basics/audio/Zoo.mp3" },
        { imageSrc: "/Basics/Zenith.png", title: "Zenith", nativenm: "Zénith", courseId: 2, audioSrc: "/Basics/audio/Zenith.mp3" },
        { imageSrc: "/Basics/Zero.png", title: "Zero", nativenm: "Zéro", courseId: 2, audioSrc: "/Basics/audio/Zero.mp3" },
        { imageSrc: "/Basics/Zigzag.png", title: "Zigzag", nativenm: "Zigzag", courseId: 2, audioSrc: "/Basics/audio/Zigzag.mp3" },
        { imageSrc: "/Basics/Zeppelin.png", title: "Zeppelin", nativenm: "Zeppelin", courseId: 2, audioSrc: "/Basics/audio/Zeppelin.mp3" },
        { imageSrc: "/Basics/Zombie.png", title: "Zombie", nativenm: "Zombie", courseId: 2, audioSrc: "/Basics/audio/Zombie.mp3" },
        { imageSrc: "/Basics/Zone.png", title: "Zone", nativenm: "Zone", courseId: 2, audioSrc: "/Basics/audio/Zone.mp3" },
        { imageSrc: "/Basics/Zodiac.png", title: "Zodiac", nativenm: "Zodiaque", courseId: 2, audioSrc: "/Basics/audio/Zodiac.mp3" },
        { imageSrc: "/Basics/Zoom.png", title: "Zoom", nativenm: "Zoom", courseId: 2, audioSrc: "/Basics/audio/Zoom.mp3" },
      
      
    
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
        { id: 5, unitId: 1, order: 5, title: "Conjunctions"},

        // french 
        {
            id: 6,
            unitId: 2,
            order: 1,
            title: "Nouns",
        },
        
        { id: 7, unitId: 2, order: 2, title: "Verbs" },
        { id: 8, unitId: 2, order: 3, title: "Adjectives" },
        { id: 9, unitId: 2, order: 4, title: "Pronouns" },
        { id: 10, unitId: 2, order: 5, title: "Conjunctions" },

        //japnese
        {
            id: 11,
            unitId: 3,
            order: 1,
            title: "Nouns",
        },
        
        { id: 12, unitId: 3, order: 2, title: "Verbs" },
        { id: 13, unitId: 3, order: 3, title: "Adjectives" },
        { id: 14, unitId: 3, order: 4, title: "Pronouns" },
        { id: 15, unitId: 3, order: 5, title: "Conjunctions" }
    ]);

    await db.insert(schema.challenges).values([
        // Spanish Challenges (Lesson 1-5)
        { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'How do you say "the man" in Spanish?' },
        { id: 2, lessonId: 1, type: "SELECT", order: 2, question: 'How do you say "the woman" in Spanish?' },
        { id: 3, lessonId: 1, type: "SELECT", order: 3, question: 'How do you say "the robot" in Spanish?' },
    
        { id: 4, lessonId: 2, type: "SELECT", order: 1, question: 'Which of these means "the car" in Spanish?' },
        { id: 5, lessonId: 2, type: "ASSIST", order: 2, question: 'Complete the sentence: "I am driving ___ carro."' },
        { id: 6, lessonId: 2, type: "SELECT", order: 3, question: 'Which of these means "the house" in Spanish?' },
    
        { id: 7, lessonId: 3, type: "SELECT", order: 1, question: 'How do you say "the book" in Spanish?' },
        { id: 8, lessonId: 3, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am reading ___ libro."' },
        { id: 9, lessonId: 3, type: "SELECT", order: 3, question: 'Which of these means "the bicycle" in Spanish?' },
    
        { id: 10, lessonId: 4, type: "SELECT", order: 1, question: 'Which of these means "the pen" in Spanish?' },
        { id: 11, lessonId: 4, type: "ASSIST", order: 2, question: 'How do you say "the pencil" in Spanish?' },
        { id: 12, lessonId: 4, type: "SELECT", order: 3, question: 'Which of these means "the chair" in Spanish?' },
    
        { id: 13, lessonId: 5, type: "SELECT", order: 1, question: 'Which of these means "the computer" in Spanish?' },
        { id: 14, lessonId: 5, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am using ___ computadora."' },
        { id: 15, lessonId: 5, type: "SELECT", order: 3, question: 'How do you say "the phone" in Spanish?' },
    
        // French Challenges (Lesson 6-10)
        { id: 16, lessonId: 6, type: "SELECT", order: 1, question: 'How do you say "the man" in French?' },
        { id: 17, lessonId: 6, type: "SELECT", order: 2, question: 'How do you say "the woman" in French?' },
        { id: 18, lessonId: 6, type: "SELECT", order: 3, question: 'How do you say "the robot" in French?' },
    
        { id: 19, lessonId: 7, type: "SELECT", order: 1, question: 'Which of these means "the car" in French?' },
        { id: 20, lessonId: 7, type: "ASSIST", order: 2, question: 'Complete the sentence: "I am driving ___ voiture."' },
        { id: 21, lessonId: 7, type: "SELECT", order: 3, question: 'Which of these means "the house" in French?' },
    
        { id: 22, lessonId: 8, type: "SELECT", order: 1, question: 'How do you say "the book" in French?' },
        { id: 23, lessonId: 8, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am reading ___ livre."' },
        { id: 24, lessonId: 8, type: "SELECT", order: 3, question: 'Which of these means "the bicycle" in French?' },
    
        { id: 25, lessonId: 9, type: "SELECT", order: 1, question: 'Which of these means "the pen" in French?' },
        { id: 26, lessonId: 9, type: "ASSIST", order: 2, question: 'How do you say "the pencil" in French?' },
        { id: 27, lessonId: 9, type: "SELECT", order: 3, question: 'Which of these means "the chair" in French?' },
    
        { id: 28, lessonId: 10, type: "SELECT", order: 1, question: 'Which of these means "the computer" in French?' },
        { id: 29, lessonId: 10, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am using ___ ordinateur."' },
        { id: 30, lessonId: 10, type: "SELECT", order: 3, question: 'How do you say "the phone" in French?' },
    
        // Japanese Challenges (Lesson 11-15)
        { id: 31, lessonId: 11, type: "SELECT", order: 1, question: 'How do you say "the man" in Japanese?' },
        { id: 32, lessonId: 11, type: "SELECT", order: 2, question: 'How do you say "the woman" in Japanese?' },
        { id: 33, lessonId: 11, type: "SELECT", order: 3, question: 'How do you say "the robot" in Japanese?' },
    
        { id: 34, lessonId: 12, type: "SELECT", order: 1, question: 'Which of these means "the car" in Japanese?' },
        { id: 35, lessonId: 12, type: "ASSIST", order: 2, question: 'Complete the sentence: "I am driving ___ kuruma."' },
        { id: 36, lessonId: 12, type: "SELECT", order: 3, question: 'Which of these means "the house" in Japanese?' },
    
        { id: 37, lessonId: 13, type: "SELECT", order: 1, question: 'How do you say "the book" in Japanese?' },
        { id: 38, lessonId: 13, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am reading ___ hon."' },
        { id: 39, lessonId: 13, type: "SELECT", order: 3, question: 'Which of these means "the bicycle" in Japanese?' },
    
        { id: 40, lessonId: 14, type: "SELECT", order: 1, question: 'Which of these means "the pen" in Japanese?' },
        { id: 41, lessonId: 14, type: "ASSIST", order: 2, question: 'How do you say "the pencil" in Japanese?' },
        { id: 42, lessonId: 14, type: "SELECT", order: 3, question: 'Which of these means "the chair" in Japanese?' },
    
        { id: 43, lessonId: 15, type: "SELECT", order: 1, question: 'Which of these means "the computer" in Japanese?' },
        { id: 44, lessonId: 15, type: "ASSIST", order: 2, question: 'Complete the phrase: "I am using ___ konpyuutaa."' },
        { id: 45, lessonId: 15, type: "SELECT", order: 3, question: 'How do you say "the phone" in Japanese?' }
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
        { challengeId: 15, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "/es_book.mp3" },

        // french
        { challengeId: 16, imageSrc: "/man.svg", correct: true, text: "l'homme", audioSrc: "/fr_man.mp3" },
    { challengeId: 16, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "/fr_woman.mp3" },
    { challengeId: 16, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "/fr_robot.mp3" },

    { challengeId: 17, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "/fr_man.mp3" },
    { challengeId: 17, imageSrc: "/woman.svg", correct: true, text: "la femme", audioSrc: "/fr_woman.mp3" },
    { challengeId: 17, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "/fr_robot.mp3" },

    { challengeId: 18, imageSrc: "/robot.svg", correct: true, text: "le robot", audioSrc: "/fr_robot.mp3" },
    { challengeId: 18, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "/fr_man.mp3" },
    { challengeId: 18, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "/fr_woman.mp3" },

    // Lesson 7 Challenge Options (French)
    { challengeId: 19, imageSrc: "/car.svg", correct: true, text: "la voiture", audioSrc: "/fr_car.mp3" },
    { challengeId: 19, imageSrc: "/house.svg", correct: false, text: "la maison", audioSrc: "/fr_house.mp3" },
    { challengeId: 19, imageSrc: "/bicycle.svg", correct: false, text: "le vélo", audioSrc: "/fr_bicycle.mp3" },

    { challengeId: 20, correct: true, text: "la", audioSrc: "/fr_la.mp3" },
    { challengeId: 20, correct: false, text: "le", audioSrc: "/fr_le.mp3" },
    { challengeId: 20, correct: false, text: "une", audioSrc: "/fr_une.mp3" },

    { challengeId: 21, imageSrc: "/house.svg", correct: true, text: "la maison", audioSrc: "/fr_house.mp3" },
    { challengeId: 21, imageSrc: "/bicycle.svg", correct: false, text: "le vélo", audioSrc: "/fr_bicycle.mp3" },
    { challengeId: 21, imageSrc: "/car.svg", correct: false, text: "la voiture", audioSrc: "/fr_car.mp3" },

    // Lesson 8 Challenge Options (French)
    { challengeId: 22, imageSrc: "/book.svg", correct: true, text: "le livre", audioSrc: "/fr_book.mp3" },
    { challengeId: 22, imageSrc: "/pencil.png", correct: false, text: "le crayon", audioSrc: "/fr_pencil.mp3" },
    { challengeId: 22, imageSrc: "/pen.svg", correct: false, text: "le stylo", audioSrc: "/fr_pen.mp3" },

    { challengeId: 23, correct: true, text: "le", audioSrc: "/fr_le.mp3" },
    { challengeId: 23, correct: false, text: "la", audioSrc: "/fr_la.mp3" },
    { challengeId: 23, correct: false, text: "un", audioSrc: "/fr_un.mp3" },

    { challengeId: 24, imageSrc: "/bicycle.svg", correct: true, text: "le vélo", audioSrc: "/fr_bicycle.mp3" },
    { challengeId: 24, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "/fr_book.mp3" },
    { challengeId: 24, imageSrc: "/pencil.svg", correct: false, text: "le crayon", audioSrc: "/fr_pencil.mp3" },

    // Lesson 9 Challenge Options (French)
    { challengeId: 25, imageSrc: "/pen.svg", correct: true, text: "le stylo", audioSrc: "/fr_pen.mp3" },
    { challengeId: 25, imageSrc: "/pencil.png", correct: false, text: "le crayon", audioSrc: "/fr_pencil.mp3" },
    { challengeId: 25, imageSrc: "/chair.svg", correct: false, text: "la chaise", audioSrc: "/fr_chair.mp3" },

    { challengeId: 26, correct: true, text: "le crayon", audioSrc: "/fr_pencil.mp3" },
    { challengeId: 26, correct: false, text: "le stylo", audioSrc: "/fr_pen.mp3" },
    { challengeId: 26, correct: false, text: "la chaise", audioSrc: "/fr_chair.mp3" },

    { challengeId: 27, imageSrc: "/chair.svg", correct: true, text: "la chaise", audioSrc: "/fr_chair.mp3" },
    { challengeId: 27, imageSrc: "/pen.svg", correct: false, text: "le stylo", audioSrc: "/fr_pen.mp3" },
    { challengeId: 27, imageSrc: "/pencil.png", correct: false, text: "le crayon", audioSrc: "/fr_pencil.mp3" },

    // Lesson 10 Challenge Options (French)
    { challengeId: 28, imageSrc: "/computer.svg", correct: true, text: "l'ordinateur", audioSrc: "/fr_computer.mp3" },
    { challengeId: 28, imageSrc: "/phone.svg", correct: false, text: "le téléphone", audioSrc: "/fr_phone.mp3" },
    { challengeId: 28, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "/fr_book.mp3" },

    { challengeId: 29, correct: true, text: "l'", audioSrc: "/fr_l'.mp3" },
    { challengeId: 29, correct: false, text: "le", audioSrc: "/fr_le.mp3" },
    { challengeId: 29, correct: false, text: "la", audioSrc: "/fr_la.mp3" },

    { challengeId: 30, imageSrc: "/phone.svg", correct: true, text: "le téléphone", audioSrc: "/fr_phone.mp3" },
    { challengeId: 30, imageSrc: "/computer.svg", correct: false, text: "l'ordinateur", audioSrc: "/fr_computer.mp3" },
    { challengeId: 30, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "/fr_book.mp3" },


    // japnese 

        // Lesson 11 Challenge Options (Japanese)
        { challengeId: 31, imageSrc: "/man.svg", correct: true, text: "男の人", audioSrc: "/jp_man.mp3" },
        { challengeId: 31, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "/jp_woman.mp3" },
        { challengeId: 31, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "/jp_robot.mp3" },
    
        { challengeId: 32, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "/jp_man.mp3" },
        { challengeId: 32, imageSrc: "/woman.svg", correct: true, text: "女の人", audioSrc: "/jp_woman.mp3" },
        { challengeId: 32, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "/jp_robot.mp3" },
    
        { challengeId: 33, imageSrc: "/robot.svg", correct: true, text: "ロボット", audioSrc: "/jp_robot.mp3" },
        { challengeId: 33, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "/jp_man.mp3" },
        { challengeId: 33, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "/jp_woman.mp3" },
    
        // Lesson 12 Challenge Options (Japanese)
        { challengeId: 34, imageSrc: "/car.svg", correct: true, text: "車", audioSrc: "/jp_car.mp3" },
        { challengeId: 34, imageSrc: "/house.svg", correct: false, text: "家", audioSrc: "/jp_house.mp3" },
        { challengeId: 34, imageSrc: "/bicycle.svg", correct: false, text: "自転車", audioSrc: "/jp_bicycle.mp3" },
    
        { challengeId: 35, correct: true, text: "を", audioSrc: "/jp_wo.mp3" },
        { challengeId: 35, correct: false, text: "の", audioSrc: "/jp_no.mp3" },
        { challengeId: 35, correct: false, text: "に", audioSrc: "/jp_ni.mp3" },
    
        { challengeId: 36, imageSrc: "/house.svg", correct: true, text: "家", audioSrc: "/jp_house.mp3" },
        { challengeId: 36, imageSrc: "/bicycle.svg", correct: false, text: "自転車", audioSrc: "/jp_bicycle.mp3" },
        { challengeId: 36, imageSrc: "/car.svg", correct: false, text: "車", audioSrc: "/jp_car.mp3" },
    
        // Lesson 13 Challenge Options (Japanese)
        { challengeId: 37, imageSrc: "/book.svg", correct: true, text: "本", audioSrc: "/jp_book.mp3" },
        { challengeId: 37, imageSrc: "/pencil.png", correct: false, text: "鉛筆", audioSrc: "/jp_pencil.mp3" },
        { challengeId: 37, imageSrc: "/pen.svg", correct: false, text: "ペン", audioSrc: "/jp_pen.mp3" },
    
        { challengeId: 38, correct: true, text: "を", audioSrc: "/jp_wo.mp3" },
        { challengeId: 38, correct: false, text: "の", audioSrc: "/jp_no.mp3" },
        { challengeId: 38, correct: false, text: "に", audioSrc: "/jp_ni.mp3" },
    
        { challengeId: 39, imageSrc: "/bicycle.svg", correct: true, text: "自転車", audioSrc: "/jp_bicycle.mp3" },
        { challengeId: 39, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "/jp_book.mp3" },
        { challengeId: 39, imageSrc: "/pencil.svg", correct: false, text: "鉛筆", audioSrc: "/jp_pencil.mp3" },
    
        // Lesson 14 Challenge Options (Japanese)
        { challengeId: 40, imageSrc: "/pen.svg", correct: true, text: "ペン", audioSrc: "/jp_pen.mp3" },
        { challengeId: 40, imageSrc: "/pencil.png", correct: false, text: "鉛筆", audioSrc: "/jp_pencil.mp3" },
        { challengeId: 40, imageSrc: "/chair.svg", correct: false, text: "椅子", audioSrc: "/jp_chair.mp3" },
    
        { challengeId: 41, correct: true, text: "鉛筆", audioSrc: "/jp_pencil.mp3" },
        { challengeId: 41, correct: false, text: "ペン", audioSrc: "/jp_pen.mp3" },
        { challengeId: 41, correct: false, text: "椅子", audioSrc: "/jp_chair.mp3" },
    
        { challengeId: 42, imageSrc: "/chair.svg", correct: true, text: "椅子", audioSrc: "/jp_chair.mp3" },
        { challengeId: 42, imageSrc: "/pen.svg", correct: false, text: "ペン", audioSrc: "/jp_pen.mp3" },
        { challengeId: 42, imageSrc: "/pencil.png", correct: false, text: "鉛筆", audioSrc: "/jp_pencil.mp3" },
    
        // Lesson 15 Challenge Options (Japanese)
        { challengeId: 43, imageSrc: "/computer.svg", correct: true, text: "コンピューター", audioSrc: "/jp_computer.mp3" },
        { challengeId: 43, imageSrc: "/phone.svg", correct: false, text: "電話", audioSrc: "/jp_phone.mp3" },
        { challengeId: 43, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "/jp_book.mp3" },
    
        { challengeId: 44, correct: true, text: "を", audioSrc: "/jp_wo.mp3" },
        { challengeId: 44, correct: false, text: "の", audioSrc: "/jp_no.mp3" },
        { challengeId: 44, correct: false, text: "に", audioSrc: "/jp_ni.mp3" },
    
        { challengeId: 45, imageSrc: "/phone.svg", correct: true, text: "電話", audioSrc: "/jp_phone.mp3" },
        { challengeId: 45, imageSrc: "/computer.svg", correct: false, text: "コンピューター", audioSrc: "/jp_computer.mp3" },
        { challengeId: 45, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "/jp_book.mp3" }
    


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