// strings
function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString("stephen"))



// 
function getNum(len){
    return len.length
}

console.log(getNum("stephen"));

// 
function capitalizeWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a sentence
    return words.join(' ');
}

console.log(capitalizeWords("my name is stephen"));

// Arrays

function findMax(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined if array is empty
    }

    let max = arr[0]; // Initialize max with the first element of the array

    // Iterate through the array to find the maximum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max; // Return the maximum value found
}


function findMin(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined if array is empty
    }

    let min = arr[0]; // Initialize min with the first element of the array

    // Iterate through the array to find the minimum value
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller
        }
    }

    return min; // Return the minimum value found
}


let numbers = [3, 7, 2, 8, 1, 9, 4, 5];

console.log(findMax(numbers)); // Output: 9 (maximum value in the array)
console.log(findMin(numbers)); // Output: 1 (minimum value in the array)

let emptyArray = [];
console.log(findMax(emptyArray)); // Output: undefined (array is empty)
console.log(findMin(emptyArray)); // Output: undefined (array is empty)







// 
 function getSum(arr) {

    let sum = 0;
    
    for(let i=0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
 }

 let total = [12, 34, 56] 

 console.log(getSum(total));

// 

function filterArray(arr, conditionFunc) {
    // Initialize an empty array to store filtered elements
    let filteredArray = [];

    // Iterate through the array and apply the condition function
    for (let i = 0; i < arr.length; i++) {
        if (conditionFunc(arr[i])) {
            filteredArray.push(arr[i]); // Add element to filteredArray if condition is true
        }
    }

    return filteredArray;
}

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = filterArray(number, isEven);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]





//  Math
function factorial(n) {
    if (n === 0 || n === 1){
        return 1;
    }

    return n * factorial(n - 1)
}

console.log(factorial(5));



function primeNumberCheck(num) {

    if (num <= 1){
        return false
    }

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false
        }
    

    }

    return true

}

console.log(primeNumberCheck(41))




function generateFibonacci(numTerms) {
    
    if (numTerms <= 0) {
        return [];
    }

    let fibonacciSequence = [0, 1];

    for (let i = 2; i < numTerms; i++) {
        let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence;
}


console.log(generateFibonacci(5))