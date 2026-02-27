const dateInput = document.getElementById("date");
if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
}

document.getElementById("bookingForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const booking = {
        username: localStorage.getItem("loggedInUser"),
        name: name.value,
        date: date.value,
        time: timeSlot.value,
        guests: guests.value
    };

    localStorage.setItem("pendingBooking", JSON.stringify(booking));
    window.location.href = "payment.html";
});