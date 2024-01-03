'use strict';
// example dos
function myName () {
    console.log('my name is esther');
}
myName();
myName();
myName();
myName();
myName();
myName();
myName();
myName();


// example uno

function naranjaFavorita (a,b) {
    const juice = `i want ${a} oranges, and ${b} mangoes`;
    console.log(juice);
}
naranjaFavorita(2,4);
naranjaFavorita(2,4);
naranjaFavorita(2,4);
naranjaFavorita(2,4);

// example tres

function amigosFavorita (friend1, friend2, friend3) {
    const NamesOfFriends = `${friend1} is my childhood friend,
${friend2} is my primary school friend, while ${friend3} is my best friend`;
    return NamesOfFriends;
}
const logout = amigosFavorita('Favour','Fatimah','Esther');
console.log(logout);

// console.log('i love javascripts');

const learning = true;
let studying;

if (learning) studying = true; {
    console.log('i love my life');
}

function lady() {
    console.log('function is the next thing')
}
lady();
lady();
// example one

function fruitProcessor (apples, oranges) {
    console.log(apples, oranges)
    const apple = `i want ${apples} apples and ${oranges} oranges`;
    return apple;
}
const fruit = fruitProcessor(5,4);
console.log(fruit);

const typeofFruit = fruitProcessor(6, 6);

console.log(typeofFruit);

// example two

function name (ada, obi) {
    const myName = `${ada} is fair, while ${obi} is black.`;
    return myName;
}
 const friend = name('ada', 'obi');
 console.log(friend);

 // example three
