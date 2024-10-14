//Asynchronous JS

//Synchcronous berjalan single thread yaitu satu proses -> blocking
// console.log("Proses1")
// console.log("Proses2")
// console.log("Proses3")
// console.log("Proses4")

//Asynchronous -> multi thread -> non blocking
//1. paralel
// setTimeout(()=>{
//     console.log("Proses 1")
// }, 3000);
// console.log ("Proses 2") //->buat thread sendiri
// setTimeout(() => {
//     console.log("Proses 3")
// })
// console.log("Proses 4")
 
// //2. concurent 
// setTimeout(()=> {
//     console.log("proses 1")          //disebut callback hell
//     setTimeout(() => {
//         console.log("proses 2")
//         setTimeout (() => {
//             console.log("proses 3")
//             setTimeout(()=> {
//                 console.log("proses 4")
//             }, 3000)
//         }, 3000)
//     }, 3000)
// }, 3000)

//promise ini kelas jdi harus buat object
// const newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve ("berhasi'")
//     } else {
//         reject("gagal")
//     }
// })

//cara pakai promise
//1 then -  catch then method yg jalankan ada resolve
// newPromise  
//     .then((result) => result)
//     .then((result) => console.log(result2))
//     .catch((error) => console.log(error))

//2 Async - Await
//harus dibuat dalam fungsi
// const consumePromise = async () => {
//     try(
//         let result = await newPromise
//         console.log(result)
//     ) catch (error){
//         console.log(error)
//     }  
// } 
// consumePromise()
//1 fetch
//fetch api search di google buat calling api
// pakai promise yang sudah ada
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))

//ubah ke asyn
(async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let json = await response.json()
    json.array.forEach(({ name }) => console.log(name))
})()

//2. axios boleh jalalankan di browser dan di terminal
axios
    .get("")
    .then((result)=> consolelog(result.data))

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach(({name}) => console.log(name))
})()