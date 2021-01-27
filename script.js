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
