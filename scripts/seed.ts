import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

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
        
            // A
{ imageSrc: "/apple.webp", title: "Apple", nativenm: "Manzana", audioSrc: null },
{ imageSrc: "/ant.webp", title: "Ant", nativenm: "Hormiga", audioSrc: null },
{ imageSrc: "/arm.webp", title: "Arm", nativenm: "Brazo", audioSrc: null },
{ imageSrc: "/airplane.webp", title: "Airplane", nativenm: "Avión", audioSrc: null },
{ imageSrc: "/arrow.webp", title: "Arrow", nativenm: "Flecha", audioSrc: null },
{ imageSrc: "/anchor.webp", title: "Anchor", nativenm: "Ancla", audioSrc: null },
{ imageSrc: "/alligator.webp", title: "Alligator", nativenm: "Caimán", audioSrc: null },
{ imageSrc: "/alarm.webp", title: "Alarm", nativenm: "Alarma", audioSrc: null },
{ imageSrc: "/actor.webp", title: "Actor", nativenm: "Actor", audioSrc: null },
{ imageSrc: "/art.webp", title: "Art", nativenm: "Arte", audioSrc: null },

// B
{ imageSrc: "/ball.webp", title: "Ball", nativenm: "Pelota", audioSrc: null },
{ imageSrc: "/bear.webp", title: "Bear", nativenm: "Oso", audioSrc: null },
{ imageSrc: "/bird.webp", title: "Bird", nativenm: "Pájaro", audioSrc: null },
{ imageSrc: "/butterfly.webp", title: "Butterfly", nativenm: "Mariposa", audioSrc: null },
{ imageSrc: "/banana.webp", title: "Banana", nativenm: "Plátano", audioSrc: null },
{ imageSrc: "/boat.webp", title: "Boat", nativenm: "Barco", audioSrc: null },
{ imageSrc: "/box.webp", title: "Box", nativenm: "Caja", audioSrc: null },
{ imageSrc: "/book.webp", title: "Book", nativenm: "Libro", audioSrc: null },
{ imageSrc: "/bench.webp", title: "Bench", nativenm: "Banco", audioSrc: null },
{ imageSrc: "/bell.webp", title: "Bell", nativenm: "Campana", audioSrc: null },

// C
{ imageSrc: "/cat.webp", title: "Cat", nativenm: "Gato", audioSrc: null },
{ imageSrc: "/cake.webp", title: "Cake", nativenm: "Pastel", audioSrc: null },
{ imageSrc: "/candle.webp", title: "Candle", nativenm: "Vela", audioSrc: null },
{ imageSrc: "/cow.webp", title: "Cow", nativenm: "Vaca", audioSrc: null },
{ imageSrc: "/car.webp", title: "Car", nativenm: "Coche", audioSrc: null },
{ imageSrc: "/coin.webp", title: "Coin", nativenm: "Moneda", audioSrc: null },
{ imageSrc: "/crown.webp", title: "Crown", nativenm: "Corona", audioSrc: null },
{ imageSrc: "/cactus.webp", title: "Cactus", nativenm: "Cacto", audioSrc: null },
{ imageSrc: "/clock.webp", title: "Clock", nativenm: "Reloj", audioSrc: null },
{ imageSrc: "/cloud.webp", title: "Cloud", nativenm: "Nube", audioSrc: null },

// D
{ imageSrc: "/dog.webp", title: "Dog", nativenm: "Perro", audioSrc: null },
{ imageSrc: "/duck.webp", title: "Duck", nativenm: "Pato", audioSrc: null },
{ imageSrc: "/dress.webp", title: "Dress", nativenm: "Vestido", audioSrc: null },
{ imageSrc: "/door.webp", title: "Door", nativenm: "Puerta", audioSrc: null },
{ imageSrc: "/diamond.webp", title: "Diamond", nativenm: "Diamante", audioSrc: null },
{ imageSrc: "/dolphin.webp", title: "Dolphin", nativenm: "Delfín", audioSrc: null },
{ imageSrc: "/donkey.webp", title: "Donkey", nativenm: "Burro", audioSrc: null },
{ imageSrc: "/dice.webp", title: "Dice", nativenm: "Dado", audioSrc: null },
{ imageSrc: "/drum.webp", title: "Drum", nativenm: "Tambor", audioSrc: null },
{ imageSrc: "/drop.webp", title: "Drop", nativenm: "Gota", audioSrc: null },

