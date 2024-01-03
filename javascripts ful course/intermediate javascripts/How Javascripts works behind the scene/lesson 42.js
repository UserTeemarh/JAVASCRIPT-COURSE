'use strict';
const button = document.querySelector('.click');
const stack = document.querySelector('.stack');

stack.classList.add('hidden');

button.addEventListener('click', function() {
    const preview = Math.trunc(Math.random() *2) + 1;
    console.log(preview);

    stack.classList.remove('hidden');
    stack.src = `stack--${preview}.png`;
})