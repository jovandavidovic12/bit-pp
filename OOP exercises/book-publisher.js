// 1.
// Headquarters have asked that you store the following information about each book: title, author,
// copyright date, ISBN, number of pages, number of times the book has been checked out, whether the book has been discarded.

// Headquarters also needs you to track certain actions that you must perform when books get out of date.
// First, for a manual, the book must be thrown out if it is over 5 years old.

// Second, for a novel, the book should be thrown out if it has been checked out over 100 times.


// Construct three classes that hold the information needed by headquarters as properties.

// One class should be a Book class and two child classes of the Book class called Manual and Novel.

// Each class will contain two methods. One will be a constructor.

// The other one will either be in charge of disposal of the book or updating the property related to the number of times a book has been checked out.

// Hint: This means you need to read through the requirements for the problem and decide what should belong to Book and what should belong to the Novel and Manual classes.

 
// Declare an object of the Novel class for the following tome from the library. Declare an object of the Manual class for the following tome from the library.

// One of the above books needs to be discarded. Call the appropriate method for that book to update the property. That way the crew can throw it into empty space to become debris.

// The other book has been checked out 5 times since you first created the object. Call the appropriate method to update the number of times the book has been checked out.



class Book{
    constructor(title, author,copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded = false){
        this.title = title;
        this.author = author;
        this.copyDate = copyDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numTimesCheckedOut = numTimesCheckedOut;
        this.isDiscarded = isDiscarded;
    }

    checkOut(taken = 1){
        this.numTimesCheckedOut += taken;
        return this.numTimesCheckedOut;
    }
}



class Manual extends Book{
    constructor(title, author,copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded = false){
        super(title, author,copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded);
    }
    throw(date){
        if((2023 - this.copyDate) > 5){
            this.isDiscarded = true;
        }
        return this.isDiscarded;
    }
}



class Novel extends Book{
    constructor(title, author,copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded = false){
        super(title, author,copyDate, isbn, numPages, numTimesCheckedOut, isDiscarded)
    }
    timesChecked(){
        if(this.numTimesCheckedOut > 100){
            this.isDiscarded= true;
        }
        return this.isDiscarded;
    }
    
}

var novel1 = new Novel ('Suffer Asylum ', 'Jack Carl Stanley', 2011, 1234, 444, 22, false );
console.log(novel1.timesChecked(1111111))

var manual1 = new Manual('Happy place', 'Emily', 2000, 303, 222, 22, false  )
console.log(manual1.throw())

