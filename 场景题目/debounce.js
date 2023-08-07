// function debounce(fun, delay) {
//     let timer = null;
//     return function (...args) {
//         const context = this;
//         if (timer) {
//             clearTimeout(timer)
//             timer = null;
//         };
//         timer = setTimeout(() => {
//             fun.apply(context, ...args)
//         }, delay)
//     }
// }


// const debounceFun = function() {
//     console.log(123)
// }

function debounce(fun, wait = 1000) {
    if (typeof fun !== 'function') {
        throw ('type error')
    }
    let timer = null;
    return function (...args) {
        const ctx = this;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fun.apply(ctx, args)
        }, wait);
    }
}

const fun = debounce(debounceFun, 1000);




fun();
console.log(1);
console.log(2);
setTimeout(fun, 1000)
console.log(3);



