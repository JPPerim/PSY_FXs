{//vars
{//IO
//slider
var SlidVolS1;
var SlidRevS1;
var SlidDelS1;

var SlidVolS2;
var SlidRevS2;
var SlidDelS2;

var SlidVolS3;
var SlidRevS3;
var SlidDelS3;

var SlidVolS4;
var SlidRevS4;
var SlidDelS4;

var ScWidth = screen.width;
//button
var BttPlS1;
var BttLpS1;

var BttPlS2;
var BttLpS2;

var BttPlS3;
var BttLpS3;

var BttPlS4;
var BttLpS4;

//checkbox
var CckRevS1;
var CckDelS1;

var CckRevS2;
var CckDelS2;

var CckRevS3;
var CckDelS3;

var CckRevS4;
var CckDelS4;

}

{//SRC
var Sound1;
var Sound2;
var Sound3;
var Sound4;
//img
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
//font
var font1;
}

{//Audio Var
//Reverb
rev1 = new p5.Reverb();
rev2 = new p5.Reverb();
rev3 = new p5.Reverb();
rev4 = new p5.Reverb();
//delay
del1 = new p5.Delay();
del2 = new p5.Delay();
del3 = new p5.Delay();
del4 = new p5.Delay();
//amp
amp1 = new p5.Amplitude();

}

{//Var
    //pos
    var pos1x = 20, pos1y = 250;
    var pos2x = pos1x + 250,pos2y = 250;
    var pos3x = pos2x + 250,pos3y = 250;
    var pos4x = pos3x + 250,pos4y = 250;

    //aux
    var hang1 = 0;

}
}

