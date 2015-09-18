function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

	gmainColor = color(100, 100, 200);
	gsecondColor = color(237,230,204);
	bmainColor = color (249,237,228);
	bsecondColor = color (229,209,183);
	whiteColor = color (255,255,255);

console.log(color);
}

function draw() {
	var nightOne = random(1);
	//draw background
	if (nightOne < .25) {
			//navy blue background
			background(0,51,102);

	} else {
			//black background
			background (0,0,0);
}
	//fill for hair
	fill(70,62,56);
	//full hair
	rect(125,135,150,110);
	//shading for back hair
	fill(40,35,31);
	//back hair
	ellipse(200,155,150,150);
	//fill for ears
	fill(gsecondColor);
	//left ear and right ear
	ellipse(145,120,70,50);
	ellipse(257,120,70,50);
	//arms
	fill(245,241,222);
	rect(100,210,50,200);
	rect(260,210,50,200);
	//neck for shirt
	fill(whiteColor);
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

	var diameter = (150, 150);
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
	fill(whiteColor);
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
	fill(gsecondColor);
	//nose
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

	var diameter = random(150, 150);
	//fill heart
	fill(random(255),random(0),random(0));
	ellipse(25,110,diameter-110,diameter-125);
	ellipse(15,120,diameter-125,diameter-110);
	//fill and shading for the arms
	fill(gsecondColor);
	translate(width/6.65,height/1.02);
	rotate(PI/-.9);
	arc(53.5,300,26,20,0,PI);
	translate(width/6.65,height/1.02);
	rotate(PI/1);
	arc(228,35,26,20,0,PI);













	var partMoon = random(1);
		//draw moon background
	if (partMoon < .25) {
			//navy moon background
			fill(0,51,102);
			ellipse(-30,270,55,55);

	} else {
			//black moon background

			fill(0,0,0);
			ellipse(-30,270,55,55);
	noStroke();
	}


	//yellow stars
		var backStar = random (1.5,4);
		if (backStar > 1) {
				fill(255,255,0);
				var backStars;
				backStars = random(1.5,4);
				ellipse(random(-640, 0), random(0, -100),backStars,backStars);
				ellipse(random(-640, 50), random(0, -50),backStars,backStars);
				ellipse(random(-640, 0), random(0, 50),backStars,backStars);
				ellipse(random(-500, 0), random(0, 100),backStars,backStars);
				ellipse(random(-100, 640), random(0, 0),backStars,backStars);
				ellipse(random(-350, 640), random(0, 0),backStars,backStars);
				ellipse(random(100, 150), random(0, 340),backStars,backStars);
				ellipse(random(0, 640), random(0, 340),backStars,backStars);
				ellipse(random(0, 640), random(0, 340),backStars,backStars);
				ellipse(random(0, 640), random(0, 400),backStars,backStars);
		}

	//dude dissapears
		var dudeX = random (1);
		if (dudeX > 0.25) {
				var dudeX;
				dudeX = random(1);
				fill(bsecondColor);
				ellipse(-175,295,70,50);
				ellipse(-84,286,70,50);
				//fill for the face
				fill(bmainColor);
				// draw the face
				var diameter = (150, 150);
				ellipse(-130, 290, diameter-15, diameter);
				//nose
				fill(bsecondColor);
				ellipse(-125,273,16,16);
				ellipse(-140,273,16,16);
				//nostrils
				fill(0,0,0);
				ellipse (-125,268,5,5);
				ellipse (-140,268,5,5);
				//fill for eyes
				fill (whiteColor);
				ellipse (-95,307,diameter-120,diameter-115);
				ellipse (-156,312,diameter-120,diameter-115);
				//pupils
				fill(0,0,0)
				ellipse(-95,300,diameter-135,diameter-130);
				ellipse(-156,305,diameter-135, diameter-130);
				//iris
				fill(whiteColor)
				ellipse(-95,297,diameter-146,diameter-140);
				ellipse(-156,301,diameter-146, diameter-140);
				//mouth
				fill(140,0,3);
				translate(width/12,height/1.25);
				rotate(PI/1.15);
				arc(160,115,50,40,0,PI);
				//tongue
				fill(244,113,113);
				translate(width/4, height/1.85);
				rotate(PI/1.15);
				arc(-30,55,25,12,0,PI);
				//hair
				fill(170,148,126);
				translate(width/4, height/1.85);
				rotate(PI/3);
				arc(-180,180,150,100,0,PI);
				//guy's neck
				fill(bsecondColor);
				translate(width/100, height/400);
				rotate(PI/-10);
				arc(-225,-30,80,80,0,PI);
				//arms
				fill(bmainColor);
				rect(-145,-200,30,150);
				rect(-330,-200,30,150);
				//shade for arms
				fill(bsecondColor)
				rect(-145,-150,30,6);
				rect(-330,-150,30,6);
				//guy's shirt
				fill(38,34,98)
				rect(-300,-200,160,200);
				ellipse(-145,-25,55,55);
				ellipse(-300,-25,55,55);
				rect(-145,-50,40,20);
				rect(-340,-50,40,20);
				//guy's heart
				var diameter = random(150, 150);
				//fill heart
				fill(random(0),random(0),random(255));
				translate(width/17, height/-8);
				rotate(PI/-10);
				ellipse(-270,-100,diameter-135,diameter-120);
				translate(width/17, height/-8);
				rotate(PI/-10);
				ellipse(-287,-160,diameter-120, diameter-135);
				fill(254,252,215);
				ellipse(-20,270,55,55);
				fill(0,51,102);
				ellipse(-30,270,55,55);

		} else {

				fill(bsecondColor);
				ellipse(random(-175,295),random(70,50), dudeX,dudeX);
				ellipse(random(-84,286), random(70,50), dudeX,dudeX);
				//fill for the face
				fill(bmainColor);
				// draw the face
				var diameter = (150, 150);
				ellipse(random(-130, 290), random(diameter-15, diameter),dudeX,dudeX);
				//nose
				fill(bsecondColor);
				ellipse(random(-125,273),random(16,16),dudeX,dudeX);
				ellipse(-140,273,16,16);
				//nostrils
				fill(0,0,0);
				ellipse (random(-125,268),random(5,5), dudeX,dudeX);
				ellipse (-140,268,5,5);
				//fill for eyes
				fill (whiteColor);
				ellipse (random(-95,307),random(diameter-120,diameter-115),dudeX,dudeX);
				ellipse (-156,312,diameter-120,diameter-115);
				//pupils
				fill(0,0,0)
				ellipse(random(-95,300), random(diameter-135,diameter-130),dudeX,dudeX);
				ellipse(random(-156,305),random(diameter-135,diameter-130),dudeX,dudeX);
				//iris
				fill(whiteColor)
				ellipse(random(-95,297),random(diameter-146,diameter-140),dudeX,dudeX);
				ellipse(random(-156,301),random(diameter-146, diameter-140),dudeX,dudeX);
				//mouth
				fill(140,0,3);
				translate(width/12,height/1.25);
				rotate(PI/1.15);
				arc(random(160,115),random(50,40),random(0,PI),dudeX,dudeX);
				//tongue
				fill(244,113,113);
				translate(width/4, height/1.85);
				rotate(PI/1.15);
				arc(random(-30,55),random(25,12),random(0,PI),dudeX,dudeX);
				//hair
				fill(170,148,126);
				translate(width/4, height/1.85);
				rotate(PI/3);
				arc(random(-180,180),random(150,100),random(0,PI), dudeX,dudeX);
				//guy's neck
				fill(bsecondColor);
				translate(width/100, height/400);
				rotate(PI/-10);
				arc(random(-225,-30),random(80,80),random(0,PI),dudeX,dudeX);
				//arms
				fill(bmainColor);
				rect(random(-145,-200),random(30,150),dudeX,dudeX);
				rect(random(-330,-200),random(30,150),dudeX,dudeX);
				//shade for arms
				fill(bsecondColor)
				rect(random(-145,-150),random(30,6),dudeX,dudeX);
				rect(random(-330,-150),random(30,6),dudeX,dudeX);
				//guy's shirt
				fill(38,34,98)
				rect(random(-300,-200),random(160,200),dudeX,dudeX);
				ellipse(random(-145,-25),random(55,55),dudeX,dudeX);
				ellipse(random(-300,-25), random(55,55),dudeX,dudeX);
				rect(random(-145,-50),random(40,20),dudeX,dudeX);
				rect(random(-340,-50),random(40,20),dudeX,dudeX);
				//guy's heart
				var diameter = random(150, 150);
				//fill heart
				fill(random(0),random(0),random(255));
				translate(width/17, height/-8);
				rotate(PI/-10);
				ellipse(random(-270,-100),random(diameter-135,diameter-120),dudeX,dudeX);
				translate(width/17, height/-8);
				rotate(PI/-10);
				ellipse(random(-287,-160),random(diameter-120, diameter-135),dudeX,dudeX);
				fill(254,252,215);
				ellipse(random(-20,270),random(55,55),dudeX,dudeX);
				fill(0,51,102);
				ellipse(random(-30,270),random(55,55),dudeX,dudeX);

	}















}
