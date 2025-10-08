
const targetDate = new Date("October 10, 2025 00:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
    countdownElement.innerHTML = "Countdown is over!";
    clearInterval(timer);
    return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

    const timer = setInterval(updateCountdown, 1000);

    updateCountdown();

