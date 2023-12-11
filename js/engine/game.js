'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class Game {

	/**
	 * 引数
	 * width : ゲームの横幅
	 * height : ゲームの縦幅
	 */
	constructor( width, height ) {
		//canvas要素を作成
		this.canvas = document.createElement( 'canvas' );
		//作成したcanvas要素をbodyタグに追加
		document.body.appendChild( this.canvas );
		//canvasの横幅（ゲームの横幅）を設定。もし横幅が指定されていなければ320を代入
		this.canvas.width = width || 320;
		//canvasの縦幅（ゲームの縦幅）を設定。もし縦幅が指定されていなければ320を代入
		this.canvas.height = height || 320;

		//シーンを入れておくための配列
		this.scenes = [];
		//現在のシーンをいれておくためのもの
		this.currentScene;

		//ゲームに使用するキーと、そのキーが押されているかどうかを入れるための連想配列
		//例 { up: false, down: false }
		this.input = {};
		//登録されたキーに割り当てられたプロパティ名と、キー名を、関連づけるための連想配列
		//例 { up: "ArrowUp", down: "ArrowDown" }
		this._keys = {};
	} //constructor() 終了

	/**
	 * startメソッドを呼び出すことで、メインループが開始される
	 */
	start() {
		//デフォルトのキーバインドを登録する（使いたいキーを登録する）
		this.keybind( 'up', 'ArrowUp' );
		this.keybind( 'down', 'ArrowDown' );
		this.keybind( 'right', 'ArrowRight' );
		this.keybind( 'left', 'ArrowLeft' );

		//現在のシーン（currentScene）になにも入っていないときは、scenes[0]を代入
		this.currentScene = this.currentScene || this.scenes[0];

		//メインループを呼び出す
		this._mainLoop();

		//イベントリスナーをセットする
		this._setEventListener();
	} //start() 終了

	/**
	 * イベントリスナーをセットするためのメソッド
	 */
	_setEventListener() {
		//なにかキーが押されたときと、はなされたときに呼ばれる
		const _keyEvent = e => {
			//デフォルトのイベントを発生させない
			e.preventDefault();
			//_keysに登録された数だけ繰り返す
			for ( let key in this._keys ) {
				//イベントのタイプによって呼び出すメソッドを変える
				switch ( e.type ) {
					case 'keydown' :
						//押されたキーが、登録されたキーの中に存在するとき、inputのそのキーをtrueにする
						if ( e.key === this._keys[key] ) this.input[key] = true;
						break;
					case 'keyup' :
						//押されたキーが、登録されたキーの中に存在するとき、inputのそのキーをfalseにする
						if ( e.key === this._keys[key] ) this.input[key] = false;
						break;
				}
			}
		}
		//なにかキーが押されたとき
		addEventListener( 'keydown', _keyEvent, { passive: false } );
		//キーがはなされたとき
		addEventListener( 'keyup', _keyEvent, { passive: false } );
	} //_setEventListener() 終了

	/**
	 * メインループ
	 */
	_mainLoop() {
		//画家さん（コンテキスト）を呼ぶ
		const ctx = this.canvas.getContext( '2d' );
		//塗りつぶしの色に、黒を指定する
		ctx.fillStyle = '#000000';
		//左上から、画面のサイズまでを、塗りつぶす
		ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );

		//現在のシーンのupdateメソッドを呼び出す
		this.currentScene.update();

		//現在のシーンの、ゲームに登場する全てのもの（オブジェクト）の数だけ繰り返す
		for ( let i=0; i<this.currentScene.objs.length; i++ ) {
			//現在のシーンの、すべてのオブジェクトのupdateメソッドを呼び出す
			this.currentScene.objs[i].update( this.canvas );
		}

		//自分自身（_mainLoop）を呼び出して、ループさせる
		requestAnimationFrame( this._mainLoop.bind( this ) );
	} //_mainLoop() 終了

	/**
	 * ゲームにシーンに追加できるようになる、addメソッドを作成
	 *
	 * 引数
	 * scene : 追加したいシーン
	 */
	add( scene ) {
		//引数がSceneのとき、this.scenesの末尾にsceneを追加
		if ( scene instanceof Scene ) this.scenes.push( scene );
		//引数がSceneでなければ、コンソールにエラーを表示
		else console.error( 'Gameに追加できるのはSceneだけだよ！' );
	} //add()終了

	/**
	 * 使いたいキーを登録できるようになる、keybindメソッドを作成
	 *
	 * 引数
	 * name : キーにつける名前
	 * key : キーコード
	 */
	keybind( name, key ) {
		//キーの名前と、キーコードを関連づける
		this._keys[name] = key;
		//キーが押されているかどうかを入れておく変数に、まずはfalseを代入しておく
		this.input[name] = false;
	} //keybind() 終了

}