// function curry(fun, args) {
//     const length = fun.length;
//     const array = args || [];
//     return function () {
//         const nextArgs = array.slice()
//         for (let arg of arguments) {
//             nextArgs.push(arg)
//         }

//         if (nextArgs.length >= length) {
//             return fun.apply(this, nextArgs)
//         } else {
//             return curry.call(this, fun, nextArgs)
//         }
//     }
// }

function curry(fun, args) {
    let length = fun.length;
    const array = args || [];
    return function() {
        const nextArgs = [...array];
        for(let i = 0; i < arguments.length; i++) {
            nextArgs.push(arguments[i]);
        }
        if (nextArgs.length >= length) {
            return fun.apply(this, nextArgs)
        } else {
            return curry.call(this, fun, nextArgs)
        }
    }

}

function sum(a, b, c) {
    return a + b + c
}
// 定义一个柯里化函数
const curried = curry(sum)

// 如果输入了全部的参数，则立即返回结果
console.log(curried(1, 2, 3)) // 6

//如果传入了部分的参数，此时它会返回当前函数，并且等待接收 sum 中的剩余参数
console.log(curried(1)(2, 3)) // 6
console.log(curried(1, 2)(3)) // 6




