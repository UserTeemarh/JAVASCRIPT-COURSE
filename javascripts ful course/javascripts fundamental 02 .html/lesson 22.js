// ' 

// simple challenge

// fatimah has 3 friends but her best friend is called Favour


const infor = {
    firstName: 'femi',
    lastName: 'stanley',
    myage: 2023 - 1998,
    population: 4,
    friends: ['kola', 'felix','stanley']
}

console.log(infor.firstName)
console.log(infor.friends[0])
console.log(infor.friends.length);

console.log(infor['firstName']);

const newme = 'Name';
const ages = 'age';
console.log(infor['my' + ages]);
console.log(infor['first' + newme] );
console.log(`${infor['firstName']} is my name`)
console.log(infor.population += 2);
console.log(infor['population '] -= 2);


// my name is kola and i am 24 years old, i have 3 friends but wale is my best friend.







// console.log(`${outInformation.firstName} has ${outInformation.numberOfFriends} friends but ${outInformation.friends[0]} is her best friends `);