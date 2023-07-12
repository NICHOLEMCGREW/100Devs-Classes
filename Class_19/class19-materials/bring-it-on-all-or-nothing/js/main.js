// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let bool = true;
// alert(bool);

// Declare a variable, reassign it to your favorite color, and console log the value

let color = 'blue'
color = 'light purple'
console.log(color)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNumsDividedByFourth(a, b, c, d) {
    let result = (a + b + c) / d;
    return result;
}
console.log(fourNumsDividedByFourth(3, 4, 6, 2))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function twoNums(a , b) {
    console.log( Math.pow(a, b) )
}
twoNums(2, 3)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function boolAndString(bool, str) {
    if (bool) {
        alert(str)
    } else {
        console.log(str)
    }
    // b ? alert(str) : console.log(str)
}
// const alertOrLog = (b, str) => b ? alert(str) : console.log(str)

boolAndString(false, 'hi')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++)
    if (i % 15 == 0) {
        console.log('fizzbuzz');
    } else if (i % 3 == 0) {
        console.log('fizz');
    } else if (i % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(i)
    }
}
fizzBuzz(15)