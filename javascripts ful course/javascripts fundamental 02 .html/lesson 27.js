'use strict';
console.log(23)
    
for (let roll = 1; roll <= 5; roll++) {
    console.log(`i kill my ${roll} star`)
}

let dice = 1;
while (dice <= 6) {
    console.log(`${dice} reps`)
    dice++
}

let rep   = Math.trunc( Math.random() * 6) + 1;
while(rep !== 6) {
    console.log(`${rep} reps per set`);
    rep   = Math.trunc( Math.random() * 6) + 1;
    if (rep === 6) {
        console.log('its about to go down:')
    }
}


// for (let time = Math.random; time < 5; time++) {
//     console.log(`${time} is the percentage of ghana populations`)
// }


