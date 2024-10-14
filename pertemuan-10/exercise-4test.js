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
people.shift("Greg"); // Removes the first element
console.log(people); // ["Mary", "Devon", "James"]

//4.
people.pop("James"); // Removes the last element
console.log(people); // ["Mary", "Devon"]

//5.
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

//6.
people.push("Winni");
console.log(people); // ["Matt", "Mary", "Devon", "Winni"]

//7.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}
//8.
let newPeople = people.slice(2);
console.log(newPeople); // ["Devon", "Winni"]

//9.
people = ["Matt", "Mary", "Devon", "Winni"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // ["Matt", "Mary", "Elizabeth", "Artie", "Winni"]

//10.
let withBob = people.concat("Bob");
console.log(withBob); // ["Matt", "Mary", "Elizabeth", "Artie", "Winni", "Bob"]



let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1.
programming.languages.push("Go");
console.log(programming.languages); 

//2.
programming["difficulty"] = 7;
console.log(programming.difficulty); 

//3.
delete programming.jokes;
console.log(programming); 

//4.
programming.isFun = true;
console.log(programming); 

//5.
let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
});
console.log(updatedLanguages); // ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]