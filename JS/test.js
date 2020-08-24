function preload(){
    pl = loadImage("../images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
}

function draw(){
    for(var nr = 0; nr < 40000; nr++){
    image(pl,0,0,50,50);
    translate(0.01,0)
    }
}
