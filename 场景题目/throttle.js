function throttle(fun, delay) {
    let flag = true;
    return function (...args) {
        const context = this;
        if (!flag) {
            return;
        }
        setTimeout(() => {
            flag = true
        }, delay);
        flag = false
        return fun.apply(context, args)
    }
}

const throttleFun = function () {
    console.log(123)
}

const fun = throttle(throttleFun, 1000);




fun();
fun();
fun();
fun();
setTimeout(fun, 1500)
setTimeout(fun, 1200)
setTimeout(fun, 2600)



