console.log("Hello World"); 

var a=5;
var b=6;
var c="prerika"; 
var _a="shubham";
console.log(a+b);  
console.log(typeof a, typeof b, typeof c); 

const a1=6;
//a1=a1+1;  // This will throw an error because a1 is a constant and cannot be reassigned

let  a2=6;
a2=a2+1;  // This is valid because a2 is declared with let and can be reassigned    
{
    let a2=8;
    console.log(a2);  // This will log 8 because this a2 is in a different block scope
}
console.log(a2);  // This will log 7 because this a2 is in the outer scope

let x="prerika bhai";
let y=22;
let z=3.55;
const p=true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);
let o={
    "name":"prerika",
    "job code":"55",
    "is_handsome":true,
}
console.log(o);
o.salary="100crore";
console.log(o);
o.salary="500crore";
console.log(o);