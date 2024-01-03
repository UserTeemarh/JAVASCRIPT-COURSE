'use strict';
function myName(a) {
   return a * 5;
}
console.log(myName(5));



const calTip = function(bill, tip){
   const callBill = myName(bill);
   const callTip = myName(tip)
   return `my bill is $${callBill} and the tip ${callTip}%`;
}
console.log(calTip(100,5));

function birthyear(birthyea) {
   return  birthyea * 4;
   
} 
const age = birthyear(5);
console.log(age);

function fruitTypes(apples, oranges,pineapple) {
   const orange1 = birthyear(pineapple);
   const juice = `i want ${apples} apples and ${oranges} oranges and ${orange1} mangoes`;
   return juice;
}
const juicequantity = fruitTypes(5, 2, 5);
console.log(juicequantity);

function nigeriaPopulation(orange, pineapple) {
    const fruite = birthyear(orange);
    const numberOfPeople = `i want ${fruite} orange and ${pineapple} pineapple.`;
    return numberOfPeople;
} 
const favoriteFruit = nigeriaPopulation(5, 6);
console.log(favoriteFruit);

const arrowFunction = birthYeah => birthYeah * 5;
const birthyea = arrowFunction(5);
console.log(birthyea);

function calAge (yearAge,Ageyear) {
   const age1 = arrowFunction(yearAge);
   const age2 = Ageyear / 50 * 0.2;
   return `${age1} and ${age2}`
}
console.log(calAge(30,45));
