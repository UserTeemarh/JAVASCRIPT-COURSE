'use strict';

// let playing = true;
// const switchPlayer = function () {
//   document.getElementById(`current--${playerActive}`).textContent =
//     currentScore;
//   playerActive = playerActive === 0 ? 1 : 0;
//   currentScore = 0;
//   player1.classList.toggle("player--active");
//   player2.classList.toggle("player--active");
// };

// holdbtn.addEventListener("click", function () {
//     score[playerActive] += currentScore;
//     // add the current score to score
//     document.getElementById(`score--${playerActive}`).textContent =
//       score[playerActive];
  
//     // check if score is >= 100
//     if (score[playerActive] >= 20) {
//       // playing card should be set to false
//       playing = false
//       // hiding of the ace
//       ace.classList.add("hidden");
//   // changing the background, color  and displaying of the winnner text for the winner player
//       document.getElementById(`name--${playerActive}`).textContent = 'You win';
//       document.querySelector(`.player--${playerActive}`).style.backgroundColor = '#000';
//       document.querySelector(`.player--${playerActive}`).style.color = '#BF0A30';
//       // switching the player
//       switchPlayer();
//     } else {
//       switchPlayer();
//     }
//   });