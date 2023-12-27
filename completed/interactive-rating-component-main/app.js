function selectRating(rating) {
  const ratings = document.querySelectorAll('.rating');
  ratings.forEach(r => r.classList.remove('selected'));

  const selectedRating = document.querySelector(`[data-rating="${rating}"]`);
  selectedRating.classList.add('selected');
}

function submitRating() {
  const selectedRating = document.querySelector('.selected');
  
  if (selectedRating) {
    const ratingValue = selectedRating.getAttribute('data-rating');
    
    window.location.href = `thank-you.html?rating=${ratingValue}`;
  } else {
    alert('Please select a rating before submitting.');
  }
}

if (window.location.pathname === '/thank-you.html') {
  const urlParams = new URLSearchParams(window.location.search);
  const ratingValue = urlParams.get('rating');

  const ratingElement = document.getElementById('rating-value');
  ratingElement.textContent = ratingValue;
}
