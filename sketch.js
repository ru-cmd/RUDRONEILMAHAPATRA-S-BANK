const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {
    
    fill("white")
    textSize(15)
    text("R E V B A I L A", 100,50)
    fill("lightblue")
    text("Hint: Always changing, not constant !!", 100,70)

    fill("white")
    textSize(15)
    text("C U T N I F O N", 700,150)
    fill("lightblue")
    text("Hint: Performs a particular task !!", 700,170)

    fill("white")
    textSize(15)
    text("A T E D A S B A", 100,250)
    fill("lightblue")
    text("Hint: Stores all information !!", 100,270)

}
class Security {

  constructor(){

      this.access1 = createInput("Code1")
      this.access1.position(100,90);
      this.access1.style('background', 'white');  

      this.button1 = createButton('Check');
      this.button1.position(100,120);
      this.button1.style('background', 'lightgrey');    

      this.access2 = createInput("Code1")
      this.access2.position(700,190);
      this.access2.style('background', 'white');  

      this.button2 = createButton('Check');
      this.button2.position(700,220);
      this.button2.style('background', 'lightgrey');

      this.access3 = createInput("Code1")
      this.access3.position(100,290);
      this.access3.style('background', 'white');  

      this.button3 = createButton('Check');
      this.button3.position(100,320);
      this.button3.style('background', 'lightgrey'); 
  }

  display(){

      this.button1.mousePressed(() => {
          if(system.authenticate(accessCode1,this.access1.value())){
              this.button1.hide();
              this.access1.hide();
              score++;
          }
      });

      this.button2.mousePressed(() => {
          if(system.authenticate(accessCode2,this.access2.value())){
              this.button2.hide();
              this.access2.hide();
              score++;
          }
      });

      this.button3.mousePressed(() => {
          if(system.authenticate(accessCode3,this.access3.value())){
              this.button3.hide();
              this.access3.hide();
              score++;
          }
      });

  }
}
class System{

  constructor(){}

  authenticate(actualCode,enteredCode){
      textSize(50);
      fill("black");
      text(code,300,300)
      if(actualCode === enteredCode.toUpperCase()) 
          return true
      else
          return false
  }

}
var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("White");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("White")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}