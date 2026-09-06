const IMG = "assets/test2-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts) => ({ id, type: "paired", prompt, points: parts.length, parts });

const sections = [
  {
    "key": "A",
    "label": "A",
    "title": "Listen and circle the correct answer.",
    "note": "Listen carefully and choose True or False.",
    "points": 5,
    "audio": "assets/audio-a.mp3",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "Statement 1 is true according to the recording.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "Statement 2 is true according to the recording.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "Statement 3 is false according to the recording.",
        "image": "",
        "points": 1
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "T"
        ],
        "explanation": "Statement 4 is true according to the recording.",
        "image": "",
        "points": 1
      },
      {
        "id": "A5",
        "type": "choice",
        "prompt": "5.",
        "options": [
          "T",
          "F"
        ],
        "answers": [
          "F"
        ],
        "explanation": "Statement 5 is false according to the recording.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "B",
    "label": "B",
    "title": "Complete the sentences.",
    "note": "Use the words in the box. One word is not needed.",
    "points": 5,
    "wordBank": [
      "dentist",
      "army",
      "clay",
      "jade",
      "treasure",
      "uniform"
    ],
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "1. I love green, so my father gave me a beautiful ring made of green ___.",
        "answers": [
          "jade"
        ],
        "explanation": "Jade is a hard green stone used for jewelry.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "2. My tooth hurts. I have to go to the ___.",
        "answers": [
          "dentist"
        ],
        "explanation": "A dentist treats problems with teeth.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "3. I made a pretty vase in art class today. I used ___ to make it.",
        "answers": [
          "clay"
        ],
        "explanation": "Clay is a soft material that can be shaped into a vase.",
        "image": "",
        "points": 1
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "4. My uncle is a policeman. He wears a blue ___ at work.",
        "answers": [
          "uniform"
        ],
        "explanation": "A uniform is the special set of clothes worn for a job.",
        "image": "",
        "points": 1
      },
      {
        "id": "B5",
        "type": "input",
        "prompt": "5. My brother is a soldier in the ___.",
        "answers": [
          "army"
        ],
        "explanation": "Soldiers serve in the army.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "C",
    "label": "C",
    "title": "Complete the sentences. Then match them to the pictures.",
    "note": "Write the job, then choose picture a, b, c, or d.",
    "points": 8,
    "sectionImage": "assets/test2-images/c-strip.png",
    "questions": [
      {
        "id": "C1",
        "type": "paired",
        "prompt": "1. A ___ is the leader of the army.",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "general"
            ],
            "explanation": "A general is a senior army leader."
          },
          {
            "key": "match",
            "label": "Picture label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c",
              "d"
            ],
            "answers": [
              "d"
            ],
            "explanation": "Picture d shows the general in uniform."
          }
        ]
      },
      {
        "id": "C2",
        "type": "paired",
        "prompt": "2. A ___ visits places on vacation.",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "tourist"
            ],
            "explanation": "A tourist travels to and visits places for pleasure."
          },
          {
            "key": "match",
            "label": "Picture label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c",
              "d"
            ],
            "answers": [
              "a"
            ],
            "explanation": "Picture a shows a tourist visiting Paris."
          }
        ]
      },
      {
        "id": "C3",
        "type": "paired",
        "prompt": "3. A ___ is a person who rides a bicycle.",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "cyclist"
            ],
            "explanation": "A cyclist is someone who rides a bicycle."
          },
          {
            "key": "match",
            "label": "Picture label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c",
              "d"
            ],
            "answers": [
              "c"
            ],
            "explanation": "Picture c shows the cyclist."
          }
        ]
      },
      {
        "id": "C4",
        "type": "paired",
        "prompt": "4. Long ago, a ___ was a poor farmer or farm worker.",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Missing word",
            "type": "input",
            "answers": [
              "peasant"
            ],
            "explanation": "Historically, a peasant was a poor farmer or agricultural worker."
          },
          {
            "key": "match",
            "label": "Picture label",
            "type": "choice",
            "options": [
              "a",
              "b",
              "c",
              "d"
            ],
            "answers": [
              "b"
            ],
            "explanation": "Picture b shows the peasant working in a field."
          }
        ]
      }
    ]
  },
  {
    "key": "D",
    "label": "D",
    "title": "Rewrite the sentences with infinitives. Use the words in parentheses.",
    "note": "Keep the original meaning and use to + base verb.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "input",
        "prompt": "1. They liked the movie. (seem)",
        "answers": [
          "They seemed to like the movie",
          "They seemed to like the movie."
        ],
        "explanation": "Seem is followed by a to-infinitive: seemed to like.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "input",
        "prompt": "2. We learn a lot about dinosaurs. (expect)",
        "answers": [
          "We expected to learn a lot about dinosaurs",
          "We expected to learn a lot about dinosaurs."
        ],
        "explanation": "Expect can be followed by a to-infinitive: expected to learn.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "input",
        "prompt": "3. She labeled the chart correctly. (learn)",
        "answers": [
          "She learned to label the chart correctly",
          "She learned to label the chart correctly."
        ],
        "explanation": "Learn is followed by a to-infinitive when it means acquiring a skill: learned to label.",
        "image": "",
        "points": 1
      },
      {
        "id": "D4",
        "type": "input",
        "prompt": "4. I did my homework. (decide)",
        "answers": [
          "I decided to do my homework",
          "I decided to do my homework."
        ],
        "explanation": "Decide is followed by a to-infinitive: decided to do.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "E",
    "label": "E",
    "title": "Complete the sentences for each set of pictures. Use infinitives.",
    "note": "Use the cue below each picture and complete the sentence.",
    "points": 4,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1a. He promised ___. (study harder)",
        "answers": [
          "to study harder"
        ],
        "explanation": "Promise is followed by a to-infinitive: promised to study harder.",
        "image": "assets/test2-images/study-harder.png",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "1b. She promised ___. (clean her room)",
        "answers": [
          "to clean her room"
        ],
        "explanation": "Promise is followed by a to-infinitive: promised to clean her room.",
        "image": "assets/test2-images/clean-room.png",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "2a. He decided ___. (play soccer)",
        "answers": [
          "to play soccer"
        ],
        "explanation": "Decide is followed by a to-infinitive: decided to play soccer.",
        "image": "assets/test2-images/play-soccer.png",
        "points": 1
      },
      {
        "id": "E4",
        "type": "input",
        "prompt": "2b. She decided ___. (make dinner)",
        "answers": [
          "to make dinner"
        ],
        "explanation": "Decide is followed by a to-infinitive: decided to make dinner.",
        "image": "assets/test2-images/make-dinner.png",
        "points": 1
      }
    ]
  },
  {
    "key": "F",
    "label": "F",
    "title": "Write the words in the correct order to make sentences.",
    "note": "Use every word and write a complete sentence.",
    "points": 4,
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. dishes / to / He / wash / promised / the",
        "answers": [
          "He promised to wash the dishes",
          "He promised to wash the dishes."
        ],
        "explanation": "The correct order is: He promised to wash the dishes.",
        "image": "",
        "points": 1
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. to / She / bike / fix / her / tried",
        "answers": [
          "She tried to fix her bike",
          "She tried to fix her bike."
        ],
        "explanation": "The correct order is: She tried to fix her bike.",
        "image": "",
        "points": 1
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. do / homework / to / I / forgot / my",
        "answers": [
          "I forgot to do my homework",
          "I forgot to do my homework."
        ],
        "explanation": "The correct order is: I forgot to do my homework.",
        "image": "",
        "points": 1
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. the / seemed / They / enjoy / to / festival",
        "answers": [
          "They seemed to enjoy the festival",
          "They seemed to enjoy the festival."
        ],
        "explanation": "The correct order is: They seemed to enjoy the festival.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "G",
    "label": "G",
    "title": "Complete the sentences.",
    "note": "Use the words in the box. One word is not needed.",
    "points": 4,
    "wordBank": [
      "discover",
      "examine",
      "sedimentary",
      "layers",
      "pastime"
    ],
    "questions": [
      {
        "id": "G1",
        "type": "input",
        "prompt": "1. My favorite ___ is to explore the fields around my house.",
        "answers": [
          "pastime"
        ],
        "explanation": "A pastime is an activity done for enjoyment.",
        "image": "",
        "points": 1
      },
      {
        "id": "G2",
        "type": "input",
        "prompt": "2. I like to ___ rocks and bones up close.",
        "answers": [
          "examine"
        ],
        "explanation": "Examine means look at something carefully.",
        "image": "",
        "points": 1
      },
      {
        "id": "G3",
        "type": "input",
        "prompt": "3. Some rocks have many ___ in them.",
        "answers": [
          "layers"
        ],
        "explanation": "Layers are levels of material lying one over another.",
        "image": "",
        "points": 1
      },
      {
        "id": "G4",
        "type": "input",
        "prompt": "4. I hope I ___ a special, ancient bone someday!",
        "answers": [
          "discover"
        ],
        "explanation": "Discover means find something for the first time.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "H",
    "label": "H",
    "title": "Look and complete the sentences.",
    "note": "Use each exact picture from the original test.",
    "points": 4,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. We found an old ___ of a wolf.",
        "answers": [
          "skull"
        ],
        "explanation": "A skull is the bony structure of an animal's head.",
        "image": "assets/test2-images/skull.png",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. This ___ only ate plants.",
        "answers": [
          "dinosaur"
        ],
        "explanation": "The picture shows a plant-eating dinosaur.",
        "image": "assets/test2-images/dinosaur.png",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. The ___ showed our class some ancient bones.",
        "answers": [
          "paleontologist"
        ],
        "explanation": "A paleontologist studies fossils and ancient life.",
        "image": "assets/test2-images/paleontologist.png",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. The big fire created a lot of ___.",
        "answers": [
          "ash"
        ],
        "explanation": "Ash is the powder left after something burns.",
        "image": "assets/test2-images/ash.png",
        "points": 1
      }
    ]
  },
  {
    "key": "I",
    "label": "I",
    "title": "Unscramble and match.",
    "note": "Unscramble each word, then choose its definition.",
    "points": 8,
    "questions": [
      {
        "id": "I1",
        "type": "paired",
        "prompt": "1. v r e i a n",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "ravine"
            ],
            "explanation": "The letters form ravine."
          },
          {
            "key": "match",
            "label": "Definition",
            "type": "choice",
            "options": [
              "a. this happens while you sleep",
              "b. to dig things out of the ground",
              "c. you like this better than any other",
              "d. a deep, narrow valley"
            ],
            "answers": [
              "d. a deep, narrow valley"
            ],
            "explanation": "A ravine is a deep, narrow valley, so it matches definition d."
          }
        ]
      },
      {
        "id": "I2",
        "type": "paired",
        "prompt": "2. t e v e a x a c",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "excavate"
            ],
            "explanation": "The letters form excavate."
          },
          {
            "key": "match",
            "label": "Definition",
            "type": "choice",
            "options": [
              "a. this happens while you sleep",
              "b. to dig things out of the ground",
              "c. you like this better than any other",
              "d. a deep, narrow valley"
            ],
            "answers": [
              "b. to dig things out of the ground"
            ],
            "explanation": "Excavate means to dig things out of the ground, so it matches definition b."
          }
        ]
      },
      {
        "id": "I3",
        "type": "paired",
        "prompt": "3. r t o a f i v e",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "favorite",
              "favourite"
            ],
            "explanation": "The letters form favorite (British spelling: favourite)."
          },
          {
            "key": "match",
            "label": "Definition",
            "type": "choice",
            "options": [
              "a. this happens while you sleep",
              "b. to dig things out of the ground",
              "c. you like this better than any other",
              "d. a deep, narrow valley"
            ],
            "answers": [
              "c. you like this better than any other"
            ],
            "explanation": "Your favorite is the one you like better than any other, so it matches definition c."
          }
        ]
      },
      {
        "id": "I4",
        "type": "paired",
        "prompt": "4. m r a e d",
        "points": 2,
        "parts": [
          {
            "key": "word",
            "label": "Unscrambled word",
            "type": "input",
            "answers": [
              "dream"
            ],
            "explanation": "The letters form dream."
          },
          {
            "key": "match",
            "label": "Definition",
            "type": "choice",
            "options": [
              "a. this happens while you sleep",
              "b. to dig things out of the ground",
              "c. you like this better than any other",
              "d. a deep, narrow valley"
            ],
            "answers": [
              "a. this happens while you sleep"
            ],
            "explanation": "A dream happens in your mind while you sleep, so it matches definition a."
          }
        ]
      }
    ]
  },
  {
    "key": "J",
    "label": "J",
    "title": "Look and write sentences. Use gerunds.",
    "note": "Change the cue verb to the -ing form after the first verb.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. The paleontologist began / examine / the bone",
        "answers": [
          "The paleontologist began examining the bone",
          "The paleontologist began examining the bone."
        ],
        "explanation": "Begin can be followed by a gerund: began examining.",
        "image": "assets/test2-images/paleontologist.png",
        "points": 1
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. Thomas enjoyed / explore / the fields around his house",
        "answers": [
          "Thomas enjoyed exploring the fields around his house",
          "Thomas enjoyed exploring the fields around his house."
        ],
        "explanation": "Enjoy is followed by a gerund: enjoyed exploring.",
        "image": "assets/test2-images/explore-fields.png",
        "points": 1
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. It began / snow / in the afternoon",
        "answers": [
          "It began snowing in the afternoon",
          "It began snowing in the afternoon."
        ],
        "explanation": "Begin can be followed by a gerund: began snowing.",
        "image": "assets/test2-images/snow.png",
        "points": 1
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "4. We don't like / practice / soccer in the rain",
        "answers": [
          "We don't like practicing soccer in the rain",
          "We don't like practicing soccer in the rain."
        ],
        "explanation": "Like can be followed by a gerund: don't like practicing.",
        "image": "assets/test2-images/soccer-rain.png",
        "points": 1
      }
    ]
  },
  {
    "key": "K",
    "label": "K",
    "title": "Complete the sentences. Use gerunds.",
    "note": "Use the verbs in the box. One word is not needed.",
    "points": 6,
    "wordBank": [
      "play",
      "examine",
      "dig",
      "cook",
      "take",
      "rain",
      "sing"
    ],
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1. The scientist finished ___ the rocks.",
        "answers": [
          "examining"
        ],
        "explanation": "Finish is followed by a gerund: finished examining.",
        "image": "",
        "points": 1
      },
      {
        "id": "K2",
        "type": "input",
        "prompt": "2. I enjoy ___ pictures of nature.",
        "answers": [
          "taking"
        ],
        "explanation": "Enjoy is followed by a gerund: enjoy taking.",
        "image": "",
        "points": 1
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "3. As we started ___ the hole, we found a huge bone.",
        "answers": [
          "digging"
        ],
        "explanation": "Double the final consonant in dig before adding -ing: digging.",
        "image": "",
        "points": 1
      },
      {
        "id": "K4",
        "type": "input",
        "prompt": "4. She practices ___ the piano every day.",
        "answers": [
          "playing"
        ],
        "explanation": "Practice is followed by a gerund: practices playing.",
        "image": "",
        "points": 1
      },
      {
        "id": "K5",
        "type": "input",
        "prompt": "5. I like ___ songs with my friends.",
        "answers": [
          "singing"
        ],
        "explanation": "Like can be followed by a gerund: like singing.",
        "image": "",
        "points": 1
      },
      {
        "id": "K6",
        "type": "input",
        "prompt": "6. It started ___ this morning.",
        "answers": [
          "raining"
        ],
        "explanation": "Start can be followed by a gerund: started raining.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "key": "L",
    "label": "L",
    "title": "Write the words in the correct order to make questions. Then listen and write the answers.",
    "note": "Write both the question and its answer.",
    "points": 4,
    "audio": "assets/audio-l.mp3",
    "questions": [
      {
        "id": "L1",
        "type": "paired",
        "prompt": "1. doing / What / he / like / does",
        "points": 2,
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "What does he like doing",
              "What does he like doing?"
            ],
            "explanation": "Use What + does + subject + like + gerund: What does he like doing?"
          },
          {
            "key": "answer",
            "label": "Listening answer",
            "type": "input",
            "answers": [
              "He likes swimming",
              "He likes swimming."
            ],
            "explanation": "The recording says that he likes swimming."
          }
        ]
      },
      {
        "id": "L2",
        "type": "paired",
        "prompt": "2. she / going / Where / is",
        "points": 2,
        "parts": [
          {
            "key": "question",
            "label": "Question",
            "type": "input",
            "answers": [
              "Where is she going",
              "Where is she going?"
            ],
            "explanation": "Use Where + be + subject + going: Where is she going?"
          },
          {
            "key": "answer",
            "label": "Listening answer",
            "type": "input",
            "answers": [
              "She is going to the museum",
              "She is going to the museum.",
              "She's going to the museum",
              "She's going to the museum."
            ],
            "explanation": "The recording says that she is going to the museum."
          }
        ]
      }
    ]
  }
];
