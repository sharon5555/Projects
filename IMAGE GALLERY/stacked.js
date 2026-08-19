// ================================
// GET ALL THE CARDS
// ================================

// Find every element with the class "card"
const cards = document.querySelectorAll(".card");


// ================================
// GET THE BUTTONS
// ================================

// Find the Previous and Next buttons
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Find the Auto Play button
const playBtn = document.getElementById("playBtn");

// Find the number that shows the current card
const currentNumber = document.getElementById("currentNumber");


// ================================
// CURRENT CARD
// ================================

// This tells us which card is currently active
let currentIndex = 0;


// ================================
// AUTOPLAY
// ================================

// This will hold our automatic timer
let autoPlay = null;

// This tells us whether autoplay is currently running
let isPlaying = false;


// ================================
// SHOW CARD
// ================================

function showCard(index){

    // Make sure the number stays inside the cards
    if(index >= cards.length){
        currentIndex = 0;
    }

    if(index < 0){
        currentIndex = cards.length - 1;
    }


    // Remove all old classes
    cards.forEach(card => {

        card.classList.remove(
            "active",
            "previous",
            "next",
            "hidden-left",
            "hidden-right"
        );

    });


    // Find the previous card
    const previousIndex =
        (currentIndex - 1 + cards.length)
        % cards.length;


    // Find the next card
    const nextIndex =
        (currentIndex + 1)
        % cards.length;


    // Give the cards their new positions
    cards[currentIndex].classList.add("active");

    cards[previousIndex].classList.add("previous");

    cards[nextIndex].classList.add("next");


    // Put the remaining cards
    // on the left or right
    cards.forEach((card, i) => {

        if(
            i !== currentIndex &&
            i !== previousIndex &&
            i !== nextIndex
        ){

            if(i < currentIndex){

                card.classList.add("hidden-left");

            }else{

                card.classList.add("hidden-right");

            }

        }

    });


    // Update the counter
    currentNumber.textContent =
        String(currentIndex + 1).padStart(2, "0");
}


// ================================
// NEXT BUTTON
// ================================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    showCard(currentIndex);

});


// ================================
// PREVIOUS BUTTON
// ================================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    showCard(currentIndex);

});


// ================================
// CLICK A CARD
// ================================

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        // Make the clicked card active
        currentIndex = index;

        showCard(currentIndex);

    });

});


// ================================
// AUTOPLAY FUNCTION
// ================================

function startAutoPlay(){

    // Run every 3 seconds
    autoPlay = setInterval(() => {

        currentIndex++;

        showCard(currentIndex);

    }, 3000);

    isPlaying = true;

    playBtn.textContent = "⏸ Pause";

}


// ================================
// STOP AUTOPLAY
// ================================

function stopAutoPlay(){

    clearInterval(autoPlay);

    isPlaying = false;

    playBtn.textContent = "▶ Auto Play";

}


// ================================
// AUTOPLAY BUTTON
// ================================

playBtn.addEventListener("click", () => {

    if(isPlaying){

        stopAutoPlay();

    }else{

        startAutoPlay();

    }

});


// ================================
// START THE GALLERY
// ================================

// Show the first card when the page loads
showCard(currentIndex);