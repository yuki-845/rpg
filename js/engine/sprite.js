'use strict'

/**
 * スプライトに関してのクラス
 */
class Sprite {

	/**
	 * 引数
	 * img : 画像ファイルまでのパス
	 */
	constructor( img ) {
		//this.imgに、あなたは画像ですよ、と教える
		this.img = new Image();
		//this.img.srcに画像ファイルまでのパスを代入
		this.img.src = img;
		//画像の初期位置
		this.x = this.y = 0;
	} //constructor() 終了

	/**Gameクラスのメインループからずっと呼び出され続ける
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	update( canvas ) {
		//画像などを画面に表示するためのメソッドを呼び出す
		this.render( canvas );
	} //update() 終了

	/**
	 * 画像などを画面に表示するためのメソッド
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	render( canvas ) {
		//画家さん（コンテキスト）を呼ぶ
		const _ctx = canvas.getContext( '2d' );
		//画家さんに、絵を描いてとお願いする
		_ctx.drawImage( this.img, this.x, this.y );
	} //render() 終了

}