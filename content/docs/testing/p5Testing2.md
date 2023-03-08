# P5 Testing!

Este es otra prueba con código de prueba:

 {{< p5-iframe ver="1.5.0" sketch="/path/to/sketch.js"width="800" height="600" >}}
 
 const s = ( sketch ) => {
 {{< p5-iframe ver="1.5.0" sketch="/path/to/sketch.js"width="800" height="600" >}} 
 
 {{< p5-div ver="1.5.0" sketch="/path/to/sketch.js" >}}

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};

let myp5 = new p5(s); 
 
 {{< p5-div ver="1.5.0" sketch="/path/to/sketch.js" lib1="https://cdntolib1/lib1.js" >}}

Fin.
