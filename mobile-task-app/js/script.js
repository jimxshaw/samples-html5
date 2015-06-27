// Set task list variable
var todoList = JSON.parse(localStorage.getItem('todos'));

$(document).ready(function(){
  // Set counter
  var i = 0;
  // Check for tasks
  if (localStorage.getItem('todos') != null) {
    // Loop through and output li items
    $.each(todoList, function(key, value) {
      $('#todos').prepend('<li id="task-' + i + '">' + value.todo_name + '</li>');
      i++;
    });
    // Refresh
    $('#todos').listview('refresh');
  }

  //Add task
  $('#add_form').submit(function(){
    //Get submitted values
    var todo_name = $('#todo_name').val();
    var todo_date = $('#todo_date').val();
    
    //Simple field validation
    if(todo_name == ''){
      alert('Please give the todo a name');
    } else if(todo_date == ''){
      alert('Please add a date');
    } else {
      var todos = JSON.parse(localStorage.getItem('todos'));
      //Check tasks
      if(todos == null){
        todos = [];
      }
      //Create array with new task
      var new_todo = {
        "todo_name": todo_name,
        "todo_date": todo_date
      };
      todos.push(new_todo);
      localStorage.setItem('todos',JSON.stringify(todos));
    }
  });
});
