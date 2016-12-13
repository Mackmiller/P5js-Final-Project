var isOverRectangle = false;
var isOverRectangle1 = false;
var isOverRectangle2 = false;
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
var birdex
var wnX, wnY;
var wn1X, wn1Y;
var wn2X, wn2Y;
var fairy = [];
var fairy2 = [];
var birdie = [];

function preload() {
  daphnis = loadSound('assets/daphnis.mp3');
  prok = loadSound('assets/prok.mp3');
  faune = loadSound('assets/faune.mp3');
  nymph = loadAnimation("assets/nymph0.png", "assets/nymph1.png");
  bird = loadAnimation("assets/bird0.png", "assets/bird1.png");
  woodnymph = loadAnimation("assets/woodnymph0.png", "assets/woodnymph1.png");
  backdrop = loadImage("assets/background.png");
  birdex = loadImage("assets/birdex.png");
  flower = loadImage("assets/flower.png");
}

function setup() {
  
  createCanvas(1200, 400);
  
  //WATER FAIRY
  nymph = createSprite(1000, 1000, 120, 120);
  var myAnimation = nymph.addAnimation("flying", "assets/nymph0.png", "assets/nymph1.png");

   for (var i = 0; i < 10; i++) {
    fairy.push(new Particle(200, 200, "fairy"));
  }

  //BIRD
  bird = createSprite(4000, 300, 120, 120);
  var myAnimation = bird.addAnimation("bird", "assets/bird0.png", "assets/bird1.png");
  
   for (var i = 0; i < 4; i++) {
    birdie.push(new Particle(800, 100, "birdie"));
  }

  //FOREST FAIRY
  woodnymph = createSprite(5000, 1150, 120, 120);
  var myAnimation = woodnymph.addAnimation("woods", "assets/woodnymph0.png", "assets/woodnymph1.png");
  
   for (var i = 0; i < 10; i++) {
    fairy2.push(new Particle(1000, 180, "fairy2"));
  }
}

function draw() {
  background(255);
  image(backdrop, 0, 0, 1200, 400);
  textSize(24);
  fill(0, 102, 153);
  text("How can a flute portray a character through music? Click on the water fairy, forest fairy or bird to see their emotions come to life.", 10, 10, 500, 500);

  //WATER FAIRY
  noStroke();
  fill(255, 90);
  rect(110, 250, 200,100);
  textAlign(CENTER);
  s = "The water fairy is uncertain about her feelings towards another fairy. She is nervous, distant, and can't seem to make up her mind.";
  fill(50);
  textSize(12);
  text(s, 110, 270, 200, 200);
  
  if (mouseX >= 150 && mouseX <= 150 + 100 && mouseY >= 150 && mouseY <= 150 + 100) {

    //console.log(fairy.length);
    for (var i = 0; i < fairy.length; i++) {
      fairy[i].update();
      fairy[i].show();
    }
    if (isOverRectangle == false) {
      //console.log("playing");
      daphnis.play();
      isOverRectangle = true;
    }
  } else {
    for (var i = 0; i < fairy.length; i++) {
      fairy[i].x = 200;
      fairy[i].y = 200;
    }

    daphnis.stop();
    isOverRectangle = false;
  }


  //BIRD
  noStroke();
  fill(255, 90);
  rect(835, 20, 200,100);
  textAlign(CENTER);
  s = "The bird is a happy creature, always flittering and fluttering around the forest without a care in the world, chirping with no end.";
  fill(50);
  textSize(12);
  text(s, 835, 40, 200, 200);
  if (mouseX >= 750 && mouseX <= 750 + 100 && mouseY >= 50 && mouseY <= 50 + 100) {

    //console.log(birdie.length);
    for (var i = 0; i < birdie.length; i++) {
      birdie[i].update();
      birdie[i].show();
    }
    if (isOverRectangle1 == false) {
      //console.log("playing");
      prok.play();
      isOverRectangle1 = true;
    }
  } else {
    for (var i = 0; i < birdie.length; i++) {
      birdie[i].x = 800;
      birdie[i].y = 100;
    }

    prok.stop();
    isOverRectangle1 = false;
  }
  
   //FOREST FAIRY
  noStroke();
  fill(255, 90);
  rect(735, 180, 200,100);
  textAlign(CENTER);
  s = "The forest fairy is a wanderer. She prefers solitude in her own space, and doesn't even realize the number of admirers she has.";
  fill(50);
  textSize(12);
  text(s, 735, 200, 200, 200);
    if (mouseX >= 950 && mouseX <= 950+100 && mouseY >= 130 && mouseY <= 130+100) {

    //console.log(birdie.length);
    for (var i = 0; i < fairy2.length; i++) {
      fairy2[i].update();
      fairy2[i].show();
    }
    if (isOverRectangle2 == false) {
      //console.log("playing");
      faune.play();
      isOverRectangle2 = true;
    }
  } else {
    for (var i = 0; i < fairy2.length; i++) {
      fairy2[i].x = 1000;
      fairy2[i].y = 180;
    }

    faune.stop();
    isOverRectangle2 = false;
  }

  push();
  scale(.2);
  drawSprites();
  pop();
}

function Particle(x, y, type) {
  this.x = x;
  this.y = y;
  this.history = [];
  this.type = type;

  this.update = function() {
   if(type == "fairy"){
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
      this.history.splice(0, 1);
    }}
   if(type == "birdie"){
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
  if(type == "fairy2"){
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


  this.show = function() {

  if(type == "fairy"){
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      noStroke();
      fill(16, 154, 141);
      ellipse(pos.x, pos.y, i, i); //or 8

    }
    endShape();
  }
   
  if(type == "birdie"){
    beginShape();
  for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      image(birdex, pos.x, pos.y, 30,30); //or 8
    }
    endShape();
  }
    
  if(type == "fairy2"){
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

  }
}