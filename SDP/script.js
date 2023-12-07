function bookSeminar() {
    const eventName = document.getElementById('eventName').value;
    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    const bookingStatus = document.getElementById('bookingStatus');

    if (eventName && date && startTime && endTime) {
        bookingStatus.innerHTML = `<p>Booking successful!</p>
                                   <p>Event Name: ${eventName}</p>
                                   <p>Date: ${date}</p>
                                   <p>Time: ${startTime} - ${endTime}</p>`;
    } else {
        bookingStatus.innerHTML = '<p>Please fill in all the fields.</p>';
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement login logic here
    // Example: Check if the username and password match a user in the database

    // Redirect to the booking page on successful login
    window.location.href = 'index.html';
}

function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Implement signup logic here
    // Example: Create a new user in the database

    // Redirect to the login page on successful signup
    window.location.href = 'login.html';
}
