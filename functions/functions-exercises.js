// Count vowels and consonants
function countVowelsAndConsonants(inputArray){
    if(!inputArray || inputArray == 0){
        return [];
    }
    function isLetter(str){
        return str.length === 1 && str.match(/[a-z]/i)
    }
    function isVowel(str){
        return str.length === 1 && str.match(/[aeiou]/i)
    }
    var result = [];
    var consonants = 0 ;
    var consonants = 0;
    for(var i = 0; i < inputArray.length; i++){
        if(isLetter(inputarray[i])){
            if(isVowel(inputArray[i])){
                vowels++;

            } else {
                consonants++;
            }

        }
    } return [vowels,consonants]
}

var result = countVowelsAndConsonants('Danas je subota');
console.log('Broj samoglasnika : ' + result[0] + 'Broj suglasnika: ' + result[1]) 


// nonrepeat

function nonRepeat(inputArray){
    if(!inputArray || inputArray.length == 0){
        return [];

    }

    var result = [];
    for(var i = 0; i < inputArray.length; i++){
        var count = 0;
        for(var j = 0; j<inputArray.length; j++){
            if(inputArray[i]= inputArray[j] && i != j){
                count++;
            }
        }

        if(count == 0){
            result.push(inputArray[i]);
        }
    }

    return result;

}

console.log(nonRepeat([1, 2, 3, 4, 5 , 5, 5, 5, 5]))


// array split


function arraySplit(inputArray, count){
    if(!inputArray || !count || count == 1 || count > inputArray.length){
        return [];
    }

    var result = [];

    for(var i = 0; i < inputArray.length; i+= count){
        var smaller = [];
        var z = i;
        for ( var j = 0 ; j < count; j++){
            smaller.push(inputArray[z]);
            z++ 
        }
        result.push(smaller);
    }
    return result;
}

console.log(arraySplit([2, 3, 5, 6 ], 2))