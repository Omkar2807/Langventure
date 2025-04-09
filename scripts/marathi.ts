await db.insert(schema.challenges).values([
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
{ id: 208, lessonId: 67, type: "SELECT", order: 1, question: "How do you say 'I' in Marathi?" },
{ id: 209, lessonId: 67, type: "SELECT", order: 2, question: "How do you say 'you' in Marathi?" },
{ id: 210, lessonId: 67, type: "SELECT", order: 3, question: "How do you say 'he' in Marathi?" },
        
{ id: 211, lessonId: 68, type: "SELECT", order: 1, question: "How do you say 'she' in Marathi?" },
{ id: 212, lessonId: 68, type: "SELECT", order: 2, question: "How do you say 'they' in Marathi?" },
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
        
{ id: 223, lessonId: 72, type: "ASSIST", order: 1, question: "Complete the sentence: 'I am reading the book.' → 'मी __ वाचत आहे.'" },
{ id: 224, lessonId: 72, type: "ASSIST", order: 2, question: "Complete the sentence: 'I am driving the car.' → 'मी __ चालवत आहे.'" },
{ id: 225, lessonId: 72, type: "ASSIST", order: 3, question: "Complete the sentence: 'She is writing a letter.' → 'ती __ लिहीत आहे.'" },
        
// Adjectives
{ id: 226, lessonId: 73, type: "SELECT", order: 1, question: "How do you say 'big' in Marathi?" },
{ id: 227, lessonId: 73, type: "SELECT", order: 2, question: "How do you say 'small' in Marathi?" },
{ id: 228, lessonId: 73, type: "SELECT", order: 3, question: "How do you say 'fast' in Marathi?" },
        
{ id: 229, lessonId: 74, type: "SELECT", order: 1, question: "How do you say 'slow' in Marathi?" },
{ id: 230, lessonId: 74, type: "SELECT", order: 2, question: "How do you say 'beautiful' in Marathi?" },
{ id: 231, lessonId: 74, type: "SELECT", order: 3, question: "How do you say 'strong' in Marathi?" },
        
{ id: 232, lessonId: 75, type: "ASSIST", order: 1, question: "Translate: 'The car is big.' → 'गाडी __ आहे.'" },
{ id: 233, lessonId: 75, type: "ASSIST", order: 2, question: "Translate: 'The flower is beautiful.' → 'फूल __ आहे.'" },
{ id: 234, lessonId: 75, type: "ASSIST", order: 3, question: "Translate: 'The boy is strong.' → 'मुलगा __ आहे.'" },
    
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
{ id: 264, lessonId: 84, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.'" }
    
    ]);    

await db.insert(schema.challengeOptions).values([        
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
    
{ challengeId: 208, correct: true, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 208, correct: false, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },
{ challengeId: 208, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },

{ challengeId: 209, correct: true, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },
{ challengeId: 209, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 209, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },

{ challengeId: 210, correct: true, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 210, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },
{ challengeId: 210, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },

{ challengeId: 211, correct: true, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },
{ challengeId: 211, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 211, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },

{ challengeId: 212, correct: true, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },
{ challengeId: 212, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 212, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },

{ challengeId: 213, correct: true, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 213, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 213, correct: false, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },

{ challengeId: 214, correct: true, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_she.mp3" },
{ challengeId: 214, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },
{ challengeId: 214, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },

{ challengeId: 215, correct: true, text: "आम्ही", audioSrc: "Basics/audio/marathi/option/mr_we.mp3" },
{ challengeId: 215, correct: false, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },
{ challengeId: 215, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_he.mp3" },

{ challengeId: 216, correct: true, text: "ते", audioSrc: "Basics/audio/marathi/option/mr_they.mp3" },
{ challengeId: 216, correct: false, text: "मी", audioSrc: "Basics/audio/marathi/option/mr_I.mp3" },
{ challengeId: 216, correct: false, text: "तू", audioSrc: "Basics/audio/marathi/option/mr_you.mp3" },

{ challengeId: 217, imageSrc: "/eat.svg", correct: true, text: "खाणे", audioSrc: "Basics/audio/marathi/option/mr_eat.mp3" },
{ challengeId: 217, imageSrc: "/run.svg", correct: false, text: "धावणे", audioSrc: "Basics/audio/marathi/option/mr_run.mp3" },
{ challengeId: 217, imageSrc: "/write.svg", correct: false, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },

{ challengeId: 218, imageSrc: "/run.svg", correct: true, text: "धावणे", audioSrc: "Basics/audio/marathi/option/mr_run.mp3" },
{ challengeId: 218, imageSrc: "/walk.svg", correct: false, text: "चालणे", audioSrc: "Basics/audio/marathi/option/mr_walk.mp3" },
{ challengeId: 218, imageSrc: "/eat.svg", correct: false, text: "खाणे", audioSrc: "Basics/audio/marathi/option/mr_eat.mp3" },

{ challengeId: 219, imageSrc: "/write.svg", correct: true, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },
{ challengeId: 219, imageSrc: "/read.svg", correct: false, text: "वाचणे", audioSrc: "Basics/audio/marathi/option/mr_read.mp3" },
{ challengeId: 219, imageSrc: "/speak.svg", correct: false, text: "बोलणे", audioSrc: "Basics/audio/marathi/option/mr_speak.mp3" },

{ challengeId: 220, imageSrc: "/read.svg", correct: true, text: "वाचणे", audioSrc: "Basics/audio/marathi/option/mr_read.mp3" },
{ challengeId: 220, imageSrc: "/write.svg", correct: false, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },
{ challengeId: 220, imageSrc: "/speak.svg", correct: false, text: "बोलणे", audioSrc: "Basics/audio/marathi/option/mr_speak.mp3" },

{ challengeId: 221, imageSrc: "/walk.svg", correct: true, text: "चालणे", audioSrc: "Basics/audio/marathi/option/mr_walk.mp3" },
{ challengeId: 221, imageSrc: "/run.svg", correct: false, text: "धावणे", audioSrc: "Basics/audio/marathi/option/mr_run.mp3" },
{ challengeId: 221, imageSrc: "/eat.svg", correct: false, text: "खाणे", audioSrc: "Basics/audio/marathi/option/mr_eat.mp3" },

{ challengeId: 222, imageSrc: "/speak.svg", correct: true, text: "बोलणे", audioSrc: "Basics/audio/marathi/option/mr_speak.mp3" },
{ challengeId: 222, imageSrc: "/read.svg", correct: false, text: "वाचणे", audioSrc: "Basics/audio/marathi/option/mr_read.mp3" },
{ challengeId: 222, imageSrc: "/write.svg", correct: false, text: "लिहिणे", audioSrc: "Basics/audio/marathi/option/mr_write.mp3" },

{ challengeId: 223, correct: true, text: "वाचत", audioSrc: "Basics/audio/marathi/option/mr_reading.mp3" },
{ challengeId: 223, correct: false, text: "लिहित", audioSrc: "Basics/audio/marathi/option/mr_writing.mp3" },
{ challengeId: 223, correct: false, text: "बोलत", audioSrc: "Basics/audio/marathi/option/mr_speaking.mp3" },

{ challengeId: 224, correct: true, text: "चालत", audioSrc: "Basics/audio/marathi/option/mr_walking.mp3" },
{ challengeId: 224, correct: false, text: "धावत", audioSrc: "Basics/audio/marathi/option/mr_running.mp3" },
{ challengeId: 224, correct: false, text: "चालत", audioSrc: "Basics/audio/marathi/option/mr_walking.mp3" },

{ challengeId: 225, correct: true, text: "लिहित", audioSrc: "Basics/audio/marathi/option/mr_writing.mp3" },
{ challengeId: 225, correct: false, text: "वाचत", audioSrc: "Basics/audio/marathi/option/mr_reading.mp3" },
{ challengeId: 225, correct: false, text: "बोलत", audioSrc: "Basics/audio/marathi/option/mr_speaking.mp3" },

{ challengeId: 226, correct: true, text: "मोठे", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },
{ challengeId: 226, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },
{ challengeId: 226, correct: false, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },

{ challengeId: 227, correct: true, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },
{ challengeId: 227, correct: false, text: "मोठे", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },
{ challengeId: 227, correct: false, text: "मंद", audioSrc: "Basics/audio/marathi/option/mr_slow.mp3" },

{ challengeId: 228, correct: true, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },
{ challengeId: 228, correct: false, text: "मंद", audioSrc: "Basics/audio/marathi/option/mr_slow.mp3" },
{ challengeId: 228, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

{ challengeId: 229, correct: true, text: "मंद", audioSrc: "Basics/audio/marathi/option/mr_slow.mp3" },
{ challengeId: 229, correct: false, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },
{ challengeId: 229, correct: false, text: "मोठे", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },

{ challengeId: 230, correct: true, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 230, correct: false, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 230, correct: false, text: "वेगवान", audioSrc: "Basics/audio/marathi/option/mr_fast.mp3" },

{ challengeId: 231, correct: true, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 231, correct: false, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 231, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

{ challengeId: 232, correct: true, text: "मोठी", audioSrc: "Basics/audio/marathi/option/mr_big.mp3" },
{ challengeId: 232, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },
{ challengeId: 232, correct: false, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },

{ challengeId: 233, correct: true, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 233, correct: false, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 233, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

{ challengeId: 234, correct: true, text: "बलवान", audioSrc: "Basics/audio/marathi/option/mr_strong.mp3" },
{ challengeId: 234, correct: false, text: "सुंदर", audioSrc: "Basics/audio/marathi/option/mr_beautiful.mp3" },
{ challengeId: 234, correct: false, text: "लहान", audioSrc: "Basics/audio/marathi/option/mr_small.mp3" },

{ challengeId: 235, correct: true, text: "ही मांजर आहे.", audioSrc: "Basics/audio/marathi/option/mr_this_is_a_cat.mp3" },
{ challengeId: 235, correct: false, text: "तो कुत्रा आहे.", audioSrc: "Basics/audio/marathi/option/mr_this_is_a_dog.mp3" },
{ challengeId: 235, correct: false, text: "ते पुस्तक आहे.", audioSrc: "Basics/audio/marathi/option/mr_this_is_a_book.mp3" },

{ challengeId: 236, correct: true, text: "सूर्य तेजस्वी आहे.", audioSrc: "Basics/audio/marathi/option/mr_sun_is_bright.mp3" },
{ challengeId: 236, correct: false, text: "आकाश निळे आहे.", audioSrc: "Basics/audio/marathi/option/mr_sky_is_blue.mp3" },
{ challengeId: 236, correct: false, text: "चंद्र मोठा आहे.", audioSrc: "Basics/audio/marathi/option/mr_moon_is_big.mp3" },

{ challengeId: 237, correct: true, text: "माझ्याकडे एक पुस्तक आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_have_a_book.mp3" },
{ challengeId: 237, correct: false, text: "माझ्याकडे एक सायकल आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_have_a_bicycle.mp3" },
{ challengeId: 237, correct: false, text: "माझ्याकडे एक घड्याळ आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_have_a_watch.mp3" },

{ challengeId: 238, correct: true, text: "ती माझी बहीण आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_my_sister.mp3" },
{ challengeId: 238, correct: false, text: "तो माझा भाऊ आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_my_brother.mp3" },
{ challengeId: 238, correct: false, text: "ती माझी आई आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_my_mother.mp3" },

{ challengeId: 239, correct: true, text: "आम्ही मित्र आहोत.", audioSrc: "Basics/audio/marathi/option/mr_we_are_friends.mp3" },
{ challengeId: 239, correct: false, text: "आम्ही शत्रू आहोत.", audioSrc: "Basics/audio/marathi/option/mr_we_are_enemies.mp3" },
{ challengeId: 239, correct: false, text: "आम्ही विद्यार्थी आहोत.", audioSrc: "Basics/audio/marathi/option/mr_we_are_students.mp3" },

{ challengeId: 240, correct: true, text: "कुत्रा धावत आहे.", audioSrc: "Basics/audio/marathi/option/mr_dog_is_running.mp3" },
{ challengeId: 240, correct: false, text: "कुत्रा झोपला आहे.", audioSrc: "Basics/audio/marathi/option/mr_dog_is_sleeping.mp3" },
{ challengeId: 240, correct: false, text: "कुत्रा भुंकत आहे.", audioSrc: "Basics/audio/marathi/option/mr_dog_is_barking.mp3" },

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

{ challengeId: 245, correct: true, text: "मी मराठी पुस्तक वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_am_reading_a_marathi_book.mp3" },
{ challengeId: 245, correct: false, text: "मी हिंदी पुस्तक वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_am_reading_a_hindi_book.mp3" },
{ challengeId: 245, correct: false, text: "मी इंग्रजी पुस्तक वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_i_am_reading_an_english_book.mp3" },

{ challengeId: 246, correct: true, text: "ती अन्न शिजवत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_cooking_food.mp3" },
{ challengeId: 246, correct: false, text: "ती खेळ खेळत आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_playing_game.mp3" },
{ challengeId: 246, correct: false, text: "ती गाणे गात आहे.", audioSrc: "Basics/audio/marathi/option/mr_she_is_singing.mp3" },

{ challengeId: 247, correct: true, text: "मुलं बाहेर खेळत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_children_are_playing_outside.mp3" },
{ challengeId: 247, correct: false, text: "मुलं अभ्यास करत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_children_are_studying.mp3" },
{ challengeId: 247, correct: false, text: "मुलं झोपले आहेत.", audioSrc: "Basics/audio/marathi/option/mr_children_are_sleeping.mp3" },

{ challengeId: 248, correct: true, text: "आम्ही दररोज शाळेत जातो.", audioSrc: "Basics/audio/marathi/option/mr_we_go_to_school_every_day.mp3" },
{ challengeId: 248, correct: false, text: "आम्ही कधीच शाळेत जात नाही.", audioSrc: "Basics/audio/marathi/option/mr_we_never_go_to_school.mp3" },
{ challengeId: 248, correct: false, text: "आम्ही सुट्टीच्या दिवशी शाळेत जातो.", audioSrc: "Basics/audio/marathi/option/mr_we_go_to_school_on_holidays.mp3" },

{ challengeId: 249, correct: true, text: "त्याला चहा प्यायला आवडतो.", audioSrc: "Basics/audio/marathi/option/mr_he_likes_to_drink_tea.mp3" },
{ challengeId: 249, correct: false, text: "त्याला दूध प्यायला आवडतो.", audioSrc: "Basics/audio/marathi/option/mr_he_likes_to_drink_milk.mp3" },
{ challengeId: 249, correct: false, text: "त्याला कॉफी प्यायला आवडते.", audioSrc: "Basics/audio/marathi/option/mr_he_likes_to_drink_coffee.mp3" },

{ challengeId: 250, correct: true, text: "पक्षी आकाशात उडत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 250, correct: false, text: "पक्षी झाडावर बसले आहेत.", audioSrc: "Basics/audio/marathi/option/mr_birds_are_sitting_on_tree.mp3" },
{ challengeId: 250, correct: false, text: "पक्षी जमिनीवर चालत आहेत.", audioSrc: "Basics/audio/marathi/option/mr_birds_are_walking_on_ground.mp3" },

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

{ challengeId: 255, correct: true, text: "जर तुम्ही मेहनत केली, तर तुम्हाला यश मिळेल.", audioSrc: "Basics/audio/marathi/option/mr_if_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 255, correct: false, text: "जर तुम्ही अभ्यास केला, तर तुम्हाला आनंद मिळेल.", audioSrc: "Basics/audio/marathi/option/mr_if_you_study_you_will_be_happy.mp3" },
{ challengeId: 255, correct: false, text: "जर तुम्ही खेळलात, तर तुम्हाला पुरस्कार मिळेल.", audioSrc: "Basics/audio/marathi/option/mr_if_you_play_you_will_get_a_prize.mp3" },

{ challengeId: 256, correct: true, text: "ती भाजी आणण्यासाठी बाजारात गेली.", audioSrc: "Basics/audio/marathi/option/mr_she_went_to_market_to_buy_vegetables.mp3" },
{ challengeId: 256, correct: false, text: "ती पुस्तक आणण्यासाठी बाजारात गेली.", audioSrc: "Basics/audio/marathi/option/mr_she_went_to_market_to_buy_books.mp3" },
{ challengeId: 256, correct: false, text: "ती मित्रांना भेटण्यासाठी बाजारात गेली.", audioSrc: "Basics/audio/marathi/option/mr_she_went_to_market_to_meet_friends.mp3" },

{ challengeId: 257, correct: true, text: "पाऊस पडत असतानाही, त्यांनी फुटबॉल खेळला.", audioSrc: "Basics/audio/marathi/option/mr_although_it_was_raining_they_played_football.mp3" },
{ challengeId: 257, correct: false, text: "पाऊस पडत असतानाही, त्यांनी अभ्यास केला.", audioSrc: "Basics/audio/marathi/option/mr_although_it_was_raining_they_studied.mp3" },
{ challengeId: 257, correct: false, text: "पाऊस पडत असतानाही, त्यांनी झोप घेतली.", audioSrc: "Basics/audio/marathi/option/mr_although_it_was_raining_they_slept.mp3" },

{ challengeId: 258, correct: true, text: "शिक्षकांनी विद्यार्थ्यांना वेळेवर असाइनमेंट जमा करण्यास सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_teacher_asked_students_to_submit_assignments_on_time.mp3" },
{ challengeId: 258, correct: false, text: "शिक्षकांनी विद्यार्थ्यांना घरी लवकर जाण्यास सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_teacher_asked_students_to_go_home_early.mp3" },
{ challengeId: 258, correct: false, text: "शिक्षकांनी विद्यार्थ्यांना शाळा सुटल्यावर थांबण्यास सांगितले.", audioSrc: "Basics/audio/marathi/option/mr_teacher_asked_students_to_stay_after_school.mp3" },

{ challengeId: 259, correct: true, text: "तो चहा पिता-पिता वर्तमानपत्र वाचत आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_reading_newspaper_while_drinking_tea.mp3" },
{ challengeId: 259, correct: false, text: "तो दूध पिता-पिता अभ्यास करत आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_studying_while_drinking_milk.mp3" },
{ challengeId: 259, correct: false, text: "तो नाश्ता करता-करता टीव्ही पाहत आहे.", audioSrc: "Basics/audio/marathi/option/mr_he_is_watching_tv_while_eating.mp3" },

{ challengeId: 260, correct: true, text: "ती थकली होती, तरीही तिने काम सुरू ठेवले.", audioSrc: "Basics/audio/marathi/option/mr_she_was_tired_yet_she_continued_working.mp3" },
{ challengeId: 260, correct: false, text: "ती थकली होती, त्यामुळे ती झोपली.", audioSrc: "Basics/audio/marathi/option/mr_she_was_tired_so_she_slept.mp3" },
{ challengeId: 260, correct: false, text: "ती ताजीतवानी होती, तरीही तिने विश्रांती घेतली.", audioSrc: "Basics/audio/marathi/option/mr_she_was_fresh_yet_she_took_rest.mp3" },

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