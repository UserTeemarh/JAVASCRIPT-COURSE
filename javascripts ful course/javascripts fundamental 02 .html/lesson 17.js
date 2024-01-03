'use strict';

const arrowFunction = calAge => calAge - 20;
const myFunction = arrowFunction(50);
console.log(myFunction);


const guessAGe = (a,b,c) => (a + b + c);
const ageGuess = guessAGe(1,2,3);
console.log(ageGuess);

const bestFriend = (friend1,friend2) => {
    return `my childhood friend is ${friend1} and my best friend is ${friend2}`;
}
const bestie = bestFriend('ADA', 'ESTHER');
console.log(bestie);






const myArrow = birthyear => birthyear + 10;
const name = myArrow(23);
console.log(name);


const namesOf = (names, age) => {
    return `yo soy es ${names} a soy ${age} years old`;
}
const available = namesOf ('fatimah', 24);
console.log(available);


const computer = computer => computer - 10;
const result = computer(23);
console.log(result);

const nameof = hisname => hisname - 1997;
const ofname = nameof(2023);
console.log(ofname);




const myfuntion2 = function (name, age) {
    const myname = nameof(age);
    return `my name is ${name} and i am ${myname} years old:`;
}
const funtion = myfuntion2('fatimah', 2028);
console.log(funtion);


   const ageRequired = drivingAge => drivingAge - 2;
   const age2 = ageRequired(10);
   console.log(age2);


   // expression function 
   const age1 = function (birthYear) {
    return birthYear - 12;
   }
   const age3 = age1(20);
   console.log(age3);


   // declaration function
   function birthYeah (name, age) {
    return `my name is ${name} and i am ${age} years old`;
   }
   const age4 = birthYeah('fatimah', 23);
   console.log(age4);


   // arrow 
   const teacherInformation = (fullName, realAge) => {
    return `my name is ${fullName} and i am ${realAge} years old`;
   }
   const teacher = teacherInformation('fatimah Khan', 24);
   console.log(teacher);