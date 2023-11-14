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
      "Po tradiciji se ta dolenjska dobrota na mizo prinese še topla, nakar si jo jedci z rokami sproti lomijo. Proizvod, zaščiten na ravni EU, je...",
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
      "Ta koroška jed je povezana s kolinami ob zakolu prašiča v poznem jesenskem ali zimskem času, jedli pa so jo ob romanjih, krstih in porokah. To je...",
    options: hranaQuizOptions,
    correct: hranaQuizOptions[7],
    questionImg: "media/hrana/slovenija-hrana-mezerli.png",
  },
  {
    id: "8",
    question:
      "Tipična primorska pustna jed, veliko enostavnejša za pripravo kot krofi. Ocvre se jih v vročem olju, lahko pa se jim tudi doda rozine. To so...",
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
      "Ta štajerska specialiteta je nastala v letu 1952, vanjo pa sodi izključno brusnični nadev. To je...",
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
      "Lahko so slani ali sladki, ponudijo pa se lahko kot izvrstna samostojna jed, priloga ali posladek, uporabljajo pa se tudi kot dodatek juhi. To so dolenjski...",
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
    question:
      "Sin tržaškega cesarskega glavarja Nikolaja, znan predvsem kot ropar. Kmalu je zaslovel kot hraber bojevnik, a ker se je sprl s cesarjem, se je bil primoran umakniti na domači grad, ki ga je oblegala cesarska vojska. Brez težav je prenašal obleganje, saj je bilo pod gradom veliko rovov, po katerih so prenašali hrano. Cesarjevi vojaki so po naključju streljali na grad in ga ubili.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[0],
    questionImg: "media/junaki/slovenija-junaki-erazempredjamski.png",
  },
  {
    id: "1",
    question:
      "Je pogumen in prijazen pastirček, ki na visokogorskih pašnikih doživi marsikaj zanimivega. Medtem, ko se njegova čreda ovac in goveda mirno pase, se on sprehaja in raziskuje po gorskih travnikih in poteh.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[1],
    questionImg: "media/junaki/slovenija-junaki-kekec.png",
  },
  {
    id: "2",
    question:
      "Med ljudmi je bil zelo priljubljen, saj je pomagal vsem in je bil zelo radodaren. Zaradi njegove priljubljenosti so se ostali vladarji odločili, da ga ubijejo. Legenda pravi, da je zaspal pod goro Peco na Koroškem, kamor se je zatekel pred sovražniki. Ko se mu bo brada devetkrat ovila okoli kamnite mize, pa se bo zbudil in bo spet zavladal. To pomeni, da bodo za Koroško nastopili spet dobri časi.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[2],
    questionImg: "media/junaki/slovenija-junaki-kraljmatjaz.png",
  },
  {
    id: "3",
    question:
      "V mladih letih je bil trgovec, zaradi izjemne bojevitosti pa je postal vladar prve slovanske organizirane zveze, Karantanije, ki je obsegala ozemlje današnje Češke, Slovaške, Avstrije in Slovenije. Imel je 12 žena, 35 sinov in 15 hčera.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[3],
    questionImg: "media/junaki/slovenija-junaki-kraljsamo.png",
  },
  {
    id: "4",
    question:
      "Lik, ki simbolizira hrepenenje po nedosegljivem, po sanjah, ki ostajajo le sanje, po željah, ki so neuresničljive.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[4],
    questionImg: "media/junaki/slovenija-junaki-lepavida.png",
  },
  {
    id: "5",
    question:
      "Bil je močan in samosvoj človek. Tihotapljal je angleško sol, zaradi česar ga je oblast preganjala. Nekoč je na cesti srečal cesarja, ta ga je ogovoril, saj ga je njegova fizična moč navdušila - hotel je namreč pomoč v boju s turškim banditom. Tihotapec soli se je tako odpravil na Dunaj in turškemu banditu odsekal glavo z lipovo vejo. Za nagrado je od cesarja dobil dovoljenje za tovorjenje angleške soli.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[5],
    questionImg: "media/junaki/slovenija-junaki-martinkrpan.png",
  },
  {
    id: "6",
    question:
      "Na Starem trgu se odvija ples, na katerem Urška zavrača fante enega za drugim. Plesa je že skoraj konec, ko zagleda mladeniča, ki ga želi omrežiti. Ta jo prosi za ples in Urška privoli. Kljub grmenju in vetru se vrtita vse hitreje, dokler se ne zavrtita do brega in izgineta v vrtincu Ljubljanice.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[6],
    questionImg: "media/junaki/slovenija-junaki-povodnimoz.png",
  },
  {
    id: "7",
    question:
      "Moški, oblečen v brezove veje, ki hodi od hiše do hiše in na vrata zatika vejice, ki vasem in družinam prinaša srečo in zagotovilo, da bo letina dobra. Če družina vejice ne dobi, je to za njih velika sramota.",
    options: junakiQuizOptions,
    correct: junakiQuizOptions[7],
    questionImg: "media/junaki/slovenija-junaki-zelenijurij.png",
  },
];

