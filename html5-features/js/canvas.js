function makeCanvas() {
  var circle = Math.PI * 2;
  // Object 1
  // 1 - Get object
  var canvas1 = document.getElementById('canvas1');
  var context1 = canvas1.getContext('2d');

  // 2 - Set parameters or properties
  context1.font = '32px Arial';
  context1.fillStyle = 'DeepSkyBlue';
  context1.strokeStyle = 'black';

  // 3 - Implement action
  context1.fillText("I love HTML5!", 45, 150);
  context1.strokeText("I love HTML5!", 45, 150);

  // Object 2
  // 1 - Get object
  var canvas2 = document.getElementById('canvas2');
  var context2 = canvas2.getContext('2d');

  // 2 - Set parameters or properties
  context2.fillStyle = "#ff0000";
  context2.strokeStyle = "#000000";
  context2.lineWidth = 10;

  // 3 - Make rectangles
  context2.fillRect(45, 5, 135, 135);
  context2.strokeRect(45, 5, 135, 135);

  context2.fillStyle = "#666666";
  context2.fillRect(200, 5, 135, 135);

  context2.fillStyle = "#666666";
  context2.fillRect(45, 150, 135, 135);

  context2.fillStyle ="#ff0000";
  context2.strokeStyle = "#000000";
  context2.lineWidth = 10;
  
  context2.fillRect(200,150,135,135);
  context2.strokeRect(200,150,135,135);

  // Object 3
  // 1 - Get object
  var canvas3 = document.getElementById('canvas3');
  var context3 = canvas3.getContext('2d');

  // 2 - Set parameters or properties
  context3.strokeStyle = "#666666";
  context3.fillStyle = "#ff0000";
  context3.lineWidth = 5;

  // 3 - Create shape
  context3.beginPath();
  context3.moveTo(100, 100);
  context3.lineTo(150, 200);
  context3.lineTo(200, 200);
  context3.lineTo(200, 100);
  context3.lineTo(100, 100);
  context3.stroke();
  context3.fill();
  context3.closePath();

  // Object 4
  // 1 - Get object
  var canvas4 = document.getElementById('canvas4');
  var context4 = canvas4.getContext('2d');

  // 2 - Set parameters or properties
  context4.fillStyle = "blue";

  // 3 - Create circle
  context4.beginPath();
  context4.arc(200, 220, 75, 0, circle);
  context4.fill();
  context4.closePath();

  context4.fillStyle = "red";
  context4.beginPath();
  context4.arc(200, 100, 45, 0, circle);
  context4.fill();
  context4.closePath();

  context4.fillStyle = "black";
  context4.beginPath();
  context4.arc(200, 30, 25, 0, circle);
  context4.fill();
  context4.closePath();

  // Object 5
  // 1 - Gt object
  var canvas5 = document.getElementById('canvas5');
  var context5 = canvas5.getContext('2d');

  var posX = 0;
  var posY = 0;

  // 2 - Set parameters or properties
  setInterval(function() {
    posX += 1;
    posY += 1;
    context5.fillStyle = "black";
    context5.fillRect(0, 0, canvas5.width, canvas5.height);

    context5.fillStyle = "white";
    context5.beginPath();
    context5.arc(posX, 120, 70, 0, circle);
    context5.fill();
    context5.closePath();

    context5.fillStyle = "red";
    context5.beginPath();
    context5.arc(300, posY, 30, 0, circle);
    context5.fill();
    context5.closePath();

    context5.fillStyle = "blue";
    context5.beginPath();
    context5.arc(posX, posY, 50, 0, circle);
    context5.fill();
    context5.closePath();

  }, 30);
}




















