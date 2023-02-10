(function (){
    console.log("Welcome to our airport")


    function Person(name, surname){
        this.personName = name;
        this.personSurname = surname;
        this.getData = function(){
            return this.personName + ' ' + this.personSurname;
        }


    }


    function Seat(number, category){
        this.number = number;
        if(number === undefined){
            this.number = Math.floor(Math.random() * 100) + 10;
        }

        this.category = category;

        if(category === undefined){
            this.category = 'e';
        }
        this.getData = function(){
            return this.number + ',' + ' ' + this.category.toUpperCase();
        }
    }


    function Passenger(person, seat){

        this.persona = Person(person);
        this.seata = Seat(seat);

       this.getData = function(person,seat){
        
       }


    }

var a = new Person('Jovan', 'Davidovic');
var b = new Seat()
var c = new Passenger(a,b)

console.log(b.getData())
console.log(a.getData())
console.log(c.getData())


})()
