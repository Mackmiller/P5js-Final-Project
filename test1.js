var backgroundColor;
var isOverRectangle;
var isOverRectangle1;
var isOverRectangle2;
var song;
var nymph;
var water;
var bird; 
var trees;
var woodnymph;
var particles = [];
var bird1;
var leaf;
var leaf1;
var flower;
var bud;
var diameter = 0;
var maxDiameter = 50;
var velocity = 1;
var birdex
var wnX, wnY;
var wn1X, wn1Y;
var wn2X, wn2Y;
var x, y;

function preload(){
  daphnis = loadSound('assets/daphnis.mp3');
  prok = loadSound('assets/prok.mp3');
  faune = loadSound('assets/faune.mp3');
  nymph = loadAnimation("assets/nymph0.png", "assets/nymph1.png");
  bird = loadAnimation("assets/bird0.png", "assets/bird1.png");
  woodnymph = loadAnimation("assets/woodnymph0.png", "assets/woodnymph1.png");
  backdrop = loadImage("assets/background.png");
  birdex = loadImage("assets/birdex.png");
  leaf = loadImage("assets/leaf.png");
  leaf1 = loadImage("assets/leaf1.png");
  
  flower = loadImage("assets/flower.png");
}
 
function setup() 
{
  // set canvas size
  createCanvas(1200, 400);
  //DAPHNIS
  nymph = createSprite(1000, 1000, 120, 120);
  var myAnimation = nymph.addAnimation("flying", "assets/nymph0.png", "assets/nymph1.png");
  

  
 
  //PROK
  bird = createSprite(4000, 300, 120, 120);
  var myAnimation = bird.addAnimation("bird", "assets/bird0.png", "assets/bird1.png");
  
  //FAUNE
  woodnymph = createSprite(5000, 1150, 120, 120);
  var myAnimation = woodnymph.addAnimation("woods", "assets/woodnymph0.png", "assets/woodnymph1.png");
  
 
}
 
function draw() 
{
  background(255);
  image(backdrop, 0,0, 1200,400);
  textSize(24);
  text("How can a flute portray a character through music? Click on the water fairy, forest fairy or bird to find out.", 10, 10, 500,500);
  
  if(nymph.mouseIsPressed){
    for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    
    if(i == 0){
      wnX = particles[0].x;
      wnY = particles[0].y;
    }
  }
  
  daphnis.play();
  particles.push(new Particle(mouseX, mouseY));
    
  }else{
    particles.pop(new Particle(mouseX, mouseY));
    daphnis.stop();
  }
  
  //WATER NYMPH
/*if (mouseX >= 150 && mouseX <= 150+100 && mouseY >= 150 && mouseY <= 150+100) 
  {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }
  if(isOverRectangle == true)
  {
    for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    
    if(i == 0){
      wnX = particles[0].x;
      wnY = particles[0].y;
    }
  }
}


  
  //PROK
  if (mouseX >= 750 && mouseX <= 750+100 && mouseY >= 50 && mouseY <= 50+100) 
  {
    isOverRectangle1 = true;
  } else {
    isOverRectangle1 = false;
  }
  if(isOverRectangle1 == true)
  {
    for (var i = 0; i < particles.length; i++) {
    particles[i].update1();
    particles[i].show1();
    
    if(i == 0){
      wn1X = particles[0].x;
      wn1Y = particles[0].y;
    }
      
    }
    fill(100);
    cursor(HAND);
  } else {
	fill(200); 
	cursor(ARROW); 

  } 
  push();
  scale(.2);
  drawSprites();
  pop();
  
    //FAUNE
  if (mouseX >= 950 && mouseX <= 950+100 && mouseY >= 130 && mouseY <= 130+100) 
  {
    isOverRectangle2 = true;
  } else {
    isOverRectangle2 = false;
  }
  if(isOverRectangle2 == true)
  {
    for (var i = 0; i < particles.length; i++) {
    particles[i].update2();
    particles[i].show2();
    
    if(i == 0){
      wn2X = particles[0].x;
      wn2Y = particles[0].y;
    }
      
    }
    fill(100);
    cursor(HAND);
  } else {
	fill(200); 
	cursor(ARROW); 

  } */
  
  if(nymph.mouseIsPressed == true){
    daphnis.play();
    particles.push(new Particle(mouseX, mouseY));
      for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
    
    if(i == 0){
      wnX = particles[0].x;
      wnY = particles[0].y;
    }}
  
  
  push();
  scale(.2);
  drawSprites();
  pop();
  
//fill(0);
//image(bird1, wn1X,wn1Y, 30,30);


  


  
}
 
/*function mouseIsPressed(){
  if(nymph.mouseIsPressed == true)
  {
    daphnis.play();
    particles.push(new Particle(mouseX, mouseY));
  }
 if(isOverRectangle1 == true)
  {
    prok.play();
    particles.push(new Particle(mouseX, mouseY));
  } 

if(isOverRectangle2 == true)
  {
    faune.play();
    particles.push(new Particle(mouseX, mouseY));
  } 

}*/


function Particle(x,y) {
  this.x = x;
  this.y = y;
  this.history = [];
  
  this.update = function(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
    
    if (this.y > height) {
      this.y = height;
      this.yspeed *= -.3;
    }
    
    if (this.x > width) {
      this.x = width;
      this.xspeed *= -.9;
    }
    
    var v = createVector(this.x, this.y);
    this.history.push(v);
    
    if (this.history.length > 15) {
      this.history.splice(0,1);
    }
    
  
  }
  
  this.update1 = function(){
    this.x += random(-30, 30);
    this.y += random(-20, 20);
    
   if (this.y > height) {
      this.y = (height);
      this.Yspeed = -2;
    } 
   if (this.x > width) {
      this.x = width;
      this.xspeed *= -.9;
    }
    
    var v = createVector(this.x, this.y);
    this.history.push(v);
    
    if (this.history.length > 30) {
      this.history.splice(0,1);
    }
  }
  
  this.update2 = function(){
    this.x += random(-4, 3);
    this.y += random(-4, 4);
   
    
    if (this.y > height) {
      this.y = height;
      this.y.speed *= -.9;
    }
    
   if (this.x > width) {
      this.x = width;
      this.x.speed *= -20;
    }
    var v = createVector(this.x, this.y);
    this.history.push(v);
    
    if (this.history.length > 30) {
      this.history.splice(.8,1);
      
    this.move = function(){
      this.x += 2;
      this.y =+ 2;
    }
    }
    
    
    
  
  }
  
  this.show = function(){
  

    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      noStroke();
      fill(16, 154, 141);
      ellipse(pos.x, pos.y, i,i); //or 8
      
    }
    endShape();
  }
  
  this.show1 = function(){
    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      image(birdex, pos.x, pos.y, 30,30); //or 8
      
    }
    endShape();
  }



 this.show2 = function(){
    beginShape();
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      noStroke();
      fill(180,	214, 120);
      image(flower, pos.x, pos.y, 35, 35);
      //ellipse(pos.x, pos.y, 4,4); //or 8
    }
    endShape();
    }
    
  } 
  
 