// オブジェクトの生成
let apple = {        // 「apple」オブジェクト
    name: 'apple',
    color: 'red',
    price: 200,
    season: 'autumn'
};

let orange = {        // 「orange」オブジェクト
    name: 'orange',
    color: 'yellow',
    price: 150,
    season: 'winter'
};

let grape = {      // 「grape」オブジェクト
    name: 'grape',
    color: 'purple',
    price: 300,
    season: 'summer'
};

// 三つオブジェクトを配列に保存
let fruits = [apple, orange, grape];

// 三つのオブジェクトのプロパティpriceを出力
fruits.forEach(e => {
    console.log(e.name + ':' + e.price + 'yen');
});
