document.getElementById("paymentForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    if (cardNumber.value.length !== 16 || cvv.value.length !== 3) {
        alert("Invalid Payment Details");
        return;
    }

    let booking = JSON.parse(localStorage.getItem("pendingBooking"));
    booking.paymentStatus = "Paid";

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));
    localStorage.removeItem("pendingBooking");

    window.location.href = "success.html";
});