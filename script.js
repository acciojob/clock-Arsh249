//your JS code here. If required.
// Function to update the timer
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const now = new Date();

    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    timerElement.textContent = `${date} ${time}`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer on page load
document.addEventListener('DOMContentLoaded', updateTimer);

