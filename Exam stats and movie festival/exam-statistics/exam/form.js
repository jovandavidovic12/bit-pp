var passedStudents = 0;
var failedStudents = 0;
var allStudents = [];
var totalStudents = allStudents.length;







function setData() {
    var data = '';
    $('select option:selected').each(function () {
        data = $(this).text();

    })

    var name = $('#name-lastname').val();
    var nameSplit = name.split(" ");
    var subject = new Subject(data);
    var grade = Number($('#grade').val());
    var student = new Student(nameSplit[0], nameSplit[1]);
    var full = new Exam(subject, student, grade);

    var su = $('#subject').val();
    var grd = $('#grade').val();
    var fullName = $('#name-lastname').val()


    var students = new Object();
    students.subject = su;
    students.grade = grd;
    students.name = fullName;

    allStudents.push(students);



    if (grade > 10 || grade < 5) {
        alert('Grades can only be from 5 to 10');
        return;

    }
    if (!subject || !name || !grade) {
        alert('Please fill all input field')
        return;
    }
    if (nameSplit[0][0] != nameSplit[0][0].toUpperCase() || nameSplit[1][0] != nameSplit[1][0].toUpperCase()) {
        alert('Name and Lastname  must start with uppercase');
        return;
    }


    if (full.hasPassed(grade)) {
        passedStudents++;
        totalStudents++;
        $('#passed-list').append(`<li class="passed-li">${full.getExamInfo()}</li>`);
        $('#passed-counter').text(`${passedStudents}`);

    }


    else {
        failedStudents++;
        totalStudents++;
        $('#failed-list').append(`<li class="failed-li">${full.getExamInfo()}</li>`);
        $('#failed-counter').text(`${failedStudents}`);

    }

    var stats = new Statistics();
    stats.getPercent();
    stats.getTotalFailed();
    stats.getTotalPassed();
    stats.getTotalStudents();

    $('#name-lastname').val('');
    $('#grade').val('');
    $('#subject').val('');

}



