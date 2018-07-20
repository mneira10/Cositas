// function Circle(x, y) {
//   this.x = x;
//   this.y = y;
//   this.r = random(20);
//   this.growing = true;
//   this.show = function() {
//     stroke(255);
//     noFill();
//     strokeWeight(1);
//     ellipse(x, y, this.r * 2, this.r * 2);
//
//   }
//   this.grow = function() {
//     this.r += 0.05;
//   }
//   this.edges = function(c) {
//     var ans = true;
//     // console.log(c.length);
//     for (i = 0; i < c.length; i++) {
//       var d = dist(this.x, this.y, c[i].x, c[i].y);
//       if (((d - 4) < (this.r + c[i].r)) && !(c[i] === this)) {
//         ans = false;
//         break;
//       }
//       // console.log(c[i]===this , this.x, c[i].x);
//     }
//     // return ans;
//     // return !(this.x + this.r > width || x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0) && ans;
//     return ans;
//   }
//
//
//
// }
