/* =================================
   1. GET OUR HTML ELEMENTS
   We use these variables so JavaScript
   can communicate with the form.
================================= */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const loginButton = document.querySelector(".login-button");


/* =================================
   2. SHOW / HIDE PASSWORD
   Changes the password input between
   hidden and visible text.
================================= */

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        // Show the password
        passwordInput.type = "text";

        // Change the icon
        togglePassword.textContent = "🙈";

        // Update accessibility information
        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        // Hide the password
        passwordInput.type = "password";

        // Change the icon
        togglePassword.textContent = "👁";

        // Update accessibility information
        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );
    }

});


/* =================================
   3. FORM SUBMISSION
   Runs when the user clicks
   the Sign In button.
================================= */

loginForm.addEventListener("submit", (event) => {

    // Prevent the browser from
    // refreshing the page.
    event.preventDefault();


    /* ---------------------------------
       GET USER INPUT
    --------------------------------- */

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();


    /* ---------------------------------
       BASIC VALIDATION
       Make sure both fields contain
       something before continuing.
    --------------------------------- */

    if (email === "" || password === "") {

        showMessage(
            "Please fill in all fields.",
            "error"
        );

        return;
    }


    /* ---------------------------------
       SIMPLE EMAIL CHECK
       Checks whether the email contains
       an @ symbol.
    --------------------------------- */

    if (!email.includes("@")) {

        showMessage(
            "Please enter a valid email address.",
            "error"
        );

        return;
    }


    /* ---------------------------------
       LOADING STATE
       Changes the button while the
       login process is happening.
    --------------------------------- */

    loginButton.disabled = true;

    loginButton.querySelector("span").textContent =
        "Signing In...";


    loginButton.querySelector(".button-arrow").textContent =
        "⏳";


    /* ---------------------------------
       SIMULATED LOGIN
       We wait for 1.5 seconds to make
       the interaction feel realistic.
    --------------------------------- */

    setTimeout(() => {

        showMessage(
            "✨ Welcome back! Login successful.",
            "success"
        );


        /* -----------------------------
           RETURN BUTTON TO NORMAL
        ----------------------------- */

        loginButton.disabled = false;

        loginButton.querySelector("span").textContent =
            "Sign In";

        loginButton.querySelector(".button-arrow").textContent =
            "→";


        /* -----------------------------
           CLEAR FORM
        ----------------------------- */

        loginForm.reset();

    }, 1500);

});


/* =================================
   4. MESSAGE FUNCTION
   Creates an error or success
   message dynamically.
================================= */

function showMessage(message, type) {

    /* -----------------------------
       Remove an existing message
       before creating another one.
    ----------------------------- */

    const existingMessage =
        document.querySelector(".form-message");

    if (existingMessage) {
        existingMessage.remove();
    }


    /* -----------------------------
       Create a new message element
    ----------------------------- */

    const messageElement =
        document.createElement("div");


    messageElement.className =
        `form-message ${type}`;


    messageElement.textContent =
        message;


    /* -----------------------------
       Add the message below
       the login button.
    ----------------------------- */

    loginForm.appendChild(messageElement);


    /* -----------------------------
       Automatically remove the
       message after 3 seconds.
    ----------------------------- */

    setTimeout(() => {

        messageElement.remove();

    }, 3000);
}