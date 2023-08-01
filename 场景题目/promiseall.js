function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(promises)) {
            throw ('promises 需要是可迭代的对象')
        }

        const result = [];
        let count = 0;
        for (let index = 0; index < promises.length; index++) {
            const promise = promises[index];
            Promise.resolve(promise).then(res => {
                result[index] = res;
                count++
                if (count === promises.length) {
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
        throw(11111)
        // resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([1, p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
