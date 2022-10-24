// 1. Write a code to find the sum of first 10 natural numbers and show 
// that sum on screen.


var number = 10; 
var i = 1 ;
var sum = 0 ;

for (i=1; i <= number; i++)
{
    sum += i
}   console.log(sum) 


// 2. Write a code to display the cube of the number up to given an integer and show it on screen.
//  Example: 2 up to cube equals 8.

// var number = 3 ;
// var i = 1;
// var cube = 0;
// for (i=1; i<=number; i++){
//     cube = number * 3;
// }
// console.log(cube)


// 3. Write a code to calculate the factorial of a given number and show it on screen.
//  Example: The Factorial of 5 is 120.

// var a = 5;
// var fact = 1;
// var i = 1;
// for (i=1 ; i<=a ; i++ ){
//     fact = fact * i;
// }
// console.log(fact);

// 4. Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".


// var num = 1;
// var sum = 0;
// var n = 10;
// for (i=1; i <= n ; i++) {
//     sum += num + 2
// }
// console.log(sum)

// // vezbanje 4

// var i = 1;
// n = 5 ;
// num = 0;
// sum = 0;
// for (i=1; i <= n; i++){
//    num = i * 2;
//    console.log(sum)
// // }




// 5.Write a code to calculate the sum of digits in a
//  number and show that sum on screen. Example: "Sum of digits in number 232 is 7".







// 6. Write a code to count all letters in a word and show that count on screen.
//  Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".








// 7. Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: 
// [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

// var a = [1, 3, 32, $, g, h, t, s, c, 66, 23, h2] ;


// 0Write a program that will iterate from 0 to 10 and display squares of numbers.

// for (var x = 0; x<=10; x++){
//     console.log(x * x)
// }

// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
// for (var i=0; i<=15; i++) {
//     if (i === 0) {
//             console.log(i +  " is even");
//     }
//     else if (i % 2 === 0) {
//             console.log(i + " is even");   
//     }
//     else {
//             console.log(i + " is odd");
//     }
// }

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// sum = 0;
// for(i=0; i<1000; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         sum+=i;
//     }
// }
// console.log(sum)

// 3. Write a program to compute the sum and product of an array of integers.

// var a = [1, 2, 3, 4, 5, 6];
// sum=0;
// p=1;
// i= ;
// for (i = 0; i < a.length; i+=1 ) {
//     sum+=a[i];
//     p*=a[i];
// }
// console.log(sum + p);

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 


// 4. Write a program which prints the elements of the following array as a single string.
// var var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined];
// var a = ['1', 'A', 'B', "c", "r", true, NaN, undefined]

// for (var i in a ){
//     console.log(typeof a[i])
// }



// 6. Write a program that outputs the sum of squares of the first 20 numbers.


// var sum = 0 ;
// var sq = 0;
// for (i = 1; i <= 20; i++){
//     sq *= i * i;
    
//     console.log(sq)
// }



// let sumOfSquares = 0;
// let firstNumberToSum = 1;
// let lastNumberToSum = 20;

// for(let i = firstNumberToSum; i <= lastNumberToSum; i++){
//     sumOfSquares += i * i;
// }

// console.log(sumOfSquares);



// let number = 232;
// let sumOfDigits = 0;

// number = number.toString();

// for(let i = 0; i < number.length; i++){
//     sumOfDigits += parseInt(number[i]);
//     console.log(sumOfDigits);
// }


