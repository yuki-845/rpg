function CsvMake(x) {
    // CSVファイルを取得
    let csv = new XMLHttpRequest();
 
    // CSVファイルへのパス
     csv.open("GET", x, false);
 
    // csvファイル読み込み失敗時のエラー対応
    try {
    csv.send(null);
    } catch (err) {
    console.log(err);
    }
 
    // 配列を定義
    let CSV = [];
 
    // 改行ごとに配列化
    let lines = csv.responseText.split(/\r\n|\n/);
 
    // 1行ごとに処理
    for (let i = 0; i < lines.length; ++i) {
    let cells = lines[i].split(",");
    if (cells.length != 1) {
        CSV.push(cells);
    }
    }
    return CSV;
}
