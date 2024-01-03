'use strict';



// declaration function
function esther (a, b) {
    return `${a} apples, ${b} mangoes`;
}
const myName =  esther(2,4);
console.log(myName);


function calAge (birthYear) {
    const myYear = 2023 - birthYear;
    console.log(myYear)
}
calAge(1995);
calAge(1995);
calAge(1995);
calAge(1995);
calAge(1995);

function schoolProm(promdate) {
    return  promdate - 2012;
} 
const promi = schoolProm(3000);
console.log(promi);

// function expression 

const Age = function (c, d) {
    const ages = `ade is ${c}-years old teacher, while, Bolu is ${d}-years old driver`;
    console.log(ages);
}
Age(30,45)






















// function declaration


// function expression

// const age = function (birthYear) {
//     const myAge = `my best friend is ${birthYear}`;
//     return myAge;
// }
// const friendName = age('adanma');
// console.log(friendName);