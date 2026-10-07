const slides = [
/*
    {
        images: [
            "images/albanija/1.jpg",
            "images/albanija/2.jpg",
            "images/albanija/3.jpg",
        ],
        text: "Izlet v Albanijo 🇦🇱"
    },
    {
        images: [
            "images/aranjuez/1.jpg",
            "images/aranjuez/2.jpg",
            "images/aranjuez/3.jpg",
        ],
        text: "🇪🇺 Erasmus+ izmenjava v Aranjuezu 🇪🇸"
    },
    {
        images: [
            "images/bohinj/1.jpg",
            "images/bohinj/2.jpg",
            "images/bohinj/3.jpg",
        ],
        text: "Naravoslovni tabor v Bohinju 🇸🇮"
    },
    {
        images: [
            "images/bruselj-interreg/1.jpg",
            "images/bruselj-interreg/2.jpg",
            "images/bruselj-interreg/3.jpg",
        ],
        text: "Nagradno Interreg potovanje v Bruselj 🇧🇪"
    },
    {
        images: [
            "images/dan-na-snegu/1.jpg",
            "images/dan-na-snegu/2.jpg",
            "images/dan-na-snegu/3.jpg",
        ],
        text: "Dan na snegu na Višarjah ⛷️"
    },
    {
        images: [
            "images/obisk-ijs/1.jpg",
            "images/obisk-ijs/2.jpg",
            "images/obisk-ijs/3.jpg",
        ],
        text: "Obisk Instituta Jožef Stefan v Ljubljani 🇸🇮"
    },
    {
        images: [
            "images/popri/1.jpg",
            "images/popri/2.jpg",
            "images/popri/3.jpg",
        ],
        text: "Podjetniško tekmovanje mladih POPRI 💼"
    },
    {
        images: [
            "images/rim1/1.jpg",
            "images/rim1/2.jpg",
            "images/rim1/3.jpg",
        ],
        text: "Izlet v Rim 🇮🇹"
    },
    {
        images: [
            "images/rim2/1.jpg",
            "images/rim2/2.jpg",
            "images/rim2/3.jpg",
        ],
        text: "Izlet v Rim 🇮🇹"
    },
    {
        images: [
            "images/spanci-v-ts/1.jpg",
            "images/spanci-v-ts/2.jpg",
            "images/spanci-v-ts/3.jpg",
        ],
        text: "🇪🇺 Erasmus+ izmenjava dijakov iz Aranjueza 🇪🇸"
    },
    {
        images: [
            "images/sportni-dan/1.jpg",
            "images/sportni-dan/2.jpg",
            "images/sportni-dan/3.jpg",
        ],
        text: "Športni dan 🏋🏻‍♀️"
    },
    {
        images: [
            "images/svedi-v-ts/1.jpg",
            "images/svedi-v-ts/2.jpg",
            "images/svedi-v-ts/3.jpg",
        ],
        text: "🇪🇺 Erasmus+ izmenjava dijakov iz Örebra 🇸🇪"
    },
    {
        images: [
            "images/svedska/1.jpg",
            "images/svedska/2.jpg",
            "images/svedska/3.jpg",
        ],
        text: "🇪🇺 Erasmus+ izmenjava v Örebru 🇸🇪"
    },
    {
        images: [
            "images/wels/1.jpg",
            "images/wels/2.jpg",
            "images/wels/3.jpg",
        ],
        text: "Tečaj varjenja in robotike v Welsu 🇦🇹"
    },
    {
        images: [
            "images/zagreb1/1.jpg",
            "images/zagreb1/2.jpg",
            "images/zagreb1/3.jpg",
        ],
        text: "Izlet v Zagreb 🇭🇷"
    },
    {
        images: [
            "images/zagreb2/1.jpg",
            "images/zagreb2/2.jpg",
            "images/zagreb2/3.jpg",
        ],
        text: "Izlet v Zagreb 🇭🇷"
    },*/
    {
        images: [
            "images/stem-teden1/1.jpg",
            "images/stem-teden1/2.jpg",
            "images/stem-teden1/3.jpg",
        ],
        text: "STEM teden 🦾"
    },
    {
        images: [
            "images/stem-teden2/1.jpg",
            "images/stem-teden2/2.jpg",
            "images/stem-teden2/3.jpg",
        ],
        text: "STEM teden 🔭"
    },
    {
        images: [
            "images/praksa/1.jpg",
            "images/praksa/2.jpg",
            "images/praksa/3.jpg",
        ],
        text: "Delovna praksa 🛠️"
    },
    {
        images: [
            "images/triglav/1.jpg",
            "images/triglav/2.jpg",
            "images/triglav/3.jpg",
        ],
        text: "Vzpon na Triglav 🇸🇮"
    },
    {
        images: [
            "images/sport/1.jpg",
            "images/sport/2.jpg",
            "images/sport/3.jpg",
        ],
        text: "Športna tekmovanja 🏆"
    },
    {
        images: [
            "images/sprejem1R/1.jpg",
            "images/sprejem1R/2.jpg",
            "images/sprejem1R/3.jpg",
        ],
        text: "Sprejem dijakov prvih razredov 🤓"
    },
    {
        images: [
            "images/VR/1.jpg",
            "images/VR/2.jpg",
            "images/VR/3.jpg",
        ],
        text: "Tečaj VR programiranja 🥽"
    },

];

let currentSlide = 0;

const displayTime = 4500;


function shuffleSlides() {
    /* Fisher-Yates shuffle */
    for (let i = slides.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [slides[i], slides[j]] = [slides[j], slides[i]];
    }
}

/* ================================
   SHOW SLIDE
================================ */

function showSlide() {

    const slide = slides[currentSlide];

    const images = [
        document.getElementById("image1"),
        document.getElementById("image2"),
        document.getElementById("image3")
    ];


    /*
       Fade images out
    */

    images.forEach(image => {
        image.style.opacity = "0";
    });


    /*
       After fade-out, change images
    */

    setTimeout(() => {

        images[0].src = slide.images[0];
        images[1].src = slide.images[1];
        images[2].src = slide.images[2];

        document.getElementById("description").textContent =
            slide.text;


        /*
           Fade images back in
        */

        images.forEach(image => {
            image.style.opacity = "1";
        });

    }, 500);


    /*
       Restart progress bar
    */

    const progressBar =
        document.getElementById("progressBar");

    progressBar.style.transition = "none";
    progressBar.style.width = "0%";


    /*
       Force browser to restart animation
    */

    progressBar.offsetWidth;


    progressBar.style.transition =
        `width ${displayTime}ms linear`;

    progressBar.style.width = "100%";
}


/* ================================
   NEXT SLIDE
================================ */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        shuffleSlides();
        currentSlide = 0;
    }

    showSlide();
}


/* ================================
   START
================================ */
shuffleSlides();

showSlide();

setInterval(nextSlide, displayTime);
