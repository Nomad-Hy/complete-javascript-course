const country = "South Korea";
const continent = "Asia";
let population = 40000000;

console.log(country);
console.log(continent);
console.log(population);
console.log(language);
console.log(isIsland);

const isIsland = false;
let language;

language = "Korean";

let halfPopulation = population / 2;
halfPopulation++;
console.log(halfPopulation);

const isMoreThanFinland = population > 6000000;
console.log(isMoreThanFinland);

const isMoreThanAvg = population < 33000000;
console.log(isMoreThanAvg);

const description = `$(country) +
  "is in" +
  $(continent) +
  ", and its" +
  $(population) +
  "people speak" +
  $(language);`;

console.log(description);

const numNeighbor = prompt(
  "How many neighbor countries does your country have?"
);
if (numNeighbor == 1) {
  console.log("Only 1 border!");
} else if (numNeighbor > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}

switch (language) {
  case "chinese":

  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
