/* This is a MULTI-LINE comment in JS
Below is an example of a JS STATEMENT
(instruction/command)
Statements end with a SEMICOLON (;)
*/
console.log("welcome to JavaScript!!!");

// This is a SINGLE-LINE comment
// console.log is a FUNCTION to display information
console.log("this is the console/output")

// DECLARE a VARIABLE to hold data
// use the LET keyword to create the variable
let pokemon;

// ASSIGN a VALUE to that variable
// like packing an item into a box
pokemon = "Pikachu" ;

// Can DECLARE + ASSIGN in one statement
let name = "Caleb" ;

// DECLARE a new variable (buying a box)
let luckyNumber;

// ASSIGN a value to that variable
// (putting an item in a box)
luckyNumber = 13;

// DECLARE + ASSIGN in one statement
let worstNumber = 7;

// You can "PASS IN" a variable into a FUNCTION
console.log(luckyNumber);

// Can CHANGE the value stored in a variable
let mood = "Happy";
console.log(mood);
mood = "Sad";
console.log(mood);

// Can COPY the value from one variable into another
let isHappy = true;
let isThrilled;
isThrilled = isHappy;
console.log(isThrilled);

// MATH OPERATIONS
let score = 0;
score = score + 5;
console.log(score);
score = score - 10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);

// Can continue operators, evaluation follows PEMDAS
score = (score * 7 / 5) ** 2 - 10 + 5 ;
console.log(score);

// Working with STRINGS (words/setences/characters)
// QUOTES always go around String LITERALS
let greeting = "Hello " + "Friend";
// The PLUS SIGN merges (CONCATENATES) strings
console.log(greeting);

// Combine literal strings with VARIABLES
let username = "Caleb";
greeting = "Hello " + username;
console.log(greeting);

// Can CONCATENATE inside a function
console.log("Goodbye, " + username + "!");

// Converting to strings
console.log(4 + 5); // 9 (added numbers)
console.log("4" + 5); // 45
console.log(4 + '5'); // 45

// SPECIAL OPERATORS: Increment/Decrement
let counter = 0;
counter = counter + 1; // LONG WAY
counter++; // SHORTCUT
console.log("Count: " + counter);
counter--;
console.log("Count: " + counter);