{//Ele Creat
function preload(){
    //sound
    Sound1 = loadSound('src/faixa1.wav');
    Sound2 = loadSound('src/faixa2.wav');
    Sound3 = loadSound('src/faixa3.wav');
    Sound4 = loadSound('src/faixa4.mp3');

    //img
    img1 = loadImage('src/Amp_Texture.png');
    img2 = loadImage('src/AcoE_Texture.jpg');
    img3 = loadImage('src/DarkWood_Texture.jpg');
    img4 = loadImage('src/Amp2_Texture.png');
    img5 = loadImage('src/dark_Texture.png');
    img6 = loadImage('src/AudioJack_Texture.png');

    //font
    font1 = loadFont('assets/Adlinnaka-BoldDemo.ttf');
}

function CckCreate(){
//Sound1
    //Reverb
    CckRevS1 = createCheckbox('', false);
    CckRevS1.position(pos1x + 120,pos1y + 90);
    CckRevS1.style('rotate',90);
    CckRevS1.changed(Reverb1);

    //delay
    CckDelS1 = createCheckbox('', false);
    CckDelS1.position(pos1x + 180,pos1y + 90);
    CckDelS1.style('rotate',90);
    CckDelS1.changed(DelS1);

//Sound2
    //Reverb
    CckRevS2 = createCheckbox('', false);
    CckRevS2.position(pos2x + 120,pos2y + 90);
    CckRevS2.style('rotate',90);
    CckRevS2.changed(Reverb2);

    //delay
    CckDelS2 = createCheckbox('', false);
    CckDelS2.position(pos2x + 180,pos2y + 90)
    CckDelS2.style('rotate',90);
    CckDelS2.changed(DelS2);

//Sound3
    //Reverb
    CckRevS3 = createCheckbox('', false);
    CckRevS3.position(pos3x + 120,pos3y + 90);
    CckRevS3.style('rotate',90);
    CckRevS3.changed(Reverb3);

    //delay
    CckDelS3 = createCheckbox('', false);
    CckDelS3.position(pos3x + 180,pos3y + 90)
    CckDelS3.style('rotate',90);
    CckDelS3.changed(DelS3);

//Sound4
    //Reverb
    CckRevS4 = createCheckbox('', false);
    CckRevS4.position(pos4x + 120,pos4y + 90);
    CckRevS4.style('rotate',90);
    CckRevS4.changed(Reverb4);

    //delay
    CckDelS4 = createCheckbox('', false);
    CckDelS4.position(pos4x + 180,pos4y + 90)
    CckDelS4.style('rotate',90);
    CckDelS4.changed(DelS4);

}

function SlidCreate(){
//sound1
  //vol
  SlidVolS1 = createSlider(0,100,50);
  SlidVolS1.position(pos1x,pos1y);
  SlidVolS1.style('rotate', 90);
  SlidVolS1.style('width', '150px');
  SlidVolS1.changed(chVol1);

  //reverb
  SlidRevS1 = createSlider(0,10,5);
  SlidRevS1.position(pos1x + 55,pos1y);
  SlidRevS1.style('rotate', 90);
  SlidRevS1.style('width', '150px');
  SlidRevS1.changed(Reverb1);

  //delay
  SlidDelS1 = createSlider(1.1,10,5);
  SlidDelS1.position(pos1x + 115,pos1y);
  SlidDelS1.style('rotate',90);
  SlidDelS1.style('width', '150px');
  SlidDelS1.changed(DelS1);

//sound2
  //vol
  
  SlidVolS2 = createSlider(0,100,50);
  SlidVolS2.position(pos2x,pos2y);
  SlidVolS2.style('rotate', 90);
  SlidVolS2.style('width', '150px');
  SlidVolS2.changed(chVol2);

  //reverb
  SlidRevS2 = createSlider(0,10,5);
  SlidRevS2.position(pos2x + 55,pos2y);
  SlidRevS2.style('rotate', 90);
  SlidRevS2.style('width', '150px');
  SlidRevS2.changed(Reverb2);

  //delay
  SlidDelS2 = createSlider(1.1,10,5);
  SlidDelS2.position(pos2x + 115,pos2y);
  SlidDelS2.style('rotate',90);
  SlidDelS2.style('width', '150px');
  SlidDelS2.changed(DelS2);

//sound3
  //vol
  
  SlidVolS3 = createSlider(0,100,50);
  SlidVolS3.position(pos3x,pos3y);
  SlidVolS3.style('rotate', 90);
  SlidVolS3.style('width', '150px');
  SlidVolS3.changed(chVol3);

  //reverb
  SlidRevS3 = createSlider(0,10,5);
  SlidRevS3.position(pos3x + 55,pos3y);
  SlidRevS3.style('rotate', 90);
  SlidRevS3.style('width', '150px');
  SlidRevS3.changed(Reverb3);

  //delay
  SlidDelS3 = createSlider(1.1,10,5);
  SlidDelS3.position(pos3x + 115,pos3y);
  SlidDelS3.style('rotate',90);
  SlidDelS3.style('width', '150px');
  SlidDelS3.changed(DelS3);
  
//sound4
  //vol
  
  SlidVolS4 = createSlider(0,100,50);
  SlidVolS4.position(pos4x,pos4y);
  SlidVolS4.style('rotate', 90);
  SlidVolS4.style('width', '150px');
  SlidVolS4.changed(chVol4);

  //reverb
  SlidRevS4 = createSlider(0,10,5);
  SlidRevS4.position(pos4x + 55,pos4y);
  SlidRevS4.style('rotate', 90);
  SlidRevS4.style('width', '150px');
  SlidRevS4.changed(Reverb4);

  //delay
  SlidDelS4 = createSlider(1.1,10,5);
  SlidDelS4.position(pos4x + 115,pos4y);
  SlidDelS4.style('rotate',90);
  SlidDelS4.style('width', '150px');
  SlidDelS4.changed(DelS4);
}

function ButtCreate(){
    //Sound1

    BttPlS1 = createButton('Play');
    BttPlS1.mousePressed(PlaySound1);
    BttPlS1.position(pos1x + 22,pos1y - 40);
    BttLpS1 = createButton('Loop');
    BttLpS1.mousePressed(LoopSound1);
    BttLpS1.position(pos1x + 22,pos1y + 50);

    //sound2
    
    BttPlS2 = createButton('Play');
    BttPlS2.mousePressed(PlaySound2);
    BttPlS2.position(pos2x + 22,pos2y - 40);
    BttLpS2 = createButton('Loop');
    BttLpS2.mousePressed(LoopSound2);
    BttLpS2.position(pos2x + 22,pos2y + 50);

    //Sound3

    BttPlS3 = createButton('Play');
    BttPlS3.mousePressed(PlaySound3);
    BttPlS3.position(pos3x + 22,pos3y - 40);
    BttLpS3 = createButton('Loop');
    BttLpS3.mousePressed(LoopSound3);
    BttLpS3.position(pos3x + 22,pos3y + 50);

    //sound4
    
    BttPlS4 = createButton('Play');
    BttPlS4.mousePressed(PlaySound4);
    BttPlS4.position(pos4x + 22,pos4y - 40);
    BttLpS4 = createButton('Loop');
    BttLpS4.mousePressed(LoopSound4);
    BttLpS4.position(pos4x + 22,pos4y + 50);
}
}

