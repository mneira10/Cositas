function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 50;
  this.growing = true;
  this.show = function() {
    stroke(255);
    noFill();
    strokeWeight(1);
    ellipse(x, y, this.r * 2, this.r * 2);

  }
  this.grow = function() {
    this.r += 1;
  }
  this.edges = function() {
    return !(this.x + this.r > width || x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0);
  }
  this.seToca = function(c) {
    var ans = false;
    for (i in c) {
      var d = dist(this.x, this.y, c[i].x, c[i].y);
      if (d - 2 <= (this.r + c[i].r) && !(c[i] === this)) {
        ans = true;
        break;
      }
      // console.log(c[i]===this , this.x, c[i].x);
    }
    return ans;
  }


}
