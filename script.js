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


// let UserName = "Manish";
// let Pass = "12345";

// let Input = prompt("enter Name");
// let inptNum = prompt("enter Pass");

// while (UserName !== Input || Pass !== inptNum) {
//   console.log("Try again");

//   Input = prompt("enter Name again");
//   inptNum = prompt("enter Pass again");
// }

// console.log("Welcome to the site!");

// 🔥 Practice #2 — Ternary

// Q6: Ternary se check karo: age > 18 → “Adult” : “Minor”

// let age=+prompt("Enter your age");
// let Check=(age>=18)? "adult" : "minor";
// console.log(`You are an ${Check}`);


// Temperature > 30 → “Hot”, warna “Cold” (ternary se).

// let num=+prompt("Enter a number");
// let Temperature=(num>30) ? "Hot" : "Cold";
// console.log(`The weather is ${Temperature}`);

// Q8: Ek number negative, positive, zero — ternary chain likho.
// let num=+prompt("Enter a number");
// let check=(num>0) ? "Positive" : (num<0) ? "Negative" : "Zero";
// console.log(`The number is ${check}`);

// 🔥 Practice #3 — Switch Case

// let dayofWeek=prompt("Enter day 1-7");
// let dayName;
// switch(dayofWeek){
//   case "1":
//     dayName="Monday";
//     break;
//   case "2":
//     dayName="Tuesday";
//     break;
//   case "3":
//     dayName="Wednesday";
//     break;
//   case "4":
//     dayName="Thursday";
//     break;
//   case "5":
//     dayName="Friday";
//     break;
//   case "6":
//     dayName="Saturday";
//     break;
//   case "7":
//     dayName="Sunday";
//     break;
//   default:
//     dayName="Invalid day";
// };
// console.log(`The day is ${dayName}`);

// Q10: Grade letter (“A”, “B”, “C”) → message print.
// let grade=prompt("Enter your grade A/B/C");
// let message;
// switch(grade){
//   case "A":
//     message="Excellent";
//     break;
//     case "B":
//       message="Good";
//       break;
//       case "C":
//         message="Average";
//         break;
//         default:
//           message="Invalid grade";
// }
// console.log(`Your performance is ${message}`);

// 🧠 INTERVIEW QUESTION
// Q11: Why is switch faster than long if else ?
// sortAnswer:- complier optimization + jump table.

// 🚀 2. Loops (for, while, do-while, forEach, for-in, for-of)

// 🔥 Practice #4 — For Loop
// Q12: 1–100 sum find karo.
// let sum=0; 
// for(let i=1; i<=100; i++){
//   sum +=i;
// }
// console.log(`sum of num=${sum}`);

// Q13: 1–20 ke even numbers print karo.
// for(let i=1; i<=20; i++){
//   if(i % 2===0){
//     console.log(`even num=${i}`);
//   }
// }

// Q14: Reverse counting 10 → 1.
// for(let i=10; i>=1; i--){
//   console.log(`reverse num=${i}`);
// }


// Q15: Ek array ke sare elements print karo.
// let arr=["Manish","Ankit","Ravi","Sonal"];
// for(let i=0; i<arr.length; i++){
//   console.log(`Names are: ${arr[i]}`);
// }

// 🔥 Practice #5 — While Loop

// Q16: While se 1–10 print.
// let i=1; 
// while(i<=10){
//   console.log(`num=${i}`);
//   i++;
// }


// Q17: While se factorial nikalna.

// let fact=1;
// let num=5;
// let i=1; 
// while(num>=i){
//   fact *=i;
//   i++;

// }
// console.log(`Factorial is=${fact}`);


// Q18: User se number lo — jab tak correct password na de, loop chalta rhe. 
// or mane kcuh thora advance bnya hu apne mind se
// let UserPass="123";
// let counter=0;
// let input=prompt("Enter your pass");
// counter++;
// while(UserPass !== input){
  
//   input=prompt("Enter your pass again");
//   counter++;
//   if(UserPass === input){
//     console.log("Welcome to the site");
//     if(counter<=3){
//       console.log("Login Successful");
//     }
//   }
//   else{
   
//     if(counter>=3){
//       console.log("Account locked");
//       break;
    
//     }

//   }
// }

// 🔥 Practice #7 — forEach / for-in / for-of
// Q21: forEach se array sum.

// function SumofArray(arr){
//         let sum=0;
//         arr.forEach(val => {
//                 sum+=val;
//         });
//         return sum;
// }
// console.log(SumofArray([1,2,3,4,5]))


// Q22: for-of se array item print.
// function PrintArry(arr){
//         for(let num of arr){
//                 console.log(num)
//         }
// }
// PrintArry([1,2,3,4])

// Q23: for-in se object ke keys print.
// let obj={
//         name:"manish",
//         age: 22,
//         city:"siwan",
// }
// for(let key in obj){
//         console.log(key)
// }


// Q24: for-in se array ke indexes print.
// function IndexPrint(arr){
//         for(let index in arr){
//                 console.log(index)
//         }
// }
// IndexPrint([10,20,30,40])

// 🔥 Practice #8 — Break/Continue

// Q25: 1–20 loop → 10 pr loop break.

// function BreakLoop(arr){
//         for(let i=0; i<arr.length; i++){
//                 console.log(arr[i])

//                 if(arr[i]=== 10){
//                         console.log("10 found, breaking loop")
//                 }
//         }
// }
// BreakLoop([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])

// Q26: 1–20 loop → odd numbers skip using continue.
// function OddSkip(){
//         for(let i=1; i<=20; i++){
//                 if(i % 2 !==0){
//                        continue 
//                 }
//                 console.log(i)
                
//         }
// }
// OddSkip()


// 🚀 3. Recursion (Interview Super Important)

// 🔥 Practice #9 — Recursion
// Q28: Factorial using recursion.

// function factorial(num){
//         if(num===0 || num===1){
//                 return 1;
                
//         }
//         else{
//                 return num* factorial(num-1);
//         }
// }
// console.log(factorial(5))

// Q29: Fibonacci numbers using recursion.

// function Fibo(n){
//         if(n < 2){
//                 return n;
//         }
//         return Fibo(n-1) + Fibo(n-2);
// }
// console.log(Fibo(10));


// function CountDigits(num){
//         if(num === 0) return 0;
//         return 1 + CountDigits(Math.floor(num/10))
// }
// console.log(CountDigits(12345))    


// Q31: Sum of array using recursion.
// function sumArr(arr, i=0){
//         return i === arr.length? 0: arr[i] + sumArr(arr,i+1)
// }
// console.log(sumArr([2,5,8,10]))

// Q32: Reverse string using recursion.

function reverseStr(str) {
    if (str.length === 0) return "";   // base condition

    return reverseStr(str.slice(1)) + str[0];
}

console.log(reverseStr("Manish"));  // hsinaM
