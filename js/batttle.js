let SlectionArray = [["たたかう",316],["まほう",351],["あいてむ",386],["にげる",421]];
//選択の数字
let selector = 0;

//斬撃の写真の事前読み込み
const SwordAttack = new Image();
SwordAttack.src = "effect/SwordAttack.png";
//バトルの選択画面
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
    if(!BattleDecision) {
        ctx.strokeStyle = "white" ;
        ctx.lineWidth = 1;
        ctx.rect( 118, SlectionArray[selector][1] - 9, 12, 12 );
        ctx.stroke();
    }
    
}
//何を選択したかによってボトルの行動を変える

function BattleScript() {
    if(BattleDecision) {
        if("たたかう" == SlectionArray[selector][0]) {
            if(_i >= SwordAttack.width / 120) {
                BattleDecision = false;
                _i = 0;
            }
            const _frameX = (_i) % (SwordAttack.width / 120 );
            const _frameY = ~~( (_i) / ( SwordAttack.width / 120 ) );
                        
            ctx.drawImage(
                SwordAttack,
                120*_frameX,
                120*_frameY,
                120,
                120,
                0,
                0,
                80,
                80
                )
            _i++;
        }
        if("にげる" == SlectionArray[selector][0]) {
            WalkCount += 1;
        }
        
    }
}
function sleep(waitMsec) {
    var startMsec = new Date();
  
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }
  