// E
{ imageSrc: "/elephant.webp", title: "Elephant", nativenm: "Elefante", audioSrc: null },
{ imageSrc: "/egg.webp", title: "Egg", nativenm: "Huevo", audioSrc: null },
{ imageSrc: "/engine.webp", title: "Engine", nativenm: "Motor", audioSrc: null },
{ imageSrc: "/envelope.webp", title: "Envelope", nativenm: "Sobre", audioSrc: null },
{ imageSrc: "/ear.webp", title: "Ear", nativenm: "Oreja", audioSrc: null },
{ imageSrc: "/eagle.webp", title: "Eagle", nativenm: "Águila", audioSrc: null },
{ imageSrc: "/earth.webp", title: "Earth", nativenm: "Tierra", audioSrc: null },
{ imageSrc: "/eye.webp", title: "Eye", nativenm: "Ojo", audioSrc: null },
{ imageSrc: "/elf.webp", title: "Elf", nativenm: "Elfo", audioSrc: null },
{ imageSrc: "/elevator.webp", title: "Elevator", nativenm: "Ascensor", audioSrc: null },

// F
{ imageSrc: "/fish.webp", title: "Fish", nativenm: "Pescado", audioSrc: null },
{ imageSrc: "/flower.webp", title: "Flower", nativenm: "Flor", audioSrc: null },
{ imageSrc: "/fork.webp", title: "Fork", nativenm: "Tenedor", audioSrc: null },
{ imageSrc: "/fire.webp", title: "Fire", nativenm: "Fuego", audioSrc: null },
{ imageSrc: "/fox.webp", title: "Fox", nativenm: "Zorro", audioSrc: null },
{ imageSrc: "/fence.webp", title: "Fence", nativenm: "Valla", audioSrc: null },

// G
{ imageSrc: "/guitar.webp", title: "Guitar", nativenm: "Guitarra", audioSrc: null },
{ imageSrc: "/grapes.webp", title: "Grapes", nativenm: "Uvas", audioSrc: null },
{ imageSrc: "/giraffe.webp", title: "Giraffe", nativenm: "Jirafa", audioSrc: null },
{ imageSrc: "/goat.webp", title: "Goat", nativenm: "Cabra", audioSrc: null },
{ imageSrc: "/glove.webp", title: "Glove", nativenm: "Guante", audioSrc: null },
{ imageSrc: "/garden.webp", title: "Garden", nativenm: "Jardín", audioSrc: null },

