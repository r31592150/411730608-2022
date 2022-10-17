function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(220);
  noFill()
  stroke(250,250,250);
  var w= mouseX/10
for(var j=0;j<height/50;j++)
{
  for(var i=0;i<width/50;i++)
  {
  
  
  ellipse(25+50*i,25+50*j,mouseX/10)
  stroke(37,45,250)
  rect(25+50*i,25+50*j,mouseY/4)
  stroke(255,215,0)
  ellipse(50+50*i,50+50*j,mouseX/10)
  stroke(1,0,0) 
  }
 }
}