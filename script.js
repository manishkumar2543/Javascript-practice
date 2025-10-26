<<<<<<< HEAD
// 📅 Day-2 Challenge
// 🔹 Core Questions (10)

// Print numbers from 1 to 10 using a loop.

// Print all even numbers from 1 to 50.

// Find the sum of first 100 natural numbers.

// Write a program to find factorial of a given number.

// Reverse the string "javascript".

// Create an array of 5 numbers and print each element using a loop.

// Find the sum of array [2,4,6,8,10].

// Find the largest number in an array [10,5,20,8].

// Count how many odd numbers are in [1,2,3,4,5,6,7,8,9].

// Write a function to check if a number is prime or not.



// Print numbers from 1 to 10 using a loop.📢
// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// Print all even numbers from 1 to 50.📢
// for(let i=1; i<=50; i++){
//     if(i%2===0){
//         console.log(`${i} =even number`)
//     }
// }

//  Find the sum of first 100 natural numbers.📢
// let n=100
// let sum_of= n*(n+1)/2;
// console.log(sum_of)


//  Write a program to find factorial of a given number.📢
// let num=5;
// let fact=1;
// for(let i=1; i<=num; i++){
//     fact*=i;
    
// }
// console.log(`factorial of num = 5 =  is ${fact}`)


// Reverse the string "javascript".📢

// let str="javascript";
// let Rev=str.split(``).reverse(``).join(``);
// console.log(Rev)

// Create an array of 5 numbers and print each element using a loop.
// let array=[1,2,3,4,5]
// let arr2=array.map(function(val){
//     return val
// })
// console.log(arr2)

// let arr= [1,2,3,4];
// arr.forEach((val)=>{
//     console.log(val)
// })

// let arry=[1,2,3,4,55,6];
// for(let i=1; i<=arry[i]; i++){
//     console.log(arry[i])
// }


// Find the sum of array [2,4,6,8,10].📢

// let arr=[2,4,6,8,10];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum)

// let arry=[1,2,3,4,5];
// let sumof=0;
// arry.forEach((val)=>{
//     sumof+=val;
// })
// console.log(sumof)


    // // Find the largest number in an array [10,5,20,8].📢

    // // let arr=[100,5,20,8];
    // // let Max=0;
    // // let arr2=arr.filter((val)=>{
    // //     if(val > Max){
    // //         Max=val;
    // //     }
    // // })
    // // console.log(Max);


    // let arry=[12,20,32,13];
    // let mx=0;
    // arry.forEach((ele)=>{
    //     if(ele>mx){
    //         mx=ele;
    //     }
    

    // })
    // console.log(mx)

    // Count how many odd numbers are in [1,2,3,4,5,6,7,8,9].📢

    // let arry=[1,2,3,4,5,6,7,8,9];
    // for(let i=0; i<arry.length; i++){
    //     if(arry[i]%2!=0){
    //         console.log(`odd number= ${arry[i]}`)
    //     }
    // }
  

// Write a function to check if a number is prime or not.📢

// function PrimNum(num){
//     if(num<1){
//         return false
//     }
//     for(let i=2; i<num; i++){
//         if(num % i==0){
//             return false;
//         }
//     }
//     return true
// }
// console.log(PrimNum(5));
// console.log(PrimNum(6))



//                        📅 Day-2 JavaScript Challenge
//                             🔟 Core Questions

// Write a program to print the multiplication table of a given number (e.g., 5).

// Write a function to check if a string is a palindrome.

// Write a function that takes an array and returns the smallest number.

// Write a program to calculate the sum of digits of a number (e.g., 123 → 6).

// Write a program to reverse a number (e.g., 123 → 321).

// Write a program to count vowels in a string.

// Write a program to merge two arrays and remove duplicates.

// Write a program to find the maximum and minimum in an array using Math.max() and Math.min().

// Write a program to check if a character is a vowel or consonant.

// Write a program to find the second largest number in an array.



// Write a program to print the multiplication table of a given number (e.g., 5).👈

// function multiplication(num){
//     for(let i= 1; i<=10; i++){
//         console.log(`${num}x${i}=${num*i}`)
//     }
// }
// console.log(multiplication(5))

// Write a function to check if a string is a palindrome.👈

// function palindrome(str){
//     let reverse="";
//     for(let i=str.length -1; i>=0; i--){
//         reverse+=str[i];
//     }
//     return str === reverse;
// }
// console.log(palindrome("hel"))
// console.log(palindrome("level"))
// console.log(palindrome("level"));

    // Write a function that takes an array and returns the smallest number.👈👈
    // function smallest(arry){
    //     let smallestNum=arry[0];
    //     for(let i=1; i<arry.length; i++){
    //         if(arry[i] < smallestNum){
    //             smallestNum=arry[i]
    //         }
    //     }   
    //     return smallestNum
    // }
    // console.log(smallest([10,0,20,4,6,1]))

    // Write a program to calculate the sum of digits of a number (e.g., 123 → 6).

//     function sumof(num){
//         let sum=0;
//         while(num>0){
//             let digit= num%10;
//             sum+=digit;
//              num= Math.floor(num/10)
//         }
//        return sum
//     }
// console.log(sumof(123))
// console.log(sumof(432))

// // Write a program to reverse a number (e.g., 123 → 321).👈

// function ReverseNum(num){
//     let rev="";
//     for(let i=num.length-1; i>=0; i--){
//         rev+=num[i];

//     }
//     return rev
// }
// console.log(ReverseString(1,2,3))
// console.log(ReverseString("Manish"))

    // // Write a program to count vowels in a string.👈
    // function Vowels(str){
    //     let count=0;
    //     for(let i=0; i<str.length; i++){
    //         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
    //             count++;
    //         }
                
    //     }
    //     return count;
    // }
    // console.log(Vowels("Manish"))


    // Write a program to merge two arrays and remove duplicates.👈

