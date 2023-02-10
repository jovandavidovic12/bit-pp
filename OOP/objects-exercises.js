// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

function calculateTotalPrice(groceries = []){
    if(!groceries || groceries.length == 0){
        return 0;
    }

    var result = 0;
    for(var i = 0; i < groceries.length; i++){
        var element = groceries[i];
        if(element && element.price && element.price > 0 && element.quantity && element.quantity > 0){
            result += element.price * element.quantity;
        }
    } 
    return result;
}

var groceries = [{ product: 'Milk', quantity: 99, price: 2 }, { product: 'Milk', quantity: 2, price: 3 }, { product: 'Milk', quantity: 3, price: 1.5 }]
console.log(calculateTotalPrice(groceries));

// Create a function that gets the
// name of the piece of jewelry with the highest price and returns &quot;The most expensive
// one is the {name of jewelry piece}&quot;.
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250},...])


function mostExpensive (jewlery = []){
    if(!jewlery || jewlery.length == 0){
        return 'Empty';
    }

    var name = '';
    var maxPrice = 0;
    for ( var i = 0; i < jewlery.length; i++){
        var element = jewlery[i];
        if ( element.price > maxPrice){
            maxPrice = element.name;
            name = element.name;
        }
    }
    return name;
}

console.log(mostExpensive([{ name: 'DiamondEarings', price: 980 }, { name: 'Gold watch', price: 250 }
]))


















// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

20