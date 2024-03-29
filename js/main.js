const canvas = document.getElementById("myCanvas");
        

const ctx = canvas.getContext("2d");

const map = [
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 40, 40, 40, 40, 40, 40, 40, 48, 48, 48, 48, 49, 48, 48, 48, 40, 40, 40, 48, 48, 48, 48, 48, 48, 48, 40, 40, 41, 40, 40, 40, 48, 48, 48, 48, 48, 48, 40, 40, 41, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 48, 48, 48, 40, 48, 48, 48, 48, 49, 18, 6, 73, 74, 6, 6, 48, 48, 48, 48, 49, 41, 41, 40, 41, 41, 40, 40, 41, 48, 48, 48, 49, 49, 40, 40, 41, 40, 48, 40, 41, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 6, 6, 48, 48, 49, 6, 6, 6, 18, 6, 81, 82, 6, 6, 48, 49, 49, 49, 49, 40, 40, 41, 41, 40, 40, 40, 41, 49, 49, 40, 40, 48, 48, 48, 49, 40, 40, 40, 41, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49, 6, 6, 48, 48, 40, 41, 41, 48, 40, 40, 40, 40, 41, 48, 48, 49, 48, 40, 48, 40, 40, 41, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 6, 6, 6, 6, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 18, 18, 6, 6, 40, 40, 41, 40, 48, 48, 48, 40, 40, 41, 49, 41, 41, 41, 41, 48, 40, 41, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 6, 6, 6, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 18, 18, 18, 18, 6, 18, 6, 6, 48, 48, 40, 48, 48, 49, 49, 48, 40, 41, 49, 49, 49, 49, 49, 40, 40, 40, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 6, 6, 6, 6, 18, 18, 18, 6, 6, 6, 6, 6, 6, 18, 6, 6, 18, 18, 18, 6, 6, 6, 48, 48, 48, 49, 48, 49, 49, 48, 49, 49, 48, 49, 40, 40, 41, 48, 40, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 5, 6, 6, 6, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 18, 6, 6, 6, 48, 48, 49, 6, 6, 6, 6, 6, 48, 49, 41, 49, 48, 40, 41, 40, 40, 41],
    [18, 18, 18, 18, 18, 18, 18, 18, 28, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 6, 6, 6, 6, 6, 48, 6, 49, 6, 6, 6, 6, 6, 6, 48, 49, 41, 41, 41, 41, 41, 40, 41],
    [18, 18, 18, 18, 18, 18, 18, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49, 49, 49, 49, 49, 40, 41, 41],
    [18, 18, 18, 18, 18, 6, 18, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49, 48, 49, 49],
    [18, 18, 18, 18, 6, 6, 18, 6, 6, 16, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 18, 6, 6, 6, 6, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 18, 6, 18, 6, 6, 6, 16, 16, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 23, 5, 6, 6, 6, 6, 6, 6, 6, 18, 18, 6, 6, 6, 6, 48, 49, 49, 48, 49],
    [18, 18, 18, 18, 6, 18, 6, 54, 6, 6, 16, 16, 6, 5, 5, 23, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 23, 6, 6, 6, 6, 76, 6, 6, 6, 6, 18, 18, 6, 6, 6, 6, 48, 49, 48, 49],
    [18, 18, 18, 6, 18, 6, 6, 6, 6, 6, 6, 16, 16, 6, 5, 23, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 84, 6, 6, 6, 6, 6, 18, 6, 6, 6, 40, 40, 40, 48, 49],
    [18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 16, 16, 5, 23, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 6, 18, 6, 6, 6, 48, 40, 40, 48, 49],
    [18, 18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 6, 6, 16, 6, 23, 5, 5, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 6, 18, 6, 6, 6, 40, 48, 40, 48, 49],
    [18, 18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 6, 6, 16, 6, 6, 5, 5, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 18, 6, 18, 6, 6, 6, 40, 48, 48, 48, 49],
    [18, 18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 6, 6, 16, 6, 76, 6, 5, 5, 6, 6, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 59, 60, 6, 6, 6, 6, 6, 6, 18, 18, 18, 6, 6, 6, 48, 48, 49, 48, 49],
    [18, 18, 18, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 84, 6, 6, 5, 5, 5, 5, 5, 5, 26, 5, 5, 5, 6, 6, 6, 67, 68, 6, 6, 6, 6, 6, 6, 18, 6, 18, 6, 6, 6, 48, 48, 49, 48, 49],
    [18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49, 48, 49, 41],
    [18, 18, 18, 6, 36, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49, 48, 49, 41],
    [18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 26, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 48, 49, 41],
    [18, 18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 54, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 26, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 48, 49, 40],
    [18, 18, 18, 18, 18, 16, 16, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 48, 49, 40],
    [18, 18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 48, 49, 41],
    [18, 18, 6, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 23, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49, 48, 49],
    [18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 23, 6, 6, 6, 6, 6, 6, 6, 6, 48, 48, 48, 49],
    [18, 18, 18, 6, 6, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 75, 6, 16, 6, 23, 6, 6, 6, 6, 6, 6, 6, 40, 48, 48, 49, 49],
    [18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 76, 6, 6, 6, 6, 5, 6, 6, 6, 16, 6, 6, 6, 83, 6, 16, 6, 23, 5, 5, 5, 6, 6, 6, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 5, 5, 6, 84, 6, 6, 6, 6, 5, 5, 6, 6, 16, 16, 6, 6, 6, 6, 16, 16, 23, 5, 5, 5, 5, 6, 6, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 16, 16, 16, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 6, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 16, 6, 6, 6, 6, 6, 6, 6, 16, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 55, 56, 6, 6, 5, 6, 6, 6, 16, 16, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 6, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 6, 6, 6, 6, 54, 6, 6, 16, 16, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 18, 6, 6, 6, 6, 16, 16, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 22, 22, 6, 6, 6, 6, 6, 6, 6, 6, 55, 56, 6, 6, 6, 6, 6, 5, 6, 48, 49, 41, 48, 49],
    [18, 18, 18, 18, 37, 6, 6, 6, 16, 16, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 30, 30, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 48, 49, 41, 48, 49],
    [18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 6, 6, 6, 22, 22, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 48, 49, 49, 48, 49],
    [18, 18, 18, 18, 6, 6, 6, 16, 6, 6, 6, 6, 5, 30, 30, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 48, 49, 48, 49],
    [18, 18, 18, 18, 6, 16, 16, 16, 6, 6, 6, 6, 5, 6, 6, 6, 6, 55, 56, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 55, 56, 6, 6, 16, 16, 16, 6, 6, 6, 6, 6, 6, 5, 48, 49, 48, 49],
    [18, 18, 18, 18, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 16, 16, 6, 6, 6, 48, 49, 48, 49],
    [18, 18, 18, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 16, 16, 16, 16, 16, 6, 16, 6, 16, 16, 16, 6, 6, 6, 6, 5, 5, 48, 49],
    [18, 18, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 57, 58, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 16, 6, 16, 16, 16, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49],
    [18, 18, 36, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 65, 66, 6, 6, 6, 6, 6, 37, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49],
    [40, 41, 6, 6, 16, 16, 16, 16, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 16, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49],
    [48, 49, 6, 16, 16, 16, 6, 16, 16, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 6, 6, 6, 6, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 48, 49],
    [48, 49, 6, 6, 6, 16, 16, 16, 16, 6, 6, 6, 6, 6, 6, 6, 6, 40, 40, 40, 40, 40, 41, 6, 6, 6, 6, 6, 6, 6, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 40, 40, 48, 49],
    [40, 41, 40, 40, 40, 40, 40, 41, 6, 6, 6, 6, 6, 6, 6, 40, 40, 48, 48, 48, 48, 40, 41, 40, 41, 6, 6, 6, 6, 6, 5, 6, 6, 6, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 41, 40, 40, 48, 48, 49],
    [48, 49, 48, 48, 48, 48, 40, 40, 40, 40, 40, 41, 6, 6, 40, 48, 48, 48, 49, 41, 41, 40, 40, 41, 40, 40, 40, 40, 40, 41, 5, 5, 6, 40, 41, 48, 40, 48, 40, 40, 41, 40, 40, 41, 40, 48, 48, 48, 49, 41],
    [40, 41, 41, 40, 41, 40, 48, 48, 48, 48, 40, 40, 40, 40, 48, 48, 49, 41, 41, 49, 49, 48, 40, 40, 40, 40, 40, 41, 40, 40, 40, 40, 41, 41, 41, 49, 40, 48, 48, 40, 40, 40, 40, 40, 48, 48, 40, 48, 49, 40],
    [48, 49, 49, 48, 49, 48, 49, 48, 48, 49, 48, 48, 48, 48, 49, 49, 49, 49, 49, 48, 49, 49, 40, 48, 48, 48, 40, 40, 41, 40, 48, 48, 49, 49, 49, 49, 48, 49, 48, 48, 48, 48, 48, 48, 48, 49, 48, 48, 49, 40]
]
const player = new Image();
player.src = "img/player.png";
const map_tile = new Image();
map_tile.src = "img/pipo-map001.png";
const umi = new Image();
umi.src = "img/umi.png";
let Noright = false;
let Noleft = false;
let Nodown = false;
let Noup = false;
let playerX = 400;
let playerY = 300;
const playerSpeed = 8;
const baseX = 288;
const baseY = 224;    
//上方向に歩くときのアニメーションに必要な変数
let UpCount = 0;
//下方向に歩くときのアニメーションに必要な変数
let DownCount = 0;
//左方向に歩くときのアニメーションに必要な変数
let LeftCount = 0;
//右方向に歩くときのアニメーションに必要な変数
let RightCount = 0;
//何回歩いたかカウント
let WalkCount = 0;
//bgm
const NormalBattleBGM = new Audio("bgm/NormalBatlle.mp3");

