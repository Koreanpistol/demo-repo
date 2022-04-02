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

// userInput.addEventListener('click' , getUserDate);

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


// ***************************** IF statements ****************************************************************************************************

userInput.addEventListener('click' , getUserAge);

function getUserAge () {
    let name = String(userName.value) ; 
    let age = Number(userAge.value)  ;

    if (age >= 18 ) {
        console.log(`${name} you are an adult`);
    }
    else if (age >= 14)  {
        console.log(`${name} you are a teenager`);
    }
    else if (age >= 6)  {
        console.log(`${name} you are a child`);
    }
    else if(age >= 4) {
        console.log(`${name} you are a baby!`);
    }
    else if (age >= 2) {
        console.log(`${name} how do you manage to type at such young age?`)
    }
    else if (age >= 1) {
        console.log(`${name} you are a troll`);
    }
    else {
        console.log('You are not born yet')
    }

}


// ****************************** Checked Property ******************************************************************************************

const myCheckBoxBtn = document.getElementById('myCheckBoxBtn');
const paypalRadio = document.getElementById('paypalRadio');
const mastercardRadio = document.getElementById('mastercardRadio');
const visaRadio = document.getElementById('visaRadio');
const myCheckBox = document.getElementById('myCheckBox');

myCheckBoxBtn.addEventListener('click', checkedFunction);

function checkedFunction() {
    if(myCheckBox.checked) {
        if(paypalRadio.checked){
            console.log(`Your subscription will be payed via paypal option`);
        }
        else if(mastercardRadio.checked){
            console.log(`Your subscription will be payed via mastercard option`);
        }
        else if(visaRadio.checked){
            console.log(`Your subscription will be payed via visa credit card option`);
        }
        else {
            console.log(`Please select payment method before proceeding`);
        }
    }
    else {
        console.log(`You haven't checked subscription, Good day to you!`)
    }

}

// ****************************** Switches ************************************************************************************************************************

// switch = statement that examines a value , for a match against many case clauses.
//          Switch is more efficient that many "else if" statements;

let grade = 95;

switch(true) {
    case grade >= 90:
        console.log('You did awesome!');
        break;
    case grade >= 81:
        console.log('You passed!');
        break;
    case grade >= 80:
        console.log('You failed!');
        break;
}

// ****************************** AND OR conditions ******************************************************************************************

// && AND (BOTH conditions must be true);
// || OR (Either condition must be true);


let temperature = 15;
let sunny = true;

if (temperature > 0 && temperature < 30 && sunny){
    console.log('The weather is good');
}
else {
    console.log('The weather is bad');
}

////////////////////////////////////////////////////////////////////////////
if (temperature <= 0 || temperature >= 30) {
    console.log('Weather is bad!');
}
else {
    console.log('Weather is good!');
}

// ****************************** NOT logical operator ******************************************************************************************

// ! not logical operator , typically used to reserve a condition's boolean value 
// true -> false ///// false -> true ;

if (!(sunny)){
    console.log('its cloudy outside!');
}
else {
    console.log('its sunny outside!');
}

// ****************************** While Loops ******************************************************************************************

// while some condition is true , potentially infinite.

let whileName;

// while(whileName == '' || whileName == null ){
//     whileName = window.prompt('Enter you name')
// };
// console.log(`Hey ${whileName} how are you?`);

// ****************************** Do While loops ******************************************************************************************

// do while loop = do something , then check the condition , repeat if condition is true.

// do{
//     whileName = window.prompt('Enter you name')
//   }
// while(whileName == '' || whileName == null );
// console.log(`Hey ${whileName} how are you?`);

// ****************************** For Loops ******************************************************************************************

// for loop - repeat some code a certain amount of times.

for(let i = 1; i <= 5; i++){
    console.log(i);
}

// ****************************** Break and Continue statements ******************************************************************************************

// break = breaks out of loop entirely 
// continue = skip an iteration of a loop 

for(let i = 1; i <= 5; i++){
    if (i === 3){
        break; // stops loop after i == 3 ; 
    }
    console.log(i);
}

for(let i = 1; i <= 5; i++){
    if (i === 3){ 
        continue; // skips 3 and continues loop
    }
    console.log(i);
}

// ****************************** Nested loops ************************************************************************************************************************
const responseBoxy = document.getElementById('responseBoxy')
// nested loop = a loop inside of another loop.
let rows = 5;
let columns = 36; 
let symbol = "$"

for(let i = 0; i <= rows ; i++){ // how many nested loops will be (5)
    for(let j = 0; j <= columns; j++){ // how many elements on 1 row displayed from loop
        responseBoxy.innerHTML += symbol; // printed element
    }
    responseBoxy.innerHTML += "<br>" // adding breakline after each loop finish
}

// ****************************** Ternary Operator ******************************************************************************************

// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

// 1. a condition with ? ;
// 2. expression if True ;
// 3. expression if False ;

// condition ? expressionIfTrue : expressionIfFalse

checkWinner(false);
checkWinner(true);

function checkWinner(win){
    win ? console.log('You Win!') : console.log('You Lose!');
}

// ****************************** toLocaleString() ******************************************************************************************

// toLocaleString() = returns a string with a language sensitive representation of this number;

// number.toLocaleString(locale , {options});
//
// 'locale' = specify that language (undefined = default set in browser);
// 'options' = object with formatting options;

let myNumberBe = 100;

console.log(myNumberBe.toLocaleString("en-US", {style: "currency" , currency:"USD", minimumFractionDigits: 1, maximumFractionDigits: 1}));
console.log(myNumberBe.toLocaleString("hi-IN", {style: "currency" , currency:"EUR", minimumFractionDigits: 2, maximumFractionDigits: 2}));
console.log(myNumberBe.toLocaleString("de-DE", {style: "currency" , currency:"INR", minimumFractionDigits: 3, maximumFractionDigits: 3}));
console.log(myNumberBe.toLocaleString(undefined, {style: "percent"}));
console.log(myNumberBe.toLocaleString("de-DE", {style: "unit" , unit:"celsius"}));
console.log(myNumberBe.toLocaleString("de-DE", {style: "unit" , unit:"kilobyte"}));

// https://v8.dev/features/intl-numberformat a bit more source about options.






