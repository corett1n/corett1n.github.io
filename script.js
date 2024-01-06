//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let selectCategoriesBtn = document.getElementById("select-categories");
let nextBtn = document.getElementById("next-button");
let endBtn = document.getElementById("end-button");
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
let vseKategorijeButton = document.getElementById("vsekategorije");
let questionCount;
let scoreCount = 0;
let timecount = 60;
let countdown;
let atLeastOneCategoryIsSelected = false;

//Questions and Options array

let selectedCategories = {};

let casopisiQuizOptions = [
  "Delo",
  "Dnevnik",
  "Edinost",
  "Kmetijske in rokodelske novice",
  "Ljubljanski zvon",
  "Primorski dnevnik",
  "Slovenec",
  "Slovenski narod",
  "Slovenski poročevalec",
  "Večer",
];
let casopisiQuiz = [
  {
    id: "0",
    question:
      "Časopis je nastal v Ljubljani z združitvijo časopisov Ljudska pravica in Slovenski poročevalec. Prva številka je izšla leta 1959, leta 1991 pa je časopis ustanovil tabloid Slovenske novice. Izhaja dnevno od ponedeljka do sobote in ima 8 rednih prilog (od kuhinjskih receptov in finačnih komentarjev do modnih trendov).",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[0],
    questionImg: "media/casopisi/slovenija-casopisi-delo.png",
  },
  {
    id: "1",
    question:
      "Časopis je leta 1951 ustanovila Socialistična zveza delovnega ljudstva Slovenije. Pokrival je predvsem Ljubljansko kotlino in del Gorenjske in Dolenjske, sprva pa izhajal kot popoldnevnik, do leta 1988 pa je izhajal že po vsej Sloveniji.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[1],
    questionImg: "media/casopisi/slovenija-casopisi-dnevnik.png",
  },
  {
    id: "2",
    question:
      "V obdobju med 1876 in 1928 je bil politično glasilo tržaških Slovencev, pa tudi na širšem področju Primorske in Istre. Časopis je prenehal obstajati zaradi prisilne ukinitve s strani fašističnega režima, ki je prepovedoval javno rabo slovenskega jezika.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[2],
    questionImg: "media/casopisi/slovenija-casopisi-edinost.png",
  },
  {
    id: "3",
    question:
      "Slovenski časnik, ki je izhajal med letoma 1843 in 1902. V kulturnem smislu je bil zelo pomemben, saj je utrdil enoten slovenski knjižni jezik, splošni sprejem gajice in nasploh vsestranski kulturni razvoj slovenskega naroda. Objavljal je tudi Prešernova, Levstikova, Jenkova in Jurčičeva dela.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[3],
    questionImg:
      "media/casopisi/slovenija-casopisi-kmetijskeinrokodelskenovice.png",
  },
  {
    id: "4",
    question:
      "Od leta 1881 do 1941 je bil osrednji slovenski literarni mesečnik. Skoraj ves čas izhajanja je bil med vodilnimi slovenskimi literarnimi revijami. Poleg leposlovja, kateremu je bil v prvi vrsti namenjen, je prinašal še umetnostno kritiko ter razprave in eseje o umetnosti.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[4],
    questionImg: "media/casopisi/slovenija-casopisi-ljubljanskizvon.png",
  },
  {
    id: "5",
    question:
      "Njegov predhodnik je bil Partizanski dnevnik, ki je začel izhajati leta 1943 kot edini tiskani dnevnik protifašističnega partizanskega odpora v okupirani Evropi. Sedaj ima sedež v Trstu, velja pa za edini dnevnik Slovencev v Italiji.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[5],
    questionImg: "media/casopisi/slovenija-casopisi-primorskidnevnik.png",
  },
  {
    id: "6",
    question:
      "V letih 1873 - 1945 je bil vodilni časnik političnega katolicizma na Slovenskem. Časnik se je kljub večkratni zamenjavi oblasti in vsem svetovnim ter domačim krizam obdržal vse do konca druge svetovne vojne leta 1945, ko so ga nove oblasti ukinile.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[6],
    questionImg: "media/casopisi/slovenija-casopisi-slovenec.png",
  },
  {
    id: "7",
    question:
      "V letih 1868 - 1943 je bil politični časopis in prvi slovenski dnevnik. V času okupacije so bila v njem poročila okupacijskih oblasti in obtožbe Osvobodilne fronte. Ko so oblast na ljubljanskem območju prevzeli Nemci, je zaradi pomanjkanja papirja časopis nehal izhajati.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[7],
    questionImg: "media/casopisi/slovenija-casopisi-slovenskinarod.png",
  },
  {
    id: "8",
    question:
      "Časopis, ki je svojo pot začel kot ilegalno glasilo Komunistične partije Slovenije, kasneje pa je postal glasilo Osvobodilne fronte. Leta 1959 se je z združitvijo s časopisom Ljudske pravice preimenoval v Delo.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[8],
    questionImg: "media/casopisi/slovenija-casopisi-slovenskiporocevalec.png",
  },
  {
    id: "9",
    question:
      "Slovenski splošnoinformativni dnevni časopis, ki ga izdaja podjetje s sedežem v Mariboru. Poleg splošnih novic pokriva predvsem območje Štajerske in je eden najbolj branih slovenskih časopisov.",
    options: casopisiQuizOptions,
    correct: casopisiQuizOptions[9],
    questionImg: "media/casopisi/slovenija-casopisi-vecer.png",
  },
];

