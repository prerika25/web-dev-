                    
import fs from "fs/promises"
let a=await readFile("prerika2.txt")
let b= await fs.writeFile("prerika2.txt","\n\n\n\n\n\n\nthis is amazing promise")

console.log(a.toString())