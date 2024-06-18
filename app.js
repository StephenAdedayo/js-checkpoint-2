// // strings
// // function reverseString(str){
// //     return str.split('').reverse().join('')
// // }

// // console.log(reverseString("stephen"))



// // // 
// // function getNum(len){
// //     return len.length
// // }

// // console.log(getNum("stephen"));

// // // 
// // function capitalizeWords(sentence) {
// //     // Split the sentence into words
// //     let words = sentence.split(' ');

// //     // Capitalize the first letter of each word
// //     for (let i = 0; i < words.length; i++) {
// //         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// //     }

// //     // Join the words back into a sentence
// //     return words.join(' ');
// // }

// // console.log(capitalizeWords("my name is stephen"));

// // // Arrays

// // function findMax(arr) {
// //     // Check if the array is empty
// //     if (arr.length === 0) {
// //         return undefined; // Return undefined if array is empty
// //     }

// //     let max = arr[0]; // Initialize max with the first element of the array

// //     // Iterate through the array to find the maximum value
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] > max) {
// //             max = arr[i]; // Update max if current element is greater
// //         }
// //     }

// //     return max; // Return the maximum value found
// // }


// // function findMin(arr) {
// //     // Check if the array is empty
// //     if (arr.length === 0) {
// //         return undefined; // Return undefined if array is empty
// //     }

// //     let min = arr[0]; // Initialize min with the first element of the array

// //     // Iterate through the array to find the minimum value
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] < min) {
// //             min = arr[i]; // Update min if current element is smaller
// //         }
// //     }

// //     return min; // Return the minimum value found
// // }


// // let numbers = [3, 7, 2, 8, 1, 9, 4, 5];

// // console.log(findMax(numbers)); // Output: 9 (maximum value in the array)
// // console.log(findMin(numbers)); // Output: 1 (minimum value in the array)

// // let emptyArray = [];
// // console.log(findMax(emptyArray)); // Output: undefined (array is empty)
// // console.log(findMin(emptyArray)); // Output: undefined (array is empty)







// // // 
// //  function getSum(arr) {

// //     let sum = 0;
    
// //     for(let i=0; i < arr.length; i++){
// //         sum += arr[i]
// //     }
// //     return sum;
// //  }

// //  let total = [12, 34, 56] 

// //  console.log(getSum(total));

// // // 

// // function filterArray(arr, conditionFunc) {
// //     // Initialize an empty array to store filtered elements
// //     let filteredArray = [];

// //     // Iterate through the array and apply the condition function
// //     for (let i = 0; i < arr.length; i++) {
// //         if (conditionFunc(arr[i])) {
// //             filteredArray.push(arr[i]); // Add element to filteredArray if condition is true
// //         }
// //     }

// //     return filteredArray;
// // }

// // // Function to check if a number is even
// // function isEven(num) {
// //     return num % 2 === 0;
// // }

// // let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let evenNumbers = filterArray(number, isEven);
// // console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]





// // //  Math
// // function factorial(n) {
// //     if (n === 0 || n === 1){
// //         return 1;
// //     }

// //     return n * factorial(n - 1)
// // }

// // console.log(factorial(5));



// // function primeNumberCheck(num) {

// //     if (num <= 1){
// //         return false
// //     }

// //     for (let i = 2; i <= Math.sqrt(num); i++){
// //         if (num % i === 0){
// //             return false
// //         }
    

// //     }

// //     return true

// // }

// // console.log(primeNumberCheck(41))




// // function generateFibonacci(numTerms) {
    
// //     if (numTerms <= 0) {
// //         return [];
// //     }

// //     let fibonacciSequence = [0, 1];

// //     for (let i = 2; i < numTerms; i++) {
// //         let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
// //         fibonacciSequence.push(nextFibonacci);
// //     }

// //     return fibonacciSequence;
// // }


// // console.log(generateFibonacci(5))


// // function spliceArray() {
// //     let month = ["jan", "feb", "april"]
// //     month.splice(2, 1, "may")
// //     return console.log(month)
// // } 

// // spliceArray()


// // function endsWith(){
// //     let tm = "stephen is a good boy."
    
// //     return console.log(tm.endsWith("boy."))
// // }

// // endsWith()


// // function toLocalUppercas(){
// //     let count = "instabul"
// //     return console.log(`EN-US: my name is temmy and i am from ${count.toLocaleUpperCase()}`)
// // }

// // toLocalUppercas()


// // function checkIf(x){
// //    if (typeof x === "number"){
// //     return console.log("it is a number")
// //    } else{
// //     console.log("wrong input");
// //    }
// // }

// // checkIf("56")


// // function decodeColor(color){
// //     switch(color){
// //     case 1: 
// //       console.log("red");
// //       break;

// //       case 2: 
// //       console.log("yellow");
// //       break;

// //       case 3: 
// //       console.log("blue");
// //       break;

// //       case 4: 
// //       console.log("green");
// //       break;

// //       case 5: 
// //       console.log("indigo");
// //       break;

// //       default:
// //         console.log("no color");
// //     }
// // }

// // decodeColor(6)



// // let numbers = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// // let sum = 1;
// // let i = 0;
// // while ( i < numbers.length ){
// //     sum *= numbers[i]; 
// //     i++
// // }

// // console.log( 'The loop was executed ' + i + ' times' );

// // console.log(sum);


// // let no = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// // let summation = 0;
// // let i = 0;

// // do{
// //     summation += no[i]; 
// //     i++
// // }
// // while(i < no.length)

// //     console.log(summation);



// // let numbers = [12, 23, 45, 56, 67, 89]

// // let sum = 0

// // for(let i = 0; i < numbers.length; i++){
// //     sum += numbers[i]
// // }

// // console.log(sum);


// // let numbers = [12, 23, 45, 56, 67, 89]
 

// // let sum = 0

// // for (var i in numbers){
// //     sum += numbers[i]
// // }

// // console.log(sum);


// // let numbers = [12, 23, 45, 56, 67, 89]

// // let sum = 0;

// // for (let i of numbers){
// //     sum += i
// // }

// // console.log(sum);


// let numbers = [12, 23, 45, 56, 67, 89, 23, 45, 78]

// let sum = 0;

// for (let i of numbers){
//     sum += i

//     if(sum >= 100){
//         break;
//     }
// }

// console.log(sum);


// const taye = {
//     firstName : "stephen",
//     lastName : "Alu",
//     middleName : "Ayomitan",
//     job : "web developer",
//     Array : ["stephen", "playing football"],
//     drive : function() {
//         console.log(`my name is ${this.firstName}`)
//     } ,
//     test : function(speed, time){
//         console.log(`the distance travelled is ${(speed * time)}`);
//     }
// }

// console.log(taye.lastName);
// console.log(taye);
// taye.Array[1] = "watching movies"

// console.log(taye.Array);

// delete taye.Array

// console.log(taye);

// taye["Array"] = ["stephen", "playing football"]

// console.log(taye);

// taye.drive()

// taye.test(20, 60)


// function getSum(arr){
//     let sum = 0;

//     for(let i of arr)
//       sum += i
//     return sum
// }
// let total = [23, 55, 677]

// console.log(getSum(total));

// function checkEven(num){
//     if(num % 2 === 0){
//         return "it is even"
//     } else {
//         return "it is not"
//     }
// }

// console.log(checkEven(3));

// // function primeNumberCheck(num){
// //     if (num <= 1){
// //         return false
// //     }

// //     for (let i = 2; i <= Math.sqrt(num); i++)
// //         if (num % i === 0){
// //             return false
// //         }

// //         return true
// // }

// // console.log(primeNumberCheck(41));

// function getsrt(num){
//     let word = Math.PI * (num)
//     return word
// }

// console.log(getsrt(41));

// function doWhile(arr){
//     let sum = 0
//     let i = 0

//     do{
//         sum += arr[i]
//         i++
//     } while(i < arr.length)
//       return sum  
// } 


// let tota = [1, 2, 3, 4, 5]
// console.log(doWhile(tota));



// function factorial(n){
//     if (n === 0 || n === 1){
//         return 1;
//     }

//     return n * factorial(n-1)
// }

// console.log(factorial(5));

// function getPrimesNo(){
//     let prime = []
//     let num = 2

//     while(prime.length < 10){
//         let isPrime = true



//         for(let i = 2; i <= Math.sqrt(num); i++){
//             if(num % i === 0){
//                 isPrime = false
//                 break;
//             }
//         }

//         if(isPrime){
//             prime.push(num)
//         }

//         num++
//     }
//      return prime
// }

// console.log(getPrimesNo());




// // function getEven(){
// //     let even = []
// //     let num = 2


// //     while(even.length < 10){
// //         even.push(num)
// //         num +=2
// //     }

// //     return even
// // }

// // console.log(getEven());


// function getEven(){
//     let eve = []
    


// for(let i = 1; eve.length < 10; i++){
//     let evenno = i * 2
//     eve.push(evenno)
// }
// return eve

// }

// console.log(getEven());


// // function getOdd(){
// //     let odd = []
// //      let i = 1
// //     while(odd.length < 10 ){
// //       odd.push(i)
// //       i += 2
// //     }

// //     return odd
// // }

// // console.log(getOdd());


// function getOdd(){
//     let odd = []
    

//     for(let i = 1; odd.length < 10; i += 2)
//         odd.push(i)
        

//     return odd


    
// }

// console.log(getOdd());


// function getFilter(arr){



//     const word = arr.filter((arr) => arr.length < 4)
//     return word
// }

// const filt = ["stepehn", "alu"]
// console.log(getFilter(filt));


// function startsWith(){
//     const me = "i started with you"
//     const tru = me.startsWith("i")
//     return tru
// }

// console.log(startsWith()); 


// World of DOM

// document.getElementsByClassName("stephen")

// let steve = document.getElementsByClassName("stephen")

// let me = steve[0].getElementsByTagName("h3")

// me[0].innerHTML = "I am not concerned"


// document.getElementById("menu")

// menu.innerHTML = "don't click"

// let mov = document.getElementsByTagName("p")

// mov[0].textContent = "i am very very good"


// let link = document.getElementById("menu")

// link.getAttribute("href")

// link.setAttribute("href", "doug")



// link.setAttribute("style", "color:white; background-color:red; text-decoration:none; padding:10px 20px; border-radius:50px;")
// link.style.backgroundColor = "blue"

// let mar = document.createElement("li")

// let jan = document.createElement("a")

// let feb = document.getElementsByTagName("ul")[0]

// feb.appendChild(mar)

// mar.appendChild(jan)

// jan.innerHTML = "CONTACT"

// feb.insertBefore(mar, feb.getElementsByTagName("li")[0])

// let parent = document.getElementsByTagName("ul")[0]

// let child = document.getElementsByTagName("li")[1]

// let removed = parent.removeChild(child)

// parent.appendChild(removed)


// let mary = document.getElementsByTagName("a")[0]

// mary.onclick = () => {
//     alert("yes, what do you want")
// };


let contain = document.getElementById("content")
let button = document.getElementById("links")

button.onclick = function() {
    if(contain.className == "open"){
        // shrink
        contain.className = ""
        button.innerHTML = "show more"
    }else {
        // expand
    contain.className = "open"
    button.innerHTML = "show less"
}
}