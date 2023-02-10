// // 1. Write a functional expression that duplicates each element of a given array.
// // Input: [2, 4, 7, 11, -2, 1]
// // Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]
// var array = [2, 4, 7, 11, -2, 1];

// function duplicates (array) {
//   var newArray = [];
//   array.forEach (function (element) {
//     newArray.push(element, element);
//   });
//   return newArray;
// }

// console.log(duplicates(array));

// // 2. Write a functional expression that removes all duplicates in a given array.
// // Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// // Output: [1, 4, 8, 9, 12, 13]


// var array = [8, 13, 8, 8 , 9 , 9 , 4,  8, 9, 12, 8, 1, 1, 4, 13];

// var newArray = array.filter(function(item, pos) {
//   return array.indexOf(item) === pos;
// });

// console.log(newArray)

// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log(newArray.sort(compareNumbers));




// // 3.
// // a. Write a function that checks if a given array has odd number of elements.
// // Input: [1, 2, 9, 2, 1]
// // Output: true


// function arrChecker (array) {
//     if(array.length % 2 !==0) {
//         return 'odd array'
//     }
//     return 'even array'
// }

// console.log(arrChecker([1, 2, 9, 2, 1]))


// // b. Write a function that counts the number of elements less than the middle
// // element. If the given array has an even number of elements, print out an error
// // message.
// // Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// // Output: 4

// function countMiddleElements (array) {
//     var result;
//     if(array.length % 2 === 0) {
//       return 'Error, this is array with even number of elements';
//     } else {
//       result =  array.length / 2 - 0.5;
//       return result;
//     }
    
//   }
  
//   console.log(countMiddleElements([-1, 8.1, 3, 6, 2.3, 44, 2.11, 7, 8]))
//   console.log(countMiddleElements([8.1, 3, 6, 2.3, 44, 2.11]))


// //   4. Write a function that finds the smallest element of a given array. The function should
// //   return an object that contains the smallest value and its last position in the array.
// //   Input: [1, 4, -2, 11, 8, 1, -2, 3]
// //   Output: { minValue: -2, minLastIndex: 6 }




// function minValue(array) {
//     var minNum = Math.min(...array);
//     var minLastIndex = array.lastIndexOf(minNum);
//     return { minNum, minLastIndex };
// }
// var array = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(minValue(array));




// // 5.
// // a. Write a function that finds all the elements in a given array less than a given
// // element.
// // Input: [2, 3, 8, -2, 11, 4], 6
// // Output: [2, 3, -2, 4]

// function lessThen(array, num) {
//   var output = [];
//   array.forEach(function (el) {
//     if (el < num) {
//       output[output.length] = el;
//     }
//   });

//   return output;
// }
// console.log(lessThen([2, 3, 8, -2, 11, 4], 6));


// // b. Write a function that finds all the elements in a given array that start with the “pro”
// // substring. The function should be case insensitive.
// // Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// // Output: [’Programming’, ‘product’]

// function findElement(array) {
//   var result = [];
//   array.forEach(function (element) {
//     if (element.startsWith("Pro") || element.startsWith("pro")){
//       result[result.length] = element;
//     }
//   });
//   return result;
// }
// var res = findElement([
//   "JavaScript",
//   "Programming",
//   "fun",
//   "product",
//   "Profesor",
// ]);
// console.log(res);


// // c. Write a function that expects an array and a callback function that filters out
// // some of the elements. Use functions defined in a) or b) to test it.


// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,

// var list = [{name: 'apples', price: 100},
//         {name: 'milk', price: 80},
//         {name:'bananas', price: 150}]

// function totalPrice(input){
//   totalSum = 0;
//   input.forEach(function(element){
//     totalSum += element.price
//   })
//   return 'Total sum of groceries is ' + totalSum;
// }
// var result = totalPrice(list);
// console.log(result)



// function avgPrice(totalSum){
//   var averagePrice = totalSum / list.length;
//   return 'Average price of groceries is ' + averagePrice;
// }

// var averagePrice = avgPrice(totalSum);
// console.log(averagePrice)




// function mostExpensive(input){
//   var maxPrice = 0;
//   for (var i = 0; i< input.length; i++){
//     var element = input[i];
//     if (element.price > maxPrice){
//       maxPrice = element.price;
//     }
//   }
//   return 'Most expensive item costs ' + maxPrice;
// }
// var mostExp = mostExpensive(list);
// console.log(mostExp)



// 7.



// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).


// var str = 'this is a string';
// var strcopy = str.split();
// console.log(strcopy)

// a. Write a function that checks if a given string is written in all capitals.

function stringValidator(string){
  var result = true;


  string.split('').forEach(function (element){
    if (element !== element.toUpperCase()){
      result = false;
    }
  })
  return result;
}

var res = stringValidator('JOVAN');
console.log(res)

// b. Write a function that checks if a given string contains any digits.

function passwordValidator(string){
  var result = false;
  string.split('').forEach(function(element){
    if(!isNaN(parseFloat(element)))
    result = true;
  })

return result ;
}

var res = passwordValidator('1van') ;
console.log(res)


// c. Write a function that checks if a given string is a valid hexadecimal color.

function colorValidator(string) {
  if (string.charAt(0) !== '#') {
      return false;
  }
  if (string.length !== 7) {
      return false;
  }
  for (var i = 1; i < 7; i++) {
      var hexadecimalNumber = parseInt(string[i],16);

      if (isNaN(hexadecimalNumber)) {
          return false;
      }
  }
  return true;
}

var stringColor = '#ff4589'
var result = colorValidator(stringColor);
console.log(result);


// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

function yearValidator (num){
  if(num > 1900 && num < 2018){
    return true;
  }
  return false;
}

var year = 1999;
var result = yearValidator(year);
console.log(result)


// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).


function validator(){
  return {
  stringValidator : stringValidator,
  passwordValidator : passwordValidator,
  colorValidator : colorValidator,
  yearValidator : yearValidator,
  }
}

var validation = validator();
console.log(validation)



// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days


var birthday = new Date(1985, 0, 1);

var today = new Date();

birthday.setFullYear(today.getFullYear());
if (today > birthday) {
  birthday.setFullYear(today.getFullYear() + 1);
}


var diff = Math.floor((birthday - today) / (1000*60*60*24));
console.log(diff)


function thalapathyBirthday(month, day) {

  var manos = new Date(),
    vijay = manos.getFullYear(),
    next = new Date(vijay, month - 1, day);

  manos.setHours(0, 0, 0, 0);

  if (manos > next) next.setFullYear(vijay + 1);

  return Math.round((next - manos) / 8.64e7);
}

var vajasan = thalapathyBirthday(06, 22);

if (vajasan === 0) console.log('Happy Birthday Thalapathy!');

else console.log(vajasan + ' day' + (vajasan > 1 ? 's' : '') + ' to go thalapathy birthday');


today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");


const remainingBirthDays = () => {
  const birthdate = new Date("06-15-2023");
  const today = new Date();
  const perDay = 1000 * 60 * 60 * 24;
  const remainDaysInMilliSeconds = birthdate - today;
  const remainingDays = Math.ceil(remainDaysInMilliSeconds / perDay);
  console.log(`${remainingDays} Days Remaining for your Bday`);
  };
  
  remainingBirthDays();