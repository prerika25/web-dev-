console.log("i am nice");
console.log("i am good");
console.log("i am bad");
console.log("i am beautiful");

function nice(name){
    console.log("HEY " + name + ", you are nice");
    console.log("HEY " + name + ", you are good");
    console.log("HEY " + name + ", you are bad");
    console.log("HEY " + name + ", you are beautiful");
}

function sum(a,b,c=3){
    // console.log(a+b);
    return a+b+c;
}
// NaN=not a number
nice("prerika");
nice("rohnan");
result=sum(5, 10);

console.log("sum of 5 and 10 is " + result);

const funct1=(x)=>{
    console.log("I am an arrow function",x)
}
funct1(34);
funct1(45);
funct1(56);