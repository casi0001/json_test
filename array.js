const liste = document.querySelector("#playliste");

const mitArray = ["two of us", "Dig a pony", "Across the Universe", "I mr mine", "let it be"];

console.log(mitArray);

const nytArray = mitArray.map((sang) => `<li>${sang}</li>`);

console.log(nytArray);

const string = nytArray.join("");

console.log(string);

document.querySelector("ul").innerHTML = string;
