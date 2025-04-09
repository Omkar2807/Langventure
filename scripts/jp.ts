await db.insert(schema.challenges).values([// Japanese
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
{ id: 147, lessonId: 47, type: "ASSIST", order: 3, question: "Translate: 'He is running.' → '__ は走っています。'" },
    
{ id: 148, lessonId: 48, type: "ASSIST", order: 1, question: "Translate: 'She is eating.' → '彼女は食べています。'" },
{ id: 149, lessonId: 48, type: "ASSIST", order: 2, question: "Translate: 'We are playing.' → '私たちは遊んでいます。'" },
{ id: 150, lessonId: 48, type: "ASSIST", order: 3, question: "Translate: 'They are studying.' → '彼らは勉強しています。'" },
    
// Verbs
{ id: 151, lessonId: 49, type: "SELECT", order: 1, question: "How do you say 'to eat' in Japanese?" },
{ id: 152, lessonId: 49, type: "SELECT", order: 2, question: "How do you say 'to run' in Japanese?" },
{ id: 153, lessonId: 49, type: "SELECT", order: 3, question: "How do you say 'to write' in Japanese?" },
    
{ id: 154, lessonId: 50, type: "SELECT", order: 1, question: "How do you say 'to read' in Japanese?" },
{ id: 155, lessonId: 50, type: "SELECT", order: 2, question: "How do you say 'to walk' in Japanese?" },
{ id: 156, lessonId: 50, type: "SELECT", order: 3, question: "How do you say 'to speak' in Japanese?" },
    
{ id: 157, lessonId: 51, type: "ASSIST", order: 1, question: "Complete the sentence: 'I am reading the book.' → '私は本を読んでいます。'" },
{ id: 158, lessonId: 51, type: "ASSIST", order: 2, question: "Complete the sentence: 'I am driving the car.' → '私は車を運転しています。'" },
{ id: 159, lessonId: 51, type: "ASSIST", order: 3, question: "Complete the sentence: 'She is writing a letter.' → '彼女は手紙を書いています。'" },
    
// Adjectives
{ id: 160, lessonId: 52, type: "ASSIST", order: 1, question: "How do you say 'big' in Japanese?" },
{ id: 161, lessonId: 52, type: "ASSIST", order: 2, question: "How do you say 'small' in Japanese?" },
{ id: 162, lessonId: 52, type: "ASSIST", order: 3, question: "How do you say 'fast' in Japanese?" },
    
{ id: 163, lessonId: 53, type: "ASSIST", order: 1, question: "How do you say 'slow' in Japanese?" },
{ id: 164, lessonId: 53, type: "ASSIST", order: 2, question: "How do you say 'beautiful' in Japanese?" },
{ id: 165, lessonId: 53, type: "ASSIST", order: 3, question: "How do you say 'strong' in Japanese?" },
    
{ id: 166, lessonId: 54, type: "ASSIST", order: 1, question: "Translate: 'The car is big.' → '車は大きいです。'" },
{ id: 167, lessonId: 54, type: "ASSIST", order: 2, question: "Translate: 'The flower is beautiful.' → '花は美しいです。'" },
{ id: 168, lessonId: 54, type: "ASSIST", order: 3, question: "Translate: 'The boy is strong.' → '男の子は強いです。'" },
    
// Sentences
// Easy Sentences (continued)
{ id: 169, lessonId: 55, type: "ASSIST", order: 1, question: "Translate: 'This is a cat.' → 'これは猫です。'" },
{ id: 170, lessonId: 55, type: "ASSIST", order: 2, question: "Translate: 'The sun is bright.' → '太陽は明るいです。'" },
{ id: 171, lessonId: 55, type: "ASSIST", order: 3, question: "Translate: 'I have a book.' → '私は本を持っています。'" },
        
{ id: 172, lessonId: 56, type: "ASSIST", order: 1, question: "Translate: 'She is my sister.' → '彼女は私の妹です。'" },
{ id: 173, lessonId: 56, type: "ASSIST", order: 2, question: "Translate: 'We are friends.' → '私たちは友達です。'" },
{ id: 174, lessonId: 56, type: "ASSIST", order: 3, question: "Translate: 'The dog is running.' → '犬は走っています。'" },
        
{ id: 175, lessonId: 57, type: "ASSIST", order: 1, question: "Translate: 'He is a teacher.' → '彼は先生です。'" },
{ id: 176, lessonId: 57, type: "ASSIST", order: 2, question: "Translate: 'The apple is red.' → 'りんごは赤いです。'" },
{ id: 177, lessonId: 57, type: "ASSIST", order: 3, question: "Translate: 'I like mangoes.' → '私はマンゴーが好きです。'" },
{ id: 178, lessonId: 57, type: "ASSIST", order: 4, question: "Translate: 'She is happy.' → '彼女は幸せです。'" },
        
// Intermediate Sentences
{ id: 179, lessonId: 58, type: "ASSIST", order: 1, question: "Translate: 'I am reading a Japanese book.' → '私は日本語の本を読んでいます。'" },
{ id: 180, lessonId: 58, type: "ASSIST", order: 2, question: "Translate: 'She is cooking food.' → '彼女は料理を作っています。'" },
{ id: 181, lessonId: 58, type: "ASSIST", order: 3, question: "Translate: 'The children are playing outside.' → '子供たちは外で遊んでいます。'" },
        
{ id: 182, lessonId: 59, type: "ASSIST", order: 1, question: "Translate: 'We go to school every day.' → '私たちは毎日学校に行きます。'" },
{ id: 183, lessonId: 59, type: "ASSIST", order: 2, question: "Translate: 'He likes to drink tea.' → '彼はお茶を飲むのが好きです。'" },
{ id: 184, lessonId: 59, type: "ASSIST", order: 3, question: "Translate: 'The birds are flying in the sky.' → '鳥たちは空を飛んでいます。'" },
        
{ id: 185, lessonId: 60, type: "ASSIST", order: 1, question: "Translate: 'She is wearing a blue dress.' → '彼女は青いドレスを着ています。'" },
{ id: 186, lessonId: 60, type: "ASSIST", order: 2, question: "Translate: 'The bus is late today.' → 'バスは今日遅れています。'" },
{ id: 187, lessonId: 60, type: "ASSIST", order: 3, question: "Translate: 'They are watching a movie.' → '彼らは映画を見ています。'" },
{ id: 188, lessonId: 60, type: "ASSIST", order: 4, question: "Translate: 'The teacher is explaining the lesson.' → '先生は授業を説明しています。'" },
        
// Difficult Sentences
{ id: 189, lessonId: 61, type: "ASSIST", order: 1, question: "Translate: 'If you work hard, you will succeed.' → '一生懸命働けば、成功します。'" },
{ id: 190, lessonId: 61, type: "ASSIST", order: 2, question: "Translate: 'She went to the market to buy vegetables.' → '彼女は野菜を買いに市場に行きました。'" },
{ id: 191, lessonId: 61, type: "ASSIST", order: 3, question: "Translate: 'Although it was raining, they played football.' → '雨が降っていたけど、彼らはサッカーをしました。'" },
        
{ id: 192, lessonId: 62, type: "ASSIST", order: 1, question: "Translate: 'The teacher asked the students to submit their assignments on time.' → '先生は生徒に課題を期限内に提出するように頼みました。'" },
{ id: 193, lessonId: 62, type: "ASSIST", order: 2, question: "Translate: 'He is reading a newspaper while drinking tea.' → '彼はお茶を飲みながら新聞を読んでいます。'" },
{ id: 194, lessonId: 62, type: "ASSIST", order: 3, question: "Translate: 'She was tired, yet she continued working.' → '彼女は疲れていましたが、働き続けました。'" },
        
{ id: 195, lessonId: 63, type: "ASSIST", order: 1, question: "Translate: 'By the time we reached, the train had already left.' → '私たちが着くまでに電車はすでに出発していました。'" },
{ id: 196, lessonId: 63, type: "ASSIST", order: 2, question: "Translate: 'Unless you study, you will not pass the exam.' → '勉強しなければ、試験に合格しません。'" },
{ id: 197, lessonId: 63, type: "ASSIST", order: 3, question: "Translate: 'The doctor advised him to take medicine regularly.' → '医者は彼に定期的に薬を飲むように勧めました。'" },
{ id: 198, lessonId: 63, type: "ASSIST", order: 4, question: "Translate: 'The old man, who lived alone, told us many stories from his past.' → '一人暮らしの老人は私たちに過去の多くの話をしてくれました。'" }
]); 





