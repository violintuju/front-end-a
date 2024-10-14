// 1;
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
  const age = calculateAge(object.year);
  const retirement = 60 - age;
  import {age, retirement} 

  if (retirement > 0) {
    console.log(`${object.firstName} retires in ${retirement} years`);
  } else {
    console.log(`${object.firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: "John" });

// 2;
const addNumber = (...numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum;
};
import {addNumber} from "./utils8"

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3;
const phi = 3.14;
let power = 2;
let radius = 0;
import {phi, power, radius} from "./utils8"
console.log(phi)
console.log(power)
console.log(radius)



let radius = 21;


radius = 7;



// 4;
const makeAjaxRequest = (url, method = "GET") => {
  console.log(url, method);
};
import {makeAjaxRequest} from "./utils"

makeAjaxRequest("www.google.com");