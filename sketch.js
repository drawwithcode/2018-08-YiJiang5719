var value = 255;
var imgLINK;
var imgMIFA;
var mySong;

function preload() {
  imgLINK = loadImage('assets/Link.png');
  imgMIFA = loadImage('assets/MIFA.png');
  mySong = loadSound('assets/KillerSoap - Distance copy.mp3');
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

  // by defaults equals to 30
  setShakeThreshold(30);
  frameRate(12);
  mySong.play();

}

function draw() {
  background(255);
  //fill(255-value);
  imageMode(CENTER);

  tint(255, value);
  image(imgMIFA,width/2,height/2,width,width);
  tint(255, 255);
  image(imgLINK,width/2,height/2,width,width);
  textSize(24);
  textAlign(CENTER);
  text('via Shaking hands, memories will be gone',width/2,height-200)
}

function deviceShaken() {
  value = value - 10;
  if (value <= 0) {
    value = 255;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
