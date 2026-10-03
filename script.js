
/* =========================================
   HOGWARTS HOUSE SELECTION GAME
========================================= */


/* =========================================
   HTML ELEMENTS
========================================= */

const startScreen =
    document.getElementById("startScreen");

const quizScreen =
    document.getElementById("quizScreen");

const thinkingScreen =
    document.getElementById("thinkingScreen");

const resultScreen =
    document.getElementById("resultScreen");

const startBtn =
    document.getElementById("startBtn");

const restartBtn =
    document.getElementById("restartBtn");

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const questionNumber =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const houseName =
    document.getElementById("houseName");

const houseDescription =
    document.getElementById("houseDescription");

const resultCrest =
    document.getElementById("resultCrest");

const trait1 =
    document.getElementById("trait1");

const trait2 =
    document.getElementById("trait2");

const trait3 =
    document.getElementById("trait3");

const particles =
    document.getElementById("particles");

const thinkingText =
    document.getElementById("thinkingText");


/* =========================================
   PARTICLES
========================================= */

function createParticles() {

    for (let i = 0; i < 60; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            5 + Math.random() * 10 + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.width =
            1 + Math.random() * 3 + "px";

        particle.style.height =
            particle.style.width;

        particles.appendChild(particle);

    }

}

createParticles();


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question:
            "Your friend is in serious trouble. What do you do?",

        answers: [

            {
                text:
                    "Jump in and help immediately.",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "Think of a clever plan first.",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "Stay beside them no matter what.",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "Find a way to turn the situation in your favour.",
                house:
                    "Slytherin"
            }

        ]
    },


    {
        question:
            "Which quality matters most to you?",

        answers: [

            {
                text:
                    "Courage",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "Knowledge",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "Loyalty",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "Ambition",
                house:
                    "Slytherin"
            }

        ]
    },


    {
        question:
            "You discover a mysterious door. What do you do?",

        answers: [

            {
                text:
                    "Open it immediately.",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "Study the symbols on it.",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "Ask your friends to come with you.",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "Look for a secret way inside.",
                house:
                    "Slytherin"
            }

        ]
    },


    {
        question:
            "You receive a difficult assignment. What's your approach?",

        answers: [

            {
                text:
                    "Take the challenge head-on.",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "Research everything about it.",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "Work together with classmates.",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "Find the smartest way to finish first.",
                house:
                    "Slytherin"
            }

        ]
    },


    {
        question:
            "Which place would you rather explore?",

        answers: [

            {
                text:
                    "A mysterious enchanted forest.",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "An ancient magical library.",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "A peaceful magical garden.",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "A hidden underground chamber.",
                house:
                    "Slytherin"
            }

        ]
    },


    {
        question:
            "Someone insults you. What do you do?",

        answers: [

            {
                text:
                    "Stand up for yourself.",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "Ignore them and stay calm.",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "Don't let it affect your relationships.",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "Remember it and prove them wrong later.",
                house:
                    "Slytherin"
            }

        ]
    },


    {
        question:
            "What kind of legacy would you like to leave?",

        answers: [

            {
                text:
                    "Someone who was brave.",
                house:
                    "Gryffindor"
            },

            {
                text:
                    "Someone who changed the way people think.",
                house:
                    "Ravenclaw"
            },

            {
                text:
                    "Someone everyone could trust.",
                house:
                    "Hufflepuff"
            },

            {
                text:
                    "Someone who achieved great things.",
                house:
                    "Slytherin"
            }

        ]
    }

];


/* =========================================
   HOUSE DATA
========================================= */

const houses = {

    Gryffindor: {

        icon: "🦁",

        description:
            "You belong to Gryffindor — a house known for courage, bravery and determination. You are willing to face challenges and stand up for what you believe in.",

        traits: [
            "Brave",
            "Courageous",
            "Determined"
        ]

    },


    Slytherin: {

        icon: "🐍",

        description:
            "You belong to Slytherin — a house known for ambition, resourcefulness and determination. You know what you want and work hard to achieve it.",

        traits: [
            "Ambitious",
            "Clever",
            "Resourceful"
        ]

    },


    Ravenclaw: {

        icon: "🦅",

        description:
            "You belong to Ravenclaw — a house known for intelligence, creativity and curiosity. You love learning, discovering ideas and solving difficult problems.",

        traits: [
            "Intelligent",
            "Creative",
            "Curious"
        ]

    },


    Hufflepuff: {

        icon: "🦡",

        description:
            "You belong to Hufflepuff — a house known for loyalty, patience and kindness. You value friendship, fairness and staying true to the people around you.",

        traits: [
            "Loyal",
            "Kind",
            "Patient"
        ]

    }

};


