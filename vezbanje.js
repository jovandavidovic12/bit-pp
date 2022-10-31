// ..Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
// result in the console with the specified sign.
// Sample numbers: 3, -7, 2
// Output: The sign is -


let a = 3; b = -12; c = 2;
if ((a * b * c) < 0 ){
    output = 'Sign is -'
} else {
    output = 'Sign is +'
}
console.log(output)



// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
// console.
// Sample numbers: -5, -2, -6, 0, -1
// Output: 0

let a = -5; b = -2; c = -6; d = 55; e = -1;
if (a > b && a > c && a > d && a > e) {
    result = a + ' is the largest number';
} else if (b > c && b > d && b > e) {
    result = b + ' is the largest number';
} else if (c > d && c > e) {
    result = c + ' is the largest nubmer ';
} else if (d > e) {
    result = d + ' is the largest number';
} else {
    result = e + ' is the largest number';
}

console.log(result);


// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1




//  Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
// divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10 Sample input: 7
// Output: 10 / 2 = 5 Output: X

let num = 10; 
if(typeof num == 'number'){
   console.log('This is a number')
} else if (num % 2 === 0){
    console.log('10 / 2 = 5')
}



// Task 5. Write a program that compares two numbers and displays the larger. Display the result in
// the console.


let a = 1; b = 2;
if (a > b){
    console.log(a);
} else {console.log(b)}

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F


let f = (9 * c / 5) + 32;
let c = 60;
console.log(f + c)

// Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 . Output : 38
// ( Math.abs( number ) )
// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48
// Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

// Output : - Output : true Output : true

// Task 10. Write a JavaScript program to check a given integer is within 20 to100 or 100 to
// 400, and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400