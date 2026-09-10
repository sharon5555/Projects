/* =========================================================
    MAGNETIC NAVBAR
    STAGE 3 — MAGNETIC MOUSE EFFECT

    This JavaScript makes each navigation link move slightly
    toward the mouse cursor when the cursor gets close.
========================================================= */


/* =========================================================
    1. SELECT ALL NAVIGATION LINKS
    ---------------------------------------------------------
    querySelectorAll() finds every element that has the
    .nav-link class.
========================================================= */




/* =========================================================
    2. LOOP THROUGH EVERY NAVIGATION LINK
    ---------------------------------------------------------
    forEach() allows us to give every link its own magnetic
    behavior.
========================================================= */




    /* =====================================================
        3. LISTEN FOR MOUSE MOVEMENT
        -----------------------------------------------------
        mousemove runs whenever the mouse moves while it is
        over the navigation link.
    ===================================================== */

    

        /* =================================================
            4. GET THE LINK'S POSITION AND SIZE
            -------------------------------------------------
            getBoundingClientRect() tells us where the link
            is located on the screen and how large it is.
        ================================================= */

        


        /* =================================================
            5. FIND THE CENTER OF THE LINK
            -------------------------------------------------
            We calculate the center point because we want
            to know how far the mouse is from the center.
        ================================================= */




        /* =================================================
            6. CALCULATE MOUSE DISTANCE
            -------------------------------------------------
            event.clientX = mouse's horizontal position
            event.clientY = mouse's vertical position

            Subtracting the link center gives us the
            direction and distance between the mouse and
            the center of the link.
        ================================================= */



        /* =================================================
            7. CONTROL HOW STRONG THE MAGNET IS
            -------------------------------------------------
            A smaller number means less movement.

            A larger number means stronger movement.
        ================================================= */


        /* =================================================
            8. CALCULATE THE MOVEMENT
            -------------------------------------------------
            We multiply the mouse distance by our strength
            value so the link only moves a small amount.
        ================================================= */


        /* =================================================
            9. MOVE THE LINK
            -------------------------------------------------
            translate() moves the link horizontally and
            vertically based on the mouse position.
        ================================================= */


    /* =====================================================
        10. RETURN THE LINK TO ITS ORIGINAL POSITION
        -----------------------------------------------------
        When the mouse leaves the link, we reset the
        transform back to zero.
    ===================================================== */

    
    /* =========================================================
    11. MOBILE MENU TOGGLE
    ---------------------------------------------------------
    This controls the hamburger button.

    When the button is clicked:
    - The navigation menu opens.
    - The hamburger changes into an X.
    - Clicking again closes the menu.
    ========================================================= */

