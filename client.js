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

    renderStudentList(playfair);

    // Need to select something already on the DOM
    // Can filter the event to something new (dynamically generated)
    // Do this with the 2nd arg to 'on' function ('.student')
    $('#students').on('click', '.student', showAwesomeAlert);

    // Shouldn't do this! because later it will break
    // $('#students').on('click', showAwesomeAlert);

    // This is what generated the event, the document being ready
    // console.log('this is onReady is the document:', this);
    
}

// This function will be called when we click on a student
// It will show an alert saying that student is awesome!
// this is contextual. showAwesomeAlert calls 
function showAwesomeAlert(event){
    // console.log('Event:', event);
    // In the event handler (always functions) 'this' is what generated the event
    // console.log('This:', this);
    let studentName = $(this).text();
    alert(`${studentName} is awesome!`);
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
    $('#students').append(`<li class="student">${student}</li>`);
}