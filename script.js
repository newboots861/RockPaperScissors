let computerScore = 0;
let playerScore = 0;
let roundNum = 1;
// Naming User and Computer Scores to update
const userScore = document.querySelector('.user-score');
const randomScore = document.querySelector('.computer-score');


function myRock(playerscore,computerscore) {
  document.getElementById("myBtn").value = "Rock";
  const pick=["Rock" , "Paper" , "Scissors"];
  let AnsComputer= pick.at(
    Math.floor(Math.random() * 3));
  document.getElementById("CompBtn").value = AnsComputer;

  if (AnsComputer === "Paper") {
  document.getElementById("AnsBtn").value = "You lose, Computer wins";
  computerScore++;
  randomScore.textContent = `${computerScore}`;
  }
  else if (AnsComputer === "Rock") {
  document.getElementById("AnsBtn").value = "Tie";}
  else if (AnsComputer === "Scissors") {
  document.getElementById("AnsBtn").value  = "You win, Computer loses";
  playerScore++;
  userScore.textContent = `${playerScore}`;
 
 }

}
function myPaper(playerscore,computerscore) {
  document.getElementById("myBtn").value = "Paper";
  const pick=["Rock" , "Paper" , "Scissors"];
  let AnsComputer= pick.at(
    Math.floor(Math.random() * 3));
  document.getElementById("CompBtn").value = AnsComputer;

  if (AnsComputer === "Scissors") {
  document.getElementById("AnsBtn").value = "You lose, Computer wins";
  computerScore++;
  randomScore.textContent = `${computerScore}`;}
  else if (AnsComputer === "Paper") {
  document.getElementById("AnsBtn").value = "Tie";}
  else if (AnsComputer === "Rock") {
  document.getElementById("AnsBtn").value  = "You win, Computer loses";
  playerScore++;
  userScore.textContent = `${playerScore}`;
  
  }
  
}

function myScissors(playerscore,computerscore) {
  document.getElementById("myBtn").value = "Scissors";
  const pick=["Rock" , "Paper" , "Scissors"];
  let AnsComputer= pick.at(
    Math.floor(Math.random() * 3));
  document.getElementById("CompBtn").value = AnsComputer;

   if (AnsComputer === "Paper") {
  document.getElementById("AnsBtn").value = "You win, Computer loses";
  playerScore++;
  userScore.textContent = `${playerScore}`;
 } else if (AnsComputer === "Scissors") {
  document.getElementById("AnsBtn").value = "Tie";
 } else if (AnsComputer === "Rock") {
  document.getElementById("AnsBtn").value  = "You lose, Computer wins";
  computerScore++;
  randomScore.textContent = `${computerScore}`;
  
 }  
}