const FieldBgm = new Audio("bgm/FieldBgm.mp3");
NormalBattleBGM.loop = true;
FieldBgm.loop = true;
//ザコ敵の数をランダムで決める 1~3までで
let NumberOfEnemys = 0;
//雑魚敵のどれが出るか配列で決める
let SmallFishEnemyArray = [];
let EnterCount = 0;
let MagicSelect = 0;
        function drawPlayer() {
            let Player_Direction = 1;
            if(UpCount > 0) {
                 Player_Direction = (UpCount % 3) + 9;
            }
            if(DownCount > 0) {
                Player_Direction = (DownCount % 3);
            }
            if(LeftCount > 0) {
                Player_Direction = (LeftCount % 3) + 3;
            }
            if(RightCount > 0) {
                Player_Direction = (RightCount % 3) + 6;
           }
            const _frameX = (Player_Direction) % (player.width / 32 );
            const _frameY = ~~( (Player_Direction) / ( player.width / 32 ) );
            
            ctx.drawImage(
                player,
                32*_frameX,
                32*_frameY,
                32,
                32,
                baseX,
                baseY,
                32,
                32
            );
        }
        
        function drawMap() {
            
            
            for (var y=0; y<map.length; y++) {
                
                for (var x=0; x<map[y].length; x++) {
                    if(map[y][x] === 5) {
                        
                        const _frameX = (map[y][x] - 1) % (umi.width / 32 );
                        const _frameY = ~~( (map[y][x] - 1) / ( umi.width / 32 ) );
                        ctx.drawImage(
                            umi,
                            32*_frameX,
                            32*_frameY,
                            32,
                            32,
                            32*x - playerX,
                            32*y - playerY,
                            32,
                            32
                        );
                    }else {
                        const _frameX = (map[y][x] - 6) % ( map_tile.width / 32 );
                        const _frameY = ~~( (map[y][x] - 6) / ( map_tile.width / 32 ) );
                        ctx.drawImage(
                            map_tile,
                            32*_frameX,
                            32*_frameY,
                            32,
                            32,
                            32*x - playerX,
                            32*y - playerY,
                            32,
                            32
                        );
                    }
                }
                
            }
            
        }
        let _i = 0;
        function update() {
            frameCount++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if(WalkCount % 10 == 7) {
                if(SmallFishEnemyArray.length == 0) {
                    //0:敵の名前 1:敵のHP 2:敵のMP 3:敵の経験値
                NumberOfEnemys = Math.floor( Math.random() * 3 );
                for(let i = 0; i < NumberOfEnemys + 1; i++) {
                    let x = Math.floor( Math.random() * SmallFishEnemyCSV.length );
                    SmallFishEnemyArray.push([x,SmallFishEnemyCSV[x][1],SmallFishEnemyCSV[x][2],SmallFishEnemyCSV[x][3]]);
                }
                console.log(SmallFishEnemyArray)
            }
                PlayerContext();
                EnemyContext();
                BattleSelector();
                BattleScript()
                EnemyAttack();
                BattleText();
                //NormalBattleBGM.play();
                FieldBgm.pause();

            }else {
                
                SmallFishEnemyArray = [];
                //FieldBgm.play();
                NormalBattleBGM.pause();
                drawMap();
                drawPlayer();
            }
            
            
        }

        function keyDownHandler(event) {
            let x = 0;
            let num1 = 0;
            let num2 = 0;

            switch (event.key) {
                case 'Enter':
                    if(WalkCount % 10 == 7) {
                        
                        
                        EnterCount++;
                        if("たたかう" == SlectionArray[selector][0] && EnterCount == 2) {
                            SmallFishEnemyArray[SelectAttack][1] -= 50//characterCSV[1][7];
                        }
                        if(SmallFishEnemyArray[SelectAttack][1] <= 0) {
                            SmallFishEnemyArray.splice(SelectAttack,1)
                            if(SmallFishEnemyArray.length <=0 ) {
                                WalkCount += 1;
                            }
                        }
                        console.log(SmallFishEnemyArray)
                        break;
                    }
                    break;
                case "ArrowUp":
                    if(WalkCount % 10 == 7) {
                        if(EnterCount == 1 && "まほう" == SlectionArray[selector][0]) {
                            MagicSelect = (MagicSelect - 1) % PlayerMagicArray[0].length;
                            if(MagicSelect < 0) {
                                MagicSelect += PlayerMagicArray[0].length
                            }
                            break;
                        }
                        if(EnterCount === 1 || EnterCount == 2) {
                            SelectAttack = (SelectAttack - 1) % SmallFishEnemyArray.length;
                            if(SelectAttack < 0) {
                                SelectAttack += SmallFishEnemyArray.length;
                            }
                            break;
                        }
                        selector = (selector - 1) % 4;
                        if(selector < 0) {
                            selector += 4;
                        }
                        
                        break;
                    }
                    num1 = map[Math.floor(((playerY - playerSpeed) + baseY) / 32)][Math.floor(((playerX) + baseX)/32)];
                    num2 = map[Math.floor(((playerY - playerSpeed) + baseY) / 32)][Math.ceil(((playerX) + baseX)/32)];
                    console.log(num1,num2)
                    
                    if(num1 !== 6 && num1 !== 23) {
                        break;
                    }
                    if(num2 !== 6 && num2 !== 23) {
                        break;
                    }
                    UpCount += 1;
                    RightCount = 0;
                    DownCount = 0;
                    LeftCount = 0;
                    WalkCount++;
                    playerY -= playerSpeed;
                    break;
                case "ArrowDown":
                    num1 = map[Math.ceil(((playerY + playerSpeed) + baseY) / 32)][Math.floor(((playerX) + baseX)/32)];
                    num2 = map[Math.ceil(((playerY + playerSpeed) + baseY) / 32)][Math.ceil(((playerX) + baseX)/32)];
                    console.log(num1,num2)
                    if(WalkCount % 10 == 7) {
                        if(EnterCount == 1 && "まほう" == SlectionArray[selector][0]) {
                            MagicSelect = (MagicSelect + 1) % PlayerMagicArray[0].length;
                            
                            break;
                        }
                        if(EnterCount == 1 || EnterCount == 2) {
                            SelectAttack = (SelectAttack + 1) % SmallFishEnemyArray.length;
                            break;
                        }
                        selector = (selector + 1) % 4;
                        
                        break;
                    }
                    if(num1 !== 6 && num1 !== 23) {
                        break;
                    }
                    if(num2 !== 6 && num2 !== 23) {
                        break;
                    }
                    DownCount++;
                    RightCount = 0;
                    UpCount = 0;
                    LeftCount = 0;
                    WalkCount++;
                    playerY += playerSpeed;
                    break;
                case "ArrowLeft":
                    num1 = map[Math.floor(((playerY) + baseY) / 32)][Math.floor(((playerX - playerSpeed) + baseX)/32)];
                    num2 = map[Math.ceil(((playerY) + baseY) / 32)][Math.floor(((playerX - playerSpeed) + baseX)/32)];
                    console.log(num1,num2)
                    if(WalkCount % 10 == 7) {
                        break;
                    }
                    if(num1 !== 6 && num1 !== 23) {
                        break;
                    }
                    if(num2 !== 6 && num2 !== 23) {
                        break;
                    }
                    LeftCount++;
                    RightCount = 0;
                    UpCount = 0;
                    DownCount = 0;
                    WalkCount++;
                    playerX -= playerSpeed;
                    break;
                case "ArrowRight":
                    num1 = map[Math.floor(((playerY) + baseY) / 32)][Math.ceil(((playerX + playerSpeed) + baseX)/32)];
                    num2 = map[Math.ceil(((playerY) + baseY) / 32)][Math.ceil(((playerX + playerSpeed) + baseX)/32)];
                    console.log(num1,num2)
                    if(WalkCount % 10 == 7) {
                        break;
                    }
                    if(num1 !== 6 && num1 !== 23) {
                        break;
                    }
                    if(num2 !== 6 && num2 !== 23) {
                        break;
                    }
                    RightCount++;
                    LeftCount = 0;
                    UpCount = 0;
                    DownCount = 0;
                    WalkCount++;
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