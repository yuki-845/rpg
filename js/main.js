
var objs = [];
var x = 0;
var y = 0;
function mainLoop() {
    const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
    var myImage = new Image();
    myImage.src = "img/aru.png";
    const frameX = 0 % (myImage.width / 32 );
	const frameY = ~~( 0 / ( myImage.width / 32 ) );
    
    myImage.onload = () => {
        ctx.drawImage(
			myImage,
			32 * frameX,
			32 * frameY,
			32,
			32,
			x,
			y,
			32,
			32
		);
    }
    
}
addEventListener( 'load', () => {
    
	requestAnimationFrame(mainLoop());
} );