console.log("strings");
let a="Prerika";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a.length);

let name="Prerika";
let friend="Riya";
console.log("my name is "+name+" and her name is "+friend);
console.log(`my name is ${name} and her name is ${friend}`);

console.log("preri\"ka"); // to add double quotes in string we use \ before double quotes
// to add single quotes in string we use \ before single quotes

let b="Shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,4));  // it will print from index 0 to index 3
console.log(b.slice(1));  // it will print from index 1 to end
console.log(b.replace("Shivam","Riya"));
console.log(b.concat(a,"Aishhwarya"));

let newname=name.trim(); // it will remove the white spaces from start and end of string
console.log(newname);
// strings are immutable in javascript means we cannot change the string once it is created but we can create a new string by using the existing string.  
console.log(b.startsWith("Sh")); // it will return true if the string starts with the given string
console.log(b.endsWith("am")); 