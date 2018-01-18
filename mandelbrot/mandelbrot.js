var canvx = window.innerWidth;
var canvy = window.innerHeight-40;

function setup() { 
	createCanvas(canvx,canvy);

	pixelDensity(1);
	loadPixels();
	var maxIter = 100; 
	for (var x = 0; x<width/2 ; x++){
		for(var y = 0; y<height ;y++){
			

			var a = map(x,0,width/2,-2,2);
			var b = map(y,0,height,-2,2);
			
			var ca = a;
			var cb = b;

			var n  = 0 ;

			while(n<maxIter){
				var aa = a*a - b*b;
				var bb = 2*a*b; 
				a = aa+ca;
				b = bb+cb;
				
				if(a*a +b*b > 16){
					break;
				}
				n++
			}	

			if(n == maxIter){
				n = 0;
			}
		
			var bright = map(n, 0, maxIter, 0, 1);
			bright = map(sqrt(bright),0,1,0,255)

		
			var pix = (x + y * width) * 4;
			pixels[pix + 0] = bright;
			pixels[pix + 1] = bright;
			pixels[pix + 2] = bright;
			pixels[pix + 3] = 255;
		}
	}

	updatePixels();
	textSize(32);
	fill(255);
	text("MANDELBROT",width/2-250,40);
	textSize(20);
	text("click anywhere on the MANDELBROT image to see the corresponding Julia Set",10,height-20);
	console.log("Window width: " , window.innerWidth , " Window height: " , window.innerHeight);

}





function enCanvas(x,y){
	if(x<=canvx/2 && y<=canvy && mouseX>=0 && mouseY >=0){
		return true;
	}
	else{
		return false;
	}
}

function mouseClicked() {
  if(enCanvas(mouseX,mouseY)){
  		drawJulia(mouseX,mouseY);
  }
}


function drawJulia(px,py){
	var maxIter = 100; 
	px = map(px,0,width/2,-2,2);
	py = -map(py,0,height,-2,2);
	console.log(px,py);
	// console.log(map(px-width/2,0,width/2,-2,2))
	for (var x = width/2; x<width ; x++){
		for(var y = 0; y<height ;y++){
			

			var a = map(x-width/2,0,width/2,-2,2);
			var b = map(y,0,height,-2,2);
			
			
			var n  = 0 ;

			while(n<maxIter){
				var aa = a*a - b*b;
				var bb = 2*a*b; 
				a = aa+px;
				b = bb+py;
				
				if(a*a +b*b > 16){
					
					break;
				}
				n++
			}	

			if(n == maxIter){
				n = 0;
			}
		
			var bright = map(n, 0, maxIter, 0, 1);
			bright = map(sqrt(bright),0,1,0,255)

		
			var pix = (x + y * width) * 4;
			pixels[pix + 0] = bright;
			pixels[pix + 1] = bright;
			pixels[pix + 2] = bright;
			pixels[pix + 3] = 255;
		}
	}

	updatePixels();
	stroke(255);
	line(width/2,0,width/2,canvy);
	console.log("done Julia");
	textSize(32);
	fill(255);
	var titleJ = "JULIA : c = " + Number(px).toFixed(2) + " + " + Number(py).toFixed(2) +" i";  
	text(titleJ,width/2+20,40);
	textSize(32);
	fill(255);
	text("MANDELBROT",width/2-250,40);

}