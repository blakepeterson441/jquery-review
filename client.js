console.log('Good Morning!');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady);

// When the DOM is ready (i.e. when the page loads), 
// we will render (or display) our students
function onReady() {
    console.log('jQuery works');
    renderStudentList(playfair);
}

// This function will take in an array of students,
// loop thorugh our students & display them on the DOM
function renderStudentList(studentList) {
    for (student of studentList) {
        renderStudent(student);
    }
}

// This function will take in a single student,
// and append it to the '#student' id on the HTML page.
function renderStudent(student) {
    $('#students').append(`<li>${student}</li>`);
}