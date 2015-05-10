$(document).ready(function() {
  // Define variables
  var canvas = $('#canvas')[0];
  var ctx = canvas.getContext('2d');
  var w = canvas.width();
  var h = canvas.height();
  var cw = 15;
  var d = "right";
  var food;
  var score;
  var speed = 130;

  // Snake array
  var snake_array;

  // Initializer
  function init() {
    create_snake();
    create_food();
    score = 0;

    if (typeof game_loop != "undefined") {
      clearInterval(game_loop);
    }
    game_loop = setInterval(paint, speed);
  }
  init();

  // Create the snake
  function create_snake() {
    var length = 5;
    snake_array = [];

    for (var i = length - 1; i >= 0; i--) {
      snake_array.push({x: i, y: 0});
    }
  }

  // Create the food
  function create_food() {
    food = {
      x: Math.round(Math.random() * ((w - cw)/cw)),
      y: Math.round(Math.random() * ((h - cw)/cw));
    };
  }

  // Paint the snake
  function paint() {
    // Paint the canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "white";
    ctx.strokeRect(0, 0, w, h);

    var nx = snake_array[0].x;
    var ny = snake_array[0].y;

    if (d == "right") {
      nx++;
    }
    else if (d == "left") {
      nx--;
    }
    else if (d == "up") {
      ny--;
    }
    else if (d == "down") {
      ny++;
    }

    // Collision code
    if (nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array)) {
      init();

      return;
    }

    if (nx == food.x && ny == food.y) {}
  }
});

























