'use strict'

//ブラウザがページを完全に読みこむまで待つ
addEventListener( 'load', () => {

	//変数gameに、あなたはゲームですよ、と教える
	const game = new Game();

	//gameに、ゲームをスタートして、とお願いする
	game.start();

} );