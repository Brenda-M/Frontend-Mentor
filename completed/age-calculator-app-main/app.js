function isValidDateCheck(day, month, year) {

  const date = new Date(year, month - 1, day);

  return (
    date.getDate() === day &&
    date.getMonth() === month - 1 &&
    date.getFullYear() === year
  );
}

function animateCountUp(element, finalValue) {
  let start = 0;
  const duration = 1000; 
  const interval = 10;
  const step = (finalValue / duration) * interval;

  function update() {
    start += step;
    if (start >= finalValue) {
      element.innerText = finalValue;
    } else {
      element.innerText = Math.floor(start);
      requestAnimationFrame(update);
    }
  }

  update();
}

function calculateAge() {
  // Reset error messages and input field styles
  document.getElementById('day-error').innerText = '';
  document.getElementById('month-error').innerText = '';
  document.getElementById('year-error').innerText = '';

  document.getElementById('day').classList.remove('error');
  document.getElementById('month').classList.remove('error');
  document.getElementById('year').classList.remove('error');

  document.querySelector('label[for="day"]').classList.remove('error');
  document.querySelector('label[for="month"]').classList.remove('error');
  document.querySelector('label[for="year"]').classList.remove('error');

  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  let hasError = false;

  if (isNaN(day) || day < 1 || day > 31) {
    document.getElementById('day-error').innerText = 'Must be a valid day';
    document.getElementById('day').classList.add('error');
    document.querySelector('label[for="day"]').classList.add('error');
    hasError = true;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    document.getElementById('month-error').innerText = 'Must be a valid month';
    document.getElementById('month').classList.add('error');
    document.querySelector('label[for="month"]').classList.add('error');
    hasError = true;
  }

  if (isNaN(year) || year < 1900) {
    document.getElementById('year-error').innerText = 'Must be a valid past year';
    document.getElementById('year').classList.add('error');
    document.querySelector('label[for="year"]').classList.add('error');
    hasError = true;
  }

  if (!day) {
    document.getElementById('day-error').innerText = 'This field is required';
    document.getElementById('day').classList.add('error');
    document.querySelector('label[for="day"]').classList.add('error');
    hasError = true;
  }

  if (!month) {
    document.getElementById('month-error').innerText = 'This field is required';
    document.getElementById('month').classList.add('error');
    document.querySelector('label[for="month"]').classList.add('error');
    hasError = true;
  }

  if (!year) {
    document.getElementById('year-error').innerText = 'This field is required';
    document.getElementById('year').classList.add('error');
    document.querySelector('label[for="year"]').classList.add('error');
    hasError = true;
  }

  if (!hasError) {
    const isValidDate = isValidDateCheck(day, month, year);
    
    if (!isValidDate) {
      document.getElementById('day-error').innerText = 'Must be a valid date';
      document.getElementById('day').classList.add('error');
      document.getElementById('month').classList.add('error');
      document.getElementById('year').classList.add('error'); 
      document.querySelector('label[for="month"]').classList.add('error');
      document.querySelector('label[for="year"]').classList.add('error');
      document.querySelector('label[for="day"]').classList.add('error');
      hasError = true;
    }
  }

  if (hasError) {
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const ageInMilliseconds = today - birthDate;

  const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
  const days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

  animateCountUp(document.getElementById('result-years'), years);
  animateCountUp(document.getElementById('result-months'), months);
  animateCountUp(document.getElementById('result-days'), days);
}
