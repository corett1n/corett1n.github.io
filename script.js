//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let selectCategoriesBtn = document.getElementById("select-categories");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let categoriesScreen = document.querySelector(".categories-screen");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let surpriseButton = document.getElementById("to-the-code");
let userScoreWin = document.getElementById("user-score-win");
let questionCount;
let scoreCount = 0;
let timecount = 20;
let countdown;
let atLeastOneCategoryIsSelected = false;

//Questions and Options array

let selectedCategories = {};

let casopisiQuizOptions = [
  "Da, gotovina.",
  "Ne, kartica bo.",
  "Ne gotovina, cash.",
  "Oboje.",
];
let casopisiQuiz = [
  {
    id: "0",
    question: "casopisiQuiz",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[2],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let geografskipolozajQuizOptions = [
  "Jadransko morje",
  "Avstrija",
  "Hrvaška",
  "Italija",
  "Madžarska",
  "Srednja Evropa",
];
let geografskipolozajQuiz = [
  {
    id: "0",
    question:
      "Teritorialno morje Republike Slovenije obsega 326 km², dolžina obale pa je približno 45 km. Morju pa je ime...",
    options: geografskipolozajQuizOptions,
    correct: geografskipolozajQuizOptions[0],
    questionImg:
      "media/geografskipolozaj/slovenija-geografskipolozaj-jadranskomorje.png",
  },
  {
    id: "1",
    question: "S katero državo meji Slovenija na severu?",
    options: geografskipolozajQuizOptions,
    correct: geografskipolozajQuizOptions[1],
    questionImg:
      "media/geografskipolozaj/slovenija-geografskipolozaj-sosede-avstrija.png",
  },
  {
    id: "2",
    question: "S katero državo meji Slovenija na jugu?",
    options: geografskipolozajQuizOptions,
    correct: geografskipolozajQuizOptions[2],
    questionImg:
      "media/geografskipolozaj/slovenija-geografskipolozaj-sosede-hrvaska.png",
  },
  {
    id: "3",
    question: "S katero državo meji Slovenija na zahodu?",
    options: geografskipolozajQuizOptions,
    correct: geografskipolozajQuizOptions[3],
    questionImg:
      "media/geografskipolozaj/slovenija-geografskipolozaj-sosede-italija.png",
  },
  {
    id: "4",
    question: "S katero državo meji Slovenija na vzhodu?",
    options: geografskipolozajQuizOptions,
    correct: geografskipolozajQuizOptions[4],
    questionImg:
      "media/geografskipolozaj/slovenija-geografskipolozaj-sosede-madzarska.png",
  },
  {
    id: "5",
    question: "V katerem delu Evrope se nahaja Slovenija?",
    options: geografskipolozajQuizOptions,
    correct: geografskipolozajQuizOptions[5],
    questionImg:
      "media/geografskipolozaj/slovenija-geografskipolozaj-srednjaevropa.png",
  },
];

let hranaQuizOptions = [
  "Belokranjska pogača",
  "Hroštule",
  "Idrijski žlikrofi",
  "Jota",
  "Kranjska klobasa",
  "Kraški pršut",
  "Kremšnita",
  "Mežerli",
  "Miške",
  "Potica",
  "Pašta fižol",
  "Pinca",
  "Pohorska omleta",
  "Prekmurska gibanica",
  "Skutini štruklji",
  "Zeliščna frtalja",
];
let hranaQuiz = [
  {
    id: "0",
    question:
      "Po tradiciji se ta slovenska dobrota na mizo prinese še topla, nakar si jo jedci z rokami sproti lomijo. Proizvod, zaščiten na ravni EU, je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[0],
    questionImg: "media/hrana/slovenija-hrana-belokranjskapogaca.png",
  },
  {
    id: "1",
    question:
      "Tipično istrsko pecivo, ki jih istrske gospodinje pripravijo predvsem v pustnem času, pa tudi ob raznih slavjih, kot so poroke in šagre. Pravijo jim flancati ali...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[1],
    questionImg: "media/hrana/slovenija-hrana-hrostule.png",
  },
  {
    id: "2",
    question:
      "Zgledajo kot majhni klobuki, postreže se jih z omako od pečenke, polnjeni pa so s krompirjem in začimbami. Ponudijo se lahko kot predjed ali glavna jed in so zaščiteni na ravni EU. To so...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[2],
    questionImg: "media/hrana/slovenija-hrana-idrijskizlikrofi.png",
  },
  {
    id: "3",
    question:
      "Tipična primorska jed, ki se lahko postreže z mesom ali brez. Pozimi se je toplo, poleti pa hladno. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[3],
    questionImg: "media/hrana/slovenija-hrana-jota.png",
  },
  {
    id: "4",
    question:
      "Legenda pravi, da ji je ime dal avstrijski cesar, ki se je med potovanjem ustavil na Gorenjskem. Tu so mu postregli to jed, on pa je navdušeno vzkliknil: 'To ni navadna klobasa, to je...'",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[4],
    questionImg: "media/hrana/slovenija-hrana-kranjskaklobasa.png",
  },
  {
    id: "5",
    question:
      "Nosi EU zaščiteno geografsko oznako, suši se na vetru do 20 mesecev, dodana pa mu je morska sol. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[5],
    questionImg: "media/hrana/slovenija-hrana-kraskiprsut.png",
  },
  {
    id: "6",
    question:
      "Na Bledu so jih v zadnjih 60 letih spekli približno 15 milijonov. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[6],
    questionImg: "media/hrana/slovenija-hrana-kremsnita.png",
  },
  {
    id: "7",
    question:
      "Jed je povezana s kolinami ob zakolu prašiča v poznem jesenskem ali zimskem času, jedli pa so jo ob romanjih, krstih in porokah. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[7],
    questionImg: "media/hrana/slovenija-hrana-mezerli.png",
  },
  {
    id: "8",
    question:
      "Tipična pustna jed, veliko enostavnejša za pripravo kot krofi. Ocvre se jih v vročem olju, lahko pa se jim tudi doda rozine. To so...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[8],
    questionImg: "media/hrana/slovenija-hrana-miske.png",
  },
  {
    id: "9",
    question:
      "Prvi jo je v pisni obliki omenil Primož Trubar leta 1575. Pozna jo ves svet, tudi Donald Trump po Melanijini zaslugi. Obstaja orehova, pehtranova, medena...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[9],
    questionImg: "media/hrana/slovenija-hrana-potica.png",
  },
  {
    id: "10",
    question:
      "Zelo priljubljena primorska jed, ki je zelo nasitna. Kuha se dve uri, skupen čas priprave pa znaša vsaj 10 ur. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[10],
    questionImg: "media/hrana/slovenija-hrana-pastafizol.png",
  },
  {
    id: "11",
    question:
      "Tipična velikonočna jed iz Primorske, ki si jo lahko privoščimo ob zajtrku ali topli kavi. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[11],
    questionImg: "media/hrana/slovenija-hrana-pinca.png",
  },
  {
    id: "12",
    question:
      "Nastala je v letu 1952, vanjo pa sodi izključno brusnični nadev. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[12],
    questionImg: "media/hrana/slovenija-hrana-pohorskaomleta.png",
  },
  {
    id: "13",
    question:
      "Jed je zelo kalorična, saj je vsaka plast prelita z obilo sladke smetane, jajc in masla. Prav zato se je postregla le ob svečanih priložnostih, saj izdelava ni bila poceni. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[13],
    questionImg: "media/hrana/slovenija-hrana-prekmurskagibanica.png",
  },
  {
    id: "14",
    question:
      "Lahko so slani ali sladki, ponudijo pa se lahko kot izvrstna samostojna jed, priloga ali posladek, uporabljajo pa se tudi kot dodatek juhi. To so...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[14],
    questionImg: "media/hrana/slovenija-hrana-skutinistruklji.png",
  },
  {
    id: "15",
    question:
      "Preprosta samostojna kmečka jed iz Primorske. Pomembno je, da se pri pripravi uporabljajo sezonske sestavine. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[15],
    questionImg: "media/hrana/slovenija-hrana-zeliscnafrtalja.png",
  },
];

let hribovjaQuizOptions = [
  "Goriško hribovje",
  "Julijske Alpe",
  "Kamniško Savinjske Alpe",
  "Karavanke",
  "Pohorje",
  "Snežniško hribovje",
];
let hribovjaQuiz = [
  {
    id: "0",
    question: "Najvišji vrh ima 1495 m.",
    options: hribovjaQuizOptions,
    correct: hribovjaQuizOptions[0],
    questionImg: "media/hribovja/slovenija-gore-gorisko.png",
  },
  {
    id: "1",
    question: "Najvišji vrh ima 2864 m.",
    options: hribovjaQuizOptions,
    correct: hribovjaQuizOptions[1],
    questionImg: "media/hribovja/slovenija-gore-julijci.png",
  },
  {
    id: "2",
    question: "Najvišji vrh ima 2558 m.",
    options: hribovjaQuizOptions,
    correct: hribovjaQuizOptions[2],
    questionImg: "media/hribovja/slovenija-gore-kamniskosavinjske.png",
  },
  {
    id: "3",
    question: "Najvišji vrh ima 2236 m.",
    options: hribovjaQuizOptions,
    correct: hribovjaQuizOptions[3],
    questionImg: "media/hribovja/slovenija-gore-karavanke.png",
  },
  {
    id: "4",
    question: "Najvišji vrh ima 1543 m.",
    options: hribovjaQuizOptions,
    correct: hribovjaQuizOptions[4],
    questionImg: "media/hribovja/slovenija-gore-pohorje.png",
  },
  {
    id: "5",
    question: "Najvišji vrh ima 1796 m.",
    options: hribovjaQuizOptions,
    correct: hribovjaQuizOptions[5],
    questionImg: "media/hribovja/slovenija-gore-sneznisko.png",
  },
];

let junakiQuizOptions = [
  "Erazem Predjamski",
  "Kekec",
  "Kralj Matjaž",
  "Kralj Samo",
  "Lepa Vida",
  "Martin Krpan",
  "Povodni mož",
  "Zeleni Jurij",
];
let junakiQuiz = [
  {
    id: "0",
    question: "Sin tržaškega cesarskega glavarja Nikolaja, znan predvsem kot ropar. Kmalu je zaslovel kot hraber bojevnik, a ker se je sprl s cesarjem, se je bil primoran umakniti na domači grad, ki ga je oblegala cesarska vojska. Brez težav je prenašal obleganje, saj je bilo pod gradom veliko rovov, po katerih so prenašali hrano. Cesarjevi vojaki so po naključju streljali na grad in ga ubili.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[0],
    questionImg:
      "media/junaki/slovenija-junaki-erazempredjamski.png",
  },
  {
    id: "1",
    question: "Je pogumen in prijazen pastirček, ki na visokogorskih pašnikih doživi marsikaj zanimivega. Medtem, ko se njegova čreda ovac in goveda mirno pase, se on sprehaja in raziskuje po gorskih travnikih in poteh.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[1],
    questionImg:
      "media/junaki/slovenija-junaki-kekec.png",
  },
  {
    id: "2",
    question: "Med ljudmi je bil zelo priljubljen, saj je pomagal vsem in je bil zelo radodaren. Zaradi njegove priljubljenosti so se ostali vladarji odločili, da ga ubijejo. Legenda pravi, da je zaspal pod goro Peco na Koroškem, kamor se je zatekel pred sovražniki. Ko se mu bo brada devetkrat ovila okoli kamnite mize, pa se bo zbudil in bo spet zavladal. To pomeni, da bodo za Koroško nastopili spet dobri časi.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[2],
    questionImg:
      "media/junaki/slovenija-junaki-kraljmatjaz.png",
  },
  {
    id: "3",
    question: "V mladih letih je bil trgovec, zaradi izjemne bojevitosti pa je postal vladar prve slovanske organizirane zveze, Karantanije, ki je obsegala ozemlje današnje Češke, Slovaške, Avstrije in Slovenije. Imel je 12 žena, 35 sinov in 15 hčera.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[3],
    questionImg:
      "media/junaki/slovenija-junaki-kraljsamo.png",
  },
  {
    id: "4",
    question: "Lik, ki simbolizira hrepenenje po nedosegljivem, po sanjah, ki ostajajo le sanje, po željah, ki so neuresničljive.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[4],
    questionImg:
      "media/junaki/slovenija-junaki-lepavida.png",
  },
  {
    id: "5",
    question: "Bil je močan in samosvoj človek. Tihotapljal je angleško sol, zaradi česar ga je oblast preganjala. Nekoč je na cesti srečal cesarja, ta ga je ogovoril, saj ga je njegova fizična moč navdušila - hotel je namreč pomoč v boju s turškim banditom. Tihotapec soli se je tako odpravil na Dunaj in turškemu banditu odsekal glavo z lipovo vejo. Za nagrado je od cesarja dobil dovoljenje za tovorjenje angleške soli.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[5],
    questionImg:
      "media/junaki/slovenija-junaki-martinkrpan.png",
  },
  {
    id: "6",
    question: "Na Starem trgu se odvija ples, na katerem Urška zavrača fante enega za drugim. Plesa je že skoraj konec, ko zagleda mladeniča, ki ga želi omrežiti. Ta jo prosi za ples in Urška privoli. Kljub grmenju in vetru se vrtita vse hitreje, dokler se ne zavrtita do brega in izgineta v vrtincu Ljubljanice.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[6],
    questionImg:
      "media/junaki/slovenija-junaki-povodnimoz.png",
  },
  {
    id: "7",
    question: "Moški, oblečen v brezove veje, ki hodi od hiše do hiše in na vrata zatika vejice, ki vasem in družinam prinaša srečo in zagotovilo, da bo letina dobra. Če družina vejice ne dobi, je to za njih velika sramota.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[7],
    questionImg:
      "media/junaki/slovenija-junaki-zelenijurij.png",
  },
];

let mestaQuiz = [
  {
    id: "0",
    question: "mestaQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let narodnisimboliQuiz = [
  {
    id: "0",
    question: "narodnisimboliQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let navadeQuiz = [
  {
    id: "0",
    question: "navadeQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let podjetjaQuiz = [
  {
    id: "0",
    question: "podjetjaQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let pokrajineQuiz = [
  {
    id: "0",
    question: "pokrajineQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let praznikiQuiz = [
  {
    id: "0",
    question: "praznikiQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let pregovoriQuiz = [
  {
    id: "0",
    question: "pregovoriQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let rekeQuiz = [
  {
    id: "0",
    question: "rekeQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let splosnakulturaQuiz = [
  {
    id: "0",
    question: "splosnakulturaQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let sportnikiQuiz = [
  {
    id: "0",
    question: "sportnikiQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let tabliceQuiz = [
  {
    id: "0",
    question: "tabliceQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let turisticnedestinacijeQuiz = [
  {
    id: "0",
    question: "turisticnedestinacijeQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let vinaQuiz = [
  {
    id: "0",
    question: "vinaQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let zanimivostiQuiz = [
  {
    id: "0",
    question: "zanimivostiQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let zgodovinaQuiz = [
  {
    id: "0",
    question: "zgodovinaQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let znaneosebnostiQuiz = [
  {
    id: "0",
    question: "znaneosebnostiQuiz",
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

let quizArray = [];

//Restart Quiz
restart.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  categoriesScreen.classList.remove("hide");
  initial();
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Imate " + scoreCount + " od " + questionCount + " točk.";
      if (scoreCount >= questionCount) {
        // TODO 1->questionCount
        userScoreWin.classList.remove("hide");
        surpriseButton.classList.remove("hide");
        restart.classList.add("hide");
      }
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        "Vprašanje " + (questionCount + 1) + "/" + quizArray.length;
      //display quiz
      quizDisplay(questionCount);
      count = timecount;
      clearInterval(countdown);
      //timerDisplay(); todo: disabled timer
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  // empty the array
  quizArray = [];

  // create an array with questions of sorted categories
  if (selectedCategories.casopisi)
    casopisiQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.geografskipolozaj)
    geografskipolozajQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.hrana) hranaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.hribovja)
    hribovjaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.junaki) junakiQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.mesta) mestaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.narodnisimboli)
    narodnisimboliQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.navade) navadeQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.podjetja)
    podjetjaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.pokrajine)
    pokrajineQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.prazniki)
    praznikiQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.pregovori)
    pregovoriQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.reke) rekeQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.splosnakultura)
    splosnakulturaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.sportniki)
    sportnikiQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.tablice)
    tabliceQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.turisticnedestinacije)
    turisticnedestinacijeQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.vina) vinaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.zanimivosti)
    zanimivostiQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.zgodovina)
    zgodovinaQuiz.forEach((el) => quizArray.push(el));
  if (selectedCategories.znaneosebnosti)
    znaneosebnostiQuiz.forEach((el) => quizArray.push(el));

  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);

  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = "Vprašanje 1/" + quizArray.length;
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);

    // ***
    let question_IMG = document.createElement("img");
    question_IMG.src = i.questionImg;
    question_IMG.classList.add("question-image");

    div.appendChild(question_IMG);
    // ***

    //options
    i.options.forEach((option) => {
      div.innerHTML += `<button class="option-div" onclick="checker(this)">${option}</button>`;
    });
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = timecount;
  clearInterval(countdown);
  //timerDisplay(); todo: disabled timer
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  categoriesScreen.classList.remove("hide");
});

