// Problem: Write a function which loops through an array and checks if n of the elements

// of the array satisfy the condition function that is passed
// Signature of the 'some' function
// (array, n, conditionFunction) -> trueOrFalse
// array - Input array
// n - The function should check if n elements of the conditionFunction satisfy
// Signature of the 'isEven' and 'isPrime' functions. They should take one integer as input and return a true or false value.
// (int) -> trueOrFalse

// Write the some function and isEven and isPrime functions

// Example: (When you run the following code, don't change anything)
// console.log(some([2,4,6], 3, isEven)) // should print true
// console.log(some([2,3,4], 3, isEven)) // should print false
// console.log(some([2,3,11], 4, isPrime)) // should print false
// console.log(some([2,3,5,9], 3, isPrime)) // should print true



function isEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] %2 ===0){
            count++;
        }
    }
    return count;
}

function isPrime(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let i = 2; i <= Math.sqrt(arr[i]); i++) {
            if (arr[i]) {
                count ++;
            }
        }
    }
    return count;
}


function some(arr, n, conditionFunction) {
  let count = conditionFunction(arr);
  return n<=count;
}

console.log(some([2, 4, 6], 3, isEven));
console.log(some([2, 6, 4], 3, isEven));
console.log(some([2, 3, 11], 4, isPrime));
console.log(some([2, 3, 5, 9], 3, isPrime));
