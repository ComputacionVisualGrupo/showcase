let vid;
function preload() {
    vid = createVideo('/showcase/sketches/texturing/nyancat.mp4');
    vid.hide();
}

function setup() {
  createCanvas(500, 500, WEBGL);
  describe('spinning cube with a texture from an image');
}

function draw() {
  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //pass image as texture
  texture(vid);
  box(width / 2);
}

function mousePressed() {
    vid.loop();
}
