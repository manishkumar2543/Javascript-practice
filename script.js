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

function PrimNum(num){
    if(num<1){
        return false
    }
    for(let i=2; i<num; i++){
        if(num % i==0){
            return false;
        }
    }
    return true
}
console.log(PrimNum(5));
console.log(PrimNum(6))


