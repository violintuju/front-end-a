// //rest parameter & spread operator
// // 1. rest parameter = membantu memilki fungsi yang memiliki banyak parameter
 
// //tanpa rest parameter
// const funct1 = (param1, param2, param3)=> {
//     console.log(param1, param2, param3)
// }

// funct1("A", "B", "C", "D", "E")

// // dengan res parameter
// const funct2 = (...params) =>{
//     console.log(params)
// }
// funct2 ("A", "B", "C", "D","E")

// //rest parameter harus berada di terakhir dalam parameter 
// const funct3 =  (param1, param2, ...params) => {
//     console.log(param1, param2)
//     console.log(params)
// }
// funct3 ("A", "B", "C", "D","E")


// //mini exercise
// const penjumlahan = (...arr) => {
    
//     let hasil1 = 0
//     arr.forEach((item) = > (hasil ++ item))
//     return hasil
// }
// console.log(penjumlahan(1, 2,3, 4, 5))

// //spread operator
// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// console.log(...numbers)

// // array
// // 1 duplikasi array
// let number2 = [...numbers]
// numbers.push(6)
// console.log(number2)

// // 2 menghubungkan array
// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// let array3 = [7, 8, 9]

// let numbers3 = array1.concat(array2, array3)
// let numbers4 = [...array1, ...array2, ...array1.array3]

// // object
// // 1 duplikasi object
// const john = {
//     fullName: "John Doe"
//     age: 30
// }

// const john2 = { ...john1, address: "Manado"}

// // 2 menghubungkan object
// let obj1 = { a: 1, b: 2}
// let obj2 = { c: 3, d: 4}

// let combinedObj = { ...obj1, ...obj2 }