let dist_centro = 0;
let cercania = 5;
let SPIRAL_SIZE = 50;
var R = 0;  
let distSlider;
let sizeSlider;



function setup() {
  createCanvas(800, 800);
  
  // Crear los botones
  let buttonLeft = createButton("Girar a la izquierda");
  buttonLeft.position(10, 10);
  buttonLeft.mouseClicked(girarIzquierda);

  let buttonRight = createButton("Girar a la derecha");
  buttonRight.position(10, 40);
  buttonRight.mouseClicked(girarDerecha);

  // Crear la barra deslizante de tamaño circular
  distSlider = createSlider(1, 10, cercania, 1);
  distSlider.position(10, 70);

  // Crear la barra deslizante de tamaño de la espiral
  sizeSlider = createSlider(10, 100, SPIRAL_SIZE, 10);
  sizeSlider.position(10, 100);
  
}


function girarIzquierda() {
  R = 1;
}
function girarDerecha() {
  R = -1;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  noFill();
  stroke (255);
  if (R>=0){
    R += 0.01;
  }
  else if (R<0){
    R -= 0.01;
  }
  rotate(R);
  
  // Crear la espiral
  beginShape();
  for (let theta = 0; theta < SPIRAL_SIZE; theta += 0.1){
    let r = dist_centro+cercania*theta;
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape();
}

function mouseReleased() {
  SPIRAL_SIZE = sizeSlider.value();
  cercania = distSlider.value();
}
fin
