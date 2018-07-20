var canvx = window.innerWidth - 20;
var canvy = window.innerHeight - 40;

function setup() {


}

function draw(){
    background(255);
    mouse = createVector(mouseX,mouseY);
    fill(200);
    stroke(0);
    strokeWeight(2);
    ellipse(mouse.x,mouse.y,48,48);

    
}