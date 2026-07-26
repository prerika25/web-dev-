const fs=require("fs")
// console.log(fs)
console.log("starting")
// fs.writeFileSync("prerika.txt","Prerika is a good girl")

fs.writeFile("prerika2.txt","Prerika is a good girl",()=>{
    console.log("done")
    fs.readFile("prerika2.txt",(error,data)=>{
        console.log(error,data.toString())
    })
})
fs.appendFile("prerika2.txt","prerikarobo",(e,d)=>{
    console.log(d)
})
console.log("ending")