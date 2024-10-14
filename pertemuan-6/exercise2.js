// ubah/modifikasi exercise1
// menggunakan
//1.IIFE
//2. callback function

//1. IIFE
let output = (function (berat, tinggi){
    return berat / (tinggi*tinggi)
}) (59, 1.7);

console.log("BMI anda ialah", output)

//2. CallBack
function sayHell(callBack){
   let result = callBack(59, 1.7)
   return result;
}

let bodymiI = sayHell(function (berat, tinggi){
   return berat/(tinggi*tinggi)
})

console.log("BMI anda ialah", bodymiI)