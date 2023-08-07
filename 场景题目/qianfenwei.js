// function format(s) {
//     const string = s.toString();

//     const length = string.length;
//     // 小数

//     const [zhengshu, xiaoshu] = string.split('.');

//     const tail = xiaoshu ? '.' + xiaoshu : ''

//     if (zhengshu.length <= 3) {
//         return string
//     };

//     const reminder = zhengshu.length % 3;

//     console.log('reminder', reminder, xiaoshu);

//     if (reminder > 0) {
//         return zhengshu.slice(0, reminder) + ',' + zhengshu.slice(reminder).match(/(\d{3})/g).join(',') + tail
//     } else {
//         return zhengshu.slice().match(/(\d{3})/g).join(',') + tail
//     }


// }


function format(num) {
    num = num.toString();
    const [zhengshu, xiaoshu] = num.split('.');
    if (zhengshu.length <= 3) {
        return xiaoshu ? zhengshu + '.' + xiaoshu : zhengshu;
    }

    const reminder = zhengshu.length % 3;

    if (reminder === 0) {
        return zhengshu.match(/\d{3}/g).join(',') + '.' + xiaoshu;
    } else {
        return zhengshu.slice(0, reminder) + ',' + zhengshu.slice(reminder).match(/\d{3}/g).join(',') + '.' + xiaoshu;
    }
}
console.log('format(123456789.111111)', format(1111123456789.111111));