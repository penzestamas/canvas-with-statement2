var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var halfOfCanvasWidth = canvasWidth / 2;
var halfOfCanvasHeight = canvasHeight / 2;

var positionX = 0;
var positionY = halfOfCanvasHeight;
var padding = 3;

var lines = canvasWidth / padding + 1;

for (var i = 0; i < lines; i++) {
  context.beginPath();
  context.moveTo(positionX, positionY);
  if (positionX % 2 === 0) {
    context.lineTo(halfOfCanvasWidth, canvasHeight - canvasHeight);
  } else {
    context.lineTo(halfOfCanvasWidth, canvasHeight);
  }
  context.strokeStyle = 'rgba(255,0,0,.5)';
  context.stroke();
  positionX += 3;
}