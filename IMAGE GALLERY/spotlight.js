// =====================================
// GET THE GALLERY
// =====================================

// Find the main gallery container.
const gallery =
    document.querySelector(".spotlight-gallery");


// =====================================
// GET ALL THE CARDS
// =====================================

// Find every card inside the gallery.
const cards =
    document.querySelectorAll(".spotlight-card");


// =====================================
// ADD MOUSE EVENTS
// =====================================

// Go through every card.
cards.forEach((card) => {

    // When the mouse enters a card...
    card.addEventListener("mouseenter", () => {

        // Tell the gallery that a card
        // is currently active.
        gallery.classList.add("has-active");


        // Remove "active" from all cards.
        cards.forEach((item) => {

            item.classList.remove("active");

        });


        // Make the card under the mouse active.
        card.classList.add("active");

    });

});


// =====================================
// WHEN MOUSE LEAVES THE GALLERY
// =====================================

gallery.addEventListener("mouseleave", () => {

    // Remove the gallery active state.
    gallery.classList.remove("has-active");


    // Remove active from every card.
    cards.forEach((card) => {

        card.classList.remove("active");

    });

});