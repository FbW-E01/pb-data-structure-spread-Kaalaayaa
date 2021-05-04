// # Spread the Word

// #### 1. Combining Arrays 
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array. 
// * Once again create two arrays. Save all elements of both arrays to another variable. 
const euroCountries = ["Germany", "France", "Spain", "Croatia"];
const asianCountries = ["Thailand", "Cambodia", "Vietnam", "Laos"];

euroCountries.push(...asianCountries);
console.log(euroCountries);

const firstArray = ["Banana", "Mango", "Apple"];
const secondArray = ["Strawberry", "Raspberry", "Grapes"];

const CombinedArray = [...firstArray, ...secondArray];
console.log(CombinedArray);


// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable. 
const copiedArray = [...asianCountries];
console.log(copiedArray);

// #### 3. Find the Largest... 
// Create a function to find the largest number in an array.
const someNumber = [12, 45, 78, 47, 21, 67, 87];
function largestNumber(x){
    console.log(Math.max(...x));
}
largestNumber(someNumber);

// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
function smallestNumber(x){
    console.log(Math.min(...x));
}
smallestNumber(someNumber);
// #### 5. Clone and Merge
// Given two objects:
// ```javascript
const person = {name: "John"}
const job = {role: "Teacher"}
// ```
// * 5.1 Clone the person object.
const clonedPerson = {...person};
console.log(clonedPerson);

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
const employee = {...person, ...job};
console.log(employee);

// * 5.3 Then change the values of the properties in the employee object.
employee.name = "Kalaya"
employee.role = "Student";
console.log(employee);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

function wholeNumber(a, b, c, d){
    const average = ((a + b + c + d) / 4);

    if((average - Math.floor(average)) == 0){
        console.log(true)
    } else{
        console.log(false)
    }
}
wholeNumber(1, 2, 3, 4);
wholeNumber(9, 2, 2, 5);

const test = [2, 2, 2, 2];

wholeNumber(test);

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!