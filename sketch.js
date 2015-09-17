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
}
