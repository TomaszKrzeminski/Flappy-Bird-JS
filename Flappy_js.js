var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var pipe_ = 100;
var gap = 100;
var score = 0;




var moveX = 280;

var background = new Image();
background.src = "images/background.png";
var bird = new Image();
bird.src = "images/bird.png";
var pipeC = new Image();
pipeC.src = "images/pipeC.png";
var pipeF = new Image();
pipeF.src = "images/pipeF.png";
var Floor = new Image();
Floor.src = "images/floor.png";





var fall = 2;
var birdX = 20;
var birdY = 220;


function move() {
    birdY -= 40;
}

document.addEventListener("keydown", move);




function Random() {


    return Math.floor(Math.random() * 242);
}



let x = 280;

let game = [];
game[0] = { x: 200, y: 242 };

function Draw() {
    ctx.drawImage(background, 0, 0);
     s = document.getElementById("score");
    s.innerHTML = "SCORE :" + score;

    for (var i = 0; i < game.length; i++) {


        ctx.drawImage(pipeC, game[i].x, -(242 - game[i].y));
        ctx.drawImage(pipeF, game[i].x, gap + game[i].y);
        game[i].x--;



        if (game[i].x === 100) {
            game.push({ x: 280, y: Random() });
        }


        if (birdX + bird.width >= game[i].x && birdX <= game[i].x + pipeC.width && (birdY <= game[i].y  || birdY + bird.height >= game[i].y+gap ) || birdY + bird.height >= ctx.height - Floor.height) {
            location.reload(); 
        }

        if (game[i].x === 5) {
            score++;
           
            s.innerHTML = "SCORE :" + score;
        }

       



    }



    ctx.drawImage(Floor, 0, 398);
    ctx.drawImage(bird, birdX, birdY);
    birdY += fall;






    requestAnimationFrame(Draw);
}


Draw();


