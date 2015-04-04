function makeCanvas() {
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


}




















