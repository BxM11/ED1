function setup() {
  var height = 2080;
  createCanvas(windowWidth, height);
  stroke(0);
  var rectheight = 100;
  var rectwidth = 200;
  frameRate(1);
}

function draw() {
  background(220);
  var gradient = 200;
  strokeWeight((height-gradient)*220/(height));

  width = windowWidth;
  var squares = 10;
  var buffer = 20;
  var space = 10;
  var squareSize = (width-2*buffer)/squares-2*space;





  for (var yval = 0; yval<height; yval += (height-gradient)/height){
    stroke(220-(yval)/(height-gradient)*220);
    line(0,gradient+yval,
        windowWidth, gradient+yval);

  }

  for (var x = buffer; x<windowWidth-2*buffer; x += (windowWidth-2*buffer)/squares ){
    for(var y = buffer; y<height-2*buffer; y += (windowWidth-2*buffer)/squares){
      strokeWeight(1);
      fill(y*255/(height-(squareSize+2*space)),
           0,
           0);
      quad(x+space,
           y+space,
          x+space+squareSize,
           y+space,
          x+space+squareSize,
           y+space+squareSize,
          x+space,
          y+space+squareSize);

    }
  }
  noLoop();
}
