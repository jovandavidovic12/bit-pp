// 1. Write a code to find the sum of first 10 natural numbers and show 
// that sum on screen.


// var number = 10; 
// var i = 1 ;
// var sum = 0 ;

// for (i=1; i <= number; i++)
// {
//     sum += i
// }   console.log(sum) 


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

// var array = [1, 2, 3, 4, 5, 6],
//     s = 0,
//     p = 1,
//     i;
// for (i = 0; i < array.length; i += 1) 
//    {
//     s += array[i];
//     p *= array[i];
//     }
// console.log('Sum : '+s + ' Product :  ' +p); 


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


// 1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
// number is odd or even, and display a message to the screen.

// for (i = 0; i <= 15; i++){
//     if (i % 2 == 0){
//         console.log('this is even number' , i)
//     } else {
//         console.log('This is odd number', i)
//     }
// }
// 2. Write a program to sum the multiples of 3 and 5 under 1000.
// var sum = 0;
// for (i = 1; i < 1000; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum += i
//     }
    
//     }
//     console.log('Sum is : ' + sum)

// 3. Write a program to compute the sum and product of an array of integers.

// var a = [1, 2, 3, 4, 5, 6];
// var sumOfIntegers = 0;
// var prodOfIntegers = 1 ;
// for (i = 1; i <= a.length; i ++){
//     sumOfIntegers += i;
//     prodOfIntegers *= i;
// }
// console.log(sumOfIntegers, prodOfIntegers)


// 4.  Write a program which prints the elements of the following array as a single string.
//  var a = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
//  var b = '';
//  for (i = 1; i < a.length; i++){
//     b += a[i];
//  }
// console.log(typeof b)


// 5. Write a program that prints the elements of the following array.
// var array = [
// [1, 2, 1, 24],
// [8, 11, 9, 4],
// [7, 0, 7, 27]
// ];
// for (var i in array) {
//     console.log("row " + i);
//     for (var j in array[i]) {
//         console.log(" " + array[i][j]);
//     }
// }
// for (var i in a){
//     console.log(i)
//  for (var j in a){
//     console.log(a[i][j])
// }
// }

// 6 Write a program that outputs the sum of squares of the first 20 numbers.
// var sum = 0;
// for (i = 0; i <= 20; i++){
//     sum += i*i;
// }
// console.log(sum)

// 7 Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// var students = [
//     ['David', 80],
//     ['Marko', 77],
//     ['Dany', 88],
//     ['John', 95],
//     ['Thomas', 68]
// ];

// var avarage = 0;
// var sumOfMarks = 0;

// for(i = 1; i < students.length; i++){
//     sumOfMarks +=students[i][1];
    
// }

// var avarage = sumOfMarks / students.length
// console.log('Avg grade' + avarage);

// if (avarage < 60){
//     console.log('Grade is : F')}

//     else if ( avarage < 70){
//         console.log('Grade is D');
//     }
//     else if ( avarage < 80){
//         console.log('Grade is C');
//     }
//     else if ( avarage < 90){
//         console.log('Grade is B');
//     }
//     else if ( avarage < 100){
//         console.log('Grade is a');
//     }

// / Write a program that uses console.log to print all the numbers from 1 to 100, with two
// exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
// divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
// program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
// &quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).


// for (i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0){
//         console.log('Fizz Buzz')
//     } else if (i % 3 == 0) {
//         console.log('Buzz')
//     } else if (i % 5 == 0){
//         console.log('fizz')
//     } else{
//         console.log(i)
//     }
//     }


// 1. Write a code to find the sum of first 10 natural numbers and show that sum on screen.
// var sum = 0;
// for(i = 0; i < 10; i++){
//     sum += i;
// }
// console.log(sum)



// 2. Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
// var cube = 3;
// var result = 1;
// for(i = 0 ; i < 2; i++){
//     result *= cube;
// }
// console.log(result)

// 3. Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
// var result = 1;
// for (i = 1; i <=5; i++){
//     result *= i;
// }
// console.log(result)

// 4. Write a code to display the n terms of even natural number and their sum.
// Example:
// Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".

// var input = 5; 
// var result = '';
// for(i = 1; i <= input *2; i++){
//     if(i % 2 == 0){
//         if(i < input * 2) {
//             result += i + ','
//         } else if ( i == input * 2){
//             result += i + ','
//         }
//     }
// }
// console.log('Even numbers are ' + result)


// 5.Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".

// var a = 232;
// var sum = 0;
// var stringA = a.toString();
// for (i = 0; i < stringA.length; i++) {
//     var num = Number(stringA[i])
//     sum += num;
// }
// console.log(sum)

// 6. Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word".

// var a = 'Eclip542se';

// 7. Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].var input = 5;

// var inputArray = [1, 3, 32, '$', 'g', 'h', 't', 's', 'c', 66, 23, 'h2'];
// var a = 'c';
// var i = 0;
// for(i = 0; i < inputArray.length; i++){
//     if (inputArray[i] === a){
//         break;
//     }
// }
// console.log(i)


// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

// a = [5, -4.2, 3, 7] ;
// e = 3;
// for (i = 0; i < a.length; i++){
//     if(e == a[i]){
//         console.log('yes')
//     }
// }




// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
// var array = [-3, 11, 5, 3.4, -8]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element > 0) {
//         array[index] = element * 2;
//     }
    
// }

// console.log(array);
// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
// 4. Write a program that finds the first element larger than minimum and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2
// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.
// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// 9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

// Output array: [4, 6, 8]
// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.




var b = 0xA41;
console.log(typeof b)
console.log(typeof typeof 1)
console.log(2 < 3 < 1)
var a = [[1, 2, 3], [4,5,6], 8, [9,10]];
console.log(a[3][0])
console.log('good morning')
console.log(2 < 3 + 5)
var x ;
console.log(x)

var arr = ['s', 'c', 'r', 'i', 'p', 't']
arr.length = 0;
console.log(arr)


var arr = ['a,', 'e', 'gh', 'jkl']
console.log(arr[2])


var a = 4;
var b = 3;
if (a = b){
    console.log('equal') 
}
    else {
        console.log('notqe') ;
    }

    var a = 12;
    var res = 2;
    if  ( a > 10){
        res = res + 2;
    } else {
        res = res - 2
    }
    console.log(res)


    var x = [1, 8 , 9, 9, 2];
    console.log(x[13])
    console.log(typeof 2 + 3)

    var x = 10;
    var y = 5;
    console.log(x + 'y = ' + (x+y));



    var a = 10; b = 5;
    var result = a || b++;
    console.log(a,b)

    console.log(2e2 + 1)


    console.log(2 > 10 ? 'two' : 5 > 3 ? 'five' : 'three')

    var x = 10;
    var y = 5;
    console.log(x + 'y =' x+y);


    console.log([2, 3, 4] == [2, 3, 4])

    
    var a = 1;
    var y = 3;
    var z = 8;
    var x = y = z = 8;
    console.log(x, y, z)

    var n = 10;
    n *= 4;
    console.log(n)

    var a = [2,3 , 'abc', 11, -7];
    console.log(a[a.length - 1])

    console.log(2 < 3 < 1)


    var x = 10;
    var y = 5;
    console.log(x + 'y = ' + x + y)

    var a = [2, 3, 4] ;
    var b = [2, 3, 5];
    if (a == b){
        console.log('true')
    } else {
        console.log('false')
    }


    var a = 3
    var b = 4;
    var c = (a = b) ;
    console.log(typeof c)




    