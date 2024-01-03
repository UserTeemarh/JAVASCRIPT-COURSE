"use strict";

const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const ace = document.querySelector(".ace");
const currentScore1 = document.getElementById("current--0");
const currentScore2 = document.getElementById("current--1");
const display1 = document.getElementById("name--0");
const display2 = document.getElementById("name--1");

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const newbtn = document.querySelector(".btn-new");
const rollbtn = document.querySelector(".btn-roll");
const holdbtn = document.querySelector(".btn-hold");

score0.textContent = 0;
score1.textContent = 0;
// score calculation in arrays
let score = [0, 0];
// current score
let currentScore = 0;
// to be calculated with the array
let playerActive = 0;
// next player function code ......

// code to stop the next player from playing if the current player win
let playing = true;
const switchPlayer = function () {
  document.getElementById(`current--${playerActive}`).textContent =
    currentScore;
  playerActive = playerActive === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

ace.classList.add("hidden");

rollbtn.addEventListener("click", function () {
  if (playing) {

  // generating a random number to the ace
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  console.log(rollDice);
  // display the ace
  ace.classList.remove("hidden");
  ace.src = `ace-${rollDice}.png`;
  // switch to the next player
  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${playerActive}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}
});

// // // holding the score code....   

holdbtn.addEventListener("click", function () {
  score[playerActive] += currentScore;
  // add the current score to score
  document.getElementById(`score--${playerActive}`).textContent =
    score[playerActive];

  // check if score is >= 100
  if (score[playerActive] >= 75) {
    // playing card should be set to false
    playing = false
    // hiding of the ace
    ace.classList.add("hidden");
// changing the background, color  and displaying of the winnner text for the winner player
    document.getElementById(`name--${playerActive}`).textContent = 'You win';
    document.querySelector(`.player--${playerActive}`).style.backgroundColor = '#333';
    document.querySelector(`.player--${playerActive}`).style.color = '#BF0A30';
    // switching the player
    switchPlayer();
  } else {
    switchPlayer();
  }
});

// reset the game 
newbtn.addEventListener('click', function () {
  document.getElementById(`name--${playerActive}`).classList.remove 
  
})


