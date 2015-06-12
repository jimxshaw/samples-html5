// Set score to 0
var score = 0;
// Total number of questions
var total = 5;
// Point(s) per correct answer
var point = 1;
// Highest points possible
var highest = total * point;

// Initializer
function() {
  // Set correct answers
  sessionStorage.setItem('a1', 'c');
  sessionStorage.setItem('a2', 'd');
  sessionStorage.setItem('a3', 'a');
  sessionStorage.setItem('a4', 'b');
  sessionStorage.setItem('a5', 'a');
}

$(document).ready(function() {
  // Hide all questions
  $('.questionForm').hide();

  // Show first question
  $('#q1').show();

  $('#q1 #submit').click(function() {
    $('.questionForm').hide();
    $('#q2').fadeIn(300);
    return false;
  });

  $('#q2 #submit').click(function() {
    $('.questionForm').hide();
    $('#q3').fadeIn(300);
    return false;
  });

  $('#q3 #submit').click(function() {
    $('.questionForm').hide();
    $('#q4').fadeIn(300);
    return false;
  });

  $('#q4 #submit').click(function() {
    $('.questionForm').hide();
    $('#q5').fadeIn(300);
    return false;
  });

  $('#q5 #submit').click(function() {
    $('.questionForm').hide();
    $('#results').fadeIn(300);
    return false;
  });
});

// Add event listener
window.addEventListener('load', init, false);






