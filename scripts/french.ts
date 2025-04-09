   await db.insert(schema.challenges).values([ 
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
{ id: 76, lessonId: 25, type: "SELECT", order: 1, question: "How do you say 'I' in French?" },
{ id: 77, lessonId: 25, type: "SELECT", order: 2, question: "How do you say 'you' in French?" },
{ id: 78, lessonId: 25, type: "SELECT", order: 3, question: "How do you say 'he' in French?" },

{ id: 79, lessonId: 26, type: "SELECT", order: 1, question: "How do you say 'she' in French?" },
{ id: 80, lessonId: 26, type: "SELECT", order: 2, question: "How do you say 'they' in French?" },
{ id: 81, lessonId: 26, type: "ASSIST", order: 3, question: "Translate: 'He is running.' → '__ court.'" },

{ id: 82, lessonId: 27, type: "ASSIST", order: 1, question: "Translate: 'She is eating.' → 'Elle __ mange.'" },
{ id: 83, lessonId: 27, type: "ASSIST", order: 2, question: "Translate: 'We are playing.' → 'Nous __ jouons.'" },
{ id: 84, lessonId: 27, type: "ASSIST", order: 3, question: "Translate: 'They are studying.' → 'Ils __ étudient.'" },

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
{ id: 94, lessonId: 31, type: "SELECT", order: 1, question: "How do you say 'big' in French?" },
{ id: 95, lessonId: 31, type: "SELECT", order: 2, question: "How do you say 'small' in French?" },
{ id: 96, lessonId: 31, type: "SELECT", order: 3, question: "How do you say 'fast' in French?" },

{ id: 97, lessonId: 32, type: "SELECT", order: 1, question: "How do you say 'slow' in French?" },
{ id: 98, lessonId: 32, type: "SELECT", order: 2, question: "How do you say 'beautiful' in French?" },
{ id: 99, lessonId: 32, type: "SELECT", order: 3, question: "How do you say 'strong' in French?" },

{ id: 100, lessonId: 33, type: "ASSIST", order: 1, question: "Translate: 'The car is big.' → 'La voiture est __.'" },
{ id: 101, lessonId: 33, type: "ASSIST", order: 2, question: "Translate: 'The flower is beautiful.' → 'La fleur est __.'" },
{ id: 102, lessonId: 33, type: "ASSIST", order: 3, question: "Translate: 'The boy is strong.' → 'Le garçon est __.'" },

// Sentences
// Easy Sentences
{ id: 103, lessonId: 34, type: "ASSIST", order: 1, question: "Translate: 'This is a cat.' → 'C'est un chat.'" },
{ id: 104, lessonId: 34, type: "ASSIST", order: 2, question: "Translate: 'The sun is bright.' → 'Le soleil est brillant.'" },
{ id: 105, lessonId: 34, type: "ASSIST", order: 3, question: "Translate: 'I have a book.' → 'J'ai un livre.'" },

{ id: 106, lessonId: 35, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.' → 'Elle est ma sœur.'" },
{ id: 107, lessonId: 35, type: "ASSIST", order: 2, question: "Translate: 'We are friends.' → 'Nous sommes amis.'" },
{ id: 108, lessonId: 35, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.' → 'Le chien court.'" },

{ id: 109, lessonId: 36, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.' → 'Il est professeur.'" },
{ id: 110, lessonId: 36, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.' → 'La pomme est rouge.'" },
{ id: 111, lessonId: 36, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.' → 'J'aime les mangues.'" },
{ id: 112, lessonId: 36, type: "ASSIST", order: 4, question: "Translate: 'She is happy.' → 'Elle est heureuse.'" },

// Intermediate Sentences
{ id: 113, lessonId: 37, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Spanish book.' → 'Je lis un livre en espagnol.'" },
{ id: 114, lessonId: 37, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.' → 'Elle cuisine de la nourriture.'" },
{ id: 115, lessonId: 37, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.' → 'Les enfants jouent dehors.'" },

{ id: 116, lessonId: 38, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.' → 'Nous allons à l'école tous les jours.'" },
{ id: 117, lessonId: 38, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.' → 'Il aime boire du thé.'" },
{ id: 118, lessonId: 38, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.' → 'Les oiseaux volent dans le ciel.'" },

{ id: 119, lessonId: 39, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.' → 'Elle porte une robe bleue.'" },
{ id: 120, lessonId: 39, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.' → 'Le bus est en retard aujourd'hui.'" },
{ id: 121, lessonId: 39, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.' → 'Ils regardent un film.'" },
{ id: 122, lessonId: 39, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.' → 'Le professeur explique la leçon.'" },

// Difficult Sentences
{ id: 123, lessonId: 40, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.' → 'Si vous travaillez dur, vous réussirez.'" },
{ id: 124, lessonId: 40, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.' → 'Elle est allée au marché pour acheter des légumes.'" },
{ id: 125, lessonId: 40, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.' → 'Bien qu'il pleuvait, ils ont joué au football.'" },

{ id: 126, lessonId: 41, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.' → 'Le professeur a demandé aux élèves de rendre leurs devoirs à temps.'" },
{ id: 127, lessonId: 41, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.' → 'Il lit un journal en buvant du thé.'" },
{ id: 128, lessonId: 41, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.' → 'Elle était fatiguée, mais elle a continué à travailler.'" },

{ id: 129, lessonId: 42, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left.' → 'Quand nous sommes arrivés, le train était déjà parti.'" },
{ id: 130, lessonId: 42, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.' → 'À moins d'étudier, vous ne réussirez pas l'examen.'" },
{ id: 131, lessonId: 42, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.' → 'Le médecin lui a conseillé de prendre des médicaments régulièrement.'" },
{ id: 132, lessonId: 42, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.' → 'Le vieil homme, qui vivait seul, nous a raconté de nombreuses histoires de son passé.'" },

]);


//options
await db.insert(schema.challengeOptions).values([
{ challengeId: 67, imageSrc: "/man.svg", correct: true, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
{ challengeId: 67, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
{ challengeId: 67, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },

{ challengeId: 68, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
{ challengeId: 68, imageSrc: "/woman.svg", correct: true, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
{ challengeId: 68, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },

{ challengeId: 69, imageSrc: "/robot.svg", correct: true, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },
{ challengeId: 69, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
{ challengeId: 69, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },

// Lesson 23
{ challengeId: 70, imageSrc: "/car.svg", correct: true, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 70, imageSrc: "/house.svg", correct: false, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },
{ challengeId: 70, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },

{ challengeId: 71, imageSrc: "/house.svg", correct: true, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },
{ challengeId: 71, imageSrc: "/car.svg", correct: false, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 71, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },

{ challengeId: 72, imageSrc: "/book.svg", correct: true, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
{ challengeId: 72, imageSrc: "/car.svg", correct: false, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 72, imageSrc: "/house.svg", correct: false, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },

// Lesson 24
{ challengeId: 73, imageSrc: "/tree.svg", correct: true, text: "l'arbre", audioSrc: "Basics/audio/french/option/fr_tree.mp3" },
{ challengeId: 73, imageSrc: "/dog.svg", correct: false, text: "le chien", audioSrc: "Basics/audio/french/option/fr_dog.mp3" },
{ challengeId: 73, imageSrc: "/cat.svg", correct: false, text: "le chat", audioSrc: "Basics/audio/french/option/fr_cat.mp3" },

{ challengeId: 74, imageSrc: "/dog.svg", correct: true, text: "le chien", audioSrc: "Basics/audio/french/option/fr_dog.mp3" },
{ challengeId: 74, imageSrc: "/cat.svg", correct: false, text: "le chat", audioSrc: "Basics/audio/french/option/fr_cat.mp3" },
{ challengeId: 74, imageSrc: "/tree.svg", correct: false, text: "l'arbre", audioSrc: "Basics/audio/french/option/fr_tree.mp3" },

{ challengeId: 75, imageSrc: "/cat.svg", correct: true, text: "le chat", audioSrc: "Basics/audio/french/option/fr_cat.mp3" },
{ challengeId: 75, imageSrc: "/dog.svg", correct: false, text: "le chien", audioSrc: "Basics/audio/french/option/fr_dog.mp3" },
{ challengeId: 75, imageSrc: "/tree.svg", correct: false, text: "l'arbre", audioSrc: "Basics/audio/french/option/fr_tree.mp3" },

// Lesson 25
{ challengeId: 76, correct: true, text: "je", audioSrc: "Basics/audio/french/option/fr_i.mp3" },
{ challengeId: 76, correct: false, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },
{ challengeId: 76, correct: false, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },

{ challengeId: 77, correct: true, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },
{ challengeId: 77, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_i.mp3" },
{ challengeId: 77, correct: false, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },

{ challengeId: 78, correct: true, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 78, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_i.mp3" },
{ challengeId: 78, correct: false, text: "nous", audioSrc: "Basics/audio/french/option/fr_we.mp3" },

// Lesson 26
{ challengeId: 79, correct: true, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },
{ challengeId: 79, correct: false, text: "il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 79, correct: false, text: "je", audioSrc: "Basics/audio/french/option/fr_i.mp3" },

{ challengeId: 80, correct: true, text: "ils", audioSrc: "Basics/audio/french/option/fr_they.mp3" },
{ challengeId: 80, correct: false, text: "tu", audioSrc: "Basics/audio/french/option/fr_you.mp3" },
{ challengeId: 80, correct: false, text: "elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },

{ challengeId: 81, correct: true, text: "Il", audioSrc: "Basics/audio/french/option/fr_he.mp3" },
{ challengeId: 81, correct: false, text: "Nous", audioSrc: "Basics/audio/french/option/fr_we.mp3" },
{ challengeId: 81, correct: false, text: "Elle", audioSrc: "Basics/audio/french/option/fr_she.mp3" },

// Lesson 27
{ challengeId: 82, correct: true, text: "est", audioSrc: "Basics/audio/french/option/fr_is.mp3" },
{ challengeId: 82, correct: false, text: "sont", audioSrc: "Basics/audio/french/option/fr_are.mp3" },
{ challengeId: 82, correct: false, text: "mangent", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },

{ challengeId: 83, correct: true, text: "sommes", audioSrc: "Basics/audio/french/option/fr_we_are.mp3" },
{ challengeId: 83, correct: false, text: "êtes", audioSrc: "Basics/audio/french/option/fr_you_are.mp3" },
{ challengeId: 83, correct: false, text: "sont", audioSrc: "Basics/audio/french/option/fr_are.mp3" },

{ challengeId: 84, correct: true, text: "étudient", audioSrc: "Basics/audio/french/option/fr_study.mp3" },
{ challengeId: 84, correct: false, text: "mangent", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },
{ challengeId: 84, correct: false, text: "écrivent", audioSrc: "Basics/audio/french/option/fr_write.mp3" },

 // Lesson 28
{ challengeId: 85, imageSrc: "/eat.svg", correct: true, text: "manger", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },
{ challengeId: 85, imageSrc: "/run.svg", correct: false, text: "courir", audioSrc: "Basics/audio/french/option/fr_run.mp3" },
{ challengeId: 85, imageSrc: "/write.svg", correct: false, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },

{ challengeId: 86, imageSrc: "/run.svg", correct: true, text: "courir", audioSrc: "Basics/audio/french/option/fr_run.mp3" },
{ challengeId: 86, imageSrc: "/read.svg", correct: false, text: "lire", audioSrc: "Basics/audio/french/option/fr_read.mp3" },
{ challengeId: 86, imageSrc: "/speak.svg", correct: false, text: "parler", audioSrc: "Basics/audio/french/option/fr_speak.mp3" },

{ challengeId: 87, imageSrc: "/write.svg", correct: true, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },
{ challengeId: 87, imageSrc: "/walk.svg", correct: false, text: "marcher", audioSrc: "Basics/audio/french/option/fr_walk.mp3" },
{ challengeId: 87, imageSrc: "/eat.svg", correct: false, text: "manger", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },

// Lesson 29
{ challengeId: 88, imageSrc: "/read.svg", correct: true, text: "lire", audioSrc: "Basics/audio/french/option/fr_read.mp3" },
{ challengeId: 88, imageSrc: "/write.svg", correct: false, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },
{ challengeId: 88, imageSrc: "/speak.svg", correct: false, text: "parler", audioSrc: "Basics/audio/french/option/fr_speak.mp3" },

{ challengeId: 89, imageSrc: "/walk.svg", correct: true, text: "marcher", audioSrc: "Basics/audio/french/option/fr_walk.mp3" },
{ challengeId: 89, imageSrc: "/run.svg", correct: false, text: "courir", audioSrc: "Basics/audio/french/option/fr_run.mp3" },
{ challengeId: 89, imageSrc: "/write.svg", correct: false, text: "écrire", audioSrc: "Basics/audio/french/option/fr_write.mp3" },

{ challengeId: 90, imageSrc: "/speak.svg", correct: true, text: "parler", audioSrc: "Basics/audio/french/option/fr_speak.mp3" },
{ challengeId: 90, imageSrc: "/eat.svg", correct: false, text: "manger", audioSrc: "Basics/audio/french/option/fr_eat.mp3" },
{ challengeId: 90, imageSrc: "/read.svg", correct: false, text: "lire", audioSrc: "Basics/audio/french/option/fr_read.mp3" },

// Lesson 30 (Assist Questions - No Images)
{ challengeId: 91, correct: true, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
{ challengeId: 91, correct: false, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 91, correct: false, text: "la lettre", audioSrc: "Basics/audio/french/option/fr_letter.mp3" },

{ challengeId: 92, correct: true, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
{ challengeId: 92, correct: false, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
{ challengeId: 92, correct: false, text: "la lettre", audioSrc: "Basics/audio/french/option/fr_letter.mp3" },

{ challengeId: 93, correct: true, text: "une lettre", audioSrc: "Basics/audio/french/option/fr_letter.mp3" },
{ challengeId: 93, correct: false, text: "un livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
{ challengeId: 93, correct: false, text: "une voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },

// Lesson 31
{ challengeId: 94, correct: true, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },
{ challengeId: 94, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 94, correct: false, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },

{ challengeId: 95, correct: true, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 95, correct: false, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },
{ challengeId: 95, correct: false, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },

{ challengeId: 96, correct: true, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },
{ challengeId: 96, correct: false, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },
{ challengeId: 96, correct: false, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },

// Lesson 32
{ challengeId: 97, correct: true, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },
{ challengeId: 97, correct: false, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },
{ challengeId: 97, correct: false, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },

{ challengeId: 98, correct: true, text: "belle", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },
{ challengeId: 98, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 98, correct: false, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },

{ challengeId: 99, correct: true, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 99, correct: false, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },
{ challengeId: 99, correct: false, text: "belle", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },

// Lesson 33 (Assist Questions - No Images)
{ challengeId: 100, correct: true, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },
{ challengeId: 100, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },
{ challengeId: 100, correct: false, text: "rapide", audioSrc: "Basics/audio/french/option/fr_fast.mp3" },

{ challengeId: 101, correct: true, text: "belle", audioSrc: "Basics/audio/french/option/fr_beautiful.mp3" },
{ challengeId: 101, correct: false, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 101, correct: false, text: "grand", audioSrc: "Basics/audio/french/option/fr_big.mp3" },

{ challengeId: 102, correct: true, text: "fort", audioSrc: "Basics/audio/french/option/fr_strong.mp3" },
{ challengeId: 102, correct: false, text: "lent", audioSrc: "Basics/audio/french/option/fr_slow.mp3" },
{ challengeId: 102, correct: false, text: "petit", audioSrc: "Basics/audio/french/option/fr_small.mp3" },

// Easy Sentences
{ challengeId: 103, correct: true, text: "C'est un chat.", audioSrc: "Basics/audio/french/option/fr_This_is_a_cat.mp3" },
{ challengeId: 103, correct: false, text: "C'est un chien.", audioSrc: "Basics/audio/french/option/fr_This_is_a_dog.mp3" },
{ challengeId: 103, correct: false, text: "C'est un livre.", audioSrc: "Basics/audio/french/option/fr_This_is_a_book.mp3" },

{ challengeId: 104, correct: true, text: "Le soleil est brillant.", audioSrc: "Basics/audio/french/option/fr_The_sun_is_bright.mp3" },
{ challengeId: 104, correct: false, text: "Le soleil est grand.", audioSrc: "Basics/audio/french/option/fr_The_sun_is_big.mp3" },
{ challengeId: 104, correct: false, text: "Le soleil est chaud.", audioSrc: "Basics/audio/french/option/fr_The_sun_is_hot.mp3" },

{ challengeId: 105, correct: true, text: "J'ai un livre.", audioSrc: "Basics/audio/french/option/fr_I_have_a_book.mp3" },
{ challengeId: 105, correct: false, text: "J'ai un chat.", audioSrc: "Basics/audio/french/option/fr_I_have_a_cat.mp3" },
{ challengeId: 105, correct: false, text: "J'ai une voiture.", audioSrc: "Basics/audio/french/option/fr_I_have_a_car.mp3" },

{ challengeId: 106, correct: true, text: "Elle est ma sœur.", audioSrc: "Basics/audio/french/option/fr_She_is_my_sister.mp3" },
{ challengeId: 106, correct: false, text: "Elle est ma mère.", audioSrc: "Basics/audio/french/option/fr_She_is_my_mother.mp3" },
{ challengeId: 106, correct: false, text: "Elle est ma tante.", audioSrc: "Basics/audio/french/option/fr_She_is_my_aunt.mp3" },

{ challengeId: 107, correct: true, text: "Nous sommes amis.", audioSrc: "Basics/audio/french/option/fr_We_are_friends.mp3" },
{ challengeId: 107, correct: false, text: "Nous sommes frères.", audioSrc: "Basics/audio/french/option/fr_We_are_brothers.mp3" },
{ challengeId: 107, correct: false, text: "Nous sommes parents.", audioSrc: "Basics/audio/french/option/fr_We_are_parents.mp3" },

{ challengeId: 108, correct: true, text: "Le chien court.", audioSrc: "Basics/audio/french/option/fr_The_dog_is_running.mp3" },
{ challengeId: 108, correct: false, text: "Le chat court.", audioSrc: "Basics/audio/french/option/fr_The_cat_is_running.mp3" },
{ challengeId: 108, correct: false, text: "Le garçon court.", audioSrc: "Basics/audio/french/option/fr_The_boy_is_running.mp3" },

{ challengeId: 109, correct: true, text: "Il est professeur.", audioSrc: "Basics/audio/french/option/fr_He_is_a_teacher.mp3" },
{ challengeId: 109, correct: false, text: "Il est étudiant.", audioSrc: "Basics/audio/french/option/fr_He_is_a_student.mp3" },
{ challengeId: 109, correct: false, text: "Il est médecin.", audioSrc: "Basics/audio/french/option/fr_He_is_a_doctor.mp3" },

{ challengeId: 110, correct: true, text: "La pomme est rouge.", audioSrc: "Basics/audio/french/option/fr_The_apple_is_red.mp3" },
{ challengeId: 110, correct: false, text: "La pomme est verte.", audioSrc: "Basics/audio/french/option/fr_The_apple_is_green.mp3" },
{ challengeId: 110, correct: false, text: "La pomme est petite.", audioSrc: "Basics/audio/french/option/fr_The_apple_is_small.mp3" },

{ challengeId: 111, correct: true, text: "J'aime les mangues.", audioSrc: "Basics/audio/french/option/fr_I_like_mangoes.mp3" },
{ challengeId: 111, correct: false, text: "J'aime les pommes.", audioSrc: "Basics/audio/french/option/fr_I_like_apples.mp3" },
{ challengeId: 111, correct: false, text: "J'aime les bananes.", audioSrc: "Basics/audio/french/option/fr_I_like_bananas.mp3" },

{ challengeId: 112, correct: true, text: "Elle est heureuse.", audioSrc: "Basics/audio/french/option/fr_She_is_happy.mp3" },
{ challengeId: 112, correct: false, text: "Elle est triste.", audioSrc: "Basics/audio/french/option/fr_She_is_sad.mp3" },
{ challengeId: 112, correct: false, text: "Elle est fatiguée.", audioSrc: "Basics/audio/french/option/fr_She_is_tired.mp3" },


// Intermediate Sentences
{ challengeId: 113, correct: true, text: "Je lis un livre en espagnol.", audioSrc: "Basics/audio/french/option/fr_I_am_reading_a_book_in_Spanish.mp3" },
{ challengeId: 113, correct: false, text: "Je lis un livre en anglais.", audioSrc: "Basics/audio/french/option/fr_I_am_reading_a_book_in_English.mp3" },
{ challengeId: 113, correct: false, text: "Je lis un journal.", audioSrc: "Basics/audio/french/option/fr_I_am_reading_a_newspaper.mp3" },

{ challengeId: 114, correct: true, text: "Elle cuisine de la nourriture.", audioSrc: "Basics/audio/french/option/fr_She_is_cooking_food.mp3" },
{ challengeId: 114, correct: false, text: "Elle mange de la nourriture.", audioSrc: "Basics/audio/french/option/fr_She_is_eating_food.mp3" },
{ challengeId: 114, correct: false, text: "Elle achète de la nourriture.", audioSrc: "Basics/audio/french/option/fr_She_is_buying_food.mp3" },

{ challengeId: 115, correct: true, text: "Les enfants jouent dehors.", audioSrc: "Basics/audio/french/option/fr_The_children_are_playing_outside.mp3" },
{ challengeId: 115, correct: false, text: "Les enfants dorment.", audioSrc: "Basics/audio/french/option/fr_The_children_are_sleeping.mp3" },
{ challengeId: 115, correct: false, text: "Les enfants étudient.", audioSrc: "Basics/audio/french/option/fr_The_children_are_studying.mp3" },

{ challengeId: 116, correct: true, text: "Nous allons à l'école tous les jours.", audioSrc: "Basics/audio/french/option/fr_We_go_to_school_every_day.mp3" },
{ challengeId: 116, correct: false, text: "Nous jouons à l'école.", audioSrc: "Basics/audio/french/option/fr_We_play_at_school.mp3" },
{ challengeId: 116, correct: false, text: "Nous restons à l'école.", audioSrc: "Basics/audio/french/option/fr_We_stay_at_school.mp3" },

{ challengeId: 117, correct: true, text: "Il aime boire du thé.", audioSrc: "Basics/audio/french/option/fr_He_likes_to_drink_tea.mp3" },
{ challengeId: 117, correct: false, text: "Il aime boire du café.", audioSrc: "Basics/audio/french/option/fr_He_likes_to_drink_coffee.mp3" },
{ challengeId: 117, correct: false, text: "Il aime boire de l'eau.", audioSrc: "Basics/audio/french/option/fr_He_likes_to_drink_water.mp3" },

{ challengeId: 118, correct: true, text: "Les oiseaux volent dans le ciel.", audioSrc: "Basics/audio/french/option/fr_The_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 118, correct: false, text: "Les oiseaux mangent.", audioSrc: "Basics/audio/french/option/fr_The_birds_are_eating.mp3" },
{ challengeId: 118, correct: false, text: "Les oiseaux chantent.", audioSrc: "Basics/audio/french/option/fr_The_birds_are_singing.mp3" },

{ challengeId: 119, correct: true, text: "Elle porte une robe bleue.", audioSrc: "Basics/audio/french/option/fr_She_is_wearing_a_blue_dress.mp3" },
{ challengeId: 119, correct: false, text: "Elle porte une robe rouge.", audioSrc: "Basics/audio/french/option/fr_She_is_wearing_a_red_dress.mp3" },
{ challengeId: 119, correct: false, text: "Elle porte une jupe.", audioSrc: "Basics/audio/french/option/fr_She_is_wearing_a_skirt.mp3" },

{ challengeId: 120, correct: true, text: "Le bus est en retard aujourd'hui.", audioSrc: "Basics/audio/french/option/fr_The_bus_is_late_today.mp3" },
{ challengeId: 120, correct: false, text: "Le bus est parti tôt aujourd'hui.", audioSrc: "Basics/audio/french/option/fr_The_bus_left_early_today.mp3" },
{ challengeId: 120, correct: false, text: "Le bus est annulé aujourd'hui.", audioSrc: "Basics/audio/french/option/fr_The_bus_is_cancelled_today.mp3" },

{ challengeId: 121, correct: true, text: "Ils regardent un film.", audioSrc: "Basics/audio/french/option/fr_They_are_watching_a_movie.mp3" },
{ challengeId: 121, correct: false, text: "Ils regardent la télévision.", audioSrc: "Basics/audio/french/option/fr_They_are_watching_TV.mp3" },
{ challengeId: 121, correct: false, text: "Ils lisent un livre.", audioSrc: "Basics/audio/french/option/fr_They_are_reading_a_book.mp3" },

{ challengeId: 122, correct: true, text: "Le professeur explique la leçon.", audioSrc: "Basics/audio/french/option/fr_The_teacher_is_explaining_the_lesson.mp3" },
{ challengeId: 122, correct: false, text: "Le professeur donne des devoirs.", audioSrc: "Basics/audio/french/option/fr_The_teacher_is_giving_homework.mp3" },
{ challengeId: 122, correct: false, text: "Le professeur pose des questions.", audioSrc: "Basics/audio/french/option/fr_The_teacher_is_asking_questions.mp3" },

{ challengeId: 123, correct: true, text: "Si vous travaillez dur, vous réussirez.", audioSrc: "Basics/audio/french/option/fr_If_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 123, correct: false, text: "Si vous dormez bien, vous réussirez.", audioSrc: "Basics/audio/french/option/fr_If_you_sleep_well_you_will_succeed.mp3" },
{ challengeId: 123, correct: false, text: "Si vous partez tôt, vous réussirez.", audioSrc: "Basics/audio/french/option/fr_If_you_leave_early_you_will_succeed.mp3" },

{ challengeId: 124, correct: true, text: "Elle est allée au marché pour acheter des légumes.", audioSrc: "Basics/audio/french/option/fr_She_went_to_the_market_to_buy_vegetables.mp3" },
{ challengeId: 124, correct: false, text: "Elle est allée au marché pour acheter des fruits.", audioSrc: "Basics/audio/french/option/fr_She_went_to_the_market_to_buy_fruits.mp3" },
{ challengeId: 124, correct: false, text: "Elle est allée au marché pour acheter du pain.", audioSrc: "Basics/audio/french/option/fr_She_went_to_the_market_to_buy_bread.mp3" },

{ challengeId: 125, correct: true, text: "Bien qu'il pleuvait, ils ont joué au football.", audioSrc: "Basics/audio/french/option/fr_Although_it_was_raining_they_played_football.mp3" },
{ challengeId: 125, correct: false, text: "Parce qu'il pleuvait, ils n'ont pas joué au football.", audioSrc: "Basics/audio/french/option/fr_Because_it_was_raining_they_did_not_play_football.mp3" },
{ challengeId: 125, correct: false, text: "Il pleuvait, donc ils ont regardé un film.", audioSrc: "Basics/audio/french/option/fr_It_was_raining_so_they_watched_a_movie.mp3" },

{ challengeId: 126, correct: true, text: "Le professeur a demandé aux élèves de rendre leurs devoirs à temps.", audioSrc: "Basics/audio/french/option/fr_The_teacher_asked_the_students_to_submit_their_homework_on_time.mp3" },
{ challengeId: 126, correct: false, text: "Le professeur a demandé aux élèves de faire leurs devoirs.", audioSrc: "Basics/audio/french/option/fr_The_teacher_asked_the_students_to_do_their_homework.mp3" },
{ challengeId: 126, correct: false, text: "Le professeur a demandé aux élèves de quitter la classe.", audioSrc: "Basics/audio/french/option/fr_The_teacher_asked_the_students_to_leave_the_class.mp3" },

{ challengeId: 127, correct: true, text: "Il lit un journal en buvant du thé.", audioSrc: "Basics/audio/french/option/fr_He_is_reading_a_newspaper_while_drinking_tea.mp3" },
{ challengeId: 127, correct: false, text: "Il lit un livre en buvant du thé.", audioSrc: "Basics/audio/french/option/fr_He_is_reading_a_book_while_drinking_tea.mp3" },
{ challengeId: 127, correct: false, text: "Il regarde la télévision en buvant du thé.", audioSrc: "Basics/audio/french/option/fr_He_is_watching_TV_while_drinking_tea.mp3" },
{ challengeId: 128, correct: true, text: "Elle était fatiguée, mais elle a continué à travailler.", audioSrc: "Basics/audio/french/option/fr_She_was_tired_but_she_kept_working.mp3" },
{ challengeId: 128, correct: false, text: "Elle était fatiguée, donc elle est rentrée chez elle.", audioSrc: "Basics/audio/french/option/fr_She_was_tired_so_she_went_home.mp3" },
{ challengeId: 128, correct: false, text: "Elle était fatiguée, mais elle a dormi.", audioSrc: "Basics/audio/french/option/fr_She_was_tired_but_she_slept.mp3" },

{ challengeId: 129, correct: true, text: "Quand nous sommes arrivés, le train était déjà parti.", audioSrc: "Basics/audio/french/option/fr_When_we_arrived_the_train_had_already_left.mp3" },
{ challengeId: 129, correct: false, text: "Quand nous sommes arrivés, le train était encore là.", audioSrc: "Basics/audio/french/option/fr_When_we_arrived_the_train_was_still_there.mp3" },
{ challengeId: 129, correct: false, text: "Quand nous sommes arrivés, le train venait d'arriver.", audioSrc: "Basics/audio/french/option/fr_When_we_arrived_the_train_had_just_arrived.mp3" },

{ challengeId: 130, correct: true, text: "À moins d'étudier, vous ne réussirez pas l'examen.", audioSrc: "Basics/audio/french/option/fr_Unless_you_study_you_will_not_pass_the_exam.mp3" },
{ challengeId: 130, correct: false, text: "À moins de dormir, vous réussirez l'examen.", audioSrc: "Basics/audio/french/option/fr_Unless_you_sleep_you_will_pass_the_exam.mp3" },
{ challengeId: 130, correct: false, text: "À moins de manger, vous réussirez l'examen.", audioSrc: "Basics/audio/french/option/fr_Unless_you_eat_you_will_pass_the_exam.mp3" },

{ challengeId: 131, correct: true, text: "Le médecin lui a conseillé de prendre des médicaments régulièrement.", audioSrc: "Basics/audio/french/option/fr_The_doctor_advised_him_to_take_medicine_regularly.mp3" },
{ challengeId: 131, correct: false, text: "Le médecin lui a conseillé de faire du sport.", audioSrc: "Basics/audio/french/option/fr_The_doctor_advised_him_to_exercise.mp3" },
{ challengeId: 131, correct: false, text: "Le médecin lui a conseillé de boire de l'eau.", audioSrc: "Basics/audio/french/option/fr_The_doctor_advised_him_to_drink_water.mp3" },

{ challengeId: 132, correct: true, text: "Le vieil homme, qui vivait seul, nous a raconté de nombreuses histoires de son passé.", audioSrc: "Basics/audio/french/option/fr_The_old_man_who_lived_alone_told_us_many_stories_from_his_past.mp3" },
{ challengeId: 132, correct: false, text: "Le vieil homme, qui vivait seul, n'a rien dit.", audioSrc: "Basics/audio/french/option/fr_The_old_man_who_lived_alone_said_nothing.mp3" },
{ challengeId: 132, correct: false, text: "Le vieil homme, qui vivait seul, est parti.", audioSrc: "Basics/audio/french/option/fr_The_old_man_who_lived_alone_left.mp3" },

]);