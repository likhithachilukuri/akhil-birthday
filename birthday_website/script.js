/* ========================= */
/* PASSWORD */
/* ========================= */

const correctPassword = "1826";

let enteredPassword = "";


/* ========================= */
/* GET ELEMENTS */
/* ========================= */

const keys = document.querySelectorAll(".key");

const passwordDots = document.querySelectorAll(
    "#password-dots span"
);

const passcodeScreen = document.getElementById(
    "passcode-screen"
);

const surpriseScreen = document.getElementById(
    "surprise-screen"
);

const birthdayScreen = document.getElementById(
    "birthday-screen"
);

const openButton = document.getElementById(
    "open-button"
);


/* ========================= */
/* KEYPAD */
/* ========================= */

keys.forEach(key => {

    key.addEventListener("click", () => {

        const number = key.dataset.number;


        /* Ignore * and # */

        if (!number) {
            return;
        }


        /* Maximum 4 digits */

        if (enteredPassword.length >= 4) {
            return;
        }


        /* Add number */

        enteredPassword += number;


        /* Change the corresponding star */

        passwordDots[
            enteredPassword.length - 1
        ].textContent = "●";


        /* Check after 4 digits */

        if (enteredPassword.length === 4) {

            checkPassword();

        }

    });

});


/* ========================= */
/* CHECK PASSWORD */
/* ========================= */

function checkPassword() {

    if (enteredPassword === correctPassword) {

        /* Hide password page */

        passcodeScreen.classList.add("hidden");


        /* Show guess what page */

        surpriseScreen.classList.remove("hidden");


    } else {

        /* Wrong password */

        alert("Wrong password 🥺");


        /* Reset password */

        enteredPassword = "";


        /* Reset dots */

        passwordDots.forEach(dot => {

            dot.textContent = "*";

        });

    }

}


/* ========================= */
/* OPEN BIRTHDAY PAGE */
/* ========================= */

openButton.addEventListener("click", () => {

    /* Hide guess what page */

    surpriseScreen.classList.add("hidden");


    /* Show birthday page */

    birthdayScreen.classList.remove("hidden");

});
/* ========================= */
/* LETTER BUTTON */
/* ========================= */

const letterButton = document.getElementById(
    "letter-button"
);

const letterScreen = document.getElementById(
    "letter-screen"
);


letterButton.addEventListener("click", () => {

    /* Hide birthday page */

    birthdayScreen.classList.add("hidden");


    /* Show letter page */

    letterScreen.classList.remove("hidden");

});
/* ========================= */
/* MEMORIES BUTTON */
/* ========================= */

const memoriesButton = document.getElementById(
    "memories-button"
);

const memoriesScreen = document.getElementById(
    "memories-screen"
);


memoriesButton.addEventListener("click", () => {

    /* Hide letter */

    letterScreen.classList.add("hidden");


    /* Show memories */

    memoriesScreen.classList.remove("hidden");

});
/* ========================= */
/* THINGS I LOVE BUTTON */
/* ========================= */

const loveButton = document.getElementById(
    "love-button"
);

const loveScreen = document.getElementById(
    "love-screen"
);


loveButton.addEventListener("click", () => {

    /* Hide memories */

    memoriesScreen.classList.add("hidden");


    /* Show love page */

    loveScreen.classList.remove("hidden");

});
/* ========================= */
/* OUR FUTURE BUTTON */
/* ========================= */

const futureButton = document.getElementById(
    "future-button"
);

const futureScreen = document.getElementById(
    "future-screen"
);


futureButton.addEventListener("click", () => {

    /* Hide Things I Love */

    loveScreen.classList.add("hidden");


    /* Show Our Future */

    futureScreen.classList.remove("hidden");

});
/* ========================= */
/* FINAL BUTTON */
/* ========================= */

const finalButton = document.getElementById(
    "final-button"
);

const finalScreen = document.getElementById(
    "final-screen"
);


finalButton.addEventListener("click", () => {

    /* Hide Our Future */

    futureScreen.classList.add("hidden");


    /* Show Final Screen */

    finalScreen.classList.remove("hidden");

});
/* ========================= */
/* PERSONAL LETTER BUTTON */
/* ========================= */

/* ========================= */
/* PERSONAL LETTER */
/* ========================= */

const personalLetterButton =
    document.getElementById("personal-letter-button");

const personalLetterScreen =
    document.getElementById("personal-letter-screen");


personalLetterButton.addEventListener("click", () => {

    finalScreen.classList.add("hidden");

    personalLetterScreen.classList.remove("hidden");

});
/* ========================= */
/* ULTIMATE FINAL PAGE */
/* ========================= */

const ultimateFinalScreen =
    document.getElementById("ultimate-final-screen");
    const finishStoryButton =
    document.getElementById("finish-story-button");


finishStoryButton.addEventListener("click", () => {

    personalLetterScreen.classList.add("hidden");

    ultimateFinalScreen.classList.remove("hidden");

});