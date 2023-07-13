//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenNums(arr) {
    let evens = [];;
    for(let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            return i;
        }
    }
}

console.log(evenNums([4, 5, 6, 7, 8]))

function evens(nums) {
    let evens = [];

    nums.forEach(num => {
        if(num % 2 == 0) {
            evens.push(num)
        }
    })
      return evens;  
}
console.log(evens([1, 2,3, 4,5 ,6]))