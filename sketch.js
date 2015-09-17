function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(0,51,102);

	//fill for hair
	fill(70,62,56);
	//full hair
	rect(125,135,150,110);
	//shading for back hair
	fill(40,35,31);
	//back hair
	ellipse(200,155,150,150);

	//fill for ears
	fill(237,230,204);
	//left ear and right ear
	ellipse(145,120,70,50);
	ellipse(257,120,70,50);

	//arms
	fill(245,241,222);
	rect(100,210,50,200);
	rect(260,210,50,200);

	//neck for shirt
	fill(255,255,255);
	ellipse(200,180,85,100);
	//shirt
	rect(124,200,160,170);
	//shoulders
	ellipse(120,224,50,50);
	ellipse(290,224,50,50);
	rect(90,230,80,20);
	rect(240,230,80,20);

	//fill for the face
	fill(245,241,222);
	// draw the face
	var diameter = random(150, 150);
	ellipse(200, 125, diameter-10, diameter);

	//fill for top hair
	fill(70,62,56);
	//rotate top hair
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

	//no stroke for anything
	noStroke (0,0,0);
	//fill for eyes
	fill(255,255,255);
	//rotating white part of eyes
	translate(width/2.20,height/3.6);
	rotate(PI/1.27);
	ellipse (100,100,diameter-120,diameter-115);
	translate(width/4.2,height/1.8);
	rotate(PI/1);
	ellipse (125,100,diameter-120,diameter-115);

	//fill for eye pupil
	fill(0,0,0);
	//eye pupil
	ellipse(53.5,108,diameter-135,diameter-130);
	ellipse(125,108,diameter-135, diameter-130);
	//fill for eye iris
	fill(255,255,255);
	//eye iris
	ellipse(54,113,diameter-146,diameter-140);
	ellipse(125,113,diameter-146, diameter-140);

	//fill for nose
	fill(237,230,204);
	//nose
	rect(80,90,15,50);
	ellipse(80,130,16,16);
 	ellipse(95,130,16,16);
	//fill for nostrils
	fill(0,0,0);
	//nostrils shape
	ellipse (80,135,5,5);
	ellipse (95,135,5,5);

	//fill for mouth
	fill(140,0,3);
	//mouth
	arc(88,150,50,40,0,PI);

	//fill for tongue
	fill(244,113,113);
	//rotate tongue
	translate(width/6.65,height/1.02);
	rotate(PI/-1.15);
	arc(88,165,25,12,0,PI);

	//fill heart
	fill(255,0,0);
	//heart shape
	ellipse(25,110,diameter-110,diameter-125);
	ellipse(15,120,diameter-125,diameter-110);


	//fill and shading for the arms
	fill(237,230,204);
	translate(width/6.65,height/1.02);
	rotate(PI/-.9);
	arc(53.5,300,26,20,0,PI);
	translate(width/6.65,height/1.02);
	rotate(PI/1);
	arc(228,35,26,20,0,PI);




}
