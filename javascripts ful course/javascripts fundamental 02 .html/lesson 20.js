'use strict';
const friends = new Array ('chima', 'adaeze','felicia','chioma');
let bestie = friends.indexOf('felicia');
console.log(bestie);
let find = Array.isArray(friends);
console.log(find); 
console.log(friends.join('-'));
console.log(friends.keys());

console.log(friends.push('bola'));



// keys();

const fruits = ['Mango', 'Ápple', 'Naranja', 'queso'];
console.log(Array.isArray(fruits));
console.log(fruits.join(' , '));
console.log(fruits.indexOf('queso'));
console.log(fruits.keys());
console.log(fruits.includes('Mango'));
console.log(fruits.valueOf());
console.log(fruits.valueOf());
console.log(fruits);
console.log(fruits.shift('chinese apple'));
console.log(fruits.unshift('maize'));
const Keys = Object.keys(fruits);

let text = "";
for (let x of Keys) {
    text += x
}
console.log(text);


const items = new Array ('Clothes', 'Gadgets', 'Shoes', 'Undies','Cosmetics','Vegetable','Fruits', 'Utensil');
// length method
console.log(items.length);
// indexOf() method
console.log(items.indexOf('Undies'));
// isArray()  method
console.log(Array.isArray(items));
// join() method
console.log(items.join(' and '));
// keys() method
console.log(items.keys());
// includes() method
console.log(items.includes('Gadgets'));
// unshift() method
console.log(items.unshift('Bags'));
// push() method
console.log(items.push('Heels'));
// pop() method
console.log(items.pop());
// shift() method
console.log(items.shift());
// valueOf method
console.log(items.valueOf());
// console.log(items);

