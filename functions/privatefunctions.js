// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

var array = [4, 5, 11, 9];
(function () {

  var newArray = [];
  var firstElement = array[0];
  var lastElement = array[array.length - 1];

  for (var i = 0; i < array.length; i++) {

    if (i === 0) {
      newArray[newArray.length] = lastElement;
    } else if (i === array.length - 1) {
      newArray[newArray.length] = firstElement;
    } else {
      newArray[newArray.length] = array[i];
    }
  }

  console.log(newArray);
})();


var a = 4;
var b = 5;

var area = function (a, b) {
  var surface = a * b;
  var string = "a = " + a + " , b = " + b + ", surface = " + surface;
  return string;
};

console.log(area(a, b));


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

var string = "jovan davidovic";

var email = function (string) {
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      result += ".";
    }
    else if (i === string.length - 1) {
      result += string[i];
      result += "@gmail.com";
    }
    else {
      result += string[i];
    }
  }

  return result;
}

console.log(email(string));


// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2


var transformer = (function (sentence, letter, replacementCharacter) {
  var counter = 0;
  var result = '';
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() !== letter.toLowerCase()) {
      result += sentence[i];
      continue;
    }

    result += replacementCharacter;
    counter++;

  }
  return `${result}, ${counter}`;
})('prmmmmograMmmming', 'm', '*')
console.log(transformer)



// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28


var getNumberToDecimalConverter = function (base) {
  if (!base) {
    return 0;
  }
  function convert(number) {
    return parseInt(number, base);
  }
  return function (value) {
    return convert(value);
  }
}
var octalToDecimal = getNumberToDecimalConverter(8);
var num = octalToDecimal('034');
console.log(num)


// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function checkType(data, type){
  if(!data || typeof data != type){
    return false;
  }
  return true;
}


var passwordChecker = function (password, success, error) {
  // if (!success || typeof success != 'function') {
  //   return false;
  // }
  // if (!error || typeof error != 'function') {
  //   return false;
  // }
  if(!checkType(success, 'function') || !checkType(error, 'function')){
    return false;

  }

  function isNumeric(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

  function isPasswordValid(password){
    if(typeof password != 'string'|| password.length < 6 ){
      return false;
    }

    for (var i = 0; i < password.length; i++){
      if(isNumeric(password[i])){
        return true;
      }
    }

    return false;

  }


  var isValid = isPasswordValid(password);
  if(isValid){
    return success();

  }

  return error();


}

var success = function(){
  console.log('Your Password is Valid')
}

var error = function(){
  console.log('Your Password is invalid')
}

passwordChecker('sdfe123', success, error);


// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var filter = function (input, conditionChecker){
  if (!checkType(conditionChecker, 'function') || !input || input.lenght == 0){
    retunr input;
  }

  var result = [];
  for (var i = 0)
}



// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd”
// Output: true
// Input: “1bser9re”
// Output: false

function checksIfcontains(digit, string) {
  for (var i = 0; i < string.length; i++) {
      if (string[i] === digit) {
          return true;
      } 

      }
      return false;
  }

console.log(checksIfcontains("5", "15bser9re"));



// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with
// ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”


function replace(sentence, element, replacement){

  if(!sentence || sentence.length == 0 || !element || element.length == 0 || !replacement || replacement != 1){
    return sentence;
  }
  var replacementString = '';
  for(var i = 0; i < element.length; i++){
    replacementString += replacement;
  }
  var result = '';
  for (var i = 0; i < sentence.length; i++){
    var z = i;
    var word = '';
      for(var j = 0; j< element.lenth; j++){
        if (sentence[z]) {
          word += sentence[z];
          z++;
        }
      }
      if(word.toLowerCase() = element.toLowerCase()){
        result += replacementString;
        i += (element.length - 1);
      } else {
        result += sentence[i];
      }
  } 
  return result;

}

console.log(replace('Programming in JS is super interesting', 'JS','*'))

/*3.Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”
*/
function insert(string, char, pos) {
  var res = "";
  for (i = 0; i < string.length; i++) {
      if (i === pos - 1) {
          res += char;
      }
      res += string[i];
  }
  return res;
}
console.log(insert("Goo morning", "d", 4));



// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”


function deleter(string, position){
  var res = '';
  for ( i = 0; i < string.length; i++){
    if ( i === position){
      continue;
    }
    res += string[i];
  }

  return res;
}

console.log(deleter('goodd morning!', 3))


// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]


function everySecondDelete(array){
  var newArray = [];
  for (var i = 0; i < array.length; i+=2){
    newArray[newArray.length] = array[i];
  }
  return newArray;
}

console.log(everySecondDelete([3, 5, 1, 8, 90, -4, 23, 1, 67]));



// 8. Write a function that sorts an array of strings by the number of appearances of the letter
// ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’, ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
function sortArrayByInputLetter(input, letter){
  if(!input || input.length == 0 ||!letter || letter.length != 1){
    return input;
  }

  var result = [];
  for ( var i = 0l i < input.length; i++){
    var counter = 0;
    for(var j = 0; j < input[i].length; j++){
      var element = input[i][j];
      if (element == letter){
        counter ++;
      }
    }

    if ( result.lenth > 1) {
      var maxCount = 0;
      for(var z = 0; z < result.length; z++){
        if (result[z][1] > maxCount){
          maxCount = result[z][1];

        }
      }

      if(maxCount < counter){
        result = [input[i], counter.concat(result)];
      }
    } else {
      result.push([input[i], counter])
    }
  }
  return result;
}

console.log(sortArrayByInputLetter(['apple', 'tea', 'amazing', 'morning', 'JavaScript']))

function selectOddNumbers(numbers) {
  return numbers.filter(function(number) {
    return number % 2 !== 0;
  });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = selectOddNumbers(numbers);

console.log(oddNumbers); // [1, 3, 5, 7, 9]



function sortByA(strings) {
  return strings.sort(function(a, b) {
    // Count the number of "a" or "A" in each string
    var aCount = (a.match(/a/gi) || []).length;
    var bCount = (b.match(/a/gi) || []).length;
    // Sort the strings based on the number of "a" or "A"
    if (aCount < bCount) {
      return -1;
    } else if (aCount > bCount) {
      return 1;
    } else {
      return 0;
    }
  });
}

var strings = ['apple', 'tea', 'amazing', 'morning', 'JavaScript'];
var sortedStrings = sortByA(strings);

console.log(sortedStrings); // ['morning', 'apple', 'tea', 'JavaScript', 'amazing']