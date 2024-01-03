"use strict";
// document.querySelector('.text').textContent = 'Correct Number!';
// document.querySelector('.sec-child').textContent = 15;
// document.querySelector('.p2').textContent = 20;


// value property for inputing a text in an input element.
// document.querySelector('.input').value = 18;
// console.log(document.querySelector('input').value = 18);


// activating the button with the input element
// document.querySelector('.text').textContent = 'Yay. You are  right!';
    // console.log(document.querySelector('.text').textContent = 'Yay. You are  right!');
    // console.log(document.querySelector('.sec-child').textContent = number);

console.log(document.querySelector('.input').value);

let guessNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let hightscore = 0;

document.querySelector('.check').addEventListener('click', 
function() {
   const check = Number(document.querySelector('.input').value);
   console.log(check)

   if(!check) {
    document.querySelector('.text').textContent = 'Empty Value';
   } else if (check === guessNumber) {
    document.querySelector('.text').textContent = 'Correct Number';
    document.querySelector('.sec-child').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > hightscore) {
        hightscore = score;
        document.querySelector('.p3').textContent = hightscore;
    }

   } else if (check > guessNumber) {
    if(score > 1) {
        document.querySelector('.text').textContent = 'Too High.!';
        score--;
        document.querySelector('.p2').textContent = score;
    } else {
        document.querySelector('.text').textContent = 'You lose the Game 😢'
    }
   }else if (check < guessNumber) {
    if(score > 1) {
        document.querySelector('.text').textContent = 'Too Low.';
        score--;
        document.querySelector('.p2').textContent = score;
    } else {
        document.querySelector('.text').textContent = 'You lose the Game 😢'
    }
   }

});

// again codes 

document.querySelector('.h2').addEventListener('click', 
function () {
    guessNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.text').textContent = 'Start Guessing';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.p2').textContent = score;
    document.querySelector('.sec-child').textContent = '?';
    document.querySelector('.input').value = '';

})



// let number = Math.trunc(Math.random()* 20) + 1;

// let score = 20; 
// document.querySelector('.check').addEventListener
// ('click', function () {
//     const check = Number(document.querySelector('.input').value);
//     console.log(check, typeof check);
    

//     if (!check){
//     document.querySelector('.text').textContent = 'Empty Value!';
//     }else if (check === number) {
//         document.querySelector('.text').textContent = 'Correct Number!';
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.sec-child').textContent = number;
//     } else if (check > number) {
//         if (score > 1) {
//             document.querySelector('.text').textContent = 'Too High';
//             score--;
//             document.querySelector('.p2').textContent = score;
//         } else {
//             document.querySelector('.text').textContent = ('you lose the game');
//             document.querySelector('.p2').textContent = 0;
//         }
       
//     }
//     else if (check < number) {
//         if (score > 0) {
//             document.querySelector('.text').textContent = 'Too Low';
//             score--;
//             document.querySelector('.p2').textContent = score;
//         } else {
//             document.querySelector('.text').textContent = ('you lose the game');
//             document.querySelector('.p2').textContent = 0;
//         }
//     }
// });


// // again button 
// document.querySelector('.h2').addEventListener('click', function() {
//     score = 20;
//      number = Math.trunc(Math.random()* 20) + 1;
//      document.querySelector('.text').textContent = 'Start Guessing!....';
//      document.querySelector('.p2').textContent = score;
//      document.querySelector('.sec-child').textContent = '?';
//      document.querySelector('body').style.backgroundColor = '#222';
//      document.querySelector('.input').value;
// } )