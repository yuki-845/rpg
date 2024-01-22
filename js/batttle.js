let SlectionArray = [["たたかう",316],["まほう",351],["あいてむ",386],["にげる",421]];
//選択の数字
let selector = 0;
function BattleSelector() {
    //選択画面の表示
    ctx.beginPath();
    ctx.rect( 106, 284, 136, 162 );
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    //選択文字の表示
    ctx.font = '13px Roboto medium';
    ctx.fillStyle = "white";
    for(let i = 0; i < 4; i++) {
        ctx.fillText(SlectionArray[i][0],160,SlectionArray[i][1])
    }
    //どこを選択しているかを表示する三角形
    ctx.strokeStyle = "white" ;
    ctx.lineWidth = 1;x
    ctx.rect( 118, SlectionArray[selector][1] - 9, 12, 12 );
    ctx.stroke();
}
//何を選択したかによってボトルの行動を変える
function BattleScript() {
    if(BattleDecision) {
        if("たたかう")
        BattleDecision = false;
    }
}