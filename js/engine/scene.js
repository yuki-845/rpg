'use strict'

/**
 * シーンに関してのクラス
 */
class Scene {

	constructor() {
		this.objs = [];
	} //constructor() 終了

	/**
	 * シーンにオブジェクトを追加するときに呼び出されるメソッド
	 *
	 * 引数
	 * obj : スプライトやテキストなど（オブジェクト）
	 */
	add( obj ) {
		//this.objsの末尾に、objを追加
		this.objs.push( obj );
	} //add() 終了

	/**Gameクラスのメインループからずっと呼び出され続ける
	 *
	 * 引数
	 * canvas : 紙（キャンバス）
	 */
	update( canvas ) {
		//スプライトを動かしたり、なにかのきっかけでイベントを発生させたりするために使うメソッドを呼び出す
		this.onenterframe();
	} //update() 終了

	/**
	 * 常に呼び出され、スプライトの移動やイベントの発生などに使うメソッド。空なのはオーバーライド（上書き）して使うため
	 */
	onenterframe() {}

}