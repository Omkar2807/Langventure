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
        { imageSrc: "/Basics/Apple.png", title: "Apple", nativenm: "Manzana", audioSrc: null },
        { imageSrc: "/Basics/Ant.png", title: "Ant", nativenm: "Hormiga", audioSrc: null },
        { imageSrc: "/Basics/Arm.png", title: "Arm", nativenm: "Brazo", audioSrc: null },
        { imageSrc: "/Basics/Airplane.png", title: "Airplane", nativenm: "Avión", audioSrc: null },
        { imageSrc: "/Basics/Arrow.png", title: "Arrow", nativenm: "Flecha", audioSrc: null },
        { imageSrc: "/Basics/Anchor.png", title: "Anchor", nativenm: "Ancla", audioSrc: null },
        { imageSrc: "/Basics/Alligator.png", title: "Alligator", nativenm: "Caimán", audioSrc: null },
        { imageSrc: "/Basics/Alarm.png", title: "Alarm", nativenm: "Alarma", audioSrc: null },
        { imageSrc: "/Basics/Actor.png", title: "Actor", nativenm: "Actor", audioSrc: null },
        { imageSrc: "/Basics/Art.png", title: "Art", nativenm: "Arte", audioSrc: null },
      
        // B
        { imageSrc: "/Basics/Ball.png", title: "Ball", nativenm: "Pelota", audioSrc: null },
        { imageSrc: "/Basics/Bear.png", title: "Bear", nativenm: "Oso", audioSrc: null },
        { imageSrc: "/Basics/Bird.png", title: "Bird", nativenm: "Pájaro", audioSrc: null },
        { imageSrc: "/Basics/Butterfly.png", title: "Butterfly", nativenm: "Mariposa", audioSrc: null },
        { imageSrc: "/Basics/Banana.png", title: "Banana", nativenm: "Plátano", audioSrc: null },
        { imageSrc: "/Basics/Boat.png", title: "Boat", nativenm: "Barco", audioSrc: null },
        { imageSrc: "/Basics/Box.png", title: "Box", nativenm: "Caja", audioSrc: null },
        { imageSrc: "/Basics/Book.png", title: "Book", nativenm: "Libro", audioSrc: null },
        { imageSrc: "/Basics/Bench.png", title: "Bench", nativenm: "Banco", audioSrc: null },
        { imageSrc: "/Basics/Bell.png", title: "Bell", nativenm: "Campana", audioSrc: null },
      
        // C
        { imageSrc: "/Basics/Cat.png", title: "Cat", nativenm: "Gato", audioSrc: null },
        { imageSrc: "/Basics/Cake.png", title: "Cake", nativenm: "Pastel", audioSrc: null },
        { imageSrc: "/Basics/Candle.png", title: "Candle", nativenm: "Vela", audioSrc: null },
        { imageSrc: "/Basics/Cow.png", title: "Cow", nativenm: "Vaca", audioSrc: null },
        { imageSrc: "/Basics/Car.png", title: "Car", nativenm: "Coche", audioSrc: null },
        { imageSrc: "/Basics/Coin.png", title: "Coin", nativenm: "Moneda", audioSrc: null },
        { imageSrc: "/Basics/Crown.png", title: "Crown", nativenm: "Corona", audioSrc: null },
        { imageSrc: "/Basics/Cactus.png", title: "Cactus", nativenm: "Cacto", audioSrc: null },
        { imageSrc: "/Basics/Clock.png", title: "Clock", nativenm: "Reloj", audioSrc: null },
        { imageSrc: "/Basics/Cloud.png", title: "Cloud", nativenm: "Nube", audioSrc: null },
      
        // D
        { imageSrc: "/Basics/Dog.png", title: "Dog", nativenm: "Perro", audioSrc: null },
        { imageSrc: "/Basics/Duck.png", title: "Duck", nativenm: "Pato", audioSrc: null },
        { imageSrc: "/Basics/Dress.png", title: "Dress", nativenm: "Vestido", audioSrc: null },
        { imageSrc: "/Basics/Door.png", title: "Door", nativenm: "Puerta", audioSrc: null },
        { imageSrc: "/Basics/Diamond.png", title: "Diamond", nativenm: "Diamante", audioSrc: null },
        { imageSrc: "/Basics/Dolphin.png", title: "Dolphin", nativenm: "Delfín", audioSrc: null },
        { imageSrc: "/Basics/Donkey.png", title: "Donkey", nativenm: "Burro", audioSrc: null },
        { imageSrc: "/Basics/Dice.png", title: "Dice", nativenm: "Dado", audioSrc: null },
        { imageSrc: "/Basics/Drum.png", title: "Drum", nativenm: "Tambor", audioSrc: null },
        { imageSrc: "/Basics/Drop.png", title: "Drop", nativenm: "Gota", audioSrc: null },
      
        // E
        { imageSrc: "/Basics/Elephant.png", title: "Elephant", nativenm: "Elefante", audioSrc: null },
        { imageSrc: "/Basics/Egg.png", title: "Egg", nativenm: "Huevo", audioSrc: null },
        { imageSrc: "/Basics/Engine.png", title: "Engine", nativenm: "Motor", audioSrc: null },
        { imageSrc: "/Basics/Envelope.png", title: "Envelope", nativenm: "Sobre", audioSrc: null },
        { imageSrc: "/Basics/Ear.png", title: "Ear", nativenm: "Oreja", audioSrc: null },
        { imageSrc: "/Basics/Eagle.png", title: "Eagle", nativenm: "Águila", audioSrc: null },
        { imageSrc: "/Basics/Earth.png", title: "Earth", nativenm: "Tierra", audioSrc: null },
        { imageSrc: "/Basics/Eye.png", title: "Eye", nativenm: "Ojo", audioSrc: null },
        { imageSrc: "/Basics/Elf.png", title: "Elf", nativenm: "Elfo", audioSrc: null },
        { imageSrc: "/Basics/Elevator.png", title: "Elevator", nativenm: "Ascensor", audioSrc: null },
      
      
        
      
      // F
        { imageSrc: "/Basics/Fish.png", title: "Fish", nativenm: "Pescado", audioSrc: null },
        { imageSrc: "/Basics/Flower.png", title: "Flower", nativenm: "Flor", audioSrc: null },
        { imageSrc: "/Basics/Fork.png", title: "Fork", nativenm: "Tenedor", audioSrc: null },
        { imageSrc: "/Basics/Fire.png", title: "Fire", nativenm: "Fuego", audioSrc: null },
        { imageSrc: "/Basics/Fox.png", title: "Fox", nativenm: "Zorro", audioSrc: null },
        { imageSrc: "/Basics/Fence.png", title: "Fence", nativenm: "Valla", audioSrc: null },
      
        // G
        { imageSrc: "/Basics/Guitar.png", title: "Guitar", nativenm: "Guitarra", audioSrc: null },
        { imageSrc: "/Basics/Grapes.png", title: "Grapes", nativenm: "Uvas", audioSrc: null },
        { imageSrc: "/Basics/Giraffe.png", title: "Giraffe", nativenm: "Jirafa", audioSrc: null },
        { imageSrc: "/Basics/Goat.png", title: "Goat", nativenm: "Cabra", audioSrc: null },
        { imageSrc: "/Basics/Glove.png", title: "Glove", nativenm: "Guante", audioSrc: null },
        { imageSrc: "/Basics/Garden.png", title: "Garden", nativenm: "Jardín", audioSrc: null },
      
        // H
        { imageSrc: "/Basics/Hat.png", title: "Hat", nativenm: "Sombrero", audioSrc: null },
        { imageSrc: "/Basics/House.png", title: "House", nativenm: "Casa", audioSrc: null },
        { imageSrc: "/Basics/Horse.png", title: "Horse", nativenm: "Caballo", audioSrc: null },
        { imageSrc: "/Basics/Hammer.png", title: "Hammer", nativenm: "Martillo", audioSrc: null },
        { imageSrc: "/Basics/Hand.png", title: "Hand", nativenm: "Mano", audioSrc: null },
        { imageSrc: "/Basics/Heart.png", title: "Heart", nativenm: "Corazón", audioSrc: null },
      
        // I
        { imageSrc: "/Basics/Ice.png", title: "Ice", nativenm: "Hielo", audioSrc: null },
        { imageSrc: "/Basics/Iron.png", title: "Iron", nativenm: "Hierro", audioSrc: null },
        { imageSrc: "/Basics/Iguana.png", title: "Iguana", nativenm: "Iguana", audioSrc: null },
        { imageSrc: "/Basics/Insect.png", title: "Insect", nativenm: "Insecto", audioSrc: null },
        { imageSrc: "/Basics/Ink.png", title: "Ink", nativenm: "Tinta", audioSrc: null },
        { imageSrc: "/Basics/Ice Cream.png", title: "Ice Cream", nativenm: "Helado", audioSrc: null },
      
        // J
        { imageSrc: "/Basics/Jacket.png", title: "Jacket", nativenm: "Chaqueta", audioSrc: null },
        { imageSrc: "/Basics/Jungle.png", title: "Jungle", nativenm: "Selva", audioSrc: null },
        { imageSrc: "/Basics/Jump.png", title: "Jump", nativenm: "Saltar", audioSrc: null },
        { imageSrc: "/Basics/Jar.png", title: "Jar", nativenm: "Tarro", audioSrc: null },
        { imageSrc: "/Basics/Jellyfish.png", title: "Jellyfish", nativenm: "Medusa", audioSrc: null },
      
        // K
        { imageSrc: "/Basics/Kiwi.png", title: "Kiwi", nativenm: "Kiwi", audioSrc: null },
        { imageSrc: "/Basics/Kangaroo.png", title: "Kangaroo", nativenm: "Canguro", audioSrc: null },
        { imageSrc: "/Basics/Kettle.png", title: "Kettle", nativenm: "Tetera", audioSrc: null },
        { imageSrc: "/Basics/Key.png", title: "Key", nativenm: "Llave", audioSrc: null },
        { imageSrc: "/Basics/King.png", title: "King", nativenm: "Rey", audioSrc: null },
      
        // L
        { imageSrc: "/Basics/Lion.png", title: "Lion", nativenm: "León", audioSrc: null },
        { imageSrc: "/Basics/Lamp.png", title: "Lamp", nativenm: "Lámpara", audioSrc: null },
        { imageSrc: "/Basics/Lemon.png", title: "Lemon", nativenm: "Limón", audioSrc: null },
        { imageSrc: "/Basics/Ladder.png", title: "Ladder", nativenm: "Escalera", audioSrc: null },
        { imageSrc: "/Basics/Leaf.png", title: "Leaf", nativenm: "Hoja", audioSrc: null },
      
        // M
        { imageSrc: "/Basics/Mouse.png", title: "Mouse", nativenm: "Rata", audioSrc: null },
        { imageSrc: "/Basics/Monkey.png", title: "Monkey", nativenm: "Mono", audioSrc: null },
        { imageSrc: "/Basics/Mountain.png", title: "Mountain", nativenm: "Montaña", audioSrc: null },
        { imageSrc: "/Basics/Milk.png", title: "Milk", nativenm: "Leche", audioSrc: null },
        { imageSrc: "/Basics/Mirror.png", title: "Mirror", nativenm: "Espejo", audioSrc: null },
      
        // N
        { imageSrc: "/Basics/Net.png", title: "Net", nativenm: "Red", audioSrc: null },
        { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nariz", audioSrc: null },
        { imageSrc: "/Basics/Night.png", title: "Night", nativenm: "Noche", audioSrc: null },
        { imageSrc: "/Basics/Nose.png", title: "Nose", nativenm: "Nariz", audioSrc: null },
        { imageSrc: "/Basics/Nut.png", title: "Nut", nativenm: "Nuez", audioSrc: null },
      
        // O
        { imageSrc: "/Basics/Ostrich.png", title: "Ostrich", nativenm: "Ostrero", audioSrc: null },
        { imageSrc: "/Basics/Octopus.png", title: "Octopus", nativenm: "Pulpo", audioSrc: null },
        { imageSrc: "/Basics/Owl.png", title: "Owl", nativenm: "Búho", audioSrc: null },
        { imageSrc: "/Basics/Olive.png", title: "Olive", nativenm: "Aceituna", audioSrc: null },
        { imageSrc: "/Basics/Oxygen.png", title: "Oxygen", nativenm: "Oxígeno", audioSrc: null },
      
        // P
        { imageSrc: "/Basics/Pen.png", title: "Pen", nativenm: "Pluma", audioSrc: null },
        { imageSrc: "/Basics/Pineapple.png", title: "Pineapple", nativenm: "Piña", audioSrc: null },
        { imageSrc: "/Basics/Panda.png", title: "Panda", nativenm: "Panda", audioSrc: null },
        { imageSrc: "/Basics/Pencil.png", title: "Pencil", nativenm: "Lápiz", audioSrc: null },
        { imageSrc: "/Basics/Plane.png", title: "Plane", nativenm: "Avión", audioSrc: null },
      
        // Q
        { imageSrc: "/Basics/Quilt.png", title: "Quilt", nativenm: "Colcha", audioSrc: null },
        { imageSrc: "/Basics/Queen.png", title: "Queen", nativenm: "Reina", audioSrc: null },
      
        // R
        { imageSrc: "/Basics/Rabbit.png", title: "Rabbit", nativenm: "Conejo", audioSrc: null },
        { imageSrc: "/Basics/Rain.png", title: "Rain", nativenm: "Lluvia", audioSrc: null },
        { imageSrc: "/Basics/Ring.png", title: "Ring", nativenm: "Anillo", audioSrc: null },
        { imageSrc: "/Basics/Rose.png", title: "Rose", nativenm: "Rosa", audioSrc: null },
        { imageSrc: "/Basics/Robot.png", title: "Robot", nativenm: "Robot", audioSrc: null },
      
        // S
        { imageSrc: "/Basics/Sun.png", title: "Sun", nativenm: "Sol", audioSrc: null },
        { imageSrc: "/Basics/Snake.png", title: "Snake", nativenm: "Serpiente", audioSrc: null },
        { imageSrc: "/Basics/Star.png", title: "Star", nativenm: "Estrella", audioSrc: null },
        { imageSrc: "/Basics/Socks.png", title: "Socks", nativenm: "Calcetines", audioSrc: null },
        { imageSrc: "/Basics/Sand.png", title: "Sand", nativenm: "Arena", audioSrc: null },
      
        // T
        { imageSrc: "/Basics/Tiger.png", title: "Tiger", nativenm: "Tigre", audioSrc: null },
        { imageSrc: "/Basics/Tree.png", title: "Tree", nativenm: "Árbol", audioSrc: null },
        { imageSrc: "/Basics/Table.png", title: "Table", nativenm: "Mesa", audioSrc: null },
        { imageSrc: "/Basics/Television.png", title: "Television", nativenm: "Televisión", audioSrc: null },
        { imageSrc: "/Basics/Tooth.png", title: "Tooth", nativenm: "Diente", audioSrc: null },
      
        // U
    { imageSrc: "/Basics/Umbrella.png", title: "Umbrella", nativenm: "Paraguas", audioSrc: null },
    { imageSrc: "/Basics/Urn.png", title: "Urn", nativenm: "Urna", audioSrc: null },
    { imageSrc: "/Basics/Uncle.png", title: "Uncle", nativenm: "Tío", audioSrc: null },
    { imageSrc: "/Basics/Unicorn.png", title: "Unicorn", nativenm: "Unicornio", audioSrc: null },
    
    
    { imageSrc: "/Basics/Universe.png", title: "Universe", nativenm: "Universo", audioSrc: null },
    { imageSrc: "/Basics/Utensil.png", title: "Utensil", nativenm: "Utensilio", audioSrc: null },
    
    // V
    { imageSrc: "/Basics/Van.png", title: "Van", nativenm: "Furgoneta", audioSrc: null },
    { imageSrc: "/Basics/Vulture.png", title: "Vulture", nativenm: "Buitre", audioSrc: null },
    { imageSrc: "/Basics/Vacuum.png", title: "Vacuum", nativenm: "Aspiradora", audioSrc: null },
    
    { imageSrc: "/Basics/Victim.png", title: "Victim", nativenm: "Víctima", audioSrc: null },
    { imageSrc: "/Basics/Vegetable.png", title: "Vegetable", nativenm: "Verdura", audioSrc: null },
    { imageSrc: "/Basics/Volcano.png", title: "Volcano", nativenm: "Volcán", audioSrc: null },
    { imageSrc: "/Basics/Vacation.png", title: "Vacation", nativenm: "Vacaciones", audioSrc: null },
    
    { imageSrc: "/Basics/Vampire.png", title: "Vampire", nativenm: "Vampiro", audioSrc: null },
    
    // W
    { imageSrc: "/Basics/Wolf.png", title: "Wolf", nativenm: "Lobo", audioSrc: null },
    { imageSrc: "/Basics/Watermelon.png", title: "Watermelon", nativenm: "Sandía", audioSrc: null },
    { imageSrc: "/Basics/Window.png", title: "Window", nativenm: "Ventana", audioSrc: null },
    { imageSrc: "/Basics/Wagon.png", title: "Wagon", nativenm: "Vagón", audioSrc: null },
    { imageSrc: "/Basics/Waterfall.png", title: "Waterfall", nativenm: "Cascada", audioSrc: null },
    { imageSrc: "/Basics/Watch.png", title: "Watch", nativenm: "Reloj", audioSrc: null },
    { imageSrc: "/Basics/Whale.png", title: "Whale", nativenm: "Ballena", audioSrc: null },
    { imageSrc: "/Basics/Winter.png", title: "Winter", nativenm: "Invierno", audioSrc: null },
    { imageSrc: "/Basics/Wrist.png", title: "Wrist", nativenm: "Muñeca", audioSrc: null },
    { imageSrc: "/Basics/Whistle.png", title: "Whistle", nativenm: "Silbato", audioSrc: null },
    
    // X
    { imageSrc: "/Basics/Xylophone.png", title: "Xylophone", nativenm: "Xilófono", audioSrc: null },
    { imageSrc: "/Basics/X-ray.png", title: "X-ray", nativenm: "Radiografía", audioSrc: null },
    { imageSrc: "/Basics/Xenon.png", title: "Xenon", nativenm: "Xenón", audioSrc: null },
    { imageSrc: "/Basics/Xmas.png", title: "Xmas", nativenm: "Navidad", audioSrc: null },
    { imageSrc: "/Basics/Xenophobia.png", title: "Xenophobia", nativenm: "Xenofobia", audioSrc: null },
    { imageSrc: "/Basics/Xenial.png", title: "Xenial", nativenm: "Xenial", audioSrc: null },
    { imageSrc: "/Basics/Xeon.png", title: "Xeon", nativenm: "Xeón", audioSrc: null },
    { imageSrc: "/Basics/Examine.png", title: "Examine", nativenm: "Examinar", audioSrc: null },
    { imageSrc: "/Basics/Explode.png", title: "Explode", nativenm: "Explotar", audioSrc: null },
    { imageSrc: "/Basics/Exile.png", title: "Exile", nativenm: "Exilio", audioSrc: null },
    
    // Y
    { imageSrc: "/Basics/Yak.png", title: "Yak", nativenm: "Yak", audioSrc: null },
    { imageSrc: "/Basics/Yellow.png", title: "Yellow", nativenm: "Amarillo", audioSrc: null },
    { imageSrc: "/Basics/Yogurt.png", title: "Yogurt", nativenm: "Yogur", audioSrc: null },
    { imageSrc: "/Basics/Yarn.png", title: "Yarn", nativenm: "Hilo", audioSrc: null },
    
    { imageSrc: "/Basics/Yoga.png", title: "Yoga", nativenm: "Yoga", audioSrc: null },

    { imageSrc: "/Basics/Yawn.png", title: "Yawn", nativenm: "Bostezo", audioSrc: null },
    { imageSrc: "/Basics/Yard.png", title: "Yard", nativenm: "Jardín", audioSrc: null },
    { imageSrc: "/Basics/Yell.png", title: "Yell", nativenm: "Gritar", audioSrc: null },
    
    // Z
    { imageSrc: "/Basics/Zebra.png", title: "Zebra", nativenm: "Cebra", audioSrc: null },
    { imageSrc: "/Basics/Zoo.png", title: "Zoo", nativenm: "Zoológico", audioSrc: null },
    { imageSrc: "/Basics/Zenith.png", title: "Zenith", nativenm: "Cenit", audioSrc: null },
    { imageSrc: "/Basics/Zero.png", title: "Zero", nativenm: "Cero", audioSrc: null },
    { imageSrc: "/Basics/Zigzag.png", title: "Zigzag", nativenm: "Zigzag", audioSrc: null },
    { imageSrc: "/Basics/Zeppelin.png", title: "Zeppelin", nativenm: "Zeppelin", audioSrc: null },
    { imageSrc: "/Basics/Zombie.png", title: "Zombie", nativenm: "Zombi", audioSrc: null },
    { imageSrc: "/Basics/Zone.png", title: "Zone", nativenm: "Zona", audioSrc: null },
    { imageSrc: "/Basics/Zodiac.png", title: "Zodiac", nativenm: "Zodiaco", audioSrc: null },
    { imageSrc: "/Basics/Zoom.png", title: "Zoom", nativenm: "Zoom", audioSrc: null },
    
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