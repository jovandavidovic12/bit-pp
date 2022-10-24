// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.
// for (i = 1; i <= 15; i++){
//     if (i % 2 === 0)
//     console.log(i + ' is Even number') ;
//     else {
//         console.log(i + ' is Odd number')
//     }
// }

// 2. Write a program to sum the multiples of 3 and 5 under 1000.

// var sumOfMultiples = 0;
// for (i = 1 ; i <= 1000; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//         sumOfMultiples += i ;
        
//     }
// }

// console.log(sumOfMultiples)

// 3. Write a program to compute the sum and product of an array of integers.

// var aOfIntegers = [1, 2, 3, 4, 5, 6];
// var sumOfIntegers = 0;
// var prodOfIntegers = 1;
// for(i = 0; i < aOfIntegers.length; i += 1){
//     sumOfIntegers += aOfIntegers[i];
//     prodOfIntegers *= aOfIntegers[i]

// }

// console.log('Sum: ' + sumOfIntegers + ' Product: ' + prodOfIntegers)

// 4. Write a program which prints the elements of the following array as a single string.
// var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
// for (var i in x ) {
//     console.log(typeof x[i])

// }


// 5. Write a program that prints the elements of the following array.

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
// for(var i in a){
//     console.log(a[i]);
  
// }

// 6. Write a program that outputs the sum of squares of the first 20 numbers.
// var sumSquare = 0;
// var numbers = 20;
// i = 1; 
// for (i = 1; i <= 20; i++){
//     sumSquare += i * i ;
//     console.log(sumSquare)
// }


// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no
// var a = [5, -4.2 , 3, 7]
// var e = 3; 

// for (var i in a ){
//     if (e === a[i])
//     console.log('Yes');
//     else {
//         console.log('No');
//     }
// }


// 2. Write a program that multiplies every positive element of a given array by 2.
// Output array: [-3, 22, 10, 6.8, -8]
// var a = [-3, 11, 5, 3.4, -8];
// var b = 1;

// for (var i in a ){
//    if (a[i] >= 0 ) {
    
//     console.log(b)
// //    }
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