// H
{ imageSrc: "/hat.webp", title: "Hat", nativenm: "Sombrero", audioSrc: null },
{ imageSrc: "/house.webp", title: "House", nativenm: "Casa", audioSrc: null },
{ imageSrc: "/horse.webp", title: "Horse", nativenm: "Caballo", audioSrc: null },
{ imageSrc: "/hammer.webp", title: "Hammer", nativenm: "Martillo", audioSrc: null },
{ imageSrc: "/hand.webp", title: "Hand", nativenm: "Mano", audioSrc: null },
{ imageSrc: "/heart.webp", title: "Heart", nativenm: "Corazón", audioSrc: null },

        
          
      
        // I
        { imageSrc: "https://example.com/ice.jpg", title: "Ice", nativenm: "Hielo", audioSrc: null },
        { imageSrc: "https://example.com/iron.jpg", title: "Iron", nativenm: "Hierro", audioSrc: null },
        { imageSrc: "https://example.com/iguana.jpg", title: "Iguana", nativenm: "Iguana", audioSrc: null },
        { imageSrc: "https://example.com/insect.jpg", title: "Insect", nativenm: "Insecto", audioSrc: null },
        { imageSrc: "https://example.com/ink.jpg", title: "Ink", nativenm: "Tinta", audioSrc: null },
        { imageSrc: "https://example.com/icecream.jpg", title: "Ice Cream", nativenm: "Helado", audioSrc: null },
      
        // J
        { imageSrc: "https://example.com/jacket.jpg", title: "Jacket", nativenm: "Chaqueta", audioSrc: null },
        { imageSrc: "https://example.com/jungle.jpg", title: "Jungle", nativenm: "Selva", audioSrc: null },
        { imageSrc: "https://example.com/jump.jpg", title: "Jump", nativenm: "Saltar", audioSrc: null },
        { imageSrc: "https://example.com/jar.jpg", title: "Jar", nativenm: "Tarro", audioSrc: null },
        { imageSrc: "https://example.com/jellyfish.jpg", title: "Jellyfish", nativenm: "Medusa", audioSrc: null },
      
        // K
        { imageSrc: "https://example.com/kiwi.jpg", title: "Kiwi", nativenm: "Kiwi", audioSrc: null },
        { imageSrc: "https://example.com/kangaroo.jpg", title: "Kangaroo", nativenm: "Canguro", audioSrc: null },
        { imageSrc: "https://example.com/kettle.jpg", title: "Kettle", nativenm: "Tetera", audioSrc: null },
        { imageSrc: "https://example.com/key.jpg", title: "Key", nativenm: "Llave", audioSrc: null },
        { imageSrc: "https://example.com/king.jpg", title: "King", nativenm: "Rey", audioSrc: null },
      
        // L
        { imageSrc: "https://example.com/lion.jpg", title: "Lion", nativenm: "León", audioSrc: null },
        { imageSrc: "https://example.com/lamp.jpg", title: "Lamp", nativenm: "Lámpara", audioSrc: null },
        { imageSrc: "https://example.com/lemon.jpg", title: "Lemon", nativenm: "Limón", audioSrc: null },
        { imageSrc: "https://example.com/ladder.jpg", title: "Ladder", nativenm: "Escalera", audioSrc: null },
        { imageSrc: "https://example.com/leaf.jpg", title: "Leaf", nativenm: "Hoja", audioSrc: null },
      
        // M
        { imageSrc: "https://example.com/mouse.jpg", title: "Mouse", nativenm: "Rata", audioSrc: null },
        { imageSrc: "https://example.com/monkey.jpg", title: "Monkey", nativenm: "Mono", audioSrc: null },
        { imageSrc: "https://example.com/mountain.jpg", title: "Mountain", nativenm: "Montaña", audioSrc: null },
        { imageSrc: "https://example.com/milk.jpg", title: "Milk", nativenm: "Leche", audioSrc: null },
        { imageSrc: "https://example.com/mirror.jpg", title: "Mirror", nativenm: "Espejo", audioSrc: null },
      
        // N
        { imageSrc: "https://example.com/net.jpg", title: "Net", nativenm: "Red", audioSrc: null },
        { imageSrc: "https://example.com/nose.jpg", title: "Nose", nativenm: "Nariz", audioSrc: null },
        { imageSrc: "https://example.com/night.jpg", title: "Night", nativenm: "Noche", audioSrc: null },
        { imageSrc: "https://example.com/nose.jpg", title: "Nose", nativenm: "Nariz", audioSrc: null },
        { imageSrc: "https://example.com/nut.jpg", title: "Nut", nativenm: "Nuez", audioSrc: null },
      
        // O
        { imageSrc: "https://example.com/ostrich.jpg", title: "Ostrich", nativenm: "Ostrero", audioSrc: null },
        { imageSrc: "https://example.com/octopus.jpg", title: "Octopus", nativenm: "Pulpo", audioSrc: null },
        { imageSrc: "https://example.com/owl.jpg", title: "Owl", nativenm: "Búho", audioSrc: null },
        { imageSrc: "https://example.com/olive.jpg", title: "Olive", nativenm: "Aceituna", audioSrc: null },
        { imageSrc: "https://example.com/oxygen.jpg", title: "Oxygen", nativenm: "Oxígeno", audioSrc: null },
      
        // P
        { imageSrc: "https://example.com/pen.jpg", title: "Pen", nativenm: "Pluma", audioSrc: null },
        { imageSrc: "https://example.com/pineapple.jpg", title: "Pineapple", nativenm: "Piña", audioSrc: null },
        { imageSrc: "https://example.com/panda.jpg", title: "Panda", nativenm: "Panda", audioSrc: null },
        { imageSrc: "https://example.com/pencil.jpg", title: "Pencil", nativenm: "Lápiz", audioSrc: null },
        { imageSrc: "https://example.com/plane.jpg", title: "Plane", nativenm: "Avión", audioSrc: null },
      
        // Q
        { imageSrc: "https://example.com/quilt.jpg", title: "Quilt", nativenm: "Colcha", audioSrc: null },
        { imageSrc: "https://example.com/queen.jpg", title: "Queen", nativenm: "Reina", audioSrc: null },
      
        // R
        { imageSrc: "https://example.com/rabbit.jpg", title: "Rabbit", nativenm: "Conejo", audioSrc: null },
        { imageSrc: "https://example.com/rain.jpg", title: "Rain", nativenm: "Lluvia", audioSrc: null },
        { imageSrc: "https://example.com/ring.jpg", title: "Ring", nativenm: "Anillo", audioSrc: null },
        { imageSrc: "https://example.com/rose.jpg", title: "Rose", nativenm: "Rosa", audioSrc: null },
        { imageSrc: "https://example.com/robot.jpg", title: "Robot", nativenm: "Robot", audioSrc: null },
      
        // S
        { imageSrc: "https://example.com/sun.jpg", title: "Sun", nativenm: "Sol", audioSrc: null },
        { imageSrc: "https://example.com/snake.jpg", title: "Snake", nativenm: "Serpiente", audioSrc: null },
        { imageSrc: "https://example.com/star.jpg", title: "Star", nativenm: "Estrella", audioSrc: null },
        { imageSrc: "https://example.com/socks.jpg", title: "Socks", nativenm: "Calcetines", audioSrc: null },
        { imageSrc: "https://example.com/sand.jpg", title: "Sand", nativenm: "Arena", audioSrc: null },
      
        // T
        { imageSrc: "https://example.com/tiger.jpg", title: "Tiger", nativenm: "Tigre", audioSrc: null },
        { imageSrc: "https://example.com/tree.jpg", title: "Tree", nativenm: "Árbol", audioSrc: null },
        { imageSrc: "https://example.com/table.jpg", title: "Table", nativenm: "Mesa", audioSrc: null },
        { imageSrc: "https://example.com/television.jpg", title: "Television", nativenm: "Televisión", audioSrc: null },
        { imageSrc: "https://example.com/tooth.jpg", title: "Tooth", nativenm: "Diente", audioSrc: null },
      
        // U
{ imageSrc: "https://example.com/umbrella.jpg", title: "Umbrella", nativenm: "Paraguas", audioSrc: null },
{ imageSrc: "https://example.com/urn.jpg", title: "Urn", nativenm: "Urna", audioSrc: null },
{ imageSrc: "https://example.com/uncle.jpg", title: "Uncle", nativenm: "Tío", audioSrc: null },
{ imageSrc: "https://example.com/unicorn.jpg", title: "Unicorn", nativenm: "Unicornio", audioSrc: null },
{ imageSrc: "https://example.com/underwear.jpg", title: "Underwear", nativenm: "Ropa interior", audioSrc: null },
{ imageSrc: "https://example.com/undertaker.jpg", title: "Undertaker", nativenm: "Sepulturero", audioSrc: null },
{ imageSrc: "https://example.com/utility.jpg", title: "Utility", nativenm: "Utilidad", audioSrc: null },
{ imageSrc: "https://example.com/urgent.jpg", title: "Urgent", nativenm: "Urgente", audioSrc: null },
{ imageSrc: "https://example.com/universe.jpg", title: "Universe", nativenm: "Universo", audioSrc: null },
{ imageSrc: "https://example.com/utensil.jpg", title: "Utensil", nativenm: "Utensilio", audioSrc: null },

