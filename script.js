document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // Get values
    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.getElementById("gender").value;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Name validation
    if (fullname === "") {
        document.getElementById("nameError").textContent = "Full name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    }

    // Gender validation
    if (gender === "") {
        document.getElementById("genderError").textContent = "Please select gender";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});
