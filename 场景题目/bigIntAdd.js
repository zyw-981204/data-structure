function add(a, b) {
    let res = '';
    let temp = 0;
    const aa = a.split('');
    const bb = b.split('');

    while (aa.length || bb.length || temp) {
        const sum = ~~aa.pop() + ~~bb.pop() + temp;
        temp = sum >= 10 ? 1 : 0;
        res = String(sum % 10) + res;
    }
    return res;

}


console.log(add('11', '123'));