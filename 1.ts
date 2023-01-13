// 1) Create a function that accepts an array of strings,
// and prints out each one in a loop.

function printsArray(array: string[]) {
    array.forEach((x) => console.log(x));
}

const myArray: string[] = ["wen POAP", "wen faucet","wen moon","can devs do something","devs abandoned the project"];

printsArray(myArray)