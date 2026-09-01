// =============================
// GET GUEST NAME
// =============================

//const params =
    //new URLSearchParams(window.location.search);

//const guest =
    //params.get("guest");

//if (guest) {

    //document.getElementById("guestName")
       // .textContent = guest;

//}


// =============================
// OPEN INVITATION
// =============================

document
    .getElementById("openInvitation")
    .addEventListener("click", function () {

        // =============================
// PERSONALIZED GUEST NAME
// =============================

const params = new URLSearchParams(window.location.search);
const guest = params.get("guest");

if (guest) {
    document.getElementById("specialGuestName").textContent =
        "Dear " + guest;
}

        // Get guest name from URL
//const params = new URLSearchParams(window.location.search);
//onst guest = params.get("guest");

//if (guest) {
    //document.getElementById("guestName").textContent =
        //"Dear " + guest;
//}

        const opening =
            document.getElementById("opening");

        const invitation =
            document.getElementById("mainInvitation");

               const music =
            document.getElementById("weddingMusic");

        const musicButton =
            document.getElementById("musicButton");

                  // Start wedding music

        music.play()
            .then(function () {

                musicButton.classList.add("playing");

                musicButton.textContent = "♫";

            })
            .catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });


        // Fade out opening screen

        opening.style.opacity = "0";

        opening.style.transform =
            "translateY(-30px)";


        // Show main invitation

        setTimeout(function () {

            invitation.classList.add("show");

            invitation.scrollIntoView({
                behavior: "smooth"
            });

        }, 700);

    });


// =============================
// GOOGLE MAPS
// =============================

function openLocation() {

    window.open(
        "https://www.google.com/maps/search/?api=1&query=Lavenro+Garden+Kosgama",
        "_blank"
    );

}

// =============================
// WEDDING COUNTDOWN
// =============================

// Change this date when you know
// the final wedding date.

const weddingDate =
    new Date("April 21, 2027 10:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
            (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .textContent = String(days).padStart(2, "0");

    document.getElementById("hours")
        .textContent = String(hours).padStart(2, "0");

    document.getElementById("minutes")
        .textContent = String(minutes).padStart(2, "0");

    document.getElementById("seconds")
        .textContent = String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);

// =============================
// WEDDING MUSIC
// =============================

const music =
    document.getElementById("weddingMusic");

const musicButton =
    document.getElementById("musicButton");


musicButton.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        musicButton.classList.add("playing");

        musicButton.textContent = "♫";

    } else {

        music.pause();

        musicButton.classList.remove("playing");

        musicButton.textContent = "♪";

    }

});




const params1 = new URLSearchParams(window.location.search);
const guest1 = params1.get("guest");

if (guest1) {
    document.getElementById("guestName").textContent =  guest1;
}

