var speed = 10;
var dikte = 1000;
var dunte = 800;
var bal = {
    X: 250,
    Y: 250,
    hoogte: 100,
    breedte: 100,
    teken() {
        fill("white");
        image(boot, bal['X'], bal['Y'], this.breedte, this.hoogte);
        bal["X"] = constrain(bal["X"], 0, dikte - this.breedte);
        bal["Y"] = constrain(bal["Y"], 0, dunte - this.hoogte);
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

var hitbox = {
    X: 300,
    Y: 305,
    breedte: 100,
    teken() {
        ellipse(this.X, this.Y, this.breedte)
        fill("white");
        hitbox["X"] = constrain(hitbox["X"], 50, dikte - this.breedte / 2);
        hitbox["Y"] = constrain(hitbox["Y"], 50, dunte - this.breedte / 2);
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
        if (dist(this.x, this.y, hitbox.X, hitbox.Y) <= this.breedte / 2 + hitbox.breedte / 2) {
            this.benGeraakt = true;
        }
        else {
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
        ellipse(this.x, this.y, this.breedte);
    }
}

var boompie = {
    X: 440,
    Y: 330,
    breedte: 100,
    hoogte: 100,
    teken() {
        image(palm, boompie['X'], boompie['Y'], this.breedte, this.hoogte);
    },
}

function preload() {
    palm = loadImage('images/palmboom.png');
    boot = loadImage('images/dikkevetteboot.png')
    steen = loadImage('images/steen.png')
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
    hitbox.beweeg();
    boompie.teken();
}