Array.matrix = function(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
}

function randGrid(grid){
	for (let i = 0 ; i<cols ; i++){
		for (let j= 0 ; j<rows ; j++){
			let  temp = floor(random(2));
			grid[i][j] = temp;

		}
	}
	return grid;
}

let grid;
let oGrid;
let cols ;
let rows ;
let resolution = 10;  

function setup() { 
	createCanvas(600,400);
	cols = width / resolution;
	rows = height / resolution;
	grid = new Array.matrix(cols,rows,0);
	oGrid = new Array.matrix(cols,rows,0);
	grid = randGrid(grid);
	frameRate(5);

	
}


function draw() { 
	background(0);

	pintelo();
	// console.log(cuente(1,1,grid,grid)+ " " +decida(grid[1,1],cuente(1,1,grid,grid)));
	piense(oGrid,grid);

	

}


function pintelo(){

	for (let i = 0 ; i<cols ; i++){
		for (let j= 0 ; j<rows ; j++){

			let x = i*resolution;
			let y = j*resolution;
			if(grid[i][j] ==1 ){
				fill(255);
				stroke(0);
				rect(x,y,resolution-1,resolution-1);
			}
			
		}
	}
}

function piense(viejo, nuevo){
	viejo = nuevo; 
	for (let i = 0 ; i<cols ; i++){
		for (let j= 0 ; j<rows ; j++){
			nuevo[i][j] = decida(viejo[i][j],cuente(i,j,viejo,nuevo));
		}
	}
}

function cuente(x,y,viejo,nuevo){
	let suma = 0 ;
	for (let i = -1 ; i<2 ; i++){
		for (let j= -1 ; j<2 ; j++){
			suma += viejo[(y+i+cols)%cols][(x+j+rows)%rows];
		}
	}
	suma -= viejo[x][y];
	return suma;
}

function decida(yo,cuenta){
	if(yo){
		if(cuenta<2 || cuenta >3){
			return 0;
		}
		else{
			return 1; 
		}
	}
	else{
		if(cuenta ==3){
			return 1;
		}
		else{
			return 0;
		}

	}
}