// V
{ imageSrc: "https://example.com/van.jpg", title: "Van", nativenm: "Furgoneta", audioSrc: null },
{ imageSrc: "https://example.com/vulture.jpg", title: "Vulture", nativenm: "Buitre", audioSrc: null },
{ imageSrc: "https://example.com/vacuum.jpg", title: "Vacuum", nativenm: "Aspiradora", audioSrc: null },
{ imageSrc: "https://example.com/violet.jpg", title: "Violet", nativenm: "Violeta", audioSrc: null },
{ imageSrc: "https://example.com/victim.jpg", title: "Victim", nativenm: "Víctima", audioSrc: null },
{ imageSrc: "https://example.com/vegetable.jpg", title: "Vegetable", nativenm: "Verdura", audioSrc: null },
{ imageSrc: "https://example.com/volcano.jpg", title: "Volcano", nativenm: "Volcán", audioSrc: null },
{ imageSrc: "https://example.com/vacation.jpg", title: "Vacation", nativenm: "Vacaciones", audioSrc: null },
{ imageSrc: "https://example.com/vanity.jpg", title: "Vanity", nativenm: "Vanidad", audioSrc: null },
{ imageSrc: "https://example.com/vampire.jpg", title: "Vampire", nativenm: "Vampiro", audioSrc: null },

// W
{ imageSrc: "https://example.com/wolf.jpg", title: "Wolf", nativenm: "Lobo", audioSrc: null },
{ imageSrc: "https://example.com/watermelon.jpg", title: "Watermelon", nativenm: "Sandía", audioSrc: null },
{ imageSrc: "https://example.com/window.jpg", title: "Window", nativenm: "Ventana", audioSrc: null },
{ imageSrc: "https://example.com/wagon.jpg", title: "Wagon", nativenm: "Vagón", audioSrc: null },
{ imageSrc: "https://example.com/waterfall.jpg", title: "Waterfall", nativenm: "Cascada", audioSrc: null },
{ imageSrc: "https://example.com/watch.jpg", title: "Watch", nativenm: "Reloj", audioSrc: null },
{ imageSrc: "https://example.com/whale.jpg", title: "Whale", nativenm: "Ballena", audioSrc: null },
{ imageSrc: "https://example.com/winter.jpg", title: "Winter", nativenm: "Invierno", audioSrc: null },
{ imageSrc: "https://example.com/wrist.jpg", title: "Wrist", nativenm: "Muñeca", audioSrc: null },
{ imageSrc: "https://example.com/whistle.jpg", title: "Whistle", nativenm: "Silbato", audioSrc: null },

