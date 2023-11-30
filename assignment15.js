// 商品クラスの生成
class Item {
    // コンストラクタ
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // Idの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName() {
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }
}

class Chair extends Item {
    constructor(id,name,stock,used){
        super(id,name,stock);
        this.used = used;
    }
}

let chair1 = new Chair ('001','パイプ椅子',100, 'used');
let chair2 = new Chair ('002','学習椅子',100,'new');

let itemList = [chair1,chair2]

itemList.forEach((e) => {
    console.log(e);
})

