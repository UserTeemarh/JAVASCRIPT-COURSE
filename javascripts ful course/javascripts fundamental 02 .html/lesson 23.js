// 'use strict';

const studentInformation = {
    firstName: 'Felix',
    Surname: 'williams',
    birthYear: 2002,
    friends: ['moses','stanley','ifeanyi','ndubisi'],
    knowsHowToCode: false,
    // expression function can only be used in Object .....
    // calAge: function (birthyear) {
    //     return 2023 - birthyear;
    // }
// // using of the THIS method
    // calAge: function () {
    //     return 2023 - this.birthYear;
    // }

//     // using the THIS method to create a new property ..
    calAge: function () {
        this.myage = 2022 - this.birthYear;
        return this.myage;
    },
    getSummary: function() {
    return `his name is ${this.firstName} ${this.Surname}, he is ${this.calAge()}-years old boy he has ${this.friends.length}  friends, but  his best friend is ${this.friends[2]}. and he ${this.knowsHowToCode ? 'can' : 'cannot'} code very well`
    }
}
console.log(studentInformation.getSummary());
console.log(studentInformation.calAge());
console.log(studentInformation.calAge());


const jonas = {
    FullName: 'will smith',
    birthYear: 1992,
    friends: ['anne','kylie','stan'],
    hasDriverLicense: true, 
    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // }
    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }
    calAge: function() {
        this.driver = 'usman';
        return this.driver
    },
    calme: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    }
}
console.log(jonas.calme());
console.log(jonas.calAge())

// challenge 

// writes a this method called INFORMATION that return an expression of 
// 'i am felix williams, i am 23 years old, i have 4 brothers but i like stanley most. most of all. i am / am not good  ...with coding';
const ObjectPractice = {
    fullName: 'Fatimah Khan',
    age: 1998,
    sibling: ['mae','tyler','mckenzie','brooklyn'],
    Age: function(){
       this.birthYear = 2023 - this.age;
       return this.birthYear;
    },
    Driver: function () {
        this.driver = 'Danladi';
        return this.driver;
    },
    TakeaGuess: function() {
        this.guess = this.guess === 0 ? 'bad' : 'bad';
        return this.guess
    },
    outputObject: function() {
        return `I am ${this.fullName}, I am ${this.birthYear}-years old, I have ${this.sibling.length} siblings but I like ${this.sibling[2]} and My driver name is ${this.driver}. I am ${this.guess} at driving`;
    },    
}
console.log(ObjectPractice.TakeaGuess());
console.log(ObjectPractice.Age());
console.log(ObjectPractice.Driver());
console.log(ObjectPractice.outputObject());





// const myCountry = {
//     country: 'Nigeria',
//     capital: 'Abuja',
//     population: 6,
//     neigbours: ['ghana','south africa','sierra lonne', 'burkina faso'],
//     describe: function () {
//         return `${this.country} has ${this.population}million yoruba speaking people, ${this.neigbours.length} and a capital called ${this.capital}`

//     },
//     checkIsland: function () {
//         this.isIsland = this.isIsland === 0 ? true : false;
//         return this.isIsland;
//     }

// }
// console.log(myCountry.checkIsland())
// console.log(myCountry.describe())
// console.log(myCountry['population'] += 2);

// // // challenge
// // // const info = {

// // // }
// const moses = {
// FullName: 'Moses Williams',
// mass: 78,
// height: 1.69,

// calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI
// }

// }



// explicit binding


// function calName() {
//     this.name = 'pelumi';
//     return this.name;
// }
// console.log(calName());
// function warn () {
//     console.log(`my name is` +  ' ' + this.name);
// }
// const obj = {
//     name: 'fatimah'
// }
// console.log(warn.call(obj));

// implicit binding

function name3 () {
    console.log(this.name3 + 'is my name');
}
const obj1 = {
    name3: 'Kikelomo',
}
console.log(obj1.name3);
let blog = {
    name: 'Allan',
    lastName: 'Mckenzie',
    Job: 'Teacher',
    OutPut: function ( ) {
    const incul = this.name + this.fullName;
    console.log(incul);
    }
    };
    // console.log(blog[incul]);
    function MyFunction( ) {
        console.log( this) // Refers to the global object (e.g window in a browser)
        }
        console.log(MyFunction());
        
        
    // implicit binding 
    const myObject = {
        property: "value",
        myMethod: function (){
            console.log(this.property)
        }
    }
    myObject.myMethod();


let Break = {
name:   'Allan',
Job:   'Teacher',
OutPut:   function ( ) {
console.log (`${this.name} is a ${this.Job}`);
}
};
Break.OutPut( );

// explicit Binding

// call() method
function calJohn (message) {
    console.log(`${message} ${this.john}`);
  }
  const person = {
    john: 'John'
  }
  console.log(calJohn.call(person,'Hello'));

  function caladd (bill) {
    return 
  }


  // apply () method 
  function calJohn (message) {
    console.log(`${message} ${this.john}`);
    }
    const human = {
    john: 'Allan'
    }
    console.log(calJohn.apply(human, ['Hello']));

    // bind() method 
    function calJohn (message) {
        console.log(`${message} ${this.name}`);
        }
        const persona = {
        name: 'Mckenzie'
        }
        // Using bind() to create a new function with 'persona' as the context
        const calJohnPersona = calJohn.bind(persona);
        // Invoking the new function___ (calJohnPersona)
        console.log(calJohnPersona('Hola'))

            
// default binding 

// function bydefault (){
//     console.log(this.name);
// }
// const link = {
//     name: " Juan"
// }
// console.log(bydefault());



// arrow function binding

const arrowObj = ()=> {
    console.log(this); 
}
const objArrow = {
    method: arrowObj
};
console.log(objArrow.method());
