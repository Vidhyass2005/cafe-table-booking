// Signup
if (document.getElementById("signupForm")) {
    document.getElementById("signupForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const user = newUsername.value;
        const pass = newPassword.value;
        localStorage.setItem("user", JSON.stringify({user, pass}));
        alert("Registered!");
        window.location.href = "login.html";
    });
}

// Login
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const user = username.value;
        const pass = password.value;
        const stored = JSON.parse(localStorage.getItem("user"));

        if (stored && user === stored.user && pass === stored.pass) {
            localStorage.setItem("loggedInUser", user);
            window.location.href = "booking.html";
        } else {
            alert("Invalid Credentials");
        }
    });
}

// logout
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged Out Successfully");
    window.location.href = "login.html";
}