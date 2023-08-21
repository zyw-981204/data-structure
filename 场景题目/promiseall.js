// function promiseAll(promises) {
//     return new Promise(function (resolve, reject) {
//         if (!Array.isArray(promises)) {
//             throw ('promises 需要是可迭代的对象')
//         }

//         const result = [];
//         let count = 0;
//         for (let index = 0; index < promises.length; index++) {
//             const promise = promises[index];
//             Promise.resolve(promise).then(res => {
//                 result[index] = res;
//                 count++
//                 if (count === promises.length) {
//                     resolve(result)
//                 }
//             }).catch(err => {
//                 reject(err)
//             })
//         }
//     })
// }



// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         if (!Array.isArray(promises)) {
//             throw ('promises 需要是可迭代的对象')
//         }
//         let i = 0;
//         const res = [];
//         for (const key in promises) {
//             const promise = promises[key];
//             Promise.resolve(promise).then(value => {
//                 res[key] = value;
//                 i++;
//                 if (i === promises.length) {
//                     resolve(res)
//                 }
//             }).catch(err => {
//                 reject(err);
//             })
//         }
//     })
// }



function promiseAll(promises) {
    debugger
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject('123')
        }
        const result = [];
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            Promise.resolve(promise).then(value => {
                count++;
                console.log(count);
                result[i] = value;
                if (count === promises.length) {
                    debugger
                    resolve(result)
                }
            }).catch(err => {
                reject(err)
            })
        }
    })
}


// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 1000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([1, p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
