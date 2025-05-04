class Game{
    static score = 0;

    constructor(){
        this.isPlaying = false;
    }
    start(){
        this.isPlaying = true;
        console.log("Game started");
    }
    end(){
        this.isPlaying = false;
        console.log("Game ended");
        Game.updateScore();
    }
    static updateScore(){
        Game.score++;
        console.log("Score: " + Game.score);
    }
}

const game = new Game();
game.start();
game.end();
game.end();
game.end();
game.end();
game.end();