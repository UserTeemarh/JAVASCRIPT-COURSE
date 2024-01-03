'use strict';
// document.querySelector('.cancel').addEventListener('click',
// function() {
//     document.querySelector('h2').textContent = 'hola dios mio';
//     document.querySelector('body').style.backgroundColor = '#fff';
// })
// document.querySelector('.material-symbols-outlined').addEventListener('click',
// function() {
//     document.querySelector('body').style.backgroundColor = '#333';
//     document.querySelector('h2').textContent = '';
//     document.querySelector('body').style.color = '#f2c45a';
// })



const modal = document.querySelector('.modal');
const cancel = document.querySelector('.cancel');

const overlay = document.querySelector('.overlay');
const button = document.querySelectorAll('.btn');
console.log(button);
for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function() {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    })
}
cancel.addEventListener('click',
function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}) 
overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
// passing in the addEventListener Keyword ... like e, event, x, or qa
// types of key in keydown: keyup: keypress
// e.key to know which key to press
document.addEventListener('keydown', function (e){
    // console.log(e)
   if (e.key === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
   } 
})

// for (let i = 0; i < btns.length; i++)
// console.log(btns[i].textContent);