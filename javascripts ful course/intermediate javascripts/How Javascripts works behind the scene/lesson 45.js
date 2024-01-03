"use strict";

function calAge(birthYear) {
  const age = 2023 - birthYear;


  function printAge () {
  
    let output = `${firstName}, You are ${age} and born in ${birthYear}`;
    console.log(output);
    var millenia = true
    

    if (age >= 20 && age <= 30) {
      // creating a variable with same name as outer's scope variable
      const firstName = 'Augustine';
      // assigning a new value to output variable
      output = 'New Output'
      const str = `${firstName}, oh, You are a millenia`;
      console.log(str);
    } else {
      console.log('you are born in the 10th century');
    }

    function add (a,b) {
      const addMe =  a + b;
      return addMe;
    }
   console.log(millenia);
    console.log(add(2 , 3));
 
    console.log(output);
    
  }
  printAge()

  return age;
}
const firstName = 'Schedtmann';
calAge(1999);

