"use strict";
// arrow function
const names = age => age - 23;
console.log(names(50));
// function expression
const beg = function(brag) {
    return brag * 23;
} 
console.log(beg(23));
// function declaration
function firstName (busy) {
    return busy * 5;
}
console.log(firstName(5));