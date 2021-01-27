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
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
}


// let s = "javascriptloops";

// function vowelsAndConsonants(s) {
//     const vowels = [];
//     const consonants = [];
//     let l;
     
//     for (let l of s){
//         if("aeiou".includes(l)) {
//             vowels.push(l);
//         } else {
//             consonants.push(l)
//         }
//     }
    
//     console.log(vowels.join("\n"));
//     console.log(consonants.join("\n"));

// }