var c = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  c.push(new Circle(100, 100));
  c.push(new Circle(200, 200));
  // c.push(new Circle(300, 300));
  // console.log(c.x)
  // console.log("hi");
}

function draw() {
  background(0);

  for (i in c) {
    if (c[i].growing) {
      c[i].grow();
      c[i].growing  = c[i].edges() && (!c[i].seToca(c));

      // c[i].show();
    }
    c[i].show();
    console.log(i);

  }


}
