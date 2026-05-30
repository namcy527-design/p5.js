function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  
  
  background(200, 210, 220);

  // 머리카락
  fill(40, 30, 30);
  noStroke();
  ellipse(300, 170, 220, 240);
  rect(190, 180, 220, 120)

  // 얼굴형
  fill(255, 240, 230);
  stroke(0);
  strokeWeight(1);
  ellipse(300, 200, 160, 200);

  // 앞머리
  noFill()
  stroke(40, 30, 30);
  strokeWeight(8);
  line(300, 100, 300, 170)
  line(285, 100, 285, 170)
  line(315, 100, 315, 170)
  line(270, 100, 270, 170)
  line(330, 100, 330, 170)
  arc(245, 130, 20, 90, radians(300), radians(90))
  arc(355, 130, 20, 90, radians(90), radians(300))
  arc(225, 150, 20, 100, radians(300), radians(90))
  arc(375, 150, 20, 100, radians(90), radians(300))
  // 눈
  stroke(0);
  strokeWeight(1)
  fill(255);
  ellipse(260, 200, 45, 28);
  ellipse(340, 200, 45, 28);
  fill(60, 40, 40);
  ellipse(260, 200, 18, 18);
  ellipse(340, 200, 18, 18);
  fill(255);
  ellipse(255, 195, 6, 6);
  ellipse(335, 195, 6, 6);
   // 속눈썹
  stroke(30);
  strokeWeight(1);
  line(245, 190, 240, 185);
  line(260, 185, 260, 178);
  line(275, 190, 280, 185);
  line(325, 190, 320, 185);
  line(340, 185, 340, 178);
  line(355, 190, 360, 185);
   // 볼
  noStroke();
  fill(255, 170, 170, 80);
  ellipse(240, 240, 40, 40);
  ellipse(360, 240, 40, 40);
  // 눈썹
  noFill()
  stroke(90, 60, 50, 150);
  strokeWeight(3);
  arc(260, 180, 43, 10, radians(180), radians(0))
  arc(340, 180, 43, 10, radians(180), radians(0))
  // 코
  strokeWeight(1);
  line(300, 210, 300, 235);
  // 입
  noFill();
  stroke(255, 0, 0);
  arc(300, 255, 50, 25, radians(0), radians(180));
  // 귀
  fill(255, 240, 230);
  noStroke()
  arc(220, 210, 30, 50, radians(75), radians(270));
  arc(380, 210, 30, 50, radians(270), radians(100));
  // 목
  noStroke();
  fill(255, 240, 230);
  rect(275, 290, 50, 30);
  // 셔츠
  fill(150, 180, 220);
  rect(185, 310, 230, 100, 30);
  rect(185, 360, 230, 100);
  fill(140, 170, 210);
  triangle(220, 310, 300, 310, 260, 340);
  triangle(380, 310, 300, 310, 340, 340);
  // 단추
  fill(255);
  ellipse(300, 330, 8);
  ellipse(300, 350, 8);
  ellipse(300, 370, 8);
  ellipse(300, 390, 8);

}