class Exam {
    constructor(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    getExamInfo() {
        return this.subject.getSubjectName() + " " + this.student.getStudentData() + " " + this.grade;
    }

    hasPassed(grd) {
        if (grd > 5) {
            return true;
        }
        return false;
    }
}

class Statistics {

    getTotalPassed() {
        var pass = $('#passed-header').text(passedStudents)
        return pass;
    }

    getTotalFailed() {
        var failed = $('#failed-header').text(failedStudents);
        return failed.length;
    }

    getTotalStudents() {
        var totalStud = $('#total-students').text(totalStudents);
        return totalStud;
    }

    getPercent() {
        var percent = (failedStudents * 100) / totalStudents;
        var per = $('#percent').text(Math.ceil(percent) + '%');
        return per;
    }
}