// Define a variable to store the historical choices made by the player
const playerChoicesHistory = [];

// Function to generate a random index based on weighted probabilities
function weightedRandom(probabilities) {
  const total = probabilities.reduce((sum, prob) => sum + prob, 0);
  const random = Math.random() * total;
  let cumulative = 0;
  for (let i = 0; i < probabilities.length; i++) {
    cumulative += probabilities[i];
    if (random < cumulative) {
      return i;
    }
  }
  return probabilities.length - 1;
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function displayResult(userChoice, computerChoice, result) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    You chose ${userChoice}.<br>
    Computer chose ${computerChoice}.<br>
    ${result}
  `;
}

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  // Update the player's choices history
  playerChoicesHistory.push(userChoice);

  // Get the frequency of each choice in the player's history
  const playerChoicesCount = choices.reduce((acc, choice) => {
    acc[choice] = playerChoicesHistory.filter((c) => c === choice).length;
    return acc;
  }, {});

  // Calculate probabilities for each choice
  const choiceProbabilities = choices.map((choice) => {
    const totalChoices = playerChoicesHistory.length || 1; // Avoid division by zero
    return playerChoicesCount[choice] / totalChoices;
  });

  // Adjust the probabilities to make less frequent choices more likely
  const adjustedProbabilities = choiceProbabilities.map((prob) => prob + 0.1);

  // Select the computer's choice based on the adjusted probabilities
  const computerChoiceIndex = weightedRandom(adjustedProbabilities);
  const computerChoice = choices[computerChoiceIndex];

  const result = determineWinner(userChoice, computerChoice);

  displayResult(userChoice, computerChoice, result);
}
