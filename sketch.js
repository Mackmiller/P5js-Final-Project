var concert;
var moon0;
var star0;
var direction = 90; //circle initial direction moving down
//var time1 = 5000;
/*var time2 = 22500;
var time3 = 33000;
var time4 = 49000; */

function setup() {
  createCanvas(600,335);
  moon0 = createSprite(500, 320, 20, 20);
  moon0.addAnimation("floating", "assets/moon0.png", "assets/moon25.png");
  star0 = createSprite(2300, 320, 40, 40);
  star0.addAnimation("shining", "assets/star0.png", "assets/star14.png");

  concert = createVideo('assets/nov7.m4v');
  concert.loop(); // set the video to loop and start playing
  concert.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  concert.size(600,600);
}

function draw() {
  background(255,255,255);  
  
  image(concert,0,0); // draw the video frame to canvas
  noStroke();
  fill(0, 0, 0);
  rect(0, 0, 600, 123);
  fill(0, 0, 0, 50);
  rect(0, 123, 600, 23);
  
 /* var curTime = millis();
  if(time1 <= curTime) { 
  
  } */
  scale(.2);
  drawSprites();
  
  //BACKGROUND STARS
  
  push();
  translate(2800,50);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(3300,300);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(2950,600);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();

  push();
  translate(2600,300);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(2200,100);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(1800,480);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(1300,200);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(850,400);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
  
  push();
  translate(200,400);
  rotate(frameCount / -100.0);
  fill('yellow');
  star(0, 0, 10, 25, 5); 
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);}
