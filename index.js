/* 1. MUTATING ARRAY METHOD: this method modifies the original array. Examples are;

a. Array.push(): this method adds one or more elements to the end of an array.
b. Array.pop(): this method removes the last element from an array.
c. Array.splice(): this method removes, replaces, or adds elements to an array at a specified index.
d. Array.reverse(): this method reverses the order of elements in an array.
e. Array.sort(): this methodsorts the elements of an array in place and returns the sorted array.

2. NON-MUTATING ARRAY METHOD: this method does not modify the original array.

a. Array.concat(): this method returns a new array that includes elements from the original array and other arrays or values.
b. Array.filter(): this method returns a new array containing elements that pass a test specified by a call back function.
c. Array.map(): this method returns a new array with the results of calling a provided function on every element in the original array.
d. Array.slice(): this method returns a new array that includes a portion of the original array, without modifying the original array.
e. Array.reduce(): this method applies a function against an accumulator and each element in the array to reduce it to a single value.  
 */

// 2. 

const array1 = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python'];
array1.push('Kotlin'); // ['C#', 'Javascript', 'Ruby', 'PHP', 'Python', 'Kotlin']
array1.push('Java'); // ['C#', 'Javascript', 'Ruby', 'PHP', 'Python', 'Kotlin', 'Java']
array1.shift([0]); // ['Javascript', 'Ruby', 'PHP', 'Python', 'Kotlin', 'Java']
array1.unshift('Scala', 'Swift'); //['Scala', 'Swift', 'Javascript', 'Ruby', 'PHP', 'Python', 'Kotlin', 'Java']
array1.splice(4, 1, 'Go', 'Rust'); //['Scala', 'Swift', 'Javascript', 'Ruby', 'Go', 'Rust', 'Python', 'Kotlin', 'Java']


// 3. 
let fruit = ['apple', 'mango', 'banana'];
function changeFruit (fruit){
    fruit[2] = "orange"
    return fruit;
}; //  ['apple', 'mango', 'orange',]


// 4. 
let num = [4, 5, 10, -2]
function createArray (num){
    return num.max();
};
console.log(createArray); //  



// 5. 
const valTimesIndex = function () {
    const arrayNum = [2, 4, 6, 8, 10];
    return arrayNum * arrayNum.indexOf()
};
console.log(valTimesIndex);
