
// コンソールに配列を出力
let characterCSV = CsvMake("csv/character/player.csv");
let SmallFishEnemyCSV = CsvMake("csv/enemy/SmallFishEnemy.csv")

//雑魚敵の今のHP
let SmallFishEnemyHP = SmallFishEnemyCSV[1][1]
console.log(Math.random(9))
function PlayerContext() {
    
    ctx.beginPath();
    //背景
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.rect( 37, 284, 199, 162 );
    ctx.strokeStyle = "white" ;
    ctx.lineWidth = 2;
    ctx.stroke() ;
    ctx.rect( 249, 284, 364, 162 );
    ctx.strokeStyle = "white" ;
    ctx.lineWidth = 2;
    ctx.stroke() ;
    ctx.fillStyle = "white"
    ctx.font = '13px Roboto medium';
    ctx.fillText(characterCSV[1][0],270,373)
    ctx.fillStyle = "white"

    ctx.font = '13px Roboto medium';
    ctx.fillText(characterCSV[0][3],402,305)
    ctx.fillStyle = "white"

    ctx.font = '13px Roboto medium';
    ctx.fillText(characterCSV[0][4],523,305)

    ctx.font = '13px Roboto medium';
    var textWidth = ctx.measureText(`${characterCSV[1][3]}/${characterCSV[1][5]}`).width ;
    
    ctx.fillText(`${characterCSV[1][3]}/${characterCSV[1][5]}`,409 - (textWidth / 2),373)
    textWidth = ctx.measureText(`${characterCSV[1][4]}/${characterCSV[1][6]}`).width ;
    
    ctx.fillText(`${characterCSV[1][4]}/${characterCSV[1][6]}`,534 - (textWidth / 2),373);

    //プレイヤーの写真を描画;
    const _frameX = (4) % (player.width / 32 );
    const _frameY = ~~( (4) / ( player.width / 32 ) );
            
    ctx.drawImage(
        player,
        32*_frameX,
        32*_frameY,
        32,
        32,
        507,
        134,
        32,
        32
    );
}
function EnemyContext() {
    ctx.beginPath();
    //HP
    ctx.font = '13px Roboto medium';
    ctx.fillText("HP",182,305)
    ctx.fillStyle = "white"

   
    for(let i = 0; i < SmallFishEnemyArray.length; i++) {
         //敵の名前を描画
        ctx.font = '12px Roboto medium';
        ctx.fillStyle = "white"
        var textWidth = ctx.measureText(SmallFishEnemyCSV[SmallFishEnemyArray[i]][0].slice(0,SmallFishEnemyCSV[SmallFishEnemyArray[i]][0].length - 4)).width ;
        ctx.fillText(SmallFishEnemyCSV[SmallFishEnemyArray[i]][0].slice(0,SmallFishEnemyCSV[SmallFishEnemyArray[i]][0].length - 4),89 - (textWidth / 2),140 / (NumberOfEnemys + 2) * (i + 1) + 305);

        
        // 敵のHPを描画
        ctx.font = '13px Roboto medium';
        var textWidth = ctx.measureText(`${SmallFishEnemyHP}/${SmallFishEnemyCSV[SmallFishEnemyArray[i]][1]}`).width ;
        ctx.fillText(`${SmallFishEnemyHP}/${SmallFishEnemyCSV[SmallFishEnemyArray[i]][1]}`,192 - (textWidth / 2),140 / (NumberOfEnemys + 2) * (i + 1) + 305)


        //敵の写真を描画
        var img = new Image();
        img.src = `img/enemy/${SmallFishEnemyCSV[SmallFishEnemyArray[i]][0]}`;
        ctx.drawImage(img, 160 - (img.width / 2), ((284 / (NumberOfEnemys + 2)) * (i + 1)) - (img.height / 2));
    }
}
