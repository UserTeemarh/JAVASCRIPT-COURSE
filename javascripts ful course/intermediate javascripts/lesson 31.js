'use strict';
// document.querySelector('.input').value = 0;
// console.log(document.querySelector('.input').value = 0); 



document.querySelector('.check').addEventListener
('click', function () {
    const check = Number(document.querySelector('.input').value);
    console.log(check, typeof check);

    if (!check){
        console.log('yay! you got it right.💯💯')
    }
    // console.log(document.querySelector('.input').value);
})