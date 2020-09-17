var speed = 10;
var bal = {
    X: 250,
    Y: 250,
    breedte: 75,
    teken() {
        fill("white");
        ellipse(bal['X'], bal['Y'], this.breedte);
        bal["X"] = constrain(bal["X"], 37.5, 962.5);
        bal["Y"] = constrain(bal["Y"], 37.5, 812.5);
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
            fill('white');
        }
        else {
            fill('green');
        }
        ellipse(this.x, this.y, this.breedte,);
    }
}


function setup() {
    canvas = createCanvas(1000, 850);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function draw() {
    background('silver');
    bal.beweeg();
    eiland.teken();
    bal.teken();
    eiland.wordJeGeraakt(bal);
}