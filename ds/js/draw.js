document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

var canvasDiv = document.getElementById('canvasDiv');
var colorRed = "#d60e0e";
var colorOrange = "#d6610e";
var colorYellow = "#ffe22b";
var colorGreen = "#1abf20";
var colorBlue = "#1a67bf";
var colorPurple = "#851bd1";
var colorBrown = "#59320e";
var colorBlack = "#000000";
var colorErase='#FFFFFF';

var curColor = colorBlack;
var clickColor = new Array();

background = document.createElement('canvas');
background.setAttribute('width', 500);
background.setAttribute('height', 500);
background.setAttribute('id', 'background');
canvasDiv.appendChild(background);
bctxt=background.getContext('2d');
bctxt.fillStyle = "#FFFFFF";
bctxt.fillRect(0,0,500,500);

canvas = document.createElement('canvas');
canvas.setAttribute('width', 500);
canvas.setAttribute('height', 500);
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
  canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");



$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
    
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});


$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').mouseup(function(e){
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function redraw(){
  context.lineJoin = "round";
  context.lineWidth = 5;
      
  for(var i=0; i < clickX.length; i++) {    
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.stroke();
  }
}

document.getElementById('clear').addEventListener('click', function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  clickX = [];
  clickY = [];
  clickDrag = [];
}, false);

document.getElementById('colorRed').addEventListener('click', function() {
 curColor=colorRed;
}, false);

document.getElementById('colorOrange').addEventListener('click', function() {
 curColor=colorOrange;
}, false);

document.getElementById('colorYellow').addEventListener('click', function() {
 curColor=colorYellow;
}, false);

document.getElementById('colorGreen').addEventListener('click', function() {
 curColor=colorGreen;
}, false);

document.getElementById('colorBlue').addEventListener('click', function() {
 curColor=colorBlue;
}, false);

document.getElementById('colorPurple').addEventListener('click', function() {
 curColor=colorPurple;
}, false);

document.getElementById('colorBrown').addEventListener('click', function() {
 curColor=colorBrown;
}, false);

document.getElementById('colorBlack').addEventListener('click', function() {
 curColor=colorBlack;
}, false);

document.getElementById('colorErase').addEventListener('click', function() {
 curColor=colorErase;
}, false);

}