//     let arr=[1,2,3];
//     let arr2=[,4,5,6];
//    let merge= [...arr, ...arr2];
//    let unique= [...new Set(merge)]
//    console.log(unique)

// Write a program to find the maximum and minimum in an array using Math.max() and Math.min().

// let arr= [22,44,55,14];
// let mx= Math.max(...arr);
// let min=Math.min(...arr);
// console.log(`Max number= ${mx}`)
// console.log(`min number= ${min}`)

// // Write a program to check if a character is a vowel or consonant.👈
// function VowelsandConso(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="o" || str[i]==="i" || str[i]==="u")
//             console.log(`${str[i]}= vowels`)
//         else{
//             console.log(`${str[i]}= conso`)
//         }
        
//     }
    

// }
// VowelsandConso("helo")



// Write a program to find the second largest number in an array.👈

// let arr=[1,2,3,4]
// let arr2=arr.sort(function(a,b){
//     return b-a
// })
// console.log(arr2[1])

                                    //   Day- 3📢👈


// // Write a program to calculate the power of a number (e.g., 2³ = 8).

// let base=2;
// let exponent=3;
// let result=Math.pow(base,exponent)
// console.log(`${base} ^ ${exponent} = ${result}`)

// Write a program to count how many digits are in a number.

// let num=8999;
// let count=0;
// while(num>0){
//     num=Math.floor(num/10)
//     count ++;

// }
// console.log(count)



// function isPalidorm(str){
//     let start=0;
//     let end =str.length-1;
//     while(start < end){
//         if(str[start] !== str[end]){
//             return false
//         }
//         start ++;
//         end --;

//     }
//     return true;
// }
// console.log(isPalidorm("madam"))
// console.log(isPalidorm("helo"))


// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;

// }
// console.log(gcd(18,48))

// Write a program to find the LCM (Least Common Multiple) of two numbers.

// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;
// }
// function lcm(a,b){
//     return (a*b)/ gcd(a,b);
// }
// console.log(lcm(12,18))


// Write a function that takes an array and returns the sum of even numbers only.

// function SomeofArray(arry){
//     let sum = 0;
//    arry.forEach(val=> {
//       if(val % 2===0){
//         sum+=val;
//       }
//    });
//     return sum;
// }

// console.log(SomeofArray([3,2,5,6,10]))

// Write a function that takes an array and returns the difference between max and min.

// function MaxMin(arry){
//     let max=arry[0];
//     let min=arry[0];
//     arry.forEach(val => {
//         if(val > max){
//             max=val;
//         }
//         if(val < min){
//             min=val;
//         }
        
//     });
//     return max-min
// }
// console.log(MaxMin([23,20,2,]))


// Write a program to count how many vowels and consonants are in a string.

// function Cv(str){
//     let vowel=0;
//     let consonant=0;
//       str = str.toLowerCase();
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//             if("aeiou".includes){
//                 vowel ++;
//             }
            
//         }
//         else{
//             consonant ++;
//         }
            
//     }
//     return {vowel,consonant}
// }
// console.log(Cv("helo manish"))


// Write a program to remove duplicates from an array (without using Set).

// function duplicates(arry){
//     let result=[];
//     for(let i=0; i<arry.length; i++){
//         if(result.indexOf(arry[i])===-1){
//             result.push(arry[i])
//         }
//     }
//     return result;
// }
// console.log(duplicates([1,2,3,2,4,1,5]))

// Write a program to check if two strings are anagrams (e.g., "listen" and "silent").
// function Chek(str1,str2){
//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();
//     let stared1= str1.split('').sort().join('');
//     let stared2=str1.split('').sort().join('');
//     return stared1 === stared2;
// }
// console.log(Chek("listen", "silent"))


            // 📅 Day-5 
// 1️⃣ Factorial of a number (using loop).
// let num=5;
// let fact=1;
// for(let i=1; i<num; i++){
//     fact*=i;
//     console.log(fact)
// }

// function factorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact*=i;
//     }
//     return fact
   
// }
// console.log(factorial(5))

// 2️⃣ Check if a number is prime or not.
// 👉 Example: 7 → Prime, 8 → Not Prime
// function PrimeNum(num){
//    if(num<=1){
//     return false;
//    }
//    for(let i=2; i<=Math.sqrt(num); i++){
//     if(num%i===0){
//         return false;
//     }
//    }
//    return true


// }
// console.log(PrimeNum(7))
// console.log(PrimeNum(8))

// 3️⃣ Fibonacci series up to n terms.
// 👉 Example: 0 1 1 2 3 5 8 ...
// function Fibonacci(n){
//     let a=0; 
//     let b=1;
//     console.log(a)
//     console.log(b)
//     for(let i=3; i<=n; i++){
//         let next=a+b;
//         console.log(next)
//         a=b;
//         b=next;
//     }

// }
// Fibonacci(7)


// function Largest(str){
//     let words=str.split(" ")
//     let largestWord=words[0];

//     for(let i=1; i <words.length; i++){
//         if(words[i].length > largestWord.length){
//             largestWord=words[i];
//         }
//     }
//     // return 
//     return largestWord;

// }
// console.log(Largest("i love javascript"))



// // 5️⃣ Sum of digits of a number.
// // 👉 Example: 123 → 6
// function SumofDigit(num){
//     let sum=0;
//     while(num > 0){
//         let digit= num%10;
//         sum+=digit;
//         num=Math.floor(num/10);
//     }
//     return sum
// }
// console.log(SumofDigit(123))

// 6️⃣ Check if a string contains only digits.
// 👉 "1234" → true, "12a3" → false
// function isOnlyDigit(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i] < '0' || str[i] > '9' ){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isOnlyDigit("1234"))
// console.log(isOnlyDigit("12a3"))


// function frequency(str){
//     let count=0;
//     for(let i=0; i < str.length; i++){
//         if(str[i]){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(frequency("star"))


