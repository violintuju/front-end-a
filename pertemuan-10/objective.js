let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming["difficulty"] = 7;

delete programming.jokes;

programming.isFun = true;

let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
  });
  console.log(updatedLanguages); // Output: ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]