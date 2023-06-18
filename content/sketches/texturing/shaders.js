let lumaShader;
let src;
let img_src;

function preload(){
  
  lumaShader = readShader('../shaders/luma.frag',
    { varyings: Tree.texcoords2 });
  maskShader = readShader('../shaders/mask.frag',
    { varyings: Tree.texcoords2});
  img_src = loadImage('Bogota_Skyline.jpg');
  src = img_src;
  
}

function setup() {
  createCanvas(700, 500, WEBGL);
  noStroke();
  loadPixels();
  image(src, 0, 0, width, height);
  textureMode(NORMAL);
  shader(lumaShader);
  
  video = createVideo(['onagerShot.mp4']);
  video.hide();
  
  videoCheckbox = createCheckbox('Video', false);
  videoCheckbox.changed(onVideoCheckboxChange);
  videoCheckbox.position(20, 40);
  
  selMask = createSelect();
  selMask.option("Identity", 0);
  selMask.option("Luma", 1);
  selMask.option("Ridges", 2);
  selMask.changed(changeMask);
  selMask.position(20, 15);
  
  shader(maskShader);
  //maskShader.setUniform('texOffset', [1, 1]);
  maskShader.setUniform('mask', [0, 0, 0, 0, 1, 0, 0, 0, 0])
  
}

function draw() {
  lumaShader.setUniform('texture', src);
  maskShader.setUniform('texture', src);
  
  if (videoCheckbox.checked()) {
    src = video;
    video.loop();
  } else {
    src = img_src;
    video.pause();
  }
  
  beginShape();
  vertex(-1, -1, 0, 0, 1);
  vertex(1, -1, 0, 1, 1);
  vertex(1, 1, 0, 1, 0);
  vertex(-1, 1, 0, 0, 0);
  endShape();
}

function changeMask(){
  let mask = selMask.value();

  if(mask == 0){
    shader(maskShader);
    maskShader.setUniform('mask', [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  } else if( mask == 1){
    shader(lumaShader);
    lumaShader.setUniform('lightness', true)
  } else if( mask == 2){
    shader(maskShader);
    if(!videoCheckbox.checked()){
      maskShader.setUniform('texOffset',[0.003, 0.003])
      maskShader.setUniform('mask', [0.0, -1.0,  0.0, -1.0,  4.0, -1.0, 0.0, -1.0,  0.0]);
    }else{
      maskShader.setUniform('texOffset',[0.005, 0.005])
      maskShader.setUniform('mask', [0.0,  1.0,  0.0, 1.0, -4.0,  1.0, 0.0,  1.0,  0.0]);
    }
    
  }

}

function onVideoCheckboxChange() {
  if (videoCheckbox.checked()) {
    if (video.elt.readyState !== 4) {
      video.elt.addEventListener('canplay', () => {
        video.loop();
      });
    } else {
      video.loop();
    }
  } else {
    video.pause();
  }
}
