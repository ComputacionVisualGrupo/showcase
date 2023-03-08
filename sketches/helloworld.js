const s = ( sketch ) => {
  let x = 100;
  let y = 100;

  sketch.draw = function() {   // draw() is an inner function, a "closure"
    sketch.rect(x,y,50,50);    // draw() uses variables (x,y) declared in the parent function s
  };
};