/* =========================================
   GAME VARIABLES
========================================= */

let currentQuestion = 0;

let scores = {

    Gryffindor: 0,

    Slytherin: 0,

    Ravenclaw: 0,

    Hufflepuff: 0

};


/* =========================================
   SOUND SYSTEM
========================================= */

let audioContext;


function magicalSound(frequency, duration) {

    try {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type = "sine";

        oscillator.frequency.value =
            frequency;


        gain.gain.setValueAtTime(
            0.08,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + duration
        );


        oscillator.connect(gain);

        gain.connect(audioContext.destination);


        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + duration
        );

    } catch (error) {

        // Sound is optional.

    }

}


/* =========================================
   START GAME
========================================= */

startBtn.addEventListener("click", () => {

    magicalSound(500, 0.3);

    currentQuestion = 0;

    scores = {

        Gryffindor: 0,

        Slytherin: 0,

        Ravenclaw: 0,

        Hufflepuff: 0

    };


    document.body.className = "";


    startScreen.classList.remove("active");

    quizScreen.classList.add("active");


    showQuestion();

});


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const current =
        questions[currentQuestion];


    question.innerText =
        current.question;


    questionNumber.innerText =
        String(currentQuestion + 1)
            .padStart(2, "0");


    const progress =
        (currentQuestion /
            questions.length) * 100;


    progressBar.style.width =
        progress + "%";


    answers.innerHTML = "";


    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.classList.add(
                "answer-btn"
            );


            button.innerText =
                answer.text;


            button.style.opacity = "0";

            button.style.transform =
                "translateY(10px)";


            setTimeout(() => {

                button.style.transition =
                    "0.4s";

                button.style.opacity =
                    "1";

                button.style.transform =
                    "translateY(0)";

            }, index * 100);


            button.addEventListener(
                "click",
                () => {

                    magicalSound(
                        400 + index * 80,
                        0.15
                    );

                    selectAnswer(
                        answer.house
                    );

                }
            );


            answers.appendChild(button);

        }
    );

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(house) {

    scores[house]++;


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        showQuestion();

    } else {

        finishGame();

    }

}


/* =========================================
   FINISH GAME
========================================= */

function finishGame() {

    quizScreen.classList.remove("active");

    thinkingScreen.classList.add("active");


    const messages = [

        "Hmm... interesting...",

        "I see something in you...",

        "Your choices reveal much...",

        "The answer is becoming clear..."

    ];


    let index = 0;


    const messageInterval =
        setInterval(() => {

            thinkingText.innerText =
                messages[index];

            magicalSound(
                300 + index * 100,
                0.2
            );

            index++;


            if (index >= messages.length) {

                clearInterval(
                    messageInterval
                );

            }

        }, 700);


    setTimeout(() => {

        const winner =
            getWinner();

        showResult(winner);

    }, 3500);

}


/* =========================================
   FIND WINNER
========================================= */

function getWinner() {

    let winner =
        "Gryffindor";

    let highest =
        scores.Gryffindor;


    for (let house in scores) {

        if (
            scores[house] >
            highest
        ) {

            highest =
                scores[house];

            winner =
                house;

        }

    }


    return winner;

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult(house) {

    thinkingScreen.classList.remove(
        "active"
    );


    resultScreen.classList.add(
        "active"
    );


    const data =
        houses[house];


    document.body.className =
        house.toLowerCase();


    resultCrest.innerText =
        data.icon;


    houseName.innerText =
        house.toUpperCase();


    houseDescription.innerText =
        data.description;


    trait1.innerText =
        data.traits[0];

    trait2.innerText =
        data.traits[1];

    trait3.innerText =
        data.traits[2];


    magicalSound(523, 0.3);

    setTimeout(() => {

        magicalSound(659, 0.3);

    }, 250);

    setTimeout(() => {

        magicalSound(784, 0.5);

    }, 500);


    createResultParticles();

}


/* =========================================
   RESULT PARTICLES
========================================= */

function createResultParticles() {

    for (let i = 0; i < 25; i++) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        particle.style.left =
            20 + Math.random() * 60 + "%";


        particle.style.animationDuration =
            2 + Math.random() * 3 + "s";


        particle.style.animationDelay =
            Math.random() * 2 + "s";


        particles.appendChild(
            particle
        );


        setTimeout(() => {

            particle.remove();

        }, 6000);

    }

}


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener(
    "click",
    () => {

        magicalSound(350, 0.2);


        resultScreen.classList.remove(
            "active"
        );


        document.body.className = "";


        startScreen.classList.add(
            "active"
        );


        progressBar.style.width =
            "0%";

    }
);

