const currentUser = localStorage.getItem("loggedInUser");
let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
const list = document.getElementById("bookingList");

function display() {
    list.innerHTML = "";
    bookings.forEach((b, i) => {
        if (b.username === currentUser) {
            list.innerHTML += `
                <p>
                ${b.date} | ${b.time} | Guests: ${b.guests} | ${b.paymentStatus}
                <button onclick="cancel(${i})">Cancel</button>
                </p>
            `;
        }
    });
}

function cancel(i) {
    bookings.splice(i, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    display();
}

display();