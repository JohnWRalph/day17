// 3) Create a function that takes a 
// string as an argument, and returns a 
// promise to return "hello" plus that string, as a string..

function sayHelloToString(x: string): string {
    return "hello " + x;
}

const seven = 7;

console.log(sayHelloToString("Yahoooo")); // expecting "hello Yahooo"
console.log(seven); // expecting 7 as a number

// expecting "hello 7" where 7, a number, is printed as string
// typescript error on seven is intentional for excercise purposes
// console.log(sayHelloToString(seven)); 

