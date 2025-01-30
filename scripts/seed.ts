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
        
        { imageSrc: "https://example.com/apple.jpg", title: "Apple" },
        { imageSrc: "https://example.com/ant.jpg", title: "Ant" },
        { imageSrc: "https://example.com/arrow.jpg", title: "Arrow" },
        { imageSrc: "https://example.com/airplane.jpg", title: "Airplane" },
        { imageSrc: "https://example.com/alarm.jpg", title: "Alarm" },
      
        { imageSrc: "https://example.com/bike.jpg", title: "Bike" },
        { imageSrc: "https://example.com/banana.jpg", title: "Banana" },
        { imageSrc: "https://example.com/basket.jpg", title: "Basket" },
        { imageSrc: "https://example.com/bottle.jpg", title: "Bottle" },
        { imageSrc: "https://example.com/butterfly.jpg", title: "Butterfly" },
      
        { imageSrc: "https://example.com/car.jpg", title: "Car" },
        { imageSrc: "https://example.com/cat.jpg", title: "Cat" },
        { imageSrc: "https://example.com/camera.jpg", title: "Camera" },
        { imageSrc: "https://example.com/candle.jpg", title: "Candle" },
        { imageSrc: "https://example.com/crown.jpg", title: "Crown" },
      
        { imageSrc: "https://example.com/dog.jpg", title: "Dog" },
        { imageSrc: "https://example.com/door.jpg", title: "Door" },
        { imageSrc: "https://example.com/dragon.jpg", title: "Dragon" },
        { imageSrc: "https://example.com/dice.jpg", title: "Dice" },
        { imageSrc: "https://example.com/drum.jpg", title: "Drum" },
      
        { imageSrc: "https://example.com/elephant.jpg", title: "Elephant" },
        { imageSrc: "https://example.com/egg.jpg", title: "Egg" },
        { imageSrc: "https://example.com/engine.jpg", title: "Engine" },
        { imageSrc: "https://example.com/earphone.jpg", title: "Earphone" },
        { imageSrc: "https://example.com/envelope.jpg", title: "Envelope" },
      
        { imageSrc: "https://example.com/fish.jpg", title: "Fish" },
        { imageSrc: "https://example.com/flower.jpg", title: "Flower" },
        { imageSrc: "https://example.com/flag.jpg", title: "Flag" },
        { imageSrc: "https://example.com/fire.jpg", title: "Fire" },
        { imageSrc: "https://example.com/fan.jpg", title: "Fan" },
      
        { imageSrc: "https://example.com/guitar.jpg", title: "Guitar" },
        { imageSrc: "https://example.com/glass.jpg", title: "Glass" },
        { imageSrc: "https://example.com/grape.jpg", title: "Grape" },
        { imageSrc: "https://example.com/giraffe.jpg", title: "Giraffe" },
        { imageSrc: "https://example.com/gift.jpg", title: "Gift" },
      
        { imageSrc: "https://example.com/hat.jpg", title: "Hat" },
        { imageSrc: "https://example.com/horse.jpg", title: "Horse" },
        { imageSrc: "https://example.com/house.jpg", title: "House" },
        { imageSrc: "https://example.com/heart.jpg", title: "Heart" },
        { imageSrc: "https://example.com/helicopter.jpg", title: "Helicopter" },
      
        { imageSrc: "https://example.com/icecream.jpg", title: "Ice Cream" },
        { imageSrc: "https://example.com/iron.jpg", title: "Iron" },
        { imageSrc: "https://example.com/ink.jpg", title: "Ink" },
        { imageSrc: "https://example.com/iguana.jpg", title: "Iguana" },
        { imageSrc: "https://example.com/island.jpg", title: "Island" },
      
        { imageSrc: "https://example.com/jacket.jpg", title: "Jacket" },
        { imageSrc: "https://example.com/jellyfish.jpg", title: "Jellyfish" },
        { imageSrc: "https://example.com/jump.jpg", title: "Jump" },
        { imageSrc: "https://example.com/jar.jpg", title: "Jar" },
        { imageSrc: "https://example.com/joker.jpg", title: "Joker" },
      
        { imageSrc: "https://example.com/kite.jpg", title: "Kite" },
        { imageSrc: "https://example.com/kangaroo.jpg", title: "Kangaroo" },
        { imageSrc: "https://example.com/keyboard.jpg", title: "Keyboard" },
        { imageSrc: "https://example.com/key.jpg", title: "Key" },
        { imageSrc: "https://example.com/king.jpg", title: "King" },
      
        { imageSrc: "https://example.com/lion.jpg", title: "Lion" },
        { imageSrc: "https://example.com/ladder.jpg", title: "Ladder" },
        { imageSrc: "https://example.com/lamp.jpg", title: "Lamp" },
        { imageSrc: "https://example.com/leaf.jpg", title: "Leaf" },
        { imageSrc: "https://example.com/lollipop.jpg", title: "Lollipop" },
      
        { imageSrc: "https://example.com/monkey.jpg", title: "Monkey" },
        { imageSrc: "https://example.com/mirror.jpg", title: "Mirror" },
        { imageSrc: "https://example.com/mountain.jpg", title: "Mountain" },
        { imageSrc: "https://example.com/mango.jpg", title: "Mango" },
        { imageSrc: "https://example.com/map.jpg", title: "Map" },
      
        { imageSrc: "https://example.com/nest.jpg", title: "Nest" },
        { imageSrc: "https://example.com/nose.jpg", title: "Nose" },
        { imageSrc: "https://example.com/nail.jpg", title: "Nail" },
        { imageSrc: "https://example.com/needle.jpg", title: "Needle" },
        { imageSrc: "https://example.com/notebook.jpg", title: "Notebook" },
      
        { imageSrc: "https://example.com/orange.jpg", title: "Orange" },
        { imageSrc: "https://example.com/ostrich.jpg", title: "Ostrich" },
        { imageSrc: "https://example.com/oven.jpg", title: "Oven" },
        { imageSrc: "https://example.com/octopus.jpg", title: "Octopus" },
        { imageSrc: "https://example.com/onion.jpg", title: "Onion" },
      
        { imageSrc: "https://example.com/parrot.jpg", title: "Parrot" },
        { imageSrc: "https://example.com/pencil.jpg", title: "Pencil" },
        { imageSrc: "https://example.com/pineapple.jpg", title: "Pineapple" },
        { imageSrc: "https://example.com/pizza.jpg", title: "Pizza" },
        { imageSrc: "https://example.com/peacock.jpg", title: "Peacock" },
      
        { imageSrc: "https://example.com/queen.jpg", title: "Queen" },
        { imageSrc: "https://example.com/quilt.jpg", title: "Quilt" },
        { imageSrc: "https://example.com/quill.jpg", title: "Quill" },
        { imageSrc: "https://example.com/question.jpg", title: "Question" },
        { imageSrc: "https://example.com/quarter.jpg", title: "Quarter" },
      
        { imageSrc: "https://example.com/robot.jpg", title: "Robot" },
        { imageSrc: "https://example.com/rain.jpg", title: "Rain" },
        { imageSrc: "https://example.com/rose.jpg", title: "Rose" },
        { imageSrc: "https://example.com/river.jpg", title: "River" },
        { imageSrc: "https://example.com/rabbit.jpg", title: "Rabbit" },
      
        { imageSrc: "https://example.com/zebra.jpg", title: "Zebra" },
        { imageSrc: "https://example.com/zipper.jpg", title: "Zipper" },
        { imageSrc: "https://example.com/zoo.jpg", title: "Zoo" },
        { imageSrc: "https://example.com/zodiac.jpg", title: "Zodiac" },
        { imageSrc: "https://example.com/zeppelin.jpg", title: "Zeppelin" },
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