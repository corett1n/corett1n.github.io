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
let nameContainer = document.querySelector(".start-screen-name");
let eventContainer = document.querySelector(".start-screen-event");
let dateContainer = document.querySelector(".start-screen-date");
let ageContainer = document.querySelector(".start-screen-age");
let introContainer = document.querySelector(".start-screen-intro");
let qrCodeContainer = document.querySelector(".qr-code");
let nameButton = document.getElementById("next-button-name");
let eventButton= document.getElementById("next-button-event");
let dateButton = document.getElementById("next-button-date");
let ageButton = document.getElementById("next-button-age");
let surpriseButton = document.getElementById("to-the-code");
let eventButtonNo = document.getElementById("event-button-no");
let introButton = document.getElementById("next-button-intro");
let userScoreWin = document.getElementById("user-score-win");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array
const quizArray = [
  {
    id: "0",
    question: "Kakšen je pravilen odgovor na \"Plačate z gotovino\"?",
    options: ["Da, gotovina.", "Ne, kartica bo.", "Ne gotovina, cash.", "Oboje."],
    correct: "Ne gotovina, cash.",
    questionImg: "img/0_main.jpg",
  },
  {
    id: "1",
    question: "Kateri izraz se uporablja za opis zelo kratkega časovnega obdobja?",
    options: ["V pol sekunde", "V hipu", "V trenutku", "Takoj"],
    correct: "V pol sekunde",
    questionImg: "img/1_main.jpg",
  },
  {
    id: "2",
    question: "Kako se bere zapis 10%?",
    options: ["Deset odsto odstotkov", "Deset odstotkov", "Sto odstotkov", "Deset posto"],
    correct: "Deset odsto odstotkov",
    questionImg: "img/2_main.jpg",
  },
  {
    id: "3",
    question: "Naslov te slike je?",
    options: ["Raining in the rain", "Singing in the rain", "Raining in the sing", "Singing in the sing"],
    correct: "Raining in the rain",
    questionImg: "img/3_main.jpg",
  },
  {
    id: "4",
    question: "Kateri je pravilen odgovor na vprašanje \"Kaj bo potem?\"?",
    options: ["Vse", "Xbox", "Serija", "Kavica"],
    correct: "Vse",
    questionImg: "img/4_main.jpeg",
  },
  {
    id: "5",
    question: "*Na sliki je...?",
    options: ["Slovaška zastava", "Slovenska zastava", "Ruska zastava", "Poljska zastava"],
    correct: "Slovaška zastava",
    questionImg: "img/5_main.png",
  },
  {
    id: "6",
    question: "Kako je ime gradu na sliki?",
    options: ["Miramarski grad", "Schloss Miramar", "Castello di Miramare", "Miramare castle"],
    correct: "Miramarski grad",
    questionImg: "img/6_main.jpg",
  },
  {
    id: "7",
    question: "Katera kavica je najboljša?",
    options: ["Trst", "Novi Sad", "Ljubljana", "Budimpešta"],
    correct: "Trst",
    questionImg: "img/7_main.jpg",
  },
  {
    id: "8",
    question: "Kateri after kavica je najboljši?",
    options: ["Novi Sad", "Trst", "Ljubljana", "Budimpešta"],
    correct: "Novi Sad",
    questionImg: "img/8_main.jpg",
  },
  {
    id: "9",
    question: "Kateri fitnes hoče Jana za Martina in zakaj?",
    options: ["Benetke - da ga lahko moti", "Split - da ga lahko prekine", "Trst - da pride Martin zjutraj v posteljo", "Ljubljana - da se celo noč stiska k njemu"],
    correct: "Benetke - da ga lahko moti",
    questionImg: "img/9_main.jpg",
  },
  {
    id: "10",
    question: "Kako je ime tej igri in kdo vedno zmaga?",
    options: ["Briškola, Martin", "Briscola, Martin", "Briscola, Jana", "Briškola, Jana"],
    correct: "Briškola, Martin",
    questionImg: "img/10_main.jpg",
  },
  {
    id: "11",
    question: "Kdo vedno zmaga v šahu?",
    options: ["Martin", "Jana", "Oba", "Nobeden"],
    correct: "Martin",
    questionImg: "img/11_main.jpeg",
  },
  {
    id: "12",
    question: "Kako se reče slonu po madžarsko?",
    options: ["Szlon", "Zlon", "Sslon", "Elefant"],
    correct: "Szlon",
    questionImg: "img/12_main.jpg",
  },
  {
    id: "13",
    question: "Kdo sta glavna igralca filma, ki bo kmalu na sporedu v Cineplexx Koper?",
    options: ["Medo Makedonija in Panda Pandica", "Martin in Jana", "Gru in minioni", "Medo Makedonija in Snežak Slovenija"],
    correct: "Medo Makedonija in Panda Pandica",
    questionImg: "img/13_main.jpg",
  },
  {
    id: "14",
    question: "Kdo dela najboljše sendviče?",
    options: ["Martin", "Jana", "Sendviček", "Paninček"],
    correct: "Martin",
    questionImg: "img/14_main.jpeg",
  },
  {
    id: "15",
    question: "Čigav je Xbox?",
    options: ["Martinov", "Janin", "Od Meda Makedonija", "Od Snežaka Slovenija"],
    correct: "Martinov",
    questionImg: "img/15_main.jpeg",
  },
  {
    id: "16",
    question: "Kakšno registracijo imajo avtomobili v mestu Bjelovar?",
    options: ["BJ", "BE", "BL", "BV"],
    correct: "BJ",
    questionImg: "img/16_main.jpg",
  },
  {
    id: "17",
    question: "*Kaj imajo skupnega Benetke in Budimpešta?",
    options: ["Obe mesti se začneta na B", "Mesti sta pobrateni", "Obe imata pomembno pristanišče", "Barve zastave"],
    correct: "Obe mesti se začneta na B",
    questionImg: "img/17_main.jpg",
  },
  {
    id: "18",
    question: "Čigav je ta nosek?",
    options: ["Martinov", "Janin", "Od Meda Makedonija", "Od Snežaka Slovenija"],
    correct: "Martinov",
    questionImg: "img/18_main.jpeg",
  },
  {
    id: "19",
    question: "*Kam bi dala Jana tuš v stanovanju?",
    options: ["Blizu postelje", "Na hodnik", "V stranišče", "Na dvorišče"],
    correct: "Blizu postelje",
    questionImg: "img/19_main.webp",
  },
  {
    id: "20",
    question: "Kakšna je pravilna poza za sliko za vizum?",
    options: ["Zvita", "Pokončna", "Ravna", "Stranska"],
    correct: "Zvita",
    questionImg: "img/20_main.jpeg",
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
        if(scoreCount >= 1){ // TODO 1->questionCount
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
      count = 11;
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
  count = 11;
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

nameButton.addEventListener("click", () => {
  nameContainer.classList.add("hide");
  document.getElementById("date-question-name").textContent = "Dobro " + document.getElementById("name-input").value + " Gianni, kaj je danes?";
  dateContainer.classList.remove("hide");
});

dateButton.addEventListener("click", () => {
  dateContainer.classList.add("hide");
  eventContainer.classList.remove("hide");
});

eventButton.addEventListener("click", () => {
  eventContainer.classList.add("hide");
  ageContainer.classList.remove("hide");
});

ageButton.addEventListener("click", () => {
  ageContainer.classList.add("hide");
  introContainer.classList.remove("hide");
});

introButton.addEventListener("click", () => {
  introContainer.classList.add("hide");
  startScreen.classList.remove("hide");
});

surpriseButton.addEventListener("click", () => {
  scoreContainer.classList.add("hide");
  qrCodeContainer.classList.remove("hide");
});

eventButtonNo.addEventListener("click", () => {
  alert("Torej zapri to stran takoj!!!11!!1!");
  eventButton.classList.add("hide");
});

//hide quiz and display start screen
window.onload = () => {
  //startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
