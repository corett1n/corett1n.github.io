//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
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

//Questions and Options array
const quizArray = [
  {
    id: "0",
    question: 'Kakšen je pravilen odgovor na "Plačate z gotovino"?',
    options: [
      "Da, gotovina.",
      "Ne, kartica bo.",
      "Ne gotovina, cash.",
      "Oboje.",
    ],
    correct: "Ne gotovina, cash.",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "1",
    question:
      "Kateri izraz se uporablja za opis zelo kratkega časovnega obdobja?",
    options: ["V pol sekunde", "V hipu", "V trenutku", "Takoj"],
    correct: "V pol sekunde",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "2",
    question: "Kako se bere zapis 10%?",
    options: [
      "Deset odsto odstotkov",
      "Deset odstotkov",
      "Sto odstotkov",
      "Deset posto",
    ],
    correct: "Deset odsto odstotkov",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "3",
    question: "Naslov te slike je?",
    options: [
      "Raining in the rain",
      "Singing in the rain",
      "Raining in the sing",
      "Singing in the sing",
    ],
    correct: "Raining in the rain",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "4",
    question: 'Kateri je pravilen odgovor na vprašanje "Kaj bo potem?"?',
    options: ["Vse", "Xbox", "Serija", "Kavica"],
    correct: "Vse",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "5",
    question: "*Na sliki je...?",
    options: [
      "Slovaška zastava",
      "Slovenska zastava",
      "Ruska zastava",
      "Poljska zastava",
    ],
    correct: "Slovaška zastava",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "6",
    question: "Kako je ime gradu na sliki?",
    options: [
      "Miramarski grad",
      "Schloss Miramar",
      "Castello di Miramare",
      "Miramare castle",
    ],
    correct: "Miramarski grad",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "7",
    question: "Katera kavica je najboljša?",
    options: ["Trst", "Novi Sad", "Ljubljana", "Budimpešta"],
    correct: "Trst",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "8",
    question: "Kateri after kavica je najboljši?",
    options: ["Novi Sad", "Trst", "Ljubljana", "Budimpešta"],
    correct: "Novi Sad",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "9",
    question: "Kateri fitnes hoče Jana za Martina in zakaj?",
    options: [
      "Benetke - da ga lahko moti",
      "Split - da ga lahko prekine",
      "Trst - da pride Martin zjutraj v posteljo",
      "Ljubljana - da se celo noč stiska k njemu",
    ],
    correct: "Benetke - da ga lahko moti",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "10",
    question: "Kako je ime tej igri in kdo vedno zmaga?",
    options: [
      "Briškola, Martin",
      "Briscola, Martin",
      "Briscola, Jana",
      "Briškola, Jana",
    ],
    correct: "Briškola, Martin",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "11",
    question: "Kdo vedno zmaga v šahu?",
    options: ["Martin", "Jana", "Oba", "Nobeden"],
    correct: "Martin",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "12",
    question: "Kako se reče slonu po madžarsko?",
    options: ["Szlon", "Zlon", "Sslon", "Elefant"],
    correct: "Szlon",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "13",
    question:
      "Kdo sta glavna igralca filma, ki bo kmalu na sporedu v Cineplexx Koper?",
    options: [
      "Medo Makedonija in Panda Pandica",
      "Martin in Jana",
      "Gru in minioni",
      "Medo Makedonija in Snežak Slovenija",
    ],
    correct: "Medo Makedonija in Panda Pandica",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "14",
    question: "Kdo dela najboljše sendviče?",
    options: ["Martin", "Jana", "Sendviček", "Paninček"],
    correct: "Martin",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "15",
    question: "Čigav je Xbox?",
    options: [
      "Martinov",
      "Janin",
      "Od Meda Makedonija",
      "Od Snežaka Slovenija",
    ],
    correct: "Martinov",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "16",
    question: "Kakšno registracijo imajo avtomobili v mestu Bjelovar?",
    options: ["BJ", "BE", "BL", "BV"],
    correct: "BJ",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "17",
    question: "*Kaj imajo skupnega Benetke in Budimpešta?",
    options: [
      "Obe mesti se začneta na B",
      "Mesti sta pobrateni",
      "Obe imata pomembno pristanišče",
      "Barve zastave",
    ],
    correct: "Obe mesti se začneta na B",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "18",
    question: "Čigav je ta nosek?",
    options: [
      "Martinov",
      "Janin",
      "Od Meda Makedonija",
      "Od Snežaka Slovenija",
    ],
    correct: "Martinov",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "19",
    question: "*Kam bi dala Jana tuš v stanovanju?",
    options: ["Blizu postelje", "Na hodnik", "V stranišče", "Na dvorišče"],
    correct: "Blizu postelje",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "20",
    question: "Kakšna je pravilna poza za sliko za vizum?",
    options: ["Zvita", "Pokončna", "Ravna", "Stranska"],
    correct: "Zvita",
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
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
        "Imaš " + scoreCount + " od " + questionCount + " točk.";
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
      timerDisplay();
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
    div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
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
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  //startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
