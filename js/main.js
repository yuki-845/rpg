'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	//変数gameに、あなたはゲームですよ、と教える
	const game = new Game();

	//歩く速さ
	const WALKING_SPEED = 4;

	//変数sceneに、あなたはシーンですよ、と教える
	const scene = new Scene();

	//変数yamadaに、あなたは山田先生のスプライト画像ですよ、と教える
	const yamada = new Sprite( 'img/yamada.png' );
	//sceneに、山田先生のスプライト画像を追加して、とお願いする
	scene.add( yamada );

	//ループから常に呼び出される
	scene.onenterframe = () => {
		//キーが押されたとき、山田先生が移動する
		if ( game.input.left ) yamada.x -= WALKING_SPEED;
		if ( game.input.right ) yamada.x += WALKING_SPEED;
		if ( game.input.up ) yamada.y -= WALKING_SPEED;
		if ( game.input.down ) yamada.y += WALKING_SPEED;
	} //scene.onenterframe 終了

	//gameに、シーンを追加して、とお願いする
	game.add( scene );

	//gameに、ゲームをスタートして、とお願いする
	game.start();

} );