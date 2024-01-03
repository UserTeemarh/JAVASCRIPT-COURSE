"use strict";
const question = Math.trunc(Math.random()*20) + 1;
document.querySelector('.message') = question;
let score = 20;

if (check === question) {
    document.querySelector('.area').textContent = 'correct Number';
} else if (check > question) {
    document.querySelector('.area').textContent = 'too high';
    score++;
    document.querySelector('.area').textContent = score;
}else if (check < question) {
    document.querySelector('.area').textContent = 'too low';
    score--;
    document.querySelector('.area').textContent = score;
}