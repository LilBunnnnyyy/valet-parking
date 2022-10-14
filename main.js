//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;
function add() {
	//upload car, and background images on the canvas.
	x=new Image();
    x.onload=p;
    x.src=background_image;

    y= new Image();
    y.onload=t;
    y.src=greencar_image;
}

function p() {
	//Define function ‘uploadBackground’
	ctx.drawImage(x,0,0,canvas.width,canvas.height);
}

function t() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(y,greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(greencar_y>=0){
		greencar_y=greencar_y-10;
p();
t();
    }

} 

function down(){
    if(greencar_y<=350){
		greencar_y=greencar_y+10;
p();
t();
    }

}

function left(){
    if(greencar_x>=0){
		greencar_x=greencar_x-10;
p();
t();
    }

}

function right(){
    if(greencar_x<=700){
greencar_x=greencar_x +10;
p();
t();
    }

}
