// 4) Create a function that accepts a single array where the elements can 
// be strings OR numbers OR booleans. Loop over the array, and if the element is a string, 
// print the string plus the text "is a string". If it's a number, 
// print out the number plus "is a number". 
// If it's a boolean, print out the boolean plus "is a boolean".

function findElementType(array: (string | number | boolean)[]) {
    array.forEach(element => {
        if (typeof element === "string") {
            console.log(element + " is a string");
        } else if (typeof element == "number") {
            console.log(element + " is a number");
        } else if (typeof element === "boolean") {
            console.log(element + " is a boolean");
        }
    });

}

const myArray2 = ["hello", 42, false, "42", true];

findElementType(myArray2);