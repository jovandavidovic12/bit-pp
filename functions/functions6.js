// 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
// E, I, O, and U.





function vowCounter(input) {
    var lowerCase = input.toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var res = 0;
    for (var i = 0; i < lowerCase.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (lowerCase[i] === vowels[j]) {
                res += 1;
            }
        }
    } return res;
}

console.log(vowCounter('JOVAN davidovic'))


// 2. Write a function that combines two arrays by alternatingly taking elements.
// ['a','b','c'], [1,2,3] ; ['a',1,'b',2,'c',3]

var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];
function newList(alph, num) {
    var res = [];
    for (var i = 0; i < alph.length; ++i) {
        res.push(alph[i]);
        res.push(num[i]);
    }
    return res;
}
console.log(newList(['a', 'b', 'c'], [1, 2, 3]));


// 3. Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

function fillArray(result, i ){
    for(var j = 1; j <= i; j++){
        result.push(i);

    }
}

function diamondArrays(num){

    var result = [];
    for(var i = 1; i < num; i++){
        for(var j = 1; j <= i; j++){
            fillArray(result, i);

        }
        for(var i = num - 1; i >= 1 ; i--){
            fillArray(result, i);
        }
    }
 return result;

}

console.log(diamondArrays(5))



// prime numbers

function primeNumbers(num){

    var result = [];
    for( var i = 2; i <= num; i++){
        var notPrime = false;
        for(var j = 2; j <= i; j++){
            if(i % j === 0 && i != j){
                notPrime = true;
                break;
            }
        }
        if(!notPrime){
            result.push(i);

        }

    } console.log(`There are ${result.length} prime numbers ` + result);
}

primeNumbers(19);


//validate password 

function checkLetter(password, letterCase){
    var result = false;
    for( var i = 0; i < ){
        if(isLetter(password[i])){
            if(letterCase && password[i] == password[i].toUpperCase()){
                return true;
            } else if (!letterCase && password[i] === password[i].toLowerCase()){
                return true;
            }

        }
    } 
    return false;
}

function validatePassword(password){
    if(password.length < 6 || password.length > 24){
        console.log('Password must be between 6 and 24');
        return false;
    }
    var containsUpper = false;
    for(var i = 0 ; i < password.length; i++){
        if(isLetter(password[i]) && password[i] == password[i].toUpperCase()){
            containsUpper = true;

        }
    }

    if(!containsUpper){
        console.log('Password must contain at least one capital letter');
        return false;
    }

    var containsLower = false;

}