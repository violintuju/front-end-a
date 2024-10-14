//Nama : Violin Tuju
//Exercise 4

let people = ["Greg", "Mary", "Devon", "James"];
//1.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2.
people.forEach(function(person) {
    console.log(person);

});
//3.
people.shift("Greg"); 
console.log(people); 

//4.
people.pop("James"); 
console.log(people); 

//5.
people.unshift("Matt");
console.log(people);  

//6.
people.push("Violin");
console.log(people); 

//7.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}
//8.
let newPeople = people.slice(2);
console.log(newPeople); 

//9.
people = ["Matt", "Mary", "Devon", "Violin"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); 

//10.
let withBob = people.concat("Bob");
console.log(withBob); 



let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


//1
programming.languages.push("Go");

//2
programming["difficulty"] = 7;

//3
delete programming.jokes;

//4
programming.isFun = true;

//5
let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
  });
  console.log(updatedLanguages); // Output: ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]