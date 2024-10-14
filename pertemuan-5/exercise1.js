function calculateBmi(berat, tinggi){
let bmi = berat/ (tinggi * tinggi)
return bmi
}

let berat = 59
let tinggi = 1.7
let bmi = calculateBmi(berat, tinggi)
console.log("bmi ideal anda :" + bmi.toFixed(2))
