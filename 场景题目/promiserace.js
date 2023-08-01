function promiseRace(promises) {
    return new Promise(function (resolve, reject) {
        for (let index = 0; index < promises.length; index++) {
            const promise = promises[index];
            Promise.resolve(promise).then(res => resolve(res)).catch(err => reject(err))
        }
    })
}


// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // throw (11111)
        resolve(1)
    }, 4000)
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
promiseRace([ p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
