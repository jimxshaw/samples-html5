// Set score to 0
var score = 0;
// Total number of questions
var total = 5;
// Point(s) per correct answer
var point = 1;
// Highest points possible
var highest = total * point;

// Initializer
function init() {
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

  $('.questionForm #submit').click(function() {
    // Get data attributes
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question') + 1;

    // Hide all questions
    $('.questionForm').hide();

    // Show next question
    $('#q' + next + '').fadeIn(300);

    process('' + current + '');
    return false;
  });

  /* Inefficient code
  $('#q1 #submit').click(function() {
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;
  });

  $('#q2 #submit').click(function() {
    $('.questionForm').hide();
    process('q2');
    $('#q3').fadeIn(300);
    return false;
  });

  $('#q3 #submit').click(function() {
    $('.questionForm').hide();
    process('q3');
    $('#q4').fadeIn(300);
    return false;
  });

  $('#q4 #submit').click(function() {
    $('.questionForm').hide();
    process('q4');
    $('#q5').fadeIn(300);
    return false;
  });

  $('#q5 #submit').click(function() {
    $('.questionForm').hide();
    process('q5');
    $('#results').fadeIn(300);
    return false;
  });
  */
});

// Process the answers
function process(n) {
  // Get input value

  if (q == "q1") {
    var submitted  = $('input[name = q1]:checked').val();
    if (submitted == sessionStorage.a1) {
      score++;
    }
  }

  if (q == "q2") {
    var submitted  = $('input[name = q2]:checked').val();
    if (submitted == sessionStorage.a2) {
      score++;
    }
  }

  if (q == "q3") {
    var submitted  = $('input[name = q3]:checked').val();
    if (submitted == sessionStorage.a3) {
      score++;
    }
  }

  if (q == "q4") {
    var submitted  = $('input[name = q4]:checked').val();
    if (submitted == sessionStorage.a4) {
      score++;
    }
  }

  if (q == "q5") {
    var submitted  = $('input[name = q5]:checked').val();
    if (submitted == sessionStorage.a5) {
      score++;
    }

    $('#results').html('<h3>Your final score is: ' + score + ' out of 5</h3><a href="index.html">Take Quiz Again</a>');
  }
  return false;
}

// Add event listener
window.addEventListener('load', init, false);