let geografskipolozajQuizOptions = [
  "Jadransko morje",
  "Z Avstrijo",
  "S Hrvaško",
  "Z Italijo",
  "Z Madžarsko",
  "V Srednji Evropi",
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

let navadeQuizOptions = [
  "Porok in veselic",
  "Mora biti miza ves dan polna jedače in pijače",
  "Napiše kratice imena kraljev nad domači prag",
  "Sedem dni",
  "Copate",
  "Krstiti",
  "Jaslice in Božično drevesce",
  "Velikonočne butarice",
  "Dan zaljubljencev",
  "Vina",
  "Pridne otroke obdarujejo, lumpe pa okarajo",
  "Jih gospodar ni pogostil",
  "Prvomajske budnice",
  "Kresovi",
  "Silvestrski poljub",
  "Marijino svetišče",
  "Mečejo kovance v nje",
  "Blagoslovljeno hrano",
  "Blagoslov hrane",
  "Na Triglavu",
  "Avto ali zemljišče",
  "Svetnikih na dan krsta",
  "Narodne noše",
  "V hribe",
  "Kozarec rdečega vina",
  "Neveste",
  "Soseda",
  "Pivo",
  "Goveje juhe, mesa, krompirja, solate in sladice",
  "Polnočnici",
  "Delajo hrup",
];
let navadeQuiz = [
  {
    id: "0",
    question: "Advent je čas duhovne priprave na Božič, zato v tem času ni...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[0],
    questionImg:
      "media/navade/slovenija-navade-adventjeduhovnapripravanabozicobadventuniporokinveselic.png",
  },
  {
    id: "1",
    question:
      "Božič je najpomembnejši dan v letu, zato je na ta dan prepovedano delati, velja pa, da...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[1],
    questionImg:
      "media/navade/slovenija-navade-bozicjenajpomembnejsidanvletuzatojeprepovedanodelatiampakmizamorabiticeldanpolnashranoinpijaco.png",
  },
  {
    id: "2",
    question:
      "Božič traja vse do svetih treh kraljev, na ta dan pa se blagoslovi dom in...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[2],
    questionImg:
      "media/navade/slovenija-navade-bozictrajavsedosvetihtrehkraljevkoseblagoslovidominnapisekraticeimenakraljevnadvhodnavrata.png",
  },
  {
    id: "3",
    question:
      "Ko je nekdo umrl, so ga pokopali, na njegovem domu pa so molili zanj...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[3],
    questionImg:
      "media/navade/slovenija-navade-kojenekdoumrlsogapokopalisedemdnipopogrebupazanjmolilinanjegovemdomu.png",
  },
  {
    id: "4",
    question: "Ko prideš k nekomu domov, ti vedno ponudijo...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[4],
    questionImg:
      "media/navade/slovenija-navade-kopridesknekomudomovtiponudijocopate.png",
  },
  {
    id: "5",
    question: "Ko osvojiš Triglav, te morajo najprej...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[5],
    questionImg:
      "media/navade/slovenija-navade-kopridesnatriglavtemorajokrstiti.png",
  },
  {
    id: "6",
    question: "Na Božični predvečer se družina zbere in skupaj pripravi...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[6],
    questionImg:
      "media/navade/slovenija-navade-nabozicnipredvecerceladruzinapostavijasliceinbozicnodrevesce.png",
  },
  {
    id: "7",
    question: "Na cvetno nedeljo se da blagosloviti...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[7],
    questionImg:
      "media/navade/slovenija-navade-nacvetnonedeljosekblagoslovunesejovelikonocnebutarice.png",
  },
  {
    id: "8",
    question:
      "Na Gregorjevo otroci spuščajo osvetljene barčice po potokih in rekah. Gregorjevemu pravimo tudi...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[8],
    questionImg:
      "media/navade/slovenija-navade-nagregorjevoprvidanpomladiozdanzaljubljencevsootrocispuscaliosvetljenebarcicepopotokihinrekah.png",
  },
  {
    id: "9",
    question:
      "Na Martinovo poteka po vsej Sloveniji veliko število prireditev v znamenju...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[9],
    questionImg:
      "media/navade/slovenija-navade-namartinovopotekavelikoprireditevvznamenjuvina.png",
  },
  {
    id: "10",
    question:
      "Na Miklavžev predvečer se mladi neporočeni fantje oblečejo v parkljne zato, da...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[10],
    questionImg:
      "media/navade/slovenija-navade-namiklavzevpredvecermladiinneporocenifanjteseoblecejovparkljneinobdarujejopridneotrokelumpepaokarajo.png",
  },
  {
    id: "11",
    question:
      "Na predvečer goda so harmonikarji igrali slavitelju pod okno, vse dokler...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[11],
    questionImg:
      "media/navade/slovenija-navade-napredvecergodasoharmonikarjiigralipodoknomdoklerjihgospodarnipogostil.png",
  },
  {
    id: "12",
    question: "Na prvi maj potekajo po vsej Sloveniji...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[12],
    questionImg:
      "media/navade/slovenija-navade-naprvimajpotekaprvomajskabudnica.png",
  },
  {
    id: "13",
    question: "Na prvomajski predvečer zagorijo...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[13],
    questionImg:
      "media/navade/slovenija-navade-naprvomajskipredvecerzagorijokresovi.png",
  },
  {
    id: "14",
    question:
      "Ob silvestrski polnoči se prepeva skladba Alfija Nipiča z naslovom...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[14],
    questionImg:
      "media/navade/slovenija-navade-nasilvestrovoobpolnocisepojepesemsilvestrskipoljub.png",
  },
  {
    id: "15",
    question: "Na veliki šmaren se ljudje odpravijo na Brezje v...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[15],
    questionImg:
      "media/navade/slovenija-navade-navelikismarenseogromnoljudiodpravinabrezjevmarijinosvetisce.png",
  },
  {
    id: "16",
    question: "Na Veliko noč otroci sekajo pirhe oziroma...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[16],
    questionImg:
      "media/navade/slovenija-navade-navelikonocotrocisekajopirheozmecejokovancevnje.png",
  },
  {
    id: "17",
    question: "Na Veliko noč se je...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[17],
    questionImg:
      "media/navade/slovenija-navade-navelikonocsejeblagosovljenahrana.png",
  },
  {
    id: "18",
    question: "Na veliko soboto poteka...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[18],
    questionImg:
      "media/navade/slovenija-navade-navelikosobotopotekablagoslovhrane.png",
  },
  {
    id: "19",
    question: "Nisi pravi Slovenec, vse dokler nisi bil...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[19],
    questionImg:
      "media/navade/slovenija-navade-nisisloveneccesenisibilnatriglavu.png",
  },
  {
    id: "20",
    question:
      "Ob birmi se otroka zelo lepo obleče, sorodniki pa mu podarijo veliko dragocenih stvari, ponavadi zlato uro, lahko pa tudi...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[20],
    questionImg:
      "media/navade/slovenija-navade-obbirmiseotrokazelolepoobleceinpodaridragocenestvarizlatouroavtoteren.png",
  },
  {
    id: "21",
    question:
      "Pri krstu je prvi otrok dobil ime po očetu, hči po mami, vsi ostali pa po...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[21],
    questionImg:
      "media/navade/slovenija-navade-obkrstusootrokalepooblekliprvisinjedobilimepoocetuhcipomamiostalipaposvetnikihnadangoda.png",
  },
  {
    id: "22",
    question: "Ob praznikih in velikih dogodkih se ljudje oblečejo v...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[22],
    questionImg:
      "media/navade/slovenija-navade-obpraznikihinvelikihdogodkihseljudjeoblecejovnarodnenose.png",
  },
  {
    id: "23",
    question: "Vsako nedeljo se družina odpravi...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[23],
    questionImg: "media/navade/slovenija-navade-obprostemcasuhodimovhribe.png",
  },
  {
    id: "24",
    question:
      "Ob rojstvu otroka se mami skuha govejo juho, zraven pa se ji za moč da še...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[24],
    questionImg:
      "media/navade/slovenija-navade-obrojstvuotrokasemamiskuhagovejojuhoinkozarecvinazamoc.png",
  },
  {
    id: "25",
    question: "Poroka in poročna gostija sta vedno potekala v domačem kraju...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[25],
    questionImg:
      "media/navade/slovenija-navade-porokainkosilastavednopotekalavnevestinemdomacemkraju.png",
  },
  {
    id: "26",
    question: "Vsak pravi Slovenec mora imeti lepši vrt od...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[26],
    questionImg:
      "media/navade/slovenija-navade-pravislovenecmoraimetilepsivrtodsoseda.png",
  },
  {
    id: "27",
    question:
      "Slovenci spijejo res veliko alkohola, zato je običajno, da te prijatelj ne povabi na kavo, ampak na...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[27],
    questionImg:
      "media/navade/slovenija-navade-slovenciljubijoalkoholzatokosrecasprijateljagapovabisnapivo.png",
  },
  {
    id: "28",
    question: "Nedeljsko kosilo mora biti sestavljeno iz...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[28],
    questionImg:
      "media/navade/slovenija-navade-tipicnonedeljskokosilogovejajuhamesoskrompirjemsolatainsladica.png",
  },
  {
    id: "29",
    question: "Na Božični predvečer se družina odpravi k...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[29],
    questionImg:
      "media/navade/slovenija-navade-zabozicsedruzinaodpravikpolnocnici.png",
  },
  {
    id: "30",
    question:
      "Za pust se ljudje oblečejo v pustne šeme in ne govorijo, ampak...",
    options: navadeQuizOptions,
    correct: navadeQuizOptions[30],
    questionImg:
      "media/navade/slovenija-navade-zapustseljudjeoblecejovpustnesemeinnegovorijoampaksamodelajohrup.png",
  },
];

let podjetjaQuizOptions = [
  "Novomeško podjetje, ki proizvaja avtodome in počitniške prikolice",
  "Proizvajalec izpušnih sistemov za motocikle in športne avtomobile",
  "Obutveno podjetje, vodilni svetovni proizvajalec čevljev za tek na smučeh",
  "Največji proizvajalec paštet na svetu",
  "Portoroški proizvajalec kave v vrečkah",
  "Upravljavec in vzdrževalec slovenskih avtocest",
  "Izolski proizvajalec konzerviranih rib",
  "Proizvajalec športne opreme, znano predvsem po smučeh",
  "Vodilno podjetje za medicinske laserje",
  "Ajdovski proizvajalec sadnih pijač",
  "Velenjski proizvajalec gospodinjskih aparatov in bele tehnike",
  "Gorenjski proizvajalec čokolade",
  "Koprski ponudnik celovitih logističnih storitev",
  "Kranjsko telekomunikacijsko, energetsko in elektrotehnično podjetje",
  "Idrijska družba elektroenergetike, inženiringa in tehnoloških sistemov",
  "Novomeško farmacevtsko podjetje",
  "Največja pivovarna v Sloveniji",
  "Ljubljansko farmacevtsko podjetje",
  "Eno največjih podjetij za spodnje perilo v Evropi",
  "Koprska družba, ki upravlja mednarodno tovorno pristanišče v mestu",
  "Ljubljanska trgovska družba, največja v Sloveniji",
  "Ajdovski proizvajalec testenin, največji v regiji",
  "Kamniško prehrambeno podjetje",
  "Največja bančno-finančna skupina v Sloveniji in regiji",
  "Ravijalec video iger, znan po Talking Tom",
  "Ptujski proizvajalec perutninskega mesa in izdelkov",
  "Trgovsko podjetje z naftnimi derivati, plinom in ostalimi energenti",
  "Vodilni svetovni proizvajalec ultralahkih motorno-jadralnih letal",
  "Eden največjih proizvajalcev mineralne vode",
  "Novomeški proizvajalec vozil",
  "Kranjska tovarna gumijastih izdelkov",
  "Ljubljanski koncern varovanja",
  "Trgovec z urami in modnim nakitom",
  "Proizvajalec kristalnih izdelkov",
  "Vodilna zavarovalno-finančna skupina v Sloveniji in regiji",
  "Celjsko trgovsko podjetje",
  "Proizvajalec sistemov oblačil za profesionalne končne uporabnike",
  "Druga največja pivovarna v Sloveniji",
  "Koprsko vinogradniško podjetje",
  "Ljubljansko prehrambeno podjetje",
  "Podjetje, ki se ukvarja z izdelovanjem nakita in drugih izdelkov iz zlata in srebra",
  "Koprsko podjetje, ki izdeluje avtomobilske dele",
  "Koprsko podjetje, ki je izdelovalo motorna kolesa",
];
let podjetjaQuiz = [
  {
    id: "0",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[0],
    questionImg: "media/podjetja/slovenija-podjetja-adriamobil.png",
  },
  {
    id: "1",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[1],
    questionImg: "media/podjetja/slovenija-podjetja-akrapovic.png",
  },
  {
    id: "2",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[2],
    questionImg: "media/podjetja/slovenija-podjetja-alpina.png",
  },
  {
    id: "3",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[3],
    questionImg: "media/podjetja/slovenija-podjetja-argeta.png",
  },
  {
    id: "4",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[4],
    questionImg: "media/podjetja/slovenija-podjetja-barcaffe.png",
  },
  {
    id: "5",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[5],
    questionImg: "media/podjetja/slovenija-podjetja-dars.png",
  },
  {
    id: "6",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[6],
    questionImg: "media/podjetja/slovenija-podjetja-delamaris.png",
  },
  {
    id: "7",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[7],
    questionImg: "media/podjetja/slovenija-podjetja-elan.png",
  },
  {
    id: "8",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[8],
    questionImg: "media/podjetja/slovenija-podjetja-fotona.png",
  },
  {
    id: "9",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[9],
    questionImg: "media/podjetja/slovenija-podjetja-fructal.png",
  },
  {
    id: "10",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[10],
    questionImg: "media/podjetja/slovenija-podjetja-gorenje.png",
  },
  {
    id: "11",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[11],
    questionImg: "media/podjetja/slovenija-podjetja-gorenjka.png",
  },
  {
    id: "12",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[12],
    questionImg: "media/podjetja/slovenija-podjetja-intereuropa.png",
  },
  {
    id: "13",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[13],
    questionImg: "media/podjetja/slovenija-podjetja-iskra.png",
  },
  {
    id: "14",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[14],
    questionImg: "media/podjetja/slovenija-podjetja-kolektor.png",
  },
  {
    id: "15",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[15],
    questionImg: "media/podjetja/slovenija-podjetja-krka.png",
  },
  {
    id: "16",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[16],
    questionImg: "media/podjetja/slovenija-podjetja-lasko.png",
  },
  {
    id: "17",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[17],
    questionImg: "media/podjetja/slovenija-podjetja-lek.png",
  },
  {
    id: "18",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[18],
    questionImg: "media/podjetja/slovenija-podjetja-lisca.png",
  },
  {
    id: "19",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[19],
    questionImg: "media/podjetja/slovenija-podjetja-lukakoper.png",
  },
  {
    id: "20",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[20],
    questionImg: "media/podjetja/slovenija-podjetja-mercator.png",
  },
  {
    id: "21",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[21],
    questionImg: "media/podjetja/slovenija-podjetja-mlinotest.png",
  },
  {
    id: "22",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[22],
    questionImg: "media/podjetja/slovenija-podjetja-natureta.png",
  },
  {
    id: "23",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[23],
    questionImg: "media/podjetja/slovenija-podjetja-nlb.png",
  },
  {
    id: "24",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[24],
    questionImg: "media/podjetja/slovenija-podjetja-outfit7.png",
  },
  {
    id: "25",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[25],
    questionImg: "media/podjetja/slovenija-podjetja-perutninaptuj.png",
  },
  {
    id: "26",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[26],
    questionImg: "media/podjetja/slovenija-podjetja-petrol.png",
  },
  {
    id: "27",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[27],
    questionImg: "media/podjetja/slovenija-podjetja-pipistrel.png",
  },
  {
    id: "28",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[28],
    questionImg: "media/podjetja/slovenija-podjetja-radenska.png",
  },
  {
    id: "29",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[29],
    questionImg: "media/podjetja/slovenija-podjetja-revoz.png",
  },
  {
    id: "30",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[30],
    questionImg: "media/podjetja/slovenija-podjetja-sava.png",
  },
  {
    id: "31",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[31],
    questionImg: "media/podjetja/slovenija-podjetja-sintal.png",
  },
  {
    id: "32",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[32],
    questionImg: "media/podjetja/slovenija-podjetja-slowatch.png",
  },
  {
    id: "33",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[33],
    questionImg: "media/podjetja/slovenija-podjetja-steklarnarogaska.png",
  },
  {
    id: "34",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[34],
    questionImg: "media/podjetja/slovenija-podjetja-triglav.png",
  },
  {
    id: "35",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[35],
    questionImg: "media/podjetja/slovenija-podjetja-tus.png",
  },
  {
    id: "36",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[36],
    questionImg: "media/podjetja/slovenija-podjetja-ufpro.png",
  },
  {
    id: "37",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[37],
    questionImg: "media/podjetja/slovenija-podjetja-union.png",
  },
  {
    id: "38",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[38],
    questionImg: "media/podjetja/slovenija-podjetja-vinakoper.png",
  },
  {
    id: "39",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[39],
    questionImg: "media/podjetja/slovenija-podjetja-zito.png",
  },
  {
    id: "40",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[40],
    questionImg: "media/podjetja/slovenija-podjetja-zlatarnacelje.png",
  },
  {
    id: "41",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[41],
    questionImg: "media/podjetja/slovenija-podjetja-cimos.png",
  },
  {
    id: "42",
    question: "",
    options: podjetjaQuizOptions,
    correct: podjetjaQuizOptions[42],
    questionImg: "media/podjetja/slovenija-podjetja-tomos.png",
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
    question: "Njeno središče je Novo mesto.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[0],
    questionImg: "media/pokrajine/slovenija-pokrajine-dolenjska.png",
  },
  {
    id: "1",
    question: "Njeno središče je Kranj.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[1],
    questionImg: "media/pokrajine/slovenija-pokrajine-gorenjska.png",
  },
  {
    id: "2",
    question: "Njeno središče je Slovenj Gradec.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[2],
    questionImg: "media/pokrajine/slovenija-pokrajine-koroska.png",
  },
  {
    id: "3",
    question: "Njeno središče je Postojna.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[3],
    questionImg: "media/pokrajine/slovenija-pokrajine-notranjska.png",
  },
  {
    id: "4",
    question: "Njeno središče je Murska Sobota.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[4],
    questionImg: "media/pokrajine/slovenija-pokrajine-prekmurje.png",
  },
  {
    id: "5",
    question: "Njeno središče je Koper.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[5],
    questionImg: "media/pokrajine/slovenija-pokrajine-primorska.png",
  },
  {
    id: "6",
    question: "Njeno središče je Maribor.",
    options: pokrajineQuizOptions,
    correct: pokrajineQuizOptions[6],
    questionImg: "media/pokrajine/slovenija-pokrajine-stajerska.png",
  },
];

let praznikiQuizOptions = [
  "50. dan po veliki noči",
  "25. december",
  "25. junij",
  "31. oktober",
  "23. november",
  "26. december",
  "23. september",
  "1. november",
  "25. oktober",
  "27. april",
  "15. september",
  "15. avgust",
  "11. november",
  "6. december",
  "1. in 2. januar",
  "1. in 2. maj",
  "8. februar",
  "Sedem tednov pred veliko nočjo",
  "Prva nedelja po prvi pomladni polni luni",
  "17. avgust",
];
let praznikiQuiz = [
  {
    id: "0",
    question:
      "Binkošti ali praznik Svetega Duha je verski praznik. Beseda binkošti izvira iz starogrške besede pentekoste, kar pomeni 'petdeseti'. Praznuje se prihod svetega Duha nad Jezusove apostole.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[0],
    questionImg: "media/prazniki/slovenija-prazniki-binkosti.png",
  },
  {
    id: "1",
    question:
      "Božič je tradicionalni krščanski praznik, ki obuja spomin na rojstvo Jezusa Kristusa. Praznik zaključuje čas adventa in začenja božični čas. Slovensko ime božič za praznik Jezusovega rojstva namreč izhaja iz pomena »majhen bog«.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[1],
    questionImg: "media/prazniki/slovenija-prazniki-bozic.png",
  },
  {
    id: "2",
    question:
      "Dan državnosti je državni praznik. Obeležuje spomin na 25. junij 1991, ko je Slovenija formalno postala neodvisna. Na ta dan je bila sprejeta Deklaracija o neodvisnosti Slovenije, ki je bila slavnostno razglašena naslednji dan, 26. junija, na Trgu republike v Ljubljani. Dva dni kasneje se je začela slovenska osamosvojitvena vojna, v kateri je Slovenija obranila neodvisnost.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[2],
    questionImg: "media/prazniki/slovenija-prazniki-dandrzavnosti.png",
  },
  {
    id: "3",
    question:
      "Dan reformacije je v Sloveniji dela prost dan. Posvečen je reformaciji, tj. verskemu, družbeno-političnemu in kulturnemu gibanju v 16. stoletju, ki je Slovencem prineslo prve tiskane knjige v slovenščini, prvo slovnico in s tem slovenski knjižni jezik.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[3],
    questionImg: "media/prazniki/slovenija-prazniki-danreformacije.png",
  },
  {
    id: "4",
    question:
      "Dan Rudolfa Maistra je državni praznik. Na ta dan je Rudolf Maister leta 1918 s svojo vojsko razorožil nemško stražo in jo razpustil, s tem dogodkom pa je k Sloveniji priključil večji del slovenskega narodnostnega in govornega območja Štajerske in Koroške.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[4],
    questionImg: "media/prazniki/slovenija-prazniki-danrudolfamaistra.png",
  },
  {
    id: "5",
    question:
      "Dan samostojnosti in enotnosti je državni praznik, na ta dan se obeležuje razglasitev izidov plebiscita o samostojnosti leta 1990, na katerem je 95% volilcev na vprašanje »Ali naj Slovenija postane samostojna in neodvisna država?« odgovorilo pritrdilno, s čimer se je začela osamosvojitev Slovenije.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[5],
    questionImg:
      "media/prazniki/slovenija-prazniki-dansamostojnostiinenotnosti.png",
  },
  {
    id: "6",
    question:
      "Dan slovenskega športa je državni praznik ki je bil uveden leta 2020 na pobudo Olimpijskega komiteja Slovenije. Datum je izbran kot obletnica na dogodke leta 2000, ko je ob zmagi veslačev Iztoka Čopa in Luke Špika ter strelca Rajmonda Debevca na poletnih olimpijskih igrah v Sydneyju prvič zaigrala slovenska himna Zdravljica.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[6],
    questionImg: "media/prazniki/slovenija-prazniki-danslovenskegasporta.png",
  },
  {
    id: "7",
    question:
      "Dan spomina na mrtve je v Sloveniji državni praznik, ki se praznuje kot spomin na umrle praznuje.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[7],
    questionImg: "media/prazniki/slovenija-prazniki-danspominanamrtve.png",
  },
  {
    id: "8",
    question:
      "Dan suverenosti je praznik, s katerim obeležujemo enega ključnih dogodkov v procesu osamosvojitve Slovenije, dan, ko je po osamosvojitveni vojni zadnji jugoslovanski vojak zapustil slovensko ozemlje.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[8],
    questionImg: "media/prazniki/slovenija-prazniki-dansuverenosti.png",
  },
  {
    id: "9",
    question:
      "Dan upora proti okupatorju je državni praznik, ki spominja na dogodke leta 1941, ko je bila v Ljubljani ustanovljena Osvobodilna fronta, organizacija odpora proti italijanskemu in nemškemu okupatorju med drugo svetovno vojno.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[9],
    questionImg:
      "media/prazniki/slovenija-prazniki-danuporaprotiokupatorju.png",
  },
  {
    id: "10",
    question:
      "Dan vrnitve Primorske k matični domovini je državni praznik, ki ga praznujemo na obletnico dogodkov iz leta 1947, ko je bila uveljavljena pariška mirovna pogodba z Italijo, ki je Sloveniji vrnila velik del ugrabljene Primorske.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[10],
    questionImg:
      "media/prazniki/slovenija-prazniki-danvrnitveprimorskekmaticnidomovini.png",
  },
  {
    id: "11",
    question:
      "Marijino vnebovzétje (tudi veliki šmaren) je eden izmed največjih krščanskih praznikov, slavili so ga že v apostolskih časih. Na ta dan se kristjani spominjajo, da je bila Devica Marija z dušo in telesom vzeta v nebesa.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[11],
    questionImg: "media/prazniki/slovenija-prazniki-marijinovnebovzetje.png",
  },
  {
    id: "12",
    question:
      "Martinovo ali god sv. Martina je dan, na katerega se evropske države spominjajo svetnika, ki je dal svoj plašč beraču, da bi lahko skril svojo revščino. V Sloveniji se dan sv. Martina praznuje predvsem kot praznik vina. Do tega dne se mošt obravnava kot nečisto in grešno novo vino, ki se ob blagoslovitvi spremeni v pravo vino.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[12],
    questionImg: "media/prazniki/slovenija-prazniki-martinovo.png",
  },
  {
    id: "13",
    question:
      "Sv. Miklavž je verski praznik. Miklavž naj bi se rodil v premožni družini, vendar je vse podedovano bogastvo razdal revnim, zato se ga od nekdaj drži sloves radodarnega svetnika. Na Slovenskem je zato ta dan posvečen obdarovanju mlajših.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[13],
    questionImg: "media/prazniki/slovenija-prazniki-miklavz.png",
  },
  {
    id: "14",
    question:
      "Novo leto je praznični dan, ki obeležuje začetek novega koledarskega leta.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[14],
    questionImg: "media/prazniki/slovenija-prazniki-novoleto.png",
  },
  {
    id: "15",
    question:
      "Praznik dela se po slovenski tradiciji obeležuje zlasti s kresovi in nošnjo nageljnov. Na ta dan se obuja spomin na trpljenje in dosežke delavskega razreda.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[15],
    questionImg: "media/prazniki/slovenija-prazniki-praznikdela.png",
  },
  {
    id: "16",
    question:
      "Prešernov dan je osrednji slovenski kulturni praznik, ki ga praznujemo na obletnico smrti največjega slovenskega pesnika Franceta Prešerna.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[16],
    questionImg: "media/prazniki/slovenija-prazniki-presernovdan.png",
  },
  {
    id: "17",
    question:
      "Pust je čas, ko se napravimo v pustno šemo, maškaro. Beseda pust je verjetno nastala iz »mesopust«, to je iz besed meso in pustiti, kar bi bil dobeseden prevod iz italijanskega izraza »carneleva« v pomenu.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[17],
    questionImg: "media/prazniki/slovenija-prazniki-pust.png",
  },
  {
    id: "18",
    question:
      "Velika noč (Vuzem) je najpomembnejši krščanski praznik. Velika noč obsega posebno praznovanje, ki ga imenujemo velikonočno tridnevje. Za kristjane je praznik veselja in upanja, verujejo, da je Jezus s svojim vstajenjem premagal telesno in duhovno smrt ter za vse prinesel upanje.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[18],
    questionImg: "media/prazniki/slovenija-prazniki-velikanoc.png",
  },
  {
    id: "19",
    question:
      "Združitev prekmurskih Slovencev z matičnim narodom je praznik, ki ga praznujemo na dan, ko je bilo Prekmurje po določilih Pariške mirovne konference združeno s Kraljevino SHS, s tem pa so bili prekmurski Slovenci po stoletjih madžarske oblasti znova združeni s slovenskim narodom.",
    options: praznikiQuizOptions,
    correct: praznikiQuizOptions[19],
    questionImg:
      "media/prazniki/slovenija-prazniki-zdruzitevprekmurcevzmaticnimnarodom.png",
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
    question: "Uradno ime Slovenije je...",
    options: [
      "Republika Slovenija",
      "Država Slovenija",
      "Slovenska republika",
      "Demokratična republika Slovenija",
    ],
    correct: "Republika Slovenija",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-republikaslovenija.png",
  },
  {
    id: "1",
    question: "Po politični ureditvi je Slovenija...",
    options: [
      "Parlamentarna demokracija",
      "Federacija",
      "Republika",
      "Predsedniška država",
    ],
    correct: "Parlamentarna demokracija",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-parlamentarnademokracija.png",
  },
  {
    id: "2",
    question: "Slovenija ima približno...",
    options: [
      "2.110.000 prebivalcev",
      "2.000.000 prebivalcev",
      "1.991.000 prebivalcev",
      "4.000.000 prebivalcev",
    ],
    correct: "2.110.000 prebivalcev",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-steviloprebivalcev.png",
  },
  {
    id: "3",
    question: "Uradna valuta v Sloveniji je...",
    options: ["Evro", "Tolar", "Dinar", "Zlatnik"],
    correct: "Evro",
    questionImg: "media/splosnakultura/slovenija-splosnakultura-evro.png",
  },
  {
    id: "4",
    question: "Slovenija je 1. maja 2004 postala članica...",
    options: ["Evropske Unije", "NATO", "Schengena", "OECD"],
    correct: "Evropske Unije",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-evropskaunija.png",
  },
  {
    id: "5",
    question: "Slovenija je 29. marca 2004 postala članica...",
    options: ["Evropske Unije", "NATO", "Schengena", "OECD"],
    correct: "NATO",
    questionImg: "media/splosnakultura/slovenija-splosnakultura-nato.png",
  },
  {
    id: "6",
    question: "Glavno mesto Slovenije je...",
    options: ["Ljubljana", "Maribor", "Novo mesto", "Trst"],
    correct: "Ljubljana",
    questionImg: "media/splosnakultura/slovenija-splosnakultura-ljubljana.png",
  },
  {
    id: "7",
    question: "Povprečna neto plača v Sloveniji znaša...",
    options: ["1440 €", "1120 €", "980 €", "1760 €"],
    correct: "1440 €",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-povprecnaplaca.png",
  },
  {
    id: "8",
    question: "Povprečna starost prebivalca Slovenije je...",
    options: ["43,8 let", "41,2 let", "49,6 let", "37,5 let"],
    correct: "43,8 let",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-povprecnastarost.png",
  },
  {
    id: "9",
    question: "Med državljani Slovenije je več...",
    options: ["moških", "žensk"],
    correct: "žensk",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-vecmoskihalizensk.png",
  },
  {
    id: "10",
    question: "Spodnji dom slovenskega parlamenta šteje...",
    options: ["90 poslancev", "100 poslancev", "45 poslancev", "120 poslancev"],
    correct: "90 poslancev",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-steviloposlancev.png",
  },
  {
    id: "11",
    question: "Slovenija je postala samostojna država leta...",
    options: ["1991", "1945", "1999", "1989"],
    correct: "1991",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-samostojnostslovenije.png",
  },
  {
    id: "12",
    question: "Spodnji dom slovenskega parlamenta se imenuje...",
    options: [
      "Državni zbor",
      "Državni svet",
      "Narodni svet",
      "Državna skupščina",
    ],
    correct: "Državni zbor",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-drzavnizbor.png",
  },
  {
    id: "13",
    question: "Zgornji dom slovenskega parlamenta se imenuje...",
    options: [
      "Državni zbor",
      "Državni svet",
      "Narodni svet",
      "Državna skupščina",
    ],
    correct: "Državni svet",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-drzavnisvet.png",
  },
  {
    id: "14",
    question: "Temeljni zakon Slovenije je...",
    options: ["Ustava", "Zvezni zakon", "Vrhovni zakon", "Novela zakona"],
    correct: "Ustava",
    questionImg: "media/splosnakultura/slovenija-splosnakultura-ustava.png",
  },
  {
    id: "15",
    question: "Trenutni predsednik/ca Slovenije je...",
    options: ["Nataša Pirc Musar", "Borut Pahor", "Boris Pahor", "Eva Irgl"],
    correct: "Nataša Pirc Musar",
    questionImg:
      "media/splosnakultura/slovenija-splosnakultura-natasapircmusar.png",
  },
  {
    id: "15",
    question: "Slovenska himna je...",
    options: [
      "Zdravljica",
      "Naprej zastava Slave",
      "Vstala Primorska",
      "Slovenec sem",
    ],
    correct: "Zdravljica",
    questionImg: "media/splosnakultura/slovenija-splosnakultura-zdravljica.png",
  },
];

let sportnikiQuizOptions = [
  "Anže Kopitar",
  "Janja Garnbret",
  "Jan Oblak",
  "Leon Štukelj",
  "Luka Dončič",
  "Miroslav Cerar",
  "Peter Prevc",
  "Primož Roglič",
  "Rajmond Debevec",
  "Tadej Pogačar",
  "Tim Gajser",
  "Tina Maze",
];
let sportnikiQuiz = [
  {
    id: "0",
    question:
      "Prvi slovenski hokejski igralec, ki je zaigral v severnoameriški profesionalni hokejski ligi NHL, igra pa v moštvu Los Angeles Kings. Leta 2016 je bil kapetan moštva Evropa na svetovnem prvenstvu, na katerem je dosegel srebrno mesto. Leta 2021 je na tekmi dosegel tisočo točko in se s tem kot 91. član uvrstil v »<i>Klub tisočih točk</i>«. ",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[0],
    questionImg: "media/sportniki/slovenija-sportniki-anzekopitar.png",
  },
  {
    id: "1",
    question:
      "Rojena leta 1999, visoka le 164 cm, težka pa 47 kg. Pri 17. letih je osvojila naslov svetovne prvakinje v težavnostnem plezanju, pri 18. je postala evropska podprvakinja in evropska prvakinja v kombinaciji, pri 20. pa osvojila tri naslove prvakinje, v balvanskem in težavnostnem plezanju ter kombinaciji. Na olimpijskih igrah Tokio 2020 je osvojila zlato medaljo.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[1],
    questionImg: "media/sportniki/slovenija-sportniki-janjagarnbret.png",
  },
  {
    id: "2",
    question:
      "Eden najuspešnejših sodobnih vratarjev, pot ga je vodila od Škofje Loke do Olimpije Ljubljana ter od Benfice do Atletico Madrida, s katerim je zmagal pokala UEFA Europa League in UEFA Super Cup. Igra za slovensko nogometno reprezentanco.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[2],
    questionImg: "media/sportniki/slovenija-sportniki-janoblak.png",
  },
  {
    id: "3",
    question:
      "Nanj je imelo odločujoč vpliv novomeško športno združenje Sokol, v mladih letih je osvojil 20 kolajn: 8 zlatih, 6 srebrnih in 6 bronastih. Samo na olimpijskih igrah je skupno osvojil 6 kolajn, kar ga uvršča v sam vrh športnikov na območju nekdanje Jugoslavije.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[3],
    questionImg: "media/sportniki/slovenija-sportniki-leonstukelj.png",
  },
  {
    id: "4",
    question:
      "Že v njegovih najstniških letih so mu strokovnjaki priznavali, da je eden največjih slovenskih in evropskih talentov. Zelo mlad je zaigral za Real Madrid v močni španski ligi in tudi v najmočnejšem evropskem klubskem tekmovanju, Evroligi in v obeh še mladoleten osvajal posamične in klubske nagrade. Leta 2018 je postal dvanajsti slovenski košarkar izbran v ligo NBA. Zaradi svoje vsestranskosti in številnih odlik ga mediji opisujejosamih superlativih. Leta 2020 je postal prvi Slovenec izbran v prvo postavo tekme vseh zvezd. Velja za najboljšega evropskega košarkarja in enega najboljšega košarkarja vseh časov.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[4],
    questionImg: "media/sportniki/slovenija-sportniki-lukadoncic.png",
  },
  {
    id: "5",
    question:
      "Eden najuspešnejših športnikov na območju nekdanje Jugoslavije, osvojil je tri medalje na olimpijskih igrah, od tega dva naslova olimpijskega prvaka, sedem medalj na svetovnih prvenstvih, od tega pet naslovov svetovnega prvaka, in petnajst medalj na evropskih prvenstvih, od tega devet naslovov evropskega prvaka.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[5],
    questionImg: "media/sportniki/slovenija-sportniki-miroslavcerar.png",
  },
  {
    id: "6",
    question:
      "Leta 2015 je kot drugi slovenski skakalec postavil nov svetovni rekord s poletom dolgim 250 m in postal prvi v zgodovini, ki je preletel 250 metrov. Osvojil je štiri kolajne na olimpijskih igrah in sedem kolajn na svetovnih prvenstvih v smučarskih skokih.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[6],
    questionImg: "media/sportniki/slovenija-sportniki-peterprevc.png",
  },
  {
    id: "7",
    question:
      "Kot prvemu Slovencu mu je uspelo osvojiti etapo in rumeno majico na Dirki po Franciji. Na olimpijskih igrah v Tokiu je leta 2021 v kronometru osvojil zlato kolajno. Trikrat zapored je osvojil Dirko po Španiji. Leta 2023 pa je kot prvi slovenski kolesar osvojil tudi Dirko po Italiji. Leta 2020 je kot prvi Slovenec dobil kolesarski spomenik, belgijsko dirko Liège–Bastogne–Liège, eno izmed petih najprestižnejših, najdaljših, najstarejših in najzahtevnejših enodnevnih klasik na svetu. Kot edini kolesar v zgodovini je zmagal na šestih od sedmih največjih enotedenskih etapnih dirkah.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[7],
    questionImg: "media/sportniki/slovenija-sportniki-primozroglic.png",
  },
  {
    id: "8",
    question:
      "Sodeloval je na osmih zaporednih olimpijskih igrah od Los Angelesa 1984 do Londona 2012, na katerih je v streljanju osvojil tri medalje.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[8],
    questionImg: "media/sportniki/slovenija-sportniki-rajmonddebevec.png",
  },
  {
    id: "9",
    question:
      "Leta 2020 je postal prvi Slovenec z zmago na Dirki po Franciji, naslednje leto pa je zmago ubranil in s tem postal najmlajši dvakratni zmagovalec Toura, kjer je osvojil 11 etap, rumeno majico vodilnega je nosil 21 dni, pikčasto majico najboljšega gorskega kolesarja je osvojil dvakrat in belo majico za najboljšega mladega kolesarja rekordnih 4–krat. V svojem prvem nastopu na olimpijskih igrah leta 2021 v Tokiu je osvojil prvo kolesarko olimpijsko kolanjo za Slovenijo, bron na cestni dirki.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[9],
    questionImg: "media/sportniki/slovenija-sportniki-tadejpogacar.png",
  },
  {
    id: "10",
    question:
      "Tekmuje za moštvo Honde, s katerim je leta 2015 osvojil naslov svetovnega prvaka. V letu 2016 je prestopil v elitni razred in osvojil naslov svetovnega prvaka. Uspeh je ponovil v letih 2019, 2020 in 2022. Številka na njegovem motorju je tudi letnica rojstva njegovega pokojnega brata Žana, ki se je rodil 24. marca.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[10],
    questionImg: "media/sportniki/slovenija-sportniki-timgajser.png",
  },
  {
    id: "11",
    question:
      "Absolutna zmagovalka ženskega svetovnega pokala v alpskem smučanju. Leta 2013 je z 11 zmagami in 24 uvrstitvami na stopničke osvojila svetovni pokal, kar ji je skupaj prineslo 2414 točk in s tem postavilo rekord vseh časov. Postala je tudi tretja športnica na svetu, ki je v eni sezoni zmagala v vseh disciplinah alpskega smučanja. Na svetovnem prvenstvu 2015 je osvojila srebrno medaljo v ter dve zlati. Je rekorderka s 26 zmagami v svetovnem pokalu in štirimi kolajnami iz olimpijskih iger.",
    options: sportnikiQuizOptions,
    correct: sportnikiQuizOptions[11],
    questionImg: "media/sportniki/slovenija-sportniki-tinamaze.png",
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

let turisticnedestinacijeQuizOptions = [
  "Bled",
  "Bohinj",
  "Celje",
  "Koper",
  "Kranjska Gora",
  "Lipica",
  "Ljubljana",
  "Maribor",
  "Piran",
  "Postojna",
  "Predjama",
  "Soča",
  "toplice",
  "Triglavski narodni park",
  "Velika planina",
  "Sečovlje",
  "Kranj",
  "Novo mesto",
  "Triglav",
  "Ptuj",
  "Škofja Loka",
  "Logarska dolina",
  "Portorož",
  "Izola",
  "Mesečev zaliv",
  "Cerkniško jezero",
  "Pohorje",
  "smučišča",
];
let turisticnedestinacijeQuiz = [
  {
    id: "0",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[0],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-bled.png",
  },
  {
    id: "1",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[1],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-bohinj.png",
  },
  {
    id: "2",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[2],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-celje.png",
  },
  {
    id: "3",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[3],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-koper.png",
  },
  {
    id: "4",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[4],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-kranjskagora.png",
  },
  {
    id: "5",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[5],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-lipica.png",
  },
  {
    id: "6",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[6],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-ljubljana.png",
  },
  {
    id: "7",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[7],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-maribor.png",
  },
  {
    id: "8",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[8],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-piran.png",
  },
  {
    id: "9",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[9],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-postojna.png",
  },
  {
    id: "10",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[10],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-predjama.png",
  },
  {
    id: "11",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[11],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-soca.png",
  },
  {
    id: "12",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[12],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-toplice.png",
  },
  {
    id: "13",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[13],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-triglavskinarodnipark.png",
  },
  {
    id: "14",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[14],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-velikaplanina.png",
  },
  {
    id: "15",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[15],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-secovlje.png",
  },
  {
    id: "16",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[16],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-kranj.png",
  },
  {
    id: "17",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[17],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-novomesto.png",
  },
  {
    id: "18",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[18],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-triglav.png",
  },
  {
    id: "19",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[19],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-ptuj.png",
  },
  {
    id: "20",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[20],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-skofjaloka.png",
  },
  {
    id: "21",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[21],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-logarskadolina.png",
  },
  {
    id: "22",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[22],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-portoroz.png",
  },
  {
    id: "23",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[23],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-izola.png",
  },
  {
    id: "24",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[24],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-mesecevzaliv.png",
  },
  {
    id: "25",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[25],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-cerkniskojezero.png",
  },
  {
    id: "26",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[26],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-pohorje.png",
  },
  {
    id: "27",
    question: "",
    options: turisticnedestinacijeQuizOptions,
    correct: turisticnedestinacijeQuizOptions[27],
    questionImg:
      "media/turisticnedestinacije/slovenija-turisticnedestinacije-smucisca.png",
  },
];

let vinaQuizOptions = [
  "Belokranjec",
  "Bizeljčan",
  "Cviček",
  "Malvazija",
  "Modra frankinja",
  "Rebula",
  "Refošk",
  "Šipon",
  "Teran",
  "Vipavec",
  "Vitovska",
];
let vinaQuiz = [
  {
    id: "0",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[0],
    questionImg: "media/vina/slovenija-vina-belokranjec.png",
  },
  {
    id: "1",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[1],
    questionImg: "media/vina/slovenija-vina-bizeljcan.png",
  },
  {
    id: "2",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[2],
    questionImg: "media/vina/slovenija-vina-cvicek.png",
  },
  {
    id: "3",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[3],
    questionImg: "media/vina/slovenija-vina-malvazija.png",
  },
  {
    id: "4",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[4],
    questionImg: "media/vina/slovenija-vina-modrafrankinja.png",
  },
  {
    id: "5",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[5],
    questionImg: "media/vina/slovenija-vina-rebula.png",
  },
  {
    id: "6",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[6],
    questionImg: "media/vina/slovenija-vina-refosk.png",
  },
  {
    id: "7",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[7],
    questionImg: "media/vina/slovenija-vina-sipon.png",
  },
  {
    id: "8",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[8],
    questionImg: "media/vina/slovenija-vina-teran.png",
  },
  {
    id: "9",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[9],
    questionImg: "media/vina/slovenija-vina-vipavec.png",
  },
  {
    id: "10",
    question: "",
    options: vinaQuizOptions,
    correct: vinaQuizOptions[10],
    questionImg: "media/vina/slovenija-vina-vitovska.png",
  },
];

let zanimivostiQuizOptions = [
  "V Ljubljani lahko prespiš v hostelu, ki je bil nekoč zapor",
  "Davo Karničar je bil prvi, ki je presmučal celoten Everest",
  "Slovenija je z 52 medaljami druga država na svetu po številu olimpijskih medalj na prebivalca",
  "Dve tretjini Slovenije pokrivajo gozdovi",
  "Edina država, ki ima v imenu besedo ljubezen",
  "V Olimjah se nahaja ena najstarejših evropskih lekarn",
  "Gorenjska Kranjska čebela je druga najbolj razširjena sorta na svetu",
  "Kranjsko klobaso je astronavtka slovenskih korenin Sunita Williams popeljala v vesolje",
  "Na poročni dan mora ženin nevesto nositi v naročju po vseh 99 stopnicah na Blejskem otoku, nevesta pa mora biti popolnoma tiho",
  "Prekmurje je za teden dni obstajalo kot samostojna republika leta 1919",
  "Postojnska jama je najbolj obiskana jama na svetu in edina z dvotirnimi tračnicami",
  "V Solkanu se nahaja najdaljši kamniti most z lokom na svetu, dolg je 220 m",
  "V premogovniku Velenje se nahaja najgloblja jedilnica v Evropi, kar 160 m pod zemljo",
  "V Lipici se nahaja najstarejša evropska še delujoča kobilarna, deuje neprekinjeno že skoraj 500 let",
  "Najstarejša trta na svetu, stara 400 let, se nahaja ob Dravi v Mariboru",
  "V Divjih babah so odkrili najstarejše glasbilo na svetu - piščal staro 60.000 let",
  "Na Ljubljanskem barju so našli najstarejše kolo na svetu, imelo naj bi 5200 let",
  "Slovenija ima največ crkva na prebivalca v Evropi, skupno preko 3.000",
  "V Sloveniji se nahaja največji zipline park v Evropi",
  "Slovenija je prva na svetu po številu traktorjev na prebivalca",
  "V Trbovljah se nahaja najvišji dimnik v Evropi, visok kar 360 m",
  "V Planici se nahaja največja letalnica za smučarske skoke na svetu",
  "Ob Soči so snemali film »<i>Prince of Narnia</i>«",
  "Slovenija je prva in edina država na območju nekdanje Jugoslavije, ki ima v vesolju svoje satelite",
  "Slovenska osamosvojitvena vojna je bila prva vojna v Evropi po koncu druge svetovne vojne",
  "Oblika Slovenije spominja na kokoš",
  "V Sloveniji je več kot 500 gradov",
  "V Sloveniji živi približno 1.000 rjavih medvedov",
  "V Sloveniji je več kot 10.000 jam, le nekaj deset pa je odprtih za turiste",
  "Na Zalarjevem vrhu je mogoče zaslediti prave stopinje dinozavrov",
  "Slovenijo je lani obiskalo 6 milijonov turistov in 2 milijona jih je obiskalo Piran",
  "Gasilska zveza Slovenije je največja humanitarna in prostovoljska organizacija Slovenije, ki šteje več kot 160.000 članov",
];
let zanimivostiQuiz = [
  {
    id: "0",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[0],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-celicahostelbivsizapor.png",
  },
  {
    id: "1",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[1],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-davokarnicarprvikijesmucalizeveresta.png",
  },
  {
    id: "2",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[2],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-drugadrzavanasvetupostevilumedaljnaprebivalca.png",
  },
  {
    id: "3",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[3],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-dvetretjinislovenijepokrivajogozdovi.png",
  },
  {
    id: "4",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[4],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-edinadrzavakiimabesedolove.png",
  },
  {
    id: "5",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[5],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-enaizmednajstarejsihlekarnvevropi.png",
  },
  {
    id: "6",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[6],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-kranjskacebelajeprvasortacebelevevropiindruganasvetu.png",
  },
  {
    id: "7",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[7],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-kranjskaklobasavvesolju.png",
  },
  {
    id: "8",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[8],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-moznosizenopo99stopnicahzenamorabitipopolnomatiho.png",
  },
  {
    id: "9",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[9],
    questionImg: "media/zanimivosti/slovenija-zanimivosti-murskarepublika.png",
  },
  {
    id: "10",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[10],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najboljobiskanajamavevropiinedinanasvetustracnicami.png",
  },
  {
    id: "11",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[11],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najdaljsikamnitimostnasvetu.png",
  },
  {
    id: "12",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[12],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najglobljajedilnicavevropi.png",
  },
  {
    id: "13",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[13],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najstarejsaevropskakobilarnavlipici.png",
  },
  {
    id: "14",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[14],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najstarejsatrtanasvetuvmariboru.png",
  },
  {
    id: "15",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[15],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najstarejseglasbilonasvetu.png",
  },
  {
    id: "16",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[16],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najstarejsekolonasvetu.png",
  },
  {
    id: "17",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[17],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najveccrkvanaprebivalcavevropi.png",
  },
  {
    id: "18",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[18],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najvecjiziplineparkvevropi.png",
  },
  {
    id: "19",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[19],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najvectraktorjevnaprebivalcanasvetu.png",
  },
  {
    id: "20",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[20],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najvisjidimnikvevropi.png",
  },
  {
    id: "21",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[21],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-planicanajvecjaletalnicanasvetu.png",
  },
  {
    id: "22",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[22],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-princeofnarniasnemanobsoci.png",
  },
  {
    id: "23",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[23],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-prvainedinaexyudrzavassatelitivvesolju.png",
  },
  {
    id: "24",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[24],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-prvavojnavevropipoww2.png",
  },
  {
    id: "25",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[25],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-slovenijajepodobnakokosi.png",
  },
  {
    id: "26",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[26],
    questionImg: "media/zanimivosti/slovenija-zanimivosti-veckot500gradov.png",
  },
  {
    id: "27",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[27],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-veckot900medvedov.png",
  },
  {
    id: "28",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[28],
    questionImg: "media/zanimivosti/slovenija-zanimivosti-veckot10000jam.png",
  },
  {
    id: "29",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[29],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-zalarjevvrhsledidinozavrov.png",
  },
  {
    id: "30",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[30],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-slovenijojeleta2022obiskalo6mioturistovodtegaje2mioobiskalopiran.png",
  },
  {
    id: "31",
    question: "",
    options: zanimivostiQuizOptions,
    correct: zanimivostiQuizOptions[31],
    questionImg:
      "media/zanimivosti/slovenija-zanimivosti-najvecjahumanitarnainprostovoljskaorganizacija.png",
  },
];

let zgodovinaQuizOptions = [
  "Habsburžanov",
  "Bazoviški junaki",
  "Štajerske in Koroške",
  "Celjski grofje",
  "Matične domovine",
  "Kovid-19",
  "Slovenske domobrance",
  "Evropski prvak v košarki",
  "Prepovedala rabo slovenskega jezika, ukinila slovenske šole, društva in klube ter nasilno preganjala vse, kar je bilo slovenskega",
  "Gradnjo Luke Koper",
  "Slovensko narodno zastavo",
  "Karantanija",
  "Kmečke upore",
  "Velik del Koroške predal Avstriji",
  "Novi Evropi, po dokončnem porazu Napoleona",
  "Majniška deklaracija",
  "Nove državne simbole",
  "Skoraj pol milijona migrantov",
  "7. stoletju",
  "Dan suverenosti",
  "Osvobodilna fronta",
  "100.000 Slovencev",
  "Vojvodskem prestolu na Gosposvetskem polju",
  "Ljubljano",
  "Trst",
  "Papež Janez Pavel II.",
  "Skoraj 99% vseh volilcev",
  "10 milijard evrov škode",
  "Na Kongresnem trgu v Ljubljani",
  "Potres",
  "Janez Janša",
  "<i>»Prvič zadišalo po Slovenski vojski«</i>",
  "Vladimir Putin, predsednik Ruske federacije",
  "Samostojnost Republike Slovenije",
  "Primož Trubar",
  "Država Slovencev, Hrvatov in Srbov (SHS)",
  "Dvanajstkrat",
  "Svetovno prvenstvo",
  "Trst, Istra, Gorica, Reka",
  "Josip Broz - Tito",
  "Tolarji",
  "Turki",
  "Desetdnevna vojna",
  "Evropsko Unijo",
  "Schengensko območje",
  "Na Wolfovi 8 v Ljubljani",
  "Zedinjena Slovenija",
  "Prva slovenska vlada",
];
let zgodovinaQuiz = [
  {
    id: "0",
    question: "Slovenske dežele so bile skoraj 600 let pod vladavino...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[0],
    questionImg: "media/zgodovina/slovenija-zgodovina-avstroogrska.png",
  },
  {
    id: "1",
    question:
      "Ferdo Bidovec, Fran Marušič, Zvonimir Miloš in Alojzij Valenčič so simbol slovenskega upora italijanskim fašističnim oblastem. Pravimo jim tudi...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[1],
    questionImg: "media/zgodovina/slovenija-zgodovina-bazoviskijunaki.png",
  },
  {
    id: "2",
    question:
      "V letih 1918-19 so potekali boji za severno mejo po tem, ko je Avstro-Ogrska razpadla. Slovenci, z generalom Rudolfom Maistrom na čelu, so tako preprečili izgubo slovenskega narodnega ozemlja...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[2],
    questionImg: "media/zgodovina/slovenija-zgodovina-bojizasevernomejo.png",
  },
  {
    id: "3",
    question:
      "Plemiška rodbina, ki je vladala na Slovenskem, Hrvaškem in Avstrijskem od 12. do 15. stoletja, je nosila ime...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[3],
    questionImg: "media/zgodovina/slovenija-zgodovina-celjskigrofje.png",
  },
  {
    id: "4",
    question:
      "Po koncu druge svetovne vojne je bilo tržaško ozemlje razdeljeno na dve coni, jugoslovansko in italijansko. Trst je na koncu pripadal Italiji, s tem pa je več 100.000 Slovencev bilo ponovno odrezanih od...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[4],
    questionImg: "media/zgodovina/slovenija-zgodovina-conaab.png",
  },
  {
    id: "5",
    question: "Leta 2020 je Slovenijo in ves svet zajela pandemija...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[5],
    questionImg: "media/zgodovina/slovenija-zgodovina-covid.png",
  },
  {
    id: "6",
    question:
      "Med drugo svetovno vojno so se nasprotniki partizanov in komunizma združili v...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[6],
    questionImg: "media/zgodovina/slovenija-zgodovina-domobranci.png",
  },
  {
    id: "7",
    question: "Slovenija je leta 2017 postala...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[7],
    questionImg: "media/zgodovina/slovenija-zgodovina-eurobasket2017.png",
  },
  {
    id: "8",
    question:
      "Po koncu prve svetovne vojne je celotno ozemlje Primorske pripadalo Italiji, ki je hotela Slovence iztrebiti, zato je...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[8],
    questionImg: "media/zgodovina/slovenija-zgodovina-fasizemnaprimorskem.png",
  },
  {
    id: "9",
    question:
      "Ko je postalo jasno, da Trst ne bo pripadal Jugoslaviji, se je slovensko vodstvo tajno odločilo za...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[9],
    questionImg: "media/zgodovina/slovenija-zgodovina-gradnjalukekoper.png",
  },
  {
    id: "10",
    question:
      "Preden bi se Slovenija leta 1991 končno osamosvojila, je potekala izbira novih državnih simbolov. Nova državna zastava še ni bila izbrana, zato so na predvečer osamosvojitve na vrh Triglava izobesili...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[10],
    questionImg:
      "media/zgodovina/slovenija-zgodovina-izbiradrzavnihsimbolov.png",
  },
  {
    id: "11",
    question:
      "Prvi slovenski in nasploh slovanski državi, ki je nastala v 7. stoletju na območju Vzhodnih Alp, je bilo ime...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[11],
    questionImg: "media/zgodovina/slovenija-zgodovina-karantanija.png",
  },
  {
    id: "12",
    question:
      "Zaradi turških vpadov, težav v trgovini in vedno višjih dajatev od 15. do 17. stoletja, so se ljudje organizirali in začeli...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[12],
    questionImg: "media/zgodovina/slovenija-zgodovina-kmeckiupori.png",
  },
  {
    id: "13",
    question:
      "Po bojih za severno mejo so leta 1920 na Koroškem organizirali plebiscit, na katerem so se ljudje odločali, če bi raje živeli v Avstriji ali Jugoslaviji. Rezultat plebiscita je...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[13],
    questionImg: "media/zgodovina/slovenija-zgodovina-koroskiplebiscit.png",
  },
  {
    id: "14",
    question:
      "Na Ljubljanskem kongresu leta 1821 so se voditelji vseh evropskih držav dogovarjali o...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[14],
    questionImg: "media/zgodovina/slovenija-zgodovina-ljubljanskikongres.png",
  },
  {
    id: "15",
    question:
      "Anton Korošec je leta 1917 v dunajskem parlamentu prebral zapis, s katerim so slovanski narodi zahtevali združitev znotraj monarhije v posebno avtonomno enoto. Izjavi pravimo...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[15],
    questionImg: "media/zgodovina/slovenija-zgodovina-majniskadeklaracija.png",
  },
  {
    id: "16",
    question:
      "Takoj po razglasitvi samostojnosti Slovenije leta 1991 je bilo potrebno namestiti...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[16],
    questionImg: "media/zgodovina/slovenija-zgodovina-menjavatabel.png",
  },
  {
    id: "17",
    question:
      "Konec leta 2015 je po Evropi vladala migrantska kriza, ki je samo čez Slovenijo pripeljala...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[17],
    questionImg: "media/zgodovina/slovenija-zgodovina-migrantskakriza.png",
  },
  {
    id: "18",
    question:
      "Slovenci so se skupaj z ostalimi slovanskimi narodi naselili v Vzhodne Alpe v...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[18],
    questionImg: "media/zgodovina/slovenija-zgodovina-naselitevslovanov.png",
  },
  {
    id: "19",
    question:
      "25. oktobra 1991 je zadnji jugoslovanski vojak, po koncu desetdnevne vojne v kateri je slovenska Teritorialna obramba premagala Jugoslovansko ljudsko armado, zapustil Slovenijo. Na ta dan praznujemo...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[19],
    questionImg:
      "media/zgodovina/slovenija-zgodovina-odhodzadnjegajlavojakaizslovenije.png",
  },
  {
    id: "20",
    question:
      "Kmalu po nacistični in fašistični okupaciji Slovenije leta 1941 so se slovenski predstavniki javnega življenja dogovorili za oborožen upor. 27. aprila 1941 je bila ustanovljena...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[20],
    questionImg: "media/zgodovina/slovenija-zgodovina-of.png",
  },
  {
    id: "21",
    question:
      "Nacistični in fašistični okupatorji so želeli iztrebiti slovenski narod. V letih 1941-1945 je zaradi njih umrlo preko...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[21],
    questionImg: "media/zgodovina/slovenija-zgodovina-okupacija.png",
  },
  {
    id: "22",
    question:
      "Leta 1945 so slovenski partizani osvobodili večino slovenskega ozemlja, tudi Koroško. Slika prikazuje dva partizana ob...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[22],
    questionImg: "media/zgodovina/slovenija-zgodovina-osvoboditevkoroske.png",
  },
  {
    id: "23",
    question: "9. maja 1945 so partizani osvobodili in vkorakali v...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[23],
    questionImg: "media/zgodovina/slovenija-zgodovina-osvoboditevljubljane.png",
  },
  {
    id: "24",
    question:
      "1. maja so slovenski partizani IX. korpusa, celo pred Ljubljano, osvobodili...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[24],
    questionImg: "media/zgodovina/slovenija-zgodovina-osvoboditevtrsta.png",
  },
  {
    id: "25",
    question: "Slovenijo je leta 1996 obiskal...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[25],
    questionImg: "media/zgodovina/slovenija-zgodovina-papezevobisk.png",
  },
  {
    id: "26",
    question:
      "23. decembra 1990 je v Sloveniji potekal plebiscit za samostojno Slovenijo, na katerem se je za samostojnost opredelilo...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[26],
    questionImg: "media/zgodovina/slovenija-zgodovina-plebiscit.png",
  },
  {
    id: "27",
    question:
      "Avgusta 2023 so se v Sloveniji zgodile najhujše poplave vseh časov, ki so ustvarile za...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[27],
    questionImg: "media/zgodovina/slovenija-zgodovina-poplave.png",
  },
  {
    id: "28",
    question:
      "Med Izolo in Koprom so angleški piloti leta 1944 potopili ponos italijanskega ladjevja, luksuzno čezoceansko ladjo Rex. Njeno sidro se danes nahaja...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[28],
    questionImg: "media/zgodovina/slovenija-zgodovina-potopitevrexa.png",
  },
  {
    id: "29",
    question:
      "Na velikonočno nedeljo leta 1895 je Ljubljano stresel uničujoč...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[29],
    questionImg: "media/zgodovina/slovenija-zgodovina-potresvljubljani.png",
  },
  {
    id: "30",
    question:
      "Konec maja 1988 so jugoslovanske tajne službe aretirale štiri novinarje zaradi izdaje zaupnih dokumentov. Sodili so jim na vojaškem sodišču, kar je sprožilo val ogorčenja med ljudmi, ki so zahtevali njihovo pomilostitev. Med aretiranimi novinarji je bil tudi...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[30],
    questionImg: "media/zgodovina/slovenija-zgodovina-procesproticetverici.png",
  },
  {
    id: "31",
    question:
      "17. decembra 1990 se je slovenski politični vrh udeležil prvega postroja Teritorialne obrambe, ki je v vojni za Slovenijo odigrala najpomembnejšo vlogo. Takrat je...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[31],
    questionImg: "media/zgodovina/slovenija-zgodovina-prvipostrojto.png",
  },
  {
    id: "32",
    question:
      "Junija 2001 sta se v Sloveniji srečala voditelja dveh svetovnih velesil: George Bush, predsednik ZDA ter...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[32],
    questionImg:
      "media/zgodovina/slovenija-zgodovina-putininbushvsloveniji.png",
  },
  {
    id: "33",
    question:
      "25. junija 1991 je bila na Trgu republike v Ljubljani razglašena...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[33],
    questionImg:
      "media/zgodovina/slovenija-zgodovina-razglasitevsamostojnosti.png",
  },
  {
    id: "34",
    question:
      "Leta 1550 je z izidom prvih dveh knjig v slovenskem jeziku, Abecednik in Katekizem, postavil temelje slovenskega knjižnega jezika...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[34],
    questionImg: "media/zgodovina/slovenija-zgodovina-reformacija.png",
  },
  {
    id: "35",
    question:
      "Leta 1918, po dokončnem razpadu Avstro-Ogrske, je bila na Kongresnem trgu v Ljubljani razglašena...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[35],
    questionImg: "media/zgodovina/slovenija-zgodovina-shs.png",
  },
  {
    id: "36",
    question:
      "Na slovenski zahodni narodnostni meji je med letoma 1915 in 1917 potekala soška fronta - vrsta bitk med Italijo in Avstro-Ogrsko. Italijani so neuspešno poskušali prebiti avstrijske obrambne linije kar...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[36],
    questionImg: "media/zgodovina/slovenija-zgodovina-soskafronta.png",
  },
  {
    id: "37",
    question:
      "Leta 2002 se je slovenska nogometna reprezentanca prvič uvrstila na...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[37],
    questionImg: "media/zgodovina/slovenija-zgodovina-svetovnoprvenstvo.png",
  },
  {
    id: "38",
    question:
      "Primorski domoljubi so kot odgovor na fašistično okupacijo in zatiranje odgovorili z ustanovitvijo organizacije TIGR, ki pomeni...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[38],
    questionImg: "media/zgodovina/slovenija-zgodovina-tigr.png",
  },
  {
    id: "39",
    question:
      "8. maja 1980 je v ljubljanskem kliničnem centru, najboljši bolnišnici v tedanji Jugoslaviji, umrl...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[39],
    questionImg: "media/zgodovina/slovenija-zgodovina-titoumrevljubljani.png",
  },
  {
    id: "40",
    question:
      "Od leta 1991 do leta 2006, ko je Slovenija uvedla evro, je Slovenija imela svojo valuto z imenom...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[40],
    questionImg: "media/zgodovina/slovenija-zgodovina-tolarji.png",
  },
  {
    id: "41",
    question: "Od 15. do 16. stoletja so na slovensko ozemlje vdirali...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[41],
    questionImg: "media/zgodovina/slovenija-zgodovina-turskivpadi.png",
  },
  {
    id: "42",
    question:
      "Razglasitvi samostojnosti Slovenije 25. junija 1991 je sledila vojna, v kateri je slovenska Teritorialna obramba premagala Jugoslovansko ljudsko armado. Tej vojni pravimo tudi...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[42],
    questionImg: "media/zgodovina/slovenija-zgodovina-vojnazaslovenijo.png",
  },
  {
    id: "43",
    question: "1. maja leta 2004 je Slovenija vstopila v...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[43],
    questionImg: "media/zgodovina/slovenija-zgodovina-vstopveu.png",
  },
  {
    id: "44",
    question: "21. decembra 2007 je Slovenija vstopila v...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[44],
    questionImg: "media/zgodovina/slovenija-zgodovina-vstopvschengen.png",
  },
  {
    id: "45",
    question:
      "Slovenski študent Lovro Toman je leta 1848 prvič izobesil slovensko narodno zastavo kot odgovor na plapolanje nemške zastave na Ljubljanskem gradu. Zastavo je izobesil...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[45],
    questionImg: "media/zgodovina/slovenija-zgodovina-wolfova8.png",
  },
  {
    id: "46",
    question:
      "Program, predstavljen leta 1848, ki je zahteval združitev vseh Slovencev v eno državo, se je imenoval...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[46],
    questionImg: "media/zgodovina/slovenija-zgodovina-zedinjenaslovenija.png",
  },
  {
    id: "47",
    question: "Leta 1945 je bila v Ajdovščini ustanovljena...",
    options: zgodovinaQuizOptions,
    correct: zgodovinaQuizOptions[47],
    questionImg: "media/zgodovina/slovenija-zgodovina-prvaslovenskavlada.png",
  },
];

let znaneosebnostiQuizOptions = [
  "Aleksander Čeferin",
  "Anton Martin Slomšek",
  "Boris Pahor",
  "Uroš Umek",
  "Edvard Kardelj",
  "Edvard Rusjan",
  "France Balantič",
  "France Prešeren",
  "Herman Potočnik",
  "Ivan Cankar",
  "Ivo Boscarol",
  "Janez Puh",
  "Janez Vajkard Valvazor",
  "Jožef Stefan",
  "Jože Plečnik",
  "Jurij Vega",
  "Karel Destovnik - Kajuh",
  "Katarina Čas",
  "Lojze Bratuž",
  "Lojze Grozde",
  "Melanija Knavs",
  "Milan Kučan",
  "Oton Župančič",
  "Pinko Tomažič",
  "Primož Trubar",
  "Rudolf Maister",
  "Simon Gregorčič",
  "Slavko Avsenik",
  "Slavoj Žižek",
  "Josip Broz - Tito",
  "Žiga Zois",
];
let znaneosebnostiQuiz = [
  {
    id: "0",
    question:
      "Slovenski odvetnik in nogometni funkcionar, ⋆ 13.10.1967, Ljubljana.<br>Diplomiral je na ljubljanski pravni fakulteti iz kazenskega prava. V svoji pravni karieri je kot mlad odvetnik že zelo zgodaj opozoril nase, ko je kot zagovornik nastopal v odmevnih primerih. Opravljal je funkcijo predsednika Nogometne zveze Slovenije (NZS), leta 2016 pa je postal predsednik Evropske nogometne zveze (UEFA) in podpredsednik Svetovne nogometne zveze (FIFA) z veliko večino glasov. Leta 2019 in 2023 so mu potrdili ponovno izvolitev tako, da zdaj teče že njegov tretji mandat.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[0],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-aleksanderceferin.png",
  },
  {
    id: "1",
    question:
      "Slovenski škof, pisatelj in pesnik, ⋆ 26.11.1800, Slom pri Mariboru - † 24.9.1862, Maribor.<br>Ker je zgodaj postal sirota, se je na posebnem učiteljskem tečaju v 3. razredu gimnazije z odliko usposobil za inštruktorja učencev, da se je s poučevanjem lahko preživljal. Leta 1824 je postal duhovnik, iz vneme za slovenščino je že med študijem teologije ustanovil slovensko društvo, poučeval bogoslovce v slovenščini in jih navduševal za pisne in govorne vaje in jih navajal k prevajanju knjig v slovenski jezik. Znan je njegov rek »<i>Sveta vera bodi vam luč, materni jezik pa ključ do zveličavne omike</i>«. Leta 1999 ga je papež Janez Pavel II. beatificiral.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[1],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-antonmartinslomsek.png",
  },
  {
    id: "2",
    question:
      "Slovenski pisatelj, ⋆ 26.8.1913, Trst - † 30.5.2022, Trst.<br>Veljal je za enega najpomembnejših slovenskih pisateljev, obenem je tudi eden najbolj prevajanih slovenskih avtorjev. Njegova dela so prevedena v francoščino, nemščino, srbohrvaščino, madžarščino, angleščino, španščino, italijanščino, katalonščino, finščino in esperanto. Na prvem mestu med prevodi je Nekropola, roman o pisateljevem življenju v taborišču Natzweiler-Struthof, ki je bil preveden v 18 jezikov. Večkrat so ga omenjali kot kandidata za Nobelovo nagrado za književnost. Bil je globoki antifašist in pričevalec o fašističnem nasilju nad Slovenci v Italiji ter trpljenju v nemških koncentracijskih taboriščih med drugo svetovno vojno.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[2],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-borispahor.png",
  },
  {
    id: "3",
    question:
      "Slovenski didžej, glasbenik in producent, ⋆ 16.5.1976, Ljubljana.<br>Svojo kariero je začel v 90. letih, kmalu je postal zelo priljubljen doma in naokoli. Na lestvici TOP 100 didžejev in producentov pri najpomembnejši reviji za plesno glasbo DJ Mag se je leta 2007 uvrstil na 29. mesto. Skupaj z zvezdniškimi imeni, kot so na primer Carl Cox, Jeff Mills in Sven Väth je bil leta 2009 nominiran za prestižno priznanje DJ Awards v kategoriji tehna.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[3],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-urosumek.png",
  },
  {
    id: "4",
    question:
      "Slovenski politik, pisatelj, učitelj, partizan in narodni heroj, ⋆ 27.1.1910, Ljubljana - † 10.2.1979, Ljubljana.<br>Eden izmed vodilnih članov Komunistične partije Slovenije pred drugo svetovno vojno, med vojno pa eden izmed glavnih voditeljev osvobodilne fronte. Po vojni je vodil mirovna pogajanja z Italijo. Bil je glavni ustvarjalec jugoslovanskega sistema delavskega samoupravljanja, postavil je tudi temelj zunanje politike z oblikovanjem ideološke osnovne jugoslovanske politike neskladnosti v petdesetih in šestdesetih letih 20. stoletja. Bil je druga najpomembnejša oseba v Jugoslaviji, takoj za Titom.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[4],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-edvardkardelj.png",
  },
  {
    id: "5",
    question:
      "Slovenski letalski konstruktor, pilot in pionir letalstva, ⋆ 6.6.1886, Trst - † 9.1.1911, Beograd.<br>Z bratom sta bila prva slovenska letalca, ki sta se po dosežkih lahko primerjala z bratoma Wright v ZDA. Njegova unikatnost je bila v tem, da sta bila z bratom načrtovalca, konstruktorja in pilota istočasno, brez nobenega predhodnega znanja ali bogatih finančnih sredstev. Leta 1911 se je odpravil na promocijsko turnejo po Balkanu. Januarja se je znašel v Beogradu, kjer je bilo vreme vetrovno, a je kljub svarilom poletel, dokler ni njegovemu letalu močan sunek zlomil krila. Lrilo je padlo v Savo, letalo pa je strmoglavilo. Utrpel je hude poškodbe in umrl med prevozom v bolnišnico. Njegovemu pogrebu je prisostvovalo 15 tisoč ljudi. Po njem je poimenovano letališče v Mariboru in asteroid v vesolju.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[5],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-edvardrusjan.png",
  },
  {
    id: "6",
    question:
      "Slovenski pesnik, ⋆ 29.11.1921, Kamnik - † 24.11.1943, Grahovo.<br>Zaradi vojne se je njegovo šolanje predčasno prekinilo potem, ko so ga Italijani odpeljali v koncentracijsko taborišče Gonars v Furlanijo, saj so sumili, da je povezan z osvobodilno fronto. Že tako bolan se je vrnil v Ljubljano, kjer se je pozneje pridružil vaškim stražam. Enkrat je uspel uiti smrti, drugič pa je med partizanskim obleganjem domobranske postojanke v Grahovem živ zgorel. Pisal je sonete, ki so razodevali tegobno stanje njegove družine, nekaj pesmi je posvetil tudi svoji prvi ljubezni, Marjetici, živahni dijakinji trgovske akademije. To so bile erotično zasnovane lirične izpovedi in refleksivni utrinki. Najbolj znana je njegova zbirka V ognju groze plapolam, ki je izšla leto dni po njegovi smrti. Njegova dela so bila v Jugoslaviji prepovedana, zato jih je vse do osamosvojitve Slovenije gojila slovenska skupnost v Argentini.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[6],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-francebalantic.png",
  },
  {
    id: "7",
    question:
      "Slovenski pesnik, ⋆ 3.12.1800, Vrba - † 8.2.1849, Kranj. Rodil se je v kmečki družini.<br>V osnovni šoli je bil tako priden, da so ga zapisali v zlato knjigo. Po uspešno zaključenem študiju na dunajski pravni fakulteti se je vrnil v Ljubljano, kjer je delal kot odvetnik. V tem času je napisal večino svojih pesmi, pri pisanju katerih ga je pomembno usmerjal prijatelj Matija Čop. Bil je prvi Slovenec, ki se je po kakovosti svojega pisanja lahko kosal s sodobniki po Evropi, kjer je tedaj vladala romantična usmeritev. Življenjska pot pesnika, nesrečno zaljubljenega v bogato Primičevo Julijo, se je končala v znamenju z malodušja in težav z alkoholom, kar je nazadnje povzročilo njegovo smrt.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[7],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-francepreseren.png",
  },
  {
    id: "8",
    question:
      "Slovenski raketni inženir, častnik in pionir kozmonavtike, ⋆ 22.12.1892, Pulj - † 27.8.1929, Dunaj.<br>Kot strokovnjak za mostovne in inženirske gradnje je moral na fronto, kjer je zbolel za tuberkolozo, zato so ga leta 1919 upokojili. Naslednja leta se je z bratom popolnoma posvetil načrtovanju prodora v vesolje. Leta 1928 je v Berlinu izšla njegova knjiga Problem vožnje po vesolju - Raketni motor, ki velja za eno temeljnih del prve generacije raziskovalcev vesolja, kjer je opisal načrt za preboj v vesolje in ureditev stalne vesoljske postaje z namenom opazovanja zemlje. V Berlinu so njegove zamisli vzeli resno medtem, ko so dunajski inženirji ocenili njegovo delo za domišljijo, čeprav je postala temelj za nadaljnje osvajanje vesolja. Je eden prvih snovateljev na svetu, ki je načrtoval izvorne rešitve in zasnove naprav za vesolje. Z izdajo knjige je postal eden izmed najpomembnejših svetovnih utemeljiteljev potovanja in bivanja v vesolju, njegova knjiga je bila temelj nemškega, ameriškega in sovjetskega vesoljskega programa.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[8],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-hermanpotocnik.png",
  },
  {
    id: "9",
    question:
      "Slovenski pisatelj, esejist, dramatik in pesnik, ⋆ 10.5.1876, Vrhnika - † 11.12.1918, Ljubljana.<br>Letnica 1899 je letnica izida njegove prve pesniške zbirke Erotika in Župančičeve Čaše opojnosti in velja za začetek slovenske moderne. V svoji pesniški zbirki je zbral mladostne ljubezenske pesmi, balade in romance. V svojih dunajskih letih je sodeloval pri literarnem krožku slovenskih študentov.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[9],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-ivancankar.png",
  },
  {
    id: "10",
    question:
      "Slovenski letalec, poslovnež in politik, ⋆ 15.4.1956, Postojna.<br>Je eden najuspešnejših slovenskih podjetnikov in ustanovitelj ter dolgoletni direktor podjetja Pipistrel, ki proizvaja ultra lahka letala, ustanovljeno leta 1987 kot prvo zasebno tovarno letal v Jugoslaviji. Leta 2022 je prodal večinski delež Pipistrela američanom za skoraj 250 milijonov dolarjev. Znan je tudi po radodarnosti: domači občini je podaril 25 milijonov evrov, gasilcem pa 2 milijona evrov za gašenje ob hudem požaru na Krasu.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[10],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-ivoboscarol.png",
  },
  {
    id: "11",
    question:
      "Slovenski izumitelj, mehanik in proizvajalec vozil, ⋆ 27.6.1862, Slovenske gorice - † 19.7.1914, Zagreb.<br>Pri mladih letih je obiskal Daimlerja in Benza ter preštudiral njune motorje, ker je hotel z njimi opremiti svoja kolesa. Pri konstrukciji motocikla se je kmalu ločil od vzora kolesa in iskal prikladnejše oblike. Po daljšem preskušanju in izpopolnjevanju mu je uspelo zgraditi motocikel. Leta 1906 je ta zmagal na sloviti dirki za pokal Gordon-Bennet – vozil je s povprečno hitrostjo 77 km/h. S svojimi vozili je začel oskrbovati celo avstrijski dvor, njegova tovarna pa je leta 1912 izdelala 17.000 vozil, kar je bilo za takratne razmere ogromno.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[11],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-janezpuh.png",
  },
  {
    id: "12",
    question:
      "Kranjski plemič in član Kraljeve družbe, ⋆ 1.5.1641, Ljubljana - † 16.11.1693, Krško.<br>Bil je vsestransko izobražena osebnost, njegovo delo ni bilo omejeno samo na eno področje ali znanost, ampak je obsegalo več raznovrstnih področij. Čeprav je bil po poklicu vojak, je večino svojega življenja zapisal znanosti, zbirateljstvu in preučevanju Kranjske, osrednjega dela današnje Slovenije. Tako je zapustil obširno znanstveno delo.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[12],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-janezvajkardvalvazor.png",
  },
  {
    id: "13",
    question:
      "Slovenski fizik, matematik, elektrotehnik in pesnik, ⋆ 24.3.1835, Šempeter pri Žrelcu - † 7.1.1893, Dunaj.<br>Raziskoval je na vseh tedanjih področjih fizike: mehaniki, hidrodinamiki, akustiki, termodinamiki, kinetični teoriji plinov, kaloriki, teoriji toplotnega sevanja, elektromagnetizmu, optiki. Vse svoje znanstvene razprave je napisal v nemščini. Najbolj je znan po določitvi fizikalnega zakona, ki ga je eksperimentalno odkril leta 1879, ki povezuje celotno izsevano energijo črnega telesa j* s četrto potenco termodinamične temperature T. To je edini zakon, ki je poimenovan po kakšnem Slovencu. Zaradi njegovih zaslug na področju znanosti ga je odlikoval sam avstrijski cesar.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[13],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-jozefstefan.png",
  },
  {
    id: "14",
    question:
      "Slovenski arhitekt, ⋆ 23.1.1872, Ljubljana - † 7.1.1957, Ljubljana.<br>Bil je arhitekt, ki si je močno prizadeval, da bi z lastnim umetniškim ustvarjanjem dal slovenski in evropski arhitekturi izrazito prepoznavnost. Zaradi njegovega kakovostnega in raznolikega dela na Dunaju, Pragi in Ljubljani ter Sloveniji in na področju nekdanje Jugoslavije je prejel vrsto nagrad in odlikovanj. Na njegov stil je imel velik vpliv njegov profesor Wagner, a tudi antika in lokalno izročilo. V Ljubljani je načrtal tržnico, zapornico, NUK, Tromostovje, Čevljarski most, Žale ter prenovo Ljubljanskega gradu. Zamislil si je tudi zgradbo slovenskega parlamenta, Katedralo svobode, ki pa ni bila nikoli uresničena.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[14],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-jozeplecnik.png",
  },
  {
    id: "15",
    question:
      "Slovenski matematik, fizik, geodet, meteorolog, plemič in topniški častnik, ⋆ 23.3.1754, Dol pri Ljubljani - † 26.12.1802, Dunaj.<br>Leta 1783 je objavil tablice logaritmov z desetiško osnovo, leta 1789 pa je izračunal vrednost π na 140 decimalk in s tem postavil takratni svetovni rekord, ki je trajal kar 52 let. Leta 1794 je izdal knjigo z izračuni logaritmov števil od 1 do 100.000 na sedem decimalk. Avstrijskemu cesarju je tudi predlagal uvedbo metričnega merskega sistema, a ta ni imel posluha zanj, čeprav so ga nazadnje vseeno uvedli, a s 100-letno zamudo.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[15],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-jurijvega.png",
  },
  {
    id: "16",
    question:
      "Slovenski pesnik, prevajalec, partizan in narodni heroj, ⋆ 13.12.1922, Šoštanj - † 22.2.1944, Šentvid pri Zavodnjah.<br>Ob napadu na Jugoslavijo, 6. aprila 1941, se je s skupino somišljenikov podal v Zasavsko hribovje, da bi se priključili uporu jugoslovanske vojske. V Ljubljani se je vključil v ilegalo, postal sodelavec partizanske tajne službe in komunistične partije. Na silvestrovanju konec leta 1941 je spoznal Silvo, ki je postala njegova velika ljubezen. Ljubezen do domovine in Silve je združil v ciklu ljubezenskih pesmi, ki jih je ljubljenemu dekletu in njunemu nikoli rojenemu otroku v številnih občutenih, strastnih in nežnih pismih pošiljal v italijanski zapor, kjer je bila Silva zaprta. Umrl je v nemški zaseda ob premiku 14. divizije na Štajersko leta 1944. Najbolj znani so njegovi verzi »<i>Lepo je, veš mama, lepo je živeti. Toda za kar sem umrl bi hotel še enkrat umreti.</i>«",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[16],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-kareldestovnikkajuh.png",
  },
  {
    id: "17",
    question:
      "Slovenska igralka, ⋆ 23.9.1976, Slovenj Gradec.<br>Na televiziji se je pri rosnih dvanajstih letih prvič pojavila leta 1988 v reklami za Cockto. Njena mednarodna igralska kariera se je začela z vlogo Gabriele v filmu The Guard, režiserja John M. McDonagh-a. Njena najvidnešja vloga do sedaj je v filmu Martina Scorseseja Volk z Wall Streeta.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[17],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-katarinacas.png",
  },
  {
    id: "18",
    question:
      "Slovenski zborovodja, skladatelj in antifašist, ⋆ 17.2.1902, Gorica - † 16.2.1937, Gorica.<br>Z vodenjem slovenskim pevskih zborov je pomagal ohranjati slovenščino v Goriški, ki je bila po priključitvi Italije z Rapalsko pogodbo podvržena poitalijančevanju. Večkrat je bil zaradi domoljubja in ljubezni do slovenskega jezika zaprt, njegovo delovanje je šlo v nos fašistom. Tako so ga leta 1936 po koncu maše zajeli, hudo pretepli in ga prisilili, da spije mešanico bencina in strojnega olja. Zastrupitev je povzročila razpad jeter in ledvic, tako je po dveh mesecih peklenskih bolečin zapustil ženo z dvema otrokoma in umrl.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[18],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-lojzebratuz.png",
  },
  {
    id: "19",
    question:
      "Slovenski pesnik in mučenec, ⋆ 27.5.1923, Tržišče - † 1.1.1943, Mirna.<br>Šolal se je v Ljubljani, obiskoval je klasično gimnazijo in postal odličen dijak. Zadnja leta gimnazije pa je preživel v napetosti bližajoče se druge svetovne vojne. Med počitnicami se je hotel vrniti domov k mami, kljub svarilom o naraščajočem nasilju in nevarnosti. Na novo leto je bil pri maši, nato pa se je hotel z vlakom odpraviti na pot. Ker so partizani progo minirali, se je odločil, da se bo na pot podal kar peš. Pri prvi hiši ga je prijela partizanska straža, ki je na njem našla molitvenik. Sumili so, da je ovaduh, in ga zato po hitrem sojenju usmrtili. Njegovo truplo so našli dva meseca pozneje v sledečem stanju: vsi prsti so bili prerezani, na rokah je imel odtis vrvi s katero je bil privezan, desno uho je bilo odrezano, desne ustnice tudi, vsa lična koža je bila potegnjena z obraza, desno oko je bilo izrezano, na glavi pa je bila 8 cm dolga in 6 cm široka rana. Njegovi beatifikaciji je prisostvovalo 50.000 vernikov.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[19],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-lojzegrozde.png",
  },
  {
    id: "20",
    question:
      "Slovenska manekenka in prva ameriška dama, ⋆ 26.4.1970, Novo mesto.<br>Je žena nepremičninskega mogotca Donalda Trumpa, med njegovim predsedniškim mandatom je bila prva dama Združenih držav Amerike. Odraščala je v Sevnici in delala kot manekenka prek agencij v evropskih modnih prestolnicah Milanu in Parizu, leta 1996 pa se je preselila v New York. Leta 2006 sta z Donaldom dobila sina Barrona, ki ima tudi slovensko državljanstvo, s katerim se mama pogovarja v slovenskem jeziku, saj ju na tak način Donald Trump ne more razumeti.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[20],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-melanijaknavs.png",
  },
  {
    id: "21",
    question:
      "Slovenski politik, ⋆ 14.1.1941, Križevci.<br>Prekmurec po rodu, v času Jugoslavije je bil sekretar Zveze komunistov Slovenije in član predsedstva Centralnega komiteja zveze komunistov Jugoslavije. Med osamosvojitvenimi procesi je predsednik Predsedstva Republike Slovenije in tako postal prvi slovenski predsednik, nakar je bil še enkrat izvoljen. Njegov mandat se je zaključil leta 2002.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[21],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-milankucan.png",
  },
  {
    id: "22",
    question:
      "Slovenski pesnik, dramatik in prevajalec, ⋆ 23.1.1878, Vinica - † 11.6.1949, Ljubljana.<br>Belokranjec, eden izmed predstavnikov slovenske moderne, časni meščan Ljubljane. Med drugo svetovno vojno je bil povezan z NOB-jem. Po koncu druge svetovne vojne je sodeloval v javnem in političnem življenju, bil je poslanec ljudske skupščine LRS in član njenega Prezidija. Spomenik žrtvam vseh vojn v Ljubljani nosi njegove verze »<i>Domovina je ena, nam vsem dodeljena, in eno življenje in ena smrt!</i>«.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[22],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-otonzupancic.png",
  },
  {
    id: "23",
    question:
      "Slovenski komunist in narodni heroj, ⋆ 20.3.1915, Trst - † 15.12.1941, Opčine.<br>Leta 1927 je italijanski fašistični režim razpustil vse slovenske organizacije, med drugim tudi mladinske, kar ga je še posebno prizadelo. Posledično se je pridružil nekaterim mladinskim skupinam, ki so ilegalno nadaljevale svoje dejavnosti, zlasti v smeri narodnega boja in antifašizma. V Trstu se je zato družil s tigrovci in mladino, ki je načrtovala oborožen upor. Leta 1940 je bil aretiran; iz skupine 300 aretirancev so izbrali 60 osumljencev, ki so bili nato udeleženi v drugem tržaškem procesu. Njega so obsodili na smrt.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[23],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-pinkotomazic.png",
  },
  {
    id: "24",
    question:
      "Slovenski protestantski duhovnik in pisec, ⋆ 8.6.1508, Rašica - † 28.6.1586, Tübingen.<br>Bil je osrednja osebnost reformacije na Kranjskem, znan pa je predvsem kot avtor prvih natisnjenih knjig v slovenskem jeziku, Katekizma in Abecednika. Zato velja Trubar za utemeljitelja slovenskega knjižnega jezika, za osrednji lik slovenske kulturne zgodovine in v različnih pogledih celo glavno zgodovinsko osebnost. Svoje nagovore je vedno začel s frazo »<i>Lubi Slovenci!</i>«.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[24],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-primoztrubar.png",
  },
  {
    id: "25",
    question:
      "Slovenski pesnik, general in borec za severno mejo, ⋆ 29.3.1874, Kamnik - † 26.7.1934, Unec.<br>Na Dunaju je dokončal častniški študij, kasneje pa se je šolal v armadni strelski šoli. Ob začetku prve svetovne vojne je bil imenovan za poveljnika Maribora, to vlogo je opravljal do konca vojne, ko so Avstrijci razglasili Maribor za nemško ozemlje. Dan zatem je izjavil »<i>Ne priznavam teh točk. Maribor razglašam za posest države SHS in prevzemam poveljstvo nad mestom.</i>«, nakar so njegovi vojaki še isto popoldne prevzeli celotno kritično infrastrukturo mesta. Nato je s prostovoljci, zbralo se jih je 5.000, začel osvobajati slovenske kraje na Spodnjem Štajerskem in Koroškem in tako preprečil, da bi Maribor oziroma večji del današnje Slovenije postal nemški.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[25],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-rudolfmaister.png",
  },
  {
    id: "26",
    question:
      "Slovenski pesnik in duhovnik, ⋆ 15.10.1844, Vrsno - † 24.11.1906, Gorica.<br>Njegovo pesništvo se navezuje še na predromantične in romantične vzore. Pisal je ljubezenske, domovinske in življenjsko izpovedne pesmi, pa tudi nekaj epskih pesmi. Njegovo zanimanje za slovstvo se je začelo že v gimnaziji. Njegovi verzi so izraz njegove mehke duše, njegovega pesniškega in človeškega značaja.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[26],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-simongregorcic.png",
  },
  {
    id: "27",
    question:
      "Slovenski glasbenik in skladatelj, ⋆ 26.11.1929, Begunje na Gorenjskem - † 2.7.2015, Begunje na Gorenjskem.<br>Napisal je preko 1000 skladb in s svojim delom postal utemeljitelj narodno-zabavne glasbe v Sloveniji. Njegov ansambel je bil zelo priljubljen po vsem svetu, še posebej pa v Sloveniji, Avstriji, Nemčiji in Švici. Skupno je prodal skoraj 35 milijonov plošč.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[27],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-slavkoavsenik.png",
  },
  {
    id: "28",
    question:
      "Slovenski filozof, kulturni kritih in psihoanalitik, ⋆ 21.3.1949, Ljubljana.<br>Doktoriral je iz filozofije, bil je imenovan 'Elvis filozofije' in 'akademska rock zvezda'. V mladih letih so ga zanimala dela Karla Marxa in Friedricha Wilhelma Josepha Schellinga. Bil je profesor na evropski podiplomski šoli, mednarodni direktor Birkbeck Inštituta za humanistične študije in višji raziskovalec na Inštitutu za sociologijo Univerze v Ljubljani.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[28],
    questionImg:
      "media/znaneosebnosti/slovenija-znaneosebnosti-slavojzizek.png",
  },
  {
    id: "29",
    question:
      "Jugoslovanski maršal in politik, ⋆ 7.5.1892, Kumrovec - † 4.5.1980, Ljubljana.<br>Rodil se je hrvaškemu očetu in slovenski mami v zelo revni kmečki družini. Med prvo svetovno vojno je bil ujet v Galiciji, po vojni pa je sodeloval v oktobrski revoluciji v Rusiji. Po tem se je vrnil v Jugoslavijo, kjer je začel spoprijateljevati s komunisti, zaradi česar je bil večkrat tudi zaprt. Po nemškem napadu na Jugoslavijo je postal vodja organiziranega upora partizanov, in z zbrano vojsko milijona ljudi osvobodil večino ozemlja takratne Jugoslavije ter Trst in dele Koroške. Po koncu vojne je bil izvoljen za dosmrtnega predsednika socialistične Jugoslavije. Bil je priljubljen državni vodja, spoštovan doma in po svetu.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[29],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-tito.png",
  },
  {
    id: "30",
    question:
      "Slovenski razsvetljenec, gospodarstvenik, podjetnik, mecen in mineralog, ⋆ 23.11.1747, Trst - † 10.11.1819, Ljubljana.<br>Bil je mecen najuglednejših slovenskih razsvetljencev, materialno jih je podpiral, spodbujal in usmerjal ter bil tako središčna osebnost. Zavzemal se je za ideale izobrazbe in vzgoje, ki sta glavni pogoj za materialni in duhovni napredek. Navduševal se je nad zoologijo, botaniko ter predvsem nad mineralogijo, po njem je tudi poimenovan zelo zanimiv in barvit mineral (cojzit), njegova afriška varianta pa se imenuje tanzanit.",
    options: znaneosebnostiQuizOptions,
    correct: znaneosebnostiQuizOptions[30],
    questionImg: "media/znaneosebnosti/slovenija-znaneosebnosti-zigazois.png",
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
      let userScorePercentage = ((scoreCount * 100) / questionCount).toFixed(1);
      userScore.innerHTML =
        "Imate " +
        scoreCount +
        " od " +
        questionCount +
        " točk (" +
        userScorePercentage +
        "%).";
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

//End Button
endBtn.addEventListener("click", () => {
  displayContainer.classList.add("hide");
  categoriesScreen.classList.remove("hide");
  initial();
});

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

    // question image
    let question_IMG = document.createElement("img");
    question_IMG.src = i.questionImg;
    question_IMG.classList.add("question-image");
    div.appendChild(question_IMG);

    // progress bar
    let progressBar = document.createElement("progress");
    progressBar.value = 0;
    progressBar.max = 50;
    progressBar.id = "progressBar";
    progressBar.classList.add("hide");
    div.appendChild(progressBar);
    div.appendChild(document.createElement("br"));

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

    document.getElementsByTagName("progress")[questionCount].classList.remove("hide");
    var timeleft = 50;
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
      }
      document.getElementsByTagName("progress")[questionCount].value = 50 - timeleft;
      timeleft -= 1;
    }, 40);

    setTimeout(function () {
      nextBtn.click();
    }, 2250);
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
  for (let div of quizContainer.children) {
    // to hide the clicked answer
    for (let button of div.children) {
      if (button.innerText == quizArray[questionCount].correct) {
        button.classList.add("removedOption");
      }
    }
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
  categoriesScreen.classList.remove("hide");
});

//when user wants to select all categories
vseKategorijeButton.addEventListener("click", () => {
  let isVseKategorijeChecked = vseKategorijeButton.checked;
  let checkboxes = document.getElementsByTagName("input");
  for (let checkbox of checkboxes) {
    checkbox.checked = isVseKategorijeChecked;
  }
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

  userScoreWin.classList.add("hide");
  categoriesScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});
