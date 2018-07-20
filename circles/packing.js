// var c = [];
// var posibles = [];
// var total = 1;
// var img;
//
// function preload() {
//   img = loadImage("2017.png");
// }
//
// function setup() {
//   // createCanvas(windowWidth, windowHeight);
//   createCanvas(900, 400);
//
//   frameRate(30);
//   pixelDensity(1);
//   img.loadPixels();
//   for (x = 0; x < img.width; x++) {
//     for (y = 0; y < img.height; y++) {
//       var pos = (y * width + x) * 4;
//       var c = img.pixels[pos];
//
//       if (c > 1) {
//         var v = createVector(x, y);
//         posibles.push(v);
//       }
//     }
//   }
//   // console.log(img.pixels.length);
//   // console.log(posibles.length);
//
// }
//
//
//
// function draw() {
//   background(0);
//   // background(img);
//
//
//
//   var tries = 0;
//   var count = 0;
//   while (count < total) {
//     if (createCircle(c)) {
//       count++;
//     }
//     if (tries > 5000) {
//       noLoop();
//       console.log("PROGRAM TERMINATED");
//       break;
//     }
//     tries++;
//   }
//
//   for (var i = 0; i < c.length; i++) {
//     if (c[i].growing) {
//       c[i].grow();
//       c[i].growing = c[i].edges(c);
//
//     }
//     c[i].show();
//
//   }
// }
//
// function valid(x, y, r, c) {
//   var ans = true;
//   for (var i = 0; i < c.length; i++) {
//     var d = dist(x, y, c[i].x, c[i].y);
//     if ((d - 10) < (r + c[i].r)) {
//       ans = false;
//       break;
//     }
//   }
//   return ans;
// }
//
//
// function createCircle(c) {
//
//   rand = parseInt(random(posibles.length));
//   x = posibles[rand].x;
//   y = posibles[rand].y;
//   r = 5;
//   if (valid(x, y, r, c)) {
//     c.push(new Circle(x, y, r));
//     return true;
//
//   }
//   return false;
// }
