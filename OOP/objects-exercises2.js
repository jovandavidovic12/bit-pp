// 1. Create a function that takes an array of objects (groceries) which calculates the total
// price and returns it as a number. A grocery object has a product, a quantity and a price,
// for example:

function sumPrices (arr) {
    if (!arr || arr.length == 0) {
        return 0;
    }

    var sum = 0;
    for (var i = 0; i < arr.length; i++ ){
        var element = arr[i];
        sum += element.price * element.quantity;
    }
    return sum;
} 
console.log(sumPrices([
    {name:'Coffee', quantity: 2, price: 100 },
    {name:'Milk', quantity: 2, price: 100 },
    {name:'Sugar', quantity: 2, price: 100 }
]))







// 2. You go to a jewelry shop and try to find the most expensive piece of jewelry. You write
// down the name of each piece of jewelry and its price. Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}&quot;.
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},
// …])
// - The most expensive one is the diamond Ring.


function mostExpensive(arr){
    if(!arr || arr.length == 0) {
        return arr;
    }

    var maxPrice = 0;
    for(var i = 0; i <arr.length; i++){
        var element = arr[i];
        if(element.price > maxPrice){
            maxPrice = element.price;
        }
    }
    return 'Most expensive item is ' + element.name + ' ' + maxPrice;
}
console.log(mostExpensive([
    {name:'Coffee', quantity: 2, price: 111 },
    {name:'Milk', quantity: 2, price: 222 },
    {name:'Sugar', quantity: 2, price: 333 }
]))



// 3. Given a word, create an object that stores the indexes of each letter in an array. Make
// sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
// are stored in an array and those arrays are values.
// Examples:
// mapLetters(&quot;dodo&quot;) ➞ { d: [0, 2], o: [1, 3] }
// mapLetters(&quot;froggy&quot;) ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters(&quot;grapes&quot;) ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }



function mapLetters(str='') {
    if (!str || str.length == 0) {
        return 0;
    }
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var newArray = [];
        newArray[0] = i;
        for (var j = 0; j < str.length; j++) {
            if (str[i] == str[j] && i != j) {
                newArray.unshift(j);
            }
        }
        result[str[i]] = newArray
    }
    return result;
}
console.log(mapLetters("froggy"));


//who cursed the most //

function determineWhoCursedTheMost (input = []) {

    if (!input || input.length == 0){
        return '';
    }

    var sumA = 0;
    var sumB = 0;
    for(var i = 0; i < input.length; i++){
        sumA += input[i].me;
        sumB += input[i].spouse;
    }

    if(sumA > sumB){
        return 'ME' 
    } else if (sumA < sumB){
        return 'SPOUSE'
    } 
    return 'DRAW'
} 
console.log(determineWhoCursedTheMost([]))


//5. Create a function that converts color in RGB format to Hex format.
// Examples:
// rgbToHex({red: 0, green: 128, blue: 192}) ➞ '#0080c0

function checkColor(color = 0){
    return color < 0  || color > 255 
}

function rgbToHex(color = {}) {
    if(!color || checkColor(color.red) ||checkColor(color.green) || checkColor(color.blue) ) {
        return 'INVALID'
    }

    var red = color.red.toString(16).padStart(2, '0');
    var green = color.green.toString(16).padStart(2, '0');
    var blue = color.blue.toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}

function hexToRgb(string = ''){
    if( !string || !string.startsWith('#') || string.length != 7){
        return null;
    }

    var colorString = string.split('#')[1];
    var red = parseInt(colorString.substring(0, 2), 16);
    var green = parseInt(colorString.substring(2, 4), 16);
    var blue = parseInt(colorString.substring(4), 16);

    return {red, green, blue} ;
}

var hex = rgbToHex({red: 0, green : 128, blue : 192 });
console.log(hex);
console.log(hexToRgb(hex));

// 6. Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks
// down the most efficient way that change can be made using USD quarters, dimes,
// nickels and pennies. Your function should return an object.

function makeChange(change = 0) {
    if(change < 0 ) {
        return null;
    }

    var map = {};
    var mod_q = change % 25;
    map ['q'] =  (change - mod_q) / 25 ;

    var mod_d = mod_q % 10;
    map['d'] = (mod_q - mod_d) / 10;

    var mod_n = mod_d % 5;
    map['n'] = (mod_d - mod_n) / 5;

    map['p'] = mod_n ;

    return map;

 }

 console.log(makeChange(45))




//  7. Create a function that takes an array of objects like { name: &quot;John&quot;, notes: [3, 5, 4]} and
// returns an array of objects like { name: &quot;John&quot;, avgNote: 4 }. If student has no notes (an
// empty array) then let&#39;s assume avgNote: 0.

function avgNotes ( input = []) {
    if ( !input || input.length == 0 ) {
        return null;
    }

    var result = [] ;
    for ( var i = 0; i < input.length; i++){
        var item = input[i]
        var newObject = {name : item.name}
        var sum = 0;
        for (var j = 0; j < item.notes.length; j++){
            sum += item.notes[j];

        }   
        console.log(sum);
        console.log(item.notes.length);

        var avg = parseFloat(sum/ item.notes.length).toFixed(2);
        newObject['avgNote'] = avg;
        result.push(newObject);
    }
    return result;

}

console.log(avgNotes([{name : 'John' , notes : [4,3,2,1,8,18]} , {name: 'Peter', notes:[4,2,1,5,6,7,8 ]} ])) ;


// 8. Given an object with students and the grades that they made on the tests that they
// took, determine which student has the best Test Average. The key will be the student&#39;s

// name and the value will be an array of their grades. You will only have to return the
// student&#39;s name. You do not need to return their Test Average.

function getBestStudent ( input = []) {
    if (!input || input.length == 0) {
        return null;

    }

    var maxAverage = 0;
    var name ;
    for ( var i = 0 ; i < input.length; i++) {
        var item = input[i];
        var avgGrade = 0;
        var sum = 0;
        for (var j = 0; j < item.grades.length; j++){
            sum += item.grades[j] ;

        }

        avgGrade = parseFloat(sum/item.grades.length).toFixed(2);
        if (avgGrade < maxAverage) {
            maxAverage = avgGrade;
            name = item.name
        }
    }

    return {name : name , avgGrade : maxAverage}
}

console.log(getBestStudent({name : 'John', grades: [100, 50, 20]} , {name : 'peter' , grades : [20, 30, 40]}))