{//sounds
{//Sound1
//vol
function chVol1(){
    Sound1.setVolume(log(map(SlidVolS1.value(),0,100,0.01,0.9)));
}

//play
function PlaySound1(){
    if (!Sound1.isPlaying()){
        Sound1.play();
            
    }else{
        Sound1.stop();
    }
}

//loop
function LoopSound1(){
    if (!Sound1.isLooping()){
        Sound1.setLoop(true);
        Sound1.play();
    }else{
        Sound1.setLoop(false);
        Sound1.stop();
    }
    
}
}

{//sound2
//vol
function chVol2(){
    Sound2.setVolume(log(map(SlidVolS2.value(),0,100,0.01,0.9)));
}

//play
function PlaySound2(){
    if (!Sound2.isPlaying()){
        Sound2.play();
            
    }else{
        Sound2.stop();
    }
}
//loop
function LoopSound2(){
    if (!Sound2.isLooping()){
        Sound2.setLoop(true);
        Sound2.play();
    }else{
        Sound2.setLoop(false);
        Sound2.stop();
    }
    
}
}

{//sound3
//vol
function chVol3(){
    Sound3.setVolume(log(map(SlidVolS3.value(),0,100,0.01,0.9)));
}

//play
function PlaySound3(){
    if (!Sound3.isPlaying()){
        Sound3.play();
            
    }else{
        Sound3.stop();
    }
}
//loop
function LoopSound3(){
    if (!Sound3.isLooping()){
        Sound3.setLoop(true);
        Sound3.play();
    }else{
        Sound3.setLoop(false);
        Sound3.stop();
    }
    
}
}

{//sound4
//vol
function chVol4(){
    Sound2.setVolume(log(map(SlidVolS4.value(),0,100,0.01,0.9)));
}

//play
function PlaySound4(){
    if (!Sound4.isPlaying()){
        Sound4.play();
            
    }else{
        Sound4.stop();
    }
}
//loop
function LoopSound4(){
    if (!Sound4.isLooping()){
        Sound4.setLoop(true);
        Sound4.play();
    }else{
        Sound4.setLoop(false);
        Sound4.stop();
    }
    
}
}
}

{//effects
{//effect1
//reverb
function Reverb1(){
    if (CckRevS1.checked()){
        rev1.connect();
        rev1.process(Sound1,5,SlidRevS1.value());
    }else{
        rev1.disconnect();
    }
    
}

//delay
function DelS1(){
    if (CckDelS1.checked()){
        del1.connect();
        del1.process(Sound1,.12, 1/SlidDelS1.value(), 2300);
    }else{
        del1.disconnect();
    
    }
    
}
}

{//effect2
//reverb
function Reverb2(){
    if (CckRevS2.checked()){
        rev2.connect();
        rev2.process(Sound2,5,SlidRevS2.value());
    }else{
        rev2.disconnect();
    }
    
}

//delay
function DelS2(){
    if (CckDelS2.checked()){
        del2.connect();
        del2.process(Sound2,.12, 1/SlidDelS2.value(), 2300);
    }else{
        del2.disconnect();
    
    }
    
}
}

{//effect3
//reverb
function Reverb3(){
    if (CckRevS3.checked()){
        rev3.connect();
        rev3.process(Sound3,5,SlidRevS3.value());
    }else{
        rev3.disconnect();
    }
    
}

//delay
function DelS3(){
    if (CckDelS3.checked()){
        del3.connect();
        del3.process(Sound3,.12, 1/SlidDelS3.value(), 2300);
    }else{
        del3.disconnect();
    
    }
    
}
}

{//effect4
//reverb
function Reverb4(){
    if (CckRevS4.checked()){
        rev4.connect();
        rev4.process(Sound4,5,SlidRevS4.value());
    }else{
        rev4.disconnect();
    }
    
}

//delay
function DelS4(){
    if (CckDelS4.checked()){
        del4.connect();
        del4.process(Sound4,.12, 1/SlidDelS4.value(), 2300);
    }else{
        del4.disconnect();
    
    }
    
}
}
}


function setup() {
  createCanvas(1200, 400);
  SlidCreate();
  ButtCreate();
  CckCreate();
  angleMode(DEGREES);
}

