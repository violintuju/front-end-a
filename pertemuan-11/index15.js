// //module

// let fullName = "John Doe"
// import { fullName, numbers, sayGreetings} from "./utils"

// console.log(fullName)
// console.log(numbers)
// console.log(sayGreetings())

//module

let fullName = "John Doe"
import { fullName as nama, angka, sayGreetings} from "./utils" //export biasa
import sayGreetings from "./utils" //export default
import ucapkansalam from "./utils" //export default tanpa menggunakan alias
import ucapkansalam from "./sayGreetings.js"

console.log(nama)
console.log(angka)
console.log(ucapkansalam())