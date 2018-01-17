

function setup() { 
	createCanvas(800,800);
	pixelDensity(1);
	loadPixels();
	var maxIter = 100; 
	for (var x = 0; x<width ; x++){
		for(var y = 0; y<height ;y++){
			

			var a = map(x,0,width,-2,2);
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

}

