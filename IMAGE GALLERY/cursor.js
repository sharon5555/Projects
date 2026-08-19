// =====================================
// GET ALL ANIMALS
// =====================================

// Find all elements with the class "animal".
const animals =
    document.querySelectorAll(".animal");


// =====================================
// GET THE PREVIEW BOX
// =====================================

// Find the box that follows the cursor.
const cursorImage =
    document.querySelector(".cursor-image");


// =====================================
// GET THE PREVIEW IMAGE
// =====================================

// Find the actual image inside the box.
const previewImage =
    document.getElementById("previewImage");


// =====================================
// LOOP THROUGH ALL ANIMALS
// =====================================

animals.forEach((animal) => {


    // =================================
    // WHEN MOUSE ENTERS AN ANIMAL
    // =================================

    animal.addEventListener("mouseenter", () => {


        // Get the image path stored
        // inside the data-image attribute.
        const image =
            animal.dataset.image;


        // Put that image inside
        // our preview image.
        previewImage.src =
            image;


        // Show the cursor image.
        cursorImage.classList.add("show");

    });


    // =================================
    // WHEN MOUSE MOVES
    // =================================

    animal.addEventListener("mousemove", (event) => {


        /*
            event.clientX tells us where
            the mouse is horizontally.
        */

        const mouseX =
            event.clientX;


        /*
            event.clientY tells us where
            the mouse is vertically.
        */

        const mouseY =
            event.clientY;


        // Move the preview image
        // to the mouse position.
        cursorImage.style.left =
            mouseX + "px";

        cursorImage.style.top =
            mouseY + "px";

    });


    // =================================
    // WHEN MOUSE LEAVES
    // =================================

    animal.addEventListener("mouseleave", () => {


        // Hide the preview image.
        cursorImage.classList.remove("show");

    });

});