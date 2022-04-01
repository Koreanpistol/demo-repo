// A variable is a container for storing data.
// A variable behaves as if it was the value that it contains.

// Two steps:
// 1. Declaration (var, let , const)
// 2. Assigment (=assigment operator)

// ****************************** VARIABLES ***************************************************************************************************************
let firstName = 'Andrius' // strings
let student = false; // boolean
let declarationAge = 26; // numbers

declarationAge = declarationAge + 3

console.log(`Hello my name is ${firstName}`);
console.log(`I am ${declarationAge} years old`);
console.log(`and its ${student} about me being a student`);

const responseBox = document.getElementById('responseBox')

responseBox.innerHTML = `Hello my name is ${firstName} , currently I am ${declarationAge} and its ${student} about me being a student`

// ****************************** ARITHMETIC EXPRESSION ****************************************************************************************************

// arithmetic expression is a combination of :

// operands (values , variables etc.)
// operators (+ - * / % )
// that can be evaluated to a value for example : y = x + 5;

let arithNumber = 45 ; // arithNumber += 10
console.log(`This is full value of varriable arithNumber ${arithNumber}`);
arithNumber = arithNumber - 23; // arithNumber -= 23;
console.log(`This is value after subtracting 23 out of 45 , which leads us to ${arithNumber}`);
arithNumber = arithNumber * 2; // arithNumber *= 2
console.log(`22 multiply by  2, equals ${arithNumber}`);
arithNumber = arithNumber / 4 ; // arithNumber /= 4
console.log(`44 divide by 4 , equals ${arithNumber}`);
arithNumber = arithNumber % 2 ; // % returns remainder of division , so in this situation its arithNumber is 11 dividing by 2 will leave 1 remainder, dividing by 3 will leave 2 remainder.
// % usually used to know if number is even or odd.
console.log(`Remaider of 11 % 2 will be ${arithNumber}`);


// Operator precedence 
// 1.Parenthesis () ;
// 2.Exponets ;
// 3.Multiplication & Division ;
// 4.adding or substracting ;

let testResult = (1 + 2 * (3 + 4) - 10 ) / 5 ;
console.log(`the result is ${testResult}`);

// ****************************** USER INPUT ********************************************************************************************************

const responsePrompt = document.getElementById('responsePrompt'); // responsive container
const userName = document.getElementById('userName'); 
const userAge = document.getElementById('userAge');
const userInput = document.getElementById('userInput'); // submit button

// Accepting user inputs : 
// EASY WAY ( thou its not very common and just basic way to get user input )


// let userName = window.prompt('Hey whats your name?');
// console.log(`your name is ${userName}`);
// responsePrompt.innerHTML = `Hey ${userName} how are you?`;

// MORE COMMON WAY (thou very basic as well)

userInput.addEventListener('click' , getUserDate);

function getUserDate () {
let name = userName.value ; 
let age = userAge.value  ;

// console.log(name);
// console.log(age);

responsePrompt.innerHTML = `Thank you ${name} for submiting ${age}`


}

// ****************************** TYPE CONVERSION ****************************************************************************************************

// TYPE CONVERSION  = change the datatype of a value to another ( strings , numbers , booleans );

let x;
let y;
let z;

x = Number("Andrius"); 
console.log(x , typeof x);
x = Number("3.45");
console.log(x , typeof x);
y = String(113+1224);
console.log(y , typeof y);
z = Boolean('');
console.log(z , typeof z);
z = Boolean('Something')
console.log(z , typeof z);


// ****************************** CONST ************************************************************************************************************************

// const = a variable that can't be changed.

const PI = 3.14159; // const can't be changed 
// PI = 420.1337 (if uncomment will be showing error, of declared constable)
// using cost is preferable if you know that value won't change.
let radius = 33;
let circumference;


circumference = 2 * PI * radius 
console.log(`circumference is : ${circumference}`)

// ***************************** MATH ********************************************************************************************************************

let numberMath = 3.14

