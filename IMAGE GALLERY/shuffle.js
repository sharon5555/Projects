// ========================================
// GET THE GALLERY
// ========================================

// Find our gallery container.
const gallery =
    document.getElementById("gallery");


// ========================================
// GET THE BUTTON
// ========================================

// Find the Shuffle button.
const shuffleBtn =
    document.getElementById("shuffleBtn");


// ========================================
// GET ALL CARDS
// ========================================

// Find all the cards inside
// the gallery.
const cards =
    Array.from(
        gallery.querySelectorAll(".gallery-card")
    );


// ========================================
// SHUFFLE FUNCTION
// ========================================

function shuffleCards() {

    /*
        Fisher-Yates Shuffle

        This algorithm randomly
        changes the order of our cards.
    */

    for (
        let i = cards.length - 1;
        i > 0;
        i--
    ) {

        // Choose a random position.
        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );


        // Swap the cards.
        [
            cards[i],
            cards[randomIndex]
        ] = [
            cards[randomIndex],
            cards[i]
        ];

    }


    // ====================================
    // PUT THE CARDS IN THEIR NEW ORDER
    // ====================================

    cards.forEach((card) => {

        gallery.appendChild(card);

    });

}


// ========================================
// BUTTON CLICK
// ========================================

shuffleBtn.addEventListener(
    "click",
    shuffleCards
);