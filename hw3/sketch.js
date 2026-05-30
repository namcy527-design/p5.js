/*********************************************
  1. mouse:
		- 마우스 버튼을 클릭하면 다크써클이 생긴다
	2. keyboard:
		- 아무 키나 누르면 글씨 쓰는 속도가 빨라진다
***********************************************/

let handX = 0;
let blinkTimer = 0;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  background(200, 210, 220);

  //배경
  push();
  translate(70, 70);
  fill(255); stroke(50); strokeWeight(3);
  ellipse(0, 0, 80, 80);
  let hr = hour(); let mn = minute(); let sc = second();
  push(); rotate(sc * 6); stroke(255, 0, 0); line(0, 0, 0, -35); pop();
  push(); rotate(mn * 6); stroke(0); strokeWeight(2); line(0, 0, 0, -32); pop();
  push(); rotate((hr % 12) * 30 + mn * 0.5); stroke(0); strokeWeight(3); line(0, 0, 0, -22); pop();
  pop();

  fill(30, 40, 80); stroke(100, 80, 60); strokeWeight(4);
  rect(500, 50, 80, 100);
  noStroke(); fill(255, 255, 150); ellipse(525, 85, 25, 25);

  // 책상+책
  fill(225);
  rect(0, 300, 600, 100);
  fill(250); stroke(200); strokeWeight(1);
  quad(180, 320, 420, 320, 440, 380, 160, 380);
  line(300, 320, 300, 380);
  
  // 셔츠 
  fill(150, 180, 220);
  rect(200, 240, 200, 60, 20, 20, 0, 0); 
  
  fill(140, 170, 210);
  triangle(250, 240, 300, 240, 275, 260);
  triangle(350, 240, 300, 240, 325, 260);

  // --- 4. 인터랙션: 팔 움직임 (긴팔 적용) ---
  let moveSpeed = 5; 
  if (keyIsPressed) moveSpeed = 15; 
  handX = sin(frameCount * moveSpeed) * 8;

  noStroke();
  
  // 왼쪽 팔
  fill(150, 180, 220);
  quad(200, 280, 220, 330, 240, 330, 230, 280)
  
  // 왼쪽 손
  fill(255, 240, 230);
  ellipse(235, 330, 25, 18);

  // 오른쪽 팔이랑 연필
  push();
  translate(handX, 0);
  
  // 오른쪽
  fill(150, 180, 220);
  beginShape(); 
  vertex(390, 250);
  bezierVertex(410, 300, 410, 330, 360, 345);
  vertex(330, 345);
  bezierVertex(370, 330, 380, 290, 360, 250);
  endShape(CLOSE);
  
  // 오른쪽 손
  noStroke();
  fill(255, 240, 230); 
  ellipse(345, 350, 30, 20); 
  
  // 연필
  strokeWeight(4);
  stroke(100, 80, 50); 
  line(345, 350, 325, 330); 
  stroke(50); 
  point(325, 330);
  pop();

  // 눈 깜빡
  push();
  translate(300, 140);
  scale(0.85); 
  drawOriginalFaceDetails(blinkTimer); 
  pop();
}

// 디테일

function drawOriginalFaceDetails(timer) {
  fill(40, 30, 30); noStroke();
  ellipse(0, -30, 220, 230); rect(-110, -30, 220, 130);
  fill(255, 240, 230); stroke(0); strokeWeight(1);
  ellipse(0, 0, 160, 200);
  
 // 목 
  fill(255, 240, 230); noStroke();
  rect(-25, 88, 50, 30); 

  noFill(); stroke(40, 30, 30); strokeWeight(8);

  let isBlinking = (frameCount % 150 < 10);
  
  // 키 누르기
  if (keyIsPressed) {
    writingPoints.push(createVector(325 + handX, 330));
  }
  pop();

  // 얼굴
  push();
  translate(300, 140);
  scale(0.85); 
  drawOriginalFaceDetails(); 
  pop();
}

function drawBackgroundElements() {
  push();
  translate(70, 70);
  fill(255); stroke(50); strokeWeight(3);
  ellipse(0, 0, 80, 80);
  let hr = hour(); let mn = minute(); let sc = second();
  push(); rotate(sc * 6); stroke(255, 0, 0); line(0, 0, 0, -35); pop();
  push(); rotate(mn * 6); stroke(0); strokeWeight(2); line(0, 0, 0, -32); pop();
  push(); rotate((hr % 12) * 30 + mn * 0.5); stroke(0); strokeWeight(3); line(0, 0, 0, -22); pop();
  pop();

  fill(30, 40, 80); stroke(100, 80, 60); strokeWeight(4);
  rect(500, 50, 80, 100);
  noStroke(); fill(255, 255, 150); ellipse(525, 85, 25, 25);
}

function drawOriginalFaceDetails() {
  // 머리카락 & 얼굴형
  fill(40, 30, 30); noStroke();
  ellipse(0, -30, 220, 230); rect(-110, -30, 220, 130);
  fill(255, 240, 230); stroke(0); strokeWeight(1);
  ellipse(0, 0, 160, 200);
  
  // 목 
  fill(255, 240, 230); noStroke();
  rect(-25, 88, 50, 30); 

  // 다크써클 마우스
  if (mouseIsPressed) {
    noStroke();
    fill(100, 80, 120, 150);
    arc(-40, 15, 60, 30, 0, 180); 
    arc(40, 15, 60, 30, 0, 180);
  }

  let isBlinking = (frameCount % 150 < 10);
  
  // 다크써클
  if (isBlinking && !mouseIsPressed) {
    stroke(0); strokeWeight(3);
    line(-60, 0, -20, 0); line(20, 0, 60, 0);
  } else {
    stroke(0); strokeWeight(1); fill(255);
    ellipse(-40, 0, 45, 28); ellipse(40, 0, 45, 28);
    fill(60, 40, 40); ellipse(-40, 0, 18, 18); ellipse(40, 0, 18, 18);
    fill(255); ellipse(-45, -5, 6, 6); ellipse(35, -5, 6, 6);
    // 속눈썹
    stroke(30); strokeWeight(1);
    line(-55,-10, -60,-15); line(-40,-15, -40,-22); line(-25,-10, -20,-15);
    line(25,-10, 20,-15); line(40,-15, 40,-22); line(55,-10, 60,-15);
  }

  // 눈썹, 볼터치, 코, 입
  noFill(); stroke(90, 60, 50, 150); strokeWeight(3);
  arc(-40, -22, 43, 10, 180, 0); arc(40, -22, 43, 10, 180, 0);
  noStroke(); fill(255, 170, 170, 80);
  ellipse(-60, 40, 40, 40); ellipse(60, 40, 40, 40);
  stroke(0); strokeWeight(1); line(0, 10, 0, 35);
  noFill(); stroke(255, 0, 0); strokeWeight(2);
  arc(0, 55, 50, 25, 0, 180);
}


function keyPressed() {
  // 's'나 'S'를 누르면 저장만 하고 다른 키 반응은 안 하게 함
  if (key === 's' || key === 'S') {
    console.log("녹화 시작... 5초만 기다려주세요!"); 
    saveGif('과제3. 움직이는 캐리커처', 5);
  }
}