// 1. Write a program that checks if a given element e is in the array a.
//output=YES;  

// let e = 3;
// let a = [5, -4.2, 3,7]; 

function checker(arr, n) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === n) {
            return 'Element is in arr';
        }
        else {
            return 'Element is not in arr';
        }
    }
}
console.log(checker([5, -4.2, 3, 7], 5));


// 2. Write a program that multiplies every positive element of a given array by 2.

function multiplier(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= n;

        }


    }
    return arr;
}

var result = [1, 2, 4];
console.log(multiplier(result, 2));


// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.

function minimum(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(minimum([4, 2, 11]))


// var arr = [2, 4, -9, 4, 4, 0, -8]
// var min = arr[0];
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i];
//     }
//     console.log(min);
// }

// 4. Write a program that finds the second smallest number and prints out its value.



function secondMinimum(arr) {
    var min = arr[0];
    var minMin = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            result = min;
        }

    }

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < minMin && arr[i] > min) {
            minMin = arr[i];
        }

    }
    return minMin;
}

console.log(secondMinimum([-2, -4, -6]))


// 5. Write a program that calculates the sum of positive elements in the array.

function sums(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            res += arr[i]
        }
    } return res;
}

var result = [1, 2]
console.log(sums(result));


// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.


function sym(arr) {

    var isSymetric = false;
    var j = arr.length - 1;
    for (var i = 0; i < arr.length; i++) {
        if (i == j) {
            break;
        }

        if (arr[i] == arr[j]) {
            isSymetric = true;

        } else {

            isSymetric = false;
            break;

        }
        j--;

    }
    return isSymetric;
}

console.log(sym([[2, 2, 5, 4, 2, 2]]))
// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.


function interwine(arr1, arr2) {
    var res = [];
    for (var i = 0; i < arr1.length; i++) {

        res.push(arr1[i]);
        res.push(arr2[i]);
    }
    return res;
}
var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
console.log(interwine(a, b))

// 8.Write a program that concatenates two arrays.

function concat(arr1, arr2) {
    result = arr1.concat(arr2);
    return result;
}
var a = [1, 2, 3, 4];
var b = [2, 3, 5, 6,];
console.log(concat(a, b))
// 9. Write a program that deletes a given element e from the array a.
function deleter(arr, del) {
    res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != del) {
            res.push(arr[i]);
        }
    } return res;
}

var a = [4, 6, 2, 8, 2, 2];
var b = 2;
console.log(deleter(a, b));


//  1. Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// input = [3, 500, 12, 149, 53, 414, 1, 19];
// output= [3, 1, 12, 149, 53, 414, 500, 19];

var arr = [3, 500, 12, 149, 53, 414, 1, 19];
function switcher(arr) {

    var min = arr[0];
    var max = arr[0];
    var newArr = arr;
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            var minInd = i;
        }


        if (max < arr[i]) {
            max = arr[i];
            var maxInd = i;
        }
    }
    newArr[minInd] = max;
    newArr[maxInd] = min;
    return newArr;
}


var swc = switcher(arr);
console.log(arr);




var array = [3, 500, 12, 149, 53, 414, 1, 19];
function switchPlaces(array) {
    var min = array[0];
    var max = array[0];
    var newArray = array;

    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            var minIndex = i;
        }

        if (max < array[i]) {
            max = array[i];
            var maxIndex = i;
        }
    }
    newArray[minIndex] = max;
    newArray[maxIndex] = min;

    return newArray;
}

var func = switchPlaces(array);
console.log(func);


// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function multiplier(arr){

    var output = [];
for(var i = 0; i < arr.length; i++){

    output[i] = arr[i]/2 + 5;
if ( output[i] == 0){
    output.splice(0,20);
}
}
return output;



}
console.log(multiplier([3, 0, -10, 149, 53, 414, 1, 19]))





// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

var a = 1000;
var b = 500;
function math(a, b) {

    var sum = 0;
    for ( var i = 1; i <= 1000 ; i++ ){
        if (i % 2 === 0 ){
            sum += i;
        
    } else if( i % 2 === 1 && i <= b){
        sum -= i ;
    }}
    sum *= 12.5
    return sum;
}


console.log(math(a, b))

// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
// input = ['M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A']


// 8. Write a program that takes a string and prints its characters out in reversed order in the
// console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB


input = 'Belgrade Institute of Technology';
function reverseString(input) 
{
    return input.split("").reverse().join("");
}

console.log(reverseString(input))

// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).




// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only
//     by 1 and by itself).
//     Input: 17 | 15
//     Output: true | false


let number = 17;
function checkForPrime(num){

    for(let i = 2; i < num; i++ ){

        if(num % i == 0){
            return console.log(false);
        } 
    } 
    return console.log(true);
}

checkForPrime(number);

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

var input = eye;
function palindromeChecker(input){


}



// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9