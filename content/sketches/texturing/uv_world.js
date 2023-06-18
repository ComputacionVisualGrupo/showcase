let easycam;
let uvShader;
let slider;

function preload() {
  uvShader = readShader('/showcase/sketches/texturing/uv.frag',
          { precision: Tree.highp,matrices: Tree.pmvMatrix, varyings: Tree.texcoords2 });
}

function setup() {
  createCanvas(500, 500, WEBGL);
  textureMode(NORMAL);
  shader(uvShader);
  slider = createSlider(0, 255, 0);
  slider.position(350, 10);
}

function draw() {
  background(0);
  uvShader.setUniform('x', slider.value() / 255);
  orbitControl();
  axes();
  push();
  noStroke();
  ellipsoid(width / 4, height / 4, width / 4);
  pop();
}

function mouseWheel(event) {
  return false;
}
