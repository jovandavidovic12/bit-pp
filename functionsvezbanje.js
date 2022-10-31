// // 1. Write a program that calculates the maximum of two given numbers.

function maxOfTwoNumbers(a, b) {
    if (a > b) {
        return a;
    }
    return b;

}

result = maxOfTwoNumbers(5, 1)
console.log(result)


// // 2.Write a program that checks if a given number is odd.

function oddNum(a) {
    if (a % 2 == 0) {
        return 'The Number ' + a + ' is Even ';
    }
    else {
        return 'The Number ' + a + ' Is odd'
    }
}

var result = oddNum(8);
console.log(result);  


// // 3 Write a program that checks if a given number is a three digit long number.

function three(a){
    var b = a + '';
    if (b.length === 3){
        return 'Is three digits long';
    } else {
        return 'Number is not three digits long';
    }
}
var result = three(222);
console.log(result)


// // 4. Write a program that calculates an arithmetic mean of four numbers.

function artM (a, b, c, d){
    return(a+b+c+d)/4;
}

var result = artM(3,2,5,9);
console.log(result);

// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****

// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *


// 7. Write a program that calculates a number of digits of a given number.

function nOfDigs(a){
    var b = a + '';
    var result = b.length;
    return result;
}

var num = nOfDigs(232)
console.log(num)


// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


function appearances(a,b){
    var app = 0;
    for (var i = 0; i< a.length; i++){
        if (a[i] === b){
            app ++;
        }
    } return app;
}

var result = appearances([7,7,7,7,7,7], 7);
console.log(result)

// 8. Write a program that calculates a number of appearances of a given number in a
// given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

// function sumOfElements(input){
//     var res = 0;
//     for (var i = 0; i <input.length; i++){
//         if(input[i] %2 != 0){
//             res += input[i];
//         }
//     } 
//     return res;

// }
// console.log(sumOfElements([1,2,3,4,5,6,7]))

// function sumOfNum(a){
//     var sum = 0;
//     for(var i = 0; i < a.length; i++){
//         if(a[i] % 2 !== 0){
//             sum += a[i];
//         }
    
//     } return sum;
// }

// var result = sumOfNum([3,3,3,3,3]);
// console.log(result)


// 9. Write a program that calculates the sum of odd elements of a given array.

function oddElements(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 1){
            sum += arr[i];
            sum++;
            console.log(sum)
        }
    } return sum;
}

console.log(oddElements([1], [3], [3]));
// 10. Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.


function calculateApp(input, value){
    var counter = 0;
    for(var i = 0; i< input.length; i++){
        if(value === input[i]){
            counter++
        }
    }
    return counter;
}

console.log(calculateApp([1,2,3,1,3,2,1,2,2,3,1], 1))

// function appearancesOfLetter (a , b){
//     var app = 0;
//     var c = a;
//     for(i = 0; i < c.length; i++){
//         if(c[i] === b ){
//             app++;
//         }
//     } return app;
// }
// var result = appearancesOfLetter('Jovan Davidovic', 'a');
// console.log(result)

// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.


// function concat(input, n){
//     var result = '';
//     for(var i = 0; i < n; i++){
//         result += input;
//     }
//     return result;
// }
// console.log(concat('test',4))

// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true 
// 12 -> false 

function checker(a) {
    if (typeof a === 'string'){
        return 'This is a string'
    } else {
        return 'This is not a string '
    }
}

var res = checker(3333);
console.log(res)


function checker(a){
    return typeof a === 'string';
}
var result = checker('3333');
console.log(result);


// 2. Write a function to check whether a string is blank or not.
// "my random string" -> false
// "" -> true 
// 12 -> false 
// false -> false


function checker(a){
    if (a === ""){
        return true;
    } else {
        return false;
    }
} 
var res = checker('');
console.log(res)


// 3. Write a function that concatenates a given string n times (default is 1).

function concat(word, times){
    var concatWord = '';
    if(typeof word !== 'string' || times < 1){
        console.log('Error')
    } else {
        for(var i = 1; i <= times; i++){
            concatWord += word;
        }
    } return concatWord
}

var result = concat('Ha', 3);
console.log(result)


// 4. Write a function to count the number of letter occurrences in a string.
// "My random string" , "n" => 2

function charOccurance(word, character){
    var res = 0;
    
    for (var i = 0; i < word.lenght; i++){
        if(word[i] === character){
            res++;
        }
        
    }
     return 'Letter ' + character + ' Occurrs ' + res + ' In a word ' + word
}

