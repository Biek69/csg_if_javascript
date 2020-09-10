var speed = 10;
var knop = {
    x: 500,
    y: 425,
    teken() {
        fill("green");
        rect(knop['x'], knop['y'], 40, 20);
    },
    aanraken() {

    }
};
var bal = {
    X: 250,
    Y: 250,
    teken() {
        fill("white");
        ellipse(bal['X'], bal['Y'], 75);
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

function setup() {
    canvas = createCanvas(1000, 850);
    background('silver');
    textSize(30);
    canvas.parent('processing');
}

function draw() {
    background('silver');
    bal.beweeg();
    knop.teken();
    bal.teken();
}