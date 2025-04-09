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
{ id: 10, lessonId: 4, type: "SELECT", order: 1, question: "How do you say 'I' in Spanish?" },
{ id: 11, lessonId: 4, type: "SELECT", order: 2, question: "How do you say 'you' in Spanish?" },
{ id: 12, lessonId: 4, type: "SELECT", order: 3, question: "How do you say 'he' in Spanish?" },

{ id: 13, lessonId: 5, type: "SELECT", order: 1, question: "How do you say 'she' in Spanish?" },
{ id: 14, lessonId: 5, type: "SELECT", order: 2, question: "How do you say 'they' in Spanish?" },
{ id: 15, lessonId: 5, type: "ASSIST", order: 3, question: "Translate: 'He is running.' → '__ está corriendo.'" },

{ id: 16, lessonId: 6, type: "ASSIST", order: 1, question: "Translate: 'She is eating.' → 'Ella __ comiendo.'" },
{ id: 17, lessonId: 6, type: "ASSIST", order: 2, question: "Translate: 'We are playing.' → 'Nosotros __ jugando.'" },
{ id: 18, lessonId: 6, type: "ASSIST", order: 3, question: "Translate: 'They are studying.' → 'Ellos __ estudiando.'" },

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
{ id: 28, lessonId: 10, type: "SELECT", order: 1, question: "How do you say 'big' in Spanish?" },
{ id: 29, lessonId: 10, type: "SELECT", order: 2, question: "How do you say 'small' in Spanish?" },
{ id: 30, lessonId: 10, type: "SELECT", order: 3, question: "How do you say 'fast' in Spanish?" },

{ id: 31, lessonId: 11, type: "SELECT", order: 1, question: "How do you say 'slow' in Spanish?" },
{ id: 32, lessonId: 11, type: "SELECT", order: 2, question: "How do you say 'beautiful' in Spanish?" },
{ id: 33, lessonId: 11, type: "SELECT", order: 3, question: "How do you say 'strong' in Spanish?" },

{ id: 34, lessonId: 12, type: "ASSIST", order: 1, question: "Translate: 'The car is big.' → 'El coche es __.'" },
{ id: 35, lessonId: 12, type: "ASSIST", order: 2, question: "Translate: 'The flower is beautiful.' → 'La flor es __.'" },
{ id: 36, lessonId: 12, type: "ASSIST", order: 3, question: "Translate: 'The boy is strong.' → 'El niño es __.'" },

// Sentences
// Easy Sentences
{ id: 37, lessonId: 13, type: "ASSIST", order: 1, question: "Translate: 'This is a cat.' → 'Este es un gato.'" },
{ id: 38, lessonId: 13, type: "ASSIST", order: 2, question: "Translate: 'The sun is bright.' → 'El sol es brillante.'" },
{ id: 39, lessonId: 13, type: "ASSIST", order: 3, question: "Translate: 'I have a book.' → 'Tengo un libro.'" },

