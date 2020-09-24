var speed = 10;
var dikte = 1000;
var dunte = 800;
var bal = {
    X: 250,
    Y: 250,
    hoogte: 80,
    breedte: 100,
    teken() {
        fill("white");
        image(boot, bal['X'], bal['Y'], this.breedte, this.hoogte);
        bal["X"] = constrain(bal["X"], 0, dikte-this.breedte);
        bal["Y"] = constrain(bal["Y"],  0, dunte-this.hoogte);
    },
    beweeg() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.X += speed;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.X += -speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.Y += -speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.Y += speed;
        }
    }
};

var eiland = {
    x: 500,
    y: 425,
    breedte: 150,
    hoogte: 50,
    benGeraakt: false,

    wordJeGeraakt(bal) {
        if (dist(this.x,this.y,bal.X,bal.Y)<=this.breedte/2 + bal.breedte/2) {
            this.benGeraakt = true;
        }
        else{
            this.benGeraakt = false;
        }
    },

    teken() {
        if (this.benGeraakt == true) {
            fill('yellow');
        }
        else {
            fill('green');
        }
        ellipse(this.x, this.y, this.breedte,);
    }
}
function preload(){
    boot = loadImage('images/dikkevetteboot.png')
}


function setup() {
    canvas = createCanvas(dikte, dunte);
    background('blue');
    textSize(30);
    canvas.parent('processing');
}

function draw() {
    background('blue');
    bal.beweeg();
    eiland.teken();
    bal.teken();
    eiland.wordJeGeraakt(bal);
}