// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
// for (i = 0; i <= 15; i++){
//     if (i % 2 == 0)
//     console.log(i + ' is Even number') ;
//     else {
//         console.log(i + ' is Odd number')
//     }
// }



// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sumOfMultiples = 0;
for (i = 1 ; i < 1000; i++){
    if (i % 3 === 0 && i % 5 === 0){
        sumOfMultiples += i ;
        
    }
}

console.log(sumOfMultiples)

// 3. Write a program to compute the sum and product of an array of integers.

// var aOfIntegers = [1, 2, 3, 4, 5, 6];
// var sumOfIntegers = 0;
// var prodOfIntegers = 1;
// for(i = 0; i < aOfIntegers.length; i += 1){
//     sumOfIntegers += aOfIntegers[i];
//     prodOfIntegers *= aOfIntegers[i]
   
// }

// console.log('Sum: ' + sumOfIntegers + ' Product: ' + prodOfIntegers)

// // 4. Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
// var result = '';
// for (var i = 0; i < x.length; i++){
//     result += x[i];
// }
// console.log(result)


// 5. Write a program that prints the elements of the following array.



// 6. Write a program that outputs the sum of squares of the first 20 numbers.

var sumSquare = 0;
i = 1; 
for (i = 1; i <= 20; i++){
    sumSquare += i * i ;
   
}

console.log(sumSquare)
// var Input =[ ['David' = 80],
//             ['Marko', 77],
//             ['Dany', 88],
//             ['John', 95],
//             ['Thomas', 68]] 
// var sum = 0;
// var avarage = 0;
// for (var i = 0 ; i < Input.length; i++){
//     sum =+ input[i][1];
// }

// if (sum > 0){
//     avarage = sum / Input.length;
    
// }

// console.log(avarage)

// if(avarage < 60) {
//     console.log('The grade is F')
// }
// else if ( avarage < 70){
//     console.log('The grade is D ')
// }
// else if (avarage < 80){
//     console.log('The grade is C')
// }
// else if (avarage)
// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).

// for (var i = 1; i <= 100; i++){
//     if (i%3 == 0 && i % 5 == 0){
//         console.log('Fizz ', i)
//     } else if (i % 5 == 0 && i % !== 0){
//         console.log('Buzz', i )
//     } else if ( i % 3 == 0 % 5 == 0){
//         console.log(i)
//     }
// }


// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no
// var a = [5, -4.2 , 3, 7]
// var e = 3; 

// for (var i in a ){
//     if (e == a[i])
//     console.log('Yes');
//     else {
//         console.log('No');
//     }
// }

// var input = [5, -4.2, 3, 7];
// var e = 3 ;
// for (var i = 0; i < input.length; i ++){
//     if(input[i] === e){
//         console.log('The given array contains number e at index:', i)
//         break;
//     }
// }








// Write a program that multiplies every positive element of a given array by 2.

// var a =[-3, 11, 5, 3.4, -8] ;



// for (var i = 0; i < a.lenght; i ++){
//     if (a[i] > 0 ){
//         a[i] *= 2;
    
//     } 
    
// }

// console.log(a)
    



// Write a program that finds the minimum of a given array and prints out its value and
// index.
// var input = [4, 2, 2, -1, 6]
// var minimum = input[0] ;
// for (var i = 0; i < input.length; i++) {
//      if (input[i] < minimum)
//      minimum = input[i]
// }
// console.log(minimum)


// Write a program that finds the first element larger than minimum and prints out its value.
// var input = [4, 2, 2, -1, 6];
// var minimum = input[0];
// var secondMinumum= input[0]
// for (var i = 0; i < input.length; i++){
//     if (input[i] < minimum){
//         minimum = input[i];
//     }
// }

// for (var i = 0; i < input.length; i++){
//     if (input[i] < secondMinimum && input[i] > minimum){
//         secondMinumum = input[i];
//     }
// }

// console.log(minimum, secondMinumum)






// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]

// Output: 16

// var input = [3, 11, 5, -8, -1, 9];
// var positiveSum = 0;
// for (var i = 0; i < input.length; i++){
//     if(input[i] > 0){
//         positive sum += input[i;]
//     }
// }
// console.log(positiveSum)



// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetrva

// var a = [2, 4, -2, 7, -2, 4, 2];
// for (i = 0; i < a.length; i++){
//     if (a[i] == a[a.length - 1])
// }

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
for (var i = 0; i < a.length; i++);









// 2. Write a program that multiplies every positive element of a given array by 2.
// Output array: [-3, 22, 10, 6.8, -8]
// var a = [-3, 11, 5, 3.4, -8];
// var b = 1;

// for (var i in a ){
//    if (a[i] >= 0 ) {
    
//     console.log(b)
// }


// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// var a = [4, 2, 2, -1, 6] ;
// for (var i in a ){
//     if (a[i] < 0 )
//     console.log(a[i] + ' with index of ' + i)
// }


// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2







// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
// var a = [3, 11, -5, -3, 2];
// var sum = 0;
// for (var i in a ){
//     if (a[i] > 0){
//         sum += a[i]
       
//     }
// }

// console.log(sum)


// Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.



