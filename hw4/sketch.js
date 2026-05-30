let colorDawn, colorMorning, colorNoon, colorSunset, colorNight;
let cycleLength = 300; // 5초(60fps 기준) 동안 하루가 지나도록 설정

function setup() {
  createCanvas(600, 400);
  
  colorDawn = color(100, 100, 150);      
  colorMorning = color(135, 206, 235);   
  colorNoon = color(50, 150, 255);       
  colorSunset = color(255, 150, 10);    
  colorNight = color(20, 24, 50);        
}

function draw() {
  // 1. 낮에 해/밤에 달 교체 
  let stagePhase = (frameCount % cycleLength) / (cycleLength / 5); 
  let bgColor;
  let sunAlpha = 0;
  let moonAlpha = 0;

  if (stagePhase < 1) { 
    // 새벽 -> 아침
    bgColor = lerpColor(colorDawn, colorMorning, stagePhase);
    sunAlpha = map(stagePhase, 0.5, 1, 0, 255, true);
    moonAlpha = map(stagePhase, 0, 0.5, 255, 0, true);
  } else if (stagePhase < 2) { 
    // 아침 -> 점심
    bgColor = lerpColor(colorMorning, colorNoon, stagePhase - 1);
    sunAlpha = 255;
  } else if (stagePhase < 3) { 
    // 점심 -> 해질녘
    bgColor = lerpColor(colorNoon, colorSunset, stagePhase - 2);
    sunAlpha = 255;
  } else if (stagePhase < 4) { 
    // 해질녘 -> 밤
    bgColor = lerpColor(colorSunset, colorNight, stagePhase - 3);
    sunAlpha = map(stagePhase, 3, 3.5, 255, 0, true);
    moonAlpha = map(stagePhase, 3.5, 4, 0, 255, true);
  } else { 
    // 밤 -> 새벽
    bgColor = lerpColor(colorNight, colorDawn,stagePhase - 4);
    moonAlpha = 255;
  }

  background(bgColor);

  // 2. 해와 달 
  let baseSize = 45; 
  let pulseScale = 1 + sin(frameCount * 0.05) * 0.15; // 펄스 효과 비율 (1.0 +/- 0.15)
  let celestialSize = baseSize * pulseScale; // 최종 반지름
  
  // 초승달
  if (moonAlpha > 0) { 
    push(); // 좌표계 저장
    translate(500, 80); // 달의 중심 위치로 이동
    rotate(radians(20)); 
    
    noStroke();
    fill(255, 255, 220, moonAlpha); // 연한 노란색, 시간 투명도 적용
    
    // bezierVertex를 이용한 초승달 도형 직접 그리기
    beginShape();
    // 시작점 (초승달의 위쪽 꼭짓점)
    vertex(0, -celestialSize); 
    // 바깥쪽 곡선 (원형)
    bezierVertex(celestialSize * 0.55, -celestialSize, celestialSize, -celestialSize * 0.55, celestialSize, 0); 
    bezierVertex(celestialSize, celestialSize * 0.55, celestialSize * 0.55, celestialSize, 0, celestialSize); 
    // 안쪽 곡선 (파먹은 모양)
    // 이 부분의 제어점을 조절하여 초승달의 두께를 결정합니다.
    bezierVertex(celestialSize * 0.6, celestialSize * 0.8, celestialSize * 0.6, -celestialSize * 0.8, 0, -celestialSize); 
    endShape(CLOSE);
    pop(); // 좌표계 복원
  }
  
  // 해
  if (sunAlpha > 0) { 
    noStroke();
    fill(255, 204, 0, sunAlpha);
    // 반지름이 celestialSize이므로 원의 지름은 celestialSize * 2
    circle(500, 80, celestialSize * 2);
  }

  // 3. 구름
  let cloudX1 = (frameCount * 1.2) % (width + 200) - 100;
  let cloudX2 = (frameCount * 0.8) % (width + 200) - 100;

  noStroke();
  fill(255, 180);
  ellipse(cloudX1, 100, 80, 50);
  ellipse(cloudX1 + 40, 100, 60, 40);
  ellipse(cloudX1 + 80, 100, 80, 50);
  
  ellipse(cloudX2 + 220, 70, 80, 50);
  ellipse(cloudX2 + 260, 70, 60, 40);
  ellipse(cloudX2 + 300, 70, 80, 50);

  // 4. 산
  fill(34, 139, 34, 180);
  quad(0, 280, 150, 120, 400, 400, 0, 400);

  fill(50, 160, 60, 180);
  quad(200, 400, 380, 100, 600, 300, 600, 400);
  
  strokeWeight(30);
  stroke(120, 120, 120, 250);
  line(0, 280, 600, 280);

  // 5. 강과 윤슬
  noStroke();
  fill(30, 144, 255, 200);
  quad(0, 300, 0, 400, 600, 400, 600, 300);
  
  arc(30, 300, 300, 20, radians(180), radians(0));
  arc(300, 300, 300, 20, radians(180), radians(0));
  arc(500, 300, 300, 20, radians(180), radians(0));
  
  let waveMove = sin(frameCount * 0.05) * 10;
  fill(255, 255, 255, 120);
  ellipse(100 + waveMove, 360, 20, 5);
  ellipse(200 - waveMove, 340, 40, 7);
  ellipse(300 + waveMove, 350, 30, 5);
  ellipse(400 - waveMove, 330, 35, 10);
  ellipse(500 + waveMove, 340, 45, 12);

  // 6. 나무
  noStroke();
  fill(139, 69, 19, 200);
  quad(80, 200, 95, 200, 95, 280, 80, 280);

  let leafScale = 1 + sin(frameCount * 0.04) * 0.1;
  fill(144, 238, 100, 230);
  circle(88, 200, 60 * leafScale);
  circle(70, 230, 45 * leafScale);
  circle(105, 230, 45 * leafScale);
  
  // 7. 꽃
  fill(144, 238, 144, 200);
  quad(150, 250, 150, 280, 155, 280, 155, 250);
  ellipse(145, 270, 10, 5);
  ellipse(160, 270, 10, 5);
  
  fill(255, 192, 203, 220); 
  ellipse(150, 230, 15, 15);
  ellipse(140, 240, 15, 15);
  ellipse(160, 240, 15, 15);
  ellipse(150, 250, 15, 15);
  
  fill(255, 255, 0);
  circle(150, 240, 10);
  
  // 8. 바람
  let windX = sin(frameCount * 0.03) * 15;
  stroke(255, 100);
  strokeWeight(2);
  noFill();

  push();
  translate(windX, 0);
  arc(150, 130, 120, 60, radians(20), radians(180));
  arc(200, 180, 140, 70, radians(0), radians(180));
  line(260, 160, 340, 150);
  line(270, 180, 360, 170);
  arc(380, 220, 160, 80, 0, radians(180));
  pop();
  
  arc(80 + windX, 320, 30, 10, radians(0), radians(180));
  arc(112 + windX, 320, 30, 10, radians(180), radians(0));
  arc(250 - windX, 380, 30, 10, radians(0), radians(180));
  arc(282 - windX, 380, 30, 10, radians(180), radians(0));
  arc(500 + windX, 370, 30, 10, radians(0), radians(180));
  arc(532 + windX, 370, 30, 10, radians(180), radians(0));
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('과제4. 움직이는 추상화', 5); 
  }
}