await db.insert(schema.challengeOptions).values([ 

{ challengeId: 133, imageSrc: "/man.svg", correct: true, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
{ challengeId: 133, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },
{ challengeId: 133, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },

{ challengeId: 134, imageSrc: "/woman.svg", correct: true, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },
{ challengeId: 134, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
{ challengeId: 134, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },

{ challengeId: 135, imageSrc: "/robot.svg", correct: true, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },
{ challengeId: 135, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
{ challengeId: 135, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },

{ challengeId: 136, imageSrc: "/car.svg", correct: true, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
{ challengeId: 136, imageSrc: "/house.svg", correct: false, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },
{ challengeId: 136, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },

{ challengeId: 137, imageSrc: "/house.svg", correct: true, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },
{ challengeId: 137, imageSrc: "/car.svg", correct: false, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
{ challengeId: 137, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },

{ challengeId: 138, imageSrc: "/book.svg", correct: true, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },
{ challengeId: 138, imageSrc: "/car.svg", correct: false, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
{ challengeId: 138, imageSrc: "/house.svg", correct: false, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },

{ challengeId: 139, imageSrc: "/tree.svg", correct: true, text: "木", audioSrc: "Basics/audio/japanese/option/jp_tree.mp3" },
{ challengeId: 139, imageSrc: "/dog.svg", correct: false, text: "犬", audioSrc: "Basics/audio/japanese/option/jp_dog.mp3" },
{ challengeId: 139, imageSrc: "/cat.svg", correct: false, text: "猫", audioSrc: "Basics/audio/japanese/option/jp_cat.mp3" },

{ challengeId: 140, imageSrc: "/dog.svg", correct: true, text: "犬", audioSrc: "Basics/audio/japanese/option/jp_dog.mp3" },
{ challengeId: 140, imageSrc: "/tree.svg", correct: false, text: "木", audioSrc: "Basics/audio/japanese/option/jp_tree.mp3" },
{ challengeId: 140, imageSrc: "/cat.svg", correct: false, text: "猫", audioSrc: "Basics/audio/japanese/option/jp_cat.mp3" },

{ challengeId: 141, imageSrc: "/cat.svg", correct: true, text: "猫", audioSrc: "Basics/audio/japanese/option/jp_cat.mp3" },
{ challengeId: 141, imageSrc: "/dog.svg", correct: false, text: "犬", audioSrc: "Basics/audio/japanese/option/jp_dog.mp3" },
{ challengeId: 141, imageSrc: "/tree.svg", correct: false, text: "木", audioSrc: "Basics/audio/japanese/option/jp_tree.mp3" },

{ challengeId: 142, correct: true, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 142, correct: false, text: "あなた", audioSrc: "Basics/audio/japanese/option/jp_you.mp3" },
{ challengeId: 142, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 143, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 143, correct: true, text: "あなた", audioSrc: "Basics/audio/japanese/option/jp_you.mp3" },
{ challengeId: 143, correct: false, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },

{ challengeId: 144, correct: false, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 144, correct: false, text: "あなた", audioSrc: "Basics/audio/japanese/option/jp_you.mp3" },
{ challengeId: 144, correct: true, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 145, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 145, correct: true, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },
{ challengeId: 145, correct: false, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },

{ challengeId: 146, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 146, correct: false, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },
{ challengeId: 146, correct: true, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },

{ challengeId: 147, correct: true, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },
{ challengeId: 147, correct: false, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 147, correct: false, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },

{ challengeId: 148, correct: true, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },
{ challengeId: 148, correct: false, text: "私", audioSrc: "Basics/audio/japanese/option/jp_I.mp3" },
{ challengeId: 148, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 149, correct: true, text: "私たち", audioSrc: "Basics/audio/japanese/option/jp_we.mp3" },
{ challengeId: 149, correct: false, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },
{ challengeId: 149, correct: false, text: "彼", audioSrc: "Basics/audio/japanese/option/jp_he.mp3" },

{ challengeId: 150, correct: true, text: "彼ら", audioSrc: "Basics/audio/japanese/option/jp_they.mp3" },
{ challengeId: 150, correct: false, text: "私たち", audioSrc: "Basics/audio/japanese/option/jp_we.mp3" },
{ challengeId: 150, correct: false, text: "彼女", audioSrc: "Basics/audio/japanese/option/jp_she.mp3" },

{ challengeId: 151, imageSrc: "/eat.svg", correct: true, text: "食べる", audioSrc: "Basics/audio/japanese/option/jp_eat.mp3" },
{ challengeId: 151, imageSrc: "/run.svg", correct: false, text: "走る", audioSrc: "Basics/audio/japanese/option/jp_run.mp3" },
{ challengeId: 151, imageSrc: "/write.svg", correct: false, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },

{ challengeId: 152, imageSrc: "/run.svg", correct: true, text: "走る", audioSrc: "Basics/audio/japanese/option/jp_run.mp3" },
{ challengeId: 152, imageSrc: "/eat.svg", correct: false, text: "食べる", audioSrc: "Basics/audio/japanese/option/jp_eat.mp3" },
{ challengeId: 152, imageSrc: "/read.svg", correct: false, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },

{ challengeId: 153, imageSrc: "/write.svg", correct: true, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },
{ challengeId: 153, imageSrc: "/run.svg", correct: false, text: "走る", audioSrc: "Basics/audio/japanese/option/jp_run.mp3" },
{ challengeId: 153, imageSrc: "/speak.svg", correct: false, text: "話す", audioSrc: "Basics/audio/japanese/option/jp_speak.mp3" },

{ challengeId: 154, imageSrc: "/read.svg", correct: true, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },
{ challengeId: 154, imageSrc: "/walk.svg", correct: false, text: "歩く", audioSrc: "Basics/audio/japanese/option/jp_walk.mp3" },
{ challengeId: 154, imageSrc: "/write.svg", correct: false, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },

{ challengeId: 155, imageSrc: "/walk.svg", correct: true, text: "歩く", audioSrc: "Basics/audio/japanese/option/jp_walk.mp3" },
{ challengeId: 155, imageSrc: "/read.svg", correct: false, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },
{ challengeId: 155, imageSrc: "/drive.svg", correct: false, text: "運転する", audioSrc: "Basics/audio/japanese/option/jp_drive.mp3" },

{ challengeId: 156, imageSrc: "/speak.svg", correct: true, text: "話す", audioSrc: "Basics/audio/japanese/option/jp_speak.mp3" },
{ challengeId: 156, imageSrc: "/write.svg", correct: false, text: "書く", audioSrc: "Basics/audio/japanese/option/jp_write.mp3" },
{ challengeId: 156, imageSrc: "/read.svg", correct: false, text: "読む", audioSrc: "Basics/audio/japanese/option/jp_read.mp3" },

{ challengeId: 157, correct: true, text: "読んでいます", audioSrc: "Basics/audio/japanese/option/jp_reading.mp3" },
{ challengeId: 157, correct: false, text: "書いています", audioSrc: "Basics/audio/japanese/option/jp_writing.mp3" },
{ challengeId: 157, correct: false, text: "食べています", audioSrc: "Basics/audio/japanese/option/jp_eating.mp3" },

{ challengeId: 158, correct: true, text: "運転しています", audioSrc: "Basics/audio/japanese/option/jp_driving.mp3" },
{ challengeId: 158, correct: false, text: "歩いています", audioSrc: "Basics/audio/japanese/option/jp_walking.mp3" },
{ challengeId: 158, correct: false, text: "話しています", audioSrc: "Basics/audio/japanese/option/jp_speaking.mp3" },

{ challengeId: 159, correct: true, text: "書いています", audioSrc: "Basics/audio/japanese/option/jp_writing.mp3" },
{ challengeId: 159, correct: false, text: "読んでいます", audioSrc: "Basics/audio/japanese/option/jp_reading.mp3" },
{ challengeId: 159, correct: false, text: "食べています", audioSrc: "Basics/audio/japanese/option/jp_eating.mp3" },

{ challengeId: 160,  correct: true, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },
{ challengeId: 160,  correct: false, text: "小さい", audioSrc: "Basics/audio/japanese/option/jp_small.mp3" },
{ challengeId: 160,  correct: false, text: "速い", audioSrc: "Basics/audio/japanese/option/jp_fast.mp3" },

{ challengeId: 161, correct: true, text: "小さい", audioSrc: "Basics/audio/japanese/option/jp_small.mp3" },
{ challengeId: 161, correct: false, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },
{ challengeId: 161, correct: false, text: "美しい", audioSrc: "Basics/audio/japanese/option/jp_beautiful.mp3" },

{ challengeId: 162, correct: true, text: "速い", audioSrc: "Basics/audio/japanese/option/jp_fast.mp3" },
{ challengeId: 162, correct: false, text: "遅い", audioSrc: "Basics/audio/japanese/option/jp_slow.mp3" },
{ challengeId: 162, correct: false, text: "強い", audioSrc: "Basics/audio/japanese/option/jp_strong.mp3" },

{ challengeId: 163, correct: true, text: "遅い", audioSrc: "Basics/audio/japanese/option/jp_slow.mp3" },
{ challengeId: 163, correct: false, text: "速い", audioSrc: "Basics/audio/japanese/option/jp_fast.mp3" },
{ challengeId: 163, correct: false, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },

{ challengeId: 164, correct: true, text: "美しい", audioSrc: "Basics/audio/japanese/option/jp_beautiful.mp3" },
{ challengeId: 164, correct: false, text: "小さい", audioSrc: "Basics/audio/japanese/option/jp_small.mp3" },
{ challengeId: 164, correct: false, text: "強い", audioSrc: "Basics/audio/japanese/option/jp_strong.mp3" },

{ challengeId: 165, correct: true, text: "強い", audioSrc: "Basics/audio/japanese/option/jp_strong.mp3" },
{ challengeId: 165, correct: false, text: "遅い", audioSrc: "Basics/audio/japanese/option/jp_slow.mp3" },
{ challengeId: 165, correct: false, text: "大きい", audioSrc: "Basics/audio/japanese/option/jp_big.mp3" },

{ challengeId: 166, correct: true, text: "大きいです", audioSrc: "Basics/audio/japanese/option/jp_big_sentence.mp3" },
{ challengeId: 166, correct: false, text: "小さいです", audioSrc: "Basics/audio/japanese/option/jp_small_sentence.mp3" },
{ challengeId: 166, correct: false, text: "速いです", audioSrc: "Basics/audio/japanese/option/jp_fast_sentence.mp3" },

{ challengeId: 167, correct: true, text: "美しいです", audioSrc: "Basics/audio/japanese/option/jp_beautiful_sentence.mp3" },
{ challengeId: 167, correct: false, text: "遅いです", audioSrc: "Basics/audio/japanese/option/jp_slow_sentence.mp3" },
{ challengeId: 167, correct: false, text: "強いです", audioSrc: "Basics/audio/japanese/option/jp_strong_sentence.mp3" },

{ challengeId: 168, correct: true, text: "強いです", audioSrc: "Basics/audio/japanese/option/jp_strong_sentence.mp3" },
{ challengeId: 168, correct: false, text: "美しいです", audioSrc: "Basics/audio/japanese/option/jp_beautiful_sentence.mp3" },
{ challengeId: 168, correct: false, text: "大きいです", audioSrc: "Basics/audio/japanese/option/jp_big_sentence.mp3" },

{ challengeId: 169, correct: true, text: "これは猫です。", audioSrc: "Basics/audio/japanese/option/jp_this_is_a_cat.mp3" },
{ challengeId: 169, correct: false, text: "それは犬です。", audioSrc: "Basics/audio/japanese/option/jp_that_is_a_dog.mp3" },
{ challengeId: 169, correct: false, text: "これは本です。", audioSrc: "Basics/audio/japanese/option/jp_this_is_a_book.mp3" },

{ challengeId: 170, correct: true, text: "太陽は明るいです。", audioSrc: "Basics/audio/japanese/option/jp_sun_is_bright.mp3" },
{ challengeId: 170, correct: false, text: "月は暗いです。", audioSrc: "Basics/audio/japanese/option/jp_moon_is_dark.mp3" },
{ challengeId: 170, correct: false, text: "星は輝いています。", audioSrc: "Basics/audio/japanese/option/jp_stars_are_shining.mp3" },

{ challengeId: 171, correct: true, text: "私は本を持っています。", audioSrc: "Basics/audio/japanese/option/jp_i_have_a_book.mp3" },
{ challengeId: 171, correct: false, text: "私はペンを持っています。", audioSrc: "Basics/audio/japanese/option/jp_i_have_a_pen.mp3" },
{ challengeId: 171, correct: false, text: "私はカバンを持っています。", audioSrc: "Basics/audio/japanese/option/jp_i_have_a_bag.mp3" },

{ challengeId: 172, correct: true, text: "彼女は私の妹です。", audioSrc: "Basics/audio/japanese/option/jp_she_is_my_sister.mp3" },
{ challengeId: 172, correct: false, text: "彼は私の兄です。", audioSrc: "Basics/audio/japanese/option/jp_he_is_my_brother.mp3" },
{ challengeId: 172, correct: false, text: "彼女は私の母です。", audioSrc: "Basics/audio/japanese/option/jp_she_is_my_mother.mp3" },

{ challengeId: 173, correct: true, text: "私たちは友達です。", audioSrc: "Basics/audio/japanese/option/jp_we_are_friends.mp3" },
{ challengeId: 173, correct: false, text: "彼らは先生です。", audioSrc: "Basics/audio/japanese/option/jp_they_are_teachers.mp3" },
{ challengeId: 173, correct: false, text: "私たちは家族です。", audioSrc: "Basics/audio/japanese/option/jp_we_are_family.mp3" },

{ challengeId: 174, correct: true, text: "犬は走っています。", audioSrc: "Basics/audio/japanese/option/jp_dog_is_running.mp3" },
{ challengeId: 174, correct: false, text: "猫は歩いています。", audioSrc: "Basics/audio/japanese/option/jp_cat_is_walking.mp3" },
{ challengeId: 174, correct: false, text: "鳥は飛んでいます。", audioSrc: "Basics/audio/japanese/option/jp_bird_is_flying.mp3" },

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

{ challengeId: 179, correct: true, text: "私は日本語の本を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_i_am_reading_a_japanese_book.mp3" },
{ challengeId: 179, correct: false, text: "私は英語の本を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_i_am_reading_an_english_book.mp3" },
{ challengeId: 179, correct: false, text: "私は雑誌を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_i_am_reading_a_magazine.mp3" },

{ challengeId: 180, correct: true, text: "彼女は料理を作っています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_cooking_food.mp3" },
{ challengeId: 180, correct: false, text: "彼女は掃除をしています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_cleaning.mp3" },
{ challengeId: 180, correct: false, text: "彼女はテレビを見ています。", audioSrc: "Basics/audio/japanese/option/jp_she_is_watching_tv.mp3" },

{ challengeId: 181, correct: true, text: "子供たちは外で遊んでいます。", audioSrc: "Basics/audio/japanese/option/jp_children_are_playing_outside.mp3" },
{ challengeId: 181, correct: false, text: "子供たちは部屋で遊んでいます。", audioSrc: "Basics/audio/japanese/option/jp_children_are_playing_inside.mp3" },
{ challengeId: 181, correct: false, text: "子供たちは宿題をしています。", audioSrc: "Basics/audio/japanese/option/jp_children_are_doing_homework.mp3" },

{ challengeId: 182, correct: true, text: "私たちは毎日学校に行きます。", audioSrc: "Basics/audio/japanese/option/jp_we_go_to_school_every_day.mp3" },
{ challengeId: 182, correct: false, text: "私たちは週末に学校に行きます。", audioSrc: "Basics/audio/japanese/option/jp_we_go_to_school_on_weekends.mp3" },
{ challengeId: 182, correct: false, text: "私たちは時々学校に行きます。", audioSrc: "Basics/audio/japanese/option/jp_we_sometimes_go_to_school.mp3" },

{ challengeId: 183, correct: true, text: "彼はお茶を飲むのが好きです。", audioSrc: "Basics/audio/japanese/option/jp_he_likes_to_drink_tea.mp3" },
{ challengeId: 183, correct: false, text: "彼はコーヒーを飲むのが好きです。", audioSrc: "Basics/audio/japanese/option/jp_he_likes_to_drink_coffee.mp3" },
{ challengeId: 183, correct: false, text: "彼は水を飲むのが好きです。", audioSrc: "Basics/audio/japanese/option/jp_he_likes_to_drink_water.mp3" },

{ challengeId: 184, correct: true, text: "鳥たちは空を飛んでいます。", audioSrc: "Basics/audio/japanese/option/jp_birds_are_flying_in_the_sky.mp3" },
{ challengeId: 184, correct: false, text: "鳥たちは木の上に座っています。", audioSrc: "Basics/audio/japanese/option/jp_birds_are_sitting_on_a_tree.mp3" },
{ challengeId: 184, correct: false, text: "鳥たちは地面を歩いています。", audioSrc: "Basics/audio/japanese/option/jp_birds_are_walking_on_the_ground.mp3" },

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

{ challengeId: 189, correct: true, text: "一生懸命働けば、成功します。", audioSrc: "Basics/audio/japanese/option/jp_if_you_work_hard_you_will_succeed.mp3" },
{ challengeId: 189, correct: false, text: "一生懸命働かなければ、成功します。", audioSrc: "Basics/audio/japanese/option/jp_if_you_dont_work_hard_you_will_succeed.mp3" },
{ challengeId: 189, correct: false, text: "一生懸命働けば、失敗します。", audioSrc: "Basics/audio/japanese/option/jp_if_you_work_hard_you_will_fail.mp3" },

{ challengeId: 190, correct: true, text: "彼女は野菜を買いに市場に行きました。", audioSrc: "Basics/audio/japanese/option/jp_she_went_to_the_market_to_buy_vegetables.mp3" },
{ challengeId: 190, correct: false, text: "彼女は果物を買いに市場に行きました。", audioSrc: "Basics/audio/japanese/option/jp_she_went_to_the_market_to_buy_fruits.mp3" },
{ challengeId: 190, correct: false, text: "彼女は市場に行きませんでした。", audioSrc: "Basics/audio/japanese/option/jp_she_did_not_go_to_the_market.mp3" },

{ challengeId: 191, correct: true, text: "雨が降っていたけど、彼らはサッカーをしました。", audioSrc: "Basics/audio/japanese/option/jp_although_it_was_raining_they_played_football.mp3" },
{ challengeId: 191, correct: false, text: "雨が降っていたので、彼らはサッカーをしませんでした。", audioSrc: "Basics/audio/japanese/option/jp_because_it_was_raining_they_did_not_play_football.mp3" },
{ challengeId: 191, correct: false, text: "晴れていたけど、彼らはサッカーをしました。", audioSrc: "Basics/audio/japanese/option/jp_although_it_was_sunny_they_played_football.mp3" },

{ challengeId: 192, correct: true, text: "先生は生徒に課題を期限内に提出するように頼みました。", audioSrc: "Basics/audio/japanese/option/jp_teacher_asked_students_to_submit_assignments_on_time.mp3" },
{ challengeId: 192, correct: false, text: "先生は生徒に課題を出さないように頼みました。", audioSrc: "Basics/audio/japanese/option/jp_teacher_asked_students_not_to_submit_assignments.mp3" },
{ challengeId: 192, correct: false, text: "先生は生徒に課題を忘れるように頼みました。", audioSrc: "Basics/audio/japanese/option/jp_teacher_asked_students_to_forget_about_assignments.mp3" },

{ challengeId: 193, correct: true, text: "彼はお茶を飲みながら新聞を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_he_is_reading_newspaper_while_drinking_tea.mp3" },
{ challengeId: 193, correct: false, text: "彼はお茶を飲まずに新聞を読んでいます。", audioSrc: "Basics/audio/japanese/option/jp_he_is_reading_newspaper_without_drinking_tea.mp3" },
{ challengeId: 193, correct: false, text: "彼はお茶を飲みながらテレビを見ています。", audioSrc: "Basics/audio/japanese/option/jp_he_is_watching_tv_while_drinking_tea.mp3" },

{ challengeId: 194, correct: true, text: "彼女は疲れていましたが、働き続けました。", audioSrc: "Basics/audio/japanese/option/jp_she_was_tired_yet_she_continued_working.mp3" },
{ challengeId: 194, correct: false, text: "彼女は疲れていたので、働きませんでした。", audioSrc: "Basics/audio/japanese/option/jp_she_was_tired_so_she_did_not_work.mp3" },
{ challengeId: 194, correct: false, text: "彼女は元気でしたが、働きませんでした。", audioSrc: "Basics/audio/japanese/option/jp_she_was_energetic_yet_she_did_not_work.mp3" },

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

]);