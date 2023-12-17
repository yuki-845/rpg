document.addEventListener('DOMContentLoaded', function () {
    // Canvas要素を取得
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // 画像のパスのリスト
    const map = [
		[11,11,11,11,11,11,11,11,11,11],
		[11,10,10,10,10,10,10,10,10,11],
		[11, 4, 4, 4, 4, 4, 4, 4, 4,11],
		[11, 4,11, 4, 4,11,11,11, 4,11],
		[11, 4,11,11,11,11,10,10, 4,11],
		[11, 4,11,10,10,11, 4, 4, 4,11],
		[11, 4,11, 4, 4,11,11,11, 4,11],
		[11, 4, 9, 4, 4, 9,10,11, 4,11],
		[11, 4, 4, 4, 4, 4, 4,11, 4,11],
		[11,11,11,11,11,11,11,11,11,11]
	];

    // 画像を読み込むための関数
    function loadImage(path, callback) {
        var img = new Image();
        img.onload = function () {
            callback(img);
        };
        img.src = path;
    }

    // 画像を描画するための関数
    function drawImageOnCanvas(image, x, y) {
        ctx.drawImage(image, x, y, 32, 32); // 画像のサイズは適宜調整
    }

    // すべての画像を描画する
    function drawAllImages() {
        var x = 0;
        var y = 0;

        for (var i = 0; i < map.length; i++) {
            loadImage("img/tile.png", function (image) {
                //X方向に、何番目の画像か
				const frameX = map[y][x] % ( image.width / 32 );
				//Y方向に、何番目の画像か
				const frameY = ~~( map[y][x] / ( image.width / 32 ) );
                drawImageOnCanvas(image, x, y);
                x += 120; // 画像の間隔を調整
            });
        }
    }

    // 画像の描画を開始
    drawAllImages();
});
