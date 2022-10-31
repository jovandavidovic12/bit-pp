

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


