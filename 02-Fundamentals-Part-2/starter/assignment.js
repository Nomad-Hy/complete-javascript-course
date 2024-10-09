function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}.`;
}

const first = describeCountry("Korea", "40 million", "Seoul");
console.log(first);
