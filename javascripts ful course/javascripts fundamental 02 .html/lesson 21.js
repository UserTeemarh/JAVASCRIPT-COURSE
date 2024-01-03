'use strict';

// object literal
const property = {
    firstName: 'Esther',
    secondName: 'Williams',
    Age: 25,
    sheCanCode: true,
    friends: ['esther', 'Sunday', 'Elizabeth'],
    addme: function () {
        this.pet = 'Dog';
        return this.pet
    }
}
console.log(property.addme());
console.log(property);
console.log(delete property.Age);
// console.log(property.firstName);
console.log(property['firstName']);


// new Object Keyword

const MyObject = new Object();
MyObject.favoriteFood = 'Shawarma';
MyObject.movie = 'Mr Queen';

console.log(MyObject);
console.log(MyObject.movie);

// object constructor 

function Name (first,second,third) {
    this.firstName = first
    this.secondName = second
    this.thirdName = third
}

const assign = new Name ('Esther','Williams','Naam Bong Soon');
console.log(`I am ${assign.firstName} ${assign.secondName} ${assign.thirdName}`);

const information = [
    'fatimah',
    'stanley',
    2023 - 1997,
    ['favour', 'kola','felix']
];
const outInformation = {
    firstName: 'fatimah',
    lastName: 'stanley',
    age: 2023 - 1997,
    friends: ['favour', 'kola', 'felix'],
    adds: function() {
        this.driver = 'Allan'
        return this.driver
    }
}
console.log(information);
console.log(delete outInformation.firstName);
console.log(outInformation.adds())
console.log(typeof outInformation);


const info = [
    'fatimah',
    'felix',
    23,
    true,
    [23,45, 67]
]
console.log(info);

const infor = {
    firstName: 'moses',
    lastName: 'stanley',
    age: 2023 - 1998,
    friends: ['kola', 'felix','stanley']
}
// delete infor.lastName
// console.log(infor);

const person = new Object();
person.firstName = 'Fatimah';
person.lastName = 'Khan';
person.age = 25;
person.eyeColor = 'blue';


// // Object.create()

const human = {
    isHuman: false,
    myFunction:  function () { 
        console.log(`My name is ${me.name}. Am I Human? ${me.isHuman}`) 
    },   
}

const me = Object.create(human);


const OBjCreate = {
    MyName: 'Teemarh',
    calName: function() {
        console.log(`My name is ${this.MyName} and i am ${this.age} years old`);
    }
}

const calAge = Object.create(OBjCreate)


// // me.name = 'Fatimah'; // "name" is a property set on "me", but not on "human"
// // me.isHuman = true; // Inherited Properties can be overwritten
// // me.myFunction(); // Expected Output: "My name is Fatimah. Am I Human? true"

function black (first,second,third) {
    this.firstName = first;
    this.secondName = second;
    this.thirdName = third;
}
const Output = new black("Teemarh","Tina","Toni") 
console.log(`${Output.firstName} is a friend of ${Output.secondName} and ${Output.thirdName}`);

// creating an object
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    isSedan: true,
    previousCar: ['Mercedez Benz', 'Lexus','Corrolla','Cheverolet'],
    everSpoilt: {isSpoilt: true},
    start: function() {
    console.log('Engine Started!');
    }
    }
// console.log(car.start());
// console.log(car.year = 2023);
console.log(car.everSpoilt);

// constructor object
function terson (name,age) {
    this.name = name;
    this.age = age;
}
let John = new terson("Allan",25);
console.log(John.age);
console.log(`I am ${John.name} and I am ${John.age} years old`);

// object.create()
 let tersonPrototype = {
    greet: function() {
        console.log(`Hello!, ${this.name}`);
    }
 }
 let soon = Object.create(tersonPrototype);
 soon.name = 'Bong Soon';
 console.log(soon.greet());