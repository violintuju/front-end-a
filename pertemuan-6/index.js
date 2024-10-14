// //IIFE (immediately invoked function expression) & Callback Function
// // 1. IIFE
// // a. no params, args & return value
// (function () {
//     console.log("Hello World")
// }) ();

// // b. with params. args & return value
// let output = (function (fullName) {
//     return "Hello" + fullName
// }) ("JOhn Doe");//parametert
// console.log(output);

// //2. callback function
// // a. no param, args & return value
// function sayHello(callback) {
//     callback()
// }

// sayHello(function(){
//     console.log("Hello world"); // callback function
// })

// //b. with params, args & return value
// //1
// function sayHello(callback) {
//     let result = callback("John Doe")
//     console.log(result)
// }

// sayHello(function(fullName){
//     return "Hello" + fullName;
// });
// //2
// function sayHello(callback) {
//     let result = callback("John Doe")
//     return result;
// }

// sayHello(function(fullName){
//     return "Hello" + fullName;
// });
// console.log(output)

// // pertemuan 7
// // array in javascript (array itu object)
// // deklarasi array
// // cara 1. array literal
// let numbers = [1,2,3,4,5];
// console.log(numbers)
// // cara 2 kata kunci new
// let numbers2 = new Array(6,7,8,9,10)
// console.log(numbers2)

// //tipe data yang bisa disimpan dalam array
// let numbers = [1,2,3,4,5]
// let students = ["john", "jane", "bob"]
// let john = ["john", 30, true, [80,90,100]]
// console.log(john)

// // array lengths
// console.log(numbers.length)
// console.log(students.length)
// console.log(john.length)

// // cara mengakses element/data tertentu dalam array
// //melalui index array, index selalu dimulai dari 0
// console.log(numbers[2])
// console.log(students[1])
// console.log(john[2])
// console.log(john[3][1])

// //mengkses element/data terstruktur dalam array
// let numbers2 = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers2[numbers2.length-1])//hasilnya 10 untuk mencari index terakhir
// console.log(numbers2[numbers2.length/2-1]) //hasilnya 6
// let index = countries.findIndex(function(item){
//     return item==="zimbabwe"
// }) 
// console.log(index)
// console.log(countries[284])

// // array method
// let array = [1,2,3,"hello",false,true]
// console.log(array)

// //1. toString()
// console.log(array.toString)
// //2. join() bisa tambah garis ato koma dll
// console.log(array.join())
// console.log(array.join(""))
// console.log(array.join(-))
// //3. pop itu hapus index terakhir
// //4. push
// //5. shift() menambah elemen di depan di (index0)
// //6. unshift() mengahapus elemen didepan
// //7. splice() menambah, menghapus, mengganti element di tengah
// array.splice(2,1)// menghapus index ke dua bru cmn 1 yg dihapus
// console.log(array)
// array.splice(1, 1, 1) //hapus index pertama yg dihapus, cmn satu yg dihapus, diganti dengan 1
// console
// array.splice(2,0,2,3)//tambah
// console.log(array)

// //8. concat() untuk menggabungkan semua dari buah sayur biji
// let buah = ["pisang", "apel", "jeruk"]
// let sayur = ["tomat", "bayam", "kacang polong"]
// let biji = ["kedelai", "kacang tanah"]
// let makanan = buah.concat(sayur, biji)
// console.log(makanan)

// //9 slice untuk pisah
// let sayuran = makanan.slice(3, 5) // mulai dari index tiga sampai 5
// console.log(sayuran)
// let bjian = makanan.slice(6)
// console.log(bijian)

//pertemuan 8 
// javascript object & conditional
//deklarasi object mempunyai properti dan nilai, menggunakan kurung kurawal
//deklarasi literal 
// let john = {
//     firstName: "John",
//     age: 30,
//     isMarried: true,
//     grade: [80, 90, 100],
//     sayGreetings: function(){
//         console.log("Hello my name is" + this.firstName)//ini adalah object
//     }
//     address:{
//         street: "Jl. Arnold Mononutu Airmadidi"
//         city: "MInahasa Utara"
//         province: "Sulawesi Utara"

//     }
// }
// console.log(john)

// //mengakses properti dalam object 
// // 1. dot notation
// console.log(john.firstName)//John
// console.log(john.age)//30
// // 
// john.age=31//ubah nilai 
// console.log(john)
// //tambah properti baru
// john.log =(john)
// console.log

// //2. bracket notation
// console.log(john["isMarried"])// 
// //tambah properti baru
// john["nationality"] = "Indonesia"
// console.log(john)

// //object method
// john.sayGreetings(john)
// //object inside object
// console.log(john.address.city)
// //delete property
// delete john.grade;
// console.log(john);

// Javascript conditional
//1. if else
// jika hari ini lebih dari atau sama dengan 37,
// tampilkan suhu hari ini anas
// jika tidak tampilkan suhu hari ini dingin
let temp = 30
if (temp >= 37) {
    console.log("suhu hari ini panas")
}else {
    console.log("suhu hari ini panas")
}

//if else if else atau nested
//jika nilai 100 - 80 tampilkan grade a
//jika nilai 70-79 tampilkan grade b
//jika nilai diatas 50 tampilkan grade c
//jika nilai dibawah 50 tampilkan grade d
let nilai = 100
if (nilai>=80 && grade <=100) {
    console.log("Grade A")
}else if (nilai>= 70 && grade<= 80){
    console.log("Grade B")
}else if (nilai>=50 && grade<70){
    console.log("Grade c")
}else {
    console.log("Grade D")
}

//3. switch and case
//jika angka 1 tampilkan january
//jika angka 2 tampilkan february
//:
//jika angka 12 tampilkan desember
let number = 1;
switch (number) {
    case 1 
    console.log("january")
    break
    case 2 
    console.log("february")
    break
    case 3
    console.log("maret")
    break
    case 4
    console.log("april")
    break
    case 5 
    console.log("january")
    break
    case 6 
    console.log("january")
    break
    case 7 
    console.log("january")
    break
    

}