numberMath = Math.round(numberMath); // returns the value of number rounded to nearest integer.
console.log(numberMath);
numberMath = Math.floor(numberMath); // returns the largest integer less than or equal to a given number.
console.log(numberMath); 
numberMath = Math.ceil(numberMath); // rounds a number up to the next largest integer.
console.log(numberMath); 
numberMath = Math.pow(numberMath , 4); // static method, given two arguments, base and exponent, returns base exponent.
console.log(numberMath); 
numberMath = Math.sqrt(numberMath); // returns the square root of a number
console.log(numberMath); 
numberMath = Math.abs(numberMath); // returns the absolute value of a number
console.log(numberMath);
let ten = 10;
let five = 5;
let three = -3;
let maximumMath = Math.max(ten,five,three); // out of all variables that been listen it will show the highest
console.log(maximumMath);
let minimumMath = Math.min(ten,five,three); // out of all variables that been listen it will show the lowest
console.log(minimumMath); 

numberMath = Math.PI; // represents the ratio of the circumference of a circle to its diameter, approximately 3.14159: Math.PI = π ≈ 3.14159.
console.log(numberMath)

// ***************************** HYPOTENUSE CALC PRACTICE PROGRAM ***************************************************************************************

let sideA;
let sideB;
let sideC;

mySubmitBtn = document.getElementById('mySubmitBtn');
triangleC = document.getElementById('triangleC');
aTextBox = document.getElementById('aTextBox');
bTextBox = document.getElementById('bTextBox');

mySubmitBtn.addEventListener('click' , hypoFunction);

function hypoFunction () {
sideA = Number(aTextBox.value);
sideB = Number(bTextBox.value);
sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

triangleC.innerHTML = `Side C: ${sideC}`
    
};

// ***************************** COUNTER PROGRAM ********************************************************************************************************************


countLabel = document.getElementById('countLabel');
decBtn = document.getElementById('decBtn'); 
resetBtn = document.getElementById('resetBtn');
increaseBtn = document.getElementById('increaseBtn');

let counterValue = 0;

decBtn.addEventListener('click' , decreaseFunction);
resetBtn.addEventListener('click', resetValueFunction);
increaseBtn.addEventListener('click', increaseFunction);

function decreaseFunction() {
    counterValue--;
    countLabel.innerHTML = `${counterValue}`;
};
function resetValueFunction() {
    counterValue = 0;
    countLabel.innerHTML = `${counterValue}`;
};
function increaseFunction() {
    counterValue++;
    countLabel.innerHTML = `${counterValue}`;
};


// ***************************** Math.random() ********************************************************************************************************************

randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', randomNumberFunction);

function randomNumberFunction(){
    counterValue = Math.floor(Math.random() * 99) + 1;
    countLabel.innerHTML = `${counterValue}`
}

// ***************************** Useful string methods ********************************************************************************************************************

// string properties and methods.

let stringProperty = "Hello World"
let phoneProperty = "123-456-789-010"

console.log(stringProperty.length);
console.log(stringProperty.charAt(0));
console.log(stringProperty.indexOf("i"));
console.log(stringProperty.lastIndexOf("i"));
console.log(stringProperty.toUpperCase());
console.log(stringProperty.toLowerCase());
console.log(stringProperty.trim());
console.log(phoneProperty.replaceAll("-",""))


// ***************************** Slice() ********************************************************************************************************************


let fullNameSlice = "Andrius Kudresovas"

let firstNameSlice;
let lastNameSlice;

firstNameSlice = fullNameSlice.slice(0 , fullNameSlice.indexOf(" "));
lastNameSlice = fullNameSlice.slice(fullNameSlice.indexOf(" ") + 1 );

console.log(firstNameSlice);
console.log(lastNameSlice);

// ***************************** Method Chaining ********************************************************************************************************************
 
// method chaning = calling one method after another in one continues line of code


let userNameChain = "andrius";

let letter = userNameChain.charAt(0).toUpperCase().trim();

console.log(letter);


// *****************************

