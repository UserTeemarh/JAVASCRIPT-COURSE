"use strict";
// const x = 23;
// if (x === 23) console.log("yay");

// const calAge = fave => 2023 - fave;
// console.log(calAge(1999));

// // creating a prettier file and to be saved as .prettierrc

// // activating vscode snippet


// function calmeasure () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: Number(prompt('celcius degree:'))
//     }
//     // console.log(measurement);
//     console.table(measurement)
//     console.log(measurement.value)
//     // console.warn(measurement.value)
//     // console.error(measurement.value)
//     const daniel = measurement.value + 272;
//     return daniel;
// }
// console.log(calmeasure());

const infor = [
    'bruno',
     'rice',
     'kante',
        56,
     'fatimah'   
    ]

    for (let i = 0; i < infor.length; i++) {
        if (typeof infor[i] !== 'number') break;
        console.log(infor[i], typeof infor[i])
    }

