const IMG = "assets/test2-images/";
const TOTAL_POINTS = 60;

const choice = (id, prompt, options, answer, explanation, image = "") => ({ id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 });
const input = (id, prompt, answers, explanation, image = "") => ({ id, type: "input", prompt, answers, explanation, image, points: 1 });
const paired = (id, prompt, parts) => ({ id, type: "paired", prompt, points: parts.length, parts });

const sections = [
  { key: "A", label: "A", title: "Listen and circle the correct answer.", note: "Listen carefully and choose True or False.", points: 5, audio: "assets/audio-a.mp3", questions: [
    choice("A1", "1.", ["T", "F"], "T", "Statement 1 is true according to the recording."),
    choice("A2", "2.", ["T", "F"], "T", "Statement 2 is true according to the recording."),
    choice("A3", "3.", ["T", "F"], "F", "Statement 3 is false according to the recording."),
    choice("A4", "4.", ["T", "F"], "T", "Statement 4 is true according to the recording."),
    choice("A5", "5.", ["T", "F"], "F", "Statement 5 is false according to the recording.")
  ]},
  { key: "B", label: "B", title: "Complete the sentences.", note: "Use the words in the box. One word is not needed.", points: 5, wordBank: ["dentist", "army", "clay", "jade", "treasure", "uniform"], questions: [
    input("B1", "1. I love green, so my father gave me a beautiful ring made of green ___.", ["jade"], "Jade is a hard green stone used for jewelry."),
    input("B2", "2. My tooth hurts. I have to go to the ___.", ["dentist"], "A dentist treats problems with teeth."),
    input("B3", "3. I made a pretty vase in art class today. I used ___ to make it.", ["clay"], "Clay is a soft material that can be shaped into a vase."),
    input("B4", "4. My uncle is a policeman. He wears a blue ___ at work.", ["uniform"], "A uniform is the special set of clothes worn for a job."),
    input("B5", "5. My brother is a soldier in the ___.", ["army"], "Soldiers serve in the army.")
  ]},
  { key: "C", label: "C", title: "Complete the sentences. Then match them to the pictures.", note: "Write the job, then choose picture a, b, c, or d.", points: 8, sectionImage: IMG + "c-strip.png", questions: [
    paired("C1", "1. A ___ is the leader of the army.", [
      { key: "word", label: "Missing word", type: "input", answers: ["general"], explanation: "A general is a senior army leader." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["d"], explanation: "Picture d shows the general in uniform." }
    ]),
    paired("C2", "2. A ___ visits places on vacation.", [
      { key: "word", label: "Missing word", type: "input", answers: ["tourist"], explanation: "A tourist travels to and visits places for pleasure." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["a"], explanation: "Picture a shows a tourist visiting Paris." }
    ]),
    paired("C3", "3. A ___ is a person who rides a bicycle.", [
      { key: "word", label: "Missing word", type: "input", answers: ["cyclist"], explanation: "A cyclist is someone who rides a bicycle." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["c"], explanation: "Picture c shows the cyclist." }
    ]),
    paired("C4", "4. Long ago, a ___ was a poor farmer or farm worker.", [
      { key: "word", label: "Missing word", type: "input", answers: ["peasant"], explanation: "Historically, a peasant was a poor farmer or agricultural worker." },
      { key: "match", label: "Picture label", type: "choice", options: ["a", "b", "c", "d"], answers: ["b"], explanation: "Picture b shows the peasant working in a field." }
    ])
  ]},
  { key: "D", label: "D", title: "Rewrite the sentences with infinitives. Use the words in parentheses.", note: "Keep the original meaning and use to + base verb.", points: 4, questions: [
    input("D1", "1. They liked the movie. (seem)", ["They seemed to like the movie", "They seemed to like the movie."], "Seem is followed by a to-infinitive: seemed to like."),
    input("D2", "2. We learn a lot about dinosaurs. (expect)", ["We expected to learn a lot about dinosaurs", "We expected to learn a lot about dinosaurs."], "Expect can be followed by a to-infinitive: expected to learn."),
    input("D3", "3. She labeled the chart correctly. (learn)", ["She learned to label the chart correctly", "She learned to label the chart correctly."], "Learn is followed by a to-infinitive when it means acquiring a skill: learned to label."),
    input("D4", "4. I did my homework. (decide)", ["I decided to do my homework", "I decided to do my homework."], "Decide is followed by a to-infinitive: decided to do.")
  ]},
  { key: "E", label: "E", title: "Complete the sentences for each set of pictures. Use infinitives.", note: "Use the cue below each picture and complete the sentence.", points: 4, questions: [
    input("E1", "1a. He promised ___. (study harder)", ["to study harder"], "Promise is followed by a to-infinitive: promised to study harder.", IMG + "study-harder.png"),
    input("E2", "1b. She promised ___. (clean her room)", ["to clean her room"], "Promise is followed by a to-infinitive: promised to clean her room.", IMG + "clean-room.png"),
    input("E3", "2a. He decided ___. (play soccer)", ["to play soccer"], "Decide is followed by a to-infinitive: decided to play soccer.", IMG + "play-soccer.png"),
    input("E4", "2b. She decided ___. (make dinner)", ["to make dinner"], "Decide is followed by a to-infinitive: decided to make dinner.", IMG + "make-dinner.png")
  ]},
  { key: "F", label: "F", title: "Write the words in the correct order to make sentences.", note: "Use every word and write a complete sentence.", points: 4, questions: [
    input("F1", "1. dishes / to / He / wash / promised / the", ["He promised to wash the dishes", "He promised to wash the dishes."], "The correct order is: He promised to wash the dishes."),
    input("F2", "2. to / She / bike / fix / her / tried", ["She tried to fix her bike", "She tried to fix her bike."], "The correct order is: She tried to fix her bike."),
    input("F3", "3. do / homework / to / I / forgot / my", ["I forgot to do my homework", "I forgot to do my homework."], "The correct order is: I forgot to do my homework."),
    input("F4", "4. the / seemed / They / enjoy / to / festival", ["They seemed to enjoy the festival", "They seemed to enjoy the festival."], "The correct order is: They seemed to enjoy the festival.")
  ]},
  { key: "G", label: "G", title: "Look and complete the sentences.", note: "Use each exact picture from the original test.", points: 4, questions: [
    input("G1", "1. We found an old ___ of a wolf.", ["skull"], "A skull is the bony structure of an animal's head.", IMG + "skull.png"),
    input("G2", "2. This ___ only ate plants.", ["dinosaur"], "The picture shows a plant-eating dinosaur.", IMG + "dinosaur.png"),
    input("G3", "3. The ___ showed our class some ancient bones.", ["paleontologist"], "A paleontologist studies fossils and ancient life.", IMG + "paleontologist.png"),
    input("G4", "4. The big fire created a lot of ___.", ["ash"], "Ash is the powder left after something burns.", IMG + "ash.png")
  ]},
  { key: "H", label: "H", title: "Complete the sentences.", note: "Use the words in the box. One word is not needed.", points: 4, wordBank: ["discover", "examine", "sedimentary", "layers", "pastime"], questions: [
    input("H1", "1. My favorite ___ is to explore the fields around my house.", ["pastime"], "A pastime is an activity done for enjoyment."),
    input("H2", "2. I like to ___ rocks and bones up close.", ["examine"], "Examine means look at something carefully."),
    input("H3", "3. Some rocks have many ___ in them.", ["layers"], "Layers are levels of material lying one over another."),
    input("H4", "4. I hope I ___ a special, ancient bone someday!", ["discover"], "Discover means find something for the first time.")
  ]},
  { key: "I", label: "I", title: "Unscramble and match.", note: "Unscramble each word, then choose its definition.", points: 8, questions: [
    paired("I1", "1. v r e i a n", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["ravine"], explanation: "The letters form ravine." },
      { key: "match", label: "Definition", type: "choice", options: ["a. this happens while you sleep", "b. to dig things out of the ground", "c. you like this better than any other", "d. a deep, narrow valley"], answers: ["d. a deep, narrow valley"], explanation: "A ravine is a deep, narrow valley, so it matches definition d." }
    ]),
    paired("I2", "2. t e v e a x a c", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["excavate"], explanation: "The letters form excavate." },
      { key: "match", label: "Definition", type: "choice", options: ["a. this happens while you sleep", "b. to dig things out of the ground", "c. you like this better than any other", "d. a deep, narrow valley"], answers: ["b. to dig things out of the ground"], explanation: "Excavate means to dig things out of the ground, so it matches definition b." }
    ]),
    paired("I3", "3. r t o a f i v e", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["favorite", "favourite"], explanation: "The letters form favorite (British spelling: favourite)." },
      { key: "match", label: "Definition", type: "choice", options: ["a. this happens while you sleep", "b. to dig things out of the ground", "c. you like this better than any other", "d. a deep, narrow valley"], answers: ["c. you like this better than any other"], explanation: "Your favorite is the one you like better than any other, so it matches definition c." }
    ]),
    paired("I4", "4. m r a e d", [
      { key: "word", label: "Unscrambled word", type: "input", answers: ["dream"], explanation: "The letters form dream." },
      { key: "match", label: "Definition", type: "choice", options: ["a. this happens while you sleep", "b. to dig things out of the ground", "c. you like this better than any other", "d. a deep, narrow valley"], answers: ["a. this happens while you sleep"], explanation: "A dream happens in your mind while you sleep, so it matches definition a." }
    ])
  ]},
  { key: "J", label: "J", title: "Look and write sentences. Use gerunds.", note: "Change the cue verb to the -ing form after the first verb.", points: 4, questions: [
    input("J1", "1. The paleontologist began / examine / the bone", ["The paleontologist began examining the bone", "The paleontologist began examining the bone."], "Begin can be followed by a gerund: began examining.", IMG + "paleontologist.png"),
    input("J2", "2. Thomas enjoyed / explore / the fields around his house", ["Thomas enjoyed exploring the fields around his house", "Thomas enjoyed exploring the fields around his house."], "Enjoy is followed by a gerund: enjoyed exploring.", IMG + "explore-fields.png"),
    input("J3", "3. It began / snow / in the afternoon", ["It began snowing in the afternoon", "It began snowing in the afternoon."], "Begin can be followed by a gerund: began snowing.", IMG + "snow.png"),
    input("J4", "4. We don't like / practice / soccer in the rain", ["We don't like practicing soccer in the rain", "We don't like practicing soccer in the rain."], "Like can be followed by a gerund: don't like practicing.", IMG + "soccer-rain.png")
  ]},
  { key: "K", label: "K", title: "Complete the sentences. Use gerunds.", note: "Use the verbs in the box. One word is not needed.", points: 6, wordBank: ["play", "examine", "dig", "cook", "take", "rain", "sing"], questions: [
    input("K1", "1. The scientist finished ___ the rocks.", ["examining"], "Finish is followed by a gerund: finished examining."),
    input("K2", "2. I enjoy ___ pictures of nature.", ["taking"], "Enjoy is followed by a gerund: enjoy taking."),
    input("K3", "3. As we started ___ the hole, we found a huge bone.", ["digging"], "Double the final consonant in dig before adding -ing: digging."),
    input("K4", "4. She practices ___ the piano every day.", ["playing"], "Practice is followed by a gerund: practices playing."),
    input("K5", "5. I like ___ songs with my friends.", ["singing"], "Like can be followed by a gerund: like singing."),
    input("K6", "6. It started ___ this morning.", ["raining"], "Start can be followed by a gerund: started raining.")
  ]},
  { key: "L", label: "L", title: "Write the words in the correct order to make questions. Then listen and write the answers.", note: "Write both the question and its answer.", points: 4, audio: "assets/audio-l.mp3", questions: [
    paired("L1", "1. doing / What / he / like / does", [
      { key: "question", label: "Question", type: "input", answers: ["What does he like doing", "What does he like doing?"], explanation: "Use What + does + subject + like + gerund: What does he like doing?" },
      { key: "answer", label: "Listening answer", type: "input", answers: ["He likes swimming", "He likes swimming."], explanation: "The recording says that he likes swimming." }
    ]),
    paired("L2", "2. she / going / Where / is", [
      { key: "question", label: "Question", type: "input", answers: ["Where is she going", "Where is she going?"], explanation: "Use Where + be + subject + going: Where is she going?" },
      { key: "answer", label: "Listening answer", type: "input", answers: ["She is going to the museum", "She is going to the museum.", "She's going to the museum", "She's going to the museum."], explanation: "The recording says that she is going to the museum." }
    ])
  ]}
];
