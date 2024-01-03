'use strict';

const info = [
    'fatimah',
    'khan',
    2023 - 1998,
    'teacher',
    true
];
const empty = [];
// backward loop
for (let i = info.length; i >= 0; i--) {
    console.log(i, info[i], typeof info[i]);
    empty.push(typeof info[i]);
}
console.log(empty);


// loop in loop

for (let mealPlan = 1; mealPlan <= 3; mealPlan++){
    console.log(`____ My meal plan: ${mealPlan}_____`)
    for (let eatplan = 0; eatplan <= 5; eatplan++) {
        console.log(`${mealPlan} i eat ${eatplan} in a day`)
    }
}






















// const countries = [
//     ['senegal', 'ghana'],
//     ['south africa'],
//     ['togo','benin']
// ]
// for (let i = 0; i < countries.length; i++) 
// for (let y = 0; y < countries[i].length; y++)
// console.log(`neigbour: ${countries[i] [y]}`)