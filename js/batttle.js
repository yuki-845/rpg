let SlectionArray = [["たたかう",316],["まほう",351],["あいてむ",386],["にげる",421]];
//選択の数字
let selector = 0;

//斬撃の写真の事前読み込み
const SwordAttack = new Image();
SwordAttack.src = "effect/SwordAttack.png";
//"今の主人公が持っている魔法"
let PlayerMagicArray = CsvMake("csv/character/PlayerMagic.csv");
const FireAttack = new Image();
FireAttack.src = "effect/ファイヤ.png";

const knifeEffect = new Audio("SE/ナイフで切る.mp3");

const fire = new Audio("SE/ファイヤ.mp3")
//プレイヤーが攻撃したかどうか把握する
let IsPlayerAttack = false;

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
    if("まほう" == SlectionArray[selector][0] && EnterCount == 1) {
        let x = 316
        for(let i = 0; i < PlayerMagicArray[0].length; i++) {
            ctx.fillText(PlayerMagicArray[0][i],160,x)
            x += 35
        }
        console.log(PlayerMagicArray.length)
        //どこを選択しているかを表示する三角形
        ctx.strokeStyle = "white" ;
        ctx.lineWidth = 1;
        ctx.rect( 118, (316 + (MagicSelect * 35)) - 9, 12, 12 );
        ctx.stroke();
    }else {
    for(let i = 0; i < 4; i++) {
        
        ctx.fillText(SlectionArray[i][0],160,SlectionArray[i][1])
    }
    //どこを選択しているかを表示する三角形
    if(EnterCount != 1) {
        ctx.strokeStyle = "white" ;
        ctx.lineWidth = 1;
        ctx.rect( 118, SlectionArray[selector][1] - 9, 12, 12 );
        ctx.stroke();
    }
}
    
    
}

//何を選択したかによってボトルの行動を変える
function BattleScript() {
    
        if("たたかう" == SlectionArray[selector][0] && EnterCount == 2) {
            if(frameCount % 2 === 0) {
            if(_i >= SwordAttack.width / 120) {
                //プレイヤーが攻撃してから80f敵が攻撃するまで待つ
                if(_i >= (SwordAttack.width / 120 + 40)) {
                    EnterCount = 0;
                    _i = 0;
                    IsPlayerAttack = true;
                    return 0;
                }
                _i++;
                return 0;
            }
            if(_i == 0) {
                knifeEffect.play();
            }
            
            
            const _frameX = (_i) % (SwordAttack.width / 120 );
            const _frameY = ~~( (_i) / ( SwordAttack.width / 120 ) );
                        
            ctx.drawImage(
                SwordAttack,
                120*_frameX,
                120*_frameY,
                120,
                120,
                130,
                ((284 / (NumberOfEnemys + 2)) * (SelectAttack + 1)) - 40,
                90,
                90
                )
            _i++;
            }
        }

        if("まほう" == SlectionArray[selector][0] && EnterCount == 3) {
            if(frameCount % 2 === 0) {
            if(_i >= SwordAttack.width / 120) {
                EnterCount = 0;
                _i = 0;
                IsPlayerAttack = true;
            }
            if(_i == 0) {
                fire.play();
            }
            
            const _frameX = (_i) % (SwordAttack.width / 120 );
            const _frameY = ~~( (_i) / ( SwordAttack.width / 120 ) );
                        
            ctx.drawImage(
                FireAttack,
                120*_frameX,
                120*_frameY,
                120,
                120,
                130,
                ((284 / (NumberOfEnemys + 2)) * (SelectAttack + 1)) - 40,
                90,
                90
                )
            _i++;
            }
        }
        if("にげる" == SlectionArray[selector][0] && EnterCount == 1) {
            EnterCount= 0;
            WalkCount += 1;
        }
        
  
}
const enemyAttack = new Image();
enemyAttack.src = "effect/SwordAttack.png";
//敵の攻撃
let __x = 0;
let __y = 0;
function EnemyAttack() {
    
    if(IsPlayerAttack) {
        
    if(_i % (enemyAttack.width / 120) == 0) {
        
        
        _i = 0;
        console.log(__x,EnterCount)
        if(__x >= (SmallFishEnemyArray.length )) {
            EnterCount = 0;
            IsPlayerAttack = false
            _i = 0;
            __x = 0;
        }
        __y++;
        if(__y < 100) {

            //敵の攻撃の説明,敵が攻撃している間は表示し続ける
            ctx.beginPath();
            ctx.rect( 390, 10, 244, 46 );
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = "white"
            ctx.font = '11px Roboto medium';
            ctx.fillText(`${SmallFishEnemyCSV[SmallFishEnemyArray[__x][0]][0]}の攻撃`,475,35)
            return 0;
        }else {
            __y = 0;
        }
        __x++;
        
            
       
        
    }
    console.log("sss")
    knifeEffect.play();
    const _frameX = (_i) % (enemyAttack.width / 120 );
    const _frameY = ~~( (_i) / ( enemyAttack.width / 120 ) );
                
    ctx.drawImage(
        SwordAttack,
        120*_frameX,
        120*_frameY,
        120,
        120,
        130,
        0,
        90,
        90
        )
    _i++;
}
}
function BattleText() {
    if("まほう" == SlectionArray[selector][0] && EnterCount == 3) {
        ctx.beginPath();
        ctx.rect( 390, 10, 244, 46 );
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();

        //まほうのテキスト挿入
        ctx.fillStyle = "white"
        ctx.font = '20px Roboto medium';
        ctx.fillText("ファイヤ",475,35)
    }
    
}
