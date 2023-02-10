// var hero = {
//     name: 'Leonardo',
//     sayName: function(){
// //         return 'This is ' + .concat(this.name);
// //         }
// // }
// console.log(hero)
// console.log(hero.sayName());

function Hero(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.whoYouAre = function(){
        return 'I am ' + this.name ;

    }
}

function hero(name, occupation){
    return { 
        name : name,
        occupation:occupation
        whoYouAre: function (){
            return 'I am ' + name;
        }
    }
}

var hero = new Hero('Leonardo', 'Ninja');
var hero2 = hero('Rafaelo', 'Ninja')
console.log(hero1.whoYouAre());
console.log(hero2.whoYouAre());

// var hero3 = Hero('rafaelo', 'Ninja');
// console.log(hero3.name)
console.log(hero instanceof Hero)
console.log(hero instanceof String)