{ id: 40, lessonId: 14, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.' → 'Ella es mi hermana.'" },
{ id: 41, lessonId: 14, type: "ASSIST", order: 2, question: "Translate: 'We are friends.' → 'Somos amigos.'" },
{ id: 42, lessonId: 14, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.' → 'El perro está corriendo.'" },

{ id: 43, lessonId: 15, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.' → 'Él es un maestro.'" },
{ id: 44, lessonId: 15, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.' → 'La manzana es roja.'" },
{ id: 45, lessonId: 15, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.' → 'Me gustan los mangos.'" },
{ id: 46, lessonId: 15, type: "ASSIST", order: 4, question: "Translate: 'She is happy.' → 'Ella está feliz.'" },

// Intermediate Sentences
{ id: 47, lessonId: 16, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Spanish book.' → 'Estoy leyendo un libro en español.'" },
{ id: 48, lessonId: 16, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.' → 'Ella está cocinando comida.'" },
{ id: 49, lessonId: 16, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.' → 'Los niños están jugando afuera.'" },

{ id: 50, lessonId: 17, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.' → 'Vamos a la escuela todos los días.'" },
{ id: 51, lessonId: 17, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.' → 'Le gusta tomar té.'" },
{ id: 52, lessonId: 17, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.' → 'Los pájaros están volando en el cielo.'" },

{ id: 53, lessonId: 18, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.' → 'Ella está usando un vestido azul.'" },
{ id: 54, lessonId: 18, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.' → 'El autobús está tarde hoy.'" },
{ id: 55, lessonId: 18, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.' → 'Ellos están viendo una película.'" },
{ id: 56, lessonId: 18, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.' → 'El maestro está explicando la lección.'" },

// Difficult Sentences
{ id: 57, lessonId: 19, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.' → 'Si trabajas duro, tendrás éxito.'" },
{ id: 58, lessonId: 19, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.' → 'Ella fue al mercado a comprar verduras.'" },
{ id: 59, lessonId: 19, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.' → 'Aunque estaba lloviendo, ellos jugaron al fútbol.'" },

{ id: 60, lessonId: 20, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.' → 'El maestro pidió a los estudiantes que entregaran sus tareas a tiempo.'" },
{ id: 61, lessonId: 20, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.' → 'Él está leyendo un periódico mientras toma té.'" },
{ id: 62, lessonId: 20, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.' → 'Ella estaba cansada, sin embargo, siguió trabajando.'" },

{ id: 63, lessonId: 21, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left.' → 'Para cuando llegamos, el tren ya se había ido.'" },
{ id: 64, lessonId: 21, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.' → 'A menos que estudies, no aprobarás el examen.'" },
{ id: 65, lessonId: 21, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.' → 'El doctor le aconsejó que tomara medicina regularmente.'" },
{ id: 66, lessonId: 21, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.' → 'El anciano, que vivía solo, nos contó muchas historias de su pasado.'" }

]);   


//options
await db.insert(schema.challengeOptions).values([
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

{ challengeId: 10, correct: true, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 10, correct: false, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },
{ challengeId: 10, correct: false, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },

{ challengeId: 11, correct: true, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },
{ challengeId: 11, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 11, correct: false, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },

{ challengeId: 12, correct: true, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 12, correct: false, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },
{ challengeId: 12, correct: false, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },

{ challengeId: 13, correct: true, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },
{ challengeId: 13, correct: false, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 13, correct: false, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },

{ challengeId: 14, correct: true, text: "ellos", audioSrc: "Basics/audio/spanish/option/es_they.mp3" },
{ challengeId: 14, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 14, correct: false, text: "ella", audioSrc: "Basics/audio/spanish/option/es_she.mp3" },

{ challengeId: 15, correct: true, text: "él", audioSrc: "Basics/audio/spanish/option/es_he.mp3" },
{ challengeId: 15, correct: false, text: "yo", audioSrc: "Basics/audio/spanish/option/es_I.mp3" },
{ challengeId: 15, correct: false, text: "tú", audioSrc: "Basics/audio/spanish/option/es_you.mp3" },

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
{ challengeId: 19, imageSrc: "/write.svg", correct: false, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },
{ challengeId: 19, imageSrc: "/eat.svg", correct: true, text: "comer", audioSrc: "Basics/audio/spanish/option/es_eat.mp3" },
{ challengeId: 19, imageSrc: "/run.svg", correct: false, text: "correr", audioSrc: "Basics/audio/spanish/option/es_run.mp3" },

{ challengeId: 20, imageSrc: "/run.svg", correct: true, text: "correr", audioSrc: "Basics/audio/spanish/option/es_run.mp3" },
{ challengeId: 20, imageSrc: "/read.svg", correct: false, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 20, imageSrc: "/write.svg", correct: false, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },

{ challengeId: 21, imageSrc: "/eat.svg", correct: false, text: "comer", audioSrc: "Basics/audio/spanish/option/es_eat.mp3" },
{ challengeId: 21, imageSrc: "/read.svg", correct: false, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 21, imageSrc: "/write.svg", correct: true, text: "escribir", audioSrc: "Basics/audio/spanish/option/es_write.mp3" },

// Lesson 8 Challenge Options
{ challengeId: 22, imageSrc: "/read.svg", correct: true, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 22, imageSrc: "/walk.svg", correct: false, text: "caminar", audioSrc: "Basics/audio/spanish/option/es_walk.mp3" },
{ challengeId: 22, imageSrc: "/speak.svg", correct: false, text: "hablar", audioSrc: "Basics/audio/spanish/option/es_speak.mp3" },

{ challengeId: 23, imageSrc: "/read.svg", correct: false, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 23, imageSrc: "/walk.svg", correct: true, text: "caminar", audioSrc: "Basics/audio/spanish/option/es_walk.mp3" },
{ challengeId: 23, imageSrc: "/eat.svg", correct: false, text: "comer", audioSrc: "Basics/audio/spanish/option/es_eat.mp3" },

{ challengeId: 24, imageSrc: "/read.svg", correct: false, text: "leer", audioSrc: "Basics/audio/spanish/option/es_read.mp3" },
{ challengeId: 24, imageSrc: "/speak.svg", correct: true, text: "hablar", audioSrc: "Basics/audio/spanish/option/es_speak.mp3" },
{ challengeId: 24, imageSrc: "/run.svg", correct: false, text: "correr", audioSrc: "Basics/audio/spanish/option/es_run.mp3" },

// Lesson 9 Assist Options
{ challengeId: 25, correct: true, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
{ challengeId: 25, correct: false, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },
{ challengeId: 25, correct: false, text: "la carta", audioSrc: "Basics/audio/spanish/option/es_letter.mp3" },

{ challengeId: 26, correct: false, text: "la carta", audioSrc: "Basics/audio/spanish/option/es_letter.mp3" },
{ challengeId: 26, correct: true, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },
{ challengeId: 26, correct: false, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },

{ challengeId: 27, correct: false, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
{ challengeId: 27, correct: true, text: "la carta", audioSrc: "Basics/audio/spanish/option/es_letter.mp3" },
{ challengeId: 27, correct: false, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },

// Lesson 10 Assist Options (NO IMAGES HERE)
{ challengeId: 28, correct: true, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 28, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 28, correct: false, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },

{ challengeId: 29, correct: true, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 29, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 29, correct: false, text: "lento", audioSrc: "Basics/audio/spanish/option/es_slow.mp3" },

{ challengeId: 30, correct: true, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },
{ challengeId: 30, correct: false, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 30, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },

// Lesson 11 Assist Options (NO IMAGES HERE)
{ challengeId: 31, correct: true, text: "lento", audioSrc: "Basics/audio/spanish/option/es_slow.mp3" },
{ challengeId: 31, correct: false, text: "rápido", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },
{ challengeId: 31, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },

{ challengeId: 32, correct: true, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 32, correct: false, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 32, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },

{ challengeId: 33, correct: true, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 33, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 33, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },

// Lesson 12 Assist Options (NO IMAGES HERE)
{ challengeId: 34, correct: true, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },
{ challengeId: 34, correct: false, text: "pequeño", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },
{ challengeId: 34, correct: false, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },

{ challengeId: 35, correct: true, text: "hermosa", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 35, correct: false, text: "rápida", audioSrc: "Basics/audio/spanish/option/es_fast.mp3" },
{ challengeId: 35, correct: false, text: "pequeña", audioSrc: "Basics/audio/spanish/option/es_small.mp3" },

{ challengeId: 36, correct: true, text: "fuerte", audioSrc: "Basics/audio/spanish/option/es_strong.mp3" },
{ challengeId: 36, correct: false, text: "hermoso", audioSrc: "Basics/audio/spanish/option/es_beautiful.mp3" },
{ challengeId: 36, correct: false, text: "grande", audioSrc: "Basics/audio/spanish/option/es_big.mp3" },

// Lesson 13 Assist Options (FULL SENTENCE VERSION)
{ challengeId: 37, correct: true, text: "Este es un gato.", audioSrc: "Basics/audio/spanish/option/es_this_is_a_cat.mp3" },
{ challengeId: 37, correct: false, text: "Ese es un gato.", audioSrc: "Basics/audio/spanish/option/es_that_is_a_cat.mp3" },
{ challengeId: 37, correct: false, text: "Esto es un perro.", audioSrc: "Basics/audio/spanish/option/es_this_is_a_dog.mp3" },

{ challengeId: 38, correct: true, text: "El sol es brillante.", audioSrc: "Basics/audio/spanish/option/es_the_sun_is_bright.mp3" },
{ challengeId: 38, correct: false, text: "El sol está apagado.", audioSrc: "Basics/audio/spanish/option/es_the_sun_is_dim.mp3" },
{ challengeId: 38, correct: false, text: "El sol es grande.", audioSrc: "Basics/audio/spanish/option/es_the_sun_is_big.mp3" },

{ challengeId: 39, correct: true, text: "Tengo un libro.", audioSrc: "Basics/audio/spanish/option/es_i_have_a_book.mp3" },
{ challengeId: 39, correct: false, text: "Tengo un gato.", audioSrc: "Basics/audio/spanish/option/es_i_have_a_cat.mp3" },
{ challengeId: 39, correct: false, text: "Tengo una manzana.", audioSrc: "Basics/audio/spanish/option/es_i_have_an_apple.mp3" },

// Lesson 14 Assist Options
{ challengeId: 40, correct: true, text: "Ella es mi hermana.", audioSrc: "Basics/audio/spanish/option/es_she_is_my_sister.mp3" },
{ challengeId: 40, correct: false, text: "Él es mi hermano.", audioSrc: "Basics/audio/spanish/option/es_he_is_my_brother.mp3" },
{ challengeId: 40, correct: false, text: "Ella es mi madre.", audioSrc: "Basics/audio/spanish/option/es_she_is_my_mother.mp3" },

{ challengeId: 41, correct: true, text: "Somos amigos.", audioSrc: "Basics/audio/spanish/option/es_we_are_friends.mp3" },
{ challengeId: 41, correct: false, text: "Somos hermanos.", audioSrc: "Basics/audio/spanish/option/es_we_are_siblings.mp3" },
{ challengeId: 41, correct: false, text: "Ellos son amigos.", audioSrc: "Basics/audio/spanish/option/es_they_are_friends.mp3" },

{ challengeId: 42, correct: true, text: "El perro está corriendo.", audioSrc: "Basics/audio/spanish/option/es_the_dog_is_running.mp3" },
{ challengeId: 42, correct: false, text: "El gato está corriendo.", audioSrc: "Basics/audio/spanish/option/es_the_cat_is_running.mp3" },
{ challengeId: 42, correct: false, text: "El perro está comiendo.", audioSrc: "Basics/audio/spanish/option/es_the_dog_is_eating.mp3" },

// Lesson 15 Assist Options
{ challengeId: 43, correct: true, text: "Él es un maestro.", audioSrc: "Basics/audio/spanish/option/es_he_is_a_teacher.mp3" },
{ challengeId: 43, correct: false, text: "Él es un doctor.", audioSrc: "Basics/audio/spanish/option/es_he_is_a_doctor.mp3" },
{ challengeId: 43, correct: false, text: "Él es un amigo.", audioSrc: "Basics/audio/spanish/option/es_he_is_a_friend.mp3" },

{ challengeId: 44, correct: true, text: "La manzana es roja.", audioSrc: "Basics/audio/spanish/option/es_the_apple_is_red.mp3" },
{ challengeId: 44, correct: false, text: "La manzana es verde.", audioSrc: "Basics/audio/spanish/option/es_the_apple_is_green.mp3" },
{ challengeId: 44, correct: false, text: "La manzana es grande.", audioSrc: "Basics/audio/spanish/option/es_the_apple_is_big.mp3" },

{ challengeId: 45, correct: true, text: "Me gustan los mangos.", audioSrc: "Basics/audio/spanish/option/es_i_like_mangoes.mp3" },
{ challengeId: 45, correct: false, text: "Me gustan las manzanas.", audioSrc: "Basics/audio/spanish/option/es_i_like_apples.mp3" },
{ challengeId: 45, correct: false, text: "Me gustan los libros.", audioSrc: "Basics/audio/spanish/option/es_i_like_books.mp3" },

{ challengeId: 46, correct: true, text: "Ella está feliz.", audioSrc: "Basics/audio/spanish/option/es_she_is_happy.mp3" },
{ challengeId: 46, correct: false, text: "Ella está triste.", audioSrc: "Basics/audio/spanish/option/es_she_is_sad.mp3" },
{ challengeId: 46, correct: false, text: "Ella está cansada.", audioSrc: "Basics/audio/spanish/option/es_she_is_tired.mp3" },

// Lesson 16 Assist Options (Intermediate Sentences)
{ challengeId: 47, correct: true, text: "Estoy leyendo un libro en español.", audioSrc: "Basics/audio/spanish/option/es_i_am_reading_a_spanish_book.mp3" },
{ challengeId: 47, correct: false, text: "Estoy leyendo un libro en inglés.", audioSrc: "Basics/audio/spanish/option/es_i_am_reading_an_english_book.mp3" },
{ challengeId: 47, correct: false, text: "Estoy escribiendo un libro en español.", audioSrc: "Basics/audio/spanish/option/es_i_am_writing_a_spanish_book.mp3" },

{ challengeId: 48, correct: true, text: "Ella está cocinando comida.", audioSrc: "Basics/audio/spanish/option/es_she_is_cooking_food.mp3" },
{ challengeId: 48, correct: false, text: "Ella está comiendo comida.", audioSrc: "Basics/audio/spanish/option/es_she_is_eating_food.mp3" },
{ challengeId: 48, correct: false, text: "Ella está sirviendo comida.", audioSrc: "Basics/audio/spanish/option/es_she_is_serving_food.mp3" },

{ challengeId: 49, correct: true, text: "Los niños están jugando afuera.", audioSrc: "Basics/audio/spanish/option/es_the_children_are_playing_outside.mp3" },
{ challengeId: 49, correct: false, text: "Los niños están estudiando afuera.", audioSrc: "Basics/audio/spanish/option/es_the_children_are_studying_outside.mp3" },
{ challengeId: 49, correct: false, text: "Los niños están corriendo afuera.", audioSrc: "Basics/audio/spanish/option/es_the_children_are_running_outside.mp3" },

// Lesson 17 Assist Options
{ challengeId: 50, correct: true, text: "Vamos a la escuela todos los días.", audioSrc: "Basics/audio/spanish/option/es_we_go_to_school_every_day.mp3" },
{ challengeId: 50, correct: false, text: "Ellos van a la escuela todos los días.", audioSrc: "Basics/audio/spanish/option/es_they_go_to_school_every_day.mp3" },
{ challengeId: 50, correct: false, text: "Voy a la escuela todos los días.", audioSrc: "Basics/audio/spanish/option/es_i_go_to_school_every_day.mp3" },

{ challengeId: 51, correct: true, text: "Le gusta tomar té.", audioSrc: "Basics/audio/spanish/option/es_he_likes_to_drink_tea.mp3" },
{ challengeId: 51, correct: false, text: "Le gusta beber leche.", audioSrc: "Basics/audio/spanish/option/es_he_likes_to_drink_milk.mp3" },
{ challengeId: 51, correct: false, text: "Le gusta tomar café.", audioSrc: "Basics/audio/spanish/option/es_he_likes_to_drink_coffee.mp3" },

{ challengeId: 52, correct: true, text: "Los pájaros están volando en el cielo.", audioSrc: "Basics/audio/spanish/option/es_the_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 52, correct: false, text: "Los pájaros están corriendo en el suelo.", audioSrc: "Basics/audio/spanish/option/es_the_birds_are_running_on_the_ground.mp3" },
{ challengeId: 52, correct: false, text: "Los pájaros están nadando en el agua.", audioSrc: "Basics/audio/spanish/option/es_the_birds_are_swimming_in_the_water.mp3" },

// Lesson 18 Assist Options
{ challengeId: 53, correct: true, text: "Ella está usando un vestido azul.", audioSrc: "Basics/audio/spanish/option/es_she_is_wearing_a_blue_dress.mp3" },
{ challengeId: 53, correct: false, text: "Ella está usando un vestido rojo.", audioSrc: "Basics/audio/spanish/option/es_she_is_wearing_a_red_dress.mp3" },
{ challengeId: 53, correct: false, text: "Ella está usando un vestido verde.", audioSrc: "Basics/audio/spanish/option/es_she_is_wearing_a_green_dress.mp3" },

{ challengeId: 54, correct: true, text: "El autobús está tarde hoy.", audioSrc: "Basics/audio/spanish/option/es_the_bus_is_late_today.mp3" },
{ challengeId: 54, correct: false, text: "El autobús llegó temprano hoy.", audioSrc: "Basics/audio/spanish/option/es_the_bus_arrived_early_today.mp3" },
{ challengeId: 54, correct: false, text: "El autobús no llegó hoy.", audioSrc: "Basics/audio/spanish/option/es_the_bus_did_not_arrive_today.mp3" },

{ challengeId: 55, correct: true, text: "Ellos están viendo una película.", audioSrc: "Basics/audio/spanish/option/es_they_are_watching_a_movie.mp3" },
{ challengeId: 55, correct: false, text: "Ellos están viendo una serie.", audioSrc: "Basics/audio/spanish/option/es_they_are_watching_a_series.mp3" },
{ challengeId: 55, correct: false, text: "Ellos están leyendo un libro.", audioSrc: "Basics/audio/spanish/option/es_they_are_reading_a_book.mp3" },

{ challengeId: 56, correct: true, text: "El maestro está explicando la lección.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_is_explaining_the_lesson.mp3" },
{ challengeId: 56, correct: false, text: "El maestro está escribiendo la lección.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_is_writing_the_lesson.mp3" },
{ challengeId: 56, correct: false, text: "El maestro está ignorando la lección.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_is_ignoring_the_lesson.mp3" },

// Lesson 19 Assist Options (Difficult Sentences)
{ challengeId: 57, correct: true, text: "Si trabajas duro, tendrás éxito.", audioSrc: "Basics/audio/spanish/option/es_if_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 57, correct: false, text: "Si estudias duro, tendrás éxito.", audioSrc: "Basics/audio/spanish/option/es_if_you_study_hard_you_will_succeed.mp3" },
{ challengeId: 57, correct: false, text: "Si trabajas poco, tendrás éxito.", audioSrc: "Basics/audio/spanish/option/es_if_you_work_less_you_will_succeed.mp3" },

{ challengeId: 58, correct: true, text: "Ella fue al mercado a comprar verduras.", audioSrc: "Basics/audio/spanish/option/es_she_went_to_the_market_to_buy_vegetables.mp3" },
{ challengeId: 58, correct: false, text: "Ella fue a la tienda a comprar frutas.", audioSrc: "Basics/audio/spanish/option/es_she_went_to_the_store_to_buy_fruits.mp3" },
{ challengeId: 58, correct: false, text: "Ella fue al mercado a vender verduras.", audioSrc: "Basics/audio/spanish/option/es_she_went_to_the_market_to_sell_vegetables.mp3" },

{ challengeId: 59, correct: true, text: "Aunque estaba lloviendo, ellos jugaron al fútbol.", audioSrc: "Basics/audio/spanish/option/es_although_it_was_raining_they_played_football.mp3" },
{ challengeId: 59, correct: false, text: "Aunque estaba soleado, ellos jugaron al fútbol.", audioSrc: "Basics/audio/spanish/option/es_although_it_was_sunny_they_played_football.mp3" },
{ challengeId: 59, correct: false, text: "Aunque estaba lloviendo, ellos fueron a casa.", audioSrc: "Basics/audio/spanish/option/es_although_it_was_raining_they_went_home.mp3" },

// Lesson 20 Assist Options
{ challengeId: 60, correct: true, text: "El maestro pidió a los estudiantes que entregaran sus tareas a tiempo.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_asked_students_to_submit_assignments.mp3" },
{ challengeId: 60, correct: false, text: "El maestro pidió a los estudiantes que jugaran a tiempo.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_asked_students_to_play_on_time.mp3" },
{ challengeId: 60, correct: false, text: "El maestro pidió a los estudiantes que entregaran sus trabajos tarde.", audioSrc: "Basics/audio/spanish/option/es_the_teacher_asked_students_to_submit_work_late.mp3" },

{ challengeId: 61, correct: true, text: "Él está leyendo un periódico mientras toma té.", audioSrc: "Basics/audio/spanish/option/es_he_is_reading_newspaper_while_drinking_tea.mp3" },
{ challengeId: 61, correct: false, text: "Él está escribiendo un periódico mientras toma café.", audioSrc: "Basics/audio/spanish/option/es_he_is_writing_newspaper_while_drinking_coffee.mp3" },
{ challengeId: 61, correct: false, text: "Él está leyendo un libro mientras toma té.", audioSrc: "Basics/audio/spanish/option/es_he_is_reading_book_while_drinking_tea.mp3" },

{ challengeId: 62, correct: true, text: "Ella estaba cansada, sin embargo, siguió trabajando.", audioSrc: "Basics/audio/spanish/option/es_she_was_tired_but_continued_working.mp3" },
{ challengeId: 62, correct: false, text: "Ella estaba feliz, sin embargo, siguió trabajando.", audioSrc: "Basics/audio/spanish/option/es_she_was_happy_but_continued_working.mp3" },
{ challengeId: 62, correct: false, text: "Ella estaba cansada, sin embargo, dejó de trabajar.", audioSrc: "Basics/audio/spanish/option/es_she_was_tired_and_stopped_working.mp3" },

// Lesson 21 Assist Options
{ challengeId: 63, correct: true, text: "Para cuando llegamos, el tren ya se había ido.", audioSrc: "Basics/audio/spanish/option/es_by_the_time_we_reached_train_had_left.mp3" },
{ challengeId: 63, correct: false, text: "Para cuando llegamos, el tren estaba llegando.", audioSrc: "Basics/audio/spanish/option/es_by_the_time_we_reached_train_was_coming.mp3" },
{ challengeId: 63, correct: false, text: "Para cuando llegamos, el tren estaba vacío.", audioSrc: "Basics/audio/spanish/option/es_by_the_time_we_reached_train_was_empty.mp3" },

{ challengeId: 64, correct: true, text: "A menos que estudies, no aprobarás el examen.", audioSrc: "Basics/audio/spanish/option/es_unless_you_study_you_will_not_pass.mp3" },
{ challengeId: 64, correct: false, text: "A menos que duermas, no aprobarás el examen.", audioSrc: "Basics/audio/spanish/option/es_unless_you_sleep_you_will_not_pass.mp3" },
{ challengeId: 64, correct: false, text: "A menos que salgas, no aprobarás el examen.", audioSrc: "Basics/audio/spanish/option/es_unless_you_go_out_you_will_not_pass.mp3" },

{ challengeId: 65, correct: true, text: "El doctor le aconsejó que tomara medicina regularmente.", audioSrc: "Basics/audio/spanish/option/es_doctor_advised_to_take_medicine_regularly.mp3" },
{ challengeId: 65, correct: false, text: "El doctor le aconsejó que tomara agua regularmente.", audioSrc: "Basics/audio/spanish/option/es_doctor_advised_to_take_water_regularly.mp3" },
{ challengeId: 65, correct: false, text: "El doctor le aconsejó que no tomara medicina.", audioSrc: "Basics/audio/spanish/option/es_doctor_advised_not_to_take_medicine.mp3" },

{ challengeId: 66, correct: true, text: "El anciano, que vivía solo, nos contó muchas historias de su pasado.", audioSrc: "Basics/audio/spanish/option/es_old_man_told_many_stories.mp3" },
{ challengeId: 66, correct: false, text: "El anciano, que vivía solo, nos contó muchas mentiras de su pasado.", audioSrc: "Basics/audio/spanish/option/es_old_man_told_many_lies.mp3" },
{ challengeId: 66, correct: false, text: "El anciano, que vivía solo, nos contó muchas historias falsas.", audioSrc: "Basics/audio/spanish/option/es_old_man_told_many_fake_stories.mp3" },

]);