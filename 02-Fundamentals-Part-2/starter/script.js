// "use strict";

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) {
// //   hasDriversLicense = true;
// // }
// // if (hasDriversLicense) {
// //   console.log("I can drive :D");
// // }

// // const interface='Audio';

// // function logger() {
// //   console.log("Do you know who am i?");
// // }

// // //calling/running/invoking function
// // logger();
// // logger();
// // logger();

// // function fruit(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// // const appleJuice = fruit(5, 0);
// // console.log(appleJuice);

// //함수 선언은 정의 전에 실행 가능!!
// function calcAge1(birthYear) {
//   // const age=2037-birthYear;
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);
// //function expression 은 불가능
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2);

// //Arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUntilRetirement(1991));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruit(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   //   console.log(apples, oranges, applePieces, orangePieces);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruit(2, 3));

// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0], friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// const firstName = "Jonas";
// const jonas = [firstName, "lastName", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// const friends = ["Michael", "Steven", "Peter"];

// friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// friends.pop(); //remove last element
// friends.pop(); //remove last element

// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); //없어서 -1 반환

// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("Hello there");
// console.log(jonas[interestedIn]); //괄호 표기법 이랑 점표기법이랑 구분하기.

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request");
// }
// jonas.location = "Portugal";
// jonas["twitter"] = "@Hellothere";
// console.log(jonas);
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   clacAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.clacAge(1991));
// console.log(jonas["clacAge"](19911));
// const jonas = {
//   getSummary: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   clacAge: function () {
//     return `${this.firstName} is a ${this.clacAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.}`;
//   },
// };

// console.log("Lifting weights repetition 1 🏆");
// console.log("Lifting weights repetition 2 🏆");
// console.log("Lifting weights repetition 3 🏆");
// console.log("Lifting weights repetition 4 🏆");
// console.log("Lifting weights repetition 5 🏆");
// console.log("Lifting weights repetition 6 🏆");
// console.log("Lifting weights repetition 7 🏆");
// console.log("Lifting weights repetition 8 🏆");
// console.log("Lifting weights repetition 9 🏆");
// console.log("Lifting weights repetition 10 🏆");

// for (let i = 1; i <= 10; i++) {
//   console.log("Lifting weights repetition " + i + "🏆");
// }

// const jonasArray = [
//   "Jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   // types[i] = typeof jonasArray[i];
//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// //continue and break

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// const jonasArray = [
//   "Jonas",
//   "schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`---------------starting exercise ${exercise}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("Lifting weights repetition " + i + "🏆");
// }
// let rep = 1;

// while (rep <= 10) {
//   console.log("Lifting weights repetition " + rep + "🏆");
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }
