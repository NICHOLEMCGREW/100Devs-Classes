// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = 'salmon'
favFood = 'blueberry'
console.log(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = 'beautiful' 
console.log(str[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeNums(a, b, c) {
    let prod = (a / b) * c;
    return prod;
}
console.log(threeNums(3, 6, 6))

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(num) {
    return Math.cbrt(num).toFixed(4);
}
console.log(oneNum(64))

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerYay(month) {
    let monthLowerCase = month.toLowerCase()
    if (monthLowerCase == 'june' || monthLowerCase == 'july' || monthLowerCase == 'august') {
        return 'YAY';
    } else {
        return 'Booo'
    }
}
console.log(summerYay('july'))

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 5 !== 0) {
            console.log(i)
        }
    }
}

console.log(skipFive(20))