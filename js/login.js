document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;

    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

    // simple mock auth (we'll improve later)
    if (username === "Admin" && password === "admin123") {

        if (remember) {
            localStorage.setItem("user", username);
        }

        alert("Login successful");

        window.location.href = "dashboard.html";

    } else {
        alert("Invalid credentials");
    }
});