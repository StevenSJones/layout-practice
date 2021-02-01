//Conditional Statements: If-Else
// function getGrade(score) {
//     let grade;
//     // Write your code here
//     if (score <= 30 && score > 25) {
//         let grade = "A";
//         return grade;
//     } else if (score <= 25 && score > 20) {
//         let grade = "B"
//         return grade;
//     } else if (score <= 20 && score > 15) {
//         let grade = "C"
//         return grade;
//     } else if (score <= 15 && score > 10) {
//         let grade = "D"
//         return grade;
//     } else if (score <= 10 && score > 5) {
//         let grade = "E"
//         return grade;
//     } else {
//         let grade = "F";
//         return grade;
//     }
// }

// function getGrade(score)

//for in loop loop that iterates over each property in the the object and logs a subsequent statement to the console each time it loops.
var actress = {
  firstName: "Julia",
  lastName: "Roberts",
  dateOfBirth: "October 28, 1967",
  nationality: "American",
  firstMovie: "Satisfaction",
};

for (var property in actress) {
  console.log("actress." + property + " = " + actress[property]);
}

/*  When you set local and global vars with the same name, the local variable takes precedence over the global variable:*/
var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  console.log(outerWear); // logs sweater
  return outerWear;
}

myOutfit();
console.log(outerWear); //logs T-Shirt

// passing values into a function with arguments and using a return statement to send a value back out of a function.
function timesFive(num) {
  return num * 5;
}
let answer = timesFive(5);
console.log(answer);

let answer1 = timesFive(2);
console.log(answer1);

let answer2 = timesFive(25);
console.log(answer2);

/*A function can include a return statement but it DOES NOT have to
In the absence of a return statement, the returned value is undefined.*/

function addTen(sum) {
  sum = sum + 10;
  console.log(sum);
  //sum equaled 20
}

addTen(10);
console.log(addTen);
/*came back with the definition of the function: shown just above*/
//  console.log(sum);
/*came back with an error: Uncaught ReferenceError: sum is not defined.*/

/*  Storing Values with the Assignment Operator: everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.*/
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed); //returned 2 to the console.

//--------------------------------------------------------//
//use 'Set' object to remove duplicates from an array.
const numbers = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

//--------------------------------------------

const animeChars = [
  { name: "Goku", age: 11 }, //1
  { name: "Yusuke", age: 14 }, //2
  { name: "Spike", age: 27 }, //3
  { name: "Vash", age: 131 }, //4
  { name: "Gene", age: 20 }, //5
  { name: "Edward", age: 12 }, //6
  { name: "Afro", age: 28 }, //7
  { name: "Vegeta", age: 732 }, //8
  { name: "Kenshin", age: 28 }, //9
  { name: "Roger", age: 30 }, //10
];

//explicitly printing name and age forEach item in the array one at a time.
console.log(
  "My name is " + animeChars[0].name + " and I am " + animeChars[0].age
);
console.log(
  "My name is " + animeChars[1].name + " and I am " + animeChars[1].age
);
console.log(
  "My name is " + animeChars[2].name + " and I am " + animeChars[2].age
);
console.log(
  "My name is " + animeChars[3].name + " and I am " + animeChars[3].age
);
console.log(
  "My name is " + animeChars[4].name + " and I am " + animeChars[4].age
);
console.log(
  "My name is " + animeChars[5].name + " and I am " + animeChars[5].age
);
console.log(
  "My name is " + animeChars[6].name + " and I am " + animeChars[6].age
);
console.log(
  "My name is " + animeChars[7].name + " and I am " + animeChars[7].age
);
console.log(
  "My name is " + animeChars[8].name + " and I am " + animeChars[8].age
);
console.log(
  "My name is " + animeChars[9].name + " and I am " + animeChars[9].age
);

//creating a for loop that prints name and age forEach item in the array. Initialization, termination condition, iteration
for (let i = 0; i < animeChars.length; i++) {
  console.log(
    "My name is " +
      animeChars[i].name +
      " and I am " +
      animeChars[i].age +
      " years old!"
  );
}

//creating a forEach High order function method that prints the a concatenated phrase to the console with name and age of each item in the array followed by the object itself from the array.
animeChars.forEach(function (character) {
  console.log(character.name + " is " + character.age + " years of age!!!");
  console.log(character);
});

// //------------------------------------------------
// //Find maximum item of an Array by given key using #javascript.
// const people = [
//   { name: "Goku", age: 11 },
//   { name: "yusuke", age: 14 },
//   { name: "Spike", age: 27 },
//   { name: "Vash", age: 131 },
// ];

// const maxBy = (arr, key) => {
//   return arr.reduce((max, obj) => {
//     return max[key] >= obj[key] ? max : obj;
//   }, {});

// };

// maxBy(people, "age");

//where do i place the console.log to find the result
// console.log(maxBy);
