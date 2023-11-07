// 連想配列の定義
let fruits = {apple:'りんご', strawberry:'いちご', grape:'ぶどう', lemon:'れもん'};

console.log(fruits.grape);     // キーからペアの値を取得する　その2

let keys = Object.keys(fruits);  // キーの一覧を配列として取得

console.log(keys);

let values = Object.values(fruits);  // 値を配列として取得

console.log(values);