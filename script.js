let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#User-score");
let compScorePara = document.querySelector("#comp-score");

const computerChoice = () => {
  //generating computer choice
  const options = ["rock", "paper", "sissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!! ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compchoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerText = "The Game was Draw.Play Again.";
  msg.style.backgroundColor = "#003049";
};

const playGame = (userChoice) => {
  const compchoice = computerChoice();

  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper, sissor
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // sissor,rock
      userWin = compchoice === "sissor" ? false : true;
    } else {
      //paper,rock
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
