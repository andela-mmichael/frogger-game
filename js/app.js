// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    //this.speed = Math.random() * 9 + 1;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.speed += 0.001;
    this.x += (dt * 400);
   /* if(this.x >= 505){
        this.x = -100;
    }*/
}


var melody = new Audio('audio/game-sound.mp3');
//melody.loop() = true;
melody.play();
var move = new Audio('audio/jump.wav');
var hit  = new Audio('audio/collision.wav');

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

function Player(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.reset = function() {
        this.x = 200;
        this.y = 482;
    }
}

var score = 0;
Player.prototype.update = function(){
    if(this.y <= 50){
        score++;
        alert("YOU WIN!");
        this.reset();
    }
   /* if(score === 5){        
        alert("YOU WIN!");
        this.reset();
        score = 0;
    }*/
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    switch (key){
        case 'up':
            if(this.y > 50){
                this.y -= 82;
                move.play();
            }
            
            break;

        case 'down':
            if(this.y < 450){
                this.y += 82;
                move.play();
            }

            break;

        case 'left':
            if(this.x > 0){
                this.x -= 100;
                move.play();
            }

            break;

        case 'right':
            if(this.x < 400){
                this.x += 100;
                move.play();
            }

            break;

        
    }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200, 482);
var allEnemies = [new Enemy(-100,60), new Enemy(-150, 230), new Enemy(-200,145), new Enemy(-250,300)];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
