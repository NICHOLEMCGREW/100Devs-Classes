// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let nums = [10, 20, 30, 40, 50];

nums[0];
nums[ nums.length -1 ]

function checkFirstAndLast(arr) {
    if (arr[0] < arr[arr.length -1]) {
        console.log('hi')
    } else if (arr[0] > arr[arr.length -1]) {
        console.log('Bye')
    } else {
        console.log('We close in an hour')
    }
}
checkFirstAndLast([30, 40 , 309, 20])