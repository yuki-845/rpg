function enemyEncount() {
    
    ctx.beginPath();
    //背景
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.rect( 37, 284, 162, 123 );
    ctx.strokeStyle = "white" ;
    ctx.lineWidth = 2;
    ctx.stroke() ;
    ctx.rect( 210, 284, 403, 123 );
    ctx.strokeStyle = "white" ;
    ctx.lineWidth = 2;
    ctx.stroke() ;
    

}
