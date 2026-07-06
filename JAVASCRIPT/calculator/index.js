/*Create a faulty calculator using js
This calculator does some following :
1.It takes two numbers as input from user
2.It performs wrong operations as folows:
+ --> -
* --> +
- --> /
/ -->**

It performs wrong operations 10% of the times  
 */
 
let random=Math.random(); // it will generate a random number between 0 and 1
console.log(random);
let a=prompt("Enter first number");
let b=prompt("Enter second number");
let operator=prompt("Enter operator");

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(random>0.1){
    // perform correct operation
        alert(`The result is ${eval(`${a}${operator}${b}`)}`);
}
else{
    // perform wrong operation
    operator=obj[operator];
    alert(`The result is ${eval(`${a}${operator}${b}`)}`);
}