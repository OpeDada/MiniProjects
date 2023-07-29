const getUserChoice = (userInput) => {
  userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("An error ocucred");
  }
};

// console.log(getUserChoice("rock"));

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
  }
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You won";
  }

  if (userChoice === computerChoice) {
    return "Tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won";
    } else {
      return "You won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won";
    } else {
      return "You won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won";
    } else {
      return "You won";
    }
  }
};

// console.log(determineWinner("paper", "scissors"));

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