function draw() {
  //bg
  background(30);
  image(img2, 0, 0, width, height);


  push();
  textFont(font1);
  textSize(50);
  fill(0);
  strokeWeight(6);
  text('Psy FXs',75 , 80);
  textSize(15);
  fill(50);
  text('v. 1.0.0.1',85 , 130);

  pop();
  
  push();
  translate(width-200, 0);
  textFont(font1);
  textSize(15);
  fill(0);
  strokeWeight(6);
  text('Andre Perim',95 , 20);
  text('Joao Perim',105 , 40);
    
  pop();
  {//visor


  push();
  translate(width/2,80);
  image(img3, -75, -75, 250, 150);
  image(img1, -50, -50, 200, 100);
  image(img4, -50, -75, 200, 100);

  var lvl1 = amp1.getLevel();
  var ang1 = map(lvl1,0,0.7,50,130);
  hang1 = hang1 - 5;
  if (hang1 < ang1){
      hang1 = ang1;
  }

  var h = hang1;
  stroke(0);
  translate(50,50);
  push();
  rotate(hang1);
  line(0,0,-80,0);
  pop();
  pop();


  }

  {//draws
  push();
  translate(0,200);
  text('DELAY', 190, -18);
  text('REVERB', 125, -18);
  text('VOL.', 80, -18);
  stroke(0,0,0,80);
  strokeWeight(3);
  noFill();
  rect( 40, -30, 200, 200);
  line( 120, -30, 120, 170);
  line( 180, -30, 180, 170);
  image(img5, 40,-30,200, 200);
  pop();

  push();
  translate(250,200);
  text('DELAY', 190, -18);
  text('REVERB', 125, -18);
  text('VOL.', 80, -18);
  stroke(0,0,0,80);
  strokeWeight(3);
  noFill();
  rect( 40, -30, 200, 200);
  line( 120, -30, 120, 170);
  line( 180, -30, 180, 170);
  image(img5, 40,-30,200, 200);
  pop();

  push();
  translate(500,200);
  text('DELAY', 190, -18);
  text('REVERB', 125, -18);
  text('VOL.', 80, -18);
  stroke(0,0,0,80);
  strokeWeight(3);
  noFill();
  rect( 40, -30, 200, 200);
  line( 120, -30, 120, 170);
  line( 180, -30, 180, 170);
  image(img5, 40,-30,200, 200);
  pop();

  push();
  translate(750,200);
  text('DELAY', 190, -18);
  text('REVERB', 125, -18);
  text('VOL.', 80, -18);
  stroke(0,0,0,80);
  strokeWeight(3);
  noFill();
  rect( 40, -30, 200, 200);
  line( 120, -30, 120, 170);
  line( 180, -30, 180, 170);
  image(img5, 40,-30,200, 200);
  pop();

  push();
  translate(1100,250);
  text('IN', 5, 0);
  image(img6, 0,0,25,25);
  translate(0,50);
  text('OUT', 0, 0);
  image(img6, 0, 0, 25, 25);
  pop();
      
    //button feed back

  if (Sound1.isPlaying()){
      BttLpS1.style('background-color','#F0E68C');
      BttLpS1.style('border','1px solid #C0C0C0');
      BttPlS1.style('background-color','#F0E68C');
      BttPlS1.style('border','1px solid #C0C0C0');
  }
  else{
      BttLpS1.style('background-color', '#F5F5F5');
      BttLpS1.style('border','2px solid #2F4F4F');
      BttPlS1.style('background-color', '#F5F5F5');
      BttPlS1.style('border','2px solid #2F4F4F');
      
  }
  if (Sound2.isPlaying()){
    BttLpS2.style('background-color','#F0E68C');
    BttLpS2.style('border','1px solid #C0C0C0');
    BttPlS2.style('background-color','#F0E68C');
    BttPlS2.style('border','1px solid #C0C0C0');
  }
  else{
    BttLpS2.style('background-color', '#F5F5F5');
    BttLpS2.style('border','2px solid #2F4F4F');
    BttPlS2.style('background-color', '#F5F5F5');
    BttPlS2.style('border','2px solid #2F4F4F');
    
  }
  if (Sound3.isPlaying()){
    BttLpS3.style('background-color','#F0E68C');
    BttLpS3.style('border','1px solid #C0C0C0');
    BttPlS3.style('background-color','#F0E68C');
    BttPlS3.style('border','1px solid #C0C0C0');
  }
  else{
    BttLpS3.style('background-color', '#F5F5F5');
    BttLpS3.style('border','2px solid #2F4F4F');
    BttPlS3.style('background-color', '#F5F5F5');
    BttPlS3.style('border','2px solid #2F4F4F');
    
  }
  if (Sound4.isPlaying()){
    BttLpS4.style('background-color','#F0E68C');
    BttLpS4.style('border','1px solid #C0C0C0');
    BttPlS4.style('background-color','#F0E68C');
    BttPlS4.style('border','1px solid #C0C0C0');
  }
  else{
    BttLpS4.style('background-color', '#F5F5F5');
    BttLpS4.style('border','2px solid #2F4F4F');
    BttPlS4.style('background-color', '#F5F5F5');
    BttPlS4.style('border','2px solid #2F4F4F');
    
  }
      
  }
  


}

function touchStarted() {
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }
}
