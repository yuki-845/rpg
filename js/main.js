const canvas = document.getElementById("myCanvas");
        

const ctx = canvas.getContext("2d");
var map = [
	[0, 0, 1, 0, 1, 0, 0, 0 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,0],
	[0, 1, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0],
	[0, 0, 1, 1, 0, 0, 0, 1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,0],
	[1, 0, 1, 0, 1, 1, 0, 0 ,0 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,1 ,0 ,1 ,0],
	[0, 0, 0, 0, 0, 1, 1, 1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1 ,0],
	[0, 1, 1, 1, 0, 0, 0, 0 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
	[0, 1, 1, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,0],
	[0, 0, 0, 1, 0, 0, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
	[1, 1, 0, 1, 1, 1, 1, 1 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,1 ,1 ,0 ,1 ,1],
	[1, 0, 0, 0, 0, 0, 1, 1 ,0 ,0 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,1 ,0],
	[1, 0, 1, 1, 1, 0, 0, 0 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0],
	[1, 0, 1, 0, 1, 1, 1, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,1],
	[0, 0, 1, 0, 0, 1, 0, 0 ,1 ,0 ,0 ,1 ,0 ,1 ,0 ,1 ,1 ,1 ,0 ,0],
	[0, 1, 1, 1, 0, 1, 0, 1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,0],
	[0, 0, 0, 1, 0, 1, 0, 0 ,1 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0 ,0 ,0],
	[1, 1, 0, 1, 0, 1, 0, 1 ,1 ,0 ,0 ,1 ,0 ,1 ,1 ,0 ,1 ,1 ,1 ,0],
	[0, 0, 0, 1, 0, 1, 1, 1 ,1 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ,0 ,0 ,1 ,0],
	[0, 1, 1, 1, 0, 1, 0, 0 ,0 ,0 ,0 ,1 ,0 ,0 ,0 ,1 ,1 ,0 ,1 ,1],
	[0, 1, 0, 0, 0, 1, 0, 1 ,1 ,1 ,0 ,0 ,1 ,1 ,0 ,1 ,0 ,0 ,0 ,0],
	[0, 0, 0, 1, 0, 0, 0, 1 ,1 ,1 ,1 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,0]
];

    
const player = new Image();
player.src = "img/player.png";
let Noright = false;
let Noleft = false;
let Nodown = false;
let Noup = false;
        let playerX = 0;
        let playerY = 0;
        const playerSpeed = 6;

        function drawPlayer() {
            
            ctx.drawImage(player, 0, 0);
        }
        function drawMap() {
            let wall = new Image();
            wall.src = "img/wall.png";
            let countR = 0;
            let countL = 0;
            let countD = 0;
            let countU = 0;
            for (var y=0; y<map.length; y++) {
                
                for (var x=0; x<map[y].length; x++) {
                    
                    if ( map[y][x] === 1 ) ctx.drawImage( wall, 32*x - playerX, 32*y - playerY);
                    if(map[y][x] === 1 && 32*x - playerX <= 32 && 32*x - playerX >= 0 && 32*y - playerY <= 35 && 32*y - playerY >= -2) {
                        console.log(x,y)
                        countR++;
                    }
                    if(map[y][x] === 1 && 32*x - playerX >= -32 && 32*x - playerX <= 0 && 32*y - playerY <= 35 && 32*y - playerY >= -2) {
                        console.log(x,y)
                        countL++;
                    }
                    if(map[y][x] === 1 && 32*x - playerX >= 0 && 32*x - playerX <= 32 && 32*y - playerY > 31 && 32*y - playerY < 40) {
                        console.log(x,y)
                        countD++;
                    }
                    if(map[y][x] === 1 && 32*x - playerX >= 0 && 32*x - playerX <= 32 && 32*y - playerY > 31 && 32*y - playerY < 40) {
                        console.log(x,y)
                        countU++;
                    }
                }
                
            }
            if(countR >= 1) {
                Noright = true;
            } else {
                Noright = false;
            }
            if(countL >= 1) {
                Noleft = true;
            } else {
                Noleft = false;
            }
            if(countD >= 1) {
                Nodown = true;
            } else {
                Nodown = false;
            }
            if(countU >= 1) {
                Noup = true;
            } else {
                Noup = false;
            }
        }
        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawMap();
            drawPlayer();
        }

        function keyDownHandler(event) {
            switch (event.key) {
                case "ArrowUp":
                    
                    playerY -= playerSpeed;
                    break;
                case "ArrowDown":
                    if(Nodown) break;
                    playerY += playerSpeed;
                    break;
                case "ArrowLeft":
                    if(Noleft) break;
                    playerX -= playerSpeed;
                    break;
                case "ArrowRight":
                    if(Noright) break;
                    playerX += playerSpeed;
                    break;
            }
        }

        document.addEventListener("keydown", keyDownHandler);

        function gameLoop() {
            update();
            requestAnimationFrame(gameLoop);
        }

        gameLoop();