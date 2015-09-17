function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(204,229,255);

	// set a fill color
	fill(255, 255, 204);
	//sun
	ellipse(50,50,50,50);

	//fill for hair
	fill(70,62,56);
	//full hair
	rect(125,135,150,125);
	//shading for back hair
	fill(40,35,31);
	//back hair
ellipse(200,155,150,150);


	//fill for ears
	fill(237,230,204);
	//left ear and right ear
	ellipse(145,120,70,50);
	ellipse(257,120,70,50);

	//fill for the face
	fill(245,241,222);
	// draw the face
	var diameter = random(150, 150);
	ellipse(200, 125, diameter-10, diameter);

	//fill for hair
	fill(70,62,56);
	//rotate hair
	translate(width/1.90,height/3.6);
	rotate(PI/-1.2);
	arc(100,-50,100,90,0,PI);
	translate(width/5.08,height/4.4);
	rotate(PI/-2.75);
	arc(150,-50,100,90,0,PI)

	//color for hair par
	stroke(245,241,222);
	strokeWeight(3.5);
	//rotate line for hair par
	translate(width/4.74,height/3.67);
	rotate(PI/-1.7);
	line(165,50,125,.5);
}