var result = charOccurance('Jovan', 'J');
console.log(result)





//  5 Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.
function firstOccurance(string, char) {
    for(var i = 0; i < string.length; i++) {
        if (string[i] === char) {

            return i;//+1;  

        }
    }

    return -1;
}

var result = firstOccurance('Jovan', 'J');
console.log(result)

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function lastOccurrence(string, char){

    for(let i = string.length - 1; i >= 0; i--)   {

        if(string[i] === char){
            return i;//+1;
        }
    } 
}

console.log(lastOccurrence('joja', 'j'));

// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

let string = 'Aleksandar Bogosavljevic ';
let array = [];

function convertor(str, arr){

    for(let i = 0; i < str.length; i++){

       
        if(str[i] == ' '){
            arr.push(null);
        } else{
            arr.push(str[i]);
        }
    }
    
}

convertor(string, array);
console.log(array);

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

let number = 13;
function checkForPrime(num){

    for(let i = 2; i < num; i++ ){

        if(num % i == 0){
            return console.log(num + ' is NOT prime number');
        } 
    } 
    return console.log(num + ' is prime number');
}

checkForPrime(number);




//9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash). 



function replaceSpaces(string, separator){
    var output = '';

}






// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.
['1', '21', undefined, '42', '1e+3', Infinity]


function conver(a){

    var stringToNum = parseInt(a);
    for (var i = 0; i > stringToNum.lenght; i++){
        if(stringToNum[i] === number);
        return +stringToNum;
    }
    
       

}

result = conver(['1', '21', undefined, '42', '1e+3', Infinity]);


// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

// WOMEN 60 MEN 65 -------- year 2022 ----- 


function retirement(years, sex) {
    var year = 2022;
    var res = year - years;
    var result = '';
    if (sex === 'female') {
        if (res >= 60) {
            result = 'You are old enough to retire';
        }
        else if (res < 60) {
            result = 'You need some more ' + (60 - res) + ' Years';
        } else {
            result = 'Enter some other age ';
        }
    }
    else if (sex === 'male') {
        if (res >= 65) {
            result = 'You are old enough to retire';
        } else if (res < 65) {
            result = 'You need some more ' + (65 - res) + ' Years'
        } else {
            result = 'Enter some other age ';
        }
    } 
    else {
        result = 'Something is wrong';
        
    }
    
    return result;

}


console.log(retirement(1300, 'male'))


// 1. Write a program to insert a string within a string at a particular position (default is 1,
//     beginning of a string).


function insert(glavna, ubacujemo, pozicija){
    if(typeof(pozicija)== "undefined"){              //Ukoliko je tip parametra ubacujemo == nedefinisan, default pozicija ce biti 0//
        pozicija = 0;
    }
    if(typeof(ubacujemo) == "undefined"){           //Ukoliko je tip parametra ubacujemo == nedefinisan, ubacujemo ce biti string koji unesemo kao parametar//
        ubacujemo = "";
    }
    return glavna.slice(0,pozicija) + ubacujemo + glavna.slice(pozicija);  ///U sustini biramo poziciju gde ce novi string biti ubacen pomocu slice metode//
}
console.log(insert('My random string', 'JS '))
console.log(insert('My random string', 'JS ', 10))

// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.

// array = ['Jovan', 'Davidovic', 2, 5, NaN, undefined, null, 'javascript', Infinity];


function newString(array) {
    var string = '';
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" || isFinite(array[i]) && typeof array[i] !== "object") {  //proverava tip elementa u zadatom arrayju , proverava da li je broj finite, odnosno da nije infinite, i da tip nije objekat. ( filteruje )
            string += array[i]
        }  //vraca nam podatke u novi string koji smo prethodno definisali u funkciji. 
    }
    return string; // return ==== novi string 
}
var someArr = ['Jovan', 'Davidovic', 2, 5, NaN, undefined, null, 'javascript', Infinity];
console.log(newString(someArr))


// 4. Write a function that reverses a number. The result must be a number.

function reverseNum(num){

     num = num + '';
    let output = '';
    let lastIndex = num.length - 1;
    for (let index = 0; index < num.length; index++){
        let element = num[lastIndex - index];
        output += element
    }
    let reverseNum = parseFloat(output);
    return reverseNum;
}
let result = reverseNum(1234)
console.log(result)

5. Write a function to get the last element of an array. Passing a parameter 'n'; will return the
last n; elements of the array.


function lastElements(arr, num){
    let index = 0;
    for (index = 0; index > 0, i--){


    }
}