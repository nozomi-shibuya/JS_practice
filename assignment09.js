// aの配列をつくる
let array = []
//配列名aの１〜100　３の倍数のみ入っている配列a3を作成
for (let a = 1; a <= 100; a++){
   array.push(a)
}
console.log(array)
//配列名a3を使う
 let a3 = array.filter(e => e % 3 == 0);
   console.log(a3)
// 配列名b5
 let b5 = array.filter(e => e % 5 == 0);
   console.log(b5)