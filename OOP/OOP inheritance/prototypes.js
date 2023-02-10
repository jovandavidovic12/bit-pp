function Person (name,surname){
    this.name = name;
    this.surname = surname;
}

console.log(Person.prototype)

Person.prototype.fullName = function (){
    return this.name + this.surname;
}

console.log(Person.prototype)

var person = new Person('Pera', 'Peric');
console.log(person.fullname())

Person.prototype.printInfo = function(){
    console.log(this.fullName())
}


function Programmer(name, surname,favouriteLanguage){
    Person.call(name,surname);
    this.favouriteLanguage = favouriteLanguage;

}


var programmerPera = new Programmer('Pera', 'Peric', 'JS');
console.log(Programmer.prototype);

 Programmer.prototype = Object.create(Person.prototype);
 Programmer.prototype.constructor = Programmer;