
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
    default
    number 

}
console.log(number)