let mestaQuizOptions = [
  "Celje",
  "Domžale",
  "Izola",
  "Jesenice",
  "Kamnik",
  "Kočevje",
  "Koper",
  "Kranj",
  "Ljubljana",
  "Logatec",
  "Maribor",
  "Murska Sobota",
  "Nova Gorica",
  "Novo mesto",
  "Postojna",
  "Ptuj",
  "Škofja Loka",
  "Trbovlje",
  "Velenje",
  "Vrhnika",
];
let mestaQuiz = [
  {
    id: "0",
    question:
      "Tretje največje slovensko mesto s 40.000 prebivalci, znano po grofih in vitezih.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[0],
    questionImg: "media/mesta/slovenija-mesta-celje.png",
  },
  {
    id: "1",
    question:
      "Mesto s 15.000 prebivalci v Ljubljanski kotlini. Športno mesto, saj imata tu sedež nogometni in košarkarski klub.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[1],
    questionImg: "media/mesta/slovenija-mesta-domzale.png",
  },
  {
    id: "2",
    question: "Bivši otok in ribiško naselje, danes mesto s 13.000 prebivalci.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[2],
    questionImg: "media/mesta/slovenija-mesta-izola.png",
  },
  {
    id: "3",
    question:
      "Mesto s 14.000 prebivalci pod Karavankami, ki ima bogato železarsko tradicijo.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[3],
    questionImg: "media/mesta/slovenija-mesta-jesenice.png",
  },
  {
    id: "4",
    question:
      "Mesto, ki šteje 15.000 prebivalcev, z odlično ohranjenim srednjeveškim mestnim jedrom.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[4],
    questionImg: "media/mesta/slovenija-mesta-kamnik.png",
  },
  {
    id: "5",
    question:
      "Mesto s 10.000 prebivalci, ki ponuja lepote neokrnjene narave in ogromno možnosti za rekreacijo.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[5],
    questionImg: "media/mesta/slovenija-mesta-kocevje.png",
  },
  {
    id: "6",
    question:
      "Nekoč otok, danes peto največje slovensko mesto s 27.000 prebivalci. V njem se nahaja eno najpomembnejših pristanišč v Jadranu.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[6],
    questionImg: "media/mesta/slovenija-mesta-koper.png",
  },
  {
    id: "7",
    question:
      "S 38.000 prebivalci je četrto največje slovensko mesto, znano tudi kot Prešernovo mesto.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[7],
    questionImg: "media/mesta/slovenija-mesta-kranj.png",
  },
  {
    id: "8",
    question:
      "Prestolnica Republike Slovenije, šteje 300.000 prebivalcev, njeno ime izvira iz besede 'ljubezen'.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[8],
    questionImg: "media/mesta/slovenija-mesta-ljubljana.png",
  },
  {
    id: "9",
    question:
      "Mesto z 11.000 prebivalci, v bližini se nahaja Napoleonov lipov drevored.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[9],
    questionImg: "media/mesta/slovenija-mesta-logatec.png",
  },
  {
    id: "10",
    question:
      "Drugo največje slovensko mesto s 100.000 prebivalci. Tu raste in vzgaja najstarejša trta na svetu.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[10],
    questionImg: "media/mesta/slovenija-mesta-maribor.png",
  },
  {
    id: "11",
    question:
      "Mesto z 11.000 prebivalci, ime je dobilo po sejmih, ki so se v mestu odvijali ob sobotah.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[11],
    questionImg: "media/mesta/slovenija-mesta-murskasobota.png",
  },
  {
    id: "12",
    question:
      "Najnovejše slovensko mesto s 13.000 prebivalci, saj je bilo ustanovaljeno komaj leta 1947.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[12],
    questionImg: "media/mesta/slovenija-mesta-novagorica.png",
  },
  {
    id: "13",
    question:
      "Sedmo največje slovensko mesto s 25.000 prebivalci, pomemben sedež farmacevtske in avtomobilske industrije.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[13],
    questionImg: "media/mesta/slovenija-mesta-novomesto.png",
  },
  {
    id: "14",
    question: "Mesto z 10.000 prebivalci, ki živi skoraj izključno od turizma.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[14],
    questionImg: "media/mesta/slovenija-mesta-postojna.png",
  },
  {
    id: "15",
    question:
      "Najstarejše slovensko mesto z 18.000 prebivalci, ustanovili so ga Rimljani okoli leta 69.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[15],
    questionImg: "media/mesta/slovenija-mesta-ptuj.png",
  },
  {
    id: "16",
    question:
      "Mesto z 12.000 prebivalci, velja za najbolje ohranjeno srednjeveško mesto v Sloveniji.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[16],
    questionImg: "media/mesta/slovenija-mesta-skofjaloka.png",
  },
  {
    id: "17",
    question:
      "Mesto s 14.000 prebivalci, v njem se nahaja najvišja zgradba v Sloveniji.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[17],
    questionImg: "media/mesta/slovenija-mesta-trbovlje.png",
  },
  {
    id: "18",
    question:
      "Šesto največje slovensko mesto z 25.000 prebivalci, znano tudi kot mesto knapov.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[18],
    questionImg: "media/mesta/slovenija-mesta-velenje.png",
  },
  {
    id: "19",
    question:
      "Mesto z 10.000 prebivalci, tu se je rodil in deloval pisatelj Ivan Cankar.",
    options: mestaQuizOptions,
    correct: mestaQuizOptions[19],
    questionImg: "media/mesta/slovenija-mesta-vrhnika.png",
  },
];

