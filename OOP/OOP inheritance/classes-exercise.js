class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    // fullName() {
    //     return `${this.name} ${this.surname}`;
    // }
}


class Employee extends Person {
    constructor(name, surname, job, salary){
    super(name,surname);
    this.job = job;
    this.salary = salary;
    }
}