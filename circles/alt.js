var circles;
var posibles = [];
var img;
function preload() {
  img = loadImage("circ.png");

}

function setup() {
  // createCanvas(img.width, img.height);
  img.resize(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  circles = [];
  pixelDensity(1);
  img.loadPixels();
  for (x = 0; x < img.width; x++) {
    for (y = 0; y < img.height; y++) {
      var pos = (y * width + x) * 4;
      var c = img.pixels[pos];

      if (c < 1) {
        var v = createVector(x, y);
        posibles.push(v);
      }
    }
  }

}

function draw() {
  background(0);
  frameRate(20)

  var total = 5;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 30) {
      noLoop();
      console.log("finished");
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];

    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (var j = 0; j < circles.length; j++) {
          var other = circles[j];
          if (circle !== other) {
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 2 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  var rand = parseInt(random(posibles.length));
  var x = posibles[rand].x;
  var y = posibles[rand].y;
  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}