let narodnisimboliQuizOptions = [
  "Abecednik",
  "Aljažev stolp",
  "Brižinski spomeniki",
  "Človeška ribica",
  "Grb Republike Slovenije",
  "Karantanski panter",
  "Knežji kamen",
  "Kozolec",
  "Kranjska čebela",
  "Kranjski orel",
  "Kraški ovčar",
  "Kurenti",
  "Lipa",
  "Lipicanec",
  "Triglav",
  "Nagelj",
  "Narodna noša",
  "Ornament",
  "Sejalec",
  "Slava vojvodine Kranjske",
  "Simbol Triglava",
  "Trobojnica",
  "Vojvodski prestol",
  "Vurnikova hiša",
  "Zastava",
  "Zdravljica",
  "Zemljevid slovenskih dežel",
  "Zlatorog",
];
let narodnisimboliQuiz = [
  {
    id: "0",
    question:
      "Prva slovenska tiskana knjiga, izdana v letu 1550. Trubar jo je napisal z namenom, da se preprosti Slovenci naučijo brati in pisati. V njej je prvič omenjena beseda 'Slovenci'.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[0],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-abecednik.png",
  },
  {
    id: "1",
    question:
      "Župnik Jakob Aljaž ni maral zanimanja tujcev za slovenske gore, zato se je temu skušal upreti z nakupom vrha Triglava za en goldinar, na katerega je dal leta 1895 postaviti gorsko zavetišče.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[1],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-aljazevstolp.png",
  },
  {
    id: "2",
    question:
      "Najstarejši zapis v slovenskem jeziku in kateremkoli slovanskem jeziku v latinici. Nastal je leta 972, v njem pa so obrazci za spoved.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[2],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-brizinskispomeniki.png",
  },
  {
    id: "3",
    question:
      "Živi izključno v podzemeljskih vodah, saj je zelo občutljiva na svetlobo. Živi lahko do 100 let, nekoč pa so se jih ljudje bali, saj so zgledali kot mali zmaji.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[3],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-cloveskaribica.png",
  },
  {
    id: "4",
    question:
      "Ima obliko ščita, na katerem je simbol Triglava, trije šestokrake zveze celjskih grofov in valova, ki prikazujeta slovensko morje in reke.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[4],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-grb.png",
  },
  {
    id: "5",
    question:
      "Zgodovinski grb Štajerske, je simbol domoljubja. Dandanes je kot simbol uporabljen tako v vojski kot v policiji.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[5],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-karantanskipanter.png",
  },
  {
    id: "6",
    question:
      "Obrnjen spodnji del rimskega stebra, na njem je potekalo ustoličevanje karantanskih knezov in koroških vojvod.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[6],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-knezjikamen.png",
  },
  {
    id: "7",
    question:
      "Lesena, s strani odprta stavba za sušenje žita in trave, značilna za slovensko podeželje. Nahajajo se le v krajih, kjer živijo Slovenci.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[7],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-kozolec.png",
  },
  {
    id: "8",
    question:
      "Njena domovina je Gorenjska, je zelo vitka in umirjena. Velja za drugo najbolj razširjeno sorto na svetu.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[8],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-kranjskacebela.png",
  },
  {
    id: "9",
    question:
      "Zgodovinski grb dežele Kranjske, ki obsega današnjo Gorenjsko, Notranjsko, Dolenjsko in del Primorske. Nastal naj bi v 12. stoletju.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[9],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-kranjskiorel.png",
  },
  {
    id: "10",
    question:
      "Edina slovenska avtohtona sorta psov. Je srednje velik, mišičast, z gosto in bujno železno sivo dlako. Ima prijazen in rahlo otožen pogled.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[10],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-kraskiovcar.png",
  },
  {
    id: "11",
    question:
      "Značilni pustni lik iz Ptuja in okolice. S poskakovanjem in hudim truščem iz dežele odganjajo zimo in zlo, vanjo pa kličejo pomlad.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[11],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-kurenti.png",
  },
  {
    id: "12",
    question:
      "V vaseh so se ob njej zbrali vaščani, da bi obravnavali medsebojne spore, sprejemali odločitve o medsebojni pomoči, volili, pod njo pa so se tudi zbirali na praznovanjih, veselicah in plesih. Ima pomen središča skupnosti.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[12],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-lipa.png",
  },
  {
    id: "13",
    question:
      "Slovenska avtohtona sorta, ki sega v leto 1580. Žrebijo se temne barve, s starostjo pa postanejo povsem bele barve. Ima živahen temperament, a je dobro učljiv.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[13],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-lipicanec.png",
  },
  {
    id: "14",
    question:
      "Sliko je naslikal Marko Pernhart, prvi slovenski realistični krajinski slikar, doma iz Koroške. Naslikal je tudi Gospo Sveto, Krnski grad, Vrbsko in Blejsko jezero, Šmarno goro in Kranj.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[14],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-markopernhartovtriglav.png",
  },
  {
    id: "15",
    question:
      "Prva slovenska roža, ki nosi velik simbolni pomen ljubezni in slovenstva. Ob krstu in poroki je bel, ob slovesu pa rdeč. ",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[15],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-nagelj.png",
  },
  {
    id: "16",
    question:
      "Odražale so družbeni položaj ljudi. Po vzorcih, vezenju in barvi so se razlikovale po vaseh, vsaka pa ima svojo zgodovino, ki sega tudi več stoletij v preteklost. Najdragocenejše so istrske, saj je njihova izdelava zahtevala največ časa in ročnega dela.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[16],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-narodnanosa.png",
  },
  {
    id: "17",
    question:
      "Likovna umetnost, ki se v vseh časih razvija, izpopolnjuje in dopolnjuje. Slovenska se bistveno razlikuje od drugih že v zasnovi in pojmovanju.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[17],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-ornament.png",
  },
  {
    id: "18",
    question:
      "Impresionistična slika Ivana Groharja. V središču slike je kmet pri delu, v ozadju pa stoji kozolec.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[18],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-sejalec.png",
  },
  {
    id: "19",
    question:
      "Knjigo je napisal Janez Vajkard Valvazor leta 1689, velja pa za eno najpomembnejših znanstvenih del o Kranjski.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[19],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-slavavojvodinekranjske.png",
  },
  {
    id: "20",
    question:
      "Prikazuje najvišjo slovensko goro, visoko kar 2864 m. Ime je verjetno dobila po njeni obliki, kot je vidna iz Bohinja. Nastopa v slovenskih grbih že več stoletij.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[20],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-triglav.png",
  },
  {
    id: "21",
    question:
      "Prvič jo je 7. aprila 1848 v Ljubljani izobesil domoljubni študent Lovro Toman na Wolfovi ulici 8, kot odgovor na izobešanje nemške zastave na Ljubljanskem gradu.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[21],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-trobojnica.png",
  },
  {
    id: "22",
    question:
      "Stoji na Gosposvetskem polju na Koroškem, na njem so ustoličevali koroške vojvode v slovenskem jeziku.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[22],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vojvodskiprestol.png",
  },
  {
    id: "23",
    question:
      "Ob gradnji so zavrgli prvotne ideje o dunajskih okrasih, namesto njih pa so na fasado narisali tipične slovenske motive ornamentike.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[23],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-vurnikovahisa.png",
  },
  {
    id: "24",
    question:
      "Sestavljajo jo slovenske narodne barve in grb s Triglavom. Uradna je od leta 1991, ko je Slovenija postala samostojna država.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[24],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-zastava.png",
  },
  {
    id: "25",
    question:
      "Napisal jo je France Prešeren leta 1848, v njej je predstavljena ideja o svobodi in zedinjenosti Slovencev. Napisana je v obliki čaše, saj gre za napitnico. Danes je njena sedma kitica himna Republike Slovenije.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[25],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-zdravljica.png",
  },
  {
    id: "26",
    question:
      "Narisal ga je Peter Kozler, saj se je kot narodno zaveden Slovenec zavzemal za idejo Zedinjene Slovenije. Peter Kozler je tudi ustanovitelj Pivovarne Union.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[26],
    questionImg:
      "media/narodnisimboli/slovenija-narodnisimboli-zemljevidslovenskihdezel.png",
  },
  {
    id: "27",
    question:
      "Vedno ga spremljajo tri device, ki varujejo skriti zaklad. Legenda pravi, da so ga številni ljudje poskušali ujeti, da bi se dokopali do zaklada. Nekega dne ga je pohlepnemu lovcu uspelo ubiti, iz njegove rane pa je stekla kri, ki je vzklila triglavsko rožo, ki ima čudežne zdravilne učinke.",
    options: narodnisimboliQuizOptions,
    correct: narodnisimboliQuizOptions[27],
    questionImg: "media/narodnisimboli/slovenija-narodnisimboli-zlatorog.png",
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

let pokrajineQuizOptions = [
  "Dolenjska",
  "Gorenjska",
  "Koroška",
  "Notranjska",
  "Prekmurje",
  "Primorska",
  "Štajerska",
];
let pokrajineQuiz = [
  {
    id: "0",
    question: "Njen center je Novo mesto.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[0],
    questionImg: "media/pokrajine/slovenija-pokrajine-dolenjska.png",
  },
  {
    id: "1",
    question: "Njen center je Kranj.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[1],
    questionImg: "media/pokrajine/slovenija-pokrajine-gorenjska.png",
  },
  {
    id: "2",
    question: "Njen center je Slovenj Gradec.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[2],
    questionImg: "media/pokrajine/slovenija-pokrajine-koroska.png",
  },
  {
    id: "3",
    question: "Njen center je Postojna.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[3],
    questionImg: "media/pokrajine/slovenija-pokrajine-notranjska.png",
  },
  {
    id: "4",
    question: "Njen center je Murska Sobota.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[4],
    questionImg: "media/pokrajine/slovenija-pokrajine-prekmurje.png",
  },
  {
    id: "5",
    question: "Njen center je Koper.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[5],
    questionImg: "media/pokrajine/slovenija-pokrajine-primorska.png",
  },
  {
    id: "6",
    question: "Njen center je Maribor.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[6],
    questionImg: "media/pokrajine/slovenija-pokrajine-stajerska.png",
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

let rekeQuizOptions = [
  "Drava",
  "Kolpa",
  "Krka",
  "Ljubljanica",
  "Mura",
  "Reka",
  "Sava",
  "Savinja",
  "Soča",
  "Sora",
  "Vipava",
];
let rekeQuiz = [
  {
    id: "0",
    question:
      "Izvira v Toblachu na Južnem Tirolskem, izliva pa se v Donavo blizu Osijeka. Dolga je 749 km, od tega 117 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[0],
    questionImg: "media/reke/slovenija-reke-drava.png",
  },
  {
    id: "1",
    question:
      "Izvira v Gorskem kotarju, izliva pa se v Savo blizu Sisaka. Dolga je 294 km, od tega 118 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[1],
    questionImg: "media/reke/slovenija-reke-kolpa.png",
  },
  {
    id: "2",
    question:
      "Izvira v bližini Ivančne Gorice, izliva pa se v Savo blizu Brežic. Dolga je 94 km.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[2],
    questionImg: "media/reke/slovenija-reke-krka.png",
  },
  {
    id: "3",
    question:
      "Izvira v bližini Vrhnike, izliva pa se v Savo pri Podgradu. Dolga je 41 km.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[3],
    questionImg: "media/reke/slovenija-reke-ljubljanica.png",
  },
  {
    id: "4",
    question:
      "Izvira v Visokih Turah, izliva pa se v Dravo pri Legradu. Dolga je 438 km, od tega 95 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[4],
    questionImg: "media/reke/slovenija-reke-mura.png",
  },
  {
    id: "5",
    question:
      "Izvira v bližini Klane, izliva pa se v Škocjanskih jamah. Dolga je 54 km, od tega 51 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[5],
    questionImg: "media/reke/slovenija-reke-reka.png",
  },
  {
    id: "6",
    question:
      "Izvira v Zelencih pri Kranjski gori, izliva pa se v Donavo pri Beogradu. Dolga je 947 km, od tega 225 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[6],
    questionImg: "media/reke/slovenija-reke-sava.png",
  },
  {
    id: "7",
    question:
      "Izvira nad slapom Rinka, izliva pa se v Savo pri Zidanem Mostu. Dolga je 102 km.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[7],
    questionImg: "media/reke/slovenija-reke-savinja.png",
  },
  {
    id: "8",
    question:
      "Izvira v Triglavskem narodnem parku, izliva pa se v Jadransko morje blizu Tržiča. Dolga je 138 km, od tega 96 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[8],
    questionImg: "media/reke/slovenija-reke-soca.png",
  },
  {
    id: "9",
    question:
      "Izvira v bližini Škofje Loke, izliva pa se v Savo pri Medvodah. Dolga je 52 km.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[9],
    questionImg: "media/reke/slovenija-reke-sora.png",
  },
  {
    id: "10",
    question:
      "Izvira v bližini Vipave, izliva pa se v Sočo pri Sovodnjah. Dolga je 49 km, od tega 44 km v Sloveniji.",
    options: rekeQuizOptions,
    correct: rekeQuizOptions[10],
    questionImg: "media/reke/slovenija-reke-vipava.png",
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

let tabliceQuizOptions = [
  "CE (Celje)",
  "GO (Nova Gorica)",
  "KK (Krško)",
  "KP (Koper)",
  "KR (Kranj)",
  "LJ (Ljubljana)",
  "MB (Maribor)",
  "MS (Murska Sobota)",
  "NM (Novo mesto)",
  "SG (Slovenj Gradec)",
];
let tabliceQuiz = [
  {
    id: "0",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[0],
    questionImg: "media/tablice/slovenija-tablice-ce.png",
  },
  {
    id: "1",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[1],
    questionImg: "media/tablice/slovenija-tablice-go.png",
  },
  {
    id: "2",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[2],
    questionImg: "media/tablice/slovenija-tablice-kk.png",
  },
  {
    id: "3",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[3],
    questionImg: "media/tablice/slovenija-tablice-kp.png",
  },
  {
    id: "4",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[4],
    questionImg: "media/tablice/slovenija-tablice-kr.png",
  },
  {
    id: "5",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[5],
    questionImg: "media/tablice/slovenija-tablice-lj.png",
  },
  {
    id: "6",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[6],
    questionImg: "media/tablice/slovenija-tablice-mb.png",
  },
  {
    id: "7",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[7],
    questionImg: "media/tablice/slovenija-tablice-ms.png",
  },
  {
    id: "8",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[8],
    questionImg: "media/tablice/slovenija-tablice-nm.png",
  },
  {
    id: "9",
    question: "",
    options: tabliceQuizOptions,
    correct: tabliceQuizOptions[9],
    questionImg: "media/tablice/slovenija-tablice-sg.png",
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
