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