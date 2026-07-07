let arr=[1,2,4,5,7];
// Index 0,1,2,3,4

console.log(arr);
// console.log(arr.length,typeof arr); // array is 'object'
arr[0]=5666;
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);
console.log(arr.toString());
console.log(arr.join(" and ")); // join method is used to join the array elements with a specified separator
arr.pop(); // pop method is used to remove the last element from the array
console.log(arr);
arr.push(100); // push method is used to add an element to the end of the array
arr.push("Prerika"); // push method is used to add an element to the end of the array
console.log(arr);
arr.shift(); // shift method is used to remove the first element from the array
console.log(arr);
arr.unshift("Prerika"); // unshift method is used to add an element to the beginning of the array
console.log(arr);
delete arr[1]; // delete method is used to remove an element from the array
console.log(arr);
console.log(arr.length); // length property is used to get the number of elements in the array

let a=[1,2,3];
let b=[4,5,6];
let c=[9,2,3];
let d=a.concat(b,c); // concat method is used to merge two or more arrays
console.log(d);
c.sort(); // sort method is used to sort the elements of the array
console.log(c);
let numbers=[1,2,3,4,5];
numbers.splice(1,2,222,333); // splice method is used to remove elements from the array
console.log(numbers);
let sliced=numbers.slice(1,3); // slice method is used to extract a section of the array
console.log(sliced);
console.log(numbers);
