// ================================
// GET THE FILM TRACK
// ================================

// Find the element that contains all
// of our film frames.
const filmTrack =
    document.querySelector(".film-track");


// ================================
// GET THE BUTTON
// ================================

// Find the button used to control
// the film animation.
const playBtn =
    document.getElementById("playBtn");


// ================================
// PLAY / PAUSE
// ================================

playBtn.addEventListener("click", () => {

    /*
        Check if the animation is
        currently paused.
    */

    if(
        filmTrack.style.animationPlayState === "paused"
    ){

        // Start the animation again
        filmTrack.style.animationPlayState =
            "running";

        // Change the button text
        playBtn.textContent =
            "⏸ Pause Film";

    }else{

        // Pause the animation
        filmTrack.style.animationPlayState =
            "paused";

        // Change the button text
        playBtn.textContent =
            "▶ Play Film";

    }

});