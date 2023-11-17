for (let i = 10; 0 < i ; i--) {
    let s = '(' + i + '):';
    for (let j = 0 ; j < i; j++) {
        s = s + '*';
    }
    console.log(s);
}