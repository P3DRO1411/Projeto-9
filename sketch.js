
function setup() {
  createCanvas(400,400);
}

function trocarcor(){
  if(keyDown("d")){
    background("red")


  }
  if(keyDown("a")){
    background("blue")


  }
  if(keyDown("s")){
    background("green")


  }
  if(keyDown("w")){
    background("yellow")


  }
}




function draw() 
{
  background(30);
  trocarcor();



}




