const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const errorContainer = document.getElementById('error');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  errorContainer.innerHTML = '';

  const email = emailInput.value.trim();

  if (isEmpty(email)) {
    displayError('Email cannot be empty.');
    return;
  }

  if (!validateEmail(email)) {
    displayError('Valid email required.');
    return;
  }

  redirectToMessage();
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isEmpty(value) {
  return value.trim() === '';
}

function displayError(message) {
  const errorMessage = document.createElement('p');
  errorMessage.className = 'error-message';
  errorMessage.textContent = message;
  errorContainer.appendChild(errorMessage);
  emailInput.classList.add("errors");
}

function redirectToMessage() {
  window.location.href = 'success.html';
}

function redirectToHome() {
  window.location.href = 'index.html';
}