// X
{ imageSrc: "https://example.com/xylophone.jpg", title: "Xylophone", nativenm: "Xilófono", audioSrc: null },
{ imageSrc: "https://example.com/x-ray.jpg", title: "X-ray", nativenm: "Radiografía", audioSrc: null },
{ imageSrc: "https://example.com/xenon.jpg", title: "Xenon", nativenm: "Xenón", audioSrc: null },
{ imageSrc: "https://example.com/xmas.jpg", title: "Xmas", nativenm: "Navidad", audioSrc: null },
{ imageSrc: "https://example.com/xenophobia.jpg", title: "Xenophobia", nativenm: "Xenofobia", audioSrc: null },
{ imageSrc: "https://example.com/xenial.jpg", title: "Xenial", nativenm: "Xenial", audioSrc: null },
{ imageSrc: "https://example.com/xeon.jpg", title: "Xeon", nativenm: "Xeón", audioSrc: null },
{ imageSrc: "https://example.com/examine.jpg", title: "Examine", nativenm: "Examinar", audioSrc: null },
{ imageSrc: "https://example.com/explode.jpg", title: "Explode", nativenm: "Explotar", audioSrc: null },
{ imageSrc: "https://example.com/exile.jpg", title: "Exile", nativenm: "Exilio", audioSrc: null },

// Y
{ imageSrc: "https://example.com/yak.jpg", title: "Yak", nativenm: "Yak", audioSrc: null },
{ imageSrc: "https://example.com/yellow.jpg", title: "Yellow", nativenm: "Amarillo", audioSrc: null },
{ imageSrc: "https://example.com/yogurt.jpg", title: "Yogurt", nativenm: "Yogur", audioSrc: null },
{ imageSrc: "https://example.com/yarn.jpg", title: "Yarn", nativenm: "Hilo", audioSrc: null },
{ imageSrc: "https://example.com/yes.jpg", title: "Yes", nativenm: "Sí", audioSrc: null },
{ imageSrc: "https://example.com/yoga.jpg", title: "Yoga", nativenm: "Yoga", audioSrc: null },
{ imageSrc: "https://example.com/youth.jpg", title: "Youth", nativenm: "Juventud", audioSrc: null },
{ imageSrc: "https://example.com/yawn.jpg", title: "Yawn", nativenm: "Bostezo", audioSrc: null },
{ imageSrc: "https://example.com/yard.jpg", title: "Yard", nativenm: "Jardín", audioSrc: null },
{ imageSrc: "https://example.com/yell.jpg", title: "Yell", nativenm: "Gritar", audioSrc: null },

// Z
{ imageSrc: "https://example.com/zebra.jpg", title: "Zebra", nativenm: "Cebra", audioSrc: null },
{ imageSrc: "https://example.com/zoo.jpg", title: "Zoo", nativenm: "Zoológico", audioSrc: null },
{ imageSrc: "https://example.com/zenith.jpg", title: "Zenith", nativenm: "Cenit", audioSrc: null },
{ imageSrc: "https://example.com/zero.jpg", title: "Zero", nativenm: "Cero", audioSrc: null },
{ imageSrc: "https://example.com/zigzag.jpg", title: "Zigzag", nativenm: "Zigzag", audioSrc: null },
{ imageSrc: "https://example.com/zeppelin.jpg", title: "Zeppelin", nativenm: "Zeppelin", audioSrc: null },
{ imageSrc: "https://example.com/zombie.jpg", title: "Zombie", nativenm: "Zombi", audioSrc: null },
{ imageSrc: "https://example.com/zone.jpg", title: "Zone", nativenm: "Zona", audioSrc: null },
{ imageSrc: "https://example.com/zodiac.jpg", title: "Zodiac", nativenm: "Zodiaco", audioSrc: null },
{ imageSrc: "https://example.com/zoom.jpg", title: "Zoom", nativenm: "Zoom", audioSrc: null },

      ];
      

    
      await db.insert(schema.basicsdb).values(basicsData);
        
      

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