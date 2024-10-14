// // Javascript Fuction
// // Cara 1. Function Declaration
// function greetings1() {
//     console.log("Hello World")
// }

// greetings1()  // call/ execute function

// //Cara 2. Function Expression
// let greetings2 = function (){
//     console.log("Hello world")
// }
// greetings2()

// //Parameter & Argumen (input). Return(output)
// //cara 1
// //                 parameter
// function greetings1(fullName){
//     return "Hello" + fullName
// }
// //                      Argument
// let output1 = greetings1("John doe")
// console.log(output1)

// //cara 2 error
// let output2 = greetings2("John Doe")
// console.log(output2)

// let greetings2 = function (fullName) {
//     return "Hello" + fullName
// }

//Global scope & local scope

let x = 10// global


function foo(){
    let y = 20 // local
    console.log(x) //10
    console.log(y) //20
    if(y > 10){
        let z = 30
        console.log(y)// 20
        console.log(z)// 30
    }
    //console.log(z)// error
}

console.log(y)// error
console.log(x)

foo()