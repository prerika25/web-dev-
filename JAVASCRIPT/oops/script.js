// let obj={
//     a:1,
//     b:"harry"
// }
// console.log(obj)

// let animal={
//     eats:true 
// };
// let rabbit={
//     jumps:true 
// };
// rabbit._proto_=animal;

class Animal{
    constructor(name){
        this.name=name 
        console.log("Object is created....")
    }
    eats(){
        console.log("khaa rha hu")
    }
    jumps(){
        console.log("kood rha hu")
    }
}

class lion extends Animal{
    constructor(name){
        super()
        this.name=name 
        console.log("Object is created and he is a lion....")
    }
    eats(){
        console.log("khaa rha hu roar")
    }
}


let a=new Animal("Bunny");
console.log(a)
let l=new lion("Shera")
console.log(l)