// function frequency(str){
//     let freq={};
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(char!==" "){
//             if(freq[char]){
//                 freq[char]++;
//             }
//             else{
//                 freq[char]=1;
//             }
//         }
//     }
//     return freq;
// }
// console.log(frequency("Manish kumar"))

// Write a program to print your name, age, and city.📢
// function identfy(name,age,city){
//     console.log(name,age,city )
// }
// identfy("Manish","age","siwan")


// (function(name,age,city){
//     console.log("name=",name,"age=",age,"city=",city)
// }("sonu","12","delhi"))

// Swap two numbers without using a third variable.📢
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("a=",a,"b=",b)


// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b)


// 


// Write a program to check if a number is even or odd.📢
// function oddEven(num){
//     if(num%2===0){
//         return `even`
//     }
//     else{
//         return `odd`
//     }
// }
// console.log(oddEven(5))
// console.log(oddEven(2))

// Reverse a string.📢

// function Rev(str){
//     return str.split(``).reverse().join(``);
// }
// console.log(Rev("hello"))


// function Rev(str){
//     let reverse="";
//     for(let i=str.length-1; i>=0; i--){
//        reverse+=str[i];
//     }
//     return reverse
    
// }
// console.log(Rev("hoo"))



// Find the sum of all elements in an array.

// let arry=[1,2,3,4,5]
// let arry2=arry.reduce(function(acc,val){
//     return acc+val
// },0)
// console.log(arry2)

// function add(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(add([1,2,3,4]))


// Find the maximum number in an array.

// let arr=[5,6,8,1];
// let arr2=Math.max(...arr)
// console.log(arr2)

// function MaxMin(arry){
//     let max=arry[0];
//     for(let i=0; i<arry.length; i++){
//         if(arry[i] > max ){
//             max=arry[i];
//         }
//     }
//     return max;
// }
// console.log(MaxMin([1,2,3,4,5]))

// Write a program to remove duplicates from an array (without using Set).

// function remove(arry){
//     let unique=[];
//     for(let i=0; i<arry.length; i++){
//         if(unique.indexOf(arry[i]) === -1){
//             unique.push(arry[i])
//         }
//     }
//     return unique
// }
// console.log(remove([1,2,3,3,4,"a","b","a"]))

// Count how many times an element appears in an array.
// function Counfrq(arr,target){
//     let count=0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]=== target){
//             count ++;
//         }
//     }
//     return count;
// }
// // console.log(Counfrq([1,1,2,2,2,2,3],1))

// const arr=[1,1,2,2,2,2,3];
// const target=1;
// console.log(Counfrq(arr,target))



// function check(a,b){

//     if(a.length !== b.length){
//         return false;
//     }
    
//     for(let i=0; i<a.length; i++){
//         if(a[i]!== b[i]){
//             return false
//         }
//     }
//     return true
// }
// const a=[1,2,3,4];
// const b=[1,2,3]
// console.log(check(a,b))


// Check if two strings are anagrams.
// 👉 Example: "listen" and "silent".

// function Aanagram(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let sorted1=str1.split('').sort().join('');
//     let sorted2=str2.split('').sort().join('');
//     return sorted1 === sorted2;

// }
// console.log(Aanagram("listen","silent"))
// console.log(Aanagram("hello","bello"))

// Count vowels and consonants in a string.

// function Vowels(str){
//     let count=0;
   
//   for(let i=0; i<str.length; i++){
//      if(str[i]===`a` || str[i]===`e` || str[i]===`i` || str[i]===`o` || str[i]===`u`){
//         count++;
//     }
//   }
//     return count;
// }
// console.log(Vowels("Heloo"))

// Check if a string is a palindrome.
// function palindrome(str){
//     let rev=" ";
//     for(let i=str.length-1; i>0; i--){
//         if(str[i]==!str){
//            return false 
//         }
//     }
//     return true 
   
// }
// console.log(palindrome("level"))
// console.log(palindrome("helo"))


// function palindrome(str){
//     let Rev=str.split(``).reverse().join(``);
//     return Rev === str
// }
// console.log(palindrome("helo"))
// console.log(palindrome("level"))



// Find the largest word in a string.
// function Largest(str){
//     let words=str.split(" ");
//     let largestWord=words[0];
//     for(let i=1; i<words.length; i++){
//         if(words[i].length > largestWord.length){
//             largestWord=words[i];
//         }
//     }
//     return largestWord;
// }
// console.log(Largest("i love javascript"))

// Check if a string contains only digits.
// function isOnlyDigit(str){
//     if(str ===undefined || str===null || str===""){
//         return false;
//     }
//     for(let i=0; i<str.length; i++){
//         if(isNaN(parseInt(str[i]))){
//             return false
//         }
//     }
//     return true
// }
// console.log(isOnlyDigit("1234"))
// console.log(isOnlyDigit("12a3"))



// function factorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact*=i;
//     }
//     return fact;
// }
// console.log(factorial(5))

// function Prime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num % i  === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(Prime(2))
// console.log(Prime(3))
// console.log(Prime(4))


// function Fibonacci(n){
//     let a=0;
//     let b=1;
//     console.log(a)
//     console.log(b)
//     for(let i=3; i<=n; i++){
//         let next=a+b;
//         console.log(next)
//         a=b;
//         b=next;

//     }

// }
// Fibonacci(7)

// function Fibonacci(num){
//     let a=0;
//     let b=1;
//     if(num >= 1){
//         console.log(a)
//     }
//     if(num >= 2){
//         console.log(b)
//     }
//     let i=2;
//     while(i <num){
//         let next=a+b;
//         console.log(next);
//         a=b;
//         b=next;
//         i++;
//     }


// }
// Fibonacci(7)

// Find the sum of digits of a number.
// function SumofDigit(num){
//     let sum=0;
//     while(num > 0){
//         let digit= num%10;
//         sum+=digit;
//         num=Math.floor(num/10);
//     }
//     return sum
// }
// console.log(SumofDigit(123))

// Check if a number is Armstrong or not.
// 👉 Example: 153 → 1³ + 5³ + 3³ = 153
// function Armstrong(num){
//     let sum=0;
//     let temp=num;
//     while(temp > 0){
//         let digit= temp % 10;
//         sum+= digit ** 3;
//         temp=Math.floor(temp/10);

//     }
//     return sum === num;

// }
// console.log(Armstrong(153))
// console.log(Armstrong(123))

// Count the frequency of each character in a string.

// function frequency(str){
//     let freq={};
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(char !== " "){
//             if(freq[char]){
//                 freq[char]++;


//             }
//             else{
//                 freq[char]=1;
//             }

//         }
//     }
//     return freq;
// }
// console.log(frequency("Manish kumar"))


// Find the first non-repeating character in a string.
// function firstNonRepeatingChar(str){
//     let charCount={};
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(char !== " "){
//             if(charCount[char]){
//                 charCount[char]++;
//             }
//             else{
//                 charCount[char]=1;
//             }
//         }
//     }
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(charCount[char]===1){
//             return char;

//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatingChar("swiss"))
// console.log(firstNonRepeatingChar("manish kumar"))



// Merge two objects into one.

// let obje={a:1, b:2};
// let obje2={c:3, d:4};
// let merged={...obje, ...obje2};
// console.log(merged)


// function mergeObjects(obj1, obj2){
//     let merged={};
//     for(let key in obj1){
//         merged[key]=obj1[key];

//     }
//     for(let key in obj2){
//         merged[key]=obj2[key];

//     }
//     return merged;
// }
// let obje={a:1, b:2};
// let obje2={c:3, d:4};
// console.log(mergeObjects(obje, obje2))

// function mergeObjects(obj1, obj2){
//     return {...obj1, ...obj2};
// }
// let obj1={a:1, b:2};
// let obj2={c:3, d:4};
// console.log(mergeObjects(obj1, obj2))


// // Write a program to sort the keys of an object.
// // let obj={b:2, a:1, d:4, c:3};
// // let sortedKeys= Object.keys(obj).sort();
// // let sortedObj={};
// // for(let key of sortedKeys){
// //     sortedObj[key]=obj[key];
// // }
// // console.log(sortedObj);

// function sortObjectKeys(obj){
//     let sortedKeys= Object.keys(obj).sort();
//     let sortedObj={};
//     for(let key of sortedKeys){
//         sortedObj[key]=obj[key];
//     }
//     return sortedObj;
// }
// let obj={b:2, a:1, d:4, c:3};
// console.log(sortObjectKeys(obj));


// // 1️⃣ Reverse an array without using reverse()
// function ReverseinAarry(arry){
//     let reverse=[];
//     for(let i=arry.length-1; i>=0; i--){
//         if(arry[i]){
//             reverse.push(arry[i]);

//         }
      
//     }
//     return reverse;
// }
// console.log(ReverseinAarry([1,2,3,4,5]))


// // 2️⃣ Find the second smallest number in an array

// // let arr=[5,1,3,2,4];
// // let sorted=arr.sort(function(a,b){
// //     return a-b;
// // });
// // console.log(sorted[1]);

// function secondSmallest(arry){
//     let first=Infinity;
//     let second=Infinity;
//     for(let i=0; i<arry.length; i++){
//         if(arry[i] < first){
//             second=first;
//             first=arry[i];

//         }
//         else if(arry[i] < second && arry[i] !== first){
//             second=arry[i];

//         }

        
//     }
//     return second;
// }
// console.log(secondSmallest([5,1,3,2,4]))

// // 3️⃣ Capitalize first letter of each word in a string

// function capitalizeWords(str){
//    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// }
// const mystring="hello world from javascript";
// const titleCasedString =capitalizeWords(mystring);
// console.log(titleCasedString);


// function PerfectNum(num){
//     let sum=0;
//     for(let i=1; i<=num/2; i++){
//         if(num % i ===0){
//             sum+=i;

//         }
//     }
//    if(sum === num){
//         return `${num} is a perfect number`;
//    }
//    else{
//     return `${num} is not a perfect number`;
//    }

// }
// console.log(PerfectNum(6))



// 5️⃣ Flatten a nested array (one level)
// let arr=[1,[2,3],[4,5]];
// let arr2=arr.flat();
// console.log(arr2)

// function flattenArray(arry){
//     arry.map(val=>{
//         if(Array.isArray(val)){
//             flattenArray(val);

//         }
//         else{
//             console.log(val)
//         }
//     })


// }
// flattenArray([1,[2,3],[4,5,[6,7]]])




// function FalsyValue(arry){
//     let cleaner=[];
//    arry.filter(function(val){
//     if(val){
//         cleaner.push(val)
        
//     }

//    });
//    console.log(cleaner)
// }
// FalsyValue([0, 1, false, 2, '', 3, null, undefined, 'Manish']);



// // 7️⃣ Convert an object into an array of key-value pairs

//     let obj={
//         name:"Manish",
//         age:12,
//         Roll:20,

//     }
//     Object.entries(obj).forEach(([Key,value])=>{
//         console.log(`${Key} : ${value}`)
//     })

// 8️⃣ Count the number of words in a string

// let str="Hello world from javascript";
// let word=str.split(" ").length;
// console.log(word)

// function CountWords(str){
//     return str.split(" ").length;
// }
// console.log(CountWords("Hello world from javascript"))

// filter use word
// function CountWords(str){
//     let words=str.split(" ");
//     let count=0;
//     words.filter(function(val){
//         if(val!==""){
//             count++;
//         }
//     });
//     return count;
// }
// console.log(CountWords(" Hello   world from   javascript "))


// 9️⃣ Check if a string is a pangram (contains all letters a-z)

// function pangram(str){
//     let Alpha="abcdefghijklmnopqrstuvwxyz";
//     str=str.toLowerCase();
//     for(let i=0; i<Alpha.length; i++){
//         if(!str.includes(Alpha[i])){
//             return false;

//         }
//     }
//     return true;

// }
// console.log(pangram("The quick brown fox jumps over the lazy dog"))
// console.log(pangram("Hello world"))



// 🔟 Find all prime numbers in an array
// function Primefind(arr){
//     let primes=[];
//     arr.forEach((val)=>{
//         if(val > 1){
//             let isPrime=true;
//             for(let i=2; i<=Math.sqrt(val); i++){
//                 if(val % i==0){
//                     isPrime=false;
//                     break;
//                 }

//             }
//             if(isPrime){
//                 primes.push(val);
//             }

//         }
        
//     })
//     return primes;
// }
// console.log(Primefind([1,2,3,4,5,6,7,8,9,10,11,12,13]))

// const Primefind = arr => 
//     arr.filter(val => {
//         if(val <= 1) return false; // 1 या उससे छोटे skip
//         for(let i = 2; i <= Math.sqrt(val); i++){
//             if(val % i === 0) return false;
//         }
//         return true;
//     });

// console.log(Primefind([3 ,4,5,6,7,8,9,10,11,12,13]));
=======
// 📅 Day-2 Challenge
// 🔹 Core Questions (10)

// Print numbers from 1 to 10 using a loop.

// Print all even numbers from 1 to 50.

// Find the sum of first 100 natural numbers.

// Write a program to find factorial of a given number.

// Reverse the string "javascript".

// Create an array of 5 numbers and print each element using a loop.

// Find the sum of array [2,4,6,8,10].

// Find the largest number in an array [10,5,20,8].

// Count how many odd numbers are in [1,2,3,4,5,6,7,8,9].

// Write a function to check if a number is prime or not.



// Print numbers from 1 to 10 using a loop.📢
// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// Print all even numbers from 1 to 50.📢
// for(let i=1; i<=50; i++){
//     if(i%2===0){
//         console.log(`${i} =even number`)
//     }
// }

//  Find the sum of first 100 natural numbers.📢
// let n=100
// let sum_of= n*(n+1)/2;
// console.log(sum_of)


//  Write a program to find factorial of a given number.📢
// let num=5;
// let fact=1;
// for(let i=1; i<=num; i++){
//     fact*=i;
    
// }
// console.log(`factorial of num = 5 =  is ${fact}`)


// Reverse the string "javascript".📢

// let str="javascript";
// let Rev=str.split(``).reverse(``).join(``);
// console.log(Rev)

// Create an array of 5 numbers and print each element using a loop.
// let array=[1,2,3,4,5]
// let arr2=array.map(function(val){
//     return val
// })
// console.log(arr2)

// let arr= [1,2,3,4];
// arr.forEach((val)=>{
//     console.log(val)
// })

// let arry=[1,2,3,4,55,6];
// for(let i=1; i<=arry[i]; i++){
//     console.log(arry[i])
// }


// Find the sum of array [2,4,6,8,10].📢

// let arr=[2,4,6,8,10];
// let sum=0;
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
// }
// console.log(sum)

// let arry=[1,2,3,4,5];
// let sumof=0;
// arry.forEach((val)=>{
//     sumof+=val;
// })
// console.log(sumof)


    // // Find the largest number in an array [10,5,20,8].📢

    // // let arr=[100,5,20,8];
    // // let Max=0;
    // // let arr2=arr.filter((val)=>{
    // //     if(val > Max){
    // //         Max=val;
    // //     }
    // // })
    // // console.log(Max);


    // let arry=[12,20,32,13];
    // let mx=0;
    // arry.forEach((ele)=>{
    //     if(ele>mx){
    //         mx=ele;
    //     }
    

    // })
    // console.log(mx)

    // Count how many odd numbers are in [1,2,3,4,5,6,7,8,9].📢

    // let arry=[1,2,3,4,5,6,7,8,9];
    // for(let i=0; i<arry.length; i++){
    //     if(arry[i]%2!=0){
    //         console.log(`odd number= ${arry[i]}`)
    //     }
    // }
  

// Write a function to check if a number is prime or not.📢

// function PrimNum(num){
//     if(num<1){
//         return false
//     }
//     for(let i=2; i<num; i++){
//         if(num % i==0){
//             return false;
//         }
//     }
//     return true
// }
// console.log(PrimNum(5));
// console.log(PrimNum(6))



//                        📅 Day-2 JavaScript Challenge
//                             🔟 Core Questions

// Write a program to print the multiplication table of a given number (e.g., 5).

// Write a function to check if a string is a palindrome.

// Write a function that takes an array and returns the smallest number.

// Write a program to calculate the sum of digits of a number (e.g., 123 → 6).

// Write a program to reverse a number (e.g., 123 → 321).

// Write a program to count vowels in a string.

// Write a program to merge two arrays and remove duplicates.

// Write a program to find the maximum and minimum in an array using Math.max() and Math.min().

// Write a program to check if a character is a vowel or consonant.

// Write a program to find the second largest number in an array.



// Write a program to print the multiplication table of a given number (e.g., 5).👈

// function multiplication(num){
//     for(let i= 1; i<=10; i++){
//         console.log(`${num}x${i}=${num*i}`)
//     }
// }
// console.log(multiplication(5))

// Write a function to check if a string is a palindrome.👈

// function palindrome(str){
//     let reverse="";
//     for(let i=str.length -1; i>=0; i--){
//         reverse+=str[i];
//     }
//     return str === reverse;
// }
// console.log(palindrome("hel"))
// console.log(palindrome("level"))
// console.log(palindrome("level"));

    // Write a function that takes an array and returns the smallest number.👈👈
    // function smallest(arry){
    //     let smallestNum=arry[0];
    //     for(let i=1; i<arry.length; i++){
    //         if(arry[i] < smallestNum){
    //             smallestNum=arry[i]
    //         }
    //     }   
    //     return smallestNum
    // }
    // console.log(smallest([10,0,20,4,6,1]))

    // Write a program to calculate the sum of digits of a number (e.g., 123 → 6).

//     function sumof(num){
//         let sum=0;
//         while(num>0){
//             let digit= num%10;
//             sum+=digit;
//              num= Math.floor(num/10)
//         }
//        return sum
//     }
// console.log(sumof(123))
// console.log(sumof(432))

// // Write a program to reverse a number (e.g., 123 → 321).👈

// function ReverseNum(num){
//     let rev="";
//     for(let i=num.length-1; i>=0; i--){
//         rev+=num[i];

//     }
//     return rev
// }
// console.log(ReverseString(1,2,3))
// console.log(ReverseString("Manish"))

    // // Write a program to count vowels in a string.👈
    // function Vowels(str){
    //     let count=0;
    //     for(let i=0; i<str.length; i++){
    //         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
    //             count++;
    //         }
                
    //     }
    //     return count;
    // }
    // console.log(Vowels("Manish"))


    // Write a program to merge two arrays and remove duplicates.👈

//     let arr=[1,2,3];
//     let arr2=[,4,5,6];
//    let merge= [...arr, ...arr2];
//    let unique= [...new Set(merge)]
//    console.log(unique)

// Write a program to find the maximum and minimum in an array using Math.max() and Math.min().

// let arr= [22,44,55,14];
// let mx= Math.max(...arr);
// let min=Math.min(...arr);
// console.log(`Max number= ${mx}`)
// console.log(`min number= ${min}`)

// // Write a program to check if a character is a vowel or consonant.👈
// function VowelsandConso(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="o" || str[i]==="i" || str[i]==="u")
//             console.log(`${str[i]}= vowels`)
//         else{
//             console.log(`${str[i]}= conso`)
//         }
        
//     }
    

// }
// VowelsandConso("helo")



// Write a program to find the second largest number in an array.👈

// let arr=[1,2,3,4]
// let arr2=arr.sort(function(a,b){
//     return b-a
// })
// console.log(arr2[1])

                                    //   Day- 3📢👈


// // Write a program to calculate the power of a number (e.g., 2³ = 8).

// let base=2;
// let exponent=3;
// let result=Math.pow(base,exponent)
// console.log(`${base} ^ ${exponent} = ${result}`)

// Write a program to count how many digits are in a number.

// let num=8999;
// let count=0;
// while(num>0){
//     num=Math.floor(num/10)
//     count ++;

// }
// console.log(count)



// function isPalidorm(str){
//     let start=0;
//     let end =str.length-1;
//     while(start < end){
//         if(str[start] !== str[end]){
//             return false
//         }
//         start ++;
//         end --;

//     }
//     return true;
// }
// console.log(isPalidorm("madam"))
// console.log(isPalidorm("helo"))


// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;

// }
// console.log(gcd(18,48))

// Write a program to find the LCM (Least Common Multiple) of two numbers.

// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;
// }
// function lcm(a,b){
//     return (a*b)/ gcd(a,b);
// }
// console.log(lcm(12,18))


// Write a function that takes an array and returns the sum of even numbers only.

// function SomeofArray(arry){
//     let sum = 0;
//    arry.forEach(val=> {
//       if(val % 2===0){
//         sum+=val;
//       }
//    });
//     return sum;
// }

// console.log(SomeofArray([3,2,5,6,10]))

// Write a function that takes an array and returns the difference between max and min.

// function MaxMin(arry){
//     let max=arry[0];
//     let min=arry[0];
//     arry.forEach(val => {
//         if(val > max){
//             max=val;
//         }
//         if(val < min){
//             min=val;
//         }
        
//     });
//     return max-min
// }
// console.log(MaxMin([23,20,2,]))


// Write a program to count how many vowels and consonants are in a string.

// function Cv(str){
//     let vowel=0;
//     let consonant=0;
//       str = str.toLowerCase();
//     for(let i=0; i<str.length; i++){
//         if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//             if("aeiou".includes){
//                 vowel ++;
//             }
            
//         }
//         else{
//             consonant ++;
//         }
            
//     }
//     return {vowel,consonant}
// }
// console.log(Cv("helo manish"))


// Write a program to remove duplicates from an array (without using Set).

// function duplicates(arry){
//     let result=[];
//     for(let i=0; i<arry.length; i++){
//         if(result.indexOf(arry[i])===-1){
//             result.push(arry[i])
//         }
//     }
//     return result;
// }
// console.log(duplicates([1,2,3,2,4,1,5]))

// Write a program to check if two strings are anagrams (e.g., "listen" and "silent").
// function Chek(str1,str2){
//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();
//     let stared1= str1.split('').sort().join('');
//     let stared2=str1.split('').sort().join('');
//     return stared1 === stared2;
// }
// console.log(Chek("listen", "silent"))


            // 📅 Day-5 
// 1️⃣ Factorial of a number (using loop).
// let num=5;
// let fact=1;
// for(let i=1; i<num; i++){
//     fact*=i;
//     console.log(fact)
// }

// function factorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact*=i;
//     }
//     return fact
   
// }
// console.log(factorial(5))

// 2️⃣ Check if a number is prime or not.
// 👉 Example: 7 → Prime, 8 → Not Prime
// function PrimeNum(num){
//    if(num<=1){
//     return false;
//    }
//    for(let i=2; i<=Math.sqrt(num); i++){
//     if(num%i===0){
//         return false;
//     }
//    }
//    return true


// }
// console.log(PrimeNum(7))
// console.log(PrimeNum(8))

// 3️⃣ Fibonacci series up to n terms.
// 👉 Example: 0 1 1 2 3 5 8 ...
// function Fibonacci(n){
//     let a=0; 
//     let b=1;
//     console.log(a)
//     console.log(b)
//     for(let i=3; i<=n; i++){
//         let next=a+b;
//         console.log(next)
//         a=b;
//         b=next;
//     }

// }
// Fibonacci(7)


// function Largest(str){
//     let words=str.split(" ")
//     let largestWord=words[0];

//     for(let i=1; i <words.length; i++){
//         if(words[i].length > largestWord.length){
//             largestWord=words[i];
//         }
//     }
//     // return 
//     return largestWord;

// }
// console.log(Largest("i love javascript"))



// // 5️⃣ Sum of digits of a number.
// // 👉 Example: 123 → 6
// function SumofDigit(num){
//     let sum=0;
//     while(num > 0){
//         let digit= num%10;
//         sum+=digit;
//         num=Math.floor(num/10);
//     }
//     return sum
// }
// console.log(SumofDigit(123))

// 6️⃣ Check if a string contains only digits.
// 👉 "1234" → true, "12a3" → false
// function isOnlyDigit(str){
//     for(let i=0; i<str.length; i++){
//         if(str[i] < '0' || str[i] > '9' ){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isOnlyDigit("1234"))
// console.log(isOnlyDigit("12a3"))


// function frequency(str){
//     let count=0;
//     for(let i=0; i < str.length; i++){
//         if(str[i]){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(frequency("star"))


// function frequency(str){
//     let freq={};
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(char!==" "){
//             if(freq[char]){
//                 freq[char]++;
//             }
//             else{
//                 freq[char]=1;
//             }
//         }
//     }
//     return freq;
// }
// console.log(frequency("Manish kumar"))

// Write a program to print your name, age, and city.📢
// function identfy(name,age,city){
//     console.log(name,age,city )
// }
// identfy("Manish","age","siwan")


// (function(name,age,city){
//     console.log("name=",name,"age=",age,"city=",city)
// }("sonu","12","delhi"))

// Swap two numbers without using a third variable.📢
// let a=10;
// let b=20;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("a=",a,"b=",b)


// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b)


// 


// Write a program to check if a number is even or odd.📢
// function oddEven(num){
//     if(num%2===0){
//         return `even`
//     }
//     else{
//         return `odd`
//     }
// }
// console.log(oddEven(5))
// console.log(oddEven(2))

// Reverse a string.📢

// function Rev(str){
//     return str.split(``).reverse().join(``);
// }
// console.log(Rev("hello"))


// function Rev(str){
//     let reverse="";
//     for(let i=str.length-1; i>=0; i--){
//        reverse+=str[i];
//     }
//     return reverse
    
// }
// console.log(Rev("hoo"))



// Find the sum of all elements in an array.

// let arry=[1,2,3,4,5]
// let arry2=arry.reduce(function(acc,val){
//     return acc+val
// },0)
// console.log(arry2)

// function add(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(add([1,2,3,4]))


// Find the maximum number in an array.

// let arr=[5,6,8,1];
// let arr2=Math.max(...arr)
// console.log(arr2)

// function MaxMin(arry){
//     let max=arry[0];
//     for(let i=0; i<arry.length; i++){
//         if(arry[i] > max ){
//             max=arry[i];
//         }
//     }
//     return max;
// }
// console.log(MaxMin([1,2,3,4,5]))

// Write a program to remove duplicates from an array (without using Set).

// function remove(arry){
//     let unique=[];
//     for(let i=0; i<arry.length; i++){
//         if(unique.indexOf(arry[i]) === -1){
//             unique.push(arry[i])
//         }
//     }
//     return unique
// }
// console.log(remove([1,2,3,3,4,"a","b","a"]))

// Count how many times an element appears in an array.
// function Counfrq(arr,target){
//     let count=0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]=== target){
//             count ++;
//         }
//     }
//     return count;
// }
// // console.log(Counfrq([1,1,2,2,2,2,3],1))

// const arr=[1,1,2,2,2,2,3];
// const target=1;
// console.log(Counfrq(arr,target))



// function check(a,b){

//     if(a.length !== b.length){
//         return false;
//     }
    
//     for(let i=0; i<a.length; i++){
//         if(a[i]!== b[i]){
//             return false
//         }
//     }
//     return true
// }
// const a=[1,2,3,4];
// const b=[1,2,3]
// console.log(check(a,b))


// Check if two strings are anagrams.
// 👉 Example: "listen" and "silent".

// function Aanagram(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let sorted1=str1.split('').sort().join('');
//     let sorted2=str2.split('').sort().join('');
//     return sorted1 === sorted2;

// }
// console.log(Aanagram("listen","silent"))
// console.log(Aanagram("hello","bello"))

// Count vowels and consonants in a string.

// function Vowels(str){
//     let count=0;
   
//   for(let i=0; i<str.length; i++){
//      if(str[i]===`a` || str[i]===`e` || str[i]===`i` || str[i]===`o` || str[i]===`u`){
//         count++;
//     }
//   }
//     return count;
// }
// console.log(Vowels("Heloo"))

// Check if a string is a palindrome.
// function palindrome(str){
//     let rev=" ";
//     for(let i=str.length-1; i>0; i--){
//         if(str[i]==!str){
//            return false 
//         }
//     }
//     return true 
   
// }
// console.log(palindrome("level"))
// console.log(palindrome("helo"))


// function palindrome(str){
//     let Rev=str.split(``).reverse().join(``);
//     return Rev === str
// }
// console.log(palindrome("helo"))
// console.log(palindrome("level"))



// Find the largest word in a string.
// function Largest(str){
//     let words=str.split(" ");
//     let largestWord=words[0];
//     for(let i=1; i<words.length; i++){
//         if(words[i].length > largestWord.length){
//             largestWord=words[i];
//         }
//     }
//     return largestWord;
// }
// console.log(Largest("i love javascript"))

// Check if a string contains only digits.
// function isOnlyDigit(str){
//     if(str ===undefined || str===null || str===""){
//         return false;
//     }
//     for(let i=0; i<str.length; i++){
//         if(isNaN(parseInt(str[i]))){
//             return false
//         }
//     }
//     return true
// }
// console.log(isOnlyDigit("1234"))
// console.log(isOnlyDigit("12a3"))



// function factorial(num){
//     let fact=1;
//     for(let i=1; i<=num; i++){
//         fact*=i;
//     }
//     return fact;
// }
// console.log(factorial(5))

// function Prime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2; i<=Math.sqrt(num); i++){
//         if(num % i  === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(Prime(2))
// console.log(Prime(3))
// console.log(Prime(4))


// function Fibonacci(n){
//     let a=0;
//     let b=1;
//     console.log(a)
//     console.log(b)
//     for(let i=3; i<=n; i++){
//         let next=a+b;
//         console.log(next)
//         a=b;
//         b=next;

//     }

// }
// Fibonacci(7)

// function Fibonacci(num){
//     let a=0;
//     let b=1;
//     if(num >= 1){
//         console.log(a)
//     }
//     if(num >= 2){
//         console.log(b)
//     }
//     let i=2;
//     while(i <num){
//         let next=a+b;
//         console.log(next);
//         a=b;
//         b=next;
//         i++;
//     }


// }
// Fibonacci(7)

// Find the sum of digits of a number.
// function SumofDigit(num){
//     let sum=0;
//     while(num > 0){
//         let digit= num%10;
//         sum+=digit;
//         num=Math.floor(num/10);
//     }
//     return sum
// }
// console.log(SumofDigit(123))

// Check if a number is Armstrong or not.
// 👉 Example: 153 → 1³ + 5³ + 3³ = 153
// function Armstrong(num){
//     let sum=0;
//     let temp=num;
//     while(temp > 0){
//         let digit= temp % 10;
//         sum+= digit ** 3;
//         temp=Math.floor(temp/10);

//     }
//     return sum === num;

// }
// console.log(Armstrong(153))
// console.log(Armstrong(123))

// Count the frequency of each character in a string.

// function frequency(str){
//     let freq={};
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(char !== " "){
//             if(freq[char]){
//                 freq[char]++;


//             }
//             else{
//                 freq[char]=1;
//             }

//         }
//     }
//     return freq;
// }
// console.log(frequency("Manish kumar"))


// Find the first non-repeating character in a string.
// function firstNonRepeatingChar(str){
//     let charCount={};
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(char !== " "){
//             if(charCount[char]){
//                 charCount[char]++;
//             }
//             else{
//                 charCount[char]=1;
//             }
//         }
//     }
//     for(let i=0; i<str.length; i++){
//         let char=str[i];
//         if(charCount[char]===1){
//             return char;

//         }
//     }
//     return null;
// }
// console.log(firstNonRepeatingChar("swiss"))
// console.log(firstNonRepeatingChar("manish kumar"))



// Merge two objects into one.

// let obje={a:1, b:2};
// let obje2={c:3, d:4};
// let merged={...obje, ...obje2};
// console.log(merged)


// function mergeObjects(obj1, obj2){
//     let merged={};
//     for(let key in obj1){
//         merged[key]=obj1[key];

//     }
//     for(let key in obj2){
//         merged[key]=obj2[key];

//     }
//     return merged;
// }
// let obje={a:1, b:2};
// let obje2={c:3, d:4};
// console.log(mergeObjects(obje, obje2))

// function mergeObjects(obj1, obj2){
//     return {...obj1, ...obj2};
// }
// let obj1={a:1, b:2};
// let obj2={c:3, d:4};
// console.log(mergeObjects(obj1, obj2))


// // Write a program to sort the keys of an object.
// // let obj={b:2, a:1, d:4, c:3};
// // let sortedKeys= Object.keys(obj).sort();
// // let sortedObj={};
// // for(let key of sortedKeys){
// //     sortedObj[key]=obj[key];
// // }
// // console.log(sortedObj);

// function sortObjectKeys(obj){
//     let sortedKeys= Object.keys(obj).sort();
//     let sortedObj={};
//     for(let key of sortedKeys){
//         sortedObj[key]=obj[key];
//     }
//     return sortedObj;
// }
// let obj={b:2, a:1, d:4, c:3};
// console.log(sortObjectKeys(obj));


// // 1️⃣ Reverse an array without using reverse()
// function ReverseinAarry(arry){
//     let reverse=[];
//     for(let i=arry.length-1; i>=0; i--){
//         if(arry[i]){
//             reverse.push(arry[i]);

//         }
      
//     }
//     return reverse;
// }
// console.log(ReverseinAarry([1,2,3,4,5]))


// // 2️⃣ Find the second smallest number in an array

// // let arr=[5,1,3,2,4];
// // let sorted=arr.sort(function(a,b){
// //     return a-b;
// // });
// // console.log(sorted[1]);

// function secondSmallest(arry){
//     let first=Infinity;
//     let second=Infinity;
//     for(let i=0; i<arry.length; i++){
//         if(arry[i] < first){
//             second=first;
//             first=arry[i];

//         }
//         else if(arry[i] < second && arry[i] !== first){
//             second=arry[i];

//         }

        
//     }
//     return second;
// }
// console.log(secondSmallest([5,1,3,2,4]))

// // 3️⃣ Capitalize first letter of each word in a string

// function capitalizeWords(str){
//    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// }
// const mystring="hello world from javascript";
// const titleCasedString =capitalizeWords(mystring);
// console.log(titleCasedString);


// function PerfectNum(num){
//     let sum=0;
//     for(let i=1; i<=num/2; i++){
//         if(num % i ===0){
//             sum+=i;

//         }
//     }
//    if(sum === num){
//         return `${num} is a perfect number`;
//    }
//    else{
//     return `${num} is not a perfect number`;
//    }

// }
// console.log(PerfectNum(6))
>>>>>>> 951d0d31d82deba82631572d495c5f10ad7239f8
