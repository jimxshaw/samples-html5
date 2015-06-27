$(document).ready(function(){
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