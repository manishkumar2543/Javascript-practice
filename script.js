// 🚀 PART-12: Loops & Conditionals — MASTER PLAN
// ✅ 1. Conditionals (if, else, else-if, ternary, switch)
// 🔥 Concept Clear Points

// if → condition true ho to run

// else → fallback

// else if → multiple conditions

// ternary → short if else

// switch → multiple exact matches (strict === check)


        //  💪 Practice #1 — Basic → Medium✍📢💡
// 1.Check if number is even or odd.

// function checkEvenOdd(num){
//     if(num % 2===0){
//         console.log(`${num} is Even`);
//     }
//     else{
//         console.log(`${num} is Odd`);
//     }
// }
// checkEvenOdd(7);
// checkEvenOdd(10);


// function checkNumber(num){
//     for(let i=1; i<=num; i++){
//         if(i % 2 ===0){
//             console.log(`${i} is Even`);
//         }
//     }
// }   
// checkNumber(10);


// Q2: Check 3 numbers and print the largest.
// function ChekLargestNum(a,b,c){
//     if(a>=b && a>=c){
//         console.log(`${a} is largest number`);
//     }
//     else if(b>=a && b>=c){
//         console.log(`${b} is largest number`);
//     }
//     else{
//         console.log(`${c} is largest number`);
//     }
// }
// ChekLargestNum(10,25,15);

// Q3: User ka age do — voting eligibility check.

// function voteEligibility(age){
//     if(age>=18){
//         console.log("You are eligible to vote");
//     }
//     else{
//         console.log("You are not eligible to vote");
//     }
// }
// voteEligibility(20)
// voteEligibility(15)


// Q4: String empty hai ya nahi — check.
// function checkStringEmpty(str){
//     if(str===""){
//         console.log("String is empty");
//     }
//     else{
//         console.log("String is not empty");
//     }
// }
// checkStringEmpty("");
// checkStringEmpty("Hello");


let UserName = "Manish";
let Pass = "12345";

let Input = prompt("enter Name");
let inptNum = prompt("enter Pass");

while (UserName !== Input || Pass !== inptNum) {
  console.log("Try again");

  Input = prompt("enter Name again");
  inptNum = prompt("enter Pass again");
}

console.log("Welcome to the site!");
