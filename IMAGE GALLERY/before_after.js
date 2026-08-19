// ================================
// FIND ALL COMPARISON GALLERIES
// ================================

// Get every comparison section on the page
const comparisons = document.querySelectorAll(".comparison");


// ================================
// SET UP EACH COMPARISON
// ================================

comparisons.forEach(comparison => {

    // Find the part showing the AFTER image
    const afterContainer =
        comparison.querySelector(".after-container");

    // Find the vertical slider line
    const sliderLine =
        comparison.querySelector(".slider-line");


    // ================================
    // MOVE THE SLIDER
    // ================================

    function moveSlider(clientX){

        // Get the position and size of the gallery
        const rect =
            comparison.getBoundingClientRect();


        // Calculate where the mouse is
        // inside the gallery
        let position =
            clientX - rect.left;


        // Convert the position to percentage
        let percentage =
            (position / rect.width) * 100;


        // Stop the slider from going
        // outside the gallery
        percentage =
            Math.max(
                0,
                Math.min(100, percentage)
            );


        // Move the AFTER image container
        afterContainer.style.width =
            `${percentage}%`;


        // Move the slider line
        sliderLine.style.left =
            `${percentage}%`;
    }


    // ================================
    // MOUSE MOVEMENT
    // ================================

    comparison.addEventListener(
        "mousemove",
        event => {

            moveSlider(event.clientX);

        }
    );


    // ================================
    // TOUCH MOVEMENT
    // ================================

    comparison.addEventListener(
        "touchmove",
        event => {

            // Get the finger's position
            const touch =
                event.touches[0];

            moveSlider(touch.clientX);

        }
    );

});