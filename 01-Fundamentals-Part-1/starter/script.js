// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// console.log("Jonas"); //value
// console.log(23);

// let firstName = "Yoon";

// console.log(firstName);

// let myGoalJob = "Developer";
// let myCurrentJob = "Student";

// console.log(myGoalJob);
// console.log(myCurrentJob);

// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Yoon");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2024;
// console.log(typeof year);

// console.log(typeof null);

//

const now = 2024;
const ageYoon = now - 2001;

console.log(ageYoon);
console.log(ageYoon * 2, ageYoon / 10, 2 ** 3);

const firstName = "Ho Yoon";
const lastName = "Choi";
console.log(firstName + " " + lastName);

//Assignment Operator
// let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

//Comparison Operator
console.log(x > 30); //< > <= >=
console.log(ageYoon >= 18);

const isFullAge = ageYoon >= 20; //boolean
console.log(now - 2001 > now - 2018);

console.log(25 - 10 - 5); //left to right

let x, y;
x = y = 25 - 10 - 5; //x=y=10 Assignment: right to left
console.log(x, y);

const averageAge = (ageYoon + x) / 2; //괄호는 가장 우선순위가 높다.
console.log(averageAge);
