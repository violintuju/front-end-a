let people = ["Greg", "Mary", "Devon", "James"];

//1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//2
people.forEach(function(person) {
    console.log(person);

});

//3
people.shift("Greg"); 
console.log(people);

//4
people.pop("James"); // Removes the last element
console.log(people);

//5
people.unshift("Matt");

//6
people.push("Violin");

//7
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }

//8
let peopleCopy = people.slice();
peopleCopy = peopleCopy.filter(person => person !== "Mary" && person !== "Matt");

//9
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
people.unshift("Matt");
people.push("Violin");

//10
let withBob = people.concat(["Bob"]);

console.log(withBob); // Output: ["Matt", "Mary", "Elizabeth", "Artie", "Violin", "Bob"]