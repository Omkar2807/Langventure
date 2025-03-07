await db.insert(schema.challengeOptions).values([
    // Lesson 1 Challenge Options
    
        { challengeId: 1, imageSrc: "/man.svg", correct: true, text: "el hombre", audioSrc: "Basics/audio/spanish/option/es_man.mp3" },
        { challengeId: 1, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "Basics/audio/spanish/option/es_woman.mp3" },
        { challengeId: 1, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "Basics/audio/spanish/option/es_robot.mp3" },
    
        { challengeId: 2, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "Basics/audio/spanish/option/es_man.mp3" },
        { challengeId: 2, imageSrc: "/woman.svg", correct: true, text: "la mujer", audioSrc: "Basics/audio/spanish/option/es_woman.mp3" },
        { challengeId: 2, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "Basics/audio/spanish/option/es_robot.mp3" },
    
        { challengeId: 3, imageSrc: "/robot.svg", correct: true, text: "el robot", audioSrc: "Basics/audio/spanish/option/es_robot.mp3" },
        { challengeId: 3, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "Basics/audio/spanish/option/es_man.mp3" },
        { challengeId: 3, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "Basics/audio/spanish/option/es_woman.mp3" },
    
        // Lesson 2 Challenge Options
        { challengeId: 4, imageSrc: "/car.svg", correct: true, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },
        { challengeId: 4, imageSrc: "/house.svg", correct: false, text: "la casa", audioSrc: "Basics/audio/spanish/option/es_house.mp3" },
        { challengeId: 4, imageSrc: "/bicycle.svg", correct: false, text: "la bicicleta", audioSrc: "Basics/audio/spanish/option/es_bicycle.mp3" },
    
        { challengeId: 5, correct: true, text: "el", audioSrc: "Basics/audio/spanish/option/es_el.mp3" },
        { challengeId: 5, correct: false, text: "la", audioSrc: "Basics/audio/spanish/option/es_la.mp3" },
        { challengeId: 5, correct: false, text: "un", audioSrc: "Basics/audio/spanish/option/es_un.mp3" },
    
        { challengeId: 6, imageSrc: "/house.svg", correct: true, text: "la casa", audioSrc: "Basics/audio/spanish/option/es_house.mp3" },
        { challengeId: 6, imageSrc: "/bicycle.svg", correct: false, text: "la bicicleta", audioSrc: "Basics/audio/spanish/option/es_bicycle.mp3" },
        { challengeId: 6, imageSrc: "/car.svg", correct: false, text: "el carro", audioSrc: "Basics/audio/spanish/option/es_car.mp3" },
    
        // Lesson 3 Challenge Options
        { challengeId: 7, imageSrc: "/book.svg", correct: true, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
        { challengeId: 7, imageSrc: "/pencil.png", correct: false, text: "el lápiz", audioSrc: "Basics/audio/spanish/option/es_pencil.mp3" },
        { challengeId: 7, imageSrc: "/pen.svg", correct: false, text: "la pluma", audioSrc: "Basics/audio/spanish/option/es_pen.mp3" },
    
        { challengeId: 8, correct: true, text: "el", audioSrc: "Basics/audio/spanish/option/es_el.mp3" },
        { challengeId: 8, correct: false, text: "la", audioSrc: "Basics/audio/spanish/option/es_la.mp3" },
        { challengeId: 8, correct: false, text: "un", audioSrc: "Basics/audio/spanish/option/es_un.mp3" },
    
        { challengeId: 9, imageSrc: "/bicycle.svg", correct: true, text: "la bicicleta", audioSrc: "Basics/audio/spanish/option/es_bicycle.mp3" },
        { challengeId: 9, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
        { challengeId: 9, imageSrc: "/pencil.svg", correct: false, text: "el lápiz", audioSrc: "Basics/audio/spanish/option/es_pencil.mp3" },
    
        // Lesson 4 Challenge Options
        { challengeId: 10, imageSrc: "/pen.svg", correct: true, text: "la pluma", audioSrc: "Basics/audio/spanish/option/es_pen.mp3" },
        { challengeId: 10, imageSrc: "/pencil.png", correct: false, text: "el lápiz", audioSrc: "Basics/audio/spanish/option/es_pencil.mp3" },
        { challengeId: 10, imageSrc: "/chair.svg", correct: false, text: "la silla", audioSrc: "Basics/audio/spanish/option/es_chair.mp3" },
    
        { challengeId: 11, correct: true, text: "el lápiz", audioSrc: "Basics/audio/spanish/option/es_pencil.mp3" },
        { challengeId: 11, correct: false, text: "la pluma", audioSrc: "Basics/audio/spanish/option/es_pen.mp3" },
        { challengeId: 11, correct: false, text: "la silla", audioSrc: "Basics/audio/spanish/option/es_chair.mp3" },
    
        { challengeId: 12, imageSrc: "/chair.svg", correct: true, text: "la silla", audioSrc: "Basics/audio/spanish/option/es_chair.mp3" },
        { challengeId: 12, imageSrc: "/pen.svg", correct: false, text: "la pluma", audioSrc: "Basics/audio/spanish/option/es_pen.mp3" },
        { challengeId: 12, imageSrc: "/pencil.png", correct: false, text: "el lápiz", audioSrc: "Basics/audio/spanish/option/es_pencil.mp3" },
    
        // Lesson 5 Challenge Options
        { challengeId: 13, imageSrc: "/computer.svg", correct: true, text: "la computadora", audioSrc: "Basics/audio/spanish/option/es_computer.mp3" },
        { challengeId: 13, imageSrc: "/phone.svg", correct: false, text: "el teléfono", audioSrc: "Basics/audio/spanish/option/es_phone.mp3" },
        { challengeId: 13, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
    
        { challengeId: 14, correct: true, text: "la", audioSrc: "Basics/audio/spanish/option/es_la.mp3" },
        { challengeId: 14, correct: false, text: "el", audioSrc: "Basics/audio/spanish/option/es_el.mp3" },
        { challengeId: 14, correct: false, text: "un", audioSrc: "Basics/audio/spanish/option/es_un.mp3" },
    
        { challengeId: 15, imageSrc: "/phone.svg", correct: true, text: "el teléfono", audioSrc: "Basics/audio/spanish/option/es_phone.mp3" },
        { challengeId: 15, imageSrc: "/computer.svg", correct: false, text: "la computadora", audioSrc: "Basics/audio/spanish/option/es_computer.mp3" },
        { challengeId: 15, imageSrc: "/book.svg", correct: false, text: "el libro", audioSrc: "Basics/audio/spanish/option/es_book.mp3" },
    

    // french
    
        { challengeId: 16, imageSrc: "/man.svg", correct: true, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
        { challengeId: 16, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
        { challengeId: 16, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },
    
        { challengeId: 17, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
        { challengeId: 17, imageSrc: "/woman.svg", correct: true, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
        { challengeId: 17, imageSrc: "/robot.svg", correct: false, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },
    
        { challengeId: 18, imageSrc: "/robot.svg", correct: true, text: "le robot", audioSrc: "Basics/audio/french/option/fr_robot.mp3" },
        { challengeId: 18, imageSrc: "/man.svg", correct: false, text: "l'homme", audioSrc: "Basics/audio/french/option/fr_man.mp3" },
        { challengeId: 18, imageSrc: "/woman.svg", correct: false, text: "la femme", audioSrc: "Basics/audio/french/option/fr_woman.mp3" },
    
        // Lesson 7 Challenge Options (French)
        { challengeId: 19, imageSrc: "/car.svg", correct: true, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
        { challengeId: 19, imageSrc: "/house.svg", correct: false, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },
        { challengeId: 19, imageSrc: "/bicycle.svg", correct: false, text: "le vélo", audioSrc: "Basics/audio/french/option/fr_bicycle.mp3" },
    
        { challengeId: 20, correct: true, text: "la", audioSrc: "Basics/audio/french/option/fr_la.mp3" },
        { challengeId: 20, correct: false, text: "le", audioSrc: "Basics/audio/french/option/fr_le.mp3" },
        { challengeId: 20, correct: false, text: "une", audioSrc: "Basics/audio/french/option/fr_une.mp3" },
    
        { challengeId: 21, imageSrc: "/house.svg", correct: true, text: "la maison", audioSrc: "Basics/audio/french/option/fr_house.mp3" },
        { challengeId: 21, imageSrc: "/bicycle.svg", correct: false, text: "le vélo", audioSrc: "Basics/audio/french/option/fr_bicycle.mp3" },
        { challengeId: 21, imageSrc: "/car.svg", correct: false, text: "la voiture", audioSrc: "Basics/audio/french/option/fr_car.mp3" },
    
        // Lesson 8 Challenge Options (French)
        { challengeId: 22, imageSrc: "/book.svg", correct: true, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
        { challengeId: 22, imageSrc: "/pencil.png", correct: false, text: "le crayon", audioSrc: "Basics/audio/french/option/fr_pencil.mp3" },
        { challengeId: 22, imageSrc: "/pen.svg", correct: false, text: "le stylo", audioSrc: "Basics/audio/french/option/fr_pen.mp3" },
    
        { challengeId: 23, correct: true, text: "le", audioSrc: "Basics/audio/french/option/fr_le.mp3" },
        { challengeId: 23, correct: false, text: "la", audioSrc: "Basics/audio/french/option/fr_la.mp3" },
        { challengeId: 23, correct: false, text: "un", audioSrc: "Basics/audio/french/option/fr_un.mp3" },
    
        { challengeId: 24, imageSrc: "/bicycle.svg", correct: true, text: "le vélo", audioSrc: "Basics/audio/french/option/fr_bicycle.mp3" },
        { challengeId: 24, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
        { challengeId: 24, imageSrc: "/pencil.svg", correct: false, text: "le crayon", audioSrc: "Basics/audio/french/option/fr_pencil.mp3" },
    
        // Lesson 9 Challenge Options (French)
        { challengeId: 25, imageSrc: "/pen.svg", correct: true, text: "le stylo", audioSrc: "Basics/audio/french/option/fr_pen.mp3" },
        { challengeId: 25, imageSrc: "/pencil.png", correct: false, text: "le crayon", audioSrc: "Basics/audio/french/option/fr_pencil.mp3" },
        { challengeId: 25, imageSrc: "/chair.svg", correct: false, text: "la chaise", audioSrc: "Basics/audio/french/option/fr_chair.mp3" },
    
        { challengeId: 26, correct: true, text: "le crayon", audioSrc: "Basics/audio/french/option/fr_pencil.mp3" },
        { challengeId: 26, correct: false, text: "le stylo", audioSrc: "Basics/audio/french/option/fr_pen.mp3" },
        { challengeId: 26, correct: false, text: "la chaise", audioSrc: "Basics/audio/french/option/fr_chair.mp3" },
    
        { challengeId: 27, imageSrc: "/chair.svg", correct: true, text: "la chaise", audioSrc: "Basics/audio/french/option/fr_chair.mp3" },
        { challengeId: 27, imageSrc: "/pen.svg", correct: false, text: "le stylo", audioSrc: "Basics/audio/french/option/fr_pen.mp3" },
        { challengeId: 27, imageSrc: "/pencil.png", correct: false, text: "le crayon", audioSrc: "Basics/audio/french/option/fr_pencil.mp3" },
    
        // Lesson 10 Challenge Options (French)
        { challengeId: 28, imageSrc: "/computer.svg", correct: true, text: "l'ordinateur", audioSrc: "Basics/audio/french/option/fr_computer.mp3" },
        { challengeId: 28, imageSrc: "/phone.svg", correct: false, text: "le téléphone", audioSrc: "Basics/audio/french/option/fr_phone.mp3" },
        { challengeId: 28, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
    
        { challengeId: 29, correct: true, text: "l'", audioSrc: "Basics/audio/french/option/fr_l'.mp3" },
        { challengeId: 29, correct: false, text: "le", audioSrc: "Basics/audio/french/option/fr_le.mp3" },
        { challengeId: 29, correct: false, text: "la", audioSrc: "Basics/audio/french/option/fr_la.mp3" },
    
        { challengeId: 30, imageSrc: "/phone.svg", correct: true, text: "le téléphone", audioSrc: "Basics/audio/french/option/fr_phone.mp3" },
        { challengeId: 30, imageSrc: "/computer.svg", correct: false, text: "l'ordinateur", audioSrc: "Basics/audio/french/option/fr_computer.mp3" },
        { challengeId: 30, imageSrc: "/book.svg", correct: false, text: "le livre", audioSrc: "Basics/audio/french/option/fr_book.mp3" },
    

// japnese 


    // Lesson 11 Challenge Options (Japanese)
    { challengeId: 31, imageSrc: "/man.svg", correct: true, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
    { challengeId: 31, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },
    { challengeId: 31, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },

    { challengeId: 32, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
    { challengeId: 32, imageSrc: "/woman.svg", correct: true, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },
    { challengeId: 32, imageSrc: "/robot.svg", correct: false, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },

    { challengeId: 33, imageSrc: "/robot.svg", correct: true, text: "ロボット", audioSrc: "Basics/audio/japanese/option/jp_robot.mp3" },
    { challengeId: 33, imageSrc: "/man.svg", correct: false, text: "男の人", audioSrc: "Basics/audio/japanese/option/jp_man.mp3" },
    { challengeId: 33, imageSrc: "/woman.svg", correct: false, text: "女の人", audioSrc: "Basics/audio/japanese/option/jp_woman.mp3" },

    // Lesson 12 Challenge Options (Japanese)
    { challengeId: 34, imageSrc: "/car.svg", correct: true, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },
    { challengeId: 34, imageSrc: "/house.svg", correct: false, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },
    { challengeId: 34, imageSrc: "/bicycle.svg", correct: false, text: "自転車", audioSrc: "Basics/audio/japanese/option/jp_bicycle.mp3" },

    { challengeId: 35, correct: true, text: "を", audioSrc: "Basics/audio/japanese/option/jp_wo.mp3" },
    { challengeId: 35, correct: false, text: "の", audioSrc: "Basics/audio/japanese/option/jp_no.mp3" },
    { challengeId: 35, correct: false, text: "に", audioSrc: "Basics/audio/japanese/option/jp_ni.mp3" },

    { challengeId: 36, imageSrc: "/house.svg", correct: true, text: "家", audioSrc: "Basics/audio/japanese/option/jp_house.mp3" },
    { challengeId: 36, imageSrc: "/bicycle.svg", correct: false, text: "自転車", audioSrc: "Basics/audio/japanese/option/jp_bicycle.mp3" },
    { challengeId: 36, imageSrc: "/car.svg", correct: false, text: "車", audioSrc: "Basics/audio/japanese/option/jp_car.mp3" },

    // Lesson 13 Challenge Options (Japanese)
    { challengeId: 37, imageSrc: "/book.svg", correct: true, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },
    { challengeId: 37, imageSrc: "/pencil.png", correct: false, text: "鉛筆", audioSrc: "Basics/audio/japanese/option/jp_pencil.mp3" },
    { challengeId: 37, imageSrc: "/pen.svg", correct: false, text: "ペン", audioSrc: "Basics/audio/japanese/option/jp_pen.mp3" },

    { challengeId: 38, correct: true, text: "を", audioSrc: "Basics/audio/japanese/option/jp_wo.mp3" },
    { challengeId: 38, correct: false, text: "の", audioSrc: "Basics/audio/japanese/option/jp_no.mp3" },
    { challengeId: 38, correct: false, text: "に", audioSrc: "Basics/audio/japanese/option/jp_ni.mp3" },

    { challengeId: 39, imageSrc: "/bicycle.svg", correct: true, text: "自転車", audioSrc: "Basics/audio/japanese/option/jp_bicycle.mp3" },
    { challengeId: 39, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },
    { challengeId: 39, imageSrc: "/pencil.svg", correct: false, text: "鉛筆", audioSrc: "Basics/audio/japanese/option/jp_pencil.mp3" },

    // Lesson 14 Challenge Options (Japanese)
    { challengeId: 40, imageSrc: "/pen.svg", correct: true, text: "ペン", audioSrc: "Basics/audio/japanese/option/jp_pen.mp3" },
    { challengeId: 40, imageSrc: "/pencil.png", correct: false, text: "鉛筆", audioSrc: "Basics/audio/japanese/option/jp_pencil.mp3" },
    { challengeId: 40, imageSrc: "/chair.svg", correct: false, text: "椅子", audioSrc: "Basics/audio/japanese/option/jp_chair.mp3" },

    { challengeId: 41, correct: true, text: "鉛筆", audioSrc: "Basics/audio/japanese/option/jp_pencil.mp3" },
    { challengeId: 41, correct: false, text: "ペン", audioSrc: "Basics/audio/japanese/option/jp_pen.mp3" },
    { challengeId: 41, correct: false, text: "椅子", audioSrc: "Basics/audio/japanese/option/jp_chair.mp3" },

    { challengeId: 42, imageSrc: "/chair.svg", correct: true, text: "椅子", audioSrc: "Basics/audio/japanese/option/jp_chair.mp3" },
    { challengeId: 42, imageSrc: "/pen.svg", correct: false, text: "ペン", audioSrc: "Basics/audio/japanese/option/jp_pen.mp3" },
    { challengeId: 42, imageSrc: "/pencil.png", correct: false, text: "鉛筆", audioSrc: "Basics/audio/japanese/option/jp_pencil.mp3" },

    // Lesson 15 Challenge Options (Japanese)
    { challengeId: 43, imageSrc: "/computer.svg", correct: true, text: "コンピューター", audioSrc: "Basics/audio/japanese/option/jp_computer.mp3" },
    { challengeId: 43, imageSrc: "/phone.svg", correct: false, text: "電話", audioSrc: "Basics/audio/japanese/option/jp_phone.mp3" },
    { challengeId: 43, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },

    { challengeId: 44, correct: true, text: "を", audioSrc: "Basics/audio/japanese/option/jp_wo.mp3" },
    { challengeId: 44, correct: false, text: "の", audioSrc: "Basics/audio/japanese/option/jp_no.mp3" },
    { challengeId: 44, correct: false, text: "に", audioSrc: "Basics/audio/japanese/option/jp_ni.mp3" },

    { challengeId: 45, imageSrc: "/phone.svg", correct: true, text: "電話", audioSrc: "Basics/audio/japanese/option/jp_phone.mp3" },
    { challengeId: 45, imageSrc: "/computer.svg", correct: false, text: "コンピューター", audioSrc: "Basics/audio/japanese/option/jp_computer.mp3" },
    { challengeId: 45, imageSrc: "/book.svg", correct: false, text: "本", audioSrc: "Basics/audio/japanese/option/jp_book.mp3" },


    
        { challengeId: 46, imageSrc: "/man.svg", correct: true, text: "पुरुष", audioSrc: "Basics/audio/marathi/option/mr_man.mp3" },
        { challengeId: 46, imageSrc: "/woman.svg", correct: false, text: "स्त्री", audioSrc: "Basics/audio/marathi/option/mr_woman.mp3" },
        { challengeId: 46, imageSrc: "/robot.svg", correct: false, text: "रोबोट", audioSrc: "Basics/audio/marathi/option/mr_robot.mp3" },
    
        { challengeId: 47, imageSrc: "/man.svg", correct: false, text: "पुरुष", audioSrc: "Basics/audio/marathi/option/mr_man.mp3" },
        { challengeId: 47, imageSrc: "/woman.svg", correct: true, text: "स्त्री", audioSrc: "Basics/audio/marathi/option/mr_woman.mp3" },
        { challengeId: 47, imageSrc: "/robot.svg", correct: false, text: "रोबोट", audioSrc: "Basics/audio/marathi/option/mr_robot.mp3" },
    
        { challengeId: 48, imageSrc: "/robot.svg", correct: true, text: "रोबोट", audioSrc: "Basics/audio/marathi/option/mr_robot.mp3" },
        { challengeId: 48, imageSrc: "/man.svg", correct: false, text: "पुरुष", audioSrc: "Basics/audio/marathi/option/mr_man.mp3" },
        { challengeId: 48, imageSrc: "/woman.svg", correct: false, text: "स्त्री", audioSrc: "Basics/audio/marathi/option/mr_woman.mp3" },
    
        // Lesson 2 Challenge Options (Marathi)
        { challengeId: 49, imageSrc: "/car.svg", correct: true, text: "गाडी", audioSrc: "Basics/audio/marathi/option/mr_car.mp3" },
        { challengeId: 49, imageSrc: "/house.svg", correct: false, text: "घर", audioSrc: "Basics/audio/marathi/option/mr_house.mp3" },
        { challengeId: 49, imageSrc: "/bicycle.svg", correct: false, text: "सायकल", audioSrc: "Basics/audio/marathi/option/mr_bicycle.mp3" },
    
        { challengeId: 50, correct: true, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_to.mp3" },
        { challengeId: 50, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_ti.mp3" },
        { challengeId: 50, correct: false, text: "एक", audioSrc: "Basics/audio/marathi/option/mr_ek.mp3" },
    
        { challengeId: 51, imageSrc: "/house.svg", correct: true, text: "घर", audioSrc: "Basics/audio/marathi/option/mr_house.mp3" },
        { challengeId: 51, imageSrc: "/bicycle.svg", correct: false, text: "सायकल", audioSrc: "Basics/audio/marathi/option/mr_bicycle.mp3" },
        { challengeId: 51, imageSrc: "/car.svg", correct: false, text: "गाडी", audioSrc: "Basics/audio/marathi/option/mr_car.mp3" },
    
        // Lesson 3 Challenge Options (Marathi)
        { challengeId: 52, imageSrc: "/book.svg", correct: true, text: "पुस्तक", audioSrc: "Basics/audio/marathi/option/mr_book.mp3" },
        { challengeId: 52, imageSrc: "/pencil.png", correct: false, text: "पेन्सिल", audioSrc: "Basics/audio/marathi/option/mr_pencil.mp3" },
        { challengeId: 52, imageSrc: "/pen.svg", correct: false, text: "पेन", audioSrc: "Basics/audio/marathi/option/mr_pen.mp3" },
    
        { challengeId: 53, correct: true, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_to.mp3" },
        { challengeId: 53, correct: false, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_ti.mp3" },
        { challengeId: 53, correct: false, text: "एक", audioSrc: "Basics/audio/marathi/option/mr_ek.mp3" },
    
        { challengeId: 54, imageSrc: "/bicycle.svg", correct: true, text: "सायकल", audioSrc: "Basics/audio/marathi/option/mr_bicycle.mp3" },
        { challengeId: 54, imageSrc: "/book.svg", correct: false, text: "पुस्तक", audioSrc: "Basics/audio/marathi/option/mr_book.mp3" },
        { challengeId: 54, imageSrc: "/pencil.svg", correct: false, text: "पेन्सिल", audioSrc: "Basics/audio/marathi/option/mr_pencil.mp3" },
    
        // Lesson 4 Challenge Options (Marathi)
        { challengeId: 55, imageSrc: "/pen.svg", correct: true, text: "पेन", audioSrc: "Basics/audio/marathi/option/mr_pen.mp3" },
        { challengeId: 55, imageSrc: "/pencil.png", correct: false, text: "पेन्सिल", audioSrc: "Basics/audio/marathi/option/mr_pencil.mp3" },
        { challengeId: 55, imageSrc: "/chair.svg", correct: false, text: "खुर्ची", audioSrc: "Basics/audio/marathi/option/mr_chair.mp3" },
    
        { challengeId: 56, correct: true, text: "पेन्सिल", audioSrc: "Basics/audio/marathi/option/mr_pencil.mp3" },
        { challengeId: 56, correct: false, text: "पेन", audioSrc: "Basics/audio/marathi/option/mr_pen.mp3" },
        { challengeId: 56, correct: false, text: "खुर्ची", audioSrc: "Basics/audio/marathi/option/mr_chair.mp3" },
    
        { challengeId: 57, imageSrc: "/chair.svg", correct: true, text: "खुर्ची", audioSrc: "Basics/audio/marathi/option/mr_chair.mp3" },
        { challengeId: 57, imageSrc: "/pen.svg", correct: false, text: "पेन", audioSrc: "Basics/audio/marathi/option/mr_pen.mp3" },
        { challengeId: 57, imageSrc: "/pencil.png", correct: false, text: "पेन्सिल", audioSrc: "Basics/audio/marathi/option/mr_pencil.mp3" },
    
        // Lesson 5 Challenge Options (Marathi)
        { challengeId: 58, imageSrc: "/computer.svg", correct: true, text: "संगणक", audioSrc: "Basics/audio/marathi/option/mr_computer.mp3" },
        { challengeId: 58, imageSrc: "/phone.svg", correct: false, text: "फोन", audioSrc: "Basics/audio/marathi/option/mr_phone.mp3" },
        { challengeId: 58, imageSrc: "/book.svg", correct: false, text: "पुस्तक", audioSrc: "Basics/audio/marathi/option/mr_book.mp3" },
    
        { challengeId: 59, correct: true, text: "ती", audioSrc: "Basics/audio/marathi/option/mr_ti.mp3" },
        { challengeId: 59, correct: false, text: "तो", audioSrc: "Basics/audio/marathi/option/mr_to.mp3" },
        { challengeId: 59, correct: false, text: "एक", audioSrc: "Basics/audio/marathi/option/mr_ek.mp3" },
    
        { challengeId: 60, imageSrc: "/phone.svg", correct: true, text: "फोन", audioSrc: "Basics/audio/marathi/option/mr_phone.mp3" },
        { challengeId: 60, imageSrc: "/computer.svg", correct: false, text: "संगणक", audioSrc: "Basics/audio/marathi/option/mr_computer.mp3" },
        { challengeId: 60, imageSrc: "/book.svg", correct: false, text: "पुस्तक", audioSrc: "Basics/audio/marathi/option/mr_book.mp3" }
    



]);