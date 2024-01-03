'use strict';
// one-dimensional
const friend1 = 'bayo';
const friend2 = 'busayo';
const friend3 = 'elijah';

const Arrayfriends = [friend1,friend2,friend3];
console.log(Arrayfriends.concat(friend1))
console.log(Arrayfriends);
console.log(Arrayfriends[1]);

// using the new Array keyword

const myArray = new Array (1,2,3,4,5,'Esther', true)
console.log(myArray);

console.log(myArray.length);
console.log(myArray.length === 4);


// two-dimensional array

const arr = [
    [1,2,3,4],
    [5,6,7,8],
    ['Esther','Bolu','Favour','Pelumi']
]
console.log(arr[0]);
console.log(arr[2]);


// multi-dimensional array
const fruits = Array(
    [20,34,56,76],
    ['A','B','C','D']
)
console.log(fruits);

// jagged array

const testArray = [
    [1,2,3],
    [2,5],
    ['fatimah','bolu','esther','tosin']
]
console.log(testArray);


// calling function in array
function calAmount (fruits) {
    return fruits * 4;
}
console.log(calAmount(5));

const calFruits = [2,3,5,6,7];

const fruitsOutput = [
    calAmount(calFruits[0]),
    calAmount(calFruits[1]),
    calAmount(calFruits[2]),
    calAmount(calFruits[3]),
    calAmount(calFruits[4])
]
console.log(fruitsOutput);



















// const name1 = 'olivia';
// const name2 = 'chapman' && name1;
// const name3 = 'alexandra';
// const name4 = 'charlotte';

// const namesoffriends = [name1,name2,name3,name4];
// console.log(namesoffriends);


// if (name2 === 'olivia') {
//     console.log(`my name is ${name1}`);
// } else {
//     console.log('my name is unknown')
// }

// const names = ['olivia','chapman', 'alexandra','charlotte'];
// console.log(names);
// console.log(names[0]);
// console.log(names[3]);
// names[3] = 'sophia';
// console.log(names);

// function percentageOfWorld (population) {
//     const populations = (population / 7900) * 100;
//     return `ghana has 1441, which is about ${populations} of the world`;
// }
// const myPopulation = percentageOfWorld(1441);
// console.log(myPopulation);



// const populations = [200,350,10,20];
// const percentages = [
//     percentageOfWorld(populations[0]),
//     percentageOfWorld(populations[1]),
//     percentageOfWorld(populations[2]),
//     percentageOfWorld(populations[3])
// ]
// console.log(percentages);

// function myname (person) {
//     return 5 * person;
// }


// const persons = [100, 120, 300,600];
// const results = [
//     myname(persons[0]),
//     myname(persons[1]),
//     myname(persons[2]),
//     myname(persons[3])
// ]
// console.log(results);
// const arial = [24]
// function myAge (age) {
//     return `i am ${age} years old`;
// }
// const myages =  myAge([arial]);
// console.log(myages);



// const arials = ['fatimah', 'joy', 'felix','emma','stanley'];
// console.log(arials);

// arials[2] = 'david';
// console.log(arials);

// console.log(arials.length === 3);

// const population = ['ghana','nigeria','cotonu','south africa'];
// console.log(population);
// console.log(population[3]);
// console.log(population.length);
// const country1 = 'burkina faso';
// const country2 = 'korea';
// const country3 = 4;
// const country4 = 'togo';

// const mycontry = new Array (country1, country2,country3,country4);

// console.log(mycontry)
// mycontry[2] = 5;
// console.log(mycontry);


// const countries = [country1, country2,country3,country4];
// console.log(countries);

// console.log(countries[2] * 3);



// const arials = [2,3,4,5];
// console.log(arials);

// function calculate (birthyear) {
//     return birthyear * 4;  
// }
// const age1 = calculate(arials[0]);
// const age2 = calculate(arials[1]);
// const age3 = calculate(arials[2]);
// const age4= calculate(arials[3]);

// const ages = [age1,age2,age3,age4];
// console.log(ages);
// console.log(age2);



    // const tips = [275, 555, 44];
    // const bills = [tips[0], tips[1], tips[2]];

    // console.log(tips, bills);
    // const total = [tips[0] + bills[0],tips[1] + bills[1], tips[2] + bills[2] ];
    // console.log(total)
    // // types of array 
    // // one-dimensional array or literal array definition
    // // and 
    // // two-dimensional array 

    // const calage = calAge => calAge * 5;
    // const myage = calage(5);
    // console.log(myage);

    // function percentageOfWorld(population) {
    //     return (population / 7900) * 100;
    // }
    // const country = percentageOfWorld(2000);
    // console.log(country);
    // const populations = [34,56, 87, 90];
    // const percentages = [
    //     percentageOfWorld(populations[0]),
    //     percentageOfWorld(populations[1]),
    //     percentageOfWorld(populations[2]),
    //     percentageOfWorld(populations[2])
    // ];
    // console.log(percentages);






