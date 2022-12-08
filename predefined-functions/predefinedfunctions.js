// 1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
// ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
// pokrene.



// 2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
// prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
// nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
// godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
// prestupna).

var input = 2000;
function yearChecker(input){

    if (input % 400 == 0){
        return 'Godina je prestupna';
    } else if ( input % 100 !== 0 && input % 4 === 0){
        return ' Godina je prestupna';
    } else {
        return ' Godina nije prestupna ';
    }
}
console.log(yearChecker(input))

// 3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
// samoglasnika i koliko suglasnika.
var a = 'Jovan Davidovic'
function counter(input){

    var res = 0;
    for(var i = 0; i < input.length; i++){
        if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u' || input[i] == 'A' || input[i] == 'E' || input[i] == 'I' || input[i] == 'O' || input[i] == 'U'){
            res ++ 
        } 

    } return res;
}
console.log(counter(a))


// 4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
// podataka pojedinačnih elemenata ulaznog niza.
var input = [12, undefined, 'string', NaN, null];
function typeChecker(input){
    newInput = [];
    for(var i = 0; i < input.length; i++){
        newInput += typeof(input[i]);
        newInput.toString();
        
     }
   return newInput;
}

console.log(typeChecker(input))


// 5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
// ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
// “pp”, “as23s”, “00sd”] =&gt; rezultat [“pp”].

var input = ['12bb', 'pp', 'as23s', '00sd'];
function checkIfThereIsANumber(array) {
    if (!array || array.length == 0) {
        return;
    }

    var result = [];
    for (var i = 0; i < array.length; i++) {
        var containsNumber = false;
        for (var j = 0; j < array[i].length; j++) {
            var num = Number(array[i][j]);
            if (!isNaN(num)) {
                containsNumber = true;
                break;
            }
        }

        if (!containsNumber) {
            result.push(array[i])
        }
    }

    return result;
}

console.log(checkIfThereIsANumber(['12bb', 'pp', 'as23s', '00sd']))








// 7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
// bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
// se ne ponavljaju.


var input = [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8];
function nonRepetitive(input){
var count = 0;
new array = [];
    for(var i = 0; i < input.length; i++){
        for(var j = 0; j < input.lenght; j++){
            if(input[i] == input[j] && i!=j){
                count++;
            }
        } 
        if(count == 0 ){
            array.push(input[i]);
            break;
        }
        count = 0;
    } return array;
}
console.log(nonRepetitive(input))



// 8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) ==>> ; [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) =>>; [[2, 3, 4], [5, 6]]


function arrSpliter(array, length) {
    if(!array || array.length <= length) {
        return array;
    }
    
    var result = [];
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
        if (newArray.length == length) {
            result.push(newArray);
            newArray = [];
        } else if (i == array.length - 1) {
            result.push(newArray)
        }
    }

    return result;
}

console.log(arrSpliter([2, 1, 7, 5, 6, 7, 8, 0, 10, 11, 12], 3));
// 1. Write a function that converts an array of strings into an a

rray of numbers. Filter
// out all non-numeric values.
// var input = ['1', '21', undefined, '42', 1e+3, Infinity] ;

function convertor(input){
    var result = [];

    for (var i = 0; i < input.length; i++){
        if(isFinite(input[i])){
            result[result.length] = parseFloat(input[i]);
        }
    }
    return result;
}
var a = ['1', '21', undefined, '42', 1e+3, Infinity];

console.log(convertor(a))

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
// output = “015false-2247” ;

input = [NaN, 0, 15, false, -22, '', undefined, 47, null]
function bouncer(arr) {
    return arr.filter(Boolean);
  }

console.log(bouncer(input))

function clear (arr){
    var stripped = [];
    for (i = 0, len = arr.length; i < len; i++){
       if (arr[i])
          stripped.push(arr[i]);
    }
    return stripped;
 }
 console.log(clear([NaN, 0, 15, false, -22, '', undefined, 47, null]))