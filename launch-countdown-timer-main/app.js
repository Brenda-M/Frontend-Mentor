

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

function updateCountdown() {
  const todayDate = new Date();
const launchDate = new Date("December 31, 2023 23:59:59");
  const timeDifference = launchDate - todayDate;

  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  days.textContent = daysLeft < 10 ? '0' + daysLeft : daysLeft;
  hours.textContent = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
  minutes.textContent = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  seconds.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCountdown, 1000);
updateCountdown()
