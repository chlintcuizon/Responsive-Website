document.getElementById("loginButton").addEventListener("click", function () {
    try {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        let usernameError = false;
        let emailError = false;

        // Validate username length
        if (username.length < 5) {
            usernameError = true;
        }

        // Validate username format
        if (!isValidUsername(username)) {
            usernameError = true;
        }

        // Validate email format
        if (!isValidEmail(email)) {
            emailError = true;
        }

        // Display a single error message if both username and email are incorrect
        if (usernameError && emailError) {
            alert("Invalid username and email. Please check your input.");
        } else if (usernameError) {
            alert("Invalid username. Please use at least 5 characters and only letters and numbers");
        } else if (emailError) {
            alert("Invalid email address.");
        } else {
            // If validation passes, redirect to the page 2
            window.location.href = "indexhp.html"; // Redirect to the page 2
        }
    } catch (error) {
        // Handle other unexpected errors
        alert("An error occurred: " + error.message);
    }
});

function isValidUsername(username) {
    // Validate username: Only letters, numbers, and underscores allowed
    return /^[a-zA-Z0-9_]+$/.test(username);
}

function isValidEmail(email) {
    // Validate email: Using a more comprehensive regular expression
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}
