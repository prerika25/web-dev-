let a = prompt("enter first number")
let b = prompt("enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

// try {
//     console.log("the sum is",sum*x)
// } catch (error) {
//     console.log("error")
// }
// finally{
//     console.log("files are closed and db connection is being closed")
// }
function main() {
    try {
        console.log("the sum is", sum * x)
        return true
    } catch (error) {
        console.log("error")
        return false
    }
    finally {
        console.log("files are closed and db connection is being closed")
    }
}