document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

var canvasDiv = document.getElementById('canvasDiv');

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
}

function redraw(){
  context.strokeStyle = "#df4b26";
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
     context.stroke();
  }
}

document.getElementById('clear').addEventListener('click', function() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	clickX = [];
	clickY = [];
	clickDrag = [];
}, false);

document.getElementById('addText').addEventListener('click', function() {
	word=document.getElementById('word').value;
	context.font='30px Roboto';
	context.fillText(word,randomInt(),randomInt());
}, false);

function randomInt() {
  min = Math.ceil(1);
  max = Math.floor(500);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPic() {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('addImg').addEventListener('click',function() {
	var img = new Image();
	img.src = "images/"+randomPic()+".jpeg";
	img.onload=function(){context.drawImage(img, randomInt(), randomInt(),50,50);  }
	
}, false);

document.getElementById('addLine').addEventListener('click', function() {
	context.moveTo(randomInt(),randomInt());
	context.lineTo(randomInt(),randomInt());
	context.stroke();
}, false);

}