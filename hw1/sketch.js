function setup() {
  createCanvas(600, 400);
  background(135, 206, 235);
// 해
  noStroke()
  fill(255, 204, 0);
  circle(500, 80, 90);

// 구름
  noStroke();
  fill(255, 180);
  ellipse(150, 100, 80, 50);
  ellipse(190, 100, 60, 40);
  ellipse(230, 100, 80, 50);
  
  noStroke();
  fill(255, 180);
  ellipse(370, 70, 80, 50);
  ellipse(410, 70, 60, 40);
  ellipse(450, 70, 80, 50);

// 산
  fill(34, 139, 34, 180);
  quad(0, 280, 150, 120, 400, 400, 0, 400);

  fill(50, 160, 60, 180);
  quad(200, 400, 380, 100, 600, 300, 600, 400);
  
   strokeWeight(30)
  stroke(120, 120, 120, 250)
  line(0, 280, 600, 280)

// 강
  noStroke();
  fill(30, 144, 255, 200);
  quad(0, 300, 0, 400, 600, 400, 600, 300);
  
  arc(30, 300, 300, 20, radians(180), radians(0));
  arc(300, 300, 300, 20, radians(180), radians(0));
  arc(500, 300, 300, 20, radians(180), radians(0));
  
  noStroke();
  fill(255, 255, 255, 120);
  ellipse(100, 360, 20, 5);
  ellipse(200, 340, 40, 7);
  ellipse(300, 350, 30, 5);
  ellipse(400, 330, 35, 10);
  ellipse(500, 340, 45, 12);

// 나무
  noStroke()
  fill(139, 69, 19, 200);
  quad(80, 200, 95, 200, 95, 280, 80, 280);

  fill(144, 238, 100, 230);
  circle(88, 200, 60);
  circle(70, 230, 45);
  circle(105, 230, 45);
  
// 꽃
  fill(144, 238, 144, 200);
  quad(150, 250, 150, 280, 155, 280, 155, 250)
  ellipse(145, 270, 10, 5);
  ellipse(160, 270, 10, 5);
  
  fill(255, 192, 203, 220); 
  ellipse(150, 230, 15, 15);
  ellipse(140, 240, 15, 15);
  ellipse(160, 240, 15, 15);
  ellipse(150, 250, 15, 15);
  
  fill(255, 255, 0);
  circle(150, 240, 10);
  
//바람
  stroke(255, 100);
  strokeWeight(2);
  noFill()

  arc(150, 130, 120, 60, radians(20), radians(180));
  arc(200, 180, 140, 70, radians(0), radians(180));

  line(260, 160, 340, 150);
  line(270, 180, 360, 170);

  arc(380, 220, 160, 80, 0, radians(180));
  
  
  arc(80, 320, 30, 10, radians(0), radians(180));
  arc(112, 320, 30, 10, radians(180), radians(0));
  arc(250, 380, 30, 10, radians(0), radians(180));
  arc(282, 380, 30, 10, radians(180), radians(0));
  arc(500, 370, 30, 10, radians(0), radians(180));
  arc(532, 370, 30, 10, radians(180), radians(0));
}