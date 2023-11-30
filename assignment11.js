let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

console.log(e1.outerHTML);
e1.outerHTML = ('input');

console.log('p2');
e2.innerText = '<p>テキスト文字列</p>';

console.log(e3.id);
e3.id = 'p5';