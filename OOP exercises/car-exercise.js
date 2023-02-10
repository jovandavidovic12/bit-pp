// The following exercises needs to be done on 2 ways: 1) using classes, 2) using constructor functions.

// 1. 

// a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).

// Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.

// Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).

// b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").

// c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.

// d) Create a 3 car objects and test it!





class Car {
    constructor(brand, model, motion) {
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }
    status(){
        return this.brand + ' ' + this.model + ' ' + this.motion + 'km/h, ' + this.checkMotion();
    }

    checkMotion() {
        if (this.motion > 0) {
            return 'car is moving';
        } else {
            return 'car is parked';
        }

    }

    



    accelarate(spd) {

       this.motion += spd;
    }




    break(slowDown) {
     this.motion -= slowDown;
     if(this.motion < 0){
        return 'car is parked'
     }
    }


    fullStop(){
        if (this.motion > 0){
            this.motion = 0;
        }

        return 'Car is stopped' ; 
    }


}

var car1 = new Car('Peugeot', '307', 120);
var car2 = new Car('Volkswagen', 'Golf VII', 150);
var car3= new Car('Skoda', 'Octavia', 500);

// car1.fullStop();
car1.accelarate(20);
car1.break(142);



console.log(car1.status())



// console.log(car1.status())
// console.log(car2.status())
// console.log(car3.status())

// console.log(car1.checkMotion())



