class Student{
    constructor(name,lastname){
        this.studentName = name;
        this.studentLastname = lastname;
    }
    getStudentData(){
        return this.studentName + " " + this.studentLastname;
    }
}