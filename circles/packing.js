var c = [];
var n = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(40);
  count = 0;
  while(count<n){
    x = random(windowWidth);
    y = random(windowHeight);
    r = random(50);
    if(valid(x,y,r)){
      c.push(new Circle(x,y,r));
      count++;
    }
  }
  // c.push(new Circle(300, 300));
  // console.log(c.x)
  // console.log("hi");
}

function draw() {
  background(0);

  for (var i = 0; i < c.length; i++) {
    if (c[i].growing) {
      c[i].grow();
      c[i].growing = c[i].edges(c);

    }
    c[i].show();

  }
}

function valid(x, y, r) {
  var ans = true;
  for (var i = 0; i < c.length; i++) {
    var d = dist(x, y, c[i].x, c[i].y);
    if(d+5<r+c[i].r){
      ans = false;
      break;
    }
  }
  return ans;
}
