'use strict';
const infor = [
    'william smith',
    'teacher',
    2037 - 1998,
    'hermanos',
    ['favour','johnson','emmnuel']
];
const names = []

for (let i = 0; i = infor.length; i++) {
    console.log(infor[0]);
    names[i] = typeof infor[i];

    // names.push(typeof infor[i]);
}
console.log(names[i])
//  or 
// console.log(names);

const years = [2002,1996,1998,2005];
const age = []
for (let i = 0; i < years.length; i++) {
   age.push(2023 - years[i]);
}
console.log(age);


// breaking loop

const teemarh = [
    'teemarh khan',
    20,
    37,
    'tutor',
    'nigerian'
]
for (let i = 0; i < teemarh.length; i++) {
    if (typeof teemarh[i] === 'number') break;
    console.log(teemarh[i],typeof teemarh[i]);
}

// continue loop
const moses = [
    'teemarh khan',
    20,
    37,
    'tutor',
    'nigerian',
    true
]

for(let i = 0; i < moses.length; i++) {
    if (typeof moses[i] !== 'string' ) continue;
    console.log(moses[i], typeof moses[i]);
}