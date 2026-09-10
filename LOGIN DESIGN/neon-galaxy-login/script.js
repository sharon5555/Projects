/* =========================================
    NEON GALAXY LOGIN
    Stage 3 - JavaScript Interaction
   ========================================= */


/* -----------------------------------------
    1. GET THE HTML ELEMENTS
    We use JavaScript to find the elements
    we want to control.
------------------------------------------ */
const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const loginButton = document.querySelector(".login-button");

/* -----------------------------------------
    2. SHOW / HIDE PASSWORD
    When the eye button is clicked, we change
    the password input between:
    
    "password" = hidden
    "text"     = visible
------------------------------------------ */
togglePassword.addEventListener("click", () => {

    //check if the password is currently hidden.
    const isPasswordHidden = passwordInput.type === "password";

    //change the input type.
    passwordInput.type = isPasswordHidden
        ? "text"
        : "password";

    //change the eye icon.
    togglePassword.textContent = isPasswordHidden
        ? "🙉"
        : "🙈";

    //update the accessibility label.
    togglePassword.setAttribute(
        "aria-label",
        isPasswordHidden
            ? "Hide password"
            : "Show password"
    );
});


/* -----------------------------------------
    3. FORM SUBMISSION
    We listen for the user submitting
    the login form.
------------------------------------------ */
loginForm.addEventListener("submit", (event) => {

    //stop the browser from refreshing
    // the page after form submission.
    event.preventDefault();


/* -------------------------------------
    4. GET THE USER'S VALUES.
    -------------------------------------- */
    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();

    /* -------------------------------------
        5. SIMPLE VALIDATION
        Make sure both fields contain
        something before continuing.
    -------------------------------------- */
    if (email === "" || password === "") {
        
        showMessage(
            "Please complete all fields.",
            "error"
        );

        return;
    }


    /* -------------------------------------
        6. SIMPLE EMAIL CHECK
    -------------------------------------- */
    if (!email.includes("@")) {

        showMessage(
            "Please enter a valid email address.",
            "error"
        );

        return;
    }

    /* -------------------------------------
        7. LOGIN BUTTON LOADING STATE
    -------------------------------------- */
    loginButton.textContent = "Launching...";

    loginButton.disabled = true;

    /* -------------------------------------
        8. SIMULATE A LOGIN
        setTimeout allows us to pretend
        that the website is contacting
        a server.
    -------------------------------------- */
    setTimeout(() => {

        showMessage(
            "🚀 Welcome to the galaxy!",
            "success"
        );

        //Return the button to its original state.
        loginButton.textContent = "Enter the Galaxy";

        loginButton.disabled = false;

    }, 1200);

});

/* -------------------------------------
        9. CREATE A MESSAGE
        This function creates a small message 
        for the user.
    -------------------------------------- */
    function showMessage (message, type) {

        //check whether a previous message exists.
        const oldMessage = document.querySelector(
            ".form-message"
        );

        //Remove the previous message.
        if(oldMessage) {
            oldMessage.remove();
        }

        //create a new paragraph.
        const messageElement = document.createElement("p");

        //Give it a class
        messageElement.className = `form-message ${type}`;

        //put our message inside it.
        messageElement.textContent = message;

        //Add message underneath the form.
        loginForm.appendChild(messageElement);

        //Remove it automatically after 3 seconds.
        setTimeout(() => {

            messageElement.remove();
        }, 3000);

    }