//when user click on start button
selectCategoriesBtn.addEventListener("click", () => {
  selectedCategories = {
    casopisi: document.querySelector("#casopisi").checked,
    geografskipolozaj: document.querySelector("#geografskipolozaj").checked,
    hrana: document.querySelector("#hrana").checked,
    hribovja: document.querySelector("#hribovja").checked,
    junaki: document.querySelector("#junaki").checked,
    mesta: document.querySelector("#mesta").checked,
    narodnisimboli: document.querySelector("#narodnisimboli").checked,
    navade: document.querySelector("#navade").checked,
    podjetja: document.querySelector("#podjetja").checked,
    pokrajine: document.querySelector("#pokrajine").checked,
    prazniki: document.querySelector("#prazniki").checked,
    pregovori: document.querySelector("#pregovori").checked,
    reke: document.querySelector("#reke").checked,
    splosnakultura: document.querySelector("#splosnakultura").checked,
    sportniki: document.querySelector("#sportniki").checked,
    tablice: document.querySelector("#tablice").checked,
    turisticnedestinacije: document.querySelector("#turisticnedestinacije")
      .checked,
    vina: document.querySelector("#vina").checked,
    zanimivosti: document.querySelector("#zanimivosti").checked,
    zgodovina: document.querySelector("#zgodovina").checked,
    znaneosebnosti: document.querySelector("#znaneosebnosti").checked,
  };

  for (const [key, value] of Object.entries(selectedCategories)) {
    if (value) atLeastOneCategoryIsSelected = true;
  }
  if (!atLeastOneCategoryIsSelected) return;
  atLeastOneCategoryIsSelected = false;

  categoriesScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});
