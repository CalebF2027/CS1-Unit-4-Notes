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

/* FUNCTIONS:
Reusable sets of code statements
that perform a specific task or process
*/

// Example of CALLING (using) a function
console.log("hello");

// Example of DECLARING (creating) a function
function cook() {
    // 3-statements (steps/instructions)
    console.log("1. Go to the kitchen");
    console.log("2. Get the ingredients");
    console.log("3. Cook the food");
}
// To CALL (run) our function, say its name
cook();
cook(); // repeated the cooking again!

/* Functions are like RECIPES:
    Reliably perform the same set of actions
    for a consistent result.
    PARAMETERS (input) are like ingredients/input
    RETURN values (output) - the completed meal
*/

// Sandwich-making example of a function
// that required PARAMETERS and RETURNS data
// (takes input, provides output)
function makeSandwich(bread, filling, sauce, cheese) {
    // function BODY (procedure/recipe steps)
    let sandwich = filling + " sandwich with " + bread + " on " + cheese;
    return sandwich;
}
// Call a function that RETURNS data
// store the output in a variable!
let burger = makeSandwich("bun", "patty", "ketchup", "cheese");
console.log(burger);

// TRY the function wit different ARGUMENTS (input data)
let cheese = makeSandwich("bread", "cheese", "butter");
console.log(cheese);

// *** Selection (CONDITIONALS) ***
// A conditional expression is like a QUESTION
// where a boolean (true/false) is the ANSWER

// Conditions that include COMPARISON OPERATORS
// get EVALUATED and result in true/false
console.log( 2 > 1 ); // true
console.log( 2 == 1 ); // == means are they equal?
console.log( 2 != 1 ); // != means NOT equal
console.log( (1+2) == (2+2) );
console.log( 2 >= 3 );

// ASSIGN a comparison result to a variable
let result = (5 > 4);
console.log(result);

// Comparing STRINGS (text) uses dictionary order
// TRUE if letter is later in order
console.log('Z' > 'A');
console.log('Caleb' == 'Himself')

// IF STATEMENTS evaluate a condition
// then execute a block of code if true
let age = 17;
// "is your age equal to 16?"
if (age == 16) {
    console.log("Happy sweet sixteen!");
}
else {
    console.log("You can't have a sweet sixteen party");
}

// To test MULTIPLE conditions, use ELSE-IF statements
if (age == 18) {
    console.log("Congrats on your first time voting!");
}
else if (age > 18) {
    console.log("Go vote!!!")
}
else {
    console.log("You're too young to vote...");
}