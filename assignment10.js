// オブジェクトの生成
let apple = {        // 「apple」オブジェクト
    name: 'apple',
    color: 'red',
    weight: 200,
    season: 'autumn'
};

let orange = {        // 「orange」オブジェクト
    name: 'orange',
    color: 'yellow',
    weight: 150,
    season: 'winter'
};

let grape = {      // 「grape」オブジェクト
    name: 'grape',
    color: 'purple',
    weight: 300,
    season: 'summer'
};

// 三つオブジェクトを配列に保存
let fruits = [apple, orange, grape];

// 三つのオブジェクトのプロパティweightの合計額を出力
// function calc_weight(weight){
    // let totalWeight =
    let weight = 0
fruits.forEach(e => {
    weight += e.weight
});
console.log(weight);