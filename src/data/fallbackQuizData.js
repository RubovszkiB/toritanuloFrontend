export const fallbackQuizData = {
  "topics": [
    {
      "id": 1001,
      "code": "okor",
      "title": "Az ókor és kultúrája",
      "description": "Csak évszámokra épülő ókori tesztek.",
      "order": 1,
      "testCount": 3,
      "questionCount": 25
    },
    {
      "id": 1002,
      "code": "egyetemes-kozepkor",
      "title": "Az egyetemes középkor",
      "description": "Évszámközpontú középkori tesztek az emelt követelményekhez.",
      "order": 2,
      "testCount": 3,
      "questionCount": 26
    },
    {
      "id": 1003,
      "code": "magyar-kozepkor",
      "title": "A középkori magyar állam",
      "description": "Csak évszámos magyar középkor tesztek, őstörténettől Mátyásig.",
      "order": 3,
      "testCount": 3,
      "questionCount": 27
    },
    {
      "id": 1004,
      "code": "egyetemes-kora-ujkor",
      "title": "A kora újkor egyetemes története",
      "description": "Felfedezések, reformáció, abszolutizmus, felvilágosodás és háborúk évszámai.",
      "order": 4,
      "testCount": 3,
      "questionCount": 25
    },
    {
      "id": 1005,
      "code": "magyar-kora-ujkor",
      "title": "Magyarország a kora újkorban",
      "description": "Három részre szakadás, Erdély, Rákóczi és 18. századi reformok évszámai.",
      "order": 5,
      "testCount": 3,
      "questionCount": 26
    }
  ],
  "tests": [
    {
      "id": 1201,
      "topicId": 1001,
      "slug": "okor-gorog-alapok",
      "title": "Ókor - görög alapok",
      "description": "Athén és a görög világ legfontosabb évszámai.",
      "type": "evszam",
      "difficulty": "konnyu",
      "timeLimitSec": 900,
      "questions": [
        {
          "id": 2001,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Drakón törvényeinek évszámát!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Drakón törvényei évszáma: Kr. e. 621.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1103,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4001,
              "text": "621",
              "number": 621,
              "era": "BCE",
              "normalized": "621"
            }
          ],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2002,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben hajtotta végre Szolón a reformjait Athénban?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 594.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1104,
          "options": [
            {
              "id": 3001,
              "text": "Kr. e. 621",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3002,
              "text": "Kr. e. 594",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3003,
              "text": "Kr. e. 508",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3004,
              "text": "Kr. e. 490",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2003,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Kleiszthenész reformjai Kr. e. 508-ban történtek.",
          "instruction": "",
          "explanation": "Igaz: a tananyagban általában Kr. e. 508 szerepel.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1105,
          "options": [
            {
              "id": 3005,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3006,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2004,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évszám kapcsolódik a marathóni csatához?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 490.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1107,
          "options": [
            {
              "id": 3007,
              "text": "Kr. e. 508",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3008,
              "text": "Kr. e. 490",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3009,
              "text": "Kr. e. 480",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3010,
              "text": "Kr. e. 334",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2005,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Mikor zajlott a szalamiszi csata?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 480.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1108,
          "options": [
            {
              "id": 3011,
              "text": "Kr. e. 490",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3012,
              "text": "Kr. e. 480",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3013,
              "text": "Kr. e. 451",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3014,
              "text": "Kr. e. 31",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2006,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe az alábbi athéni eseményeket!",
          "instruction": "",
          "explanation": "Helyes sorrend: Drakón törvényei → Szolón reformjai → Kleiszthenész reformjai → A marathóni csata.",
          "difficulty": 3,
          "points": 2,
          "order": 6,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3015,
              "text": "Drakón törvényei",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3016,
              "text": "Szolón reformjai",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3017,
              "text": "Kleiszthenész reformjai",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3018,
              "text": "A marathóni csata",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2007,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket és az évszámokat!",
          "instruction": "",
          "explanation": "Párok: Drakón törvényei = Kr. e. 621 | Szolón reformjai = Kr. e. 594 | Kleiszthenész reformjai = Kr. e. 508 | A marathóni csata = Kr. e. 490.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5001,
              "left": "Drakón törvényei",
              "right": "Kr. e. 621",
              "order": 1
            },
            {
              "id": 5002,
              "left": "Szolón reformjai",
              "right": "Kr. e. 594",
              "order": 2
            },
            {
              "id": 5003,
              "left": "Kleiszthenész reformjai",
              "right": "Kr. e. 508",
              "order": 3
            },
            {
              "id": 5004,
              "left": "A marathóni csata",
              "right": "Kr. e. 490",
              "order": 4
            }
          ],
          "topicId": 1001
        },
        {
          "id": 2008,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben kezdődött Nagy Sándor hadjárata?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 334.",
          "difficulty": 2,
          "points": 1,
          "order": 8,
          "chronologyEvent": 1110,
          "options": [
            {
              "id": 3019,
              "text": "Kr. e. 490",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3020,
              "text": "Kr. e. 334",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3021,
              "text": "Kr. e. 146",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3022,
              "text": "Kr. e. 27",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1202,
      "topicId": 1001,
      "slug": "okor-roma-es-principatus",
      "title": "Ókor - Róma és a principátus",
      "description": "Római államfejlődés, Caesar és Augustus kronológiája.",
      "type": "evszam",
      "difficulty": "kozepes",
      "timeLimitSec": 900,
      "questions": [
        {
          "id": 2009,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben kezdődött a római köztársaság?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 509.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1106,
          "options": [
            {
              "id": 3023,
              "text": "Kr. e. 753",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3024,
              "text": "Kr. e. 509",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3025,
              "text": "Kr. e. 451",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3026,
              "text": "Kr. e. 49",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2010,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a XII táblás törvények évszámát!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A XII táblás törvények évszáma: Kr. e. 451.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1109,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4002,
              "text": "451",
              "number": 451,
              "era": "BCE",
              "normalized": "451"
            }
          ],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2011,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Karthágó pusztulása Kr. e. 146-ban történt.",
          "instruction": "",
          "explanation": "Igaz: a harmadik pun háború végén, Kr. e. 146-ban pusztult el.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1111,
          "options": [
            {
              "id": 3027,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3028,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2012,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be annak az évét, amikor Caesar átlépte a Rubicont!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Caesar átlépi a Rubicont évszáma: Kr. e. 49.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1112,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4003,
              "text": "49",
              "number": 49,
              "era": "BCE",
              "normalized": "49"
            }
          ],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2013,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben gyilkolták meg Caesart?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 44.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1113,
          "options": [
            {
              "id": 3029,
              "text": "Kr. e. 49",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3030,
              "text": "Kr. e. 44",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3031,
              "text": "Kr. e. 31",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3032,
              "text": "Kr. e. 27",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2014,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évhez kötjük az actiumi csatát?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: Kr. e. 31.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1114,
          "options": [
            {
              "id": 3033,
              "text": "Kr. e. 44",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3034,
              "text": "Kr. e. 31",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3035,
              "text": "Kr. e. 27",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3036,
              "text": "Kr. u. 313",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2015,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Augustus principátusának kezdetét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Augustus principátusának kezdete évszáma: Kr. e. 27.",
          "difficulty": 2,
          "points": 1,
          "order": 7,
          "chronologyEvent": 1115,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4004,
              "text": "27",
              "number": 27,
              "era": "BCE",
              "normalized": "27"
            }
          ],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2016,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Rendezd időrendbe a késő köztársaság és a principátus eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: Caesar átlépi a Rubicont → Caesar meggyilkolása → Az actiumi csata → Augustus principátusának kezdete.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3037,
              "text": "Caesar átlépi a Rubicont",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3038,
              "text": "Caesar meggyilkolása",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3039,
              "text": "Az actiumi csata",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3040,
              "text": "Augustus principátusának kezdete",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2017,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd a római eseményeket és az évszámokat!",
          "instruction": "",
          "explanation": "Párok: A római köztársaság kezdete = Kr. e. 509 | Caesar átlépi a Rubicont = Kr. e. 49 | Caesar meggyilkolása = Kr. e. 44 | Augustus principátusának kezdete = Kr. e. 27.",
          "difficulty": 3,
          "points": 2,
          "order": 9,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5005,
              "left": "A római köztársaság kezdete",
              "right": "Kr. e. 509",
              "order": 1
            },
            {
              "id": 5006,
              "left": "Caesar átlépi a Rubicont",
              "right": "Kr. e. 49",
              "order": 2
            },
            {
              "id": 5007,
              "left": "Caesar meggyilkolása",
              "right": "Kr. e. 44",
              "order": 3
            },
            {
              "id": 5008,
              "left": "Augustus principátusának kezdete",
              "right": "Kr. e. 27",
              "order": 4
            }
          ],
          "topicId": 1001
        }
      ],
      "questionCount": 9
    },
    {
      "id": 1203,
      "topicId": 1001,
      "slug": "okor-keresztenyseg-es-kesoi-csaszarkor",
      "title": "Ókor - kereszténység és késő császárkor",
      "description": "Késő antik és korai keresztény évszámok.",
      "type": "evszam",
      "difficulty": "kozepes",
      "timeLimitSec": 900,
      "questions": [
        {
          "id": 2018,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben adták ki a milánói ediktumot?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 313.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1116,
          "options": [
            {
              "id": 3041,
              "text": "313",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3042,
              "text": "325",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3043,
              "text": "391",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3044,
              "text": "476",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2019,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a niceai zsinat évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A niceai zsinat évszáma: 325.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1117,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4005,
              "text": "325",
              "number": 325,
              "era": "CE",
              "normalized": "325"
            }
          ],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2020,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A kereszténység államvallássá válása 391-re tehető.",
          "instruction": "",
          "explanation": "Igaz: Theodosius uralma alatt, 391-ben vált államvallássá.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1118,
          "options": [
            {
              "id": 3045,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3046,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2021,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évszám kapcsolódik a Római Birodalom kettéválásához?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 395.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1119,
          "options": [
            {
              "id": 3047,
              "text": "313",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3048,
              "text": "325",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3049,
              "text": "395",
              "isCorrect": true,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3050,
              "text": "476",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2022,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a Nyugatrómai Birodalom bukásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A Nyugatrómai Birodalom bukása évszáma: 476.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1120,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4006,
              "text": "476",
              "number": 476,
              "era": "CE",
              "normalized": "476"
            }
          ],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2023,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a késő császárkor eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: A milánói ediktum → A niceai zsinat → A kereszténység államvallássá válása → A Római Birodalom kettéválása → A Nyugatrómai Birodalom bukása.",
          "difficulty": 3,
          "points": 2,
          "order": 6,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3051,
              "text": "A milánói ediktum",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3052,
              "text": "A niceai zsinat",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3053,
              "text": "A kereszténység államvallássá válása",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3054,
              "text": "A Római Birodalom kettéválása",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3055,
              "text": "A Nyugatrómai Birodalom bukása",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        },
        {
          "id": 2024,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd a kereszténység és a késő császárkor eseményeit az évszámokkal!",
          "instruction": "",
          "explanation": "Párok: A milánói ediktum = 313 | A niceai zsinat = 325 | A kereszténység államvallássá válása = 391 | A Római Birodalom kettéválása = 395.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5009,
              "left": "A milánói ediktum",
              "right": "313",
              "order": 1
            },
            {
              "id": 5010,
              "left": "A niceai zsinat",
              "right": "325",
              "order": 2
            },
            {
              "id": 5011,
              "left": "A kereszténység államvallássá válása",
              "right": "391",
              "order": 3
            },
            {
              "id": 5012,
              "left": "A Római Birodalom kettéválása",
              "right": "395",
              "order": 4
            }
          ],
          "topicId": 1001
        },
        {
          "id": 2025,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A Nyugatrómai Birodalom bukása korábbi, mint a birodalom kettéválása.",
          "instruction": "",
          "explanation": "Hamis: a kettéválás 395, a bukás 476.",
          "difficulty": 2,
          "points": 1,
          "order": 8,
          "chronologyEvent": 1120,
          "options": [
            {
              "id": 3056,
              "text": "Igaz",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3057,
              "text": "Hamis",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1001
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1211,
      "topicId": 1002,
      "slug": "egyetemes-kozepkor-kora-es-egyhaz",
      "title": "Egyetemes középkor - kora középkor és egyház",
      "description": "Frank Birodalom, iszlám és egyháztörténeti alapévszámok.",
      "type": "evszam",
      "difficulty": "konnyu",
      "timeLimitSec": 900,
      "questions": [
        {
          "id": 2026,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a Nyugatrómai Birodalom bukásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A Nyugatrómai Birodalom bukása évszáma: 476.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1201,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4007,
              "text": "476",
              "number": 476,
              "era": "CE",
              "normalized": "476"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2027,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben történt a hidzsra?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 622.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1202,
          "options": [
            {
              "id": 3058,
              "text": "476",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3059,
              "text": "622",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3060,
              "text": "732",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3061,
              "text": "800",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2028,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A poitiers-i csata 732-ben volt.",
          "instruction": "",
          "explanation": "Igaz: Martell Károly 732-ben állította meg az arabokat.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1203,
          "options": [
            {
              "id": 3062,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3063,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2029,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Mikor koronázták császárrá Nagy Károlyt?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 800.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1204,
          "options": [
            {
              "id": 3064,
              "text": "732",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3065,
              "text": "800",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3066,
              "text": "843",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3067,
              "text": "962",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2030,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a verduni szerződés évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A verduni szerződés évszáma: 843.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1205,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4008,
              "text": "843",
              "number": 843,
              "era": "CE",
              "normalized": "843"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2031,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évszám kapcsolódik I. Ottó császárrá koronázásához?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 962.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1206,
          "options": [
            {
              "id": 3068,
              "text": "843",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3069,
              "text": "962",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3070,
              "text": "1054",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3071,
              "text": "1095",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2032,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be az egyházszakadás évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Az egyházszakadás évszáma: 1054.",
          "difficulty": 1,
          "points": 1,
          "order": 7,
          "chronologyEvent": 1207,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4009,
              "text": "1054",
              "number": 1054,
              "era": "CE",
              "normalized": "1054"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2033,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a kora középkor eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: A Nyugatrómai Birodalom bukása → A hidzsra → A poitiers-i csata → Nagy Károly császárrá koronázása → A verduni szerződés → I. Ottó császárrá koronázása.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3072,
              "text": "A Nyugatrómai Birodalom bukása",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3073,
              "text": "A hidzsra",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3074,
              "text": "A poitiers-i csata",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3075,
              "text": "Nagy Károly császárrá koronázása",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3076,
              "text": "A verduni szerződés",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3077,
              "text": "I. Ottó császárrá koronázása",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2034,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket és az évszámokat!",
          "instruction": "",
          "explanation": "Párok: A hidzsra = 622 | Nagy Károly császárrá koronázása = 800 | A verduni szerződés = 843 | I. Ottó császárrá koronázása = 962.",
          "difficulty": 3,
          "points": 2,
          "order": 9,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5013,
              "left": "A hidzsra",
              "right": "622",
              "order": 1
            },
            {
              "id": 5014,
              "left": "Nagy Károly császárrá koronázása",
              "right": "800",
              "order": 2
            },
            {
              "id": 5015,
              "left": "A verduni szerződés",
              "right": "843",
              "order": 3
            },
            {
              "id": 5016,
              "left": "I. Ottó császárrá koronázása",
              "right": "962",
              "order": 4
            }
          ],
          "topicId": 1002
        }
      ],
      "questionCount": 9
    },
    {
      "id": 1212,
      "topicId": 1002,
      "slug": "egyetemes-kozepkor-erett-kozepkor",
      "title": "Egyetemes középkor - érett középkor",
      "description": "Keresztes hadjáratok, rendi fejlődés és késő középkori fordulópontok.",
      "type": "evszam",
      "difficulty": "kozepes",
      "timeLimitSec": 960,
      "questions": [
        {
          "id": 2035,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben hangzott el a clermont-i felhívás az első keresztes hadjáratra?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1095.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1208,
          "options": [
            {
              "id": 3078,
              "text": "1054",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3079,
              "text": "1095",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3080,
              "text": "1215",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3081,
              "text": "1302",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2036,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a Magna Carta kiadásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A Magna Carta kiadása évszáma: 1215.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1209,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4010,
              "text": "1215",
              "number": 1215,
              "era": "CE",
              "normalized": "1215"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2037,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A francia rendi gyűlést először 1302-ben hívták össze.",
          "instruction": "",
          "explanation": "Igaz: IV. (Szép) Fülöp 1302-ben hívta össze.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1210,
          "options": [
            {
              "id": 3082,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3083,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2038,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Konstantinápoly elestének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Konstantinápoly eleste évszáma: 1453.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1211,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4011,
              "text": "1453",
              "number": 1453,
              "era": "CE",
              "normalized": "1453"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2039,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évhez kötjük a keleti és nyugati kereszténység végleges szakadását?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1054.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1207,
          "options": [
            {
              "id": 3084,
              "text": "962",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3085,
              "text": "1054",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3086,
              "text": "1095",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3087,
              "text": "1215",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2040,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Konstantinápoly eleste későbbi, mint a Magna Carta kiadása.",
          "instruction": "",
          "explanation": "Igaz: 1215 után, 1453-ban történt.",
          "difficulty": 1,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1211,
          "options": [
            {
              "id": 3088,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3089,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2041,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Rendezd időrendbe az alábbi középkori eseményeket!",
          "instruction": "",
          "explanation": "Helyes sorrend: Az egyházszakadás → A clermont-i zsinat → A Magna Carta kiadása → A francia rendi gyűlés első összehívása → Konstantinápoly eleste.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3090,
              "text": "Az egyházszakadás",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3091,
              "text": "A clermont-i zsinat",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3092,
              "text": "A Magna Carta kiadása",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3093,
              "text": "A francia rendi gyűlés első összehívása",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3094,
              "text": "Konstantinápoly eleste",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2042,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az érett középkor eseményeit az évszámokkal!",
          "instruction": "",
          "explanation": "Párok: Az egyházszakadás = 1054 | A clermont-i zsinat = 1095 | A Magna Carta kiadása = 1215 | Konstantinápoly eleste = 1453.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5017,
              "left": "Az egyházszakadás",
              "right": "1054",
              "order": 1
            },
            {
              "id": 5018,
              "left": "A clermont-i zsinat",
              "right": "1095",
              "order": 2
            },
            {
              "id": 5019,
              "left": "A Magna Carta kiadása",
              "right": "1215",
              "order": 3
            },
            {
              "id": 5020,
              "left": "Konstantinápoly eleste",
              "right": "1453",
              "order": 4
            }
          ],
          "topicId": 1002
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1213,
      "topicId": 1002,
      "slug": "egyetemes-kozepkor-nagy-evszamteszt",
      "title": "Egyetemes középkor - nagy évszámteszt",
      "description": "A teljes egyetemes középkor legfontosabb évszámai egyben.",
      "type": "evszam",
      "difficulty": "nehez",
      "timeLimitSec": 1500,
      "questions": [
        {
          "id": 2043,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évszám tekinthető a középkor kezdetének a Nyugatrómai Birodalom bukása alapján?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 476.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1201,
          "options": [
            {
              "id": 3095,
              "text": "395",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3096,
              "text": "476",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3097,
              "text": "622",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3098,
              "text": "800",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2044,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Nagy Károly császárrá koronázásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Nagy Károly császárrá koronázása évszáma: 800.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1204,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4012,
              "text": "800",
              "number": 800,
              "era": "CE",
              "normalized": "800"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2045,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be az egyházszakadás évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Az egyházszakadás évszáma: 1054.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1207,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4013,
              "text": "1054",
              "number": 1054,
              "era": "CE",
              "normalized": "1054"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2046,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben adták ki a Magna Cartát?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1215.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1209,
          "options": [
            {
              "id": 3099,
              "text": "1095",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3100,
              "text": "1215",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3101,
              "text": "1302",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3102,
              "text": "1453",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2047,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évszám kapcsolódik a francia rendi gyűlés első összehívásához?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1302.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1210,
          "options": [
            {
              "id": 3103,
              "text": "1215",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3104,
              "text": "1302",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3105,
              "text": "1387",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3106,
              "text": "1453",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2048,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Konstantinápoly elestének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Konstantinápoly eleste évszáma: 1453.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1211,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4014,
              "text": "1453",
              "number": 1453,
              "era": "CE",
              "normalized": "1453"
            }
          ],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2049,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A verduni szerződés korábbi, mint I. Ottó császárrá koronázása.",
          "instruction": "",
          "explanation": "Igaz: 843 megelőzi a 962-es koronázást.",
          "difficulty": 1,
          "points": 1,
          "order": 7,
          "chronologyEvent": 1205,
          "options": [
            {
              "id": 3107,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3108,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2050,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a teljes középkor fontos fordulópontjait!",
          "instruction": "",
          "explanation": "Helyes sorrend: A Nyugatrómai Birodalom bukása → A hidzsra → Nagy Károly császárrá koronázása → Az egyházszakadás → A Magna Carta kiadása → Konstantinápoly eleste.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3109,
              "text": "A Nyugatrómai Birodalom bukása",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3110,
              "text": "A hidzsra",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3111,
              "text": "Nagy Károly császárrá koronázása",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3112,
              "text": "Az egyházszakadás",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3113,
              "text": "A Magna Carta kiadása",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3114,
              "text": "Konstantinápoly eleste",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1002
        },
        {
          "id": 2051,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd a kiemelt eseményeket a hozzájuk tartozó évszámokkal!",
          "instruction": "",
          "explanation": "Párok: A Nyugatrómai Birodalom bukása = 476 | Nagy Károly császárrá koronázása = 800 | Az egyházszakadás = 1054 | A Magna Carta kiadása = 1215 | Konstantinápoly eleste = 1453.",
          "difficulty": 3,
          "points": 2,
          "order": 9,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5021,
              "left": "A Nyugatrómai Birodalom bukása",
              "right": "476",
              "order": 1
            },
            {
              "id": 5022,
              "left": "Nagy Károly császárrá koronázása",
              "right": "800",
              "order": 2
            },
            {
              "id": 5023,
              "left": "Az egyházszakadás",
              "right": "1054",
              "order": 3
            },
            {
              "id": 5024,
              "left": "A Magna Carta kiadása",
              "right": "1215",
              "order": 4
            },
            {
              "id": 5025,
              "left": "Konstantinápoly eleste",
              "right": "1453",
              "order": 5
            }
          ],
          "topicId": 1002
        }
      ],
      "questionCount": 9
    },
    {
      "id": 1214,
      "topicId": 1003,
      "slug": "magyar-kozepkor-honfoglalas-es-allamalapitas",
      "title": "Magyar középkor - honfoglalás és államalapítás",
      "description": "Őstörténet, honfoglalás és az államalapítás alapévszámai.",
      "type": "evszam",
      "difficulty": "konnyu",
      "timeLimitSec": 960,
      "questions": [
        {
          "id": 2052,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a honfoglalás évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A honfoglalás évszáma: 895.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1212,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4015,
              "text": "895",
              "number": 895,
              "era": "CE",
              "normalized": "895"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2053,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben volt a pozsonyi csata?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 907.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1213,
          "options": [
            {
              "id": 3115,
              "text": "895",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3116,
              "text": "907",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3117,
              "text": "955",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3118,
              "text": "972",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2054,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Az augsburgi vereség 955-ben történt.",
          "instruction": "",
          "explanation": "Igaz: 955-ben zárult le a kalandozások kora.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1214,
          "options": [
            {
              "id": 3119,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3120,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2055,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Géza fejedelemségének kezdetét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Géza fejedelemségének kezdete évszáma: 972.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1215,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4016,
              "text": "972",
              "number": 972,
              "era": "CE",
              "normalized": "972"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2056,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben koronázták meg I. (Szent) Istvánt?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1000.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1216,
          "options": [
            {
              "id": 3121,
              "text": "972",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3122,
              "text": "997",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3123,
              "text": "1000",
              "isCorrect": true,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3124,
              "text": "1095",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2057,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Könyves Kálmán trónra lépésének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Könyves Kálmán trónra lépése évszáma: 1095.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1217,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4017,
              "text": "1095",
              "number": 1095,
              "era": "CE",
              "normalized": "1095"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2058,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a honfoglalástól az államalapításig vezető eseményeket!",
          "instruction": "",
          "explanation": "Helyes sorrend: A honfoglalás → A pozsonyi csata → Az augsburgi vereség → Géza fejedelemségének kezdete → I. (Szent) István koronázása.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3125,
              "text": "A honfoglalás",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3126,
              "text": "A pozsonyi csata",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3127,
              "text": "Az augsburgi vereség",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3128,
              "text": "Géza fejedelemségének kezdete",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3129,
              "text": "I. (Szent) István koronázása",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2059,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket és az évszámokat!",
          "instruction": "",
          "explanation": "Párok: A honfoglalás = 895 | A pozsonyi csata = 907 | Az augsburgi vereség = 955 | I. (Szent) István koronázása = 1000.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5026,
              "left": "A honfoglalás",
              "right": "895",
              "order": 1
            },
            {
              "id": 5027,
              "left": "A pozsonyi csata",
              "right": "907",
              "order": 2
            },
            {
              "id": 5028,
              "left": "Az augsburgi vereség",
              "right": "955",
              "order": 3
            },
            {
              "id": 5029,
              "left": "I. (Szent) István koronázása",
              "right": "1000",
              "order": 4
            }
          ],
          "topicId": 1003
        },
        {
          "id": 2060,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? István koronázása későbbi, mint Géza fejedelemségének kezdete.",
          "instruction": "",
          "explanation": "Igaz: Géza 972, István koronázása 1000.",
          "difficulty": 1,
          "points": 1,
          "order": 9,
          "chronologyEvent": 1216,
          "options": [
            {
              "id": 3130,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3131,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        }
      ],
      "questionCount": 9
    },
    {
      "id": 1215,
      "topicId": 1003,
      "slug": "magyar-kozepkor-arpadok-es-anjouk",
      "title": "Magyar középkor - Árpádok és Anjouk",
      "description": "Aranybulla, tatárjárás és az Anjou-kor legfontosabb dátumai.",
      "type": "evszam",
      "difficulty": "kozepes",
      "timeLimitSec": 1080,
      "questions": [
        {
          "id": 2061,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben adták ki az Aranybullát?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1222.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1218,
          "options": [
            {
              "id": 3132,
              "text": "1205",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3133,
              "text": "1222",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3134,
              "text": "1241",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3135,
              "text": "1301",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2062,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a tatárjárás kezdetének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A tatárjárás kezdete évszáma: 1241.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1219,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4018,
              "text": "1241",
              "number": 1241,
              "era": "CE",
              "normalized": "1241"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2063,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Az Árpád-ház 1301-ben halt ki.",
          "instruction": "",
          "explanation": "Igaz: III. András halálával 1301-ben kihalt az Árpád-ház férfiága.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1220,
          "options": [
            {
              "id": 3136,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3137,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2064,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be I. Károly harmadik koronázásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "I. Károly harmadik koronázása évszáma: 1310.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1221,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4019,
              "text": "1310",
              "number": 1310,
              "era": "CE",
              "normalized": "1310"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2065,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben tartották a visegrádi királytalálkozót?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1335.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1222,
          "options": [
            {
              "id": 3138,
              "text": "1310",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3139,
              "text": "1335",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3140,
              "text": "1351",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3141,
              "text": "1387",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2066,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be I. (Nagy) Lajos törvényeinek évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "I. (Nagy) Lajos törvényei évszáma: 1351.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1223,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4020,
              "text": "1351",
              "number": 1351,
              "era": "CE",
              "normalized": "1351"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2067,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Rendezd időrendbe az Árpád-kor és az Anjou-kor eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: Az Aranybulla kiadása → A tatárjárás kezdete → Az Árpád-ház kihalása → I. Károly harmadik koronázása → A visegrádi királytalálkozó → I. (Nagy) Lajos törvényei.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3142,
              "text": "Az Aranybulla kiadása",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3143,
              "text": "A tatárjárás kezdete",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3144,
              "text": "Az Árpád-ház kihalása",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3145,
              "text": "I. Károly harmadik koronázása",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3146,
              "text": "A visegrádi királytalálkozó",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3147,
              "text": "I. (Nagy) Lajos törvényei",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2068,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket az évszámaikkal!",
          "instruction": "",
          "explanation": "Párok: Az Aranybulla kiadása = 1222 | A tatárjárás kezdete = 1241 | I. Károly harmadik koronázása = 1310 | A visegrádi királytalálkozó = 1335 | I. (Nagy) Lajos törvényei = 1351.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5030,
              "left": "Az Aranybulla kiadása",
              "right": "1222",
              "order": 1
            },
            {
              "id": 5031,
              "left": "A tatárjárás kezdete",
              "right": "1241",
              "order": 2
            },
            {
              "id": 5032,
              "left": "I. Károly harmadik koronázása",
              "right": "1310",
              "order": 3
            },
            {
              "id": 5033,
              "left": "A visegrádi királytalálkozó",
              "right": "1335",
              "order": 4
            },
            {
              "id": 5034,
              "left": "I. (Nagy) Lajos törvényei",
              "right": "1351",
              "order": 5
            }
          ],
          "topicId": 1003
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1216,
      "topicId": 1003,
      "slug": "magyar-kozepkor-zsigmond-es-hunyadiak",
      "title": "Magyar középkor - Zsigmond és a Hunyadiak",
      "description": "Késő középkori magyar évszámok Zsigmondtól Mátyás haláláig.",
      "type": "evszam",
      "difficulty": "nehez",
      "timeLimitSec": 1200,
      "questions": [
        {
          "id": 2069,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Luxemburgi Zsigmond trónra lépésének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Luxemburgi Zsigmond trónra lépése évszáma: 1387.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1224,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4021,
              "text": "1387",
              "number": 1387,
              "era": "CE",
              "normalized": "1387"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2070,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben volt a várnai csata?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1444.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1225,
          "options": [
            {
              "id": 3148,
              "text": "1387",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3149,
              "text": "1444",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3150,
              "text": "1456",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3151,
              "text": "1458",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2071,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a nándorfehérvári diadal évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A nándorfehérvári diadal évszáma: 1456.",
          "difficulty": 1,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1226,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4022,
              "text": "1456",
              "number": 1456,
              "era": "CE",
              "normalized": "1456"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2072,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Hunyadi Mátyást 1458-ban választották királlyá.",
          "instruction": "",
          "explanation": "Igaz: 1458 elején választották királlyá a Duna jegén.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1227,
          "options": [
            {
              "id": 3152,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3153,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2073,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Mátyás adóreformjának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Mátyás adóreformja évszáma: 1467.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1228,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4023,
              "text": "1467",
              "number": 1467,
              "era": "CE",
              "normalized": "1467"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2074,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben zajlott a kenyérmezei csata?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1479.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1229,
          "options": [
            {
              "id": 3154,
              "text": "1467",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3155,
              "text": "1479",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3156,
              "text": "1485",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3157,
              "text": "1490",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2075,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Bécs elfoglalásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Bécs elfoglalása évszáma: 1485.",
          "difficulty": 2,
          "points": 1,
          "order": 7,
          "chronologyEvent": 1230,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4024,
              "text": "1485",
              "number": 1485,
              "era": "CE",
              "normalized": "1485"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2076,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Mátyás halálának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Mátyás halála évszáma: 1490.",
          "difficulty": 2,
          "points": 1,
          "order": 8,
          "chronologyEvent": 1231,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4025,
              "text": "1490",
              "number": 1490,
              "era": "CE",
              "normalized": "1490"
            }
          ],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2077,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe Zsigmond és a Hunyadiak korának eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: Luxemburgi Zsigmond trónra lépése → A várnai csata → A nándorfehérvári diadal → Hunyadi Mátyás királlyá választása → Mátyás adóreformja → A kenyérmezei csata → Bécs elfoglalása → Mátyás halála.",
          "difficulty": 3,
          "points": 2,
          "order": 9,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3158,
              "text": "Luxemburgi Zsigmond trónra lépése",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3159,
              "text": "A várnai csata",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3160,
              "text": "A nándorfehérvári diadal",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3161,
              "text": "Hunyadi Mátyás királlyá választása",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3162,
              "text": "Mátyás adóreformja",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3163,
              "text": "A kenyérmezei csata",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            },
            {
              "id": 3164,
              "text": "Bécs elfoglalása",
              "isCorrect": false,
              "correctOrder": 7,
              "order": 7
            },
            {
              "id": 3165,
              "text": "Mátyás halála",
              "isCorrect": false,
              "correctOrder": 8,
              "order": 8
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1003
        },
        {
          "id": 2078,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket és az évszámokat!",
          "instruction": "",
          "explanation": "Párok: A várnai csata = 1444 | A nándorfehérvári diadal = 1456 | Hunyadi Mátyás királlyá választása = 1458 | Bécs elfoglalása = 1485 | Mátyás halála = 1490.",
          "difficulty": 3,
          "points": 2,
          "order": 10,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5035,
              "left": "A várnai csata",
              "right": "1444",
              "order": 1
            },
            {
              "id": 5036,
              "left": "A nándorfehérvári diadal",
              "right": "1456",
              "order": 2
            },
            {
              "id": 5037,
              "left": "Hunyadi Mátyás királlyá választása",
              "right": "1458",
              "order": 3
            },
            {
              "id": 5038,
              "left": "Bécs elfoglalása",
              "right": "1485",
              "order": 4
            },
            {
              "id": 5039,
              "left": "Mátyás halála",
              "right": "1490",
              "order": 5
            }
          ],
          "topicId": 1003
        }
      ],
      "questionCount": 10
    },
    {
      "id": 1217,
      "topicId": 1004,
      "slug": "egyetemes-kora-ujkor-felfedezesek-es-reformacio",
      "title": "Kora újkor - felfedezések és reformáció",
      "description": "A földrajzi felfedezések és a reformáció alapévszámai.",
      "type": "evszam",
      "difficulty": "konnyu",
      "timeLimitSec": 960,
      "questions": [
        {
          "id": 2079,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Kolumbusz első útjának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Kolumbusz első útja évszáma: 1492.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1232,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4026,
              "text": "1492",
              "number": 1492,
              "era": "CE",
              "normalized": "1492"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2080,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben lépett fel Luther a 95 tétellel?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1517.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1233,
          "options": [
            {
              "id": 3166,
              "text": "1492",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3167,
              "text": "1517",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3168,
              "text": "1545",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3169,
              "text": "1555",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2081,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a tridenti zsinat kezdetének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A tridenti zsinat kezdete évszáma: 1545.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1234,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4027,
              "text": "1545",
              "number": 1545,
              "era": "CE",
              "normalized": "1545"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2082,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Az augsburgi vallásbékét 1555-ben kötötték.",
          "instruction": "",
          "explanation": "Igaz: 1555-ben rögzítették a cuius regio, eius religio elvét.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1235,
          "options": [
            {
              "id": 3170,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3171,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2083,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben szenvedett vereséget a spanyol armada?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1588.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1236,
          "options": [
            {
              "id": 3172,
              "text": "1555",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3173,
              "text": "1588",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3174,
              "text": "1618",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3175,
              "text": "1648",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2084,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a felfedezések és reformáció eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: Kolumbusz első útja → Luther fellépése → A tridenti zsinat kezdete → Az augsburgi vallásbéke → A spanyol armada veresége.",
          "difficulty": 3,
          "points": 2,
          "order": 6,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3176,
              "text": "Kolumbusz első útja",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3177,
              "text": "Luther fellépése",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3178,
              "text": "A tridenti zsinat kezdete",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3179,
              "text": "Az augsburgi vallásbéke",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3180,
              "text": "A spanyol armada veresége",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2085,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket és az évszámokat!",
          "instruction": "",
          "explanation": "Párok: Kolumbusz első útja = 1492 | Luther fellépése = 1517 | A tridenti zsinat kezdete = 1545 | Az augsburgi vallásbéke = 1555.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5040,
              "left": "Kolumbusz első útja",
              "right": "1492",
              "order": 1
            },
            {
              "id": 5041,
              "left": "Luther fellépése",
              "right": "1517",
              "order": 2
            },
            {
              "id": 5042,
              "left": "A tridenti zsinat kezdete",
              "right": "1545",
              "order": 3
            },
            {
              "id": 5043,
              "left": "Az augsburgi vallásbéke",
              "right": "1555",
              "order": 4
            }
          ],
          "topicId": 1004
        },
        {
          "id": 2086,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Kolumbusz útja korábbi, mint Luther fellépése.",
          "instruction": "",
          "explanation": "Igaz: 1492 megelőzi az 1517-es fellépést.",
          "difficulty": 1,
          "points": 1,
          "order": 8,
          "chronologyEvent": 1232,
          "options": [
            {
              "id": 3181,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3182,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1218,
      "topicId": 1004,
      "slug": "egyetemes-kora-ujkor-alkotmanyossag-es-felvilagosodas",
      "title": "Kora újkor - alkotmányosság és felvilágosodás",
      "description": "Anglia, Franciaország és az USA kulcsévszámai.",
      "type": "evszam",
      "difficulty": "kozepes",
      "timeLimitSec": 1080,
      "questions": [
        {
          "id": 2087,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be az angol polgárháború kezdetének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Az angol polgárháború kezdete évszáma: 1642.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1238,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4028,
              "text": "1642",
              "number": 1642,
              "era": "CE",
              "normalized": "1642"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2088,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben végezték ki I. Károlyt?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1649.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1240,
          "options": [
            {
              "id": 3183,
              "text": "1642",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3184,
              "text": "1648",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3185,
              "text": "1649",
              "isCorrect": true,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3186,
              "text": "1661",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2089,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be XIV. Lajos önálló uralkodásának kezdetét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "XIV. Lajos önálló uralkodásának kezdete évszáma: 1661.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1241,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4029,
              "text": "1661",
              "number": 1661,
              "era": "CE",
              "normalized": "1661"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2090,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A Bill of Rights 1689-ben született.",
          "instruction": "",
          "explanation": "Igaz: 1689 az angol alkotmányos monarchia egyik alapéve.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1242,
          "options": [
            {
              "id": 3187,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3188,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2091,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben fogadták el a Függetlenségi Nyilatkozatot?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1776.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1249,
          "options": [
            {
              "id": 3189,
              "text": "1689",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3190,
              "text": "1776",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3191,
              "text": "1787",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3192,
              "text": "1789",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2092,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be az USA alkotmányának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Az USA alkotmánya évszáma: 1787.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1250,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4030,
              "text": "1787",
              "number": 1787,
              "era": "CE",
              "normalized": "1787"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2093,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Rendezd időrendbe az alkotmányosság és felvilágosodás korszakának eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: Az angol polgárháború kezdete → I. Károly kivégzése → XIV. Lajos önálló uralkodásának kezdete → Bill of Rights → A Függetlenségi Nyilatkozat → Az USA alkotmánya.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3193,
              "text": "Az angol polgárháború kezdete",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3194,
              "text": "I. Károly kivégzése",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3195,
              "text": "XIV. Lajos önálló uralkodásának kezdete",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3196,
              "text": "Bill of Rights",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3197,
              "text": "A Függetlenségi Nyilatkozat",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3198,
              "text": "Az USA alkotmánya",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2094,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket a megfelelő évszámokkal!",
          "instruction": "",
          "explanation": "Párok: I. Károly kivégzése = 1649 | XIV. Lajos önálló uralkodásának kezdete = 1661 | Bill of Rights = 1689 | A Függetlenségi Nyilatkozat = 1776 | Az USA alkotmánya = 1787.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5044,
              "left": "I. Károly kivégzése",
              "right": "1649",
              "order": 1
            },
            {
              "id": 5045,
              "left": "XIV. Lajos önálló uralkodásának kezdete",
              "right": "1661",
              "order": 2
            },
            {
              "id": 5046,
              "left": "Bill of Rights",
              "right": "1689",
              "order": 3
            },
            {
              "id": 5047,
              "left": "A Függetlenségi Nyilatkozat",
              "right": "1776",
              "order": 4
            },
            {
              "id": 5048,
              "left": "Az USA alkotmánya",
              "right": "1787",
              "order": 5
            }
          ],
          "topicId": 1004
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1219,
      "topicId": 1004,
      "slug": "egyetemes-kora-ujkor-nagyhatalmi-konfliktusok",
      "title": "Kora újkor - nagyhatalmi konfliktusok",
      "description": "A 17-18. századi nagyhatalmi háborúk évszámai.",
      "type": "evszam",
      "difficulty": "nehez",
      "timeLimitSec": 1200,
      "questions": [
        {
          "id": 2095,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a harmincéves háború kezdetének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A harmincéves háború kezdete évszáma: 1618.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1237,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4031,
              "text": "1618",
              "number": 1618,
              "era": "CE",
              "normalized": "1618"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2096,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben zárta le a vesztfáliai béke a harmincéves háborút?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1648.",
          "difficulty": 2,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1239,
          "options": [
            {
              "id": 3199,
              "text": "1642",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3200,
              "text": "1648",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3201,
              "text": "1701",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3202,
              "text": "1713",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2097,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a spanyol örökösödési háború kezdetét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A spanyol örökösödési háború kezdete évszáma: 1701.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1243,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4032,
              "text": "1701",
              "number": 1701,
              "era": "CE",
              "normalized": "1701"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2098,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Az utrechti béke 1713-ban zárta le a spanyol örökösödési háborút.",
          "instruction": "",
          "explanation": "Igaz: 1713-ban kötötték meg az utrechti békét.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1244,
          "options": [
            {
              "id": 3203,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3204,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2099,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be az osztrák örökösödési háború kezdetét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Az osztrák örökösödési háború kezdete évszáma: 1740.",
          "difficulty": 2,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1245,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4033,
              "text": "1740",
              "number": 1740,
              "era": "CE",
              "normalized": "1740"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2100,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a hétéves háború kezdetének évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A hétéves háború kezdete évszáma: 1756.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1247,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4034,
              "text": "1756",
              "number": 1756,
              "era": "CE",
              "normalized": "1756"
            }
          ],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2101,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben zárult le a hétéves háború?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1763.",
          "difficulty": 2,
          "points": 1,
          "order": 7,
          "chronologyEvent": 1248,
          "options": [
            {
              "id": 3205,
              "text": "1748",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3206,
              "text": "1756",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3207,
              "text": "1763",
              "isCorrect": true,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3208,
              "text": "1776",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2102,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a 17-18. századi nagyhatalmi konfliktusok eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: A harmincéves háború kezdete → Vesztfáliai béke → A spanyol örökösödési háború kezdete → Az utrechti béke → Az osztrák örökösödési háború kezdete → A hétéves háború kezdete → A hétéves háborút lezáró békék.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3209,
              "text": "A harmincéves háború kezdete",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3210,
              "text": "Vesztfáliai béke",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3211,
              "text": "A spanyol örökösödési háború kezdete",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3212,
              "text": "Az utrechti béke",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3213,
              "text": "Az osztrák örökösödési háború kezdete",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3214,
              "text": "A hétéves háború kezdete",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            },
            {
              "id": 3215,
              "text": "A hétéves háborút lezáró békék",
              "isCorrect": false,
              "correctOrder": 7,
              "order": 7
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1004
        },
        {
          "id": 2103,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd a háborúkat és békéket az évszámokkal!",
          "instruction": "",
          "explanation": "Párok: A harmincéves háború kezdete = 1618 | Vesztfáliai béke = 1648 | A spanyol örökösödési háború kezdete = 1701 | Az utrechti béke = 1713 | Az osztrák örökösödési háború kezdete = 1740 | A hétéves háború kezdete = 1756 | A hétéves háborút lezáró békék = 1763.",
          "difficulty": 3,
          "points": 2,
          "order": 9,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5049,
              "left": "A harmincéves háború kezdete",
              "right": "1618",
              "order": 1
            },
            {
              "id": 5050,
              "left": "Vesztfáliai béke",
              "right": "1648",
              "order": 2
            },
            {
              "id": 5051,
              "left": "A spanyol örökösödési háború kezdete",
              "right": "1701",
              "order": 3
            },
            {
              "id": 5052,
              "left": "Az utrechti béke",
              "right": "1713",
              "order": 4
            },
            {
              "id": 5053,
              "left": "Az osztrák örökösödési háború kezdete",
              "right": "1740",
              "order": 5
            },
            {
              "id": 5054,
              "left": "A hétéves háború kezdete",
              "right": "1756",
              "order": 6
            },
            {
              "id": 5055,
              "left": "A hétéves háborút lezáró békék",
              "right": "1763",
              "order": 7
            }
          ],
          "topicId": 1004
        }
      ],
      "questionCount": 9
    },
    {
      "id": 1220,
      "topicId": 1005,
      "slug": "magyar-kora-ujkor-harom-reszre-szakadas",
      "title": "Magyar kora újkor - három részre szakadás",
      "description": "Mohácstól a három országrész megszilárdulásáig.",
      "type": "evszam",
      "difficulty": "konnyu",
      "timeLimitSec": 960,
      "questions": [
        {
          "id": 2104,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a mohácsi csata évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A mohácsi csata évszáma: 1526.",
          "difficulty": 1,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1251,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4035,
              "text": "1526",
              "number": 1526,
              "era": "CE",
              "normalized": "1526"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2105,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben foglalták el a törökök Budát?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1541.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1252,
          "options": [
            {
              "id": 3216,
              "text": "1526",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3217,
              "text": "1541",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3218,
              "text": "1568",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3219,
              "text": "1570",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2106,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a drinápolyi béke évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A drinápolyi béke évszáma: 1568.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1253,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4036,
              "text": "1568",
              "number": 1568,
              "era": "CE",
              "normalized": "1568"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2107,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A speyeri szerződést 1570-ben kötötték.",
          "instruction": "",
          "explanation": "Igaz: 1570-ben rendezték János Zsigmond státuszát.",
          "difficulty": 1,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1254,
          "options": [
            {
              "id": 3220,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3221,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2108,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évszám jelöli az ország három részre szakadásához vezető döntő vereséget?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1526.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1251,
          "options": [
            {
              "id": 3222,
              "text": "1490",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3223,
              "text": "1526",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3224,
              "text": "1541",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3225,
              "text": "1568",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2109,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a három részre szakadás fontos eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: A mohácsi csata → Buda török elfoglalása → A drinápolyi béke → A speyeri szerződés.",
          "difficulty": 3,
          "points": 2,
          "order": 6,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3226,
              "text": "A mohácsi csata",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3227,
              "text": "Buda török elfoglalása",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3228,
              "text": "A drinápolyi béke",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3229,
              "text": "A speyeri szerződés",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2110,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket az évszámokkal!",
          "instruction": "",
          "explanation": "Párok: A mohácsi csata = 1526 | Buda török elfoglalása = 1541 | A drinápolyi béke = 1568 | A speyeri szerződés = 1570.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5056,
              "left": "A mohácsi csata",
              "right": "1526",
              "order": 1
            },
            {
              "id": 5057,
              "left": "Buda török elfoglalása",
              "right": "1541",
              "order": 2
            },
            {
              "id": 5058,
              "left": "A drinápolyi béke",
              "right": "1568",
              "order": 3
            },
            {
              "id": 5059,
              "left": "A speyeri szerződés",
              "right": "1570",
              "order": 4
            }
          ],
          "topicId": 1005
        },
        {
          "id": 2111,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? Buda elvesztése későbbi, mint a mohácsi csata.",
          "instruction": "",
          "explanation": "Igaz: Mohács 1526, Buda 1541.",
          "difficulty": 1,
          "points": 1,
          "order": 8,
          "chronologyEvent": 1252,
          "options": [
            {
              "id": 3230,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3231,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        }
      ],
      "questionCount": 8
    },
    {
      "id": 1221,
      "topicId": 1005,
      "slug": "magyar-kora-ujkor-erdely-es-rakoczi",
      "title": "Magyar kora újkor - Erdély és Rákóczi",
      "description": "Bethlen Gábortól a szatmári békéig vezető évszámok.",
      "type": "evszam",
      "difficulty": "kozepes",
      "timeLimitSec": 1080,
      "questions": [
        {
          "id": 2112,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a bécsi béke évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A bécsi béke évszáma: 1606.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1255,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4037,
              "text": "1606",
              "number": 1606,
              "era": "CE",
              "normalized": "1606"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2113,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben választották fejedelemmé Bethlen Gábort?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1613.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1256,
          "options": [
            {
              "id": 3232,
              "text": "1606",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3233,
              "text": "1613",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3234,
              "text": "1645",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3235,
              "text": "1664",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2114,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a linzi béke évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A linzi béke évszáma: 1645.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1257,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4038,
              "text": "1645",
              "number": 1645,
              "era": "CE",
              "normalized": "1645"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2115,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben kötötték meg a vasvári békét?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1664.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1258,
          "options": [
            {
              "id": 3236,
              "text": "1645",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3237,
              "text": "1664",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3238,
              "text": "1686",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3239,
              "text": "1699",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2116,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be Buda visszafoglalásának évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Buda visszafoglalása évszáma: 1686.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1259,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4039,
              "text": "1686",
              "number": 1686,
              "era": "CE",
              "normalized": "1686"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2117,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a karlócai béke évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A karlócai béke évszáma: 1699.",
          "difficulty": 2,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1260,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4040,
              "text": "1699",
              "number": 1699,
              "era": "CE",
              "normalized": "1699"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2118,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben kezdődött a Rákóczi-szabadságharc?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1703.",
          "difficulty": 1,
          "points": 1,
          "order": 7,
          "chronologyEvent": 1261,
          "options": [
            {
              "id": 3240,
              "text": "1699",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3241,
              "text": "1703",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3242,
              "text": "1711",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3243,
              "text": "1723",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2119,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A szatmári békét 1711-ben kötötték meg.",
          "instruction": "",
          "explanation": "Igaz: 1711 zárta le a szabadságharcot.",
          "difficulty": 1,
          "points": 1,
          "order": 8,
          "chronologyEvent": 1262,
          "options": [
            {
              "id": 3244,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3245,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2120,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Rendezd időrendbe Erdély és a szabadságharc fontos eseményeit!",
          "instruction": "",
          "explanation": "Helyes sorrend: A bécsi béke → Bethlen Gábor fejedelemmé választása → A linzi béke → A vasvári béke → Buda visszafoglalása → A karlócai béke → A Rákóczi-szabadságharc kezdete → A szatmári béke.",
          "difficulty": 3,
          "points": 2,
          "order": 9,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3246,
              "text": "A bécsi béke",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3247,
              "text": "Bethlen Gábor fejedelemmé választása",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3248,
              "text": "A linzi béke",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3249,
              "text": "A vasvári béke",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3250,
              "text": "Buda visszafoglalása",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3251,
              "text": "A karlócai béke",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            },
            {
              "id": 3252,
              "text": "A Rákóczi-szabadságharc kezdete",
              "isCorrect": false,
              "correctOrder": 7,
              "order": 7
            },
            {
              "id": 3253,
              "text": "A szatmári béke",
              "isCorrect": false,
              "correctOrder": 8,
              "order": 8
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2121,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd az eseményeket a megfelelő évszámokkal!",
          "instruction": "",
          "explanation": "Párok: Bethlen Gábor fejedelemmé választása = 1613 | Buda visszafoglalása = 1686 | A karlócai béke = 1699 | A Rákóczi-szabadságharc kezdete = 1703 | A szatmári béke = 1711.",
          "difficulty": 3,
          "points": 2,
          "order": 10,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5060,
              "left": "Bethlen Gábor fejedelemmé választása",
              "right": "1613",
              "order": 1
            },
            {
              "id": 5061,
              "left": "Buda visszafoglalása",
              "right": "1686",
              "order": 2
            },
            {
              "id": 5062,
              "left": "A karlócai béke",
              "right": "1699",
              "order": 3
            },
            {
              "id": 5063,
              "left": "A Rákóczi-szabadságharc kezdete",
              "right": "1703",
              "order": 4
            },
            {
              "id": 5064,
              "left": "A szatmári béke",
              "right": "1711",
              "order": 5
            }
          ],
          "topicId": 1005
        }
      ],
      "questionCount": 10
    },
    {
      "id": 1222,
      "topicId": 1005,
      "slug": "magyar-kora-ujkor-habsburg-reformok",
      "title": "Magyar kora újkor - Habsburg reformok",
      "description": "18. századi magyarországi reformok és rendeletek évszámai.",
      "type": "evszam",
      "difficulty": "nehez",
      "timeLimitSec": 1080,
      "questions": [
        {
          "id": 2122,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a Pragmatica Sanctio évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A Pragmatica Sanctio évszáma: 1723.",
          "difficulty": 2,
          "points": 1,
          "order": 1,
          "chronologyEvent": 1263,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4041,
              "text": "1723",
              "number": 1723,
              "era": "CE",
              "normalized": "1723"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2123,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben lépett trónra Mária Terézia?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1740.",
          "difficulty": 1,
          "points": 1,
          "order": 2,
          "chronologyEvent": 1264,
          "options": [
            {
              "id": 3254,
              "text": "1711",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3255,
              "text": "1723",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3256,
              "text": "1740",
              "isCorrect": true,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3257,
              "text": "1767",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2124,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be az úrbéri rendelet évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "Az úrbéri rendelet évszáma: 1767.",
          "difficulty": 2,
          "points": 1,
          "order": 3,
          "chronologyEvent": 1265,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4042,
              "text": "1767",
              "number": 1767,
              "era": "CE",
              "normalized": "1767"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2125,
          "typeId": 1,
          "type": "single_choice",
          "typeLabel": "Egyválasztós",
          "text": "Melyik évben adták ki a Ratio Educationist?",
          "instruction": "Egy helyes évszám van.",
          "explanation": "Helyes évszám: 1777.",
          "difficulty": 2,
          "points": 1,
          "order": 4,
          "chronologyEvent": 1266,
          "options": [
            {
              "id": 3258,
              "text": "1767",
              "isCorrect": false,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3259,
              "text": "1777",
              "isCorrect": true,
              "correctOrder": null,
              "order": 2
            },
            {
              "id": 3260,
              "text": "1781",
              "isCorrect": false,
              "correctOrder": null,
              "order": 3
            },
            {
              "id": 3261,
              "text": "1785",
              "isCorrect": false,
              "correctOrder": null,
              "order": 4
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2126,
          "typeId": 4,
          "type": "year_input",
          "typeLabel": "Évszám beírása",
          "text": "Írd be a türelmi rendelet évét!",
          "instruction": "Csak az évszám számjegyeit írd be; az app külön kezeli a Kr. e./Kr. u. jelölést.",
          "explanation": "A türelmi rendelet évszáma: 1781.",
          "difficulty": 1,
          "points": 1,
          "order": 5,
          "chronologyEvent": 1267,
          "options": [],
          "acceptedAnswers": [
            {
              "id": 4043,
              "text": "1781",
              "number": 1781,
              "era": "CE",
              "normalized": "1781"
            }
          ],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2127,
          "typeId": 3,
          "type": "true_false",
          "typeLabel": "Igaz/Hamis",
          "text": "Igaz vagy hamis? A jobbágyrendelet 1785-ben született.",
          "instruction": "",
          "explanation": "Igaz: II. József 1785-ben adta ki.",
          "difficulty": 1,
          "points": 1,
          "order": 6,
          "chronologyEvent": 1268,
          "options": [
            {
              "id": 3262,
              "text": "Igaz",
              "isCorrect": true,
              "correctOrder": null,
              "order": 1
            },
            {
              "id": 3263,
              "text": "Hamis",
              "isCorrect": false,
              "correctOrder": null,
              "order": 2
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2128,
          "typeId": 5,
          "type": "chronology_order",
          "typeLabel": "Időrendi sorrend",
          "text": "Tedd időrendbe a 18. századi Habsburg reformokat!",
          "instruction": "",
          "explanation": "Helyes sorrend: A Pragmatica Sanctio → Mária Terézia trónra lépése → Az úrbéri rendelet → Ratio Educationis → A türelmi rendelet → A jobbágyrendelet.",
          "difficulty": 3,
          "points": 2,
          "order": 7,
          "chronologyEvent": null,
          "options": [
            {
              "id": 3264,
              "text": "A Pragmatica Sanctio",
              "isCorrect": false,
              "correctOrder": 1,
              "order": 1
            },
            {
              "id": 3265,
              "text": "Mária Terézia trónra lépése",
              "isCorrect": false,
              "correctOrder": 2,
              "order": 2
            },
            {
              "id": 3266,
              "text": "Az úrbéri rendelet",
              "isCorrect": false,
              "correctOrder": 3,
              "order": 3
            },
            {
              "id": 3267,
              "text": "Ratio Educationis",
              "isCorrect": false,
              "correctOrder": 4,
              "order": 4
            },
            {
              "id": 3268,
              "text": "A türelmi rendelet",
              "isCorrect": false,
              "correctOrder": 5,
              "order": 5
            },
            {
              "id": 3269,
              "text": "A jobbágyrendelet",
              "isCorrect": false,
              "correctOrder": 6,
              "order": 6
            }
          ],
          "acceptedAnswers": [],
          "pairs": [],
          "topicId": 1005
        },
        {
          "id": 2129,
          "typeId": 6,
          "type": "matching",
          "typeLabel": "Párosítás",
          "text": "Párosítsd a reformokat és rendeleteket az évszámokkal!",
          "instruction": "",
          "explanation": "Párok: A Pragmatica Sanctio = 1723 | Az úrbéri rendelet = 1767 | Ratio Educationis = 1777 | A türelmi rendelet = 1781 | A jobbágyrendelet = 1785.",
          "difficulty": 3,
          "points": 2,
          "order": 8,
          "chronologyEvent": null,
          "options": [],
          "acceptedAnswers": [],
          "pairs": [
            {
              "id": 5065,
              "left": "A Pragmatica Sanctio",
              "right": "1723",
              "order": 1
            },
            {
              "id": 5066,
              "left": "Az úrbéri rendelet",
              "right": "1767",
              "order": 2
            },
            {
              "id": 5067,
              "left": "Ratio Educationis",
              "right": "1777",
              "order": 3
            },
            {
              "id": 5068,
              "left": "A türelmi rendelet",
              "right": "1781",
              "order": 4
            },
            {
              "id": 5069,
              "left": "A jobbágyrendelet",
              "right": "1785",
              "order": 5
            }
          ],
          "topicId": 1005
        }
      ],
      "questionCount": 8
    }
  ]
}
