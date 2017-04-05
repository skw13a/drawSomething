<?php   session_start(); 
echo "<h2>".$_SESSION["user"] . " is logged in. <br></h2>"?>


<!doctype html>
<html lang="en">

	<head>
  		<meta charset="utf-8">
  		<title>Draw</title>
		<link rel="stylesheet" href="css/style.css">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

		<script src="js/jquery-1.11.0.js" type='text/javascript'></script>
		<script src="js/draw.js" type='text/javascript'></script>

	</head>
	<body>
	<div align='left'>
		<form id='logout' method="LINK" action="logout.php">
			<input type="submit" value="Log Out">
		</form>
	</div>
	<div id=title>
		<h1>Let's Play Draw Something!</h1>
		<button type=button id='clear'>Clear Canvas</button>
	

	</div>

	<div id="canvasDiv" align='center'></div>

	<div id='options' align='right'>
		<button type=button id='colorRed'>Red</button>
		<br/> <br/>
		<button type=button id='colorOrange'>Orange</button>
		<br/><br/>
		<button type=button id='colorYellow'>Yellow</button>
		<br/> <br/>
		<button type=button id='colorGreen'>Green</button>
		<br/><br/>
		<button type=button id='colorBlue'>Blue</button>
		<br/><br/>
		<button type=button id='colorPurple'>Purple</button>
		<br/> <br/>
		<button type=button id='colorBrown'>Brown</button>
		<br/><br/>
		<button type=button id='colorBlack'>Black</button>
		<br/> <br/>
		<button type=button id='colorErase'>Eraser</button>
	</div>



<!--
http://www.w3schools.com/html/html5_canvas.asp
http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/#demo-simple
http://stackoverflow.com/questions/11349613/html5-canvas-not-working-in-external-javascript-file
http://www.williammalone.com/briefs/how-to-draw-image-html5-canvas/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
http://www.html5canvastutorials.com/tutorials/html5-canvas-images/
http://www.w3schools.com/jsref/canvas_drawimage.asp



-->