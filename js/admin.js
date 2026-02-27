function login() {
    if (adminUser.value === "admin" && adminPass.value === "1234") {
        adminPanel.style.display = "block";
        loadBookings();
    } else {
        alert("Wrong Admin Credentials");
    }
}

function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const container = document.getElementById("adminBookings");

    container.innerHTML = "";
    bookings.forEach(b => {
        container.innerHTML += `
            <p>
            User: ${b.username} | ${b.date} | ${b.time} | ${b.guests} | ${b.paymentStatus}
            </p>
        `;
    });
}