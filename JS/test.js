var speed = 3;
var dikte = 1000;
var dunte = 800;
var schip = {
    X: 100,
    Y: 100,
    hoogte: 100,
    breedte: 100,
    teken() {
        fill("white");
        image(boot, schip['X'], schip['Y'], this.breedte, this.hoogte);
        schip["X"] = constrain(schip["X"], 0, dikte - this.breedte);
        schip["Y"] = constrain(schip["Y"], 0, dunte - this.hoogte);
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
    X: 150,
    Y: 155,
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

    wordJeGeraakt(schip) {
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

class rots {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
        this.hit = false;
        this.breedte = 30;
        this.hoogte = 45;
    }

    teken() {
        image(steen, rots['X'], rots['Y'], this.breedte, this.hoogte);
    }

    dood() {
        if (dist(this.X + 15, this.Y + 22, hitbox.X, hitbox.Y) <= this.breedte / 2 + hitbox.breedte / 2) {
            this.hit = true;
        }
        else {
            this.hit = false;
        }
    }
}
function preload() {
    palm = loadImage('images/palmboom.png');
    boot = loadImage('images/dikkevetteboot.png')
    steen = loadImage('images/steen.png')
}


function setup() {
    canvas = createCanvas(dikte, dunte);
    background('blue');
    textSize(100);
    canvas.parent('processing');
    steen1 = new rots(200,400);
}

function draw() {
    background('blue');
    schip.beweeg();
    hitbox.beweeg();
    eiland.teken();
    schip.teken();
    boompie.teken();
    steen1.teken();
    steen1.dood();
    eiland.wordJeGeraakt(schip);
    if (steen1.hit) {
        background('red');
        fill('black');
        text("Game over!", 250, 450);
        noLoop();
    }
}