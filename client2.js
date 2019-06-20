$(document).ready(onReady);

function onReady(){
    console.log('in client2.js');
    $('#add-task').on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask);
    $('#task-list').on('click', '.flag', flagTask);
    $('#clear-tasks').on('click', deleteAllTasks);
}

function addTaskHandler(event){
    // Default action when you submit a form
    // - click "submit" type button inside a <form> -
    // is to refresh the page. We want to prevent that
    event.preventDefault();

    //console.log('clicked Add Task');
    const taskName= $('#task-name').val();
    console.log('Clicked Add Task, task is:', taskName );

    // add the task
    addTask(taskName);

    // clears out the form
    $('#task-name').val('');
}

function addTask(task){
    console.log('add task', task);
    // id's are unique, classes can be used for multiple items
    $('#task-list').append(
        `<li>
            ${task}<button class="delete">Delete</button><button class="flag">Flag</button>
        </li>`);
}

function deleteTask(event) {
    console.log( 'clicked delete', $(this).parent().text() );
    // 'this' is the delete button.
    // we want to remove it's parent element, the <li> item
    $(this).parent().remove();
}

function flagTask(event) {
    console.log('FLAG', $(this).parent().text());

    // We made a style class in the css .important
    // We want to select the <li> which is the parent of 
    // 'this' or the thing we clicked on
    // $(this).parent().addClass('important');

    // take out parent and the button itself will change colors
    $(this).parent().toggleClass('important');
}

// This will remove all tasks from the list when we click the
// remove all button.
function deleteAllTasks(event){
    $('#task-list').empty();

}