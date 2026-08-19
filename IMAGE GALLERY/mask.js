// =====================================
// GET ALL REVEAL CARDS
// =====================================

// Find every card in our gallery.
const cards =
    document.querySelectorAll(".reveal-card");


// =====================================
// LOOP THROUGH THE CARDS
// =====================================

cards.forEach((card) => {


    // Find the circle inside this card.
    const circle =
        card.querySelector(".reveal-circle");


    // =================================
    // MOUSE MOVEMENT
    // =================================

    card.addEventListener("mousemove", (event) => {


        /*
            getBoundingClientRect()
            tells us where the card
            is located on the screen.
        */

        const rectangle =
            card.getBoundingClientRect();


        /*
            Find the mouse position
            inside the card.
        */

        const x =
            event.clientX - rectangle.left;

        const y =
            event.clientY - rectangle.top;


        /*
            Move the reveal circle
            to where the mouse is.
        */

        circle.style.left =
            x + "px";

        circle.style.top =
            y + "px";

    });


    // =================================
    // MOUSE LEAVES
    // =================================

    card.addEventListener("mouseleave", () => {

        /*
            Put the circle back
            in the middle.
        */

        circle.style.left =
            "50%";

        circle.style.top =
            "50%";

    });

});