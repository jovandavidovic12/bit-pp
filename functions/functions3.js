// / 1. Write a program to insert a string within a string at a particular position (default is 1,
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
    
    // 5. Write a function to get the last element of an array. Passing a parameter 'n'; will return the
    // last n; elements of the array.
    
    
  