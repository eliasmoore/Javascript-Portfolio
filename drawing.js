var c = document.getElementById("board");
var ctx = c.getContext("2d");


var mousePosX;
var mousePosY;

var mouseIsDown;

c.addEventListener("mousemove", function(evt){getMousePos(evt, c);});
c.addEventListener("mousedown", function(evt){mouseIsDown = true});
c.addEventListener("mouseup", function(evt){mouseIsDown = false});

setInterval(draw, .1);
function draw()
{
  if(mouseIsDown)
  {
    ctx.fillRect(mousePosX - 5,mousePosY - 5,10,10);
  }
  
}

function getMousePos(evt, canvas) {
    var rect = canvas.getBoundingClientRect();
    mousePosX = evt.clientX - rect.left;
    mousePosY = evt.clientY - rect.top;
}




