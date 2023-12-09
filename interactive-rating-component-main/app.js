// const submitButton = document.getElementById('submit')
// const valSelect = document.getElementById('val-select')

// submitButton.addEventListener('click', buttonSubmit)

// function buttonSubmit(){
//   valSelect.innerHTML()
// }

console.log('hello')

document.addEventListener('DOMContentLoaded', function () {
  const ratingsContainer = document.querySelector('.ratings');
  const submitButton = document.getElementById('submit');
  const thankYouCard = document.querySelector('.thank-you');
  const valSelectSpan = document.getElementById('val-select');

  let selectedRating = 0;

  ratingsContainer.addEventListener('click', function (event) {
    const selectedValue = parseInt(event.target.innerText);
    if (selectedValue >= 1 && selectedValue <= 5) {
      selectedRating = selectedValue;
      highlightSelectedRating(selectedValue);
    }
  });


  submitButton.addEventListener('click', function () {
    if (selectedRating > 0) {
      showThankYouCard(selectedRating);
    }
  });

  function highlightSelectedRating(value) {
    ratingsContainer.querySelectorAll('div').forEach((div, index) => {
      div.classList.toggle('selected', index + 1 <= value);
    });
  }

  function showThankYouCard(value) {
    valSelectSpan.textContent = value;
    document.querySelector('.rating-card').style.display = 'none';
    thankYouCard.style.display = 'block';
  }
});
