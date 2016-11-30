/*var concert;
var stardust;
var moon0;
var star0;
var direction = 90; 

function setup() {
  createCanvas(600,335);
  moon0 = createSprite(500, 320, 20, 20);
  moon0.addAnimation("floating", "assets/moon0.png", "assets/moon25.png");
  star0 = createSprite(2300, 320, 40, 40);
  star0.addAnimation("shining", "assets/star0.png", "assets/star14.png");
  stardust = loadImage("assets/stardust.png");

  concert = createVideo('assets/nov7.m4v');
  concert.loop(); 
  concert.hide(); 
                  
              
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
 image(stardust, 600, 150);
  

  } 
  scale(.2);
  drawSprites();
  

  
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
  endShape(CLOSE);} */
  
/*var song;
var button;

function preload(){
  song = loadSound('assets/daphnis.mp3');
}

function setup() {
  createCanvas(200, 200);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  song.setVolume(0.3);
  background(51);
}

function togglePlaying(){
 if (!song.isPlaying()){
  song.play();
  song.setVolume(0.3);
  button.html("stop");
}else {
  song.stop();
  button.html("play");
}
}
*/

var backgroundColor;
var isOverRectangle;
var isOverRectangle2;
var song;
var nymph;
var water;
var bird; 
var trees;
var woodnymph;
var particles = [];

function preload(){
  daphnis = loadSound('assets/daphnis.mp3');
  prok = loadSound('assets/prok.mp3');
  nymph = loadAnimation("assets/nymph0.png", "assets/nymph1.png");
  bird = loadAnimation("assets/bird0.png", "assets/bird1.png");
  woodnymph = loadAnimation("assets/woodnymph0.png", "assets/woodnymph1.png");
  backdrop = loadImage("assets/background.png");

  
}
 
function setup() 
{
  // set canvas size
  createCanvas(1200, 400);
  //DAPHNIS
  nymph = createSprite(1000, 1000, 120, 120);
  var myAnimation = nymph.addAnimation("flying", "assets/nymph0.png", "assets/nymph1.png");
  nymph.addAnimation("moving", "assets/nymphdance_0.png", "assets/nymphdance_4.png");
  
  //PROK
  bird = createSprite(4000, 300, 120, 120);
  var myAnimation = bird.addAnimation("bird", "assets/bird0.png", "assets/bird1.png");
  //SYRINX
  woodnymph = createSprite(5000, 1150, 120, 120);
  var myAnimation = woodnymph.addAnimation("woods", "assets/woodnymph0.png", "assets/woodnymph1.png");
  
}
 
function draw() 
{
  background(255);
  image(backdrop, 0,0, 1200,400);

  
  //DAPHNIS
 if (mouseX >= 150 && mouseX <= 150+100 && mouseY >= 150 && mouseY <= 150+100) 
  {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }

  if(isOverRectangle == true)
  {
    for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();}
    fill(100);
    cursor(HAND);
  } else {
	fill(200); 
	cursor(ARROW); 
  } 
  
  //PROK
  if (mouseX >= 750 && mouseX <= 750+100 && mouseY >= 50 && mouseY <= 50+100) 
  {
    isOverRectangle2 = true;
  } else {
    isOverRectangle2 = false;
  }
  if(isOverRectangle2 == true)
  {
    fill(100);
    cursor(HAND);
  } else {
	fill(200); 
	cursor(ARROW); 
  } 
  
  scale(.2);
  drawSprites();

  
}
 
function mousePressed(){
  if(isOverRectangle == true)
  {
    daphnis.play();
    particles.push(new Particle(mouseX, mouseY));
  }
 /* if(isOverRectangle2 == true)
  {
    prok.play();
  } */
}

function Particle(x,y) {
  this.x = x;
  this.y = y;
  
  this.history = [];
  
  this.update = function(){
    this.x += random(-10, 10);
    this.y += random(-10, 10);
    
    
    if (this.y > height) {
      this.y = height;
      this.yspeed *= -.03;
    }
    
    var v = createVector(this.x, this.y);
    this.history.push(v);
    
    if (this.history.length > 30) {
      this.history.splice(0,1);
    }
   
  }
  
  this.show = function(){
    nymph.changeAnimation("flying");

    
    
    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      noStroke();
      fill(16, 154, 141);
      ellipse(pos.x, pos.y, i,i); //or 8
      
    }
    